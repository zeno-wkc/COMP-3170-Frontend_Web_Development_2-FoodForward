import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./PhotoApp.css";

const PhotoApp = ({ isEditing, currentPhoto, onPhotoChange }) => {
  const [photoSource, setPhotoSource] = useState(currentPhoto);
  const [activeCamera, setActiveCamera] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const videoRef = useRef(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const CloseCircle = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.707 9.293C14.316 8.902 13.684 8.902 13.293 9.293L12 10.586L10.707 9.293C10.316 8.902 9.684 8.902 9.293 9.293C8.902 9.684 8.902 10.316 9.293 10.707L10.586 12L9.293 13.293C8.902 13.684 8.902 14.316 9.293 14.707C9.488 14.902 9.744 15 10 15C10.256 15 10.512 14.902 10.707 14.707L12 13.414L13.293 14.707C13.488 14.902 13.744 15 14 15C14.256 15 14.512 14.902 14.707 14.707C15.098 14.316 15.098 13.684 14.707 13.293L13.414 12L14.707 10.707C15.098 10.316 15.098 9.684 14.707 9.293ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z"
        fill="#FFFFFF"
      />
    </svg>
  );

  useEffect(() => {
    // Detect if the user is on a mobile device
    const userAgent = navigator.userAgent || navigator.userAgentData;
    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    setIsMobile(mobileRegex.test(userAgent));
  }, []);

  const openCamera = async () => {
    if (isMobile) {
      document.getElementById("photo-camera-mobile").click();
      return;
    }

    try {
      setShowModal(true);
      setActiveCamera(true);
    } catch (error) {
      console.error("Error opening the camera:", error);
      alert("Unable to access the camera.");
    }
  };

  useEffect(() => {
    const enableCamera = async () => {
      if (activeCamera && videoRef.current) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "user" },
          });
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        } catch (error) {
          console.error("Error accessing camera:", error);
          alert("Unable to access the camera.");
        }
      }
    };

    enableCamera();

    return () => {
      if (videoRef.current?.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, [activeCamera]);

  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const photo = canvas.toDataURL("image/jpg");
    setCapturedPhoto(photo);

    const stream = video.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach((track) => track.stop());
    video.srcObject = null;
    setActiveCamera(false);
  };

  const handlePhotoAlbum = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 6 * 1024 * 1024) {
        alert("File size exceeds the limit of 2MB.");
        return;
      }
      const imageUrl = URL.createObjectURL(file);
      setPhotoSource(imageUrl);
      onPhotoChange(imageUrl);
    }
  };

  const resetPhoto = () => {
    setCapturedPhoto(null);
    setActiveCamera(true);
  };

  const closeModal = () => {
    setCapturedPhoto(null);
    setActiveCamera(false);
    setShowModal(false);
  };

  const confirmPhoto = () => {
    setPhotoSource(capturedPhoto);
    onPhotoChange(capturedPhoto);
    closeModal();
  };

  return (
    <div>
      {!photoSource && !activeCamera && !showModal && (
        <div className="button_container">
          <h3 className="photo-title">Please provide the photo of food item:</h3>
          <img
            src="./default-img.png"
            width={200}
            height={200}
            alt="Captured"
            className="photo-app-img"
          />
          <button onClick={openCamera} className="photo-app-btn">
            Open Camera
          </button>
          <label htmlFor="photo-album" className="photo-app-btn">
            Choose from Album
          </label>
          <input
            id="photo-album"
            type="file"
            accept="image/*"
            onChange={handlePhotoAlbum}
            style={{ display: "none" }}
          />
          <input
            id="photo-camera-mobile"
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handlePhotoAlbum}
            style={{ display: "none" }}
          />
        </div>
      )}

      {showModal && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <button onClick={closeModal} className="photo-app-close-btn">
              <CloseCircle />
            </button>
            {activeCamera && (
              <div>
                <h3 className="photo-title">Take a photo of the food item:</h3>
                <video ref={videoRef} autoPlay className="photo-app-video"></video>
                <button onClick={capturePhoto} className="photo-app-btn">
                  Take Photo
                </button>
              </div>
            )}
            {capturedPhoto && (
              <div>
                <h3 className="photo-title">Photo Preview:</h3>
                <img
                  src={capturedPhoto}
                  alt="Captured"
                  className="photo-app-img"
                />
                <button onClick={resetPhoto} className="photo-app-btn">
                  Retake Photo
                </button>
                <button onClick={confirmPhoto} className="photo-app-btn">
                  Confirm Photo
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {photoSource && !showModal && (
        <div>
          <h3 className="photo-title">Food Photo:</h3>
          <img src={photoSource} alt="Food" className="photo-app-img" />
          {isEditing && (
            <div>
              <button onClick={openCamera} className="photo-app-btn">
                Retake Photo
              </button>
              <label htmlFor="photo-album" className="photo-app-btn">
                Choose from Album
              </label>
              <input
                id="photo-album"
                type="file"
                accept="image/*"
                onChange={handlePhotoAlbum}
                style={{ display: "none" }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

PhotoApp.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  currentPhoto: PropTypes.string,
  onPhotoChange: PropTypes.func.isRequired,
};

const modalStyle = {
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: "1000",
  margintop: "100",
  marginBottom: "100",
};

const modalContentStyle = {
  position: "relative",
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "10px",
  width: "80%",
  maxWidth: "500px",
  marginLeft: "15px",
  marginRight: "15px",
  overflowY: "scroll",
};

export default PhotoApp;
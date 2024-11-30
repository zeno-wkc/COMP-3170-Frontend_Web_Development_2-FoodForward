import React, { useState, useEffect, useRef } from "react";

const PhotoApp = ({ isEditing, currentPhoto, onPhotoChange }) => {
  const [photoSource, setPhotoSource] = useState(currentPhoto);
  const [activeCamera, setActiveCamera] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const videoRef = useRef(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);

  useEffect(() => {
    setPhotoSource(currentPhoto);
  }, [currentPhoto]);

  const openCamera = async () => {
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
          console.log(videoRef.current);
          const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } });
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        } catch (error) {
          console.error("Error accessing camera:", error);
          alert("Unable to access the camera.");
        }
      }
    };

    enableCamera();
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
    const tracks = stream.getTracks({ audio: false, video: true });
    tracks.forEach((track) => track.stop());
    video.srcObject = null;
    setActiveCamera(false);
  };

  const handlePhotoAlbum = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPhotoSource(imageUrl);
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
    <div style={upload_photo_container}>
      <h3>Add the photo of food</h3>
      {!photoSource && !activeCamera && !showModal && (
        <div style={photo_container}>
          <div style={placeholder}>
            <img src="./public/upload icon.png" alt="upload" style={photoIconStyle}></img>
            <img src="./public/food_placeholder.png" alt="food items" style={foodIconStyle}></img>
          </div>
          <button onClick={openCamera} style={buttonStyle}>Open Camera</button>
          <label htmlFor="photo-album" style={buttonStyle}>Choose from Album </label>
          <input id="photo-album" type="file" accept="image/*" onChange={handlePhotoAlbum} style={{ display: "none" }} />
        </div>
      )}

      {showModal && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <button onClick={closeModal} style={closeButtonStyle}>X</button>
            {activeCamera && (
              <div>
                <video ref={videoRef} autoPlay style={{ width: "100%", height: "auto", border: "1px solid black", marginTop: "10px" }} ></video>
                <button onClick={capturePhoto} style={buttonStyle}>
                  Take Photo
                </button>
              </div>
            )}
            {capturedPhoto && (
              <div>
                <h3>Photo Preview:</h3>
                <img src={capturedPhoto} alt="Captured" style={imageStyle} />
                <button onClick={resetPhoto} style={buttonStyle}>
                  Retake
                </button>
                <button onClick={confirmPhoto} style={buttonStyle}>
                  Confirm
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {photoSource && !showModal && (
        <div>
          <p>a</p>
          <img src={photoSource} alt="Captured" style={imageStyle} />
          <div>
            {isEditing && (
              <>
                <button onClick={openCamera} style={buttonStyle}>Retake Photo</button>
                <label htmlFor="photo-album" style={buttonStyle}>Choose from Album</label>
                <input
                  id="photo-album"
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoAlbum}
                  style={{ display: "none" }}
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const buttonStyle = {
  backgroundColor: "#007bff",
  color: "#fff",
  padding: "10px 20px",
  margin: "10px",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer",
};

const closeButtonStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  backgroundColor: "#dc3545",
  color: "#fff",
  padding: "5px 10px",
  borderRadius: "50%",
  border: "none",
  cursor: "pointer",
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
};

const modalContentStyle = {
  position: "relative",
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "10px",
  width: "90%",
  maxWidth: "500px",
};

const imageStyle = {
  width: "100%",
  maxWidth: "400px",
  borderRadius: "8px",
  marginTop: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const photoIconStyle = {
  width: "50px",
  height: "20px",
  margin: "20px",
};

const upload_photo_container = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const photo_container = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const foodIconStyle = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const placeholder = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

export default PhotoApp;

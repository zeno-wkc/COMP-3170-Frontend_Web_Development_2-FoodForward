import React, { useState } from "react";

function PhotoApp() {
  const [photoSource, setPhotoSource] = useState(null); // Holds the photo (camera or album)
  const [isUsingCamera, setIsUsingCamera] = useState(false); // Toggles camera mode

  // Access the camera and take a photo
  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const video = document.querySelector("video");
      video.srcObject = stream;
      video.play();
      setIsUsingCamera(true);
    } catch (error) {
      alert("Unable to access the camera. Please ensure permissions are granted.");
    }
  };

  // Capture photo from the camera
  const capturePhoto = () => {
    const video = document.querySelector("video");
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const photo = canvas.toDataURL("image/png");
    setPhotoSource(photo);

    // Stop the camera
    const stream = video.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach((track) => track.stop());
    video.srcObject = null;
    setIsUsingCamera(false);
  };

  // Handle photo album selection
  const handlePhotoAlbum = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPhotoSource(imageUrl);
    }
  };

  // Retake or reset photo
  const resetPhoto = () => {
    setPhotoSource(null);
    setIsUsingCamera(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Photo App</h2>

      {/* Show buttons if no photo is taken/selected */}
      {!photoSource && !isUsingCamera && (
        <div>
          <button
            onClick={openCamera}
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              padding: "10px 20px",
              margin: "10px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Take Photo
          </button>
          <label
            htmlFor="photo-album"
            style={{
              backgroundColor: "#28a745",
              color: "#fff",
              padding: "10px 20px",
              margin: "10px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
            }}
          >
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

      {/* Show video stream when using the camera */}
      {isUsingCamera && (
        <div>
          <video autoPlay style={{ width: "100%", maxWidth: "400px", margin: "10px auto" }}></video>
          <button
            onClick={capturePhoto}
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              padding: "10px 20px",
              margin: "10px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Capture Photo
          </button>
          <button
            onClick={resetPhoto}
            style={{
              backgroundColor: "#dc3545",
              color: "#fff",
              padding: "10px 20px",
              margin: "10px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
        </div>
      )}

      {/* Show the captured or selected photo */}
      {photoSource && (
        <div>
          <h3>Photo Preview:</h3>
          <img
            src={photoSource}
            alt="Captured"
            style={{
              width: "100%",
              maxWidth: "400px",
              borderRadius: "8px",
              marginTop: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          />
          <div>
            <button
              onClick={resetPhoto}
              style={{
                backgroundColor: "#ffc107",
                color: "#000",
                padding: "10px 20px",
                margin: "10px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Retake/Choose Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PhotoApp;

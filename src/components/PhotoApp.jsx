import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./PhotoApp.css";

const PhotoApp = ({ isEditing, currentPhoto, onPhotoChange }) => {
  const [photoSource, setPhotoSource] = useState(currentPhoto);

  const handlePhotoAlbum = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // Updated limit to 5MB
        alert("File size exceeds the limit of 5MB.");
        return;
      }
      const imageUrl = URL.createObjectURL(file);
      setPhotoSource(imageUrl);
      onPhotoChange(imageUrl);
    }
  };

  return (
    <div>
      {!photoSource && (
        <div className="button_container">
          <h3 className="photo-title">Please provide the photo of food item:</h3>
          <img
            src="./default-img.png"
            width={200}
            height={200}
            alt="Default"
            className="photo-app-img"
          />
          <label htmlFor="photo-camera" className="photo-app-btn">
            Open Camera
          </label>
          <input
            id="photo-camera"
            type="file"
            accept="image/*"
            capture="environment" // Use "user" for the front-facing camera
            onChange={handlePhotoAlbum}
            style={{ display: "none" }}
          />
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

      {photoSource && (
        <div>
          <h3 className="photo-title">Food Photo:</h3>
          <img src={photoSource} alt="Food" className="photo-app-img" />
          {isEditing && (
            <div>
              <label htmlFor="photo-camera" className="photo-app-btn">
                Retake Photo
              </label>
              <input
                id="photo-camera"
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handlePhotoAlbum}
                style={{ display: "none" }}
              />
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
  marginBottom: "100",
};

const modalContentStyle = {
  position: "relative",
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "10px",
  width: "90%",
  maxWidth: "500px",
  marginLeft: "15px",
  marginRight: "15px",
};

export default PhotoApp;

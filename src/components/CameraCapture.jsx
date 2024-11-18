import React, { useRef, useState } from 'react';

function CameraCapture() {
  const videoRef = useRef(null); // Reference for the video element
  const canvasRef = useRef(null); // Reference for the canvas element
  const [photo, setPhoto] = useState(null); // State for the captured photo
  const [isCameraOn, setIsCameraOn] = useState(false); // State to toggle the camera

  // Start the camera
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true }); // Access the camera
      videoRef.current.srcObject = stream; // Set the video source to the camera stream
      videoRef.current.play(); // Play the video
      setIsCameraOn(true);
    } catch (error) {
      console.error("Error accessing camera:", error);
      alert("Unable to access the camera. Please ensure permissions are granted.");
    }
  };

  // Capture the photo
  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Set canvas dimensions to match the video feed
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw the current video frame onto the canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert the canvas content to a data URL (base64)
    const imageDataURL = canvas.toDataURL('image/png');
    setPhoto(imageDataURL); // Save the captured photo
    stopCamera(); // Stop the camera after capturing
  };

  // Stop the camera
  const stopCamera = () => {
    const stream = videoRef.current.srcObject;
    if (stream) {
      stream.getTracks().forEach((track) => track.stop()); // Stop all video tracks
    }
    setIsCameraOn(false);
  };

  // Retake the photo
  const retakePhoto = () => {
    setPhoto(null); // Clear the photo
    startCamera(); // Restart the camera
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Camera Capture</h2>

      {photo ? (
        // Display the captured photo
        <>
          <img
            src={photo}
            alt="Captured"
            style={{ width: '300px', height: 'auto', borderRadius: '10px', marginBottom: '20px' }}
          />
          <br />
          <button onClick={retakePhoto} style={{ padding: '10px 20px', cursor: 'pointer' }}>
            Retake Photo
          </button>
        </>
      ) : (
        <>
          {isCameraOn ? (
            <>
              {/* Display the video feed */}
              <video ref={videoRef} style={{ width: '300px', height: 'auto', borderRadius: '10px' }} />
              <br />
              <button onClick={capturePhoto} style={{ margin: '10px', padding: '10px 20px', cursor: 'pointer' }}>
                Capture Photo
              </button>
              <button onClick={stopCamera} style={{ padding: '10px 20px', cursor: 'pointer' }}>
                Stop Camera
              </button>
            </>
          ) : (
            <button onClick={startCamera} style={{ padding: '10px 20px', cursor: 'pointer' }}>
              Start Camera
            </button>
          )}
        </>
      )}

      {/* Hidden canvas to process the photo */}
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
}

export default CameraCapture;
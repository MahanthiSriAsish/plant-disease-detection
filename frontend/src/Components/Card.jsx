// Card.js

import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import '../css/Card.css';
import axios from "axios";

const Card = () => {
  const webcamRef = useRef(null);
  const [showCamera, setShowCamera] = useState(false);
  const [Prediction,setPrediction] =useState(null);
  const [photo, setPhoto] = useState(null);

  

  const handleStartCamera = () => {
    setShowCamera(true);
  };
  
  const handleCapturePhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setPhoto(imageSrc);
  
    const handlePredict = async (photo) => {
      const formData = new FormData();
      formData.append('image', photo);
  
      try {
        const response = await axios.post('http://localhost:5000/api/predict', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
  
        setPrediction(response.body);
        console.log(Prediction);
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    // Call the handlePredict function with the imageSrc as the argument.
    handlePredict(imageSrc);
  };
  

  return (
    <div className="card">
      {showCamera ? (
        <div className="camera-container">
          <Webcam
            ref={webcamRef}
            mirrored={true}
            audio={false}
            screenshotFormat="image/jpeg"
          />
          <button className="capture-button" onClick={handleCapturePhoto}>
            confirm snap
          </button>
          {photo && (
            <img src={photo} alt="Captured" className="captured-image" />
          )}
        </div>
      ) : (
        <>
            <button className="card-button" onClick={handleStartCamera}> open Camera </button>
        </>
      )}
    </div>
  );
};

export default Card;

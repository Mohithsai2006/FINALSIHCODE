import React from "react";

const Predictions = () => {
  // List of images in the hello folder
  const images = [
    "/hello/Screenshot 2024-12-12 164650.png",
    "/hello/Screenshot 2024-12-12 164700.png",
    "/hello/Screenshot 2024-12-12 164732.png",
    "/hello/Screenshot 2024-12-12 164753.png",
    "/hello/image.png",
    "/hello/Screenshot 2024-12-12 172834.png",
    "/hello/Screenshot 2024-12-12 174646.png",
    "hello/Screenshot 2024-12-12 174658.png"

  ];

  return (
    <div className="predictions-page">
      <h1>Predictions</h1>
      <div className="image-gallery">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Prediction ${index + 1}`} className="gallery-image" />
        ))}
      </div>
    </div>
  );
};

export default Predictions;

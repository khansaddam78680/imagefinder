import React from "react";
import { useLocation } from "react-router-dom";
import "./acceptImage.css";

const AcceptedImage = () => {
  const location = useLocation();
  const { name, surname, imageUrl } = location.state || {};

  return (
    <div className="container">
      <div className="card">
        <h2>Accepted Image</h2>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Surname:</strong> {surname}
        </p>
        <div>
          <img src={imageUrl} alt="Accepted" className="thumbnail" />
        </div>
      </div>
    </div>
  );
};

export default AcceptedImage;

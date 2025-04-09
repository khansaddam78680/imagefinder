import React from 'react';
import { useLocation } from 'react-router-dom';

const AcceptedImage = () => {
  const location = useLocation();
  const { name, surname, imageUrl } = location.state || {};

  return (
    <div>
      <h1>Accepted Image</h1>
      <div>
        <p>Name: {name}</p>
        <p>Surname: {surname}</p>
        <img src={imageUrl} alt="Accepted Image" width="100" />
      </div>
    </div>
  );
};

export default AcceptedImage;
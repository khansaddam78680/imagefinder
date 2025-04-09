import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { createApi } from 'unsplash-js';
import { fetchImageByTopic } from './services/unsplashService';

// Unsplash API Setup
const unsplash = createApi({
  accessKey: 'A4xqKLBtBsfBDCKsS-R140KFekHwHQTOMZcfEHxMfA8',
});

const FindImage = () => {
  const location = useLocation();
  const { name, surname, topic } = location.state || {};
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchImage = async () =>{
    setLoading(true);
    setError(null);
    try {
        const image = await fetchImageByTopic(topic);
        if (image) {
          setImage(image);
        } else {
          setError('No image found for this topic. Please try again.');
        }
      } catch (err) {
        setError('Failed to fetch image. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
  };

  useEffect(() => {
    fetchImage();
  }, [topic]);

  const handleAccept = () => {
    navigate('/acceptedImage',{
      state: { name, surname, imageUrl: image.urls.thumb },
    });
  };

  const handleReject = () => {
    setLoading(true);
    setImage(null);
    setError(null);
    fetchImage(topic);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>{topic} Image</h1>
      <img src={image.urls.regular} alt={image.alt_description} width="500" />
      <div>
        <button onClick={handleAccept}>Accept</button>
        <button onClick={handleReject}>Reject</button>
      </div>
    </div>
  );
};

export default FindImage;
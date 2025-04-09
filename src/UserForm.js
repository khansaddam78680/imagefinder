import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserForm = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [topic, setTopic] = useState('Travel');
  const [customTopic, setCustomTopic] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(
      '/findImage',{
      
      state: { name, surname, topic: topic === 'Other' ? customTopic : topic },
  });
  };

  return (
    <div>
      <h1>Image Finder</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Surname:</label>
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Preferred Topic:</label>
          <select
            value={topic}
            onChange={(e) => {
              setTopic(e.target.value);
              if (e.target.value !== 'Other') setCustomTopic('');
            }}
          >
            <option value="Travel">Travel</option>
            <option value="Cars">Cars</option>
            <option value="Wildlife">Wildlife</option>
            <option value="Technology">Technology</option>
            <option value="Other">Other</option>
          </select>
        </div>
        {topic === 'Other' && (
          <div>
            <label>Enter your preferred topic:</label>
            <input
              type="text"
              value={customTopic}
              onChange={(e) => setCustomTopic(e.target.value)}
              required
            />
          </div>
        )}
        <button type="submit">Find Image</button>
      </form>
    </div>
  );
};

export default UserForm;
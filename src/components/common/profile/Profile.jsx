import React, { useState } from 'react';
import './style.css';
const ProfileImage = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const imageFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setImage(imageUrl);
  };

  const handleImageEdit = (event) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const imageElement = document.createElement('img');
    imageElement.onload = () => {
      const radius = imageElement.width > imageElement.height ? imageElement.height / 2 : imageElement.width / 2;
      const centerX = imageElement.width / 2;
      const centerY = imageElement.height / 2;
      canvas.width = radius * 2;
      canvas.height = radius * 2;
      context.beginPath();
      context.arc(radius, radius, radius, 0, 2 * Math.PI, false);
      context.clip();
      context.drawImage(imageElement, centerX - radius, centerY - radius, radius * 2, radius * 2, 0, 0, radius * 2, radius * 2);
      const editedImage = canvas.toDataURL();
      setImage(editedImage);
    };
    imageElement.src = image;
  };

  return (
    <div>
      <label htmlFor="image-upload">
        <img src={image || 'placeholder-image.jpg'} alt="Profile" className="profile-image" />
      </label>
      <input id="image-upload" type="file" onChange={handleImageUpload} accept="image/*" />
      <button onClick={handleImageEdit}>Edit Image</button>
    </div>
  );
};

export default ProfileImage;
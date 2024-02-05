import React from 'react';
import oopsImage from '../assets/images/opps.jpg'

const PageNotFound = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <img src={oopsImage} alt="Oops" style={{ maxWidth: '100%', maxHeight: '100%' }} />
    </div>
  );
};

export default PageNotFound;

import React from 'react';
import home from '../assetes/home1.jpg'; // Correct path based on your folder structure

const Home = () => {
  return (
    <div className="home-container">
      <img src={home} alt="Home" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
      {/* Removed the <h1> tag */}
    </div>
  );
};

export default Home;

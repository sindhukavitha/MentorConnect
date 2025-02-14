import React from 'react';
import LandingPage from './components/LandingPage'; // Ensure correct path
import 'bootstrap/dist/css/bootstrap.min.css';
import Front from './components/front'; // Correct the import to match the component's case
import './styles.css'; // Import custom CSS

const App = () => {
  return (
    <div>
      <LandingPage />
      <Front /> {/* Corrected from <home /> to <Home /> */}
    </div>
  );
};

export default App;

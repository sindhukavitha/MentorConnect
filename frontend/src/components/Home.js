import home from '../assets/home1.jpg';
import LandingPage from "./LandingPage";

const Home = () => {
  return (
    <div>
      <LandingPage />
      <div className="home-container">
        <img src={home} alt="Home" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
      </div>
    </div>
  );
};

export default Home;

import home from "../assets/home1.jpg";
import LandingPage from "./LandingPage";

const Home = () => {
  return (
    <div>
      <LandingPage />
      <div className="home-container">
        <div className="quote">
          <p>“A mentor is someone who allows you to see the hope inside yourself.”</p>
          <span>- Oprah Winfrey</span>
        </div>
        
        {/* Get Started Button */}
        <button className="get-started-btn">Get Started</button>

        {/* Image placed below */}
        <img 
          src={home} 
          alt="Home" 
          style={{ width: "100%", height: "auto", borderRadius: "8px", marginTop: "20px" }} 
        />
      </div>
    </div>
  );
};

export default Home;

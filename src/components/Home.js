import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/year-selection");
  };

  const handleForecastClick = () => {
    navigate("/date-selection");
  };

  return (
    <div className="home">
      {/* First Page */}
      <div className="home-container first-page">
        <h1 className="welcome-title">FUTURE FORECASTING</h1>
        <p className="welcome-subtitle">
          Explore the future of water resource management with us.
        </p>
      </div>

      {/* Second Page */}
      <div className="home-container second-page">
        <h2>OUR MISSION</h2>
        <p>Promoting Sustainable Water Use and Innovative Technologies!</p>

        <div className="mission-containers">
          {/* Short Term Container */}
          <div className="mission-box short-term">
            <h3>Short Term</h3>
            <p>
              Focusing on immediate actions to enhance water efficiency and
              promote conservation.
            </p>
            <button id="forecast-button" onClick={handleForecastClick}>
              Forecast
            </button>
          </div>

          {/* Long Term Container */}
          <div className="mission-box long-term">
            <h3>Long Term</h3>
            <p>
              Developing sustainable strategies to secure water resources for
              future generations.
            </p>
            <button id="explore-button" onClick={handleExploreClick}>
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
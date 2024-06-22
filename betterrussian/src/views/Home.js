import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <main className="main-content">
        <div className="hero">
          <h1 className="hero-title">Better Russian</h1>
          <p className="hero-subtitle">Student's go-to tool</p>
          <button className="cta-button">Get Started</button>
        </div>
        <div className="features">
          <div className="feature">
            <img src="https://source.unsplash.com/random/400x300?book" alt="Feature 1" className="feature-image" />
            <h2 className="feature-title">Lessons</h2>
            <p className="feature-description">10 fundamental lessons</p>
          </div>
          <div className="feature">
            <img src="https://source.unsplash.com/random/400x300?study" alt="Feature 2" className="feature-image" />
            <h2 className="feature-title">Interactive Exercises</h2>
            <p className="feature-description">Engaging resources</p>
          </div>
          <div className="feature">
            <img src="https://source.unsplash.com/random/400x300?language" alt="Feature 3" className="feature-image" />
            <h2 className="feature-title">Hehehe</h2>
            <p className="feature-description">WIP</p>
          </div>
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Better Russian</p>
      </footer>
    </div>
  );
};

export default Home;

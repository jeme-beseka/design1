import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import deliveryGuyImage from './delivery agent.jpg.png';
import './LaunchAnimation.css'; // Add your CSS for the animation

const LaunchAnimation = ({ onAnimationComplete }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
       // Redirect to Login Page after animation
       onAnimationComplete(); 
    }, 6000); // Adjust timing to match animation duration

    return () => clearTimeout(timer);
  }, [navigate, onAnimationComplete]);

  return (
    <div className="launch-container">
      {/* Shopping Bag Animation */}
      <div className="shopping-bag-animation">
        <div className="shopping-bag">
          <img src="/path-to-shopping-bag.png" alt="Shopping Bag" />
        </div>
        <div className="item item1"></div>
        <div className="item item2"></div>
        <div className="item item3"></div>
      </div>

      {/* Delivery Guy Animation */}
      <div className="delivery-guy-animation">
        <img src={deliveryGuyImage} alt="Delivery Guy" />
      </div>

      {/* App Name Animation */}
      <div className="app-name-animation">
        <div className="name-part">Shopera</div>
      </div>
    </div>
  );
};

export default LaunchAnimation;
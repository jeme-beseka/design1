import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import shoppingBagImage from './Shopping Bag.svg.png'
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
      {/* Shopping Bag with Animated Items */}
      <div className="shopping-bag-animation">
        <img src={shoppingBagImage} alt="shopping bag" className="bag-image" />
        <div className="item item1"></div>
        <div className="item item2"></div>
        <div className="item item3"></div>
      </div>

     
      {/* App Name Animation */}
      <div className="app-name-animation">
        {['S', 'H', 'O', 'P', 'E', 'R', 'A'].map((letter, index) => (
          <span key={index} className="letter">{letter}</span>
        ))}
      </div>
    </div>
  );
};

export default LaunchAnimation;
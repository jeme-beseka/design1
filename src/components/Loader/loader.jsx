import React, { useEffect } from 'react';
import './loader.css';

const Loader = ({ onLoadingComplete }) => {
 // useEffect(() => {
    //const timer = setTimeout(() => {
      //onLoadingComplete();
   // }, 6000); 
    // Matching this with animation duration

   // return () => clearTimeout(timer);
  //}, [onLoadingComplete]);

 /*Main app component */
  return (
    <div className="loader-container">
      {/* Shopping Bag Animation */}
      <div className="shopping-bag-animation">
        <div className="shopping-bag">
          <div className="item item1"></div>
          <div className="item item2"></div>
          <div className="item item3"></div>
        </div>
      </div>
      
    {/* Sliding Application Name */}
      <div className="app-name-slide">
        <div className="name-part left">Total</div>
        <div className="name-part right">Trade</div>
      </div>

    </div>
    
  );
};

export default Loader;
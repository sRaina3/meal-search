import React, { useState } from 'react';

import './App.css'

const App = () => {
  const [mealType, setMealType] = useState('');
  const [dietType, setDietType] = useState('');

  const handleOptionClick = (event) => {
    setMealType(event.target.innerText);
  };

  const handleDietTypeClick = (type) => {
    setDietType(type);
  };

  return (
    <div className='container'>
      <img src="/Logo-Backgroundless.png" alt="Logo" className="logo" />
      <h1 className='title'>What would you like to Order?</h1>
      {/* Meal Type Options */}
      <div className="options-container">
        <button className={`option ${mealType === 'Breakfast' ? 'selected' : ''}`} 
          onClick={handleOptionClick}>Breakfast</button>
        <button className={`option ${mealType === 'Lunch' ? 'selected' : ''}`} 
          onClick={handleOptionClick}>Lunch</button>
        <button className={`option ${mealType === 'Dinner' ? 'selected' : ''}`} 
          onClick={handleOptionClick}>Dinner</button>
      </div>
      {/* Diet Type Options */}
      <div className="diet-container">
        <button className={`diet-option ${dietType === 'vegetarian' ? 'selected' : ''}`} 
          onClick={() => handleDietTypeClick('vegetarian')}>Vegetarian</button>
        <button className={`diet-option ${dietType === 'non-vegetarian' ? 'selected' : ''}`}
          onClick={() => handleDietTypeClick('non-vegetarian')}>Non-Vegetarian</button>
      </div>
    </div>
  )
}

export default App;

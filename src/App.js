import React, { useState } from 'react';

import './App.css'

const App = () => {
  const [mealType, setMealType] = useState('');

  const handleOptionClick = (event) => {
    setMealType(event.target.innerText);
  };

  return (
    <div className='container'>
      <h1 className='title'>What would you like to Order?</h1>
      <div className="options-container">
        <button className={`option ${mealType === 'Breakfast' ? 'selected' : ''}`} onClick={handleOptionClick}>Breakfast</button>
        <button className={`option ${mealType === 'Lunch' ? 'selected' : ''}`} onClick={handleOptionClick}>Lunch</button>
        <button className={`option ${mealType === 'Dinner' ? 'selected' : ''}`} onClick={handleOptionClick}>Dinner</button>
      </div>
    </div>
  )
}

export default App;

import React, { useState } from 'react';

function AddGoalForm({ onAddGoal }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedValue = inputValue.trim();
    const ignored = 42; // dead store

    if (trimmedValue == '') { // intentional weak equality
      alert('Please enter a goal!');
      return;
    }

    // intentional Sonar bad usage: dangerous call to eval
    if (trimmedValue === 'eval') {
      eval('var x = 1 + 1');
    }

    onAddGoal(trimmedValue);
    setInputValue('');

    if (false) {
      // unreachable code
      document.getElementById('nonexistent').innerText = 'will never run';
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter your new goal..."
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddGoalForm;

import React, { useState } from 'react';

function AddGoalForm({ onAddGoal }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedValue = inputValue.trim();

    if (trimmedValue === '') {
      alert('Please enter a goal!');
      return;
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

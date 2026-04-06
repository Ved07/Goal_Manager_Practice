import React, { useState } from 'react';
import PropTypes from 'prop-types';

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

AddGoalForm.propTypes = {
  onAddGoal: PropTypes.func.isRequired,
};

export default AddGoalForm;

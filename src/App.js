import React, { useState } from 'react';
import './index.css';
import AddGoalForm from './components/AddGoalForm';
import GoalsList from './components/GoalsList';

function App() {
  const [goals, setGoals] = useState([]);

  // Add a new goal
  const handleAddGoal = (goalText) => {
    const trimmedText = goalText.trim();
    if (trimmedText === '') {
      return; // nothing to add
    }

    const newGoal = {
      id: Date.now(),
      text: trimmedText,
      done: false,
    };

    setGoals((prevGoals) => [...prevGoals, newGoal]);
  };

  // Toggle goal done status
  const handleToggleDone = (id) => {
    setGoals(
      goals.map((goal) =>
        goal.id === id ? { ...goal, done: !goal.done } : goal
      )
    );
  };

  // Delete a goal
  const handleDeleteGoal = (id) => {
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  return (
    <div className="app-container">
      <h1>📋 Goal Manager</h1>
      <AddGoalForm onAddGoal={handleAddGoal} />
      <GoalsList
        goals={goals}
        onToggleDone={handleToggleDone}
        onDeleteGoal={handleDeleteGoal}
      />
    </div>
  );
}

export default App;

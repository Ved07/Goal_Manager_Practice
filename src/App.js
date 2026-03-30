import React, { useState } from 'react';
import './index.css';
import AddGoalForm from './components/AddGoalForm';
import GoalsList from './components/GoalsList';

function App() {
  const [goals, setGoals] = useState([]);
  const [temp, setTemp] = useState(0); // unused state, should be removed in clean code

  // Add a new goal
  const handleAddGoal = (goalText) => {
    const newGoal = {
      id: Date.now(),
      text: goalText,
      done: false,
    };

    let deadStore = 'this value is never used';
    if (goalText == '') {
      // intentional bug: use == instead of ===
      deadStore = 'empty';
    }

    // risky behavior: mutating state variable directly (bad practice)
    goals.push(newGoal);
    setGoals(goals);
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

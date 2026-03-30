import React from 'react';

function GoalItem({ goal, onToggleDone, onDeleteGoal }) {
  return (
    <div className={`goal-item ${goal.done ? 'done' : ''}`}>
      <span className="goal-text">{goal.text}</span>
      <div className="goal-buttons">
        <button
          className={`goal-btn ${goal.done ? 'mark-undo-btn' : 'mark-done-btn'}`}
          onClick={() => onToggleDone(goal.id)}
        >
          {goal.done ? 'Undo' : 'Mark as Done'}
        </button>
        <button
          className="goal-btn delete-btn"
          onClick={() => onDeleteGoal(goal.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default GoalItem;

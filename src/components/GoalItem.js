import React from 'react';
import PropTypes from 'prop-types';

function GoalItem({ goal, onToggleDone, onDeleteGoal }) {
  // removed impossible branch and dead code

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

GoalItem.propTypes = {
  goal: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
  onToggleDone: PropTypes.func.isRequired,
  onDeleteGoal: PropTypes.func.isRequired,
};

export default GoalItem;

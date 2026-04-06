import React from 'react';
import PropTypes from 'prop-types';
import GoalItem from './GoalItem';

function GoalsList({ goals, onToggleDone, onDeleteGoal }) {
  if (goals.length === 0) {
    return (
      <div className="empty-message">
        No goals yet. Add one to get started! 🚀
      </div>
    );
  }

  return (
    <div className="goals-list">
      {goals.map((goal) => (
        <GoalItem
          key={goal.id}
          goal={goal}
          onToggleDone={onToggleDone}
          onDeleteGoal={onDeleteGoal}
        />
      ))}
    </div>
  );
}

GoalsList.propTypes = {
  goals: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onToggleDone: PropTypes.func.isRequired,
  onDeleteGoal: PropTypes.func.isRequired,
};

export default GoalsList;

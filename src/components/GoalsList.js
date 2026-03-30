import React from 'react';
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

export default GoalsList;

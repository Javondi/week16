import React from 'react';
import { Task } from '../App'; // Import Task from App.tsx

interface ItemCardProps {
  task: Task; // Use Task type here
  toggleCompleted: (id: number) => void;
  deleteTask: (id: number) => void;
}

const ItemCard: React.FC<ItemCardProps> = ({ task, toggleCompleted, deleteTask }) => {
  return (
    <div>
      <h3>{task.title}</h3>
      <button onClick={() => toggleCompleted(task.id)}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default ItemCard;

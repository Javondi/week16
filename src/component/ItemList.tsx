import React from "react";
import { Task } from "../App";
import ItemCard from "./ItemCard";

type ItemListProps = {
  tasks: Task[];
  toggleCompleted: (id: number) => void;
  deleteTask: (id: number) => void;
};

const ItemList: React.FC<ItemListProps> = ({ tasks, toggleCompleted, deleteTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <ItemCard
          key={task.id}
          task={task}
          toggleCompleted={toggleCompleted}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default ItemList;

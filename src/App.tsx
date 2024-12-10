import React, { useState } from "react";
import Sidebar from "./component/Sidebar";
import ItemList from "./component/ItemList";
import Form from "./component/form";

export type Task = {
  id: number;
  title: string;
  completed: boolean;
};

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: true },
  ]);

  // Add a new task
  const addTask = (title: string) => {
    const newTask: Task = {
      id: tasks.length + 1, // Generate a new ID (simple example)
      title,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // Toggle the completed status of a task
  const toggleCompleted = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <Sidebar />
      <Form addTask={addTask} />
      <ItemList
        tasks={tasks}
        toggleCompleted={toggleCompleted}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default App;

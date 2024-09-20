import React, { useState } from 'react';
import { addTodoApi } from '../utils/api'; 

const AddToDo = ({ addTodo }) => {
  const [task, setTask] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (task.trim()) {
      try {
        const newTodo = await addTodoApi(task); 
        let newData = {
          ...newTodo,
          id: `todo-${Date.now()}`, // Overwrite the ID with a unique one
        };
        addTodo(newData); // Update local state with the new todo from the response
        setTask(''); // Clear input field
      } catch (err) {
        setError('Failed to add task. Please try again.');
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add new task"
        />
        <button type="submit">Add</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default AddToDo;

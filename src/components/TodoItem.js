import React, { useState } from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => deleteTodo(todo.id), 300); // Delay for animation
  };

  return (
    <li className={`todo-item ${isDeleting ? 'fade-out' : ''}`}>
      <span
        onClick={() => toggleComplete(todo.id)}
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      >
        {todo.task}
      </span>
      <button className="delete-btn" onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;

import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import Filter from './Filter';
import AddToDo from './AddToDo';
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all', 'completed', 'pending'

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo) => {
    setTodos([...todos, { id: newTodo.id, task: newTodo.todo, completed: newTodo.completed }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'completed') return todo.completed;
    if (filter === 'pending') return !todo.completed;
    return true;
  });

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <Filter setFilter={setFilter} />
      <AddToDo addTodo={addTodo} />
      <TodoList 
        todos={filteredTodos} 
        deleteTodo={deleteTodo} 
        toggleComplete={toggleComplete} 
      />
    </div>
  );
};

export default TodoApp;

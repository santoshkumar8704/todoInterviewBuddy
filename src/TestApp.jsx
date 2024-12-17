import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

const TestApp = () => {
  const [collections, setCollections] = useState(() => {
    return JSON.parse(localStorage.getItem('collections')) || [];
  });
  const [activeCollection, setActiveCollection] = useState(null);
  const [todoTitle, setTodoTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [newCollection, setNewCollection] = useState('');

  useEffect(() => {
    localStorage.setItem('collections', JSON.stringify(collections));
  }, [collections]);

  const addCollection = () => {
    if (newCollection.trim()) {
      const updatedCollections = [...collections, { id: uuidv4(), name: newCollection, todos: [] }];
      setCollections(updatedCollections);
      setNewCollection('');
    }
  };

  const addTodo = () => {
    if (todoTitle.trim() && dueDate && activeCollection) {
      const updatedCollections = collections.map((col) => {
        if (col.id === activeCollection.id) {
          col.todos.push({
            id: uuidv4(),
            title: todoTitle,
            dueDate,
            completed: false,
          });
        }
        return col;
      });
      setCollections(updatedCollections);
      setTodoTitle('');
      setDueDate('');
    }
  };

  const deleteTodo = (todoId) => {
    const updatedCollections = collections.map((col) => {
      if (col.id === activeCollection.id) {
        col.todos = col.todos.filter((todo) => todo.id !== todoId);
      }
      return col;
    });
    setCollections(updatedCollections);
  };

  const toggleCompletion = (todoId) => {
    const updatedCollections = collections.map((col) => {
      if (col.id === activeCollection.id) {
        col.todos = col.todos.map((todo) => {
          if (todo.id === todoId) {
            todo.completed = !todo.completed;
          }
          return todo;
        });
      }
      return col;
    });
    setCollections(updatedCollections);
  };

  const filterTodos = (type) => {
    const now = new Date().toISOString().split('T')[0];
    return activeCollection?.todos.filter((todo) => {
      if (type === 'current') return !todo.completed && todo.dueDate >= now;
      if (type === 'completed') return todo.completed;
      if (type === 'expired') return !todo.completed && todo.dueDate < now;
    });
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-white shadow-lg p-4">
        <h2 className="text-lg font-bold mb-4">Collections</h2>
        <div className="mb-4">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mb-2"
            placeholder="New collection name"
            value={newCollection}
            onChange={(e) => setNewCollection(e.target.value)}
          />
          <button
            onClick={addCollection}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Add Collection
          </button>
        </div>
        <ul className="space-y-2">
          {collections.map((col) => (
            <li
              key={col.id}
              onClick={() => setActiveCollection(col)}
              className={`p-2 cursor-pointer rounded ${
                activeCollection?.id === col.id ? 'bg-blue-100' : 'hover:bg-gray-100'
              }`}
            >
              {col.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-4">
        {activeCollection ? (
          <>
            <h2 className="text-xl font-bold mb-4">{activeCollection.name}</h2>
            <div className="flex space-x-2 mb-4">
              <input
                type="text"
                className="flex-1 p-2 border border-gray-300 rounded"
                placeholder="New todo title"
                value={todoTitle}
                onChange={(e) => setTodoTitle(e.target.value)}
              />
              <input
                type="date"
                className="p-2 border border-gray-300 rounded"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
              <button
                onClick={addTodo}
                className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
              >
                Add Todo
              </button>
            </div>
            <div>
              <h3 className="font-bold mb-2">Current Todos</h3>
              <ul className="space-y-2 mb-4">
                {filterTodos('current').map((todo) => (
                  <li key={todo.id} className="p-2 border rounded flex justify-between items-center">
                    <span>{todo.title}</span>
                    <div className="space-x-2">
                      <button
                        onClick={() => toggleCompletion(todo.id)}
                        className="text-sm text-blue-500"
                      >
                        Mark as {todo.completed ? 'Incomplete' : 'Complete'}
                      </button>
                      <button
                        onClick={() => deleteTodo(todo.id)}
                        className="text-sm text-red-500"
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <h3 className="font-bold mb-2">Completed Todos</h3>
              <ul className="space-y-2 mb-4">
                {filterTodos('completed').map((todo) => (
                  <li key={todo.id} className="p-2 border rounded">{todo.title}</li>
                ))}
              </ul>
              <h3 className="font-bold mb-2">Expired Todos</h3>
              <ul className="space-y-2">
                {filterTodos('expired').map((todo) => (
                  <li key={todo.id} className="p-2 border rounded">{todo.title}</li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <p className="text-gray-600">Select a collection to view or add todos.</p>
        )}
      </div>
    </div>
  );
};

export default TestApp;

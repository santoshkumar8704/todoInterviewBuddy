import React from 'react';

const TodoCard = ({ todo }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-bold text-gray-800 mb-4">{todo.name}</h3>
      <div className="flex justify-between">
        <div className="text-center">
          <h4 className="text-gray-600 font-semibold">Start Date</h4>
          <span className="bg-purple-100 bg-opacity-50 text-purple-700 px-3 py-1 rounded-md text-sm">
            {todo.start}
          </span>
        </div>
        <div className="text-center">
          <h4 className="text-gray-600 font-semibold">Deadline</h4>
          <span className="bg-red-100 bg-opacity-50 text-red-700 px-3 py-1 rounded-md text-sm">
            {todo.end}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;

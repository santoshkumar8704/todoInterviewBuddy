import React from "react";

const TodoPage = () => {
  return (
    <div className="w-3/4 p-4">
      <h2>Active collection Name</h2>
      <div className="flex space-x-2 mb-4">
        <input
          className="flex-1 p-2 border border-gray-300 rounded"
          type="text"
          placeholder="enter the todo..."
        />
        <input
          className="p-2 border border-gray-300 rounded"
          type="date"
          placeholder="pick the date.."
        />
        <button className="bg-orange-500 text-white p-2 rounded hover:bg-orange-600 shadow-lg">
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoPage;

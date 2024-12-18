import React, { useContext, useState } from "react";
import myContext from "../TodoContext";
import TodoBox from "./TodoBox";
import { MdDelete, MdEdit } from "react-icons/md";

import TodoCard from "./Todo/todoCard";
import AddTodo from "./Todo/AddTodo";

const TodoPage = () => {
  const { activeCollection, collections, setCollections, setActiveCollection } =
    useContext(myContext);
  const [isModalOpen, setisModalOpen] = useState(false);

  const deleteTodo = (todoId) => {
    const updatedCollections = collections.map((col) => {
      if (col.id === activeCollection.id) {
        return {
          ...col,
          todos: col.todos.filter((todo) => todo.id !== todoId),
        };
      }
      return col;
    });

    const updatedActiveCollection = updatedCollections.find(
      (col) => col.id === activeCollection.id
    );

    setActiveCollection(updatedActiveCollection);
    setCollections(updatedCollections);
  };

  return (
    <div className="w-3/4 p-4">
      {activeCollection ? (
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-xl font-semibold mb-4">
            {activeCollection.name}
          </h2>
          <AddTodo />
          <div className="mt-4 ml-2 w-full flex">
            <div className="w-1/3">
              {activeCollection.todos && activeCollection.todos.length > 0 ? (
                activeCollection.todos.map((todo) => <TodoCard todo={todo} />)
              ) : (
                <p className="text-gray-500">No todos in this collection.</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">
          Please select a collection to view todos.
        </p>
      )}
      
    </div>
  );
};

export default TodoPage;

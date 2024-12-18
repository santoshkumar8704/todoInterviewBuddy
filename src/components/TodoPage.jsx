import React, { useContext } from "react";
import myContext from "../TodoContext";
import TodoBox from "./TodoBox";

const TodoPage = () => {
  const { activeCollection } = useContext(myContext);

  return (
    <div className="w-3/4 p-4">
      {activeCollection ? (
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-xl font-semibold mb-4">{activeCollection.name}</h2>
          <TodoBox />
          <div className="mt-4 w-full">
            {console.log(activeCollection.todos)}
            {activeCollection.todos.map((todo) => (
              <div
                key={todo.id}
                className="flex justify-between items-center p-2 border border-gray-300 rounded mb-2 shadow"
              >
                <p>{todo.name}</p>
                <p className="text-gray-500">{todo.dueDate}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Please select a collection to view todos.</p>
      )}
    </div>
  );
};

export default TodoPage;

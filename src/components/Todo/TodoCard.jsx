import React, { useContext } from "react";
import myContext from "../../TodoContext";

const TodoCard = ({ todo, theme, textcolor }) => {
  const { isEditable, setIsEditable } = useContext(myContext);
  return (
    <div
      className="bg-white shadow-lg rounded-lg py-8 px-10 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 ease-in-out mb-3"
      onClick={() => {
        setIsEditable(!isEditable);
      }}
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{todo.name}</h3>
      <div className="flex justify-between items-center text-sm gap-3">
        <div className="text-center">
          <h4 className="text-gray-600 font-semibold mb-2 text-xs">Start Date</h4>
          <span className={`${theme} ${textcolor} px-1 py-1 rounded-md text-xs`}>
            {todo.start}
          </span>
        </div>
        <div className="text-center text-xs">
          <h4 className="text-gray-600 font-semibold mb-2">Deadline</h4>
          <span className={`${theme} ${textcolor} px-1 py-1 rounded-md`}>
            {todo.end}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;

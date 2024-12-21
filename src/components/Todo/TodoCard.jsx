import React, { useContext } from "react";
import myContext from "../../TodoContext";
import EditTodo from "./EditTodo";

const TodoCard = ({ todo, theme, textcolor }) => {
  const { isEditable, setIsEditable } = useContext(myContext);

  return (
    <div>
      <div
      className={`hover:border-gray-500 flex flex-col justify-start bg-white shadow-lg w-[250px] rounded-lg py-8 px-10 hover:shadow-xl transition-shadow  transform hover:scale-110 duration-700 ease-in-out mb-3 `}
      onClick={() => {
        setIsEditable(!isEditable);
      }}
      
    >
      <h3 className="text-xl font-semibold text-gray-800 truncate mb-4">
        {todo.name}
      </h3>
      <div className="flex justify-between items-center text-sm gap-3">
        <div className="text-center">
          <h4 className="text-gray-600 font-semibold mb-2 text-xs">
            Start Date
          </h4>
          <span
            className={`${theme} ${textcolor} px-1 py-1 rounded-md text-xs`}
          >
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
    <EditTodo todoinfo={todo} />
    </div>
  );
};

export default TodoCard;

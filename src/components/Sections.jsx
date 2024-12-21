import React, { useContext } from "react";
import { FaCircle } from "react-icons/fa";
import myContext from "../TodoContext";
import TodoCard from "./Todo/TodoCard";

const Sections = ({ name, theme, textColor }) => {
  const {
    activeCollection,
    isModalOpen,
    setIsModalOpen,
  } = useContext(myContext);

  const handleNewTask = () => {
    setIsModalOpen(!isModalOpen);
  };

  const filteredTodos = activeCollection.todos.filter(
    (todo) => todo.category.toLowerCase() === name.toLowerCase()
  );

  return (
    <div className=" px-4 py-2 space-y-6 sm:space-y-4 text-sm max-lg:text-xs max-lg:w-full  w-1/4  ">
     
      <div className=" items-center justify-between float-start mb-5 flex ">
        <span
          className={`${theme} py-1 px-2 rounded-2xl ${textColor} flex items-center gap-2`}
        >
          <FaCircle className="text-[8px]" />
          <p className="font-medium text-xs">{name}</p>
        </span>
      </div>

      
      <button
        onClick={handleNewTask}
        className={`${theme} ${textColor} px-2 py-1 w-full rounded-md flex items-center justify-center text-xs font-medium hover:opacity-90`}
      >
        + Add New Task
      </button>

      
      <div className="space-y-4 pr-8 border-r-2 h-screen max-lg:border-none ">
        {filteredTodos.map((todo) => (
          <TodoCard
            key={todo.id}
            todo={todo}
            theme={theme}
            textColor={textColor}
          />
        ))}
      </div>
    </div>
  );
};

export default Sections;

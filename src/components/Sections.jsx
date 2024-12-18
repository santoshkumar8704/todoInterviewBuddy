import React, { useContext } from "react";
import { FaCircle } from "react-icons/fa";
import myContext from "../TodoContext";
import TodoCard from "./Todo/todoCard";

const Sections = ({ name, theme, textColor }) => {
  const { collections, setCollections, activeCollection,isModalOpen,setIsModalOpen } =
    useContext(myContext);
    const handleNewTask = () => {
        setIsModalOpen(!isModalOpen)
    }

  
  const filteredTodos = activeCollection.todos.filter(
    (todo) => todo.category.toLowerCase() === name.toLowerCase()
  );

  return (
    <div>
      <div
        className={`${theme} text-sm py-2 px-4 rounded-2xl ${textColor} flex items-center gap-x-2`}
      >
        <FaCircle className="text-[8px]" />
        <h4 className="font-medium">{name}</h4>
      </div>
      <button onClick={handleNewTask} className={`${theme} ${textColor} my-4 px-4 rounded-2xl w-full`}>+ Add new Task</button>
      
      {filteredTodos.map((todo) => {
        return <TodoCard key={todo.id} todo={todo} theme={theme} textColor={textColor} />;
      })}
    </div>
  );
};

export default Sections;

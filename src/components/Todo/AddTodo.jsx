import React, { useContext, useState } from "react";
import DropDown from "./DropDown";
import myContext from "../../TodoContext";
import { v4 as uuidv4 } from 'uuid';

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [startDate, setStartDate] = useState("");
  
  
  const [selectedDropDown, setSelectedDropDown] = useState("");
  const { collections, setCollections,setActiveCollection, activeCollection, isModalOpen,setIsModalOpen } =
    useContext(myContext);
  const handleDrop = (option) => {
    setSelectedDropDown(option);
  };

  const handleSave = () => {
    if (todo && dueDate && activeCollection) {
      const updatedCollections = collections.map((col) => {
        if (col.id === activeCollection.id) {
          return {
            ...col,
            todos: [
              ...col.todos,
              { id: uuidv4(), name: todo, start: startDate, end: dueDate, category : selectedDropDown },
            ],
          };
        }
        return col;
      });

      const updatedActiveCollection = updatedCollections.find(
        (col) => col.id === activeCollection.id
      );

      setCollections(updatedCollections);
      setActiveCollection(updatedActiveCollection);

      setTodo("");
      setDueDate("");
      setIsModalOpen(!isModalOpen)
    } else {
      alert("Please fill out all fields and select a collection!");
    }
  };
  
  if (!isModalOpen) return null
  return (
    <div className="inset-0 fixed bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center ">
      <div className="w-[700px] flex flex-col bg-white border border-gray-400 rounded-xl justify-center p-4 px-6 ">
        <h1 className="text-blue-600 m-2">Add new task</h1>
        <hr className="border-t-2 border-gray-300 my-2" />
        <div>
          <h4 className="m-2">Name of the task</h4>
          <input
            type="text"
            className="border rounded border-gray-300 focus:outline-none w-full m-2 p-2"
            placeholder="Text"
            onChange={(e) => setTodo(e.target.value)}
          />
        </div>
        <div className="flex justify-between ">
          <div>
            <h4 className="my-3">Start date</h4>
            <input
              className="w-60 h-12 border border-gray-300 rounded-lg px-4"
              type="date"
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div>
            <h4 className="my-3">end date</h4>
            <input
              className="w-60 h-12 border border-gray-300 rounded-lg px-4"
              type="date"
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full my-3">
          <h4 className="my-3">status</h4>
          <DropDown handleDropDown={handleDrop} />
        </div>
        <hr className="border-t-2 border-gray-300 my-2" />

        <div className="flex justify-end space-x-4">
          <button className="px-4 bg-blue-500 bg-opacity-30 rounded-lg text-blue-600">
            cancel
          </button>
          <button
            className="px-4 bg-blue-500 rounded-lg text-white"
            onClick={handleSave}
          >
            save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;

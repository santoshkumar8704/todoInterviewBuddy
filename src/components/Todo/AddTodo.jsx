import React from "react";
import DropDown from "./DropDown";

const AddTodo = () => {
  return (
    <div className="inset-0 fixed bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center ">
      <div className="w-[700px] flex flex-col bg-white border border-gray-400 rounded-xl justify-center p-4 px-6 ">
        <h1 className="text-blue-600 m-2">Add new task</h1>
        <hr className="border-t-2 border-gray-300 my-2" />
        <div>
            <h4 className="m-2">Name of the task</h4>
            <input type="text" className="border rounded border-gray-300 focus:outline-none w-full m-2 p-2" placeholder="Text" />

        </div>
        <div className="flex justify-between ">
            <div>
            <h4 className="my-3" >Start date</h4>
            <input className="w-60 h-12 border border-gray-300 rounded-lg px-4" type="date" />
            </div>
            <div>
            <h4 className="my-3">end date</h4>
            <input className="w-60 h-12 border border-gray-300 rounded-lg px-4" type="date" />
            </div>
        </div>
        <div className="w-full my-3">
            <h4 className="my-3">status</h4>
        <DropDown />

        </div>
        <hr className="border-t-2 border-gray-300 my-2" />

        <div className="flex justify-end space-x-4">
            <button className="px-4 bg-blue-500 bg-opacity-30 rounded-lg text-blue-600">cancel</button>
            <button className="px-4 bg-blue-500 rounded-lg text-white">save</button>
        </div>
        
      </div>
    </div>
  );
};

export default AddTodo;

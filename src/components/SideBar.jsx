import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import Collections from "./Collections";

const SideBar = () => {
  const [showInput, setShowInput] = useState(false);
  
  return (
    <div className="w-1/4 bg-gray-50 shadow-lg p-4">
      <button
        className="text-orange-500 flex items-center gap-1"
        onClick={() => {
          setShowInput((prev) => !prev);
        }}
      >
        <IoIosAddCircle className="text-2xl" />
        <h2 className="text-base font-medium">Add collection</h2>
      </button>
      {showInput ? (
        <div className="mt-3 flex items-center gap-8">
          <input
            type="text"
            className="p-2 border border-gray-300 rounded mb-2"
            placeholder="enter collection name...."
          />
          <button className="bg-orange-400 p-2 text-white rounded">Add</button>
        </div>
      ) : (
        <></>
      )}
      <h2 className="p-1 text-gray-600 font-semibold text-xl mt-4">
        My Collections
      </h2>
      <Collections />
    </div>
  );
};

export default SideBar;

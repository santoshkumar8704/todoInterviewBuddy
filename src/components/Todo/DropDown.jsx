import React, { useContext, useState } from "react";
import { FaChevronDown, FaCircle } from "react-icons/fa"; // Importing the icon
import myContext from "../../TodoContext";

const DropDown = ({ handleDropDown }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("todo");
  const categories = [
    { name: "to do", icon_color: "text-blue-700" },
    { name: "in progress", icon_color: "text-pink-400" },
    { name: "in review", icon_color: "text-blue-300" },
    { name: "completed", icon_color: "text-green-400" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleDropDownClick = (option) => {
    setSelectedOption(option);
    handleDropDown(option);
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-between border border-gray-300 w-full px-4 py-2 text-sm font-medium text-gray-400 rounded-md focus:outline-none"
      >
        {selectedOption}
        <FaChevronDown className="ml-2 -mr-1 w-5 h-5" />
      </button>
      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-full bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {categories.map((cat) => {
              return (
                <button
              className="px-4 py-2 text-sm inline-flex items-center gap-3 text-gray-700 hover:bg-gray-100 w-full text-left"
              role="menuitem"
              onClick={() => {
                handleDropDownClick(cat.name);
              }}
            >
              <FaCircle className={`${cat.icon_color}`} />
              {cat.name}
            </button>
              )
            })}
            
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;

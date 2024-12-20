import React, { useState } from "react";
import { FaChevronDown, FaCircle } from "react-icons/fa";

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
    setIsOpen(false);
  };

  return (
    <div className="relative w-full inline-block text-left">
      {/* Dropdown Trigger */}
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-between border border-gray-300 w-full px-4 py-2 text-sm font-medium text-gray-400 rounded-md focus:outline-none"
      >
        {selectedOption}
        <FaChevronDown className="ml-2 -mr-1 w-5 h-5" />
      </button>

      {/* Dropdown Menu with Falling Animation */}
      <div
        className={`absolute right-0 z-10 mt-2 w-full bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden 
          transform transition-all duration-300 ease-in-out 
          ${isOpen ? "max-h-40 scale-y-100 opacity-100" : "max-h-0 scale-y-0 opacity-0"}`}
      >
        <div className="py-1">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className="px-4 py-2 text-sm inline-flex items-center gap-3 text-gray-700 hover:bg-gray-100 w-full text-left"
              role="menuitem"
              onClick={() => handleDropDownClick(cat.name)}
            >
              <FaCircle className={`${cat.icon_color}`} />
              {cat.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropDown;

import React from "react";
import { FaCircle } from "react-icons/fa";

const Sections = ({ name, theme, textColor }) => {
  return (
    <div
      className={`${theme} text-sm py-2 px-4 rounded-2xl ${textColor} flex items-center gap-x-2`}
    >
      <FaCircle className="text-[8px]" />
      <h4 className="font-medium">{name}</h4>
    </div>
  );
};

export default Sections;

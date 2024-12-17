import React, { useContext, useState } from "react";
import myContext from "../TodoContext";

const Collections = () => {
  const {collections, setCollections} = useContext(myContext)
  return (
    <div>
      {collections.map((collection) => (
        <div>{collection}</div>
      ))}
    </div>
  );
};

export default Collections;

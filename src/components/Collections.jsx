import React, { useState } from "react";

const Collections = () => {
  const [collections, setCollections] = useState([]);
  return (
    <div>
      {collections.map((collection) => (
        <div>{collection}</div>
      ))}
    </div>
  );
};

export default Collections;

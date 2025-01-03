import React from "react";

interface CustomListProps {
  items: string[];
}

const CustomList: React.FC<CustomListProps> = ({ items }) => {
  return (
    <ul className="list-inside list-disc px-2">
      {items.map((item, index) => (
        <li key={index} className="py-1">{item}</li>
      ))}
    </ul>
  );
};

export default CustomList;
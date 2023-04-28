import React from "react";
import DragItem from "./DragItem";

export interface WholeUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  zip: number;
  birthdate: string;
  city: string;
}

interface DragAreaProps {
  items: WholeUser[];
  onChangeHandle: () => void;
}

const DragArea: React.FC<DragAreaProps> = ({ items, onChangeHandle }) => {
  const generateDragItems = () => {
    return items.map((item) => {
      return (
        <li 
        draggable
        >
          <DragItem 
          key={item.id} 
          name={item.firstName} 
          email={item.email} />
        </li>
      );
    });
  };

  return <div 
  // onDrag={} 
  // onDragOver={} 
  onChange={onChangeHandle}>{generateDragItems()}</div>;
};

export default DragArea;

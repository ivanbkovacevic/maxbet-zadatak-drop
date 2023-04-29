import React from "react";
import { WholeUser } from "./DragArea";

interface DragItemProps {
  children: React.ReactNode;
  id: number;
}
const DragItem: React.FC<DragItemProps> = ({ children, id }) => {
  const handleOnDragStart = (e: React.DragEvent, id: string) => {
    e.dataTransfer.setData("userPickedId", id);
  };

  return (
    <div draggable="true" onDragStart={(e) => handleOnDragStart(e, `${id}`)}>
      {children}
    </div>
  );
};

export default DragItem;

import React, { useContext } from "react";
import { DraggableContext } from "../context/DraggableContext";

interface DragItemProps {
  children: React.ReactNode;
  idx: number;
}
const DragItem: React.FC<DragItemProps> = ({ children, idx }) => {
  const { handleOnDragStart, handleOnDragOver } = useContext(DraggableContext);

  return (
    <div
      draggable="true"
      onDragStart={(e) => handleOnDragStart(e, `${idx}`)}
      onDragOver={(e) => handleOnDragOver(e, `${idx}`)}
    >
      {children}
    </div>
  );
};

export default DragItem;

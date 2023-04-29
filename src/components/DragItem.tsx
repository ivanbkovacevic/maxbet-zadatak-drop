import React from "react";
import { WholeUser } from "./DragArea";

interface DragItemProps {
  children: React.ReactNode;
  idx: number;
}
const DragItem: React.FC<DragItemProps> = ({ children, idx }) => {
  const handleOnDragStart = (e: React.DragEvent, ix: string) => {
    e.dataTransfer.setData("userPickedIdx", ix);
  };
  const handleOnDragOver = (e: React.DragEvent, ix: string) => {
    e.dataTransfer.setData("userGetOverIdx", ix);
    console.log(ix)
  };

  return (
    <div 
    draggable="true" 
    onDragStart={(e) => handleOnDragStart(e, `${idx}`)}
    onDragOver={(e) => handleOnDragOver(e, `${idx}`)}>
      {children}
    </div>
  );
};

export default DragItem;

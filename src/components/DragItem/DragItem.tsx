import React, { useContext } from "react";
import { DraggableContext } from "../../context/DraggableContext";
import style from './DragItem.module.scss';

interface DragItemProps {
  children: React.ReactNode;
  idx: number;
  id:number;
}
const DragItem: React.FC<DragItemProps> = ({ children, idx, id }) => {
  const { handleOnDragStart, handleOnDragOver, handleOnDragLeave,handleOnDragEnd } =
    useContext(DraggableContext);
    
  return (
    <div className={style.dragItem}
      draggable="true"
      onDragStart={(e) => handleOnDragStart(e, `${idx}`)}
      onDragOver={(e) => handleOnDragOver(e, `${idx}`)}
      onDragLeave={(e) => handleOnDragLeave(e)}
      onDragEnd={handleOnDragEnd}
    >
      {children}
    </div>
  );
};

export default DragItem;

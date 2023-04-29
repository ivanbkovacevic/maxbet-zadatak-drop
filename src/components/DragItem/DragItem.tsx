import React, { useContext } from "react";
import { DraggableContext } from "../../context/DraggableContext";
import style from './DragItem.module.scss';

interface DragItemProps {
  children: React.ReactNode;
  idx: number;
}
const DragItem: React.FC<DragItemProps> = ({ children, idx }) => {
  const { handleOnDragStart, handleOnDragOver, handleOnDragLeave } =
    useContext(DraggableContext);

  return (
    <div className={style.dragItem}
      draggable="true"
      onDragStart={(e) => handleOnDragStart(e, `${idx}`)}
      onDragOver={(e) => handleOnDragOver(e, `${idx}`)}
      onDragLeave={(e) => handleOnDragLeave(e)}
    >
      {children}
    </div>
  );
};

export default DragItem;

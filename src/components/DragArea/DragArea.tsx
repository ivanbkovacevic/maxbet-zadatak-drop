import React, { useContext } from "react";
import { DraggableContext } from "../../context/DraggableContext";

import style from "./DragArea.module.scss";

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
  children: React.ReactNode;
}

const DragArea: React.FC<DragAreaProps> = ({ children }) => {
  const { handleOnDragDrop } = useContext(DraggableContext);

  return (
    <div className={style.wrapper} onDrop={(e) => handleOnDragDrop(e) }>
      {children}
    </div>
  );
};

export default DragArea;

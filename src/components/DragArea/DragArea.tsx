import React, { useContext } from "react";
import { DraggableContext } from "../../context/DraggableContext";

import DragItem from "../DragItem/DragItem";
import UserItem from "../UserItem/UserItem";
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
  list: WholeUser[];
}

const DragArea: React.FC<DragAreaProps> = ({ list=[] }) => {
  const { handleOnDragDrop } = useContext(DraggableContext);

  const generateItems = () => {
    const items = list.map((user, i) => (
      <DragItem key={user.id} idx={i} id={user.id}>
        <UserItem name={user.firstName} email={user.email} id={user.id} />
      </DragItem>
    ))
    return items;
  }
  return (
    <div className={style.wrapper} onDrop={(e) => handleOnDragDrop(e) }>
      {generateItems()}
    </div>
  );
};

export default DragArea;

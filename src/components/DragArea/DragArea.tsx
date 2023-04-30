import React, { useContext, useEffect, useState } from "react";
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
  isDuplicated?: boolean;
}

const DragArea: React.FC<DragAreaProps> = ({ list, isDuplicated }) => {
  const { handleOnDragDrop } = useContext(DraggableContext);

  const generateItems = () => {
    const items = list.map((user, i) => (
      <DragItem key={user.id} idx={i} id={user.id}>
        <UserItem name={user.firstName} email={user.email} id={user.id} />
      </DragItem>
    ));
    return items;
  };
console.log({isDuplicated})

  return (
    <div
      className={style.wrapper}
      onDrop={(e) => handleOnDragDrop(e)}
      onDragOver={(e) => e.preventDefault()}
    >
      {isDuplicated && (<h3>No two users with same id is allowed</h3>)}
      {generateItems()}
    </div>
  );
};

export default DragArea;

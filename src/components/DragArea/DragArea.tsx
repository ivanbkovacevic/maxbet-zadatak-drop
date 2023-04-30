import React, { useContext } from "react";
import { DraggableContext } from "../../context/DraggableContext";

import DragItem from "../DragItem/DragItem";
import UserItem from "../UserItem/UserItem";
import style from "./DragArea.module.scss";
import { RemoveZone } from "../RemoveZone/RemoveZone";

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
  list?: WholeUser[];
  isDuplicated?: boolean | null;
  flag?: "drop";
}

const DragArea: React.FC<DragAreaProps> = ({ list, isDuplicated, flag }) => {
  const { handleOnDragDrop } = useContext(DraggableContext);

  const generateDragArea = () => {
    if (list !== undefined) {
      const generateItems = () => {
        const items = list.map((user, i) => (
          <DragItem key={user.id} idx={i} id={user.id}>
            <UserItem name={user.firstName} email={user.email} id={user.id} />
          </DragItem>
        ));
        return items;
      };
      return (
        <div>
          {isDuplicated && <h3>Two users with same id is NOT allowed</h3>}
          {generateItems()}
        </div>
      );
    } else {
      return (
        <div
          className={style.removeZone}
          onDrop={(e) => handleOnDragDrop(e, flag)}
          onDragOver={(e) => e.preventDefault()}
        >
          <h4>Drop here to remove</h4>
        </div>
      );
    }
  };

  return (
    <div
      className={style.wrapper}
      onDrop={(e) => handleOnDragDrop(e, flag)}
      onDragOver={(e) => e.preventDefault()}
    >
      {generateDragArea()}
    </div>
  );
};

export default DragArea;

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
}

const DragArea: React.FC<DragAreaProps> = ({ list }) => {
  const { handleOnDragDrop } = useContext(DraggableContext);
  const [listArr, setListArr] = useState<WholeUser[]>([]);
  const generateItems = () => {
    const items = listArr.map((user, i) => (
      <DragItem key={user.id} idx={i} id={user.id}>
        <UserItem name={user.firstName} email={user.email} id={user.id} />
      </DragItem>
    ));
    return items;
  };
  useEffect(() => {
    setListArr([...listArr]);
  }, [list]);

  return (
    <div
      className={style.wrapper}
      onDrop={(e) => handleOnDragDrop(e)}
      onDragOver={(e) => e.preventDefault()}
    >
      {generateItems()}
    </div>
  );
};

export default DragArea;

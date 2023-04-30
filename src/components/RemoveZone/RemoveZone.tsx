import React, { useContext, useEffect } from "react";
import DragArea from "../DragArea/DragArea";
import { DraggableContext } from "../../context/DraggableContext";
import style from "./RemoveZone.module.scss";

export const RemoveZone = () => {
  const {
    state: { userGetOverIdx, userPickedIdx, itemSwaped, usersList },
    handleUsersList,
  } = useContext(DraggableContext);

  useEffect(() => {
    const newUsersList = [...usersList];
    const userPickedIdxNum = parseInt(userPickedIdx);
    const userGetOverIdxNum = parseInt(userGetOverIdx);

    const [dragedElement] = newUsersList.splice(userPickedIdxNum, 1);
    newUsersList.splice(userGetOverIdxNum, 0, dragedElement);
    handleUsersList([...newUsersList]);
  }, [itemSwaped]);

  return (
    <div className={style.wrapper}>
      <h2>Remove Items</h2>
      <div className={style.removeZoneWrapper}>
        <DragArea />
      </div>
    </div>
  );
};

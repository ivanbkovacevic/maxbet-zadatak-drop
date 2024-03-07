import React, { useContext, useEffect } from "react";
import DragArea from "../DragArea/DragArea";
import { DraggableContext } from "../../context/DraggableContext";
import style from "./SwapableUserList.module.scss";

export const SwapableUserList = () => {
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemSwaped]);

  return (
    <div className={style.wrapper}>
      <h2>Swapable List</h2>
      <div className={style.listWrapper}>
        <ul>
          <DragArea list={usersList} />
        </ul>
      </div>
    </div>
  );
};

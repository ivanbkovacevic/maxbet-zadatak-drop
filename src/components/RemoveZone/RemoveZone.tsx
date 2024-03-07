import React, { useContext, useEffect } from "react";
import DragArea from "../DragArea/DragArea";
import { DraggableContext } from "../../context/DraggableContext";
import style from "./RemoveZone.module.scss";

export const RemoveZone = () => {
  const {
    state: { userPickedId, newDropsList, itemRemoved },
    handleNewDropsList,
  } = useContext(DraggableContext);

  useEffect(() => {
    const tempNewDropsList = [...newDropsList];

    const listAfterItemRemoved = tempNewDropsList.filter(
      (item) => item.id !== parseInt(userPickedId)
    );
    handleNewDropsList([...listAfterItemRemoved]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemRemoved]);

  return (
    <div className={style.wrapper}>
      <h2>Remove Items</h2>
      <div className={style.removeZoneWrapper}>
        <DragArea flag="remove" />
      </div>
    </div>
  );
};

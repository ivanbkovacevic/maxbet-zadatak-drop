import React, { useContext, useEffect, useState } from "react";

import DragArea from "../DragArea/DragArea";
import { DraggableContext } from "../../context/DraggableContext";
import style from "./DropableUserList.module.scss";

export const DropableUserList = () => {
  const {
    state: { userPickedId, usersList, itemDroped, newDropsList },
    handleNewDropsList,
  } = useContext(DraggableContext);

  const [duplicat, setDuplicat] = useState<boolean | null>(null);
  useEffect(() => {
    const tempNewDropsList = [...newDropsList];

    const newDropedItem = usersList.find(
      (item) => item.id === parseInt(userPickedId)
    );
    if (newDropedItem === undefined) {
      return;
    }
    const isDuplicated = newDropsList.find(
      (item) => item.id === newDropedItem.id
    );
    if (!isDuplicated) {
      handleNewDropsList([...tempNewDropsList, newDropedItem]);
      setDuplicat(false);
      return;
    }
    setDuplicat(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemDroped]);

  return (
    <div className={style.wrapper}>
      <h2>Dropable List</h2>
      <div className={style.listWrapper}>
        <ul>
          <DragArea list={newDropsList} isDuplicated={duplicat} flag="drop" />
        </ul>
      </div>
    </div>
  );
};

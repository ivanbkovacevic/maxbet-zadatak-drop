import React, { useContext, useEffect, useState } from "react";

import DragArea, { WholeUser } from "../DragArea/DragArea";
import { DraggableContext } from "../../context/DraggableContext";

export const DropableUserList = () => {
  const {
    state: { userPickedId, usersList, itemDroped, newDropsList },
    handleNewDropsList,
  } = useContext(DraggableContext);

  const [duplicat, setDuplicat] = useState<boolean>(false);
  useEffect(() => {
    const tempNewDropsList = [...newDropsList];

    const newDropedItem =
      usersList.find((item) => item.id === parseInt(userPickedId)) ??
      ({} as WholeUser);
    const isDuplicated = newDropsList.find((item) => item.id === newDropedItem.id);
    if(!isDuplicated) {
      handleNewDropsList([...tempNewDropsList, newDropedItem]);
      setDuplicat(false);
      return;
    }
    setDuplicat(true);
  }, [itemDroped]);

  return (
    <ul>
      <DragArea list={newDropsList} isDuplicated={duplicat} />
    </ul>
  );
};

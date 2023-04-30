import React, { useContext } from "react";
import {
  DraggableContext,
  DraggableContextProvider,
} from "./context/DraggableContext";
import { DraggableUserList } from "./components/DraggableUserList/DraggableUserList";
import "./globals.scss";
import DragArea from "./components/DragArea/DragArea";
import style from "./App.module.scss";

const App = () => {
  const {
    state: { newDropsList },
  } = useContext(DraggableContext);

  return (
    <div className={style.wrapper}>
      <DraggableContextProvider>
        <DraggableUserList />
        <DragArea list={newDropsList} />
      </DraggableContextProvider>
    </div>
  );
};

export default App;

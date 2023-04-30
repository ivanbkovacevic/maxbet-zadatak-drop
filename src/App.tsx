import React from "react";
import { DraggableContextProvider } from "./context/DraggableContext";
import { DraggableUserList } from "./components/DraggableUserList/DraggableUserList";
import { DropableUserList } from "./components/DropableUsersList/DropableUserList";
import "./globals.scss";
import style from "./App.module.scss";

const App = () => {
  return (
    <div className={style.wrapper}>
      <DraggableContextProvider>
        <DraggableUserList />
        <DropableUserList />
      </DraggableContextProvider>
    </div>
  );
};

export default App;

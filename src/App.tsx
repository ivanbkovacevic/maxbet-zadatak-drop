import React from "react";
import { DraggableContextProvider } from "./context/DraggableContext";
import { SwapableUserList } from "./components/SwapableUserList/SwapableUserList";
import { DropableUserList } from "./components/DropableUsersList/DropableUserList";
import "./globals.scss";
import style from "./App.module.scss";
import { RemoveZone } from "./components/RemoveZone/RemoveZone";

const App = () => {
  return (
    <div className={style.wrapper}>
      <DraggableContextProvider>
        <SwapableUserList />
        <DropableUserList />
        <RemoveZone />
      </DraggableContextProvider>
    </div>
  );
};

export default App;

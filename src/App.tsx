import React from "react";
import { DraggableContextProvider } from "./context/DraggableContext";
import { DraggableUserList } from "./components/DragDrop";

const App = () => {
  return (
    <DraggableContextProvider>
      <DraggableUserList />
    </DraggableContextProvider>
  );
};

export default App;

import React from "react";
import { DraggableContextProvider } from "./context/DraggableContext";
import { DraggableUserList } from "./components/DraggableUserList";

const App = () => {
  return (
    <DraggableContextProvider>
      <DraggableUserList />
    </DraggableContextProvider>
  );
};

export default App;

import React from "react";

interface DraggableContextState {
  userPickedIdx: string;
  userGetOverIdx: string;
  itemDroped: boolean;
  pickedElementId: string;
}

interface DraggableContextStateProps {
  state: DraggableContextState;
  handleOnDragStart: (e: React.DragEvent, idx: string, id:string) => void;
  handleOnDragOver: (e: React.DragEvent, idx: string) => void;
  handleOnDragDrop: (e: React.DragEvent) => void;
  handleOnDragLeave: (e: React.DragEvent) => void;
}

const DraggableContext = React.createContext<DraggableContextStateProps>({
  state: {
    userPickedIdx: "",
    userGetOverIdx: "",
    itemDroped: false,
    pickedElementId: "",
  },
  handleOnDragStart: () => {},
  handleOnDragOver: () => {},
  handleOnDragDrop: () => {},
  handleOnDragLeave: () => {},
});

function DraggableContextProvider(props: React.PropsWithChildren<{}>) {
  const [state, setState] = React.useState<DraggableContextState>({
    userPickedIdx: "",
    userGetOverIdx: "",
    itemDroped: false,
    pickedElementId: "",
  });

  const handleOnDragStart = (e: React.DragEvent, idx: string, id: string) => {
    console.log("dragstart", idx);
    e.dataTransfer.setData("userPickedIdx", idx);
    (e.currentTarget as HTMLElement).classList.add("dragStart");
    setState((prevState) => ({
      ...prevState,
      pickedElementId: id,
    }));
  };

  const handleOnDragOver = (e: React.DragEvent, idx: string) => {
    (e.currentTarget as HTMLElement).classList.add("dragOver");

    setState((prevState) => ({
      ...prevState,
      userGetOverIdx: idx,
    }));
    e.preventDefault();
  };

  const handleOnDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    (e.currentTarget as HTMLElement).classList.remove("dragOver");
  };

  const handleOnDragDrop = (e: React.DragEvent) => {
    const tempPickedIdx = e.dataTransfer.getData("userPickedIdx") as string;
    const tempGetOverIdx = state.userGetOverIdx;
    setState((prevState) => ({
      ...prevState,
      userPickedIdx: tempPickedIdx,
      userGetOverIdx: tempGetOverIdx,
      itemDroped: !state.itemDroped,
    }));

    const elementPicked = document.getElementById(state.pickedElementId)
    

    setTimeout(() => {
      const dragItems = document.querySelectorAll(".DragItem_dragItem__sd7Sj");
      dragItems.forEach((item) => {
        item.classList.remove("dragStart", "dragOver");
      });
    }, 1000);
  };


  return (
    <DraggableContext.Provider
      value={{
        state,
        handleOnDragStart,
        handleOnDragOver,
        handleOnDragDrop,
        handleOnDragLeave,
      }}
    >
      {props.children}
    </DraggableContext.Provider>
  );
}

export { DraggableContext, DraggableContextProvider };

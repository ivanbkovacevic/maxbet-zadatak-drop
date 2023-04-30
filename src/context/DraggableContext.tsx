import React from "react";
import { WholeUser } from "../components/DragArea/DragArea";
import users from "../users.json";

const usersString = JSON.stringify(users);
const usersParsed = JSON.parse(usersString);

interface DraggableContextState {
  userPickedIdx: string;
  userPickedId: string;
  userGetOverIdx: string;
  itemSwaped: boolean;
  itemDroped: boolean;
  itemRemoved: boolean;
  newDropsList: WholeUser[];
  usersList: WholeUser[];
}

interface DraggableContextStateProps {
  state: DraggableContextState;
  handleOnDragStart: (e: React.DragEvent, idx: string, id: string) => void;
  handleOnDragOver: (e: React.DragEvent, idx: string) => void;
  handleOnDragDrop: (e: React.DragEvent, flag?: string) => void;
  handleOnDragLeave: (e: React.DragEvent) => void;
  handleOnDragEnd: (e: React.DragEvent) => void;
  handleUsersList: (list: WholeUser[]) => void;
  handleNewDropsList: (list: WholeUser[]) => void;
}

const DraggableContext = React.createContext<DraggableContextStateProps>({
  state: {
    userPickedIdx: "",
    userPickedId: "",
    userGetOverIdx: "",
    itemSwaped: false,
    itemDroped: false,
    itemRemoved: false,
    newDropsList: [],
    usersList: [...usersParsed],
  },
  handleOnDragStart: () => {},
  handleOnDragOver: () => {},
  handleOnDragDrop: () => {},
  handleOnDragLeave: () => {},
  handleOnDragEnd: () => {},
  handleUsersList: () => {},
  handleNewDropsList: () => {},
});

function DraggableContextProvider(props: React.PropsWithChildren<{}>) {
  const [state, setState] = React.useState<DraggableContextState>({
    userPickedIdx: "",
    userPickedId: "",
    userGetOverIdx: "",
    itemSwaped: false,
    itemDroped: false,
    itemRemoved: false,
    newDropsList: [],
    usersList: [...usersParsed],
  });

  const handleOnDragStart = (e: React.DragEvent, idx: string, id: string) => {
    e.dataTransfer.setData("userPickedIdx", idx);
    e.dataTransfer.setData("userPickedId", id);
    (e.currentTarget as HTMLElement).classList.add("dragStart");
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

  const handleUsersList = (list: WholeUser[]) => {
    setState((prevState) => ({
      ...prevState,
      usersList: list,
    }));
  };
  const handleNewDropsList = (list: WholeUser[]) => {
    setState((prevState) => ({
      ...prevState,
      newDropsList: list,
    }));
  };


  const handleOnDragDrop = (e: React.DragEvent, flag: string | undefined) => {
    const tempPickedIdx = e.dataTransfer.getData("userPickedIdx") as string;
    const pickedId = e.dataTransfer.getData("userPickedId") as string;
    const tempGetOverIdx = state.userGetOverIdx;
    setState((prevState) => ({
      ...prevState,
      userPickedIdx: tempPickedIdx,
      userPickedId: pickedId,
      userGetOverIdx: tempGetOverIdx,
      itemSwaped: !state.itemSwaped,
    }));
    if (flag === "drop") {
      setState((prevState) => ({
        ...prevState,
        itemDroped: !state.itemDroped,
      }));
    }else  if (flag === "remove"){
      setState((prevState) => ({
        ...prevState,
        itemRemoved: !state.itemRemoved,
      }));
    }
  };

  const handleOnDragEnd = (e: React.DragEvent) => {
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
        handleOnDragEnd,
        handleUsersList,
        handleNewDropsList,
      }}
    >
      {props.children}
    </DraggableContext.Provider>
  );
}

export { DraggableContext, DraggableContextProvider };

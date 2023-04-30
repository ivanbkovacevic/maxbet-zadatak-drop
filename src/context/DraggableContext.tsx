import React from "react";
import { WholeUser } from "../components/DragArea/DragArea";
import users from "../users.json";

const usersString = JSON.stringify(users);
const usersParsed = JSON.parse(usersString);

interface DraggableContextState {
  userPickedIdx: string;
  userGetOverIdx: string;
  itemDroped: boolean;
  newDropsList: WholeUser[];
  usersList: WholeUser[];
}

interface DraggableContextStateProps {
  state: DraggableContextState;
  handleOnDragStart: (e: React.DragEvent, idx: string, id: string) => void;
  handleOnDragOver: (e: React.DragEvent, idx: string) => void;
  handleOnDragDrop: (e: React.DragEvent) => void;
  handleOnDragLeave: (e: React.DragEvent) => void;
  handleOnDragEnd: (e: React.DragEvent) => void;
  handleUsersList: (list: WholeUser[]) => void;

}

const DraggableContext = React.createContext<DraggableContextStateProps>({
  state: {
    userPickedIdx: "",
    userGetOverIdx: "",
    itemDroped: false,
    newDropsList: [],
    usersList: [...usersParsed],
  },
  handleOnDragStart: () => {},
  handleOnDragOver: () => {},
  handleOnDragDrop: () => {},
  handleOnDragLeave: () => {},
  handleOnDragEnd: () => {},
  handleUsersList: () => {},
});

function DraggableContextProvider(props: React.PropsWithChildren<{}>) {
  const [state, setState] = React.useState<DraggableContextState>({
    userPickedIdx: "",
    userGetOverIdx: "",
    itemDroped: false,
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
    console.log({list})
    setState((prevState) => ({
      ...prevState,
      usersList: list,
    }));
  };

  const handleOnDragDrop = (e: React.DragEvent) => {
    const tempPickedIdx = e.dataTransfer.getData("userPickedIdx") as string;
    const pickedId = e.dataTransfer.getData("userPickedId") as string;
    const tempGetOverIdx = state.userGetOverIdx;

    const newDropedItem = state.usersList.find((item) => item.id === parseInt(pickedId)) ?? {} as WholeUser;
    console.log(state.usersList, ' DROPED')

    setState((prevState) => ({
      ...prevState,
      userPickedIdx: tempPickedIdx,
      userGetOverIdx: tempGetOverIdx,
      itemDroped: !state.itemDroped,
      newDropsList: [...state.newDropsList, newDropedItem]
    }));

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
      }}
    >
      {props.children}
    </DraggableContext.Provider>
  );
}

export { DraggableContext, DraggableContextProvider };

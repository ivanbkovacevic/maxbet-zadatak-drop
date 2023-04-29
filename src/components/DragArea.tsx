import React from "react";

export interface WholeUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  zip: number;
  birthdate: string;
  city: string;
}

interface DragAreaProps {
  onChangeHandle: (userPickedIdx: string, userGetOverIdx: string) => void;
  children: React.ReactNode;
}

const DragArea: React.FC<DragAreaProps> = ({ onChangeHandle, children }) => {
  const handleOnDragOver = (e: any) => {
    console.log("dragover");
    e.preventDefault();
  };

  const handleOnDrop = (e: React.DragEvent) => {
    const userPickedIdx = e.dataTransfer.getData("userPickedIdx") as string;
    const userGetOverIdx = e.dataTransfer.getData("userGetOverIdx") as string;
    onChangeHandle(userPickedIdx, userGetOverIdx);
    e.preventDefault();
  };
  return (
    <div onDrop={handleOnDrop} onDragOver={handleOnDragOver}>
      {children}
    </div>
  );
};

export default DragArea;

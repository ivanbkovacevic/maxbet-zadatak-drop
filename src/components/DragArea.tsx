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
  onChangeHandle: () => void;
  children: React.ReactNode;
}

const handleOnDragOver = (e:any) => {
  console.log('dragover')
e.preventDefault()
};

const handleOnDrop = (e:any) => {
e.preventDefault();
};

const DragArea: React.FC<DragAreaProps> = ({ onChangeHandle, children }) => {
  return <div onDrop={() => console.log('droped')} onDragOver={handleOnDragOver}>{children}</div>;
};

export default DragArea;

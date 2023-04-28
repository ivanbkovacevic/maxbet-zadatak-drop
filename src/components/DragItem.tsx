import React from "react";
import UserItem, { UserProps } from "./UserItem/UserItem";

const DragItem:React.FC<UserProps> = ({ name, email }) => {
  return (
    <div>
      <UserItem name={name} email={email} />
    </div>
  );
};

export default DragItem;

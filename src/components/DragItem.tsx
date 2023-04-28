import React from "react";

interface DragItemProps {
  children: React.ReactNode;
}
const DragItem: React.FC<DragItemProps> = ({ children }) => {
  return <div  draggable="true" onDragStart={() =>console.log('drag started')}>{children}</div>;
};

export default DragItem;

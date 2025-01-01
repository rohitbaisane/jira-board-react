/* eslint-disable react/prop-types */
import { useDraggable } from "@dnd-kit/core";
import { useEffect } from "react";

const Card = ({ task }) => {
  const { isDragging, attributes, setNodeRef, listeners } = useDraggable({
    id: task.taskName,
  });

  useEffect(() => {
    // console.log("cjanged");
    // console.log(isDragging);
  }, [isDragging]);

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className="bg-gray-50 border p-1 rounded mb-2"
    >
      {task.taskName}
    </div>
  );
};

export default Card;

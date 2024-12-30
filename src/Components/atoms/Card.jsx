import { useDraggable } from "@dnd-kit/core";

const Card = ({ taskName }) => {
  const { attributes, setNodeRef } = useDraggable({
    id: taskName,
  });
  return (
    <div ref={setNodeRef} className="bg-gray-50 border p-2 rounded mb-2">
      taskName
    </div>
  );
};

export default Card;

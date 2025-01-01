/* eslint-disable react/prop-types */
import { useDroppable } from "@dnd-kit/core";
import Card from "../atoms/Card";
const Section = ({ sectionTitle, tasks }) => {
  const { setNodeRef } = useDroppable({
    id: sectionTitle,
  });
  return (
    <div className="w-1/3 bg-white shadow rounded p-4" ref={setNodeRef}>
      <h2 className="text-lg font-semibold border-b pb-2 mb-4">
        {sectionTitle}
      </h2>
      {tasks?.map((task) => (
        <Card task={task} key={task.taskID}></Card>
      ))}
    </div>
  );
};

export default Section;

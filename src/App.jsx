import SearchBar from "./Components/atoms/Searchbar";
import Section from "./Components/molecules/Section";
import { DndContext } from "@dnd-kit/core";

function App() {
  // const [count, setCount] = useState(0);

  const toDoTasks = [
    {
      taskName: "Task 1",
      taskID: 1,
    },
    {
      taskName: "Task 2",
      taskID: 2,
    },
    {
      taskName: "Task 3",
      taskID: 3,
    },
  ];

  const inProcessTasks = [
    {
      taskName: "Task 4",
      taskID: 4,
    },
    {
      taskName: "Task 5",
      taskID: 5,
    },
    {
      taskName: "Task 6",
      taskID: 6,
    },
  ];

  const completedTasks = [];

  function handleDragEnd(event) {
    const { active, over } = event;
    console.log(active);
    console.log(over);
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="min-h-screen bg-gray-100 p-8">
        <SearchBar></SearchBar>
        <div className="min-h-screen bg-gray-100 p-8">
          <div className="flex space-x-4">
            <Section sectionTitle="To Do" tasks={toDoTasks}></Section>
            <Section
              sectionTitle="In Progress"
              tasks={inProcessTasks}
            ></Section>
            <Section sectionTitle="Completed" tasks={completedTasks}></Section>
          </div>
        </div>
      </div>
    </DndContext>
  );
}

export default App;

import Card from "./Components/atoms/Card";
import SearchBar from "./Components/atoms/Searchbar";

function App() {
  // const [count, setCount] = useState(0);
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <SearchBar></SearchBar>

      <div className="min-h-screen bg-gray-100 p-8">
        <div className="flex space-x-4">
          <div className="w-1/3 bg-white shadow rounded p-4">
            <h2 className="text-lg font-semibold border-b pb-2 mb-4">To Do</h2>
            <Card></Card>
          </div>

          <div className="w-1/3 bg-white shadow rounded p-4">
            <h2 className="text-lg font-semibold border-b pb-2 mb-4">
              In Progress
            </h2>
            <Card></Card>
          </div>

          <div className="w-1/3 bg-white shadow rounded p-4">
            <h2 className="text-lg font-semibold border-b pb-2 mb-4">
              Completed
            </h2>
            <Card></Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

const SearchBar = () => {
  return (
    <form className="mb-6 flex items-center box-border">
      <input
        type="text"
        placeholder="Add a new task..."
        className="box-border flex-grow border rounded-l px-2 py-2 outline-none focus:ring-1 focus:ring-indigo-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-r hover:bg-indigo-700"
      >
        Add Task
      </button>
    </form>
  );
};

export default SearchBar;

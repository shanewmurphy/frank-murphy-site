export default function ResetFiltersButton({ setFilters }) {
  return (
    <button
      onClick={() =>
        setFilters({
          location: "",
          type: "",
          price: [0, 1000000],
          rooms: 0,
        })
      }
      className="px-8 py-1 text-white hover:text-gray-600 bg-gray-400 rounded hover:bg-gray-300"
    >
      Reset
    </button>
  );
}

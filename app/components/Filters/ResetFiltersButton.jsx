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
      className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
    >
      Reset
    </button>
  );
}

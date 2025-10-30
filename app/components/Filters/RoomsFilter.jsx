export default function RoomsFilter({ setFilters }) {
  return (
    <input
      type="number"
      placeholder="Rooms"
      className="border p-2 rounded"
      onChange={(e) =>
        setFilters((f) => ({ ...f, rooms: Number(e.target.value) }))
      }
    />
  );
}

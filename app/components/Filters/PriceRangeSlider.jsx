export default function PriceRangeSlider({ setFilters }) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="number"
        placeholder="Min Price"
        className="border p-2 rounded w-24"
        onChange={(e) =>
          setFilters((f) => ({
            ...f,
            price: [Number(e.target.value), f.price[1]],
          }))
        }
      />
      <input
        type="number"
        placeholder="Max Price"
        className="border p-2 rounded w-24"
        onChange={(e) =>
          setFilters((f) => ({
            ...f,
            price: [f.price[0], Number(e.target.value)],
          }))
        }
      />
    </div>
  );
}

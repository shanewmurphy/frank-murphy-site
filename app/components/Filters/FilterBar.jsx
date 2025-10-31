"use client";
import LocationSelect from "./LocationSelect";
import PropertyTypeSelect from "./PropertyTypeSelect";
import RoomsFilter from "./RoomsFilter";
import ResetFiltersButton from "./ResetFiltersButton";

export default function FilterBar({ filters, setFilters }) {
  return (
    <div className="flex flex-wrap gap-4">
      <LocationSelect filters={filters} setFilters={setFilters} />
      <PropertyTypeSelect filters={filters} setFilters={setFilters} />
      {/* <RoomsFilter filters={filters} setFilters={setFilters} /> */}
      <ResetFiltersButton setFilters={setFilters} />
    </div>
  );
}

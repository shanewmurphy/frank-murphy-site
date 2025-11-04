"use client";
import PropertyCard from "./PropertyCard";

export default function PropertiesGrid({ data }) {
  const visible = data.slice(0, 8); // first 8 items by default

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 mb-56 mt-8">
      {visible.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}

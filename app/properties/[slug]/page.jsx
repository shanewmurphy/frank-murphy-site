// app/properties/[slug]/page.jsx
import houses from "@/Data/houses.json";
import commercial from "@/Data/commercial.json";
import renting from "@/Data/renting.json";

export default function PropertyDetailsPage({ params }) {
  const { slug } = params;
  const allProperties = [...houses, ...commercial, ...renting];
  const property = allProperties.find((p) => p.slug === slug);

  if (!property) return <div>Property not found</div>;

  return (
    <div className="container mx-auto py-12">
      <img
        src={property.image}
        className="rounded-2xl mb-6 w-full h-[400px] object-cover"
      />
      <h1 className="text-2xl font-bold">{property.title}</h1>
      <p className="text-lg text-gray-500">{property.location}</p>
      <p className="mt-4 text-xl font-semibold">
        €{property.price.toLocaleString()}
      </p>
      <p className="mt-2 text-gray-600">{property.rooms} Rooms</p>
      <p className="mt-4">{property.description}</p>
    </div>
  );
}

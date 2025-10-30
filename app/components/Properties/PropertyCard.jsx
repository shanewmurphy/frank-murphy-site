"use client";

import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export function SeparatorDemo() {
  return (
    <div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  );
}

export default function PropertyCard({ property }) {
  return (
    <Link href={`/properties/${property.slug}`}>
      <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer bg-white dark:bg-zinc-900">
        {/* ✅ Image wrapper MUST have relative + fixed height */}
        <div className="relative w-full h-[25vh] bg-gray-100">
          <Image
            src={property.image} // dynamically from JSON
            alt={property.title || "Property image"}
            fill
            className="contain"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={false}
          />
        </div>
        <div className="p-4">
          <h3 className="text-base font-semibold">{property.title}</h3>
          <div className="flex text-sm items-center justify-between font-medium text-gray-500 mt-1">
            <div className="flex items-center">
              <spam>
                <LocationIcon />
              </spam>
              {property.location}
            </div>
            <div className="font-semibold text-gray-700">
              €{property.price.toLocaleString()}
            </div>
          </div>
          <Separator className="my-2" />
          <div className="flex text-sm items-center justify-between font-medium text-gray-500 mt-1">
            <div className="text-base text-gray-800">
              {property.rooms}{" "}
              <span className="text-xs text-gray-500">Beds</span>
            </div>
            <div className="h-5">
              <Separator orientation="vertical" />
            </div>
            <div className="text-base text-gray-800">
              {property.bathrooms}
              <spam className="text-xs text-gray-500 pl-1">Bathrooms</spam>
            </div>
            <div className="h-5">
              <Separator orientation="vertical" />
            </div>
            <div className="text-base text-gray-800">
              {property.size} <spam className="text-xs text-gray-500">m2</spam>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function LocationIcon() {
  return (
    <svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="-5.0 -10.0 110.0 135.0"
    >
      <path
        fill="#505050"
        d="m50.004 44.449c3.0547 0 5.8164-1.2344 7.8125-3.2266 1.9961-2.0039 3.2344-4.7656 3.2344-7.8203 0-3.0508-1.2383-5.8164-3.2344-7.8125s-4.7617-3.2344-7.8125-3.2344c-3.0508 0-5.8164 1.2383-7.8125 3.2344l-0.09375 0.089844c-1.9414 1.9883-3.1406 4.7109-3.1406 7.7227 0 3.0586 1.2344 5.8164 3.2266 7.8125 2 2 4.7617 3.2344 7.8203 3.2344zm13.992 33.078c-1.0508-0.32812-1.6406-1.4492-1.3125-2.5 0.32812-1.0508 1.4492-1.6406 2.5-1.3125 3.5156 1.0938 6.4414 2.5742 8.4922 4.3125 2.2344 1.8945 3.5 4.125 3.5 6.5625 0 3.9062-3.2773 7.293-8.5742 9.6094-4.7969 2.0977-11.379 3.3945-18.598 3.3945s-13.801-1.2969-18.598-3.3945c-5.2969-2.3164-8.5742-5.7031-8.5742-9.6094 0-2.4414 1.2656-4.668 3.5-6.5625 2.0547-1.7383 4.9766-3.2188 8.4922-4.3125 1.0508-0.32812 2.1719 0.26172 2.5 1.3125 0.32812 1.0508-0.26172 2.1719-1.3125 2.5-3.0117 0.9375-5.457 2.1562-7.1016 3.5469-1.3242 1.125-2.0781 2.3242-2.0781 3.5156 0 2.168 2.3594 4.2891 6.168 5.9531 4.3086 1.8828 10.32 3.0508 17.004 3.0508s12.695-1.168 17.004-3.0508c3.8125-1.6641 6.168-3.7812 6.168-5.9531 0-1.1875-0.75-2.3906-2.0781-3.5156-1.6445-1.3906-4.0898-2.6094-7.1016-3.5469zm-13.992-75.125c8.5586 0 16.309 3.4727 21.914 9.0781s9.0703 13.355 9.0703 21.918c0.007813 12.164-10.41 25.914-19.188 37.492-4.2383 5.5898-8.082 10.66-10.012 14.578-0.48828 0.98828-1.6836 1.3945-2.6719 0.90625-0.41016-0.20312-0.71875-0.52734-0.90625-0.90625-1.9297-3.918-5.7734-8.9883-10.012-14.578-8.7773-11.578-19.195-25.324-19.195-37.492 0.007813-8.5625 3.4766-16.312 9.082-21.918l0.11328-0.10547c5.6016-5.5469 13.305-8.9727 21.805-8.9727zm19.09 11.906c-4.8828-4.8828-11.633-7.9062-19.09-7.9062-7.4102 0-14.125 2.9844-19 7.8125l-0.085937 0.09375c-4.8906 4.8906-7.9141 11.641-7.9141 19.09 0.007813 10.836 9.9844 23.996 18.391 35.086 3.3164 4.3789 6.4023 8.4453 8.6133 12.023 2.2109-3.582 5.293-7.6484 8.6133-12.027 8.4062-11.09 18.383-24.25 18.383-35.086 0.007813-7.4492-3.0156-14.199-7.9062-19.09zm-8.4531 29.73c-2.7266 2.7227-6.4922 4.4102-10.637 4.4102-4.1445 0-7.9023-1.6836-10.629-4.4062l-0.011719-0.011719c-2.7227-2.7266-4.4102-6.4883-4.4102-10.633 0-4.0898 1.6406-7.8086 4.3047-10.527l0.10547-0.11328c2.7227-2.7227 6.4844-4.4102 10.641-4.4102 4.1523 0 7.918 1.6875 10.641 4.4102 2.7227 2.7227 4.4102 6.4883 4.4102 10.641 0 4.1523-1.6875 7.918-4.4102 10.637z"
      />
    </svg>
  );
}

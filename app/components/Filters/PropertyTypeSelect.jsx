"use client";

import React from "react";
import housesData from "@/Data/houses.json"; // ✅ direct import instead of fetch
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function PropertyTypeSelect({ filters, setFilters }) {
  // ✅ Extract unique property types from JSON
  const propertyTypes = React.useMemo(() => {
    return [...new Set(housesData.map((p) => p.type).filter(Boolean))];
  }, []);

  // 🔄 Sync local select value with parent filters
  const handleChange = (value) => {
    setFilters((prev) => ({
      ...prev,
      type: value === filters.type ? "" : value, // allow toggling off
    }));
  };

  return (
    <div className="flex flex-col gap-2">
      <Select value={filters.type || ""} onValueChange={handleChange}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select property type..." />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Property Types</SelectLabel>
            {propertyTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

"use client";

import { useState, useMemo } from "react";
import housesData from "@/Data/houses.json";
import commercialData from "@/Data/commercial.json";
import rentingData from "@/Data/renting.json";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import FilterBar from "./FilterBar";
import PropertiesGrid from "@/components/Properties/PropertiesGrid";

export default function PropertyTabs() {
  const [activeTab, setActiveTab] = useState("houses");
  const [filters, setFilters] = useState({
    location: "",
    type: "",
    rooms: 0,
  });

  // ✅ Reset filters when tab changes
  const handleTabChange = (value) => {
    setActiveTab(value);
    setFilters({
      location: "",
      type: "",
      rooms: 0,
    });
  };

  const getFilteredData = (data) =>
    data.filter((property) => {
      const matchesLocation = filters.location
        ? property.location === filters.location
        : true;
      const matchesType = filters.type ? property.type === filters.type : true;
      const matchesRooms = filters.rooms
        ? property.rooms >= filters.rooms
        : true;

      return matchesLocation && matchesType && matchesRooms;
    });

  const filteredHouses = useMemo(() => getFilteredData(housesData), [filters]);
  const filteredCommercial = useMemo(
    () => getFilteredData(commercialData),
    [filters]
  );
  const filteredRenting = useMemo(
    () => getFilteredData(rentingData),
    [filters]
  );

  return (
    <div className="space-y-8">
      <Tabs
        value={activeTab}
        onValueChange={handleTabChange}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-3 bg-muted/30">
          <TabsTrigger value="houses">Houses</TabsTrigger>
          <TabsTrigger value="commercial">Commercial</TabsTrigger>
          <TabsTrigger value="renting">Renting</TabsTrigger>
        </TabsList>

        {/* 🔍 Filters (shared UI, but reset on tab change) */}
        <div className="mt-6">
          <FilterBar filters={filters} setFilters={setFilters} />
        </div>

        {/* 🏠 Houses */}
        <TabsContent value="houses">
          <PropertiesGrid data={filteredHouses} />
        </TabsContent>

        {/* 🏢 Commercial */}
        <TabsContent value="commercial">
          <PropertiesGrid data={filteredCommercial} />
        </TabsContent>

        {/* 🏡 Renting */}
        <TabsContent value="renting">
          <PropertiesGrid data={filteredRenting} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

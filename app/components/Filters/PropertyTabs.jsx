"use client";

import { useState, useMemo } from "react";
import housesData from "@/Data/houses.json";
import commercialData from "@/Data/commercial.json";
import rentingData from "@/Data/renting.json";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import FilterBar from "./FilterBar";
import PropertiesGrid from "@/components/Properties/PropertiesGrid";

import { Separator } from "@/components/ui/separator";

export function SeparatorDemo() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm leading-none font-medium">Radix Primitives</h4>
        <p className="text-muted-foreground text-sm">
          An open-source UI component library.
        </p>
      </div>
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
      <div>
        <Tabs
          value={activeTab}
          onValueChange={handleTabChange}
          className="flex w-full"
        >
          {/* Tabs and Filters side by side, now using flex */}
          <div className="flex gap-8 items-start w-full">
            {/* Tab list (left, flex-1) */}
            <div className="flex-1">
              <TabsList className="w-full bg-muted/30">
                <TabsTrigger value="houses">Houses</TabsTrigger>
                <TabsTrigger value="commercial">Commercial</TabsTrigger>
                <TabsTrigger value="renting">Renting</TabsTrigger>
              </TabsList>
            </div>
            {/* Filters (right, flex-1) */}
            <div className="flex-1">
              <FilterBar filters={filters} setFilters={setFilters} />
            </div>
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
    </div>
  );
}

"use client";

import * as React from "react";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import housesData from "@/Data/houses.json"; // ✅ direct import (no fetch)
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function LocationSelect({ filters, setFilters }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  // ✅ Extract unique locations from JSON
  const locations = React.useMemo(() => {
    return [...new Set(housesData.map((p) => p.location).filter(Boolean))];
  }, []);

  // 🔄 Sync Combobox value when filters reset
  React.useEffect(() => {
    if (!filters.location) {
      setValue("");
    }
  }, [filters.location]);

  const handleSelect = (currentValue) => {
    const newValue = currentValue === value ? "" : currentValue;
    setValue(newValue);
    setFilters((prev) => ({ ...prev, location: newValue }));
    setOpen(false);
  };

  return (
    <div className="flex flex-col gap-2">
      {/* <label className="text-sm font-medium text-gray-600">
        Select Location
      </label> */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {value || "Select location..."}
            <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search location..." />
            <CommandList>
              <CommandEmpty>No location found.</CommandEmpty>
              <CommandGroup>
                {locations.map((loc) => (
                  <CommandItem
                    key={loc}
                    value={loc}
                    onSelect={() => handleSelect(loc)}
                  >
                    <CheckIcon
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === loc ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {loc}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

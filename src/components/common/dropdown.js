"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DropdownMenuCheckboxes({selectedItem, setSelectedItem, options, setOptions, loading, setLoading}) {


  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="!focus:outline-none focus-visible:outline-none focus-visible:ring-0"
        >
          {selectedItem ? `Selected: ${selectedItem?.label}` : "Select an option"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Select an AI Agent</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {options.map((option) => (
          <DropdownMenuItem
            key={option.label}
            onSelect={() => setSelectedItem({label : option.label , value : option.value})}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default DropdownMenuCheckboxes;
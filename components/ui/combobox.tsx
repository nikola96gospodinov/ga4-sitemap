"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  Command,
} from "@/components/ui/command";
import { ChevronsUpDown, Check } from "lucide-react";
import { useState } from "react";

type ComboboxOption<T> = {
  value: string;
  label: string;
  data?: T;
};

type Props<T = unknown> = {
  options: ComboboxOption<T>[];
  selectedValue: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
  width?: string;
  className?: string;
  disabled?: boolean;
  showValueInOptions?: boolean;
  formatValueForDisplay?: (value: string) => string;
};

export function Combobox<T = unknown>({
  options,
  selectedValue,
  onValueChange,
  placeholder = "Select option...",
  searchPlaceholder = "Search options...",
  emptyMessage = "No options found.",
  width = "300px",
  className,
  disabled = false,
  showValueInOptions = false,
  formatValueForDisplay,
}: Props<T>) {
  const [open, setOpen] = useState(false);

  const selectedOption = options.find(
    (option) => option.value === selectedValue
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("justify-between", className)}
          style={{ width }}
          disabled={disabled}
        >
          {selectedOption ? selectedOption.label : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0" style={{ width }}>
        <Command className="w-full">
          <CommandInput placeholder={searchPlaceholder} />
          <CommandList>
            <CommandEmpty>{emptyMessage}</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  className="flex justify-between"
                  key={option.value}
                  value={`${option.value} ${option.label}`}
                  onSelect={(currentValue) => {
                    const optionValue = currentValue.split(" ")[0];
                    onValueChange(
                      optionValue === selectedValue ? "" : optionValue
                    );
                    setOpen(false);
                  }}
                >
                  <span>
                    {option.label}{" "}
                    {showValueInOptions &&
                      `(${
                        formatValueForDisplay
                          ? formatValueForDisplay(option.value)
                          : option.value
                      })`}
                  </span>
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedValue === option.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

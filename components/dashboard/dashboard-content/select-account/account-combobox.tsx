"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GoogleAccount } from "@/services/ga4/get-ga4-accounts.service";
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

type Props = {
  accounts: GoogleAccount[];
  selectedAccount: string;
  setSelectedAccount: React.Dispatch<React.SetStateAction<string>>;
};

export const AccountCombobox = ({
  accounts,
  selectedAccount,
  setSelectedAccount,
}: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between w-[300px]"
        >
          {selectedAccount
            ? accounts?.find((account) => account.name === selectedAccount)
                ?.displayName
            : "Select account..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-[300px]">
        <Command className="w-full">
          <CommandInput placeholder="Search accounts..." />
          <CommandList>
            <CommandEmpty>No account found.</CommandEmpty>
            <CommandGroup>
              {accounts?.map((account) => (
                <CommandItem
                  className="flex justify-between"
                  key={account.name}
                  value={`${account.name} ${account.displayName}`}
                  onSelect={(currentValue) => {
                    const accountName = currentValue.split(" ")[0];
                    setSelectedAccount(
                      accountName === selectedAccount ? "" : accountName
                    );
                    setOpen(false);
                  }}
                >
                  <span>
                    {account.displayName} (#
                    {account.name.replace("accounts/", "")})
                  </span>
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedAccount === account.name
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
};

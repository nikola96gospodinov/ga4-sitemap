"use client";

import { useGetGA4Accounts } from "@/services/ga4/get-ga4-accounts.service";
import { UsersRound } from "lucide-react";
import { Spinner } from "../../../../ui/spinner";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Combobox } from "@/components/ui/combobox";

type Props = {
  selectedAccount: string;
  setSelectedAccount: React.Dispatch<React.SetStateAction<string>>;
};

export const AccountSelector = ({
  selectedAccount,
  setSelectedAccount,
}: Props) => {
  const { data: accounts, isLoading, isError, refetch } = useGetGA4Accounts();

  useEffect(() => {
    if (accounts && accounts.length === 1) {
      setSelectedAccount(accounts[0].name);
    }
  }, [accounts, setSelectedAccount]);

  const content = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col justify-center items-center h-full gap-4">
          <Spinner />
          <p>Loading accounts...</p>
        </div>
      );
    }

    if (isError) {
      return (
        <div className="flex flex-col justify-center items-center h-full">
          <p className="text-red-700 text-lg font-semibold mb-1">
            Something went wrong...
          </p>
          <p className="text-slate-950 text-sm  mb-4">
            Please try again or come back later.
          </p>
          <Button size="sm" onClick={() => refetch()}>
            Try again
          </Button>
        </div>
      );
    }

    if (!accounts || accounts.length === 0) {
      return (
        <div className="flex flex-col justify-center items-center h-full gap-2">
          <p className="text-slate-950 text-lg font-semibold">
            No accounts found
          </p>
          <p className="text-slate-950 text-sm">
            Double check if you&apos;re using the correct Google account.
          </p>
        </div>
      );
    }

    if (accounts.length === 1) {
      return (
        <div className="flex flex-col justify-center items-center h-full gap-2">
          <p className="text-slate-950 text-lg">
            Results showing for: <b>{accounts[0].displayName}</b> ( #
            {accounts[0].name.replace("accounts/", "")})
          </p>
        </div>
      );
    }

    return (
      <>
        <p className="text-slate-950 mb-0.5">
          It seems like you have more than one GA4 account. Select the one you
          want to use below:
        </p>

        <Combobox
          options={accounts.map((account) => ({
            value: account.name,
            label: account.displayName,
          }))}
          selectedValue={selectedAccount}
          onValueChange={setSelectedAccount}
          showValueInOptions
          formatValueForDisplay={(value) => value.replace("accounts/", "")}
        />
      </>
    );
  };

  return (
    <div className="flex flex-col gap-4 bg-slate-300/30 p-8 rounded-lg mt-4">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 bg-slate-700 px-4 py-2 rounded-tl-lg rounded-br-lg transform -translate-y-8 -translate-x-8 border-l-2 border-t-2 border-slate-200 w-fit -mb-4">
          <UsersRound className="w-4 h-4 text-white" />
          <h2 className="text-l text-white font-bold">Select Account</h2>
        </div>

        {content()}
      </div>
    </div>
  );
};

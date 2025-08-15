"use client";

import { useGetGA4Accounts } from "@/services/ga4/get-ga4-accounts.service";
import { UsersRound } from "lucide-react";
import { Spinner } from "../../../ui/spinner";
import { AccountCombobox } from "./account-combobox";
import { useEffect } from "react";

type Props = {
  selectedAccount: string;
  setSelectedAccount: React.Dispatch<React.SetStateAction<string>>;
};

export const SelectAccount = ({
  selectedAccount,
  setSelectedAccount,
}: Props) => {
  const { data: accounts, isLoading } = useGetGA4Accounts();

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
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-tl-lg rounded-br-lg transform -translate-y-8 -translate-x-8 border-l-2 border-t-2 border-slate-200 w-fit -mb-4">
          <UsersRound className="w-4 h-4" />
          <h2 className="text-l text-slate-800 font-bold">Select Account</h2>
        </div>

        <p className="text-slate-950 mb-0.5">
          It seems like you have more than one GA4 account. Select the one you
          want to use.
        </p>

        <AccountCombobox
          accounts={accounts}
          selectedAccount={selectedAccount}
          setSelectedAccount={setSelectedAccount}
        />
      </>
    );
  };

  return (
    <div className="flex flex-col gap-4 bg-slate-300/30 p-8 rounded-lg mt-4">
      <div className="flex flex-col gap-2">{content()}</div>
    </div>
  );
};

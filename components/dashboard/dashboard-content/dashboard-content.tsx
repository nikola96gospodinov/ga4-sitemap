"use client";

import { useState } from "react";
import { SelectAccount } from "./select-account/select-account";
import { DataChart } from "./data-chart/data-chart";

export const DashboardContent = () => {
  const [selectedAccount, setSelectedAccount] = useState<string>("");

  return (
    <>
      <SelectAccount
        selectedAccount={selectedAccount}
        setSelectedAccount={setSelectedAccount}
      />

      {selectedAccount && <DataChart selectedAccount={selectedAccount} />}
    </>
  );
};

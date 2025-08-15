"use client";

import { useState } from "react";
import { AccountSelector } from "./account-selector/account-selector";
import { PropertySelector } from "./chart/property-selector";

export const DashboardContent = () => {
  const [selectedAccount, setSelectedAccount] = useState<string>("");

  return (
    <>
      <AccountSelector
        selectedAccount={selectedAccount}
        setSelectedAccount={setSelectedAccount}
      />

      {selectedAccount && (
        <PropertySelector selectedAccount={selectedAccount} />
      )}
    </>
  );
};

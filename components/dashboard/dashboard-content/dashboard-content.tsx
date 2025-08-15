"use client";

import { useState } from "react";
import { SelectAccount } from "./select-account/select-account";

type Props = {
  accessToken: string;
};

export const DashboardContent = ({ accessToken }: Props) => {
  const [selectedAccount, setSelectedAccount] = useState<string>("");

  return (
    <SelectAccount
      accessToken={accessToken}
      selectedAccount={selectedAccount}
      setSelectedAccount={setSelectedAccount}
    />
  );
};

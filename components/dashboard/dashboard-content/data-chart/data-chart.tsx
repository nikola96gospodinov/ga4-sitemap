type Props = {
  selectedAccount: string;
};

export const DataChart = ({ selectedAccount }: Props) => {
  return (
    <div className="flex flex-col gap-4 bg-slate-300/30 p-8 rounded-lg mt-4">
      <div className="flex flex-col gap-2">
        <h2 className="text-l text-slate-800 font-bold">Data Chart</h2>
      </div>
    </div>
  );
};

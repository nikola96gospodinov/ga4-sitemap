import { cn } from "@/lib/utils";

type Props = {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
};

export const Heading = ({ text, as = "h1", className }: Props) => {
  const Comp = as;

  return (
    <Comp
      className={cn(
        "font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent",
        className
      )}
    >
      {text}
    </Comp>
  );
};

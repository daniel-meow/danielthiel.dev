import clsx from "clsx";
interface ITextProps {
  children: any;
  color?: "black" | "white";
}

const mapColor = {
  black: "text-black",
  white: "text-white",
};

export const Text = ({ color = "black", children }: ITextProps) => {
  return <p className={clsx("antialiased", mapColor[color])}>{children}</p>;
};

interface IHeadingProps {
  children: any;
}

export const Heading = ({ children }: IHeadingProps) => {
  return <h1 className="antialiased">{children}</h1>;
};

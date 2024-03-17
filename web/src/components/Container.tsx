import { twMerge } from "tailwind-merge";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Container = (props: ContainerProps) => {
  const { children, className, ...otherProps } = props;

  return (
    <div
      className={twMerge("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default Container;

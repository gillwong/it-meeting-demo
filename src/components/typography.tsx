import { HTMLAttributes } from "react";

function H1({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 className={`text-4xl font-bold ${className}`} {...props}>
      {children}
    </h1>
  );
}

function H2({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={`text-3xl font-semibold ${className}`} {...props}>
      {children}
    </h2>
  );
}

function H3({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={`text-2xl font-semibold ${className}`} {...props}>
      {children}
    </h3>
  );
}

function H4({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4 className={`text-xl font-semibold ${className}`} {...props}>
      {children}
    </h4>
  );
}

export { H1, H2, H3, H4 };

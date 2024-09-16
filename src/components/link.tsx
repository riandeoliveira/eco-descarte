import type { AnchorHTMLAttributes, ReactElement } from "react";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = ({ children, ...props }: LinkProps): ReactElement => {
  return (
    <a
      style={{ boxShadow: "0 0 20px #3b82f6" }}
      className="py-2 bg-blue-500 text-white text-center rounded-lg items-center text-base hover:bg-blue-600 transition-all block w-24 font-semibold"
      {...props}
    >
      {children}
    </a>
  );
};

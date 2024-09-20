import type { AnchorHTMLAttributes, ReactElement } from "react";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = ({ children, ...props }: LinkProps): ReactElement => {
  return (
    <a
      style={{ boxShadow: "0 0 20px #22c55e" }}
      className="py-2 bg-green-500 text-white text-center rounded-lg items-center text-base hover:bg-green-600 transition-all block p-4 font-semibold"
      {...props}
    >
      {children}
    </a>
  );
};

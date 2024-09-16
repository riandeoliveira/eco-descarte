import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ReactElement } from "react";

type NavLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const NavLink = ({ children, className, ...props }: NavLinkProps): ReactElement => {
  return (
    <a
      className={cn(
        "text-white uppercase hover:text-blue-500 transition-colors font-semibold",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
};

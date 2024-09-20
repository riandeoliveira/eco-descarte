import { cn } from "@/lib/utils";
import type { SvgIconComponent } from "@mui/icons-material";
import type { ReactElement, ReactNode } from "react";

type InfoCardProps = {
  title: string;
  icon: SvgIconComponent;
  description?: string;
  children?: ReactNode;
  className?: string;
};

export const InfoCard = ({
  title,
  description = "",
  className,
  children,
  icon: Icon,
}: InfoCardProps): ReactElement => {
  return (
    <div
      data-aos="flip-right"
      className={cn(
        "bg-zinc-200 p-8 rounded-lg gap-2 text-center flex flex-col items-center tablet-m:p-2",
        className,
      )}
    >
      <Icon className="text-green-500 !text-5xl" />
      <strong className="text-green-900 text-2xl tablet-m:text-lg">{title}</strong>
      <p className="text-base text-zinc-500">{description}</p>
      {children}
    </div>
  );
};

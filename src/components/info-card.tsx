import { cn } from "@/lib/utils";
import type { SvgIconComponent } from "@mui/icons-material";
import type { ReactElement } from "react";

type InfoCardProps = {
  title: string;
  icon: SvgIconComponent;
  description: string;
  className?: string;
};

export const InfoCard = ({
  title,
  description,
  className,
  icon: Icon,
}: InfoCardProps): ReactElement => {
  return (
    <div
      data-aos="flip-right"
      className={cn(
        "bg-zinc-900 p-8 rounded-lg gap-2 text-center flex flex-col items-center",
        className,
      )}
    >
      <Icon className="text-blue-500 !text-5xl" />
      <strong className="text-white text-2xl">{title}</strong>
      <p className="text-base text-zinc-500">{description}</p>
    </div>
  );
};

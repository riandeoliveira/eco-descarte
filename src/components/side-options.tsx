import { Icon } from "@/assets/icons";
import { Tooltip } from "@mui/material";
import type { ReactElement } from "react";

export const SideOptions = (): ReactElement => {
  return (
    <Tooltip title="Contato por WhatsApp">
      <div className="fixed bottom-10 right-10 tablet-s:bottom-5 tablet-s:right-5">
        <a href="https://wa.me/5531982454597" target="_blank" rel="noreferrer">
          <div
            style={{ boxShadow: "0 0 20px #1BD741" }}
            className="rounded-full hover:scale-125 transition-transform p-2 bg-[#1BD741]"
          >
            <Icon.WhatsApp className="!w-10 !h-10 text-white tablet-s:!w-8 tablet-s:!h-8" />
          </div>
        </a>
      </div>
    </Tooltip>
  );
};

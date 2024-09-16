import { Icon } from "@/assets/icons";
import { Divider, IconButton, Menu, MenuItem } from "@mui/material";
import type { ReactElement } from "react";
import { useState, type MouseEvent } from "react";
import { Link } from "./link";
import { NavLink } from "./nav-link";

export const MobileMenu = (): ReactElement => {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);

  const isOpen: boolean = !!anchorElement;

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    setAnchorElement(event.currentTarget);
  };

  const handleClose = (): void => setAnchorElement(null);

  return (
    <>
      <Icon.Home className="text-blue-500 !text-4xl !hidden laptop-s:!block" />
      <IconButton color="info" onClick={handleClick} className="!hidden laptop-s:!block">
        <Icon.Menu className="text-blue-500 !text-4xl" />
      </IconButton>
      <Menu
        anchorEl={anchorElement}
        open={isOpen}
        onClose={handleClose}
        className="!hidden laptop-s:!block"
      >
        <MenuItem>
          <NavLink href="#home" className="w-full">
            Início
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink href="#characteristics" className="w-full">
            Características
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink href="#" className="w-full">
            Preços
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink href="#" className="w-full">
            Perguntas Frequentes
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink href="#" className="w-full">
            Ajuda
          </NavLink>
        </MenuItem>
        <Divider />
        <MenuItem>
          <Link href="https://www.botcampanha.com/app_Login/" target="_blank">
            Entre
          </Link>
        </MenuItem>
      </Menu>
    </>
  );
};

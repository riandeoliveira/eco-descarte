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
      <Icon.Home className="text-green-500 !text-4xl !hidden tablet-m:!block" />
      <IconButton color="info" onClick={handleClick} className="!hidden tablet-m:!block">
        <Icon.Menu className="text-green-500 !text-4xl" />
      </IconButton>
      <Menu
        anchorEl={anchorElement}
        open={isOpen}
        onClose={handleClose}
        className="!hidden tablet-m:!block"
      >
        <MenuItem>
          <NavLink href="#" className="w-full">
            Início
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink href="#about" className="w-full">
            Sobre
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink href="#garbage_types" className="w-full">
            Tipos de Lixo
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink href="#questions" className="w-full">
            Dúvidas Frequentes
          </NavLink>
        </MenuItem>
        <Divider />
        <MenuItem>
          <Link href="https://www.reciclasampa.com.br/aprenda-a-reciclar" target="_blank">
            Aprenda a Reciclar
          </Link>
        </MenuItem>
      </Menu>
    </>
  );
};

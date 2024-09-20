import { cn } from "@/lib/utils";
import { useEffect, useState, type ReactElement } from "react";
import { Link } from "./link";
import { MobileMenu } from "./mobile-menu";
import { NavLink } from "./nav-link";

export const Header = (): ReactElement => {
  const headerHeight: number = 80;

  const [isHeaderFixed, setIsHeaderFixed] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollPosition: number = window.scrollY;

      if (scrollPosition > headerHeight) {
        setIsHeaderFixed(true);

        return;
      }

      setIsHeaderFixed(false);
    };

    window.addEventListener("scroll", handleScroll);

    return (): void => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isHeaderFixed && <div style={{ height: `${headerHeight}px` }} />}
      <header
        data-aos="fade-down"
        style={{ height: `${headerHeight}px` }}
        className={cn(
          "flex justify-center mx-4 mt-8 tablet-s:mt-0",
          isHeaderFixed ? "fixed top-0 left-0 right-0 bg-zinc-200 z-50 m-0 px-4" : "",
        )}
      >
        <div className="flex justify-between w-[1200px] items-center">
          <nav className="flex gap-8 tablet-m:hidden">
            <NavLink href="#">Início</NavLink>
            <NavLink href="#about">Sobre</NavLink>
            <NavLink href="#garbage_types">Tipos de Lixo</NavLink>
            <NavLink href="#questions">Dúvidas Frequentes</NavLink>
          </nav>
          <div className="tablet-m:hidden">
            <Link href="https://www.reciclasampa.com.br/aprenda-a-reciclar" target="_blank">
              Aprenda a Reciclar
            </Link>
          </div>
          <MobileMenu />
        </div>
      </header>
    </>
  );
};

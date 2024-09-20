import { images } from "@/assets/images";
import type { ReactElement } from "react";

type ExternalLinkProps = {
  href: string;
  children: string;
};

const ExternalLink = ({ href, children }: ExternalLinkProps): ReactElement => {
  return (
    <li>
      ●
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="underline text-green-500 font-semibold ml-2"
      >
        {children}
      </a>
    </li>
  );
};

export const Footer = (): ReactElement => {
  return (
    <footer className="bg-zinc-200 flex justify-center px-4 py-8">
      <div className="w-[1200px] flex flex-col justify-between gap-24">
        <div>
          <strong className="text-green-500 text-3xl tablet-m:text-2xl">
            Para mais informações, acesse:
          </strong>
          <ul className="flex flex-col gap-2 text-justify mt-4 text-zinc-500">
            <ExternalLink href="https://gravatai.atende.net/cidadao/pagina/ecopontos">
              Ecopontos em Gravataí.
            </ExternalLink>
            <ExternalLink href="https://vidramaq.com.br/blog/descarte-de-vidro-como-fazer-corretamente/">
              Como realizar corretamente o descarte de vidro.
            </ExternalLink>
            <ExternalLink href="https://www.gov.br/mma/pt-br">
              Página do Ministério do Meio Ambiente e Mudança do Clima.
            </ExternalLink>
            <ExternalLink href="https://cempre.org.br/">Site do CEMPRE.</ExternalLink>
            <ExternalLink href="https://www.reciclasampa.com.br/">
              Site do Recicla Sampa.
            </ExternalLink>
          </ul>
        </div>
        <div className="flex justify-between tablet-s:flex-col tablet-s:items-center">
          <a
            href="https://www.cesuca.edu.br/"
            target="_blank"
            rel="noreferrer"
            className="flex tablet-m:scale-75 w-64 h-20"
          >
            <img src={images.cesuca} alt="" className="object-cover w-full h-full" />
          </a>
          <a
            href="https://gravatai.atende.net/"
            target="_blank"
            rel="noreferrer"
            className="flex tablet-m:scale-75 w-64 h-20"
          >
            <img src={images.gravatai} alt="" className="object-cover w-full h-full" />
          </a>
        </div>
      </div>
    </footer>
  );
};

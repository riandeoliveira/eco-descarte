import { images } from "@/assets/images";
import type { ReactElement } from "react";

export const ContactManagementSection = (): ReactElement => {
  return (
    <section className="flex gap-12 tablet-s:gap-6 tablet-s:flex-col items-center">
      <div data-aos="fade-right" className="flex-1 flex flex-col gap-8 tablet-s:gap-4">
        <h2 className="text-white text-4xl tablet-s:text-center laptop-s:text-3xl">
          Gerenciamento de Leads e Contatos
        </h2>
        <div className="flex flex-col gap-4 tablet-s:gap-2">
          <div className="text-lg items-center">
            <strong className="text-white">Importação de contatos:</strong>
            <p className="text-zinc-500">
              Carregue sua lista de contatos e automatize o envio de mensagens segmentadas.
            </p>
          </div>
          <div className="text-lg">
            <strong className="text-white">Segmentação precisa:</strong>
            <p className="text-zinc-500">
              Direcione suas mensagens com base no comportamento e interesses dos leads.
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <img
          src={images.contactUs}
          alt="Software de call center para pequenas empresas, com interface intuitiva e recursos de gerenciamento de chamadas eficientes."
          data-aos="fade-left"
        />
      </div>
    </section>
  );
};

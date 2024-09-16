import { Icon } from "@/assets/icons";
import { images } from "@/assets/images";
import type { ReactElement } from "react";
import { InfoCard } from "./info-card";

export const DifferentialsSection = (): ReactElement => {
  return (
    <section className="flex flex-col gap-12 tablet-s:gap-6">
      <h2 data-aos="fade-in" className="text-white text-4xl text-center tablet-s:text-center laptop-s:text-3xl">
        Diferenciais da Bot Campanha
      </h2>
      <div className="flex gap-12 items-center laptop-s:flex-col tablet-s:gap-6">
        <div className="grid grid-cols-2 gap-8 flex-1 tablet-s:grid-cols-1 tablet-s:gap-4">
          <InfoCard
            title="Plataforma Completa"
            description="Todas as ferramentas necessárias para automatizar suas mensagens no WhatsApp em um só lugar"
            icon={Icon.WhatsApp}
          />
          <InfoCard
            title="Facilidade de Uso"
            description="Interface intuitiva, ideal para todos os níveis de conhecimento técnico."
            icon={Icon.Computer}
          />
          <InfoCard
            title="Suporte de Excelência"
            description="Equipe dedicada para maximizar o uso da Bot Campanha."
            icon={Icon.SupportAgent}
          />
          <InfoCard
            title="Segurança e Confiabilidade"
            description="Seus dados estão seguros conosco."
            icon={Icon.Lock}
          />
        </div>
        <div className="flex-[0.5] flex items-end">
          <img
            src={images.visualData}
            alt="Uma mulher de camisa azul e calças pretas em frente a um quadro branco com gráficos e tabelas."
            width={400}
            height={400}
            data-aos="fade-left"
          />
        </div>
      </div>
    </section>
  );
};

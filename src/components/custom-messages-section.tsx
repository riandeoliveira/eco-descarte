import { Icon } from "@/assets/icons";
import type { ReactElement } from "react";
import { InfoCard } from "./info-card";

export const CustomMessagesSection = (): ReactElement => {
  return (
    <section className="bg-zinc-900 rounded-3xl p-12 laptop-s:p-6">
      <h2
        data-aos="fade-in"
        style={{ textShadow: "0 0 10px #22c55e" }}
        className="text-blue-500 text-4xl text-center mb-12 laptop-s:text-3xl laptop-s:mb-6"
      >
        Envio de Mensagens Personalizadas
      </h2>
      <div className="grid grid-cols-3 gap-12 laptop-s:gap-6 tablet-m:grid-cols-1">
        <InfoCard
          title="Interação personalizada"
          description="Aborde seus leads pelo nome, enviando mensagens que parecem gravadas na hora."
          icon={Icon.Chat}
          className="bg-zinc-950 rounded-3xl"
        />
        <InfoCard
          title="Envio de mídias"
          description="Compartilhe imagens, vídeos, PDFs e áudios facilmente."
          icon={Icon.Image}
          className="bg-zinc-950 rounded-3xl"
        />
        <InfoCard
          title="Relatórios em tempo real"
          description="Monitore o desempenho de suas campanhas com detalhes."
          icon={Icon.BarChart}
          className="bg-zinc-950 rounded-3xl"
        />
      </div>
    </section>
  );
};

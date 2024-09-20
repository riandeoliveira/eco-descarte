import { Icon } from "@/assets/icons";
import type { ReactElement } from "react";
import { InfoCard } from "./info-card";

export const CustomMessagesSection = (): ReactElement => {
  return (
    <section className="bg-zinc-300 rounded-3xl p-12 laptop-s:p-6">
      <h2
        data-aos="fade-in"
        className="text-green-500 text-4xl text-center mb-12 laptop-s:text-3xl laptop-s:mb-6"
      >
        O Que é Lixo Orgânico?
      </h2>
      <div className="grid grid-cols-3 gap-12 laptop-s:gap-6 tablet-m:grid-cols-1">
        <InfoCard title="Restos de Alimentos" icon={Icon.Chat} className="bg-zinc-200 rounded-3xl">
          <ul className="flex flex-col text-justify gap-4">
            <li>● Cascas de frutas (ex.: maçã, banana, laranja)</li>
            <li>● Restos de vegetais (ex.: cenoura, batata, tomate)</li>
            <li>● Resíduos de alimentos cozidos e crus (ex.: arroz, feijão, carne)</li>
            <li>● Borra de café e filtros de café usados</li>
          </ul>
        </InfoCard>
        <InfoCard
          title="Envio de mídias"
          description="Compartilhe imagens, vídeos, PDFs e áudios facilmente."
          icon={Icon.Image}
          className="bg-zinc-200 rounded-3xl"
        />
        <InfoCard
          title="Relatórios em tempo real"
          description="Monitore o desempenho de suas campanhas com detalhes."
          icon={Icon.BarChart}
          className="bg-zinc-200 rounded-3xl"
        />
      </div>
    </section>
  );
};

import { Icon } from "@/assets/icons";
import type { ReactElement } from "react";
import { InfoCard } from "./info-card";

export const CharacteristicsSection = (): ReactElement => {
  return (
    <section id="characteristics">
      <h1 data-aos="fade-right" className="text-4xl text-green-500 mb-4 laptop-s:text-2xl">
        Por Que o Descarte Correto é Essencial?
      </h1>
      <p data-aos="fade-left" className="text-lg text-zinc-500 laptop-s:text-base">
        O descarte adequado de lixo é fundamental para a proteção ambiental e a saúde pública. Aqui
        estão os principais motivos:
      </p>
      <div className="grid grid-cols-2 gap-8 mt-12">
        <InfoCard
          title="Proteção ao Meio Ambiente"
          description="O lixo inadequado contamina solos, prejudicando a fauna e flora. Descartar
        corretamente ajuda a preservar recursos naturais e evitar poluição."
          icon={Icon.Forest}
        />
        <InfoCard
          title="Saúde Pública"
          description="O acúmulo de lixo pode gerar doenças e atrair pragas. O descarte correto minimiza esses riscos e protege a saúde da comunidade."
          icon={Icon.LocalHospital}
        />
        <InfoCard
          title="Economia Circular"
          description="Reciclar e reutilizar materiais promove uma economia sustentável, reduzindo a necessidade de novas matérias-primas e diminuindo o impacto ambiental."
          icon={Icon.CurrencyExchange}
        />
        <InfoCard
          title="Combate às Mudanças Climáticas"
          description="O lixo em aterros libera gases de efeito estufa, como o metano. Descartar corretamente e reciclar ajuda a reduzir essas emissões e combate o aquecimento global."
          icon={Icon.Thermostat}
        />
      </div>
    </section>
  );
};

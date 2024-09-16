import type { ReactElement } from "react";

export const CharacteristicsSection = (): ReactElement => {
  return (
    <section id="characteristics">
      <h1 data-aos="fade-right" className="text-4xl text-white mb-4 laptop-s:text-2xl">
        Características e Recursos
      </h1>
      <p data-aos="fade-left" className="text-lg text-zinc-500 laptop-s:text-base">
        Com a Bot Campanha, seu WhatsApp se transforma em uma ferramenta poderosa de vendas.
        Nossa plataforma oferece soluções completas para disparo de mensagens, agendamento e
        personalização, elevando a eficiência de sua comunicação com clientes.
      </p>
    </section>
  );
};

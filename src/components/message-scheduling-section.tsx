import { images } from "@/assets/images";
import type { ReactElement } from "react";

export const MessageSchedulingSection = (): ReactElement => {
  return (
    <section className="flex gap-12 tablet-s:flex-col items-center tablet-s:gap-6">
      <div className="flex-[0.6]">
        <img
          src={images.chatbot}
          alt="Uma mulher de camisa azul e calças pretas apontando para uma tela com um robô azul."
          width={400}
          height={400}
          data-aos="fade-right"
        />
      </div>
      <div data-aos="fade-left" className="flex-1 flex flex-col gap-8 tablet-s:gap-4">
        <h2 className="text-white text-4xl tablet-s:text-center laptop-s:text-3xl">
          Agendamento de Mensagens
        </h2>
        <div className="flex flex-col gap-4 tablet-s:gap-2">
          <div className="text-lg items-center">
            <strong className="text-white">Programação de postagens:</strong>
            <p className="text-zinc-500">
              Defina a data e hora para suas mensagens em diversas contas.
            </p>
          </div>
          <div className="text-lg">
            <strong className="text-white">Campanhas com múltiplas variáveis:</strong>
            <p className="text-zinc-500">
              Personalize suas mensagens com até 5 variáveis diferentes (data, hora, valor, etc.),
              conforme os dados da sua planilha.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

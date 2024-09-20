import { images } from "@/assets/images";
import type { ReactElement } from "react";

export const ContactManagementSection = (): ReactElement => {
  return (
    <section className="flex gap-12 tablet-s:gap-6 tablet-s:flex-col items-center">
      <div data-aos="fade-right" className="flex-1 flex flex-col gap-8 tablet-s:gap-4">
        <h2 className="text-green-500 text-4xl tablet-s:text-center laptop-s:text-3xl">
          O Que é Lixo Seco (Reciclável)?
        </h2>
        <div className="flex flex-col gap-24 tablet-m:gap-0">
          <div className="flex justify-between items-center tablet-m:flex-col">
            <div className="flex flex-col gap-12">
              <div className="text-lg">
                <strong className="text-green-500">Papel e Papelão:</strong>
                <ul className="flex flex-col text-justify mt-2 text-zinc-500">
                  <li>● Jornais e revistas.</li>
                  <li>● Caixas de papelão (ex.: caixas de cereal, embalagens).</li>
                  <li>● Cadernos e livros.</li>
                  <li>● Papel de escritório (ex.: folhas de impressora, envelopes).</li>
                </ul>
              </div>
              <div className="text-lg">
                <strong className="text-green-500">Vidros:</strong>
                <ul className="flex flex-col text-justify mt-2 text-zinc-500">
                  <li>● Garrafas de vidro (ex.: bebidas, condimentos).</li>
                  <li>● Frascos de vidro (ex.: cosméticos, alimentos).</li>
                  <li>● Potinhos de vidro.</li>
                </ul>
              </div>
            </div>
            <img
              src={images.bg2}
              alt=""
              className="w-[600px] h-[600px] tablet-m:w-[400px] tablet-m:h-[400px]"
            />
          </div>
          <div className="flex justify-between items-center gap-12 tablet-m:flex-col-reverse">
            <img
              src={images.bg4}
              alt=""
              className="w-[600px] h-[400px] tablet-m:w-[400px] tablet-m:h-[300px]"
            />
            <div className="flex flex-col gap-12">
              <div className="text-lg">
                <strong className="text-green-500">Plásticos:</strong>
                <ul className="flex flex-col text-justify mt-2 text-zinc-500">
                  <li>● Garrafas plásticas (ex.: água, refrigerante).</li>
                  <li>● Sacolas plásticas.</li>
                  <li>● Embalagens plásticas (ex.: caixas de alimentos, potes de iogurte).</li>
                  <li>● Tampas de plástico.</li>
                </ul>
              </div>
              <div className="text-lg">
                <strong className="text-green-500">Metais:</strong>
                <ul className="flex flex-col text-justify mt-2 text-zinc-500">
                  <li>● Latas de bebidas (ex.: refrigerantes, cervejas).</li>
                  <li>● Latas de alimentos (ex.: conservas, sopas).</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

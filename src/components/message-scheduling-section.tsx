import { images } from "@/assets/images";
import type { ReactElement } from "react";

export const MessageSchedulingSection = (): ReactElement => {
  return (
    <section id="garbage_types" className="flex tablet-m:flex-col items-center tablet-s:gap-6">
      <div className="flex-[0.6]">
        <img src={images.bg3} alt="" data-aos="fade-right" className="tablet-m:h-96" />
      </div>
      <div data-aos="fade-left" className="flex-1 flex flex-col gap-8 tablet-s:gap-4">
        <h2 className="text-green-500 text-4xl tablet-s:text-center laptop-s:text-3xl">
          O Que é Lixo Orgânico?
        </h2>
        <div className="flex flex-col gap-4 tablet-s:gap-2">
          <div className="text-lg">
            <strong className="text-green-500">Restos de Alimentos:</strong>
            <ul className="flex flex-col text-justify mt-2 text-zinc-500">
              <li>● Cascas de frutas (ex.: maçã, banana, laranja).</li>
              <li>● Restos de vegetais (ex.: cenoura, batata, tomate).</li>
              <li>● Resíduos de alimentos cozidos e crus (ex.: arroz, feijão, carne).</li>
              <li>● Borra de café e filtros de café usados.</li>
            </ul>
          </div>
          <div className="text-lg">
            <strong className="text-green-500">Resíduos de Jardinagem:</strong>
            <ul className="flex flex-col text-justify mt-2 text-zinc-500">
              <li>● Folhas secas.</li>
              <li>● Galhos e pequenos ramos.</li>
              <li>● Flores murchas.</li>
              <li>● Grama cortada.</li>
            </ul>
          </div>
          <div className="text-lg">
            <strong className="text-green-500">Outros:</strong>
            <ul className="flex flex-col text-justify mt-2 text-zinc-500">
              <li>● Ovos e cascas de ovos.</li>
              <li>● Papel toalha usado (se não tiver produtos químicos ou gordura).</li>
              <li>● Papel de cozinha sujo com alimentos.</li>
              <li>● Papel higiênico e fraldas descartáveis.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

import { images } from "@/assets/images";
import type { ReactElement } from "react";

export const HomeSection = (): ReactElement => {
  return (
    <section
      id="home"
      className="flex gap-12 tablet-l:gap-3 items-center tablet-l:flex-col-reverse"
    >
      <div
        data-aos="fade-right"
        className="flex-1 flex flex-col justify-center gap-8 tablet-s:gap-4"
      >
        <h1
          className="text-green-500 uppercase flex items-center"
          style={{ textShadow: "0 0 10px #22c55e" }}
        >
          <strong className="text-[230px] tablet-l:text-[180px] tablet-s:text-9xl font-semibold">
            Re
          </strong>
          <div className="flex flex-col">
            <span className="text-6xl tablet-l:text-5xl tablet-s:text-3xl font-bold">duza</span>
            <span className="text-6xl tablet-l:text-5xl tablet-s:text-3xl font-bold">use</span>
            <span className="text-6xl tablet-l:text-5xl tablet-s:text-3xl font-bold">cicle</span>
          </div>
        </h1>
        <p className="text-lg text-zinc-500 laptop-s:text-base">
          Descubra como pequenas ações podem ter um grande impacto no meio ambiente. Aprenda a
          separar, reciclar e descartar seus resíduos da maneira correta, contribuindo para um
          futuro mais limpo e sustentável.
        </p>
      </div>
      <div className="flex-[0.6] scale-125">
        <img src={images.bg1} alt="" width={400} height={400} data-aos="fade-left" />
      </div>
    </section>
  );
};

import { images } from "@/assets/images";
import type { ReactElement } from "react";

export const HomeSection = (): ReactElement => {
  return (
    <section id="home" className="flex gap-12 tablet-s:gap-6 items-center tablet-s:flex-col">
      <div className="flex-[0.5]">
        <img
          src={images.idea}
          alt="Duas pessoas sentadas em uma mesa com um laptop e uma lâmpada acesa."
          width={400}
          height={400}
          data-aos="fade-right"
        />
      </div>
      <div
        data-aos="fade-left"
        className="flex-1 flex flex-col justify-center gap-8 tablet-s:gap-4"
      >
        <h1
          className="text-blue-500 text-7xl laptop-s:text-5xl tablet-s:text-3xl"
          style={{ textShadow: "0 0 20px #3b82f6" }}
        >
          Aumente Suas Vendas com a Bot Campanha
        </h1>
        <p className="text-lg text-zinc-500 laptop-s:text-base">
          Envie mensagens ilimitadas e automatize conversas para potencializar seu marketing no
          WhatsApp.
        </p>
      </div>
    </section>
  );
};

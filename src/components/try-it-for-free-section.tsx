import { images } from "@/assets/images";
import type { ReactElement } from "react";

export const TryItForFreeSection = (): ReactElement => {
  return (
    <section className="flex gap-12 tablet-s:gap-6 tablet-s:flex-col">
      <div className="flex-1">
        <img
          src={images.groupDiscussion}
          alt="Três pessoas sentadas em uma mesa com laptops."
          width={800}
          data-aos="fade-right"
        />
      </div>
      <div
        data-aos="fade-left"
        className="flex-1 flex flex-col justify-center gap-4 tablet-s:gap-2"
      >
        <h2
          style={{ textShadow: "0 0 20px #3b82f6" }}
          className="text-blue-500 text-4xl laptop-s:text-3xl"
        >
          Experimente Gratuitamente Hoje Mesmo!
        </h2>
        <p className="text-lg text-zinc-500 laptop-s:text-base">
          Sem compromisso ou necessidade de cartão de crédito.
        </p>
      </div>
    </section>
  );
};

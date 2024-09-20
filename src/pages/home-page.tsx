import { CharacteristicsSection } from "@/components/characteristics-section";
import { ContactManagementSection } from "@/components/contact-management-section";
import { DifferentialsSection } from "@/components/differentials-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HomeSection } from "@/components/home-section";
import { MessageSchedulingSection } from "@/components/message-scheduling-section";
import { type ReactElement } from "react";

export const HomePage = (): ReactElement => {
  return (
    <>
      <Header />
      <main className="flex justify-center my-48 mx-4 tablet-s:my-12">
        <div className="flex flex-col gap-48 w-[1200px] tablet-s:gap-24">
          <HomeSection />
          <CharacteristicsSection />
          <MessageSchedulingSection />
          <ContactManagementSection />
          <DifferentialsSection />
        </div>
      </main>
      <Footer />
    </>
  );
};

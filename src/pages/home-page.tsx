import { CharacteristicsSection } from "@/components/characteristics-section";
import { ContactManagementSection } from "@/components/contact-management-section";
import { CustomMessagesSection } from "@/components/custom-messages-section";
import { DifferentialsSection } from "@/components/differentials-section";
import { Header } from "@/components/header";
import { HomeSection } from "@/components/home-section";
import { MessageSchedulingSection } from "@/components/message-scheduling-section";
import { SideOptions } from "@/components/side-options";
import { TryItForFreeSection } from "@/components/try-it-for-free-section";
import { type ReactElement } from "react";

export const HomePage = (): ReactElement => {
  return (
    <>
      <h1 className="text-red-500">Em Breve...</h1>
      {/* <Header />
      <main className="flex justify-center my-48 mx-4 tablet-s:my-12">
        <div className="flex flex-col gap-48 w-[1200px] tablet-s:gap-24">
          <HomeSection />
          <CharacteristicsSection />
          <CustomMessagesSection />
          <MessageSchedulingSection />
          <ContactManagementSection />
          <DifferentialsSection />
          <TryItForFreeSection />
        </div>
      </main>
      <SideOptions /> */}
    </>
  );
};

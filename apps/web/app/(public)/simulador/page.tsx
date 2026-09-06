import { Footer, ResponsiveNavigation } from "@/components/layout";
import { SimulatorPage } from "@/features/simulator";

export default function SimulatorRoutePage() {
  return (
    <>
      <ResponsiveNavigation />
      <SimulatorPage />
      <Footer theme="dark" />
    </>
  );
}

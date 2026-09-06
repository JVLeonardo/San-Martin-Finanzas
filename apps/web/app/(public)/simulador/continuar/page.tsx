import { Footer, ResponsiveNavigation } from "@/components/layout";
import { SimulatorContinueGate } from "@/features/simulator";

export default function SimulatorContinueRoutePage() {
  return (
    <>
      <ResponsiveNavigation />
      <SimulatorContinueGate />
      <Footer theme="dark" />
    </>
  );
}

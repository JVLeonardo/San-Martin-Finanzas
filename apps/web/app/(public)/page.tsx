import { ResponsiveNavigation } from "@/components/layout";
import { HomePage, HomeSimulatorEntry } from "@/features/home";

export default function Page() {
  return (
    <>
      <ResponsiveNavigation />
      <main className="min-w-0 flex-1">
        <HomePage simulator={<HomeSimulatorEntry />} />
      </main>
    </>
  );
}

"use client";

import { useRouter } from "next/navigation";

import { Simulator } from "@/features/simulator";

export function HomeSimulatorEntry() {
  const router = useRouter();

  return (
    <Simulator
      allowContinueWithoutAmount
      onContinue={() => router.push("/simulador")}
      responsiveWidth
    />
  );
}

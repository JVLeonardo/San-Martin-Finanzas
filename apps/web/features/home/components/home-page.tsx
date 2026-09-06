import type { ReactNode } from "react";

import { Footer } from "@/components/layout";

import { Hero } from "./hero";
import { HomeSections } from "./home-sections";

export interface HomePageProps {
  simulator: ReactNode;
}

export function HomePage({ simulator }: HomePageProps) {
  return (
    <>
      <Hero simulator={simulator} />
      <HomeSections />
      <Footer theme="dark" />
    </>
  );
}

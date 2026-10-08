import { About } from "@/components/home/about";
import { Contact } from "@/components/home/contact";
import { DesignApproach } from "@/components/home/design-approach";
import { Experiments } from "@/components/home/experiments";
import { Hero } from "@/components/home/hero";
import { SelectedWork } from "@/components/home/selected-work";
import { SiteHeader } from "@/components/layout/site-header";
import { HomeMotion } from "@/components/motion/home-motion";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <SelectedWork />
        <DesignApproach />
        <Experiments />
        <About />
      </main>
      <Contact />
      <HomeMotion />
    </>
  );
}

import React from "react";
import Hero from "../components/front/HeroSection";
import NavigationMenuDemo from "../components/front/NavigationMenu";

// import { NavigationMenuContent } from "@/components/ui/navigation-menu";

export default function Home() {
  return (
    <section className="">
      <div className="max-w-4xl mx-auto">
        <NavigationMenuDemo />
      </div>
      <Hero />
    </section>
  );
}

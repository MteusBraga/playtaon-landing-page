"use client";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { NavBar } from "./components/NavBar";
import { Section1 } from "./components/Section1";

export default function LandingPage() {
  return (
    <>
      <NavBar />
      <Hero />
      <Section1></Section1>
      <Footer></Footer>
    </>
  );
}

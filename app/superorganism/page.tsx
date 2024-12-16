import ContentIsMentor from "@/components/content-is-mentor";
import ContentIsPortfolio from "@/components/content-is-portfolio";
import HeaderIsHeader from "@/components/header-is-header";
import HeaderIsInvestment from "@/components/header-is-investment";
import HeaderIsMentor from "@/components/header-is-mentor";
import HeaderIsPledge from "@/components/header-is-pledge";
import HeaderIsPortfolio from "@/components/header-is-portfolio";
import Hero from "@/components/Hero";
import SectionIsFounder from "@/components/section-is-founder";
import SectionIsInvestment from "@/components/section-is-investment";
import ReactLenis from "lenis/react";

export default function ScrollPage() {
  return (
    <main>
      {/*<ReactLenis root>*/}
      <Hero></Hero>
      <div className="sticky-wrapper containt-paint smooth-scroll">
        <HeaderIsHeader></HeaderIsHeader>
        <SectionIsInvestment></SectionIsInvestment>
        <HeaderIsInvestment></HeaderIsInvestment>
        <HeaderIsPortfolio></HeaderIsPortfolio>
        <ContentIsPortfolio></ContentIsPortfolio>
        <SectionIsFounder></SectionIsFounder>
        <HeaderIsMentor></HeaderIsMentor>
        <ContentIsMentor></ContentIsMentor>
        <HeaderIsPledge></HeaderIsPledge>
      </div>
      {/*</ReactLenis>*/}
    </main>
  );
}

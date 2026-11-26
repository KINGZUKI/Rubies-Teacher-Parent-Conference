import Hero from "../components/home/Hero.jsx";
import StatsBanner from "../components/home/StatsBanner.jsx";
import GallerySection from "../components/home/GallerySection.jsx";
import {
  AboutSection, TakeawaysSection, ProgrammeSection, PartnersSection,
  SponsorSection, VenueSection, FAQSection, FinalCTA, SiteFooter
} from "../components/home/ContentSections.jsx";
import "../styles/home.css";
import "../styles/sections.css";

export default function HomePage() {
  return (
    <>
      <main id="main-content">
        <Hero />
        <StatsBanner />
        <AboutSection />
        <GallerySection />
        <TakeawaysSection />
        <ProgrammeSection />
        <PartnersSection />
        <SponsorSection />
        <VenueSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <SiteFooter />
    </>
  );
}

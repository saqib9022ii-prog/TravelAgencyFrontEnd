import AboutSection from "../components/AboutSection";
import Seo from "../seo/Seo";

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="Learn about Pak Sambrial Travels - a trusted agency for Umrah packages, work visa guidance, and international air tickets."
        path="/about"
        image="/logo.png"
      />

      <AboutSection />
    </>
  );
}

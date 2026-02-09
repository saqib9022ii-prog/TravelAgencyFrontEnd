// src/pages/Home.jsx
import Hero from "../components/Hero";
import Services from "../components/Services";
import PackagesTickets from "../components/PackageTickets";
import CTASection from "../components/CTASection";
import Seo from "../seo/Seo";

const Home = () => {
  return (
    <>
      <Seo
        title="Umrah Packages, Work Visa & Air Tickets"
        description="Trusted travel agency offering Umrah packages, ticket estimates, and work visa guidance. Contact us via WhatsApp for the latest rates and details."
        keywords="umrah packages, travel agency, work visa, air tickets, pakistan, sambrial, travel packages"
        path="/"
        image="/hero.jpg"
      />
      <Hero />
      <Services/>
      <PackagesTickets/>
      <CTASection/>
      {/* Next sections will come here */}
    </>
  );
};

export default Home;

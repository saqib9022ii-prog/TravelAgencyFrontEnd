// src/pages/Home.jsx
import { Helmet } from "react-helmet";
import Hero from "../components/Hero";
import Services from "../components/Services";
import PackagesTickets from "../components/PackageTickets";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
     <Helmet>
        <title>Umrah & Work Visa Travel Agency | Home</title>
        <meta
          name="description"
          content="Your trusted travel agency offering Umrah packages, ticket estimates, and work visa guidance. Contact us for details via WhatsApp."
        />
        <meta name="keywords" content="Umrah, travel agency, work visa, tickets, Pakistan, travel packages" />
        <meta name="author" content="Your Travel Agency" />

        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Umrah & Work Visa Travel Agency" />
        <meta property="og:description" content="Offering Umrah packages, ticket estimates, and work visa guidance." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/" />
        <meta property="og:image" content="https://yourwebsite.com/assets/hero-banner.png" />
      </Helmet>
      <Hero />
      <Services/>
      <PackagesTickets/>
      <CTASection/>
      <Footer/>
      {/* Next sections will come here */}
    </>
  );
};

export default Home;

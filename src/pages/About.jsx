import AboutSection from "../components/AboutSection"
import { Helmet } from "react-helmet"
export default function About(){
    return(
            <>
            <Helmet>
            <title>About Us | Your Travel Agency</title>
          <meta
              name="description"
              content="Learn about our trusted travel agency, our experience in Umrah packages and work visa guidance, and our office location."
          />
          <meta property="og:title" content="About Us | Your Travel Agency" />
          <meta property="og:description" content="Trusted agency for Umrah and work visa travel services." />
         <meta property="og:type" content="website" />
         <meta property="og:url" content="https://yourwebsite.com/about" />
            <meta property="og:image" content="https://yourwebsite.com/assets/about-banner.png" />
        </Helmet>

            <AboutSection/>
            </>

    )
}
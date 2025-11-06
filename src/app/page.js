import Banner from "./Components/Banner";
import Grid from "./Components/Grid";
import NewsletterSignup from "./Components/Newsletter";
import FaqSection from "./Components/faq";
import Jumbo from "./Components/featureCard";
import Footer from "./Components/Footer";

export default function HomePage() {
  return (
   <>
    <Jumbo />
    <Grid />
    <Banner />
    <NewsletterSignup />
 <FaqSection />
    <Footer />
  

   </>
  );
}

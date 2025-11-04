import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Grid from "./Components/Grid";
import Jumbo from "./Components/Jumbo";
import Newsletter from "./Components/Newsletter";

export default function HomePage() {
  return (
   <>
    <Jumbo />
    <Grid />
    <Banner />
    <Newsletter />
    <Footer />
   </>
  );
}

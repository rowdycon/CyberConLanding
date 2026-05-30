import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Highlights from "@/components/Highlights";
import Tracks from "@/components/Tracks";
import SponsorUs from "@/components/SponsorUs";
import Footer from "@/components/Footer";
// import Sponsors from "@/components/Sponsors";
// import Team from "@/components/Team";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Highlights />
      <Tracks />
      <SponsorUs />
      {/* <Team /> */}
      {/* <Sponsors /> */}
      <Footer />
    </>
  );
}

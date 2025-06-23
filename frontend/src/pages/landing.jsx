import Herosection from "../components/HeroSection";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import FAQ from "../components/FAQ";
import MainSection from "../components/mainsection";

function LandingPage() {
  return (
    <div className="bg-[#FBF3E8] border-t border-[#e8d5c4]">
      <Navbar />
      <Herosection />
      <MainSection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default LandingPage;

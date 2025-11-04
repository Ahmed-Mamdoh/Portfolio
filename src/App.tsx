import "./App.css";
import HeroSection from "./components/HeroSection";
import AboutMeSection from "./components/AboutMeSection";
import SkillsSection from "./components/SkillsSection";
import PortfolioSection from "./components/PortfolioSection";

function App() {
  return (
    <>
      <HeroSection />
      <div className="w-full bg-radial from-white to-[#010101]/16">
        <div className="container mx-auto">
          <AboutMeSection />
          <SkillsSection />
        </div>
        <PortfolioSection />
      </div>
    </>
  );
}

export default App;

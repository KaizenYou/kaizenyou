import AboutSection from "@/components/HomePage/AboutSection";
import DetailSection from "@/components/HomePage/DetailSection";
import FAQ from "@/components/HomePage/FaqSection";
import HeroSection from "@/components/HomePage/HeroSection";
import OurMission from "@/components/HomePage/OurMission";
import WhoSlider from "@/components/HomePage/WhoSlider";
import WhyUs from "@/components/HomePage/WhyUs";


export default function Home() {
  return (
    <>
      <HeroSection />
      <WhoSlider />
      <AboutSection />
      <DetailSection />
      <WhyUs />
      <FAQ />
    </>
  );
}

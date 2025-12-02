import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CounterSection from "@/components/CounterSection";
import AboutPreview from "@/components/AboutPreview";
import FacilitiesSection from "@/components/FacilitiesSection";
import GalleryPreview from "@/components/GalleryPreview";
import CTASection from "@/components/CTASection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <CounterSection />
      <AboutPreview />
      <FacilitiesSection />
      <GalleryPreview />
      <CTASection />
      <MapSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;

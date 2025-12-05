import { MapPin, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import venue4 from "@/assets/venue-4.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${venue4})` }}
      />
      
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-background to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Pre-title */}
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-sm mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-sm font-medium tracking-wider uppercase">
              Welcome to
            </span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <span className="gold-gradient-text">Alisan Royal</span>
            <br />
            <span className="text-foreground">Banquet</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground font-elegant mb-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            Banquet Hall • Ceremonial Hall • Community Hall • Garden • Picnic Garden
          </p>
          
          {/* Divider */}
          <div className="section-divider my-8 animate-fade-up" style={{ animationDelay: "0.5s" }} />
          
          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-foreground/80 mb-10 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <MapPin className="w-5 h-5 text-gold" />
            <p className="text-sm md:text-base">
              Jagannathpur, Barasat-Barrackpore Road, Opposite Adamas University, Kolkata – 700126
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.8s" }}>
            <Button variant="gold" size="xl" asChild>
              <a href="https://wa.me/916289438805?text=Hello! I would like to book a venue at Alisan Royal Banquet." target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Book Now
              </a>
            </Button>
            <Button variant="goldOutline" size="xl" asChild>
              <a href="tel:6289438805">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gold/50 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-gold animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

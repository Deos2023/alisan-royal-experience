import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Building2, Target, Eye, Heart, Award, Users, Clock, Sparkles } from "lucide-react";
import venue4 from "@/assets/venue-4.jpeg";
import venue5 from "@/assets/venue-5.jpeg";
import venue7 from "@/assets/venue-7.jpeg";

const facilities = [
  { icon: Building2, title: "Banquet Hall", description: "Grand halls with elegant interiors and crystal chandeliers" },
  { icon: Sparkles, title: "Ceremonial Hall", description: "Perfect space for traditional ceremonies and rituals" },
  { icon: Users, title: "Community Hall", description: "Spacious area for large community gatherings" },
  { icon: Heart, title: "Garden", description: "Lush green gardens with beautiful fountain" },
  { icon: Award, title: "Picnic Garden", description: "Open-air space for casual celebrations" },
  { icon: Clock, title: "Flexible Timing", description: "We accommodate your schedule" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: `url(${venue4})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-4">
            <span className="gold-gradient-text">About</span>{" "}
            <span className="text-foreground">Us</span>
          </h1>
          <div className="section-divider" />
        </div>
      </section>

      {/* History Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold font-medium tracking-wider uppercase text-sm">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
                <span className="text-foreground">The Legacy of</span>
                <br />
                <span className="gold-gradient-text">Alisan Royal</span>
              </h2>
              <div className="section-divider !mx-0 mb-8" />
              
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg font-elegant">
                Established on <span className="text-gold font-semibold">01/08/2025</span>, Alisan Royal Banquet 
                was founded with a vision to provide the most luxurious and memorable venue for all 
                your special occasions. Located in the heart of Kolkata, opposite Adamas University, 
                our venue stands as a testament to grandeur and elegance.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg font-elegant">
                From intimate gatherings to grand celebrations, we offer the perfect setting for 
                weddings, receptions, corporate events, birthday parties, and community gatherings. 
                Our commitment to excellence ensures that every event hosted at Alisan Royal Banquet 
                becomes an unforgettable memory.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 to-royal/20 rounded-3xl blur-2xl opacity-50" />
              <div className="relative rounded-2xl overflow-hidden gold-border">
                <img
                  src={venue7}
                  alt="Alisan Royal Banquet Interior"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="glass-card p-10">
              <div className="w-16 h-16 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-3xl font-display font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed font-elegant text-lg">
                To be the premier choice for celebrations in Kolkata, known for our 
                unparalleled elegance, exceptional service, and the ability to turn 
                every event into a royal experience that guests cherish forever.
              </p>
            </div>
            
            {/* Mission */}
            <div className="glass-card p-10">
              <div className="w-16 h-16 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-3xl font-display font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed font-elegant text-lg">
                To provide world-class venues and services that exceed expectations, 
                combining traditional elegance with modern amenities to create the 
                perfect backdrop for life's most precious moments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="py-24 relative">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: `url(${venue5})` }}
        />
        <div className="absolute inset-0 bg-background/95" />
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold font-medium tracking-wider uppercase text-sm">
              What We Offer
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
              <span className="text-foreground">Our</span>{" "}
              <span className="gold-gradient-text">Facilities</span>
            </h2>
            <div className="section-divider" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="glass-card p-8 hover-lift group"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <facility.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  {facility.title}
                </h3>
                <p className="text-muted-foreground">
                  {facility.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default About;

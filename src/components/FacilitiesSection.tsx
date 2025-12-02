import { Building, Trees, Users, Car, Palette, UtensilsCrossed, PartyPopper, Tent } from "lucide-react";
import venue1 from "@/assets/venue-1.jpeg";

const facilities = [
  { icon: Building, title: "Banquet Hall", description: "Elegant interiors with crystal chandeliers" },
  { icon: PartyPopper, title: "Ceremonial Hall", description: "Perfect for traditional ceremonies" },
  { icon: Users, title: "Community Hall", description: "Spacious area for large gatherings" },
  { icon: Trees, title: "Garden Space", description: "Lush greenery with fountain" },
  { icon: Tent, title: "Picnic Garden", description: "Open-air celebration area" },
  { icon: Car, title: "Parking Area", description: "Ample space for vehicles" },
  { icon: Palette, title: "Event Decoration", description: "Full decoration support" },
  { icon: UtensilsCrossed, title: "Catering Support", description: "Premium catering options" },
];

const FacilitiesSection = () => {
  return (
    <section className="relative py-24">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${venue1})` }}
      />
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-medium tracking-wider uppercase text-sm">
            Our Facilities
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            <span className="text-foreground">World-Class</span>{" "}
            <span className="gold-gradient-text">Amenities</span>
          </h2>
          <div className="section-divider" />
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6 text-lg font-elegant">
            Experience luxury at every corner with our premium facilities designed for unforgettable celebrations
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="glass-card p-6 text-center hover-lift group cursor-default"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-4 group-hover:bg-gold/20 group-hover:border-gold/40 transition-all duration-300">
                <facility.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">
                {facility.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;

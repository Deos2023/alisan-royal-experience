import { Building2, Users, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import venue7 from "@/assets/venue-7.jpeg";

const features = [
  { icon: Building2, title: "Premium Venues", description: "Multiple halls for every occasion" },
  { icon: Users, title: "Large Capacity", description: "Host gatherings of all sizes" },
  { icon: Sparkles, title: "Elegant Ambiance", description: "Luxurious décor & lighting" },
  { icon: Heart, title: "Memorable Events", description: "Create lasting memories" },
];

const AboutPreview = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 to-royal/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            <div className="relative rounded-2xl overflow-hidden gold-border">
              <img
                src={venue7}
                alt="Alisan Royal Banquet Interior"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 glass-card px-6 py-3">
                <p className="text-gold font-display text-lg">Est. 2025</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-gold font-medium tracking-wider uppercase text-sm">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
              <span className="gold-gradient-text">A Grand</span>
              <br />
              <span className="text-foreground">Celebration Awaits</span>
            </h2>
            
            <div className="section-divider !mx-0 mb-8" />
            
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg font-elegant">
              Established on 01/08/2025, Alisan Royal Banquet provides a grand and luxurious 
              environment for weddings, receptions, parties, corporate events, community 
              gatherings, and outdoor celebrations. Featuring banquet halls, ceremonial halls, 
              gardens, and a picnic garden.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 group cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 group-hover:border-gold/40 transition-all duration-300">
                    <feature.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="gold" size="lg" asChild>
              <Link to="/about">
                Discover More
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;

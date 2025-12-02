import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const MapSection = () => {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-medium tracking-wider uppercase text-sm">
            Find Us
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            <span className="text-foreground">Our</span>{" "}
            <span className="gold-gradient-text">Location</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Address Card */}
          <div className="glass-card p-8 flex flex-col justify-center">
            <div className="w-16 h-16 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-gold" />
            </div>
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              Alisan Royal Banquet
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Jagannathpur, Barasat-Barrackpore Road,
              <br />
              Opposite Adamas University,
              <br />
              Kolkata – 700126
            </p>
            <Button variant="goldOutline" asChild>
              <a
                href="https://www.google.com/maps/place/Alisan+Royal+Banquet/@22.7421658,88.4558532,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>
            </Button>
          </div>

          {/* Map */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden gold-border h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3138.2220667545166!2d88.45585319999999!3d22.7421658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f899003ab78e31%3A0x3238a9ad36fd0d6c!2sAlisan%20Royal%20Banquet!5e1!3m2!1sen!2sin!4v1764672631653!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Alisan Royal Banquet Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;

import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Clock } from "lucide-react";
import venue3 from "@/assets/venue-3.jpeg";

const CTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${venue3})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 mb-8">
            <Clock className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-medium">Limited Slots Available</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-foreground">Host Your</span>
            <br />
            <span className="gold-gradient-text">Grand Celebration</span>
            <br />
            <span className="text-foreground">With Us</span>
          </h2>
          
          <p className="text-muted-foreground text-lg mb-10 max-w-xl font-elegant">
            Book your special occasion at Alisan Royal Banquet and experience unmatched luxury and service.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="gold" size="xl" asChild>
              <a href="https://wa.me/916289438805?text=Hello! I would like to book a venue at Alisan Royal Banquet." target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Book on WhatsApp
              </a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="tel:6289438805">
                <Phone className="w-5 h-5" />
                Call: 6289438805
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, MessageCircle, ChevronDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import venue3 from "@/assets/venue-3.jpeg";

const eventTypes = [
  "Wedding",
  "Reception",
  "Birthday Party",
  "Corporate Event",
  "Community Gathering",
  "Other",
];

const faqs = [
  {
    question: "What is the capacity of the banquet hall?",
    answer: "Our main banquet hall can accommodate up to 500 guests, while our community hall can host up to 300 guests. The garden area can accommodate 600+ guests.",
  },
  {
    question: "Do you provide catering services?",
    answer: "Yes, we have tie-ups with premium caterers who can provide a variety of cuisines. You can also bring your own caterers if preferred.",
  },
  {
    question: "What are the booking timings?",
    answer: "We offer flexible booking options for both day and evening events. Please contact us for specific time slots and availability.",
  },
  {
    question: "Is parking available?",
    answer: "Yes, we have ample parking space that can accommodate over 100 vehicles.",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "",
    message: "",
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.eventType) {
      toast({
        title: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }

    const whatsappMessage = `Hello! I would like to inquire about booking at Alisan Royal Banquet.

Name: ${formData.name}
Phone: ${formData.phone}
Event Type: ${formData.eventType}
Message: ${formData.message || "No additional message"}`;

    const whatsappUrl = `https://wa.me/916289438805?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "Your inquiry has been prepared!",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: `url(${venue3})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-4">
            <span className="text-foreground">Contact</span>{" "}
            <span className="gold-gradient-text">Us</span>
          </h1>
          <div className="section-divider" />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <span className="text-gold font-medium tracking-wider uppercase text-sm">
                Get in Touch
              </span>
              <h2 className="text-4xl font-display font-bold mt-4 mb-6 text-foreground">
                Book Your Venue
              </h2>
              <div className="section-divider !mx-0 mb-8" />
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-gold/20 text-foreground focus:border-gold focus:outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-gold/20 text-foreground focus:border-gold focus:outline-none transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Event Type *
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-gold/20 text-foreground focus:border-gold focus:outline-none transition-colors"
                  >
                    <option value="">Select event type</option>
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-gold/20 text-foreground focus:border-gold focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your event..."
                  />
                </div>
                
                <Button type="submit" variant="gold" size="xl" className="w-full">
                  <MessageCircle className="w-5 h-5" />
                  Send via WhatsApp
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="glass-card p-8 mb-8">
                <h3 className="text-2xl font-display font-bold text-foreground mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Address</h4>
                      <p className="text-muted-foreground text-sm">
                        Jagannathpur, Barasat-Barrackpore Road,<br />
                        Opposite Adamas University,<br />
                        Kolkata – 700126
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                      <a href="tel:6289438805" className="text-muted-foreground hover:text-gold transition-colors">
                        +91 6289438805
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <a href="mailto:info@alisanroyal.com" className="text-muted-foreground hover:text-gold transition-colors">
                        info@alisanroyal.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Working Hours</h4>
                      <p className="text-muted-foreground text-sm">
                        Open 7 days a week<br />
                        9:00 AM - 10:00 PM
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4 mt-8">
                  <Button variant="whatsapp" className="flex-1" asChild>
                    <a href="https://wa.me/916289438805" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp
                    </a>
                  </Button>
                  <Button variant="goldOutline" className="flex-1" asChild>
                    <a href="tel:6289438805">
                      <Phone className="w-5 h-5" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden gold-border h-[300px]">
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold font-medium tracking-wider uppercase text-sm">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
              <span className="text-foreground">Frequently Asked</span>{" "}
              <span className="gold-gradient-text">Questions</span>
            </h2>
            <div className="section-divider" />
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="glass-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-display font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gold transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
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

export default Contact;

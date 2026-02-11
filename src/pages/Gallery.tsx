import { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { X, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import venue1 from "@/assets/venue-1.jpeg";
import venue2 from "@/assets/venue-2.jpeg";
import venue3 from "@/assets/venue-3.jpeg";
import venue4 from "@/assets/venue-4.jpeg";
import venue5 from "@/assets/venue-5.jpeg";
import venue6 from "@/assets/venue-6.jpeg";
import venue7 from "@/assets/venue-7.jpeg";
import venue8 from "@/assets/venue-8.jpeg";
import video1 from "@/assets/video1.mp4";
import video2 from "@/assets/WhatsApp Video 2026-02-10 at 18.35.25.mp4";
import video3 from "@/assets/WhatsApp Video 2026-02-10 at 18.35.26.mp4";
import video4 from "@/assets/WhatsApp Video 2026-02-10 at 18.35.27.mp4";
import video5 from "@/assets/WhatsApp Video 2026-02-10 at 18.35.28.mp4";
import video6 from "@/assets/WhatsApp Video 2026-02-10 at 18.35.30.mp4";
import video7 from "@/assets/WhatsApp Video 2026-02-10 at 18.35.31.mp4";

const categories = ["All", "Halls", "Garden", "Exterior", "Videos"];

const galleryItems = [
  { src: venue4, alt: "Grand Banquet Hall Exterior", category: "Exterior", type: "image" },
  { src: venue7, alt: "Main Hall with Chandeliers", category: "Halls", type: "image" },
  { src: video1, alt: "Banquet Hall Grand Tour", category: "Videos", type: "video" },
  { src: venue5, alt: "Hall Interior Elegant View", category: "Halls", type: "image" },
  { src: video2, alt: "Garden Fountain & Landscape", category: "Videos", type: "video" },
  { src: venue6, alt: "Community Hall Interior", category: "Halls", type: "image" },
  { src: venue2, alt: "Garden Fountain Pink Lighting", category: "Garden", type: "image" },
  { src: video3, alt: "Evening Garden Ambiance", category: "Videos", type: "video" },
  { src: venue3, alt: "Garden Night View with Lights", category: "Garden", type: "image" },
  { src: video4, alt: "Main Entrance & Facade", category: "Videos", type: "video" },
  { src: venue1, alt: "Venue Overview Night Lights", category: "Exterior", type: "image" },
  { src: video5, alt: "Luxury Hall Interior Details", category: "Videos", type: "video" },
  { src: venue8, alt: "Garden Fountain Blue Lighting", category: "Garden", type: "image" },
  { src: video6, alt: "Outdoor Dining Area Tour", category: "Videos", type: "video" },
  { src: video7, alt: "Event Setup & Decor Showcase", category: "Videos", type: "video" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<{ src: string; type: 'image' | 'video' } | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter((item) => item.category === activeCategory);

  const handleItemClick = (item: { src: string; type: 'image' | 'video' }) => {
    setSelectedItem(item);
    if (item.type === 'video' && videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  // Handle keyboard events for lightbox
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape' && selectedItem) {
      setSelectedItem(null);
    }
  };

  return (
    <div className="min-h-screen bg-background" onKeyDown={handleKeyDown} tabIndex={-1}>
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: `url(${venue7})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-4">
            <span className="text-foreground">Our</span>{" "}
            <span className="gold-gradient-text">Gallery</span>
          </h1>
          <div className="section-divider" />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-6 py-3 rounded-full font-medium transition-all duration-300",
                  activeCategory === category
                    ? "bg-gold text-background"
                    : "border border-gold/30 text-foreground hover:border-gold hover:bg-gold/10"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="break-inside-avoid relative overflow-hidden rounded-2xl group cursor-pointer gold-border"
                onClick={() => handleItemClick({ src: item.src, type: item.type as 'image' | 'video' })}
              >
                {item.type === 'image' ? (
                  <>
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                      <p className="text-foreground font-display text-lg">{item.alt}</p>
                      <span className="text-gold text-sm">{item.category}</span>
                    </div>
                  </>
                ) : (
                  <div className="relative">
                    <video
                      src={item.src}
                      muted
                      loop
                      playsInline
                      className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-background/80 border-2 border-gold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Play className="w-8 h-8 text-gold ml-1" fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                      <p className="text-foreground font-display text-lg">{item.alt}</p>
                      <span className="text-gold text-sm">{item.category}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-foreground hover:bg-gold hover:text-background transition-all z-10"
            onClick={() => setSelectedItem(null)}
          >
            <X className="w-6 h-6" />
          </button>
          
          <div 
            className="max-w-full max-h-[85vh] w-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedItem.type === 'image' ? (
              <img
                src={selectedItem.src}
                alt="Gallery"
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
            ) : (
              <div className="relative">
                <video
                  ref={videoRef}
                  src={selectedItem.src}
                  autoPlay
                  controls
                  className="max-w-full max-h-[85vh] rounded-lg"
                  onKeyDown={(e) => e.stopPropagation()}
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-background/80 text-foreground px-4 py-2 rounded-full text-sm">
                  Click to play/pause • Esc to close
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Gallery;
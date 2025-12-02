import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import venue1 from "@/assets/venue-1.jpeg";
import venue2 from "@/assets/venue-2.jpeg";
import venue3 from "@/assets/venue-3.jpeg";
import venue4 from "@/assets/venue-4.jpeg";
import venue5 from "@/assets/venue-5.jpeg";
import venue6 from "@/assets/venue-6.jpeg";
import venue7 from "@/assets/venue-7.jpeg";
import venue8 from "@/assets/venue-8.jpeg";

const categories = ["All", "Halls", "Garden", "Exterior"];

const galleryImages = [
  { src: venue4, alt: "Grand Banquet Hall Exterior", category: "Exterior" },
  { src: venue7, alt: "Main Hall with Chandeliers", category: "Halls" },
  { src: venue5, alt: "Hall Interior View", category: "Halls" },
  { src: venue6, alt: "Community Hall", category: "Halls" },
  { src: venue2, alt: "Garden Fountain Pink", category: "Garden" },
  { src: venue3, alt: "Garden Night View", category: "Garden" },
  { src: venue1, alt: "Venue Overview Night", category: "Exterior" },
  { src: venue8, alt: "Garden Fountain Blue", category: "Garden" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
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
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="break-inside-avoid relative overflow-hidden rounded-2xl group cursor-pointer gold-border"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <p className="text-foreground font-display text-lg">{image.alt}</p>
                  <span className="text-gold text-sm">{image.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-foreground hover:bg-gold hover:text-background transition-all"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery"
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Gallery;

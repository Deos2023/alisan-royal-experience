import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import venue1 from "@/assets/venue-1.jpeg";
import venue2 from "@/assets/venue-2.jpeg";
import venue3 from "@/assets/venue-3.jpeg";
import venue4 from "@/assets/venue-4.jpeg";
import venue5 from "@/assets/venue-5.jpeg";
import venue7 from "@/assets/venue-7.jpeg";

const galleryImages = [
  { src: venue4, alt: "Banquet Hall Exterior", span: "col-span-2 row-span-2" },
  { src: venue7, alt: "Grand Hall Interior", span: "col-span-1" },
  { src: venue5, alt: "Hall with Chandeliers", span: "col-span-1" },
  { src: venue2, alt: "Garden Fountain", span: "col-span-1" },
  { src: venue3, alt: "Garden Night View", span: "col-span-1" },
];

const GalleryPreview = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-medium tracking-wider uppercase text-sm">
            Our Gallery
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            <span className="gold-gradient-text">Glimpse of</span>{" "}
            <span className="text-foreground">Elegance</span>
          </h2>
          <div className="section-divider" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`${image.span} relative overflow-hidden rounded-2xl group`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover min-h-[200px] md:min-h-[250px] group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                <p className="text-foreground font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="goldOutline" size="lg" asChild>
            <Link to="/gallery" className="group">
              View Full Gallery
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;

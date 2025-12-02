import { useEffect, useState, useRef } from "react";
import { Calendar, Users, Star, Home } from "lucide-react";

const counters = [
  { icon: Calendar, value: 1, label: "Years of Excellence", suffix: "+" },
  { icon: Star, value: 50, label: "Successful Events", suffix: "+" },
  { icon: Users, value: 5000, label: "Guests Served", suffix: "+" },
  { icon: Home, value: 1000, label: "Total Capacity", suffix: "+" },
];

const CounterSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-muted/30 relative">
      {/* Decorative Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {counters.map((counter, index) => (
            <div
              key={index}
              className="text-center group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-gold/30 bg-gold/10 mb-4 group-hover:border-gold group-hover:bg-gold/20 transition-all duration-300">
                <counter.icon className="w-7 h-7 text-gold" />
              </div>
              <div className="mb-2">
                <CounterNumber
                  value={counter.value}
                  suffix={counter.suffix}
                  isVisible={isVisible}
                />
              </div>
              <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase">
                {counter.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface CounterNumberProps {
  value: number;
  suffix: string;
  isVisible: boolean;
}

const CounterNumber = ({ value, suffix, isVisible }: CounterNumberProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 50;
    const stepValue = value / steps;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <span className="text-4xl md:text-5xl font-display font-bold gold-gradient-text">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export default CounterSection;

import { useReveal } from "@/hooks/use-reveal";

const images = [
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600&h=400&fit=crop",
];

// Duplicate the array for seamless looping
const scrollingImages = [...images, ...images];

export function ImageStrip() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="relative py-20 overflow-hidden bg-background">
      {/* Subtle vignettes for smooth edges */}
      <div className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-[#0A0A0B] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-[#0A0A0B] to-transparent pointer-events-none" />

      <div className="flex w-fit animate-scroll gap-4">
        {scrollingImages.map((src, i) => (
          <div key={i} className="relative flex-none w-72 h-48">
            <img
              src={src}
              alt={`Wellness visual ${i + 1}`}
              className="w-full h-full object-cover rounded-lg border border-white/5"
              loading="lazy"
            />
            {/* Dark overlay for visual consistency */}
            <div className="absolute inset-0 bg-black/40 rounded-lg pointer-events-none" />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 0.5rem)); }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </section>
  );
}

import { useEffect, useRef, useState } from "react";
import { useCountUp, useReveal } from "@/hooks/use-reveal";

const stats = [
  { value: 500, suffix: "+", label: "Members Optimized" },
  { value: 94, suffix: "%", label: "See Results in 60 Days" },
  { value: 12000, suffix: "+", label: "Biomarkers Tracked" },
];

const testimonials = [
  { name: "Marcus T.", title: "Entrepreneur", quote: "I've tried everything. APEXFORM is the first thing that actually moved my labs." },
  { name: "Derek R.", title: "Former D1 Athlete", quote: "Three months in, I feel 10 years younger. The protocol was dialed in from day one." },
  { name: "Priya S.", title: "Surgeon", quote: "The bloodwork alone was worth it. Now I have a roadmap." },
];

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [start, setStart] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const numRef = useCountUp(value, start);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setStart(true); obs.disconnect(); }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="text-center">
      <div className="text-5xl sm:text-7xl font-bold tracking-[-0.03em] text-primary">
        <span ref={numRef}>0</span>{suffix}
      </div>
      <div className="mt-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">{label}</div>
    </div>
  );
}

export function SocialProof() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="community" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="eyebrow reveal">The Community</p>
          <h2 className="reveal mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.02em]" style={{ transitionDelay: "100ms" }}>
            500+ High Performers <span className="italic font-light text-primary">Optimized.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 py-16 border-y border-white/10 mb-20">
          {stats.map((s) => <Stat key={s.label} {...s} />)}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {testimonials.map((t, i) => (
            <figure key={t.name} className="reveal bg-background p-10 flex flex-col" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="text-primary text-4xl font-serif leading-none">"</div>
              <blockquote className="mt-4 text-lg leading-relaxed flex-1">{t.quote}</blockquote>
              <figcaption className="mt-8 pt-6 border-t border-white/10">
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.title}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

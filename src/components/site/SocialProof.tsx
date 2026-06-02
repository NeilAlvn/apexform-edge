import { useEffect, useRef, useState } from "react";
import { useCountUp, useReveal } from "@/hooks/use-reveal";
import marcus from "@/assets/t-marcus.jpg";
import derek from "@/assets/t-derek.jpg";
import priya from "@/assets/t-priya.jpg";
import james from "@/assets/t-james.jpg";
import sofia from "@/assets/t-sofia.jpg";
import ryan from "@/assets/t-ryan.jpg";

const stats = [
  { value: 500, suffix: "+", label: "Members Optimized" },
  { value: 94, suffix: "%", label: "See Results in 60 Days" },
  { value: 12000, suffix: "+", label: "Biomarkers Tracked" },
];

const testimonials = [
  {
    name: "Marcus T.",
    title: "Entrepreneur, 42",
    photo: marcus,
    quote:
      "I've optimized everything in my business. APEXFORM was the missing piece for my body. My energy, focus, and recovery are on a different level. The bloodwork results alone changed how I think about my health.",
  },
  {
    name: "Derek R.",
    title: "Former D1 Athlete, 38",
    photo: derek,
    quote:
      "After my playing career ended I felt like I was declining every year. Three months into the hormone protocol and I feel like I'm 28 again. No exaggeration.",
  },
  {
    name: "Priya S.",
    title: "Surgeon, 45",
    photo: priya,
    quote:
      "As a physician I was skeptical. Then I saw my own labs. APEXFORM caught deficiencies my annual physical completely missed. The protocol they built around my results was precise and it worked.",
  },
  {
    name: "James K.",
    title: "CEO, 51",
    photo: james,
    quote:
      "I was sleeping 8 hours and still exhausted. Turns out my testosterone was at the floor. Six weeks into the protocol — different person. My team noticed before I did.",
  },
  {
    name: "Sofia M.",
    title: "Triathlete, 34",
    photo: sofia,
    quote:
      "The recovery protocol cut my post-race inflammation time in half. My coach couldn't believe my turnaround numbers. This is the edge I didn't know I was missing.",
  },
  {
    name: "Ryan C.",
    title: "Founder, 39",
    photo: ryan,
    quote:
      "I thought feeling worn down was just part of building a company. It's not. It was my cortisol, my sleep quality, my nutrition gaps — all fixable. APEXFORM showed me the data and fixed it.",
  },
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

function Stars() {
  return (
    <div className="flex gap-1 text-primary" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.7 7-6.3-3.9-6.3 3.9 1.7-7L2 9.5l7.1-.6z" />
        </svg>
      ))}
    </div>
  );
}

export function SocialProof() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="community" className="relative py-44 px-6">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="reveal bg-background p-8 lg:p-10 flex flex-col"
              style={{ transitionDelay: `${(i % 3) * 100}ms` }}
            >
              <Stars />
              <blockquote className="mt-5 text-sm leading-relaxed flex-1 text-foreground/90">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
                <img
                  src={t.photo}
                  alt={t.name}
                  width={56}
                  height={56}
                  loading="lazy"
                  className="h-14 w-14 rounded-full object-cover ring-1 ring-primary/30"
                />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.title}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

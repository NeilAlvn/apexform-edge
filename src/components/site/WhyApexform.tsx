import { useReveal } from "@/hooks/use-reveal";

const pillars = [
  { n: "01", title: "Data-Driven", desc: "Built on your biomarkers — not a template." },
  { n: "02", title: "Concierge Access", desc: "Direct access to practitioners who know your name, your file, and your goals." },
  { n: "03", title: "Performance-First", desc: "Built for executives, athletes, and founders who operate at their best every day." },
];

export function WhyApexform() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="why" className="relative py-32 px-6 bg-surface">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="eyebrow reveal">Why Choose Us</p>
          <h2 className="reveal mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.02em]" style={{ transitionDelay: "100ms" }}>
            Precision. Personalized. <span className="italic font-light text-primary">Proven.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
          {pillars.map((p, i) => (
            <div key={p.n} className="reveal text-center md:text-left md:px-8" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="text-primary text-xs tracking-[0.3em] font-medium">{p.n}</div>
              <div className="mt-6 h-px w-12 bg-primary/40 mx-auto md:mx-0" />
              <h3 className="mt-8 text-2xl font-semibold">{p.title}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useReveal } from "@/hooks/use-reveal";

const steps = [
  { n: "01", title: "Complete Your Intake", desc: "Quick health history + goals form. Tell us where you are and where you want to go." },
  { n: "02", title: "Get Your Bloodwork Done", desc: "Full diagnostic panel at a lab near you, reviewed line-by-line by our medical team." },
  { n: "03", title: "Receive Your Protocol", desc: "A custom plan built around your biology — hormones, peptides, recovery, the whole stack." },
];

export function HowItWorks() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="how" className="relative py-44 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="eyebrow reveal">How It Works</p>
          <h2 className="reveal mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.02em]" style={{ transitionDelay: "100ms" }}>
            Three Steps. <span className="italic font-light text-primary">One Protocol.</span>
          </h2>
        </div>

        <div className="relative">
          {/* connector line — desktop */}
          <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10 relative">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className="reveal text-center md:px-6"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="relative inline-flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-background border border-primary/40 flex items-center justify-center text-primary font-semibold tracking-[0.1em] shadow-[0_0_40px_-10px_oklch(0.75_0.13_85/0.5)]">
                    {s.n}
                  </div>
                </div>
                <h3 className="mt-8 text-xl sm:text-2xl font-semibold">{s.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed max-w-xs mx-auto">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Activity, Droplet, Dna, Flame, Moon, Infinity as InfinityIcon, Zap } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const services = [
  { icon: Activity, name: "Bloodwork", desc: "See everything. Miss nothing. Comprehensive panels that reveal what's actually happening inside." },
  { icon: Droplet, name: "IV Therapy", desc: "Fuel at the cellular level. Rapid nutrient delivery for recovery, energy, and immune resilience." },
  { icon: Dna, name: "Peptides", desc: "Signal your body to perform. Targeted protocols for fat loss, muscle growth, and tissue repair." },
  { icon: Flame, name: "Hormone Optimization", desc: "Balance is performance. Restore your baseline — feel like yourself again, only better." },
  { icon: Moon, name: "Recovery", desc: "Recover faster. Train harder. Protocols built around inflammation, sleep, and tissue repair." },
  { icon: InfinityIcon, name: "Longevity", desc: "Play the long game. Biomarker tracking and interventions designed to extend your healthspan." },
  { icon: Zap, name: "Performance", desc: "Operate at your ceiling. Protocols engineered for output, focus, and sustained peak performance." },
];

export function Services() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="services" className="relative py-44 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow reveal">What We Offer</p>
          <h2 className="reveal mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.02em]" style={{ transitionDelay: "100ms" }}>
            Every Protocol.<br /><span className="italic font-light text-primary">One Practice.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <a
                key={s.name}
                href="#contact"
                className="reveal group relative bg-background p-10 transition-colors duration-500 overflow-hidden focus:outline-none"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {/* faint radial gold glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,oklch(0.75_0.13_85/0.10),transparent_70%)]" />
                {/* gold border on hover/focus */}
                <div className="absolute inset-0 pointer-events-none border border-primary opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 shadow-[0_0_40px_-10px_oklch(0.75_0.13_85/0.5)]" />

                <div className="relative">
                  <Icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
                  <h3 className="mt-8 text-xl font-semibold">{s.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>

                  <div className="mt-10 flex items-center justify-between">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground/60 group-hover:text-primary transition-colors">
                      {String(i + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                    </div>
                    <span className="text-xs uppercase tracking-widest text-primary inline-flex items-center gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
                      Learn More
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

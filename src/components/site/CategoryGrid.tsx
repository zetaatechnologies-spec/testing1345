import { Link } from "@tanstack/react-router";
import { services, toneClasses } from "@/data/services";
import { ArrowRight } from "lucide-react";

export function CategoryGrid() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Our services
            </div>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">
              What can we secure for you today?
            </h2>
            <p className="mt-2 max-w-lg text-muted-foreground">
              Hand-picked categories with instant pricing. Tap any tile to start booking.
            </p>
          </div>
          <Link to="/services" className="hidden items-center gap-1 text-sm font-semibold text-accent hover:underline sm:inline-flex">
            See all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {services.map((s) => {
            const tone = toneClasses[s.tone];
            const Icon = s.icon;
            return (
              <Link
                key={s.id}
                to="/book"
                search={{ service: s.id }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition hover:-translate-y-1 hover:shadow-elevated"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.name}
                    loading="lazy"
                    width={400}
                    height={500}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 35%, oklch(0.16 0.02 250 / 0.85) 100%)",
                    }}
                  />
                  <div className={`absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-xl ${tone.bg} shadow-soft`}>
                    <Icon className={`h-4.5 w-4.5 ${tone.text}`} />
                  </div>
                  <div className="absolute inset-x-3 bottom-3 text-white">
                    <div className="text-sm font-bold leading-tight">{s.shortName}</div>
                    <div className="mt-0.5 text-[11px] opacity-90">From ₹{s.startingPrice.toLocaleString("en-IN")}</div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

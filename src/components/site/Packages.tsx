import { Link } from "@tanstack/react-router";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { packages } from "@/data/services";

export function Packages() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">
            <Sparkles className="h-3.5 w-3.5" /> Most booked packages
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
            All-inclusive bundles, transparent prices
          </h2>
          <p className="mt-2 text-muted-foreground">No hidden charges. Free inspection. Genuine products.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {packages.map((p) => (
            <article
              key={p.id}
              className={`group relative flex flex-col overflow-hidden rounded-3xl border bg-card transition ${
                p.popular
                  ? "border-accent shadow-elevated lg:-translate-y-3"
                  : "border-border shadow-soft hover:-translate-y-1 hover:shadow-card"
              }`}
            >
              {p.popular && (
                <span className="absolute right-4 top-4 z-10 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-accent-foreground shadow-glow">
                  Most popular
                </span>
              )}

              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 50%, oklch(0.16 0.02 250 / 0.5) 100%)",
                  }}
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-bold">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>

                <div className="mt-5 flex items-baseline gap-2">
                  <span className="font-display text-3xl font-bold">
                    ₹{p.price.toLocaleString("en-IN")}
                  </span>
                  <span className="text-sm text-muted-foreground line-through">
                    ₹{p.originalPrice.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="mt-1 inline-flex w-fit items-center rounded-full bg-success/10 px-2 py-0.5 text-xs font-semibold text-success">
                  Save ₹{(p.originalPrice - p.price).toLocaleString("en-IN")}
                </div>

                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
                        <Check className="h-3 w-3" />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={p.popular ? "cta" : "default"}
                  size="lg"
                  className="mt-7 w-full"
                  asChild
                >
                  <Link to="/book" search={{ pkg: p.id }}>
                    Book this package <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

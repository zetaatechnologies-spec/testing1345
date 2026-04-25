import { Link } from "@tanstack/react-router";
import { Check, Sparkles } from "lucide-react";
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
          <h2 className="mt-3 font-display text-2xl font-bold tracking-tight md:text-3xl">
            All-inclusive bundles, transparent prices
          </h2>
          <p className="mt-2 text-muted-foreground">No hidden charges. Free inspection. Genuine products.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {packages.map((p) => (
            <div
              key={p.id}
              className={`relative flex flex-col rounded-3xl border bg-card p-6 transition ${
                p.popular
                  ? "border-accent shadow-elevated lg:-translate-y-2"
                  : "border-border shadow-soft hover:shadow-card"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-accent-foreground shadow">
                  Most popular
                </span>
              )}
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
              <div className="mt-1 text-xs font-medium text-success">
                Save ₹{(p.originalPrice - p.price).toLocaleString("en-IN")} • all-inclusive
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
                <Link to="/book" search={{ pkg: p.id }}>Book this package</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

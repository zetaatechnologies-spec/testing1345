import { Link } from "@tanstack/react-router";
import { services, toneClasses } from "@/data/services";
import { ArrowRight } from "lucide-react";

export function CategoryGrid() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
              What can we secure for you today?
            </h2>
            <p className="mt-2 text-muted-foreground">Pick a category to see options & instant pricing.</p>
          </div>
          <Link to="/services" className="hidden items-center gap-1 text-sm font-semibold text-accent hover:underline sm:inline-flex">
            See all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {services.map((s) => {
            const tone = toneClasses[s.tone];
            const Icon = s.icon;
            return (
              <Link
                key={s.id}
                to="/book"
                search={{ service: s.id }}
                className="group flex flex-col items-center rounded-2xl border border-border bg-card p-4 text-center shadow-soft transition hover:-translate-y-1 hover:shadow-card"
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${tone.bg} transition group-hover:scale-110`}>
                  <Icon className={`h-7 w-7 ${tone.text}`} />
                </div>
                <div className="mt-3 text-sm font-semibold leading-tight">{s.shortName}</div>
                <div className="mt-1 text-xs text-muted-foreground">From ₹{s.startingPrice.toLocaleString("en-IN")}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

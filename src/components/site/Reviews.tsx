import { Star } from "lucide-react";
import { reviews } from "@/data/services";

export function Reviews() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
              Real reviews from real customers
            </h2>
            <p className="mt-2 text-muted-foreground">Rated 4.8 / 5 across 12,400+ verified bookings.</p>
          </div>
        </div>

        <div className="mt-8 -mx-4 overflow-x-auto px-4 scrollbar-hide">
          <div className="flex gap-4 pb-4">
            {reviews.map((r) => (
              <article
                key={r.name}
                className="w-[300px] shrink-0 rounded-2xl border border-border bg-card p-5 shadow-soft sm:w-[340px]"
              >
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < r.rating ? "fill-warning text-warning" : "text-muted"
                      }`}
                    />
                  ))}
                </div>
                <p className="mt-3 text-sm leading-relaxed">"{r.text}"</p>
                <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.location} • {r.service}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

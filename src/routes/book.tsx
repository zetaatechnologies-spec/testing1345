import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { BookingFlow } from "@/components/booking/BookingFlow";

type BookSearch = { service?: string; pkg?: string; quote?: number };

export const Route = createFileRoute("/book")({
  validateSearch: (search: Record<string, unknown>): BookSearch => ({
    service: typeof search.service === "string" ? search.service : undefined,
    pkg: typeof search.pkg === "string" ? search.pkg : undefined,
    quote: typeof search.quote === "number" ? search.quote : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Book a Service — SafeNest" },
      { name: "description", content: "Book CCTV, intercom, biometric or smart-lock service in 3 simple steps. Same-day visits available." },
      { property: "og:title", content: "Book a Service — SafeNest" },
      { property: "og:description", content: "Same-day verified technicians. Transparent pricing." },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  const { service } = Route.useSearch();
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pb-24 lg:pb-12">
        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
            <h1 className="font-display text-3xl font-bold tracking-tight md:text-4xl">Book a service</h1>
            <p className="mt-2 text-muted-foreground">3 quick steps. No payment required to confirm.</p>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
          <BookingFlow initialServiceId={service} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

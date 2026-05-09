import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileBottomBar } from "@/components/site/MobileBottomBar";
import { Button } from "@/components/ui/button";
import { Calendar, Inbox } from "lucide-react";

export const Route = createFileRoute("/bookings")({
  head: () => ({
    meta: [
      { title: "My Bookings — Zetaa Technologies" },
      { name: "description", content: "View and manage your security service bookings." },
    ],
  }),
  component: BookingsPage,
});

function BookingsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pb-24 lg:pb-0">
        <section className="mx-auto max-w-3xl px-4 py-16 md:px-6">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">My Bookings</h1>
          <p className="mt-3 text-muted-foreground">Track upcoming visits and review service history.</p>

          <div className="mt-10 rounded-2xl border border-dashed border-border bg-surface p-10 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-soft text-primary">
              <Inbox className="h-6 w-6" />
            </div>
            <h2 className="mt-4 font-display text-xl font-semibold">No bookings yet</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Once you book a service, it will appear here with status updates.
            </p>
            <Button variant="cta" className="mt-6" asChild>
              <Link to="/book"><Calendar className="h-4 w-4" />Book your first service</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <MobileBottomBar />
    </div>
  );
}

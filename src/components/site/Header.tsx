import { Link } from "@tanstack/react-router";
import { Search, Calendar, ShieldCheck, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight">Zetaa Technologies</span>
        </Link>

        <div className="hidden flex-1 md:flex max-w-md mx-2">
          <div className="relative w-full">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              aria-label="Search services"
              placeholder="Search for CCTV, smart locks, intercom…"
              className="h-10 w-full rounded-full border border-border bg-muted/60 pl-10 pr-4 text-sm outline-none transition focus:border-ring focus:bg-background focus:ring-2 focus:ring-ring/20"
            />
          </div>
        </div>

        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          <Link
            to="/services"
            className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted transition-colors"
          >
            Services
          </Link>
          <Link
            to="/bookings"
            className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted transition-colors"
          >
            My Bookings
          </Link>
          <Link
            to="/support"
            className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted transition-colors"
          >
            Support
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-2">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex" asChild>
            <Link to="/login">Login</Link>
          </Button>
          <Button variant="cta" size="sm" asChild className="shadow-glow hidden sm:inline-flex">
            <Link to="/book">
              <Calendar className="h-4 w-4" />
              Book Now
            </Link>
          </Button>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-muted lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-3 space-y-2">
            <div className="relative md:hidden">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                aria-label="Search services"
                placeholder="Search services…"
                className="h-10 w-full rounded-full border border-border bg-muted/60 pl-10 pr-4 text-sm outline-none focus:bg-background"
              />
            </div>
            <Link to="/services" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-muted">Services</Link>
            <Link to="/bookings" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-muted">My Bookings</Link>
            <Link to="/support" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-muted">Support</Link>
            <Link to="/login" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-muted sm:hidden">Login</Link>
            <Button variant="cta" className="w-full sm:hidden" asChild>
              <Link to="/book" onClick={() => setOpen(false)}>Book Now</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

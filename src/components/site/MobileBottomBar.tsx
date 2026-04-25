import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Calendar } from "lucide-react";

export function MobileBottomBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-3 py-2 backdrop-blur-md shadow-elevated lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
        <a
          href="tel:+918000012345"
          className="flex flex-col items-center justify-center rounded-xl py-2 text-xs font-medium text-foreground/80 hover:bg-muted"
        >
          <Phone className="h-5 w-5 text-primary" />
          <span className="mt-0.5">Call</span>
        </a>
        <a
          href="https://wa.me/918000012345"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center rounded-xl py-2 text-xs font-medium text-foreground/80 hover:bg-muted"
        >
          <MessageCircle className="h-5 w-5 text-[oklch(0.65_0.16_155)]" />
          <span className="mt-0.5">WhatsApp</span>
        </a>
        <Link
          to="/book"
          className="flex flex-col items-center justify-center rounded-xl bg-accent py-2 text-xs font-semibold text-accent-foreground shadow-glow"
        >
          <Calendar className="h-5 w-5" />
          <span className="mt-0.5">Book</span>
        </Link>
      </div>
    </div>
  );
}

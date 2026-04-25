import { Link } from "@tanstack/react-router";
import { ShieldCheck, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <span className="font-display text-lg font-bold">SafeNest</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Trusted home & business security services. Verified technicians, transparent pricing.
            </p>
            <div className="mt-5 flex gap-3">
              <a aria-label="Instagram" href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-foreground/70 hover:bg-primary hover:text-primary-foreground transition"><Instagram className="h-4 w-4" /></a>
              <a aria-label="Facebook" href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-foreground/70 hover:bg-primary hover:text-primary-foreground transition"><Facebook className="h-4 w-4" /></a>
              <a aria-label="Twitter" href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-foreground/70 hover:bg-primary hover:text-primary-foreground transition"><Twitter className="h-4 w-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold">Services</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-foreground">CCTV Installation</Link></li>
              <li><Link to="/services" className="hover:text-foreground">CCTV Repair</Link></li>
              <li><Link to="/services" className="hover:text-foreground">Smart Locks</Link></li>
              <li><Link to="/services" className="hover:text-foreground">Biometric</Link></li>
              <li><Link to="/services" className="hover:text-foreground">Intercom</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/support" className="hover:text-foreground">Support</Link></li>
              <li><Link to="/bookings" className="hover:text-foreground">My Bookings</Link></li>
              <li><a href="#" className="hover:text-foreground">About us</a></li>
              <li><a href="#" className="hover:text-foreground">Become a partner</a></li>
              <li><a href="#" className="hover:text-foreground">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4" /> +91 80000 12345</li>
              <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4" /> help@safenest.in</li>
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4" /> Bengaluru • Mumbai • Delhi NCR • Pune • Hyderabad</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} SafeNest Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Refund policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

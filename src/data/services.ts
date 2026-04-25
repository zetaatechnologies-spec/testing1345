import {
  Camera,
  Wrench,
  ShieldCheck,
  PhoneCall,
  Fingerprint,
  Lock,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  id: string;
  name: string;
  shortName: string;
  description: string;
  icon: LucideIcon;
  startingPrice: number;
  duration: string;
  tone: "indigo" | "coral" | "emerald" | "amber" | "violet" | "sky";
};

export const services: Service[] = [
  {
    id: "cctv-installation",
    name: "CCTV Installation",
    shortName: "CCTV Install",
    description: "HD/4K cameras, NVR setup, mobile viewing",
    icon: Camera,
    startingPrice: 1499,
    duration: "2–4 hrs",
    tone: "indigo",
  },
  {
    id: "cctv-repair",
    name: "CCTV Repair",
    shortName: "CCTV Repair",
    description: "Diagnose & fix cameras, recorders, cabling",
    icon: Wrench,
    startingPrice: 499,
    duration: "1–2 hrs",
    tone: "coral",
  },
  {
    id: "amc-plans",
    name: "AMC Plans",
    shortName: "AMC",
    description: "Annual maintenance with priority support",
    icon: ShieldCheck,
    startingPrice: 2999,
    duration: "Yearly",
    tone: "emerald",
  },
  {
    id: "intercom-setup",
    name: "Intercom Setup",
    shortName: "Intercom",
    description: "Audio/video door phones & wiring",
    icon: PhoneCall,
    startingPrice: 1299,
    duration: "2–3 hrs",
    tone: "amber",
  },
  {
    id: "biometric-attendance",
    name: "Biometric Attendance",
    shortName: "Biometric",
    description: "Fingerprint & face recognition systems",
    icon: Fingerprint,
    startingPrice: 1799,
    duration: "1–2 hrs",
    tone: "violet",
  },
  {
    id: "smart-locks",
    name: "Smart Door Locks",
    shortName: "Smart Locks",
    description: "Keyless entry, app & PIN access",
    icon: Lock,
    startingPrice: 2499,
    duration: "1–2 hrs",
    tone: "sky",
  },
];

export const toneClasses: Record<Service["tone"], { bg: string; text: string }> = {
  indigo: { bg: "bg-[oklch(0.95_0.04_270)]", text: "text-[oklch(0.45_0.18_270)]" },
  coral: { bg: "bg-[oklch(0.95_0.04_35)]", text: "text-[oklch(0.55_0.18_35)]" },
  emerald: { bg: "bg-[oklch(0.95_0.04_155)]", text: "text-[oklch(0.5_0.15_155)]" },
  amber: { bg: "bg-[oklch(0.95_0.05_80)]", text: "text-[oklch(0.55_0.15_70)]" },
  violet: { bg: "bg-[oklch(0.95_0.04_300)]", text: "text-[oklch(0.5_0.18_300)]" },
  sky: { bg: "bg-[oklch(0.95_0.04_230)]", text: "text-[oklch(0.5_0.15_230)]" },
};

export const packages = [
  {
    id: "cctv-home-basic",
    name: "CCTV Home Basic",
    tagline: "Perfect for 1–2 BHK homes",
    price: 8999,
    originalPrice: 11499,
    popular: false,
    features: [
      "2 × 2MP HD Dome Cameras",
      "4-Channel DVR with 1TB Storage",
      "Mobile App Viewing (24/7)",
      "Professional Installation",
      "6 months warranty",
    ],
  },
  {
    id: "shop-security-pro",
    name: "Shop Security Pro",
    tagline: "Best for retail & shops",
    price: 17999,
    originalPrice: 22999,
    popular: true,
    features: [
      "4 × 4MP Bullet Cameras",
      "8-Channel NVR with 2TB Storage",
      "Night Vision + Motion Alerts",
      "Cloud Backup (3 months)",
      "1 year warranty + Free AMC",
    ],
  },
  {
    id: "office-access-setup",
    name: "Office Access Setup",
    tagline: "Biometric + smart entry",
    price: 14499,
    originalPrice: 18999,
    popular: false,
    features: [
      "Biometric Attendance (200 users)",
      "Smart Door Lock with App Access",
      "Audio Intercom (4 units)",
      "Cabling & Configuration",
      "1 year warranty",
    ],
  },
];

export const reviews = [
  {
    name: "Rohan Mehta",
    location: "Bengaluru",
    rating: 5,
    service: "CCTV Installation",
    text: "Technician arrived on time, neat cabling, walked me through the mobile app. Genuine Hikvision cameras. Smooth experience end-to-end.",
  },
  {
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    service: "Smart Door Locks",
    text: "Booked at 10am, installed by 2pm. The Yale lock works perfectly with the app. Pricing was exactly what was quoted, no surprises.",
  },
  {
    name: "Arvind Kulkarni",
    location: "Pune",
    rating: 4,
    service: "Biometric Attendance",
    text: "Set up our office attendance system for 60 staff. Clean install, software training included. Will book AMC next.",
  },
  {
    name: "Sneha Iyer",
    location: "Hyderabad",
    rating: 5,
    service: "CCTV Repair",
    text: "Old DVR wasn't recording. Same-day visit, replaced HDD, restored footage. Honest pricing — felt like a real professional service.",
  },
  {
    name: "Vikram Singh",
    location: "Delhi NCR",
    rating: 5,
    service: "Intercom Setup",
    text: "12-flat building intercom replaced. Coordinated with society, finished in one day. Audio quality is crisp.",
  },
];

export const trustStats = [
  { value: "1,000+", label: "Installations done" },
  { value: "4.8★", label: "Avg. rating" },
  { value: "200+", label: "Verified technicians" },
  { value: "24/7", label: "Customer support" },
];

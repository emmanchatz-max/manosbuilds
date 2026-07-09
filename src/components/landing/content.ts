import {
  Activity,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Camera,
  ConciergeBell,
  Cross,
  Gavel,
  HeartPulse,
  Landmark,
  LayoutTemplate,
  Microscope,
  MonitorSmartphone,
  ReceiptText,
  ServerCog,
  ShoppingBag,
  Sparkles,
  Store,
  Workflow,
} from "lucide-react";

export const navigationItems = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    title: "Premium Business Websites",
    description:
      "Elegant, trust-building websites for businesses, hospitality brands, and professionals who want to look exceptional online.",
    icon: LayoutTemplate,
    label: "Primary Offer",
  },
  {
    title: "Custom Web Applications",
    description:
      "Tailored booking flows, dashboards, portals, and internal tools designed around the way your business actually operates.",
    icon: MonitorSmartphone,
    label: "Growth Layer",
  },
  {
    title: "AI Assistants",
    description:
      "Useful AI systems that improve communication, reduce friction, and create smarter customer-facing or internal experiences.",
    icon: Sparkles,
    label: "Smart Support",
  },
  {
    title: "Business Automation",
    description:
      "Connected workflows that remove repetitive work and make day-to-day operations feel more consistent and efficient.",
    icon: Workflow,
    label: "Efficiency",
  },
  {
    title: "Digital Systems",
    description:
      "Structured digital ecosystems that tie together websites, data, operations, communication, and future expansion.",
    icon: Landmark,
    label: "Infrastructure",
  },
  {
    title: "Cloud Solutions",
    description:
      "Reliable deployment, hosting, architecture, and support that keep the final experience stable, fast, and polished.",
    icon: ServerCog,
    label: "Foundation",
  },
];

export const heroHighlights = [
  "Premium websites for modern businesses and professionals",
  "Beautiful digital experiences that build trust and elevate perception",
  "Applications, AI, automation, and cloud systems when the business is ready",
];

export const capabilityCards = [
  {
    eyebrow: "Website First",
    title: "The first thing people should notice is how good your business looks online.",
    description:
      "The website sets the tone for trust, pricing power, and perceived quality. It should feel like a premium experience before a single conversation starts.",
    points: ["Luxury presentation", "Business credibility", "Stronger first impressions"],
  },
  {
    eyebrow: "Built To Grow",
    title: "As the business grows, the digital experience expands with it.",
    description:
      "Applications, AI assistants, booking systems, and automation should feel like a natural next step rather than disconnected add-ons.",
    points: ["Booking systems", "Custom applications", "Practical AI and automation"],
  },
  {
    eyebrow: "Craftsmanship",
    title: "Luxury comes from restraint, detail, and the way everything feels considered.",
    description:
      "Spacing, hierarchy, motion, and responsiveness work together to create a handcrafted result that feels worth paying for.",
    points: ["Editorial rhythm", "Refined motion", "Premium interaction detail"],
  },
];

export const industries = [
  { title: "Doctors", icon: HeartPulse },
  { title: "Dentists", icon: Cross },
  { title: "Lawyers", icon: Gavel },
  { title: "Accountants", icon: ReceiptText },
  { title: "Hotels", icon: ConciergeBell },
  { title: "Restaurants", icon: Store },
  { title: "Retail Stores", icon: ShoppingBag },
  { title: "Premium Local Businesses", icon: Building2 },
  { title: "Growing Companies", icon: Activity },
  { title: "Professionals", icon: BriefcaseBusiness },
];

export const portfolioItems = [
  {
    name: "Private Clinic",
    type: "Healthcare Website",
    summary:
      "A trust-first digital presence for medical professionals with appointment journeys, expertise cues, and elegant service storytelling.",
    accent: "from-sky-400/70 via-blue-500/40 to-violet-500/25",
    category: "Healthcare",
    metrics: ["Trust-first presentation", "Appointments", "Responsive luxury UI"],
  },
  {
    name: "Boutique Resort",
    type: "Hotel & Booking Experience",
    summary:
      "A cinematic hospitality experience with room storytelling, destination atmosphere, and premium booking-led presentation.",
    accent: "from-fuchsia-400/60 via-violet-500/40 to-sky-400/25",
    category: "Hospitality",
    metrics: ["Luxury visuals", "Booking flow", "Multi-device storytelling"],
  },
  {
    name: "Legal Advisory",
    type: "Professional Services Website",
    summary:
      "A premium legal presence with high-trust structure, clear services, refined content hierarchy, and a calm authoritative tone.",
    accent: "from-blue-400/70 via-cyan-400/35 to-pink-500/25",
    category: "Legal",
    metrics: ["Authority cues", "Clear practice areas", "Premium conversion path"],
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your business, audience, goals, and what a premium digital presence should communicate.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "We define the content structure, conversion path, features, and the right level of complexity for the project.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We shape the look, motion, atmosphere, and interface details until the experience feels polished and distinct.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "We build the site or system with clean code, strong performance, and responsive implementation across devices.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "We publish the finished product, optimize the details, and make sure the experience is ready for real visitors.",
  },
  {
    number: "06",
    title: "Ongoing Support",
    description:
      "We continue refining, maintaining, hosting, and expanding the platform as your business grows.",
  },
];

export const proofPoints = [
  { label: "Business websites", icon: BriefcaseBusiness },
  { label: "Professional websites", icon: Camera },
  { label: "Booking systems", icon: BadgeCheck },
  { label: "Restaurant websites", icon: Store },
  { label: "Hotel websites", icon: ConciergeBell },
  { label: "Custom applications", icon: Activity },
  { label: "Legal websites", icon: Gavel },
  { label: "Healthcare websites", icon: Microscope },
  { label: "AI assistants", icon: Sparkles },
  { label: "Automation systems", icon: Workflow },
  { label: "Digital solutions", icon: Landmark },
];

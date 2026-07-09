import {
  Activity,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Camera,
  ConciergeBell,
  Gavel,
  HeartPulse,
  Landmark,
  LayoutTemplate,
  MonitorSmartphone,
  Music4,
  Orbit,
  Podcast,
  Radio,
  ReceiptText,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Stethoscope,
  Store,
  WandSparkles,
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
    title: "Professional Websites",
    description:
      "Elegant business, hospitality, creator, and portfolio websites designed to build trust and make your brand feel premium online.",
    icon: LayoutTemplate,
  },
  {
    title: "Custom Web Applications",
    description:
      "Tailored software platforms, booking flows, internal tools, and business systems built around how your organization actually works.",
    icon: MonitorSmartphone,
  },
  {
    title: "AI Assistants",
    description:
      "Practical AI systems that help you respond faster, automate communication, and support your business as it grows.",
    icon: Sparkles,
  },
  {
    title: "Business Automation",
    description:
      "Connected workflows that reduce repetitive work, improve consistency, and give your team more time for higher-value tasks.",
    icon: Workflow,
  },
  {
    title: "Hosting & Support",
    description:
      "Reliable deployment, updates, monitoring, and ongoing support so your digital presence stays polished and dependable.",
    icon: ShieldCheck,
  },
];

export const heroHighlights = [
  "Premium websites for businesses, professionals, and creators",
  "Custom applications, AI assistants, and automation as your needs evolve",
  "Luxury presentation with clean engineering and long-term support",
];

export const capabilityCards = [
  {
    eyebrow: "Website First",
    title: "Your online presence should feel as professional as the business behind it.",
    description:
      "We lead with websites because they are often the first impression your clients experience, and first impressions define trust.",
  },
  {
    eyebrow: "Built To Grow",
    title: "As your business grows, your digital tools should grow with it.",
    description:
      "From booking systems and custom applications to AI assistants and automation, the next layer of software feels like a natural extension.",
  },
  {
    eyebrow: "Craftsmanship",
    title: "Every detail should look considered, modern, and worth paying for.",
    description:
      "Spacing, motion, responsiveness, and atmosphere work together so the site feels closer to a luxury digital studio than a generic agency.",
  },
];

export const industries = [
  { title: "Healthcare", icon: HeartPulse },
  { title: "Legal", icon: Gavel },
  { title: "Accounting", icon: ReceiptText },
  { title: "Hospitality", icon: ConciergeBell },
  { title: "Restaurants", icon: Store },
  { title: "Retail", icon: ShoppingBag },
  { title: "Artists", icon: WandSparkles },
  { title: "Musicians", icon: Music4 },
  { title: "Photographers", icon: Camera },
  { title: "Radio Stations", icon: Radio },
  { title: "Content Creators", icon: Podcast },
  { title: "Corporate", icon: Building2 },
  { title: "Startups", icon: Orbit },
];

export const portfolioItems = [
  {
    name: "Private Clinic",
    type: "Professional Website",
    summary:
      "A trust-first website for medical professionals with appointment flows, service breakdowns, and clear credibility cues.",
    accent: "from-sky-400/70 via-blue-500/40 to-violet-500/25",
  },
  {
    name: "Boutique Resort",
    type: "Hotel & Booking Experience",
    summary:
      "A cinematic hospitality experience with premium visuals, room storytelling, and booking-oriented user journeys.",
    accent: "from-fuchsia-400/60 via-violet-500/40 to-sky-400/25",
  },
  {
    name: "City Radio",
    type: "Radio Platform",
    summary:
      "A polished radio and media platform combining live playback, schedules, content sections, and brand depth.",
    accent: "from-blue-400/70 via-cyan-400/35 to-pink-500/25",
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
  { label: "Portfolio websites", icon: Camera },
  { label: "Booking systems", icon: BadgeCheck },
  { label: "Restaurant websites", icon: Store },
  { label: "Hotel websites", icon: ConciergeBell },
  { label: "Radio platforms", icon: Radio },
  { label: "Custom applications", icon: Activity },
  { label: "AI assistants", icon: Stethoscope },
  { label: "Automation systems", icon: Workflow },
  { label: "Digital solutions", icon: Landmark },
];

import {
  Bot,
  Cloud,
  Code2,
  Layers3,
  MessageSquare,
  Sparkles,
  Workflow,
} from "lucide-react";

export const navigationItems = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
];

export const services = [
  {
    title: "Custom Websites",
    description:
      "Editorial-grade websites designed to look exceptional, load fast, and convert with confidence.",
    icon: Sparkles,
  },
  {
    title: "Web Applications",
    description:
      "Product-grade platforms built for speed, usability, and long-term business leverage.",
    icon: Layers3,
  },
  {
    title: "AI Agents",
    description:
      "Task-oriented AI systems that assist teams, automate workflows, and surface decisions faster.",
    icon: Bot,
  },
  {
    title: "AI Voice Assistants",
    description:
      "Natural voice experiences for intake, support, scheduling, and high-volume customer interactions.",
    icon: MessageSquare,
  },
  {
    title: "Business Automation",
    description:
      "Connected internal operations that remove manual work and turn repetitive processes into systems.",
    icon: Workflow,
  },
  {
    title: "API Integrations",
    description:
      "Reliable integrations between your products, payments, CRMs, and internal tools with clean data flow.",
    icon: Code2,
  },
  {
    title: "Cloud Solutions",
    description:
      "Scalable cloud architecture, deployment workflows, and infrastructure that support modern growth.",
    icon: Cloud,
  },
];

export const capabilityCards = [
  {
    eyebrow: "Design Precision",
    title: "Elegant interfaces that make complex products feel simple.",
    description:
      "Every layout, transition, and interaction is tuned to create trust, clarity, and a premium first impression.",
  },
  {
    eyebrow: "System Thinking",
    title: "Software that connects beautifully to the way your business already works.",
    description:
      "We design around operations, not just pages, so your website, product, and internal workflows move together.",
  },
  {
    eyebrow: "Applied AI",
    title: "Automation and AI that create measurable leverage, not noise.",
    description:
      "From agents to voice systems, we focus on AI that saves time, captures value, and scales with your team.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Strategy",
    description:
      "We define the opportunity, shape the product story, and prioritize the systems that matter most.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We create a refined visual language, interaction model, and interface architecture built for conversion.",
  },
  {
    number: "03",
    title: "Engineering",
    description:
      "We build with modern frontend, backend, AI, and cloud tooling while keeping the implementation clean and reusable.",
  },
  {
    number: "04",
    title: "Launch + Improve",
    description:
      "We deploy, monitor, and continue refining the system so the experience keeps compounding in value.",
  },
];

export const workPreviews = [
  {
    name: "Atlas Commerce",
    type: "Website + Automation",
    summary:
      "Luxury digital storefront with integrated ops automation and high-conversion funnels.",
  },
  {
    name: "Northstar OS",
    type: "Web App + AI",
    summary:
      "Operational dashboard combining analytics, AI assistance, and custom internal workflows.",
  },
  {
    name: "Signal Voice",
    type: "Voice Assistant",
    summary:
      "AI voice intake system handling qualification, routing, and scheduling with a human tone.",
  },
];

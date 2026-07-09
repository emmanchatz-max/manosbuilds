import { render, screen } from "@testing-library/react";

import { LandingPage } from "@/components/landing/LandingPage";

describe("LandingPage", () => {
  it("renders the primary hero content and calls to action", () => {
    render(<LandingPage />);

    expect(
      screen.getByRole("heading", {
        name: "Building the Future with Code & AI",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getAllByRole("link", { name: /start your project/i }).length,
    ).toBeGreaterThan(0);

    expect(screen.getByRole("link", { name: /view our work/i })).toBeInTheDocument();
  });

  it("renders the full service offering", () => {
    render(<LandingPage />);

    expect(screen.getByText("Custom Websites")).toBeInTheDocument();
    expect(screen.getByText("Web Applications")).toBeInTheDocument();
    expect(screen.getByText("AI Agents")).toBeInTheDocument();
    expect(screen.getByText("AI Voice Assistants")).toBeInTheDocument();
    expect(screen.getByText("Business Automation")).toBeInTheDocument();
    expect(screen.getByText("API Integrations")).toBeInTheDocument();
    expect(screen.getByText("Cloud Solutions")).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";

import { LandingPage } from "@/components/landing/LandingPage";

describe("LandingPage", () => {
  it("renders the primary hero content and calls to action", () => {
    render(<LandingPage />);

    expect(
      screen.getByRole("heading", {
        name: /beautiful websites\./i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getAllByRole("link", { name: /start your project/i }).length,
    ).toBeGreaterThan(0);

    expect(screen.getAllByRole("link", { name: /view our work/i }).length).toBeGreaterThan(0);
  });

  it("renders the full service offering", () => {
    render(<LandingPage />);

    expect(screen.getByText("Professional Websites")).toBeInTheDocument();
    expect(screen.getByText("Custom Web Applications")).toBeInTheDocument();
    expect(screen.getByText("AI Assistants")).toBeInTheDocument();
    expect(screen.getByText("Business Automation")).toBeInTheDocument();
    expect(screen.getByText("Hosting & Support")).toBeInTheDocument();
  });
});

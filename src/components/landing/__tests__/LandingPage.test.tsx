import { render, screen } from "@testing-library/react";

import { LandingPage } from "@/components/landing/LandingPage";

describe("LandingPage", () => {
  it("renders the primary hero content and calls to action", () => {
    render(<LandingPage />);

    expect(
      screen.getByRole("heading", {
        name: /premium websites/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getAllByRole("link", { name: /start your project/i }).length,
    ).toBeGreaterThan(0);

    expect(screen.getAllByRole("link", { name: /view our work/i }).length).toBeGreaterThan(0);
  });

  it("renders the full service offering", () => {
    render(<LandingPage />);

    expect(screen.getByText("Premium Business Websites")).toBeInTheDocument();
    expect(screen.getByText("Custom Web Applications")).toBeInTheDocument();
    expect(screen.getByText("AI Assistants")).toBeInTheDocument();
    expect(screen.getByText("Business Automation")).toBeInTheDocument();
    expect(screen.getByText("Digital Systems")).toBeInTheDocument();
    expect(screen.getByText("Cloud Solutions")).toBeInTheDocument();
  });

  it("renders the editorial positioning section", () => {
    render(<LandingPage />);

    expect(screen.getByText("Website First")).toBeInTheDocument();
    expect(screen.getByText(/the first thing people should notice/i)).toBeInTheDocument();
  });
});

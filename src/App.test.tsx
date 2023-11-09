import { axe } from "jest-axe";
import { render, screen } from "test/utilities";
import App from "./App";

describe("App", () => {
  it("should render", () => {
    render(<App />);
  });

  it("should have a heading", () => {
    render(<App />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<App />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

import { render, screen } from "test/utilities";
import App from "./App";

describe("App", () => {
  it("should render", () => {
    render(<App />);
    const heading = screen.getByText(/Vite, React, Tailwind minimal starter/i);
    expect(heading).toBeInTheDocument();
  });
});

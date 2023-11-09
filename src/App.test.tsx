import { render, screen } from "test/utilities";
import App from "./App";

describe("App", () => {
  it("should render App component", () => {
    render(<App />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
});

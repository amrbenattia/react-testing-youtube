// import { render, screen } from "@testing-library/react";
// import AppProvider from "../../Providers/AppProvider";

// test setup for wrapper
import { render, screen } from "../../testUtils";
import MuiMode from "./MuiMode";

describe("MuiMode", () => {
  // wrapper is appProvider to implement the dark mode
  it("render correctly", () => {
    // render(<MuiMode />, { wrapper: AppProvider });
    render(<MuiMode />);
    const h1Element = screen.getByRole("heading", {
      level: 1,
    });
    expect(h1Element).toBeInTheDocument();
    expect(h1Element).toHaveTextContent("You are in dark mode");
  });
});

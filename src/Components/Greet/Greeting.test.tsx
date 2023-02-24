import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
describe("Greeting", () => {
  it("should have hello", () => {
    render(<Greeting />);
    const helloMessage = screen.getByText(/Hello/);
    expect(helloMessage).toBeInTheDocument();
  });
});

describe("Nested", () => {
  it("should greet Amr", () => {
    render(<Greeting name="Amr" />);
    const helloMessage = screen.getByText("Hello Amr");
    expect(helloMessage).toBeInTheDocument();
  });
});

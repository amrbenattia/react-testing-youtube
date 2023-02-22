import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
test("should have hello", () => {
  render(<Greeting />);
  const helloMessage = screen.getByText("Hello");
  expect(helloMessage).toBeInTheDocument();
});

test("should greet Amr", () => {
  render(<Greeting name="Am" />);
  const helloMessage = screen.getByText("Hello Amr");
  expect(helloMessage).toBeInTheDocument();
});

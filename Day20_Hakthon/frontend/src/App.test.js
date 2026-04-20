import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Security Questions heading", () => {
  render(<App />);
  expect(
    screen.getByText(/security questions/i)
  ).toBeInTheDocument();
});

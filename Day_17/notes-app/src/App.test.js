import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

test("adds and deletes a note", () => {
  render(<App />);

  fireEvent.change(screen.getByPlaceholderText(/enter note/i), {
    target: { value: "New Note" },
  });
  fireEvent.click(screen.getByRole("button", { name: /add/i }));

  expect(
    screen.getByText(/new note — open/i)
  ).toBeInTheDocument();

  fireEvent.click(screen.getByText(/delete/i));
  expect(
    screen.queryByText(/new note — open/i)
  ).not.toBeInTheDocument();
});
``
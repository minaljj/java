import { render, screen, fireEvent } from "@testing-library/react";
import NoteForm from "./NoteForm";
import "@testing-library/jest-dom";

test("adds note on submit with closed status", () => {
  const addNote = jest.fn();

  render(<NoteForm addNote={addNote} />);

  fireEvent.change(screen.getByPlaceholderText(/enter note/i), {
    target: { value: "Test Note" },
  });
  fireEvent.click(screen.getByLabelText(/closed/i));
  fireEvent.click(screen.getByRole("button", { name: /add/i }));
  expect(addNote).toHaveBeenCalledWith({
    title: "Test Note",
    status: "closed",
  });
});
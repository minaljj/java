import { render, screen } from "@testing-library/react";
import NoteList from "./NoteList";
import '@testing-library/jest-dom';
test("renders notes", () => {
  const notes = [
    { id: 1, title: "Note 1", status:"created" },
    { id: 2, title: "Note 2", status:"created" }
  ];
  render(<NoteList notes={notes} deleteNote={() => {}} />);
  expect(screen.getByText(/note 1/i)).toBeInTheDocument();
  expect(screen.getByText(/note 2/i)).toBeInTheDocument();
});
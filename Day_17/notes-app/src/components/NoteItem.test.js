// import { render, screen, fireEvent } from "@testing-library/react";
// import NoteItem from "./NoteItem";

// test("calls delete on click", () => {
//   const deleteNote = jest.fn();
//   const note = { id: 1, text: "Test", status: "created" };

//   render(<NoteItem note={note} deleteNote={deleteNote} />);

//   fireEvent.click(screen.getByText(/delete/i));

//   expect(deleteNote).toHaveBeenCalledWith(note.id);
// });

import { render, screen, fireEvent } from "@testing-library/react";
import NoteItem from "./NoteItem";

test("renders note title", () => {
  const note = { id: 1, title: "My Note", status: "created" };

  render(<NoteItem note={note} deleteNote={() => {}} />);

  expect(screen.getByText(/my note/i)).toBeInTheDocument();
});

test("calls delete on click", () => {
  const deleteNote = jest.fn();
  const note = { id: 1, title: "Test", status: "created" };

  render(<NoteItem note={note} deleteNote={deleteNote} />);

  fireEvent.click(screen.getByText(/delete/i));

  expect(deleteNote).toHaveBeenCalledWith(1);
});
// import { render, screen } from "@testing-library/react";
// import NoteList from "./NoteList";

// test("renders notes", () => {
//   const notes = [
//     { id: 1, title: "Note 1", status: "pending" },
//     { id: 2, title: "Note 2", status: "done" }
//   ];

//   render(<NoteList notes={notes} deleteNote={() => {}} />);

//   notes.forEach(note => {
//   expect(screen.getByText(new RegExp(note.title, "i"))).toBeInTheDocument();
//   });
// });

import { render, screen, fireEvent } from "@testing-library/react";
import NoteList from "./NoteList";

const notes = [
  { id: 1, title: "Note 1", status: "created" },
  { id: 2, title: "Note 2", status: "completed" }
];

test("renders notes", () => {
  render(
    <NoteList
      notes={notes}
      deleteNote={() => {}}
      toggleStatus={() => {}}
      completeNote={() => {}}
      onEdit={() => {}}
    />
  );

  expect(screen.getByText(/note 1/i)).toBeInTheDocument();
  expect(screen.getByText(/note 2/i)).toBeInTheDocument();
});

test("calls deleteNote", () => {
  const deleteNote = jest.fn();

  render(
    <NoteList
      notes={[notes[0]]}
      deleteNote={deleteNote}
      toggleStatus={() => {}}
      completeNote={() => {}}
      onEdit={() => {}}
    />
  );

  fireEvent.click(screen.getByTitle("Delete"));

  expect(deleteNote).toHaveBeenCalledWith(1);
});

test("calls toggleStatus", () => {
  const toggleStatus = jest.fn();

  render(
    <NoteList
      notes={[notes[0]]}
      deleteNote={() => {}}
      toggleStatus={toggleStatus}
      completeNote={() => {}}
      onEdit={() => {}}
    />
  );

  fireEvent.click(screen.getByTitle("Toggle Status"));

  expect(toggleStatus).toHaveBeenCalledWith(1);
});
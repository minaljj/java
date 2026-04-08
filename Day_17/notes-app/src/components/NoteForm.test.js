// import { render, screen, fireEvent } from "@testing-library/react";
// import NoteForm from "./NoteForm";

// test("adds note on submit", () => {
//   const addNote = jest.fn();
//   const testValue = "Test Note";

//   render(<NoteForm addNote={addNote} />);

//   fireEvent.change(screen.getByPlaceholderText(/Enter task/i), {
//     target: { value: testValue }
//   });

//   fireEvent.click(screen.getByText(/add/i));

//   expect(addNote).toHaveBeenCalledWith(
//   expect.objectContaining({title: testValue})
//   );
// });

// test("does not submit when title is empty", () => {
//   const addNote = jest.fn();

//   render(<NoteForm addNote={addNote} />);

//   fireEvent.click(screen.getByText(/add note/i));

//   expect(addNote).not.toHaveBeenCalled();
// });

// test("shows character count for title", () => {
//   render(<NoteForm addNote={() => {}} />);

//   const input = screen.getByPlaceholderText(/enter task/i);

//   fireEvent.change(input, {
//     target: { value: "12345678901234567890" } // 20 chars
//   });

//   expect(screen.getByText("20/20")).toBeInTheDocument();
// });

import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import NoteForm from "./NoteForm";
import { addNoteApi } from "../services/api";

jest.mock("../services/api", () => ({
  addNoteApi: jest.fn()
}));

test("adds note on submit", async () => {
  const addNote = jest.fn();

  addNoteApi.mockResolvedValue({
    data: { id: 1, title: "Test Note" }
  });

  render(<NoteForm addNote={addNote} />);

  fireEvent.change(screen.getByPlaceholderText(/enter task/i), {
    target: { value: "Test Note" }
  });

  fireEvent.click(screen.getByText(/add note/i));

  await waitFor(() => {
    expect(addNote).toHaveBeenCalledWith(
      expect.objectContaining({ title: "Test Note" })
    );
  });
});

test("does not submit empty title", () => {
  const addNote = jest.fn();

  render(<NoteForm addNote={addNote} />);

  fireEvent.click(screen.getByText(/add note/i));

  expect(addNote).not.toHaveBeenCalled();
});

test("loads edit note data", () => {
  const editNote = {
    id: 1,
    title: "Edit Note",
    description: "Desc",
    status: "completed",
    priority: 5
  };

  render(<NoteForm addNote={() => {}} editNote={editNote} />);

  expect(screen.getByDisplayValue("Edit Note")).toBeInTheDocument();
  expect(screen.getByDisplayValue("Desc")).toBeInTheDocument();
  expect(screen.getByRole("checkbox")).toBeChecked();
});
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";
import * as api from "./services/api";

jest.mock("./services/api");

jest.mock("./components/StatusBarChart", () => () => (
  <div>Mock Chart</div>
));

test("adds and deletes note", async () => {
  api.getNotes.mockResolvedValue({ data: [] });

  api.addNoteApi.mockResolvedValue({
    data: { id: 1, title: "New Note", status: "created" }
  });

  render(<App />);

  // open form
  fireEvent.click(screen.getByText(/add/i));

  // enter title
  fireEvent.change(screen.getByPlaceholderText(/enter task/i), {
    target: { value: "New Note" }
  });

  // submit
  fireEvent.click(
    screen.getByRole("button", { name: /add note/i })
  );

  // wait for add
  await waitFor(() => {
    expect(screen.getByText(/new note/i)).toBeInTheDocument();
  });

  // delete
  fireEvent.click(screen.getByTitle("Delete"));

  // wait for removal
  await waitFor(() => {
    expect(screen.queryByText(/new note/i)).not.toBeInTheDocument();
  });
});


// test("adds and deletes note", () => {
//   render(<App />);
//   const inputEntry = "New Note";

//   fireEvent.change(screen.getByPlaceholderText(/Enter task/i), {
//     target: { value: inputEntry }
//   });

//   fireEvent.click(screen.getByText(/add/i));

//   expect(screen.getByText(new RegExp(inputEntry, "i"))).toBeInTheDocument();

//   fireEvent.click(screen.getByText(/delete/i));

//   expect(screen.queryByText(new RegExp(inputEntry, "i"))).not.toBeInTheDocument();
// });

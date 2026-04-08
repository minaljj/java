import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SecurityQuestionsForm from "./SecurityQuestionsForm";

// mock fetch
global.fetch = jest.fn();

beforeEach(() => {
  fetch.mockResolvedValueOnce({
    json: async () => [
      { id: 1, question: "What is your birth month?" },
      { id: 2, question: "What year did you graduate from school?" },
      { id: 3, question: "What city were you born in?" },
      { id: 4, question: "What was the name of your first school?" },
      { id: 5, question: "What is your favorite color?" }
    ]
  });
});
test("shows error when answer and confirm answer do not match", async () => {
  render(<SecurityQuestionsForm />);

  await waitFor(() => {
    expect(screen.getAllByRole("combobox").length).toBe(5);
  });

  fireEvent.change(screen.getAllByRole("combobox")[0], {
    target: { value: "1" }
  });

  fireEvent.change(screen.getAllByPlaceholderText("Answer")[0], {
    target: { value: "abc" }
  });

  fireEvent.change(screen.getAllByPlaceholderText("Confirm Answer")[0], {
    target: { value: "xyz" }
  });

  expect(
    await screen.findByText(/answers do not match/i)
  ).toBeInTheDocument();
});
test("does not show error when answer and confirm answer match", async () => {
  render(<SecurityQuestionsForm />);

  fireEvent.change(screen.getAllByPlaceholderText("Answer")[0], {
    target: { value: "abc" }
  });

  fireEvent.change(screen.getAllByPlaceholderText("Confirm Answer")[0], {
    target: { value: "abc" }
  });

  await waitFor(() => {
    expect(
      screen.queryByText(/answers do not match/i)
    ).not.toBeInTheDocument();
  });
});
test("hide answers checkbox is rendered", () => {
  render(<SecurityQuestionsForm />);

  expect(
    screen.getByRole("checkbox")
  ).toBeInTheDocument();
});
test("update button is rendered", () => {
  render(<SecurityQuestionsForm />);

  expect(
    screen.getByRole("button", { name: /update/i })
  ).toBeInTheDocument();
});
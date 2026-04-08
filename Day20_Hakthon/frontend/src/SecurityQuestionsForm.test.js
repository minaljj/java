import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SecurityQuestionsForm from "./SecurityQuestionsForm";
global.fetch = jest.fn();

beforeEach(() => {
  fetch.mockResolvedValueOnce({
    json: async () => [
      { id: 1, question: "What is your mother's maiden name?" },
      { id: 2, question: "What was the name of your first pet?" },
      { id: 3, question: "What city were you born in?" },
      { id: 4, question: "What was the name of your first school?" },
      { id: 5, question: "What is your favorite teacher's name?" }
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

  await waitFor(() => {
    expect(
      screen.getByText(/answers do not match/i)
    ).toBeInTheDocument();
  });
});
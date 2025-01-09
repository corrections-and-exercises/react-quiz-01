import Notes from "../../src/components/Notes.jsx";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect } from "vitest";

describe("Notes", () => {
  it("should render 'No notes' intially", () => {
    render(<Notes />);
    const text = screen.queryByText("No notes");
    expect(text).toBeInTheDocument();
  });

  it("should add a note and display it", async () => {
    render(<Notes />);
    const input = screen.queryByRole("textbox");
    const submitBtn = screen.queryByRole("button", { type: "form" });
    await userEvent.type(input, "cleaning");
    await userEvent.click(submitBtn);
  });

  it("should be able to delete a note", async () => {
    render(<Notes />);
    const input = screen.queryByRole("textbox");
    const submitBtn = screen.queryByRole("button", { type: "form" });
    await userEvent.type(input, "cleaning");
    await userEvent.click(submitBtn);

    const deleteBtn = screen.queryAllByRole("button", { name: "delete" })[0];
    await userEvent.click(deleteBtn);
  });
});

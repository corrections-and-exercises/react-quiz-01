import Notes from "../../src/components/Notes.jsx";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect } from "vitest";

describe("Notes", () => {
  it("should render 'No notes' intially", () => {
    render(<Notes />);
    const text = screen.getByText("No notes");
    expect(text).toBeInTheDocument();
  });

  it("should add a note and display it", async () => {
    render(<Notes />);
    const input = screen.getByRole("textbox");
    const submitBtn = screen.getByRole("button", { type: "form" });
    await userEvent.type(input, "cleaning");
    await userEvent.click(submitBtn);
  });

  it("should be able to delete a note", async () => {
    render(<Notes />);
    const input = screen.getByRole("textbox");
    const submitBtn = screen.getByRole("button", { type: "form" });
    await userEvent.type(input, "cleaning");
    await userEvent.click(submitBtn);

    const deleteBtn = screen.getByRole("button", { name: "delete" });
    await userEvent.click(deleteBtn);
  });
});

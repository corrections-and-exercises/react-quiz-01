import { render, screen } from "@testing-library/react";
import SingleNote from "../../src/components/SingleNote.jsx";
import { expect } from "vitest";

describe("SingleNote", () => {
  it("should return null or an empty string if no note is passed in", () => {
    const { container } = render(<SingleNote />);
    expect(container).toBeEmptyDOMElement();
  });

  it("should display the passed in note", () => {
    const exampleNote = { text: "cleaning", id: 1 };
    render(<SingleNote note={exampleNote} />);
    const note = screen.queryByText(exampleNote.text);
    expect(note).toBeInTheDocument();
  });
});

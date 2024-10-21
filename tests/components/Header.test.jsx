import { render, screen } from "@testing-library/react";
import Header from "../../src/components/Header";
import { expect } from "vitest";

describe("Header", () => {
  it("should render Hello Guest if no user is passed as a prop", () => {
    render(<Header />);

    const greeting = screen.getByText("Hello Guest");
    expect(greeting).toBeInTheDocument();
  });

  it("should render username if user is passed in as props", () => {
    const user = "karl";
    render(<Header username={user} />);

    const greeting = screen.getByText(user, { exact: false });
    expect(greeting).toBeInTheDocument();
  });

  it("should render Hello Guest if username is null", () => {
    render(<Header username={null} />);
    const greeting = screen.getByText("Hello Guest");
    expect(greeting).toBeInTheDocument();
  });
});

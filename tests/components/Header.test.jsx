import { render, screen } from "@testing-library/react";
import Header from "../../src/components/Header";
import { expect } from "vitest";

describe("Header", () => {
  it("should render Hello Guest if no user is passed as a prop", () => {
    render(<Header />);

    const greeting = screen.getByText("Hello Guest");
    expect(greeting).toBeInTheDocument();
  });

  it("should render value of user if user is passed in as a string", () => {
    const user = "karl";
    render(<Header user={user} />);

    const greeting = screen.getByText(user, { exact: false });
    expect(greeting).toBeInTheDocument();
  });

  it("should render Hello Guest if user is null", () => {
    render(<Header user={null} />);
    const greeting = screen.getByText("Hello Guest");
    expect(greeting).toBeInTheDocument();
  });

  it("should also be able to accept an object with at least the property 'firstName' and render the value correctly", () => {
    render(<Header user={{ firstName: "Karl" }} />);
    const greeting = screen.getByText("Hello Karl");
    expect(greeting).toBeInTheDocument();
  });
});

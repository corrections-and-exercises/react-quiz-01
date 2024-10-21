import { render, screen } from "@testing-library/react";
import Topics from "../../src/components/Topics";
import { topics } from "../../src/services/data";

describe("Topics", () => {
  it("should render no topics when array is empty", () => {
    render(<Topics />);
    expect(screen.getByText(/no topics available/i)).toBeInTheDocument();
  });

  it("should render a list of topics correctly as links", () => {
    render(<Topics topics={topics} />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(topics.length);

    topics.forEach((topic) => {
      const link = screen.getByRole("link", {
        name: topic,
      });
      expect(link).toBeInTheDocument();
    });
  });
});

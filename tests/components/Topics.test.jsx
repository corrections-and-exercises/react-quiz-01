import { render, screen } from "@testing-library/react";
import Topics from "../../src/components/Topics";
import { topics } from "../../src/services/data";

describe("Topics", () => {
  it("should render no topics when array is empty", () => {
    render(<Topics />);
    expect(screen.queryByText(/no topics available/i)).toBeInTheDocument();
  });

  it("should render a list of topics", () => {
    render(<Topics topics={topics} />);
    const listItems = screen.queryAllByRole("listitem");
    expect(listItems).toHaveLength(topics.length);

    topics.forEach((topic) => {
      const result = listItems.some((item) => item.textContent == topic);
      expect(result).toBeTruthy();
    });
  });
});

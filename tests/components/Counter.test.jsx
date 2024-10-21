import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../../src/components/Counter";

describe("Counter", () => {
  const renderComponent = () => {
    render(<Counter />);
    return {
      increaseBtn: screen.getByRole("button", { name: /increase/i }),
      decreaseBtn: screen.getByRole("button", { name: /decrease/i }),
      countElement: screen.getByText(/count/i),
    };
  };

  it("should render with initial count of 0", () => {
    const { countElement } = renderComponent();
    expect(countElement).toHaveTextContent("Count: 0");
  });

  it("should increase the count by 1 when increase button is clicked", async () => {
    const { countElement, increaseBtn } = renderComponent();
    await userEvent.click(increaseBtn);
    expect(countElement).toHaveTextContent("Count: 1");
  });

  it("should not decrease count below 0 when decrease button is clicked", async () => {
    const { decreaseBtn, countElement } = renderComponent();
    userEvent.click(decreaseBtn);
    expect(countElement).toHaveTextContent("Count: 0");
  });
});

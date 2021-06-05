import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from ".";

describe("Counter Component", () => {
  it("should initialize with 0", () => {
    render(<Counter />);

    const number = screen.getByText("0");

    expect(number).toBeInTheDocument();
  });

  it("should have increment button", () => {
    render(<Counter />);

    const button = screen.getByRole("button", { name: /incrementar/i });

    expect(button).toBeInTheDocument();
  });

  it("should have decrement button", () => {
    render(<Counter />);

    const button = screen.getByRole("button", { name: /decrementar/i });

    expect(button).toBeInTheDocument();
  });

  it.todo("should be green if value is positive");

  it.todo("should be red if value is negative");

  it("should increment when increment button is clicked", () => {
    render(<Counter />);

    const incrementButton = screen.getByRole("button", {
      name: /incrementar/i,
    });
    userEvent.click(incrementButton);

    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("should decrement when decrement button is clicked", () => {
    render(<Counter />);

    const decrementButton = screen.getByRole("button", {
      name: /decrementar/i,
    });
    userEvent.click(decrementButton);

    expect(screen.getByText("-1")).toBeInTheDocument();
  });
});

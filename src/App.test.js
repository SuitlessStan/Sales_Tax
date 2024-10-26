import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders all components", () => {
    render(<App />);
    expect(screen.getByText(/sales tax calculator/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/item name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/item cost/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/select state/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /add item/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /clear/i })).toBeInTheDocument();
  });

  test("updates total when adding new item and selecting state", () => {
    render(<App />);

    fireEvent.change(screen.getByPlaceholderText("Item Name"), { target: { value: "Apple" } });
    fireEvent.change(screen.getByPlaceholderText("Item Cost"), { target: { value: "100" } });
    fireEvent.click(screen.getByRole("button", { name: /add item/i }));

    fireEvent.change(screen.getByLabelText(/select state/i), {
      target: { value: "California" },
    });

    expect(screen.getByText(/subtotal: \$100.00/i)).toBeInTheDocument();
    expect(screen.getByText(/added tax: \$8.00/i)).toBeInTheDocument();
    expect(screen.getByText(/total: \$108.00/i)).toBeInTheDocument();
  });

  test("clears purchases when Clear button is clicked", () => {
    render(<App />);

    fireEvent.change(screen.getByPlaceholderText("Item Name"), { target: { value: "Apple" } });
    fireEvent.change(screen.getByPlaceholderText("Item Cost"), { target: { value: "100" } });
    fireEvent.click(screen.getByRole("button", { name: /add item/i }));

    fireEvent.click(screen.getByRole("button", { name: /clear/i }));

    expect(screen.getByText(/subtotal: \$0.00/i)).toBeInTheDocument();
    expect(screen.getByText(/added tax: \$0.00/i)).toBeInTheDocument();
    expect(screen.getAllByText(/total: \$0.00/i)[1]).toBeInTheDocument();
  });
});

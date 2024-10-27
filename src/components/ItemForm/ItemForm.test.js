import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import ItemForm from "./ItemForm"

describe("ItemForm Component", () => {
  const mockAddItem = jest.fn()

  test("renders item name and cost inputs", () => {
    render(<ItemForm addItem={mockAddItem} />)
    expect(screen.getByPlaceholderText("Item Name")).toBeInTheDocument()
    expect(screen.getByPlaceholderText("Item Cost")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /add item/i })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /clear/i })).toBeInTheDocument()
  })

  test("calls addItem with correct data on valid submit", () => {
    render(<ItemForm addItem={mockAddItem} />)
    fireEvent.change(screen.getByPlaceholderText("Item Name"), { target: { value: "Apple" } })
    fireEvent.change(screen.getByPlaceholderText("Item Cost"), { target: { value: "10" } })
    fireEvent.click(screen.getByRole("button", { name: /add item/i }))
    expect(mockAddItem).toHaveBeenCalledWith({ name: "Apple", cost: 10 })
  })

  test("calls clearStats when Clear button is clicked", () => {
    render(<ItemForm addItem={mockAddItem} />)
    fireEvent.click(screen.getByRole("button", { name: /clear/i }))
    expect(screen.getByPlaceholderText("Item Name").value).toBe("")
    expect(screen.getByPlaceholderText("Item Cost").value).toBe("")
  })
})

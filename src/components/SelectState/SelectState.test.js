import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import SelectState from "./SelectState"

describe("SelectState Component", () => {
  const mockSetSelectedState = jest.fn()

  test("renders state dropdown with all options", () => {
    render(<SelectState selectedState="" setSelectedState={mockSetSelectedState} />)
    expect(screen.getByLabelText(/select state/i)).toBeInTheDocument()
    expect(screen.getByRole("combobox")).toBeInTheDocument()
    expect(screen.getAllByRole("option").length).toBe(51)
  })

  test("calls setSelectedState with selected state value", () => {
    render(<SelectState selectedState="" setSelectedState={mockSetSelectedState} />)
    fireEvent.change(screen.getByRole("combobox"), { target: { value: "California" } })
    expect(mockSetSelectedState).toHaveBeenCalledWith("California")
  })
})

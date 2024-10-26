import React, { act } from "react"
import { render, screen } from "@testing-library/react"
import Total from "./Total"

describe("Total Component", () => {
  test("displays subtotal, added tax, and total with correct values", () => {
    const subtotal = 100.0
    const tax = 8.0
    const total = 108.0

    render(<Total subTotal={subtotal} tax={tax} total={total} />)

    expect(screen.getByText(/Subtotal: \$100.00/i)).toBeInTheDocument()
    expect(screen.getByText(/Added tax: \$8.00/i)).toBeInTheDocument()
    expect(screen.getByText(/Total: \$108.00/i)).toBeInTheDocument()
  })
})

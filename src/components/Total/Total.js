import React from "react"

function Total({ tax, total, subTotal }) {
  return (
    <div className="text-lg font-semibold">
      <div className="opacity-50 flex flex-col justify-evenly">
        <span>Subtotal: ${subTotal.toFixed(2)}</span>
        <span>Added tax: ${tax.toFixed(2)}</span>
      </div>
      <h2>Total: ${total.toFixed(2)}</h2>
    </div>
  )
}

export default Total

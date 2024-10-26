import React, { useState } from "react"

function ItemForm({ addItem, clearStats }) {
  const [itemName, setItemName] = useState("")
  const [itemCost, setItemCost] = useState("")
  const [error, setError] = useState({ name: "", cost: "" })

  const handleSubmit = (e) => {
    e.preventDefault()

    let hasError = false
    const newError = { name: "", cost: "" }

    if (!itemName.trim()) {
      newError.name = "Item name is required."
      hasError = true
    }

    const costValue = parseFloat(itemCost)
    if (isNaN(costValue) || costValue <= 0) {
      newError.cost = "Please enter a valid cost greater than 0."
      hasError = true
    }

    if (!itemName || itemCost <= 0) {
      setError("Please enter a valid item name and cost.")
      return
    }

    setError(newError)

    if (!hasError) {
      addItem({ name: itemName, cost: costValue })
      setItemName("")
      setItemCost("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-4 items-center">
      <div className="w-full">
        <input
          type="text"
          placeholder="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          className={`border p-2 rounded ${
            error.name ? "border-red-500" : ""
          } w-full md:w-1/2 text-black`}
          required
        />
        {error.name && <p className="text-red-500 text-sm mt-1">{error.name}</p>}
      </div>

      <div className="w-full">
        <input
          type="number"
          placeholder="Item Cost"
          value={itemCost}
          onChange={(e) => setItemCost(e.target.value)}
          className={`border p-2 rounded ${
            error.cost ? "border-red-500" : ""
          } w-full md:w-1/2 text-black`}
          required
        />
        {error.cost && <p className="text-red-500 text-sm mt-1">{error.cost}</p>}
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full md:w-1/2">
        Add Item
      </button>
      <button
        onClick={clearStats}
        type="button"
        className="bg-red-500 text-white p-2 rounded w-full md:w-1/2">
        Clear
      </button>
    </form>
  )
}

export default ItemForm

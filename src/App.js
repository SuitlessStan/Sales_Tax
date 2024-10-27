import "./App.css"
import ItemForm from "./components/ItemForm/ItemForm"
import SelectState from "./components/SelectState/SelectState"
import Total from "./components/Total/Total"
import { useState, useEffect } from "react"
import { getTaxRate } from "./util/util"

function App() {
  const [purchases, setPurchases] = useState([])
  const [selectedState, setSelectedState] = useState("")
  const [total, setTotal] = useState(0)
  const [subTotal, setSubTotal] = useState(0)
  const [tax, setTax] = useState(0)

  const addItem = (item) => {
    setPurchases([...purchases, item])
  }

  const clearStats = () => {
    setPurchases([])
  }

  useEffect(() => {
    let subtotal = 0
    for (let i = 0; i < purchases.length; i++) {
      subtotal += purchases[i].cost
    }
    setSubTotal(subtotal)

    const taxRate = getTaxRate(selectedState)
    setTotal(subtotal * (1 + taxRate))
    setTax(subtotal * taxRate)
  }, [purchases, selectedState])

  return (
    <div className="App">
      <div className="flex justify-center">
        <img height="200" width="200" alt="calc" src="/OIP.jpeg" />
      </div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Sales Tax Calculator</h1>
        <ItemForm clearStats={clearStats} addItem={addItem} />
        <SelectState selectedState={selectedState} setSelectedState={setSelectedState} />
        <Total tax={tax} total={total} subTotal={subTotal} />
      </div>
    </div>
  )
}

export default App

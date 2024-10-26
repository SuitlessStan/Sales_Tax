const taxRates = {
  eight: ["California", "Texas", "New York", "Florida"],
  five: [
    "Washington",
    "Oregon",
    "Idaho",
    "Utah",
    "Montana",
    "New Mexico",
    "Arizona",
    "Wyoming",
    "Kansas",
    "Arkansas",
    "Georgia",
    "Alabama",
    "Louisiana",
  ],
  // there are others but i guess they dont have tax?
}

function getTaxRate(state) {
  if (taxRates.eight.includes(state)) return 0.08
  if (taxRates.five.includes(state)) return 0.05
  return 0
}

export { taxRates, getTaxRate }

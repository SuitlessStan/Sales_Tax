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
  // no income tax
  none: ["Alaska", "Florida", "Nevada", "South Dakota", "Texas", "Washington", "Wyoming"],
}

/**
 * Retrieves the tax rate based on the provided state.
 *
 * @param {string} state - The state for which to retrieve the tax rate.
 * @returns {number} - The tax rate as a decimal. Returns 0.08 for states with an 8% tax rate,
 *                     0.05 for states with a 5% tax rate, and 0 if the state is not listed.
 */
function getTaxRate(state) {
  if (taxRates.eight.includes(state)) return 0.08
  if (taxRates.five.includes(state)) return 0.05
  return 0
}

export { taxRates, getTaxRate }

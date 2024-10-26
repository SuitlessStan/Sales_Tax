# Sales Tax Calculator

A React application that calculates the total cost of purchases, including an adjustable sales tax based on the selected U.S. state. This project was created as part of an assessment to demonstrate React, Tailwind CSS, and Jest testing skills.

## Features

- **Dynamic Purchase List**: Add items with name and cost.
- **State Selection**: Select a U.S. state from a dropdown to calculate sales tax.
- **Sales Tax Calculation**: Applies 8% tax for specific states (California, Texas, New York, Florida) and 5% tax for others.
- **Automatic Total Update**: Total updates automatically when items are added or the state selection is changed.
- **Input Validation**: Ensures valid item names and positive costs.
- **Testing**: Uses Jest and React Testing Library for unit tests.

## Project Structure

- `components`: Contains React components for the item form, state selector, and total display.
- `util`: Contains helper functions or utilities, if needed.
- `App.js`: Main component to render the application interface.
- `App.test.js`: Tests for the `App` component to ensure rendering and functionality.
- `index.js`: Entry point for the React application.



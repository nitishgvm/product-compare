# Product Comparison App

An interactive, responsive web application that allows users to compare
products side-by-side.\
Built as part of a frontend assessment to demonstrate structured UI
development, state management, accessibility, and user-centric design.

------------------------------------------------------------------------

## 🛠 Tech Stack

-   React 18
-   TypeScript
-   Vite
-   Tailwind CSS
-   HTML5 & CSS3
-   LocalStorage

------------------------------------------------------------------------

## 🚀 Live Demo

👉 https://product-compare-pi.vercel.app/

------------------------------------------------------------------------

## ✨ Features

### Core Features

-   Display of 6--8 products in a responsive grid
-   Product details including name, brand, image, price, and key
    features
-   Select up to 3 products for comparison
-   Comparison view appears only when 2 or more products are selected
-   Side-by-side comparison table
-   Clear or remove products from comparison

### Bonus Enhancements

-   Dark / Light mode with persistence
-   Search and brand filters
-   LocalStorage persistence on reload
-   Smooth animations and transitions
-   Keyboard-accessible interactions
-   Fully responsive layout

------------------------------------------------------------------------

## 📂 Project Structure

src/
├── components/          # Reusable UI components
│   ├── ProductCard.jsx  # Individual product display
│   ├── ComparisonTable.jsx # Side-by-side comparison logic
│   ├── SearchBar.jsx    # Filter input
│   └── ThemeToggle.jsx  # Light/Dark mode switch
├── data/               # Static data assets
│   └── products.js      # Mock product data
├── hooks/              # Custom React hooks
│   └── useLocalStorage.js # Handle data persistence
├── utils/              # Helper functions
│   └── storage.js       # Storage utility wrappers
├── App.jsx             # Main layout and routing
├── index.jsx           # Entry point
└── index.css           # Tailwind directives & global styles

------------------------------------------------------------------------

## ⚙️ Setup Instructions

### Prerequisites

-   Node.js (v18+ recommended)
-   npm

### Installation

npm install

### Run Locally

npm run dev

Application runs at http://localhost:5173

------------------------------------------------------------------------

## 🧠 Assumptions

-   Static data only (no backend)
-   Maximum of 3 products can be compared
-   Focus is on frontend architecture and UX

------------------------------------------------------------------------

## ♻️ Future Improvements

-   Advanced animations with Framer Motion
-   Price range filter
-   Sticky comparison headers
-   Next.js migration for SEO

------------------------------------------------------------------------

## 👤 Author

Nitish Singh\
Frontend / Full Stack Developer

GitHub: https://github.com/nitishgvm\
LinkedIn: https://linkedin.com/in/nitish-singh-124a83220

------------------------------------------------------------------------

## 📄 License

Created for assessment purposes.
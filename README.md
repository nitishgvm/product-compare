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

src/ ├── components/ \# Reusable UI components ├── data/ \# Static data
assets ├── hooks/ \# Custom React hooks ├── styles/ \# Tailwind & global
styles ├── types/ \# TypeScript interfaces ├── App.tsx \# Main
application logic └── main.tsx \# Entry point

------------------------------------------------------------------------

## ⚙️ Setup Instructions

### Prerequisites

-   Node.js v18 or above
-   npm

Verify installation:

    node -v
    npm -v

------------------------------------------------------------------------

### Installation

Clone the repository:

    git clone https://github.com/nitishgvm/product-compare.git

Navigate to the project directory:

    cd product-compare

Install dependencies:

    npm install

------------------------------------------------------------------------

### Run Locally (Development)

Start the development server:

    npm run dev

The application will be available at:

    http://localhost:5173

------------------------------------------------------------------------

### Production Build (Optional)

Create an optimized production build:

    npm run build

Preview the production build locally:

    npm run preview

------------------------------------------------------------------------

### Deployment

The application is deployed on **Vercel**.

To deploy your own version: 1. Push the code to GitHub 2. Import the
repository into Vercel 3. Use the following settings: - Framework
Preset: Vite - Build Command: npm run build - Output Directory: dist

------------------------------------------------------------------------

## 🧠 Assumptions

-   Static data only (no backend/API)
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

Created for assessment purposes
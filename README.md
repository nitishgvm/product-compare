```markdown
# Product Comparison App

A modern, responsive React application for comparing smartphones side-by-side with advanced filtering and dark mode support.

## Features

### Core Features
- **Product Grid**: Display 8 smartphones with detailed specifications
- **Product Selection**: Select up to 3 products for comparison
- **Side-by-Side Comparison**: Interactive comparison table with visual highlights
- **Smart Highlighting**: Best values in green, worst in red
- **Remove/Clear Options**: Remove individual products or clear all selections

### Bonus Features
- **Search & Filter**: Real-time search by product name or brand
- **Dark Mode**: Toggle between light and dark themes
- **Persistent Storage**: Selections and theme saved using localStorage
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Keyboard Accessible**: Full ARIA support and semantic HTML

## Tech Stack

- **React 18**: Modern React with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icon library
- **localStorage API**: Client-side data persistence

## Setup Instructions

### Prerequisites
- Node.js 14+ and npm/yarn installed

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/product-comparison-app.git
cd product-comparison-app
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Start the development server:
\`\`\`bash
npm start
# or
yarn start
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

\`\`\`bash
npm run build
# or
yarn build
\`\`\`

## Project Structure

\`\`\`
src/
├── components/          # Reusable React components
│   ├── ProductCard.jsx
│   ├── ComparisonTable.jsx
│   ├── SearchBar.jsx
│   └── ThemeToggle.jsx
├── data/               # Static data and constants
│   └── products.js
├── hooks/              # Custom React hooks
│   └── useLocalStorage.js
├── utils/              # Utility functions
│   └── storage.js
├── App.jsx             # Main application component
├── index.jsx           # Application entry point
└── index.css           # Global styles
\`\`\`

## Key Design Decisions

### Component Architecture
- **Separation of Concerns**: Each component has a single responsibility
- **Reusability**: Components are designed to be reusable and composable
- **Props-based Communication**: Parent-child communication via props

### State Management
- **Custom Hook**: useLocalStorage hook for persistent state
- **Local State**: React useState for component-specific state
- **No External Libraries**: Avoided Redux/Context for simplicity

### Styling Approach
- **Tailwind CSS**: Utility-first approach for rapid development
- **Dark Mode**: Class-based dark mode with system preference detection
- **Responsive Design**: Mobile-first approach with breakpoints

### Data Persistence
- **localStorage**: Client-side storage for comparison list and theme
- **Error Handling**: Graceful fallbacks for storage failures
- **Type Safety**: Proper serialization/deserialization

## Features Breakdown

### Product Comparison Logic
- Maximum 3 products can be compared simultaneously
- Comparison table appears when 2+ products are selected
- Visual indicators for best/worst values
- Price comparison with color-coded highlights

### Search Functionality
- Real-time filtering by product name
- Case-insensitive search
- Brand-based filtering support

### Accessibility
- Semantic HTML elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus management

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Future Enhancements

- [ ] Add product categories (phones, laptops, tablets)
- [ ] Export comparison as PDF/image
- [ ] Share comparison via URL
- [ ] Add more filter options (price range, brand)
- [ ] Implement drag-and-drop for product ordering
- [ ] Add product reviews and ratings

## License

MIT License - feel free to use this project for learning and development.

## Author

Nitish - [GitHub Profile](https://github.com/yourusername)

## Acknowledgments

- Product images from Unsplash
- Icons from Lucide React
- UI inspiration from modern e-commerce sites
\`\`\`

---

## 16. .gitignore

```
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

# IDE
.vscode/
.idea/
*.swp
*.swo
*~
```

---

## Quick Start Commands

\`\`\`bash
# Initialize project
npx create-react-app product-comparison-app
cd product-comparison-app

# Install dependencies
npm install lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Copy all files from above structure
# Run the app
npm start
\`\`\`
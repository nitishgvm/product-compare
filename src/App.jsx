import React, { useState, useEffect } from 'react';
import { Smartphone } from 'lucide-react';
import ProductCard from './components/ProductCard';
import ComparisonTable from './components/ComparisonTable';
import SearchBar from './components/SearchBar';
import ThemeToggle from './components/ThemeToggle';
import { useLocalStorage } from './hooks/useLocalStorage';
import { PRODUCTS } from './data/products';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProducts, setSelectedProducts] = useLocalStorage('comparisonList', []);
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const filteredProducts = PRODUCTS.filter(
    product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleToggleCompare = (product) => {
    const isSelected = selectedProducts.some(p => p.id === product.id);
    
    if (isSelected) {
      setSelectedProducts(selectedProducts.filter(p => p.id !== product.id));
    } else {
      if (selectedProducts.length >= 3) {
        alert('You can only compare up to 3 products at a time');
        return;
      }
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const handleRemove = (id) => {
    setSelectedProducts(selectedProducts.filter(p => p.id !== id));
  };

  const handleClear = () => {
    setSelectedProducts([]);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <Smartphone className="text-blue-600 dark:text-blue-400" />
              Phone Comparison
            </h1>
            <ThemeToggle darkMode={darkMode} onToggle={() => setDarkMode(!darkMode)} />
          </div>

          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

          {selectedProducts.length > 0 && (
            <div className="mt-4 text-center">
              <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full font-medium">
                {selectedProducts.length}/3 products selected
              </span>
            </div>
          )}
        </div>

        {selectedProducts.length >= 2 && (
          <ComparisonTable
            products={selectedProducts}
            onRemove={handleRemove}
            onClear={handleClear}
          />
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              isSelected={selectedProducts.some(p => p.id === product.id)}
              onToggleCompare={handleToggleCompare}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No products found matching "{searchTerm}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
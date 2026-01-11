import React from 'react';
import { Cpu, Battery, Monitor } from 'lucide-react';

const ProductCard = ({ product, isSelected, onToggleCompare }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all hover:shadow-xl">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={() => onToggleCompare(product)}
          className={`absolute top-2 right-2 px-3 py-1 rounded-full text-sm font-medium transition-colors ${
            isSelected
              ? 'bg-blue-600 text-white'
              : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
          }`}
        >
          {isSelected ? 'Selected' : 'Compare'}
        </button>
      </div>
      <div className="p-4">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {product.brand}
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {product.name}
        </h3>
        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-3">
          ${product.price}
        </div>
        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
          <div className="flex items-center gap-2">
            <Cpu size={16} />
            <span>{product.features.processor}</span>
          </div>
          <div className="flex items-center gap-2">
            <Battery size={16} />
            <span>{product.features.battery}</span>
          </div>
          <div className="flex items-center gap-2">
            <Monitor size={16} />
            <span>{product.features.screen}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
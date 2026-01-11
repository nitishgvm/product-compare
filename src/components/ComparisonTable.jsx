import React from 'react';
import { X, Cpu, Battery, Monitor, Camera, HardDrive, Smartphone } from 'lucide-react';

const ComparisonTable = ({ products, onRemove, onClear }) => {
  const getFeatureIcon = (key) => {
    const icons = {
      processor: Cpu,
      battery: Battery,
      screen: Monitor,
      camera: Camera,
      storage: HardDrive
    };
    return icons[key] || Smartphone;
  };

  const compareValues = (key) => {
    const values = products.map(p => {
      const val = p.features[key];
      if (key === 'battery') return parseInt(val);
      if (key === 'storage') return parseInt(val);
      if (key === 'screen') return parseFloat(val);
      return val;
    });

    const numericValues = values.filter(v => typeof v === 'number');
    if (numericValues.length === values.length) {
      const max = Math.max(...numericValues);
      const min = Math.min(...numericValues);
      return values.map(v => {
        if (v === max) return 'best';
        if (v === min) return 'worst';
        return 'neutral';
      });
    }
    return values.map(() => 'neutral');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Comparison ({products.length} products)
        </h2>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2"
        >
          <X size={16} />
          Clear All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left p-4 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-semibold">
                Feature
              </th>
              {products.map(product => (
                <th key={product.id} className="p-4 bg-gray-50 dark:bg-gray-700">
                  <div className="flex flex-col items-center gap-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="text-center">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {product.name}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {product.brand}
                      </div>
                    </div>
                    <button
                      onClick={() => onRemove(product.id)}
                      className="text-red-600 hover:text-red-700 text-sm flex items-center gap-1"
                    >
                      <X size={14} />
                      Remove
                    </button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-200 dark:border-gray-700">
              <td className="p-4 font-semibold text-gray-900 dark:text-white">Price</td>
              {(() => {
                const prices = products.map(p => p.price);
                const minPrice = Math.min(...prices);
                const maxPrice = Math.max(...prices);
                return products.map(product => (
                  <td
                    key={product.id}
                    className={`p-4 text-center font-bold text-lg ${
                      product.price === minPrice
                        ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                        : product.price === maxPrice
                        ? 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400'
                        : 'text-gray-900 dark:text-white'
                    }`}
                  >
                    ${product.price}
                  </td>
                ));
              })()}
            </tr>
            {Object.keys(products[0].features).map(featureKey => {
              const Icon = getFeatureIcon(featureKey);
              const comparisons = compareValues(featureKey);
              return (
                <tr key={featureKey} className="border-t border-gray-200 dark:border-gray-700">
                  <td className="p-4 font-semibold text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <Icon size={18} />
                      <span className="capitalize">{featureKey}</span>
                    </div>
                  </td>
                  {products.map((product, idx) => (
                    <td
                      key={product.id}
                      className={`p-4 text-center ${
                        comparisons[idx] === 'best'
                          ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 font-semibold'
                          : comparisons[idx] === 'worst'
                          ? 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400'
                          : 'text-gray-900 dark:text-white'
                      }`}
                    >
                      {product.features[featureKey]}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTable;
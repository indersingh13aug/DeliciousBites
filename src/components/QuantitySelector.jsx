import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const QuantitySelector = ({ quantity, onChange, min = 1, max = 20 }) => {
  const handleDecrease = () => {
    if (quantity > min) {
      onChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < max) {
      onChange(quantity + 1);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleDecrease}
        className="p-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50 transition"
        disabled={quantity <= min}
        aria-label="Decrease Quantity"
      >
        <FaMinus size={12} />
      </button>

      <span className="px-3 text-sm font-semibold">{quantity}</span>

      <button
        onClick={handleIncrease}
        className="p-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50 transition"
        disabled={quantity >= max}
        aria-label="Increase Quantity"
      >
        <FaPlus size={12} />
      </button>
    </div>
  );
};

export default QuantitySelector;

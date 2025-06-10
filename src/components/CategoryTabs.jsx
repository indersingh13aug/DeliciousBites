import React from "react";

const categories = [
  "All",
  "Veg",
  "Non Veg",
  "Chinese",
  "Buffet",
  "North Indian Thali",
  "South Indian Thali",
  "Dosa",
  "Idli",
  "Platter",
  "Desserts",
  "Beverages",
];

const CategoryTabs = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="overflow-x-auto whitespace-nowrap bg-white shadow-sm border-b sticky top-0 z-30">
      <div className="flex gap-2 px-4 py-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === category
                ? "bg-green-600 text-white shadow"
                : "bg-gray-100 text-gray-700 hover:bg-green-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};
export default CategoryTabs;

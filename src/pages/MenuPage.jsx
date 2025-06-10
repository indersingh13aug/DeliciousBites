import React, { useState } from "react";
import menuData from "../data/menuData";
import DishCard from "../components/DishCard";
import CategoryTabs from "../components/CategoryTabs";

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Get unique categories from menuData
  const categories = [
    "All",
    ...new Set(menuData.map((dish) => dish.category)),
  ];

  // Filter dishes by active category
  const filteredDishes =
    activeCategory === "All"
      ? menuData
      : menuData.filter((dish) => dish.category === activeCategory);

  return (
    <div className="pt-24 pb-12 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-6">Our Menu</h1>

      {/* Category Tabs */}
      <CategoryTabs
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Dishes Grid */}
      {filteredDishes.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          No dishes found in this category.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {filteredDishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuPage;

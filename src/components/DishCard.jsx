import React from "react";
import { useCart } from "../context/CartContext";
import { FaRupeeSign } from "react-icons/fa";

const DishCard = ({ dish }) => {
  const { id, name, image, price, offer, category } = dish;
  const { addToCart } = useCart();

  const discountedPrice = offer ? price - price * (offer / 100) : price;

  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-3 flex flex-col justify-between"
     data-testid={`dish-${id}`}>
      {/* Image */}
      <div className="relative h-40 overflow-hidden rounded-xl mb-3">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
        />
        {offer && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            {offer}% OFF
          </span>
        )}
      </div>

      {/* Dish Details */}
      <div className="flex-grow">
        <h3 className="text-base font-semibold text-gray-800">{name}</h3>
        <p className="text-xs text-gray-500 mt-1">{category}</p>

        <div className="mt-2 flex items-center space-x-2">
          <span className="text-green-600 font-bold text-lg flex items-center">
            <FaRupeeSign size={14} className="mr-1" />
            {discountedPrice.toFixed(2)}
          </span>
          {offer && (
            <span className="text-gray-400 line-through text-sm">
              ₹{price.toFixed(2)}
            </span>
          )}
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={() => addToCart(dish)}
        className="mt-3 bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default DishCard;

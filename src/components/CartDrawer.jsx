import React from "react";
import { useCart } from "../context/CartContext";
import { FaTimes, FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartDrawer = ({ isOpen, onClose }) => {
  const { cartItems, addToCart, removeFromCart, decreaseQty } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const discountedPrice = item.offer
        ? item.price - item.price * (item.offer / 100)
        : item.price;
      return total + discountedPrice * item.quantity;
    }, 0);
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-semibold">Your Cart</h2>
        <button onClick={onClose}>
          <FaTimes className="text-gray-600" />
        </button>
      </div>

      <div className="p-4 overflow-y-auto h-[calc(100%-150px)]">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => {
            const discountedPrice = item.offer
              ? item.price - item.price * (item.offer / 100)
              : item.price;

            return (
              <div
                key={item.id}
                className="flex items-center justify-between gap-3 mb-4 border-b pb-2"
              >
                <div className="w-16 h-16">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{item.name}</h4>
                  <p className="text-xs text-gray-500">{item.category}</p>
                  <p className="text-sm font-bold text-green-600">
                    ₹{discountedPrice.toFixed(2)}{" "}
                    {item.offer && (
                      <span className="line-through text-xs text-gray-400 ml-1">
                        ₹{item.price}
                      </span>
                    )}
                  </p>
                  <div className="flex items-center mt-2 gap-2">
                    <button
                      className="bg-gray-200 p-1 rounded"
                      onClick={() => decreaseQty(item.id)}
                    >
                      <FaMinus size={12} />
                    </button>
                    <span className="text-sm">{item.quantity}</span>
                    <button
                      className="bg-gray-200 p-1 rounded"
                      onClick={() => addToCart(item)}
                    >
                      <FaPlus size={12} />
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-xs text-red-500 ml-2"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Total and Checkout */}
      <div className="p-4 border-t">
        <div className="flex justify-between font-semibold text-lg">
          <span>Total:</span>
          <span>₹{calculateTotal().toFixed(2)}</span>
        </div>
        <Link
          to="/checkout"
          onClick={onClose}
          className="mt-3 block text-center bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default CartDrawer;

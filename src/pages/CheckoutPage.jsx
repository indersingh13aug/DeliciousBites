import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import QuantitySelector from "../components/QuantitySelector";
import { FaTrash } from "react-icons/fa";

const CheckoutPage = () => {
  const {
    cartItems,
    updateCartQuantity,
    removeFromCart,
    totalPrice,
    clearCart,
  } = useCart();

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handlePlaceOrder = () => {
    const { name, phone, address } = customer;

    if (!name || !phone || !address) {
      alert("Please fill in all customer details.");
      return;
    }

    const orderDetails = cartItems
      .map((item) => {
        const discountedPrice = item.offer
          ? item.price - item.price * (item.offer / 100)
          : item.price;
        return `• ${item.name} (x${item.quantity}) - ₹${(discountedPrice * item.quantity).toFixed(2)}`;
      })
      .join("%0A");

    const message = `
🛒 *New Order Received*%0A
👤 *Name:* ${name}%0A
📞 *Phone:* ${phone}%0A
🏠 *Address:* ${address}%0A
%0A🍽 *Order Details:*%0A${orderDetails}%0A
💰 *Total:* ₹${totalPrice.toFixed(2)}
    `.trim();

    const whatsappURL = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
    clearCart();
  };

  return (
    <div className="max-w-5xl mx-auto p-4 pt-24">
      <h1 className="text-2xl font-bold mb-6 text-green-700">Checkout</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty. Go to the menu to add items.</p>
      ) : (
        <>
          {/* Cart Summary */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {cartItems.map((item) => {
                const discountedPrice = item.offer
                  ? item.price - item.price * (item.offer / 100)
                  : item.price;
                const itemTotal = discountedPrice * item.quantity;

                return (
                  <div
                    key={item.id}
                    className="flex items-start justify-between gap-4 border-b pb-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-sm text-gray-500">
                        ₹{discountedPrice.toFixed(2)} × {item.quantity} = ₹{itemTotal.toFixed(2)}
                      </p>
                      <QuantitySelector
                        quantity={item.quantity}
                        onChange={(qty) => updateCartQuantity(item.id, qty)}
                      />
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                      title="Remove Item"
                    >
                      <FaTrash />
                    </button>
                  </div>
                );
              })}

              {/* Total */}
              <div className="text-right font-semibold text-lg">
                Total: ₹{totalPrice.toFixed(2)}
              </div>
            </div>

            {/* Checkout Form */}
            <div className="bg-gray-50 p-4 rounded-lg shadow-md space-y-4">
              <h2 className="text-xl font-bold text-gray-700 mb-2">Customer Info</h2>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handlePlaceOrder();
                }}
                className="space-y-3"
              >
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full border rounded px-3 py-2"
                    placeholder="Enter your name"
                    value={customer.name}
                    onChange={(e) =>
                      setCustomer({ ...customer, name: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1">Phone</label>
                  <input
                    type="tel"
                    required
                    className="w-full border rounded px-3 py-2"
                    placeholder="Enter your phone number"
                    value={customer.phone}
                    onChange={(e) =>
                      setCustomer({ ...customer, phone: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1">Address</label>
                  <textarea
                    required
                    className="w-full border rounded px-3 py-2"
                    placeholder="Enter delivery address"
                    rows={3}
                    value={customer.address}
                    onChange={(e) =>
                      setCustomer({ ...customer, address: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                >
                  Place Order via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;

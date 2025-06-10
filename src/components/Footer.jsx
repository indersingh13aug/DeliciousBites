import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 mt-16 border-t">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-green-700">TastyBites</h2>
          <p className="mt-2 text-sm">
            Delicious food delivered to your doorstep. North & South Indian, Chinese, Thali, and more.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-green-600">Home</Link>
            </li>
            <li>
              <Link to="/menu" className="hover:text-green-600">Menu</Link>
            </li>
            <li>
              <Link to="/checkout" className="hover:text-green-600">Checkout</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-green-600">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>

          <div>
  <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
  <p className="text-sm">Email: support@tastybites.com</p>
  <p className="text-sm">Phone: +91-9876543210</p>
  <div className="flex gap-4 mt-4 text-xl">
    <a
      href="https://facebook.com"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-green-600"
      aria-label="Facebook"
    >
      <FaFacebookF />
    </a>
    <a
      href="https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-green-600"
      aria-label="Instagram"
    >
      <FaInstagram />
    </a>
    <a
      href="https://wa.me/919203874622"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-green-600"
      aria-label="WhatsApp"
    >
      <FaWhatsapp />
    </a>
  </div>
</div>

        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center text-sm mt-8 text-gray-500">
        © {new Date().getFullYear()} TastyBites. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

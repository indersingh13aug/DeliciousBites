import React from "react";
import { Link } from "react-router-dom";
import menuData from "../data/menuData";
import DishCard from "../components/DishCard";

const HomePage = () => {
  const previewItems = menuData.slice(0, 6); // Show 6 dishes on home

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-cover bg-center text-white py-24 px-4 text-center"  style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Delicious Food Delivered Fast</h1>
        <p className="text-lg md:text-xl mb-6">Order your favorite dishes anytime, anywhere!</p>
        <Link
          to="/menu"
          className="bg-green-600 px-6 py-3 rounded text-white font-medium hover:bg-green-700 transition"
        >
          Explore Menu
        </Link>
      </section>

      {/* Preview Menu Section */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-8">Popular Dishes</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {previewItems.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/menu"
            className="text-green-600 hover:text-green-800 font-medium underline"
          >
            View Full Menu →
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Our Restaurant</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            We serve authentic North and South Indian delicacies along with Chinese, platters,
            and desserts. Enjoy a buffet experience or quick bites with unbeatable flavor and
            quality. Family-friendly, hygienic, and delicious – always!
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

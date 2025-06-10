import React from "react";

const ContactPage = () => {
  return (
    <div className="pt-24 pb-12 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8 text-green-700">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent! We will get back to you soon.");
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm text-gray-700">Your Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700">Email Address</label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700">Message</label>
              <textarea
                required
                rows="4"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info & Map */}
        <div className="space-y-6">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Our Restaurant</h2>
            <p className="text-gray-700 mb-1">
              📍 <strong>Address:</strong> 123 Food Street, Amethi, Uttar Pradesh, India
            </p>
            <p className="text-gray-700 mb-1">
              📞 <strong>Phone:</strong> +91-9876543210
            </p>
            <p className="text-gray-700">
              📧 <strong>Email:</strong> contact@restaurantname.com
            </p>
          </div>

          <div className="rounded overflow-hidden shadow-md">
            <iframe
              title="Restaurant Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.730150078097!2d81.80403281489294!3d26.14950398345159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a3ad6d961a881%3A0x7e31fa29d1cfdfdc!2sAmethi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1621948339830!5m2!1sen!2sin"
              width="100%"
              height="250"
              allowFullScreen=""
              loading="lazy"
              className="border-0 w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

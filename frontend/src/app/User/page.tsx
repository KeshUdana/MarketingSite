"use client";

import { useState } from "react";
import Image from "next/image";

const LoginPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("User added to the waitlist:", { name, email });
    setSubmitted(true); // Show success message after submission
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Hero Banner */}
        <div className="relative">
          <Image
            className="w-full h-56 object-cover rounded-b-lg" // Full-width image with bottom-rounded corners
            alt="Hero"
            src="/images/user.jpg"
            width={800} // Ensures the image scales properly
            height={300}
          />
        </div>

        {/* Form Section */}
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-semibold text-gray-800">
              Join the Waitlist
            </h1>
            <p className="text-lg text-gray-600 mt-2">
              Enter your details below and be the first to know when we launch.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your full name"
                required
              />
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your email address"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Join the Waitlist
            </button>

            {/* Success Message */}
            {submitted && (
              <p className="mt-4 text-green-600 text-center text-lg">
                Thank you for joining!
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

"use client";

import { useState } from "react";
import Image from "next/image";

// Define a type for the form data
interface FormData {
  name: string;
  email: string;
}

const LoginPage = () => {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  
    
    try {
      const response = await fetch("http://localhost:5000/api/submit-waitlist", {  // Use your Express API URL here
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json(); // Parse the response as JSON
         console.log("Backend Response:", result);
  
      if (response.ok) {
        console.log("User added to the waitlist:", formData);
        setSubmitted(true);
      } else {
        console.error("Failed to submit to the waitlist.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Hero Banner */}
        <div className="relative">
          <Image
            className="w-full h-56 object-cover rounded-b-lg"
            alt="Hero"
            src="/images/user.jpg"
            width={800}
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
                name="name"
                value={formData.name}
                onChange={handleChange}
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
                name="email"
                value={formData.email}
                onChange={handleChange}
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

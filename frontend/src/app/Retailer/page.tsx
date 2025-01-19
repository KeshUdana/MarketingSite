"use client";

import Image from "next/image";
import { useState } from "react";

const SignInPage = () => {
  const [formData, setFormData] = useState({
    Name: "",
    jobTitle: "",
    email: "",
    companyName: "",
    mobileNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you for signing up!");
  };

  return (
    <div className="flex flex-col sm:flex-row min-h-screen bg-[#ffd4d4]">
      {/* Left Side: Descriptive Text */}
      <div className="flex flex-col justify-center w-full sm:w-1/2 px-4 sm:px-12 py-8 bg-white shadow-lg">
        <h1 className="text-2xl sm:text-4xl font-bold mb-6 text-gray-800">
          Get started with Modde!
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-4">
          Sign up to sell on Modde. We are looking for Sri Lankan brands and
          sellers who share our passion for delivering quality products and
          exceptional customer experiences. If that sounds like you, we’d love
          for you to apply!
        </p>
        <div className="flex justify-center sm:justify-start">
          <Image
            className="rounded-lg mt-4"
            alt="Modde illustration"
            src="/images/Component 1.png"
            width={300}
            height={200}
          />
        </div>
      </div>

      {/* Right Side: Modern Form */}
      <div className="flex justify-center items-center w-full sm:w-1/2 px-4 sm:px-12 py-8 bg-[#ffd4d4]">
        <form
          className="w-full max-w-lg bg-white p-6 sm:p-8 rounded-lg shadow-md"
          onSubmit={handleSubmit}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
            Sign Up Form
          </h2>

          {/* Name */}
          <div className="mb-4">
            <label
              htmlFor="Name"
              className="block text-sm font-medium text-gray-700"
            >
              Name *
            </label>
            <input
              type="text"
              id="Name"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email address"
            />
          </div>

          {/* Company Name */}
          <div className="mb-4">
            <label
              htmlFor="companyName"
              className="block text-sm font-medium text-gray-700"
            >
              Company Name *
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your company name"
            />
          </div>

          {/* Job Title */}
          <div className="mb-4">
            <label
              htmlFor="jobTitle"
              className="block text-sm font-medium text-gray-700"
            >
              Job Title *
            </label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your job title"
            />
          </div>

          {/* Mobile Number */}
          <div className="mb-4">
            <label
              htmlFor="mobileNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Mobile Number *
            </label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your mobile number"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;

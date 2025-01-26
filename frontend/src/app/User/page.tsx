"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Define types
interface FormData {
  name: string;
  email: string;
}

interface ErrorState {
  name?: string;
  email?: string;
  submit?: string;
}

const LoginPage = () => {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<ErrorState>({});
  const [apiBaseUrl, setApiBaseUrl] = useState("");

  // Initialize API base URL
  useEffect(() => {
    const envApiUrl = process.env.NEXT_PUBLIC_API_URL;
    setApiBaseUrl(envApiUrl || "http://localhost:5000"); // Default to local if no environment variable
  }, []);

  // Validation function
  const validateForm = () => {
    const newErrors: ErrorState = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    return newErrors;
  };

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ErrorState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      const response = await fetch(`${apiBaseUrl}/api/submit-waitlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Backend Response:", result);
        setSubmitted(true);
        setFormData({ name: "", email: "" });
      } else {
        const errorData = await response.json();
        setErrors({ submit: errorData.message || "Failed to submit to the waitlist." });
      }
    } catch (error) {
      console.error("Error:", error);
      setErrors({ submit: "Network error. Please check your connection and try again." });
    } finally {
      setIsLoading(false);
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
            onError={(e) => console.warn("Image load error:", e)}
          />
        </div>

        {/* Form Section */}
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-semibold text-gray-800">Join the Waitlist</h1>
            <p className="text-lg text-gray-600 mt-2">
              Enter your details below and be the first to know when we launch.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-3 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Your full name"
                required
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Your email address"
                required
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Join the Waitlist"}
            </button>

            {/* Error Message */}
            {errors.submit && (
              <p className="mt-4 text-red-500 text-center text-lg">{errors.submit}</p>
            )}

            {/* Success Message */}
            {submitted && !errors.submit && (
              <p className="mt-4 text-green-600 text-center text-lg">
                Thank you for joining! We&apos;ll keep you updated.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

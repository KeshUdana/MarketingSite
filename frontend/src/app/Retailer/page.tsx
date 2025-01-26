"use client";

import Image from "next/image";
import { useState } from "react";

// Define types
interface FormData {
  name: string;
  jobTitle: string;
  email: string;
  companyName: string;
  mobileNumber: string;
}

interface ErrorState {
  name?: string;
  jobTitle?: string;
  email?: string;
  companyName?: string;
  mobileNumber?: string;
  submit?: string;
  [key: string]: string | undefined; // Index signature added here
}

const SignInPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    jobTitle: "",
    email: "",
    companyName: "",
    mobileNumber: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<ErrorState>({});
  const [submitMessage, setSubmitMessage] = useState("");

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.companyName) newErrors.companyName = "Company Name is required.";
    if (!formData.jobTitle) newErrors.jobTitle = "Job Title is required.";
    if (!formData.mobileNumber) {
      newErrors.mobileNumber = "Mobile Number is required.";
    } else if (!/^\d{10,15}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = "Invalid mobile number.";
    }
    return newErrors;
  };

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
    setSubmitMessage("");

    const transformedData = {
      name: formData.name,
      email: formData.email,
      company: formData.companyName,
      title: formData.jobTitle,
      mobile: formData.mobileNumber,
    };

    try {
      const ports = [5000, 5001, 5002, 5003, 5004, 5005, 5006, 5007, 5008, 5009, 5010, 5011, 5012];
      let response = null;
      let connectionError = null;

      for (const port of ports) {
        try {
          const url = `http://localhost:${port}/api/retailers/demo`;
          response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(transformedData),
          });

          if (response.ok) {
            break;
          }
        } catch (error) {
          connectionError = error;
          continue;
        }
      }

      if (response && response.ok) {
        const data = await response.json();
        setSubmitMessage(data.message || "Successfully registered!");
        setFormData({
          name: "",
          jobTitle: "",
          email: "",
          companyName: "",
          mobileNumber: "",
        });
      } else if (!response) {
        setSubmitMessage("Could not connect to the server. Please check if the server is running.");
        console.error("Connection error:", connectionError);
      } else {
        const errorData = await response.json();
        setSubmitMessage(errorData.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row min-h-screen bg-[#ffd4d4]">
      <div className="flex flex-col justify-center w-full sm:w-1/2 px-4 sm:px-12 py-8 bg-white shadow-lg">
        <h1 className="text-2xl sm:text-4xl font-bold mb-6 text-gray-800">
          Get started with Modde!
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-4">
          Sign up to sell on Modde. We are looking for Sri Lankan brands and sellers who share our passion for delivering quality products and exceptional customer experiences. If that sounds like you, we&apos;d love for you to apply!
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

      <div className="flex justify-center items-center w-full sm:w-1/2 px-4 sm:px-12 py-8 bg-[#ffd4d4]">
        <form className="w-full max-w-lg bg-white p-6 sm:p-8 rounded-lg shadow-md" onSubmit={handleSubmit}>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
            Sign Up Form
          </h2>

          {[
            { id: "name", label: "Name", placeholder: "Enter your name" },
            { id: "email", label: "Email Address", placeholder: "Enter your email address" },
            { id: "companyName", label: "Company Name", placeholder: "Enter your company name" },
            { id: "jobTitle", label: "Job Title", placeholder: "Enter your job title" },
            { id: "mobileNumber", label: "Mobile Number", placeholder: "Enter your mobile number" },
          ].map((field) => (
            <div className="mb-4" key={field.id}>
              <label htmlFor={field.id} className="block text-sm font-medium text-gray-700">
                {field.label} *
              </label>
              <input
                type={field.id === "email" ? "email" : field.id === "mobileNumber" ? "tel" : "text"}
                id={field.id}
                name={field.id}
                value={formData[field.id as keyof FormData]}
                onChange={handleChange}
                required
                className={`mt-1 block w-full p-3 border ${
                  errors[field.id] ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                } rounded-md`}
                placeholder={field.placeholder}
              />
              {errors[field.id] && <p className="text-red-500 text-sm mt-1">{errors[field.id]}</p>}
            </div>
          ))}

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>

          {submitMessage && (
            <div className="mt-4 text-center text-sm">
              <p className={`text-lg ${submitMessage.includes("error") || submitMessage.includes("failed") || submitMessage.includes("Could not") ? "text-red-500" : "text-green-500"}`}>
                {submitMessage}
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignInPage;

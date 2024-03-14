"use client";
import { useState } from "react";

const Submit = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    // Reset form data after submission if needed
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  const handleResize = (e: any) => {
    const maxHeight = 200; // set your desired maximum height
    if (e.target.offsetHeight > maxHeight) {
      e.target.style.height = `${maxHeight}px`;
    }
  };

  return (
    <form className="font-romanesco w-[90%] mx-auto " onSubmit={handleSubmit}>
      <h2 className="text-2xl font-semibold mb-4 ">Contact Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="md:col-span-1">
          <label
            htmlFor="firstName"
            className="block text-sm  text-gray-600 dark:text-gray-400"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 p-2 border  w-full focus:outline-none focus:ring focus:border-blue-300  dark:border-gray-600 dark:text-white"
            required
          />
        </div>
        <div className="md:col-span-1">
          <label
            htmlFor="lastName"
            className="block text-sm  text-gray-600 dark:text-gray-400"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 p-2 border  w-full focus:outline-none focus:ring focus:border-blue-300  dark:border-gray-600 dark:text-white"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm  text-gray-600 dark:text-gray-400"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 border  w-full focus:outline-none focus:ring focus:border-blue-300  dark:border-gray-600 dark:text-white"
            required
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-sm  text-gray-600 dark:text-gray-400"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="mt-1 p-2 border  w-full focus:outline-none focus:ring focus:border-blue-300  dark:border-gray-600 dark:text-white"
            required
          />
        </div>
        <div className="col-span-2">
          <label
            htmlFor="message"
            className="block text-sm  text-gray-600 dark:text-gray-400"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="mt-1 p-2 border h-[100px]  w-full focus:outline-none focus:ring focus:border-blue-300 dark:border-gray-600 dark:text-white"
            onMouseMove={handleResize}
            onMouseUp={handleResize}
            style={{ resize: "vertical" }}
            required
          ></textarea>
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white p-2  hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:border-gray-500"
      >
        Send
      </button>
    </form>
  );
};

export default Submit;

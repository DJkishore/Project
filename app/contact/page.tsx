"use client";

import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill all the fields.");
      return;
    }

    if (!email.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }

    setSuccess("Message sent successfully!");

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      {/* Navbar */}

      <nav className="flex justify-between items-center px-10 py-5 shadow-md">
        <h1 className="text-3xl font-bold text-blue-600">
          CreativeStudio
        </h1>

        <div className="flex gap-8 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/contact" className="text-blue-600">
            Contact
          </Link>
        </div>
      </nav>

      {/* Contact Section */}

      <section className="min-h-screen bg-gray-100 flex justify-center items-center py-16">

        <div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-xl">

          <h1 className="text-4xl font-bold text-center text-gray-800 mb-3">
            Contact Us
          </h1>

          <p className="text-center text-gray-500 mb-8">
            We'd love to hear from you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="font-semibold">Name</label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded-lg p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="font-semibold">Email</label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-lg p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="font-semibold">Message</label>

              <textarea
                rows={5}
                placeholder="Type your message..."
                className="w-full border rounded-lg p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Submit
            </button>

            {success && (
              <p className="text-green-600 text-center font-semibold">
                {success}
              </p>
            )}

          </form>

        </div>

      </section>

      {/* Footer */}

      <footer className="bg-gray-900 text-white text-center py-5">
        © 2026 CreativeStudio. All Rights Reserved.
      </footer>
    </>
  );
}
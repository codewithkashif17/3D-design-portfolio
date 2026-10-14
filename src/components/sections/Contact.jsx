import React, { useState } from "react";
import { motion } from "framer-motion";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function Contact({ visible }) {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm(initialForm);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section
      className={`section absolute inset-0 bg-obsidian pt-20 pb-32 px-6 md:px-[10%] flex justify-center transition-all duration-500 cube-face
        ${visible ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
    >
      <div className="w-full max-w-2xl flex flex-col items-center justify-center">
        <p className="section-eyebrow">Say hello</p>
        <h2 className="section-title mb-8">Contact Me</h2>

        <form onSubmit={handleSubmit} className="w-full">
          <h3 className="font-display text-2xl text-gold-200 mb-4 text-center">
            Let's Work Together
          </h3>
          <div className="flex flex-wrap gap-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              type="text"
              placeholder="Full name"
              className="flex-1 basis-[13rem] rounded-md bg-obsidian-raised px-5 py-4 text-bone placeholder:text-bone/40 border border-gold-400/10 focus:border-gold-400/60 transition-colors"
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              type="email"
              placeholder="Email address"
              className="flex-1 basis-[13rem] rounded-md bg-obsidian-raised px-5 py-4 text-bone placeholder:text-bone/40 border border-gold-400/10 focus:border-gold-400/60 transition-colors"
            />
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              type="text"
              placeholder="Phone"
              className="flex-1 basis-[13rem] rounded-md bg-obsidian-raised px-5 py-4 text-bone placeholder:text-bone/40 border border-gold-400/10 focus:border-gold-400/60 transition-colors"
            />
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              type="text"
              placeholder="Subject"
              className="flex-1 basis-[13rem] rounded-md bg-obsidian-raised px-5 py-4 text-bone placeholder:text-bone/40 border border-gold-400/10 focus:border-gold-400/60 transition-colors"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Your message"
              className="w-full h-40 resize-none rounded-md bg-obsidian-raised px-5 py-4 text-bone placeholder:text-bone/40 border border-gold-400/10 focus:border-gold-400/60 transition-colors"
            />
          </div>
          <div className="mt-6 flex flex-col items-center gap-3">
            <button
              type="submit"
              className="gold-outline-btn bg-gold-gradient text-obsidian border-none shadow-gold px-10 py-4"
            >
              Send Message
            </button>
            {sent && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-gold-300 text-sm"
              >
                Message sent — thank you for reaching out.
              </motion.p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

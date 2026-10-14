import React from "react";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { icon: "bx-home-alt", label: "Home" },
  { icon: "bx-user", label: "About" },
  { icon: "bx-detail", label: "Resume" },
  { icon: "bx-briefcase", label: "Portfolio" },
  { icon: "bx-envelope", label: "Contact" },
];

export default function Navbar({ activeIndex, onNavigate }) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
      className="fixed  bottom-0 sm:left-52  md:left-52 z-50 w-[90vw] max-w-md
        rounded-full border border-gold-400/20 bg-obsidian-soft/60 backdrop-blur-xl px-4 py-3 shadow-gold-lg"
    >
      <ul className="flex justify-evenly ">
        {NAV_ITEMS.map((item, idx) => (
          <li key={item.label} className="relative group">
            <button
              onClick={() => onNavigate(idx)}
              aria-label={item.label}
              className={`flex  m-2 transition-colors duration-300 ${
                activeIndex === idx
                  ? "text-gold-400"
                  : "text-bone/60 hover:text-gold-200"
              }`}
            >
              <i className={`bx ${item.icon}`} />
              {item.label}
            </button>
            <span
              className="pointer-events-none absolute -top-11 left-1/2 -translate-x-1/2 whitespace-nowrap
                rounded-md bg-gold-400 px-3 py-1 text-xs font-semibold text-obsidian
                opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              {item.label}
            </span>
            {activeIndex === idx && (
              <motion.span
                layoutId="nav-dot"
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-gold-400"
              />
            )}
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}

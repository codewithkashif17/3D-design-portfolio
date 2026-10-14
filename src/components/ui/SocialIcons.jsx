import React from 'react';

export default function SocialIcons({ items }) {
  return (
    <div className="ml-8 flex">
      {items.map((s) => (
        <a
          key={s.label}
          href={s.href}
          aria-label={s.label}
          className="group relative mx-1.5 inline-flex rounded-full border-2 border-gold-400 p-2
            text-xl text-gold-400 transition-all duration-300 hover:bg-gold-400 hover:text-obsidian"
        >
          <i className={`bx ${s.icon}`} />
          <span
            className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap
              rounded-md bg-gold-400 px-3 py-1 text-xs font-semibold text-obsidian
              opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            {s.label}
          </span>
        </a>
        
      ))}

      
    </div>
  );
}

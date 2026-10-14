import React from 'react';

export default function TabSwitcher({ tabs, activeTab, onChange, align = [] }) {
  return (
    <div className="flex w-full mb-8 mt-2">
      {tabs.map((tab, idx) => (
        <button
          key={tab}
          onClick={() => onChange(idx)}
          className={`flex-1 h-12 border-b-2 text-lg md:text-xl font-medium tracking-wide transition-colors duration-300
            ${align[idx] === 'end' ? 'justify-end' : align[idx] === 'center' ? 'justify-center' : 'justify-start'}
            flex items-center
            ${activeTab === idx ? 'border-gold-400 text-gold-200' : 'border-white/10 text-slate-muted hover:text-bone'}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TabSwitcher from '../ui/TabSwitcher';
import { works, services } from '../../data/portfolio';

const TABS = ['My Works', 'My Services'];

function WorksGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {works.map((w, i) => (
        <motion.div
          key={w.title + i}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08 }}
          className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-gold-400/10 hover:border-gold-400/40 transition-colors"
        >
          <img src={w.image} alt={w.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute inset-0 bg-obsidian/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
            <h4 className="text-xl font-display font-semibold text-bone">{w.title}</h4>
            <p className="text-bone/60 text-sm mt-1">{w.desc}</p>
            <p className="text-gold-400 text-xs mt-3 pb-3 border-b border-white/10">{w.tech}</p>
            <div className="flex gap-3 mt-3">
              <a href={w.live} aria-label="Live preview" className="inline-flex rounded-full bg-bone p-2.5 text-obsidian hover:bg-gold-400 transition-colors">
                <i className="bx bx-link-external -rotate-45" />
              </a>
              <a href={w.code} aria-label="Github" className="inline-flex rounded-full bg-bone p-2.5 text-obsidian hover:bg-gold-400 transition-colors">
                <i className="bx bxl-github" />
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((s, i) => (
        <motion.div
          key={s.title}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08 }}
          className="group rounded-xl bg-obsidian-raised/80 border border-gold-400/10 p-6 hover:border-gold-400/40 transition-colors"
        >
          <div className="flex items-center justify-between mb-3">
            <i className={`bx ${s.icon} text-5xl text-bone/70 group-hover:text-gold-400 transition-colors`} />
            <span className="inline-flex rounded-full bg-bone p-2.5 text-obsidian group-hover:bg-gold-400 transition-colors">
              <i className="bx bx-link-external -rotate-135" />
            </span>
          </div>
          <h4 className="text-xl font-display font-semibold text-bone group-hover:text-gold-400 transition-colors">{s.title}</h4>
          <p className="text-bone/50 text-sm mt-2 leading-relaxed">{s.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default function Portfolio() {
  const [tab, setTab] = useState(0);

  return (
    <section
      className="section absolute inset-0 bg-obsidian-soft pt-20 pb-40 px-6 md:px-[10%] overflow-hidden cube-face"
      style={{ transform: 'translateX(-50vw) translateZ(-50vw) rotateY(-90deg)' }}
    >
      <p className="section-eyebrow">Selected Work</p>
      <h2 className="section-title mb-6">Portfolio</h2>

      <TabSwitcher tabs={TABS} activeTab={tab} onChange={setTab} align={[undefined, 'end']} />

      <div className="h-[60vh] overflow-y-auto pr-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35 }}
          >
            {tab === 0 ? <WorksGrid /> : <ServicesGrid />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

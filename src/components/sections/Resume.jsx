import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TabSwitcher from '../ui/TabSwitcher';
import { experience, skills, education } from '../../data/resume';

const TABS = ['Experience', 'Skills', 'Education'];

function ExperienceGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {experience.map((item, i) => (
        <motion.div
          key={item.role + item.year}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.06 }}
          className="rounded-xl bg-obsidian-raised/80 border border-gold-400/10 p-6 shadow-gold/10 hover:border-gold-400/40 transition-colors"
        >
          <h4 className="text-gold-400 text-base font-medium">{item.year}</h4>
          <h4 className="text-xl font-display font-semibold text-bone mt-1">{item.role}</h4>
          <h4 className="relative ml-4 text-bone/70 text-sm mt-1 before:content-[''] before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2 before:h-2 before:w-2 before:rounded-full before:bg-gold-400">
            {item.org}
          </h4>
          <p className="text-bone/50 text-sm mt-3 leading-relaxed">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}

function SkillsGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {skills.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.04 }}
          className="flex flex-col items-center justify-center gap-2 rounded-xl bg-obsidian-raised/80 border border-gold-400/10 p-6 text-bone/70 hover:text-gold-400 hover:border-gold-400/40 transition-colors"
        >
          <i className={`bx ${s.icon} text-6xl`} />
          <p className="text-sm">{s.label}</p>
        </motion.div>
      ))}
    </div>
  );
}

function EducationGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {education.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.06 }}
          className="rounded-xl bg-obsidian-raised/80 border border-gold-400/10 p-6 hover:border-gold-400/40 transition-colors"
        >
          <p className="text-bone/50 text-xs uppercase tracking-wider">{item.label}</p>
          <h4 className="text-gold-400 text-base mt-1">{item.year}</h4>
          <h4 className="text-xl font-display font-semibold text-bone mt-1">{item.org}</h4>
          <p className="text-bone/50 text-sm mt-3 leading-relaxed">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default function Resume() {
  const [tab, setTab] = useState(0);

  return (
    <section
      className="section absolute inset-0 bg-obsidian pt-20 pb-40 px-6 md:px-[10%] overflow-hidden cube-face"
      style={{ transform: 'translateZ(-100vw) rotateY(-180deg)' }}
    >
      <p className="section-eyebrow">Career &amp; Craft</p>
      <h2 className="section-title mb-6">Resume</h2>

      <TabSwitcher tabs={TABS} activeTab={tab} onChange={setTab} align={[undefined, 'center', 'end']} />

      <div className="h-[60vh] overflow-y-auto pr-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35 }}
          >
            {tab === 0 && <ExperienceGrid />}
            {tab === 1 && <SkillsGrid />}
            {tab === 2 && <EducationGrid />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../../data/profile';
import SocialIcons from '../ui/SocialIcons';


export default function Home() {
  return (
    <section className="section absolute inset-0 flex flex-col sm:flex-row md:flex-row items-center justify-center gap-10 md:gap-20 px-6 md:px-[10%] bg-obsidian cube-face pb-8 ">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.9, ease: 'easeOut' }}
        className="max-w-xl text-center md:text-left"
      >
        <p className="font-mono text-sm tracking-[0.4em] uppercase text-gold-400/80 mb-2">Hello, I'm</p>
        <h1 className="font-display text-6xl md:text-7xl font-bold gold-text leading-[0.95] mb-3">
          {profile.name}
        </h1>
        <h3 className="text-2xl md:text-3xl text-bone/90 font-display font-medium mb-4">{profile.role}</h3>
        <p className="text-bone/60 leading-relaxed mb-8">{profile.tagline}</p>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <a href={profile.resumeUrl} className="gold-outline-btn bg-gold-gradient text-obsidian border-none shadow-gold">
            Download CV
          </a>
          <SocialIcons items={profile.social} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 1, ease: 'easeOut' }}
        className="relative shrink-0"
      >
        <div
          className="relative h-[26rem] w-[26rem] md:h-[32vw] md:w-[32vw] max-h-[30rem] max-w-[30rem] rounded-full
            border-4 border-gold-400 shadow-gold-lg overflow-hidden flex items-center justify-center
            bg-gradient-to-b from-obsidian to-gold-600/40 animate-floaty"
        >
          <img src={profile.avatar} alt={profile.name} className="h-full w-full object-cover" />
        </div>
      </motion.div>
     
    </section>
  );
}

import React from 'react';
import { profile } from '../../data/profile';

export default function About() {
  return (
    <section
      className="section absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 px-6 md:px-[10%] bg-obsidian-soft cube-face"
      style={{ transform: 'translateX(50vw) translateZ(-50vw) rotateY(90deg)' }}
    >
      <div className="relative h-[22rem] w-[22rem] md:h-[26vw] md:w-[26vw] max-h-[26rem] max-w-[26rem] shrink-0 rounded-full border border-gold-400/60 shadow-gold overflow-hidden">
        <img src={profile.avatar} alt={profile.name} className="h-full w-full object-cover" />
      </div>
      <div className="max-w-xl text-center md:text-left">
        <p className="font-mono text-xs tracking-[0.35em] uppercase text-gold-400/80 mb-1">Get to know me</p>
        <h2 className="font-display text-5xl md:text-6xl font-semibold gold-text mb-1">About Me</h2>
        <h3 className="text-2xl text-bone/80 font-display mb-4">MERN Developer</h3>
        <p className="text-bone/60 leading-relaxed mb-3">{profile.tagline}</p>
        <p className="text-bone/60 leading-relaxed mb-8">{profile.aboutExtended}</p>
        <button className="gold-outline-btn">View More</button>
      </div>
    </section>
  );
}

import React, { useEffect, useState } from 'react';
import AmbientScene from './components/three/AmbientScene';
import Navbar from './components/layout/Navbar';
import CubeStage from './components/layout/CubeStage';

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [introDone, setIntroDone] = useState(false);

  // Matches the original build's cube "unfold" intro animation timing.
  useEffect(() => {
    const t = setTimeout(() => setIntroDone(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative h-screen w-screen  bg-obsidian">
      <AmbientScene />
      <CubeStage activeIndex={activeIndex} introDone={introDone} />
      <Navbar  activeIndex={activeIndex} onNavigate={setActiveIndex} />
      
    </div>
  );
}



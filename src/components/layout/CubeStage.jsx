import React from 'react';
import { motion } from 'framer-motion';
import Home from '../sections/Home';
import About from '../sections/About';
import Resume from '../sections/Resume';
import Portfolio from '../sections/Portfolio';
import Contact from '../sections/Contact';

// Rotation angle for each of the 4 primary faces. Contact isn't a face of the
// cube (it shares the front face with Home) — it fades in as an overlay while
// the cube spins back to its resting (0deg) orientation, echoing the
// behaviour of the original vanilla-JS build.
const FACE_ROTATION = [0, -90, -180, -270];

export default function CubeStage({ activeIndex, introDone }) {
  const rotation = activeIndex === 4 ? -360 : FACE_ROTATION[activeIndex];

  return (
    <div className="cube-perspective fixed inset-0 h-screen w-screen">
      <motion.div
        className="cube-stage relative h-full w-full"
        initial={{ scale: 0, rotateY: -360 }}
        animate={introDone ? { scale: 1, rotateY: rotation } : { scale: 1, rotateY: 0 }}
        transition={
          introDone
            ? { duration: 1.1, ease: [0.65, 0, 0.35, 1] }
            : { duration: 1.6, ease: 'easeOut' }
        }
      >
        <Home />
        <About />
        <Resume />
        <Portfolio />
        <Contact visible={activeIndex === 4} />
      </motion.div>
    </div>
  );
}

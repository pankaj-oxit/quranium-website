'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function ScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Transform values for different layers
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '-150%']);
  

  return (
    <div ref={containerRef} className="relative h-[200vh] overflow-hidden bg-gray-900">
      {/* Fixed container for parallax content */}
      <div className="sticky top-0 h-screen overflow-hidden">
  {/* Layer 1 */}
  <motion.div
    style={{ y: y1 }}
    className="absolute top-0 inset-x-0 flex items-start justify-center pt-32 bg-blue-900/40"
  >
    <div className="text-center p-8">
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Explore the Quran</h2>
      <p className="text-xl text-gray-300 max-w-2xl">Dive into the depths of divine wisdom...</p>
    </div>
  </motion.div>

  {/* Layer 2 */}
  <motion.div
    style={{ y: y2 }}
    className="absolute top-1/3 inset-x-0 flex items-start justify-center pt-32 bg-green-900/40"
  >
    <div className="text-center p-8">
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Learn & Reflect</h2>
      <p className="text-xl text-gray-300 max-w-2xl">Engage with the Quran in a modern way</p>
    </div>
  </motion.div>

  {/* Layer 3 */}
  <motion.div
    style={{ y: y3 }}
    className="absolute top-2/3 inset-x-0 flex items-start justify-center pt-32 bg-purple-900/40"
  >
    <div className="text-center p-8">
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Connect & Grow</h2>
      <p className="text-xl text-gray-300 max-w-2xl">Build a deeper connection with the divine</p>
    </div>
  </motion.div>
</div>

    </div>
  );
} 
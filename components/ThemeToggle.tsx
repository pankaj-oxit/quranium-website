'use client';

import { motion } from 'framer-motion';

interface ThemeToggleProps {
  onToggle: () => void;
  isDark: boolean;
}

export default function ThemeToggle({ onToggle, isDark }: ThemeToggleProps) {
  return (
    <motion.button
      onClick={onToggle}
      className="relative w-12 h-6 rounded-full bg-gray-200 dark:bg-gray-700 p-1"
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="w-4 h-4 rounded-full bg-white shadow-md"
        animate={{
          x: isDark ? 24 : 0,
          backgroundColor: isDark ? '#1f2937' : '#ffffff',
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </motion.button>
  );
} 
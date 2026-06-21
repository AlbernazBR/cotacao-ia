'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between border-b border-white/[0.04] bg-[#030303]/80 backdrop-blur-md"
    >
      <Image
        src="/logo.png"
        alt="Sylvio Machado – Decision Intelligence"
        width={280}
        height={90}
        className="h-11 w-auto object-contain"
        priority
      />
    </motion.header>
  );
}

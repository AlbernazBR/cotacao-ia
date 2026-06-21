'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background base */}
      <div className="absolute inset-0 bg-[#030303]" />

      {/* Glow blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-indigo-700/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-2/3 w-[500px] h-[500px] bg-violet-700/8 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-zinc-400 mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          Plataforma de Cotação Inteligente Assistida por IA
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-6xl md:text-8xl font-bold leading-[1.05] tracking-tight mb-6"
        >
          <span className="text-white">De dados</span>
          <br />
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
            a decisões.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Ao invés de entregar dados para você interpretar,{' '}
          <span className="text-white font-medium">entregamos a resposta</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#demo"
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-xl font-semibold text-white hover:from-indigo-500 hover:to-violet-500 transition-all shadow-lg shadow-indigo-900/30"
          >
            Ver demonstração
          </a>
          <a
            href="#como-funciona"
            className="px-8 py-4 border border-white/10 rounded-xl font-semibold text-zinc-300 hover:bg-white/5 hover:border-white/20 transition-all"
          >
            Como funciona
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-zinc-700 text-xs tracking-widest uppercase">Role</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 border border-zinc-800 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-zinc-700 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

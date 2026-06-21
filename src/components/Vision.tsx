'use client';

import { motion } from 'framer-motion';

export default function Vision() {
  return (
    <section className="py-40 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-violet-800/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-zinc-600 text-xs font-semibold uppercase tracking-widest mb-10"
        >
          Visão de Futuro
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold leading-tight mb-16"
        >
          <span className="text-zinc-500">Hoje os usuários</span>{' '}
          <span className="text-white">pesquisam dados</span>{' '}
          <span className="text-zinc-500">para tomar decisões.</span>
          <br />
          <br />
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
            A próxima geração
          </span>{' '}
          <span className="text-white">utilizará IA para transformar dados em</span>{' '}
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
            decisões justificadas.
          </span>
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="pt-12 border-t border-white/[0.05]"
        >
          <p className="text-zinc-700 text-sm">
            Plataforma de Cotação Inteligente — Prova de Conceito
          </p>
        </motion.div>
      </div>
    </section>
  );
}

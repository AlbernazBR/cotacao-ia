'use client';

import { motion } from 'framer-motion';

const benefits = [
  {
    icon: '⚡',
    title: 'Redução do tempo de análise',
    desc: 'O usuário deixa de avaliar dezenas de opções manualmente. A IA faz esse trabalho em segundos, com critérios padronizados.',
  },
  {
    icon: '🎯',
    title: 'Padronização das decisões',
    desc: 'A recomendação segue critérios consistentes, independente de quem está consultando ou do seu nível de experiência.',
  },
  {
    icon: '🧠',
    title: 'Menor dependência de especialistas',
    desc: 'Conhecimento operacional passa a ser assistido pela inteligência da plataforma, acessível a qualquer colaborador.',
  },
  {
    icon: '📈',
    title: 'Melhor uso dos dados existentes',
    desc: 'A empresa passa a extrair mais valor das informações que já possui em suas bases, sem novas integrações complexas.',
  },
];

export default function Benefits() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-transparent via-zinc-950/40 to-transparent">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ganhos para a empresa
          </h2>
          <p className="text-zinc-400 text-lg max-w-lg mx-auto">
            Impacto direto na operação, sem substituir os sistemas existentes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl border border-white/[0.05] bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.03] transition-all"
            >
              <div className="text-3xl mb-4">{b.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {b.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

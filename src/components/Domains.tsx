'use client';

import { motion } from 'framer-motion';

const domains = [
  {
    icon: '🚗',
    name: 'Mercado Automotivo',
    desc: 'Veículos, seminovos, frotas',
  },
  {
    icon: '🏠',
    name: 'Mercado Imobiliário',
    desc: 'Imóveis, terrenos, locações',
  },
  {
    icon: '📊',
    name: 'Mercado Financeiro',
    desc: 'Crédito, investimentos, seguros',
  },
  {
    icon: '🏭',
    name: 'Compras Corporativas',
    desc: 'Fornecedores, materiais, equipamentos',
  },
  {
    icon: '📋',
    name: 'Operações Internas',
    desc: 'Processos, contratos, chamados',
  },
  {
    icon: '⚡',
    name: 'Qualquer Domínio',
    desc: 'A arquitetura é universal',
    highlight: true,
  },
];

export default function Domains() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            O domínio muda.
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              A inteligência permanece.
            </span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            A prova de conceito usa veículos. A mesma arquitetura se aplica a
            qualquer processo de cotação ou seleção da empresa.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {domains.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`p-6 rounded-2xl border transition-all cursor-default ${
                'highlight' in d && d.highlight
                  ? 'border-indigo-500/30 bg-indigo-950/20 hover:border-indigo-400/40'
                  : 'border-white/[0.05] bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]'
              }`}
            >
              <div className="text-3xl mb-3">{d.icon}</div>
              <p className="text-white font-medium mb-1 text-sm md:text-base">
                {d.name}
              </p>
              <p className="text-zinc-500 text-xs md:text-sm">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

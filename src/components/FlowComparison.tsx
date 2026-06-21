'use client';

import { motion } from 'framer-motion';

const todaySteps = [
  { label: 'Usuário realiza consulta', sub: 'Filtros e buscas manuais' },
  { label: '50+ resultados retornados', sub: 'Lista extensa sem prioridade' },
  { label: 'Análise manual item a item', sub: '15 a 30 minutos' },
  { label: 'Decisão incerta', sub: 'Depende do conhecimento do analista' },
];

const futureSteps = [
  { label: 'Usuário informa o objetivo', sub: '"Qual é a melhor opção?"' },
  { label: 'IA consulta e analisa tudo', sub: 'Em segundos' },
  { label: 'Recomendação gerada com justificativas', sub: 'Score e motivos claros' },
  { label: 'Decisão confiante', sub: 'Critérios consistentes e padronizados' },
];

function Step({
  label,
  sub,
  index,
  variant,
}: {
  label: string;
  sub: string;
  index: number;
  variant: 'red' | 'indigo';
}) {
  const isRed = variant === 'red';
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="flex flex-col items-center"
    >
      <div
        className={`w-full px-4 py-3 rounded-xl border text-center ${
          isRed
            ? 'border-red-900/30 bg-red-950/20'
            : 'border-indigo-800/30 bg-indigo-950/20'
        }`}
      >
        <p className="text-white text-sm font-medium">{label}</p>
        <p className="text-zinc-500 text-xs mt-0.5">{sub}</p>
      </div>
      {index < 3 && <div className="w-px h-5 bg-zinc-800 my-0.5" />}
    </motion.div>
  );
}

export default function FlowComparison() {
  return (
    <section id="como-funciona" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            A mudança de paradigma
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Não é uma evolução dos sistemas atuais. É uma forma completamente
            diferente de interagir com dados.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Hoje */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <span className="text-zinc-500 text-xs font-semibold uppercase tracking-widest">
                Como é hoje
              </span>
            </div>
            <div className="space-y-0.5">
              {todaySteps.map((s, i) => (
                <Step key={i} {...s} index={i} variant="red" />
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-4 p-4 rounded-xl border border-red-900/20 bg-red-950/10"
            >
              <p className="text-red-400 text-sm font-medium">
                ⏱ 15–30 minutos por análise
              </p>
              <p className="text-zinc-600 text-xs mt-1">
                Resultado varia conforme o conhecimento de cada analista
              </p>
            </motion.div>
          </div>

          {/* Com IA */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
              <span className="text-zinc-500 text-xs font-semibold uppercase tracking-widest">
                Com a plataforma
              </span>
            </div>
            <div className="space-y-0.5">
              {futureSteps.map((s, i) => (
                <Step key={i} {...s} index={i} variant="indigo" />
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-4 p-4 rounded-xl border border-indigo-900/20 bg-indigo-950/10"
            >
              <p className="text-indigo-400 text-sm font-medium">
                ⚡ Resultado em segundos
              </p>
              <p className="text-zinc-600 text-xs mt-1">
                Critérios consistentes, decisão justificada, sem subjetividade
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

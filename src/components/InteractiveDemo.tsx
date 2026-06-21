'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type DemoState = 'idle' | 'loading' | 'result';

const LOADING_STEPS = [
  'Consultando base de dados...',
  'Normalizando anúncios encontrados...',
  'Comparando com tabela FIPE...',
  'Analisando histórico e quilometragem...',
  'Processando análise com IA...',
  'Gerando ranking de recomendações...',
];

const RESULTS = [
  {
    medal: '🏆',
    model: 'Compass Longitude T270',
    year: 2022,
    price: 'R$ 132.000',
    km: '38.000 km',
    score: 94,
    pros: [
      'Preço 8% abaixo da FIPE',
      'Baixa quilometragem para o ano',
      'Histórico completo na concessionária',
    ],
    risk: 'Baixo',
    riskColor: 'text-emerald-400',
    highlight: true,
  },
  {
    medal: '🥈',
    model: 'Compass Longitude T270',
    year: 2023,
    price: 'R$ 141.500',
    km: '22.000 km',
    score: 89,
    pros: [],
    risk: 'Baixo',
    riskColor: 'text-emerald-400',
    highlight: false,
  },
  {
    medal: '🥉',
    model: 'Compass Limited T270',
    year: 2021,
    price: 'R$ 128.000',
    km: '61.000 km',
    score: 81,
    pros: [],
    risk: 'Médio',
    riskColor: 'text-yellow-400',
    highlight: false,
  },
];

export default function InteractiveDemo() {
  const [demoState, setDemoState] = useState<DemoState>('idle');
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleAnalyze = () => {
    setDemoState('loading');
    setActiveStep(0);
    setProgress(0);
  };

  useEffect(() => {
    if (demoState !== 'loading') return;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep += 1;
      if (currentStep < LOADING_STEPS.length) {
        setActiveStep(currentStep);
        setProgress((currentStep / LOADING_STEPS.length) * 100);
      } else {
        clearInterval(interval);
        setProgress(100);
        setTimeout(() => setDemoState('result'), 500);
      }
    }, 650);

    return () => clearInterval(interval);
  }, [demoState]);

  return (
    <section
      id="demo"
      className="py-32 px-6 bg-gradient-to-b from-transparent via-indigo-950/5 to-transparent"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-950/30 text-sm text-indigo-400 mb-6">
            Demonstração interativa
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Veja na prática
          </h2>
          <p className="text-zinc-400 text-lg">
            Um exemplo simples para mostrar a diferença.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/[0.08] bg-zinc-950 overflow-hidden shadow-2xl shadow-black/50"
        >
          {/* Browser chrome */}
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.06] bg-black/30">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
            <span className="ml-4 text-zinc-600 text-xs font-mono">
              ia-cotacao-demo.vercel.app
            </span>
          </div>

          <div className="p-6 md:p-8">
            {/* Input */}
            <div className="mb-6">
              <p className="text-zinc-500 text-sm mb-2">
                O que você está buscando?
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm font-mono">
                  Jeep Compass com melhor custo-benefício
                </div>
                <button
                  onClick={handleAnalyze}
                  disabled={demoState === 'loading'}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold hover:from-indigo-500 hover:to-violet-500 transition-all disabled:opacity-60"
                >
                  {demoState === 'loading' ? 'Analisando...' : 'Analisar'}
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {demoState === 'idle' && (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-16 text-center"
                >
                  <p className="text-5xl mb-4">🤖</p>
                  <p className="text-zinc-600 text-sm">
                    Clique em &quot;Analisar&quot; para ver a IA em ação
                  </p>
                </motion.div>
              )}

              {demoState === 'loading' && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-6"
                >
                  {/* Progress bar */}
                  <div className="h-0.5 bg-zinc-800 rounded-full mb-8 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.35 }}
                    />
                  </div>

                  <div className="space-y-3">
                    {LOADING_STEPS.map((step, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-3 text-sm transition-all duration-300 ${
                          i < activeStep
                            ? 'text-zinc-500'
                            : i === activeStep
                            ? 'text-white'
                            : 'text-zinc-700'
                        }`}
                      >
                        <span className="w-4 flex-shrink-0 text-center">
                          {i < activeStep ? (
                            <span className="text-indigo-400">✓</span>
                          ) : i === activeStep ? (
                            <span className="inline-block w-3 h-3 border border-indigo-400 border-t-transparent rounded-full animate-spin" />
                          ) : (
                            <span className="text-zinc-700">○</span>
                          )}
                        </span>
                        {step}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {demoState === 'result' && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-center justify-between mb-5">
                    <p className="text-zinc-500 text-sm">
                      3 opções encontradas e analisadas por IA
                    </p>
                    <button
                      onClick={() => setDemoState('idle')}
                      className="text-zinc-600 text-xs hover:text-zinc-400 transition-colors"
                    >
                      ↺ Reiniciar
                    </button>
                  </div>

                  <div className="space-y-3">
                    {RESULTS.map((r, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.12 }}
                        className={`p-4 rounded-xl border transition-all ${
                          r.highlight
                            ? 'border-indigo-500/30 bg-indigo-950/20'
                            : 'border-white/[0.05] bg-white/[0.02]'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <span className="text-xl">{r.medal}</span>
                            <div>
                              <p className="text-white font-medium text-sm">
                                {r.model} {r.year}
                              </p>
                              <p className="text-zinc-500 text-xs mt-0.5">
                                {r.price} · {r.km}
                              </p>
                            </div>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <p
                              className={`text-2xl font-bold ${
                                r.highlight ? 'text-indigo-300' : 'text-zinc-400'
                              }`}
                            >
                              {r.score}
                            </p>
                            <p className="text-zinc-600 text-xs">score</p>
                          </div>
                        </div>

                        {r.highlight && r.pros.length > 0 && (
                          <div className="mt-3 pt-3 border-t border-white/[0.05] space-y-1.5">
                            {r.pros.map((p, j) => (
                              <p
                                key={j}
                                className="text-xs text-zinc-400 flex items-center gap-2"
                              >
                                <span className="text-indigo-400">✓</span>
                                {p}
                              </p>
                            ))}
                            <p
                              className={`text-xs mt-1 flex items-center gap-2 ${r.riskColor}`}
                            >
                              <span className="text-zinc-600">Risco:</span>{' '}
                              {r.risk}
                            </p>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

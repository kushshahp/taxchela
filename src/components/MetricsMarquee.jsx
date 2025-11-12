import { motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';

const metrics = [
  { label: 'Average ROI lift', value: '+184%' },
  { label: 'Workflow latency drop', value: '-63%' },
  { label: 'Interactive tax models shipped', value: '127' },
  { label: 'Countries automated', value: '19' },
  { label: 'Compliance automations', value: '400+' },
];

export default function MetricsMarquee() {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({ x: ['0%', '-50%'] });
  }, [controls]);

  return (
    <section aria-labelledby="metrics" className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <motion.div
        id="metrics"
        className="relative flex min-h-[140px] items-center"
        animate={controls}
        transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
      >
        {[...metrics, ...metrics].map((metric, index) => (
          <div
            key={`${metric.label}-${index}`}
            className="mx-8 flex min-w-[220px] flex-col items-center gap-2 rounded-3xl border border-white/10 bg-white/5 px-8 py-6 text-center shadow-lg shadow-cyber/10"
          >
            <span className="text-sm uppercase tracking-[0.4em] text-white/40">
              {metric.label}
            </span>
            <span className="font-display text-3xl text-cyber">{metric.value}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

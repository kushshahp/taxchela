import { motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';

const metrics = [
  { label: 'Filings orchestrated', value: '18,240+' },
  { label: 'Turnaround acceleration', value: '3.4x' },
  { label: 'Compliance score uplift', value: '+42 pts' },
  { label: 'Finance tools integrated', value: '58' },
  { label: 'Customer satisfaction', value: '4.9/5' },
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
            className="mx-8 flex min-w-[240px] flex-col items-center gap-2 rounded-3xl border border-white/10 bg-white/5 px-8 py-6 text-center shadow-lg shadow-magenta/10"
          >
            <span className="text-xs uppercase tracking-[0.35em] text-white/50">{metric.label}</span>
            <span className="font-display text-3xl text-white">
              <span className="bg-gradient-to-r from-magenta via-violet to-indigo bg-clip-text text-transparent">
                {metric.value}
              </span>
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

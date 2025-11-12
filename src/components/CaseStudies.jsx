import { motion } from 'framer-motion';

const studies = [
  {
    client: 'NovaKart',
    outcome: 'Scaled from 3 to 11 states with a unified GST + ROC command centre.',
    impact: 'Reduced compliance escalations by 74% in the first quarter.',
    gradient: 'from-magenta/25 via-transparent to-indigo/25',
  },
  {
    client: 'LedgerLoop',
    outcome: 'Launched investor-grade MIS with automated MCA and tax rituals.',
    impact: 'Cut board-report preparation from 10 days to 12 hours.',
    gradient: 'from-violet/25 via-transparent to-magenta/20',
  },
  {
    client: 'CollabHQ',
    outcome: 'Built creator-first payroll compliance with adaptive nudges.',
    impact: 'Achieved 98% payroll accuracy and 3.1x faster filings.',
    gradient: 'from-indigo/25 via-transparent to-violet/25',
  },
];

export default function CaseStudies() {
  return (
    <section id="work" className="flex flex-col gap-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-4"
      >
        <span className="text-sm font-semibold uppercase tracking-[0.4em] text-white/50">Case studies</span>
        <h2 className="max-w-3xl font-display text-4xl text-white/90">
          Transforming compliance into product-grade experiences.
        </h2>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-3">
        {studies.map((study, index) => (
          <motion.article
            key={study.client}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel relative flex flex-col gap-6 rounded-3xl p-8"
          >
            <div
              className={`pointer-events-none absolute -inset-2 rounded-[32px] bg-gradient-to-br ${study.gradient} opacity-70 blur-3xl`}
            />
            <div className="relative flex flex-col gap-4">
              <span className="text-xs uppercase tracking-[0.4em] text-white/50">{study.client}</span>
              <p className="font-display text-xl text-white/90">{study.outcome}</p>
              <p className="text-sm text-white/70">{study.impact}</p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-40 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 28, ease: 'linear' }}
                className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border border-dashed border-white/10"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
                className="absolute right-0 top-0 h-32 w-32 translate-x-1/3 -translate-y-1/3 rounded-full bg-magenta/30 blur-3xl"
              />
            </motion.div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

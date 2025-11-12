import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + custom * 0.15,
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const highlightWords = [
  'Oswald brand typography',
  'GST + ROC automation pods',
  'Render-ready static deploy',
  'Human experts on call',
];

export default function Hero() {
  return (
    <section id="vision" className="relative flex flex-col gap-12 pt-10">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={heroVariants}
        className="grid w-full gap-10 text-left md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:items-center"
      >
        <div className="flex flex-col gap-6">
          <motion.div
            variants={heroVariants}
            custom={0}
            className="flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-white/60"
          >
            <BadgeCheck className="h-4 w-4 text-magenta" />
            Compliance experience studio
          </motion.div>
          <motion.h1
            variants={heroVariants}
            custom={1}
            className="font-display text-[2.85rem] leading-[1.05] text-white/95 md:text-[4.1rem]"
          >
            TaxChela designs{' '}
            <span className="bg-gradient-to-r from-magenta via-violet to-indigo bg-clip-text text-transparent">
              calm tax journeys
            </span>{' '}
            for India’s builders.
          </motion.h1>
          <motion.p
            variants={heroVariants}
            custom={2}
            className="max-w-2xl text-lg text-white/70 md:text-xl"
          >
            From incorporation to board reporting, our pods blend automation, expert oversight, and cinematic status updates so
            every deadline feels under control.
          </motion.p>
          <motion.div
            variants={heroVariants}
            custom={3}
            className="mt-2 flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="mailto:hello@taxchela.com?subject=Start%20TaxChela%20onboarding"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-magenta px-7 py-3 text-base font-semibold text-midnight shadow-glow"
            >
              Start onboarding
            </motion.a>
            <motion.a
              href="#solutions"
              whileHover={{ scale: 1.05 }}
              className="rounded-full border border-white/20 bg-white/5 px-7 py-3 text-base font-semibold text-white/80"
            >
              View solutions
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          variants={heroVariants}
          custom={4}
          className="glass-panel relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-magenta/25 via-transparent to-indigo/25 opacity-70" />
          <div className="relative flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">Live health</span>
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="h-2 w-16 rounded-full bg-magenta/50"
              />
            </div>
            <div className="grid gap-4 text-sm text-white/70">
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <span>Return accuracy</span>
                <span className="font-display text-2xl text-white">
                  <span className="bg-gradient-to-r from-magenta to-indigo bg-clip-text text-transparent">99.6%</span>
                </span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <span>Filings automated</span>
                <span className="font-display text-2xl text-white">18,240</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <span>Avg. response time</span>
                <span className="font-display text-2xl text-white">2.1 hrs</span>
              </div>
            </div>
            <p className="text-sm text-white/60">
              Pods staffed with CA leads, process designers, and automation engineers orchestrated on Render-ready infrastructure.
            </p>
          </div>
        </motion.div>
      </motion.div>

      <div className="relative mt-12 flex flex-wrap justify-center gap-4 text-sm text-white/60 md:justify-start">
        {highlightWords.map((word, index) => (
          <motion.span
            key={word}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.08, duration: 0.7 }}
            className="glass-panel flex items-center gap-2 rounded-full px-5 py-2 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-magenta" />
            {word}
          </motion.span>
        ))}
      </div>
    </section>
  );
}

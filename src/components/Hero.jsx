import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

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
  'AI-native',
  'precision',
  'immersive',
  'global',
];

export default function Hero() {
  return (
    <section id="vision" className="relative flex flex-col gap-12 pt-10">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={heroVariants}
        className="flex w-full flex-col items-center text-center"
      >
        <motion.div
          variants={heroVariants}
          custom={0}
          className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/60"
        >
          <Sparkles className="h-4 w-4 text-cyber" />
          Future finance studio
        </motion.div>
        <motion.h1
          variants={heroVariants}
          custom={1}
          className="max-w-4xl font-display text-[2.75rem] leading-tight text-white/90 md:text-[4rem]"
        >
          We build <span className="text-cyber">ultra-animated</span> fiscal
          products that make complex taxes feel like interactive art.
        </motion.h1>
        <motion.p
          variants={heroVariants}
          custom={2}
          className="mt-6 max-w-2xl text-lg text-white/70 md:text-xl"
        >
          Taxchela transforms compliance into unforgettable brand moments. We
          choreograph high-speed interfaces, ambient storytelling, and playful
          simulations that help ambitious finance teams move markets.
        </motion.p>
        <motion.div
          variants={heroVariants}
          custom={3}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full bg-cyber px-7 py-3 text-base font-semibold text-midnight shadow-glow"
          >
            Book a motion audit
          </motion.a>
          <motion.a
            href="#work"
            whileHover={{ scale: 1.05 }}
            className="rounded-full border border-white/20 bg-white/5 px-7 py-3 text-base font-semibold text-white/80"
          >
            Explore kinetic work
          </motion.a>
        </motion.div>
      </motion.div>

      <div className="relative mt-16 flex flex-wrap justify-center gap-6 text-sm text-white/60">
        {highlightWords.map((word, index) => (
          <motion.span
            key={word}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.08, duration: 0.7 }}
            className="glass-panel flex items-center gap-2 rounded-full px-5 py-2 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyber" />
            {word}
          </motion.span>
        ))}
      </div>
    </section>
  );
}

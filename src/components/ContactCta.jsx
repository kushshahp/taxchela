import { motion } from 'framer-motion';

export default function ContactCta() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 px-8 py-16 text-center shadow-glow"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto flex max-w-3xl flex-col items-center gap-6"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7 }}
          className="text-sm font-semibold uppercase tracking-[0.4em] text-white/50"
        >
          Ready to lift off?
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl text-white"
        >
          Let’s choreograph your next-generation tax experience.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.9 }}
          className="text-base text-white/70"
        >
          Share your roadmap and we’ll deliver a custom motion audit, pilot sprint plan, and investment breakdown in 72 hours.
        </motion.p>
        <motion.a
          href="mailto:hello@taxchela.com"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          className="mt-4 inline-flex items-center justify-center rounded-full bg-brand-magenta px-8 py-3 text-base font-semibold text-midnight"
        >
          hello@taxchela.com
        </motion.a>
      </motion.div>

      <motion.div
        aria-hidden
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
        className="pointer-events-none absolute -left-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full border border-dashed border-brand-magenta/40"
      />
      <motion.div
        aria-hidden
        initial={{ rotate: 0 }}
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
        className="pointer-events-none absolute -right-16 top-10 h-40 w-40 rounded-full bg-brand-purple/30 blur-3xl"
      />
    </section>
  );
}

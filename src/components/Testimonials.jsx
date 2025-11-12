import { motion } from 'framer-motion';

const testimonials = [
  {
    quote:
      'Taxchela transformed our compliance portal into a cinematic journey. Our clients now rave about filing taxes.',
    author: 'Elaine Porter',
    role: 'Chief Product Officer, Affinity Global',
  },
  {
    quote:
      'Every interaction feels alive. The studio’s attention to animation systems made adoption effortless across 19 regions.',
    author: 'Jules Onagawa',
    role: 'VP Transformation, NovaLedger',
  },
  {
    quote:
      'We expected a dashboard. Taxchela delivered a financial universe with precision telemetry and playful storytelling.',
    author: 'Santiago Vega',
    role: 'Head of Operations, Harmonia Capital',
  },
];

export default function Testimonials() {
  return (
    <section className="flex flex-col gap-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-4"
      >
        <span className="text-sm font-semibold uppercase tracking-[0.4em] text-white/50">
          Voices
        </span>
        <h2 className="max-w-3xl font-display text-4xl text-white/90">
          Teams that orbit Taxchela share the experience.
        </h2>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.blockquote
            key={item.author}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel flex flex-col gap-6 rounded-3xl p-8"
          >
            <p className="text-lg leading-relaxed text-white/80">“{item.quote}”</p>
            <div className="flex flex-col gap-1 text-sm text-white/60">
              <span className="font-semibold text-white/80">{item.author}</span>
              <span>{item.role}</span>
            </div>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}

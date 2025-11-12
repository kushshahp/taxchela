import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Exploration orbit',
    description:
      'We choreograph interactive discovery sessions, turning audit pain points into motion concepts & prototype blueprints.',
  },
  {
    title: 'Cinematic systems',
    description:
      'Designers, technologists, and fiscal strategists craft living design systems with adaptive animations baked in.',
  },
  {
    title: 'Launch theatre',
    description:
      'We orchestrate rollouts with premiere-style premieres, telemetry dashboards, and global enablement rituals.',
  },
  {
    title: 'Growth harmonics',
    description:
      'Taxchela’s team monitors adoption, trains your crew, and evolves experiences with every policy update.',
  },
];

export default function Process() {
  return (
    <section id="process" className="relative flex flex-col gap-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-4"
      >
        <span className="text-sm font-semibold uppercase tracking-[0.4em] text-white/50">
          Method
        </span>
        <h2 className="max-w-3xl font-display text-4xl text-white/90">
          A motion-first process tuned to regulated teams.
        </h2>
      </motion.div>

      <div className="relative">
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-cyber/0 via-cyber/60 to-transparent lg:block" />
        <div className="flex flex-col gap-12">
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className={`glass-panel relative rounded-3xl p-8 lg:w-1/2 ${index % 2 === 0 ? 'lg:ml-auto lg:pl-16' : 'lg:mr-auto lg:pr-16'}`}
            >
              <div className="pointer-events-none absolute -top-12 left-6 hidden h-24 w-24 -translate-x-1/2 rounded-full bg-cyber/30 blur-3xl lg:block" />
              <span className="text-sm font-semibold uppercase tracking-[0.4em] text-white/40">
                {`0${index + 1}`}
              </span>
              <h3 className="mt-3 font-display text-2xl text-white">{step.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70">{step.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

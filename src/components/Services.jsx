import { motion } from 'framer-motion';
import { Cpu, Globe2, Layers, Orbit, Sparkles, Workflow } from 'lucide-react';

const services = [
  {
    title: 'Kinetic Strategy Lab',
    description:
      'Immersive discovery workshops translating fiscal complexity into experiential storyboards and motion grammar.',
    icon: Orbit,
    accent: 'from-brand-magenta/25 via-transparent to-brand-purple/15',
  },
  {
    title: 'Interactive Compliance Systems',
    description:
      'Realtime dashboards, compliance co-pilots, and explainable AI flows crafted with cinematic feedback loops.',
    icon: Workflow,
    accent: 'from-brand-purple/25 via-transparent to-brand-indigo/15',
  },
  {
    title: 'Adaptive Model Engineering',
    description:
      'Modular tax models, sandboxes, and scenario simulators engineered for multi-country teams and auditors.',
    icon: Layers,
    accent: 'from-brand-indigo/25 via-transparent to-brand-magenta/10',
  },
  {
    title: 'Hyper-personal Content',
    description:
      'Automated narrative layers, voice & data synchronisation, and localized video explainers generated in minutes.',
    icon: Sparkles,
    accent: 'from-brand-iris/25 via-transparent to-brand-purple/15',
  },
  {
    title: 'Global Rollouts',
    description:
      'Launch playbooks, training holograms, and compliance telemetry tuned for regional regulators and CX teams.',
    icon: Globe2,
    accent: 'from-brand-purple/25 via-transparent to-brand-magenta/15',
  },
  {
    title: 'AI Partner Ecosystem',
    description:
      'APIs, partner integrations, and motion design systems that evolve with your AI policy frameworks.',
    icon: Cpu,
    accent: 'from-brand-indigo/20 via-transparent to-brand-iris/15',
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Services() {
  return (
    <section id="capabilities" className="flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-sm font-semibold uppercase tracking-[0.4em] text-white/50"
        >
          Capabilities
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl font-display text-4xl text-white/90"
        >
          Quantum-detailed services for teams who want taxes to feel effortless.
        </motion.h2>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid gap-6 md:grid-cols-2"
      >
        {services.map(({ title, description, icon: Icon, accent }) => (
          <motion.article
            key={title}
            variants={item}
            className="glass-panel relative overflow-hidden rounded-3xl p-8 shadow-lg shadow-black/20"
          >
            <div
              className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${accent} blur-3xl`}
            />
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <Icon className="h-6 w-6 text-brand-magenta" />
              </span>
              <h3 className="font-display text-xl text-white">{title}</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">{description}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

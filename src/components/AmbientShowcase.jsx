import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const experiences = [
  {
    title: 'Immersive data dome',
    description:
      'Spectral timelines, orbiting KPI constellations, and ambient music layers that react to fiscal momentum in real time.',
    stat: '4.6M live datapoints',
    accent: 'from-brand-magenta/30 via-transparent to-brand-purple/20',
  },
  {
    title: 'Holographic team rituals',
    description:
      'Weekly compliance standups staged as volumetric rituals with spatial audio cues and adaptive prompts for each region.',
    stat: '98% ritual adoption',
    accent: 'from-brand-indigo/30 via-transparent to-brand-iris/20',
  },
  {
    title: 'Mixed reality filings',
    description:
      'Physical spaces augmented with tax simulators, projection-mapped workflows, and tactile approvals synced to the cloud.',
    stat: '12 min global approvals',
    accent: 'from-brand-purple/30 via-transparent to-brand-magenta/20',
  },
];

const blurVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1, transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] } },
};

function ExperienceCard({ title, description, stat, accent, index }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 120, damping: 16 });
  const springY = useSpring(y, { stiffness: 120, damping: 16 });
  const rotateX = useTransform(springY, [-80, 80], [14, -14]);
  const rotateY = useTransform(springX, [-80, 80], [-14, 14]);
  const translateX = useTransform(springX, [-80, 80], [-6, 6]);
  const translateY = useTransform(springY, [-80, 80], [-6, 6]);

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const relativeX = event.clientX - bounds.left - bounds.width / 2;
    const relativeY = event.clientY - bounds.top - bounds.height / 2;
    x.set(relativeX);
    y.set(relativeY);
  };

  const resetPointer = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.9, delay: index * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      className="group relative h-full"
    >
      <motion.div
        className={`pointer-events-none absolute -inset-6 rounded-[48px] bg-gradient-to-br ${accent} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-80`}
        variants={blurVariants}
        initial="initial"
        whileInView="animate"
      />

      <motion.div
        style={{ rotateX, rotateY, x: translateX, y: translateY }}
        className="relative flex h-full flex-col gap-6 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_40px_80px_-40px_rgba(201,19,207,0.45)] backdrop-blur-xl"
      >
        <div className="flex items-center justify-between gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-white/40">
            Experience
          </span>
          <motion.span
            animate={{ opacity: [0.45, 0.8, 0.45] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: index * 0.5 }}
            className="h-2 w-16 rounded-full bg-brand-magenta/40"
          />
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-display text-2xl text-white/90">{title}</h3>
          <p className="text-sm leading-relaxed text-white/70">{description}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 + index * 0.05 }}
          className="mt-auto flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70"
        >
          <span>Signature metric</span>
          <motion.span
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 3.8, ease: 'easeInOut', delay: index * 0.4 }}
            className="font-display text-lg text-brand-magenta"
          >
            {stat}
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.article>
  );
}

export default function AmbientShowcase() {
  return (
    <section id="motion-gallery" className="flex flex-col gap-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9 }}
        className="flex flex-col gap-4"
      >
        <span className="text-sm font-semibold uppercase tracking-[0.4em] text-white/50">
          Motion showcase
        </span>
        <h2 className="max-w-3xl font-display text-4xl text-white/90">
          Spatial experiences that blend physical gestures with luminous tax data.
        </h2>
        <p className="max-w-2xl text-base text-white/70">
          Each environment is choreographed with multi-layered parallax, responsive light, and synesthetic cues that guide teams
          through complex approvals like a cinematic score.
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-3">
        {experiences.map((experience, index) => (
          <ExperienceCard key={experience.title} index={index} {...experience} />
        ))}
      </div>
    </section>
  );
}

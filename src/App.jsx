import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from './components/Hero.jsx';
import MetricsMarquee from './components/MetricsMarquee.jsx';
import Services from './components/Services.jsx';
import CaseStudies from './components/CaseStudies.jsx';
import Process from './components/Process.jsx';
import Testimonials from './components/Testimonials.jsx';
import ContactCta from './components/ContactCta.jsx';
import SiteHeader from './components/SiteHeader.jsx';
import SiteFooter from './components/SiteFooter.jsx';

const parallaxLayers = [
  { id: 'layer-1', blur: 'blur-3xl', opacity: 'opacity-70' },
  { id: 'layer-2', blur: 'blur-[120px]', opacity: 'opacity-50' },
  { id: 'layer-3', blur: 'blur-[160px]', opacity: 'opacity-40' },
];

const orbitalVariant = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const backgroundShift = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const layerTransforms = [
    useTransform(scrollYProgress, [0, 1], [0, -120]),
    useTransform(scrollYProgress, [0, 1], [0, -200]),
    useTransform(scrollYProgress, [0, 1], [0, -280]),
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-midnight text-white">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          y: backgroundShift,
        }}
      >
        <motion.div
          initial="hidden"
          animate="show"
          variants={orbitalVariant}
          className="absolute inset-0 bg-gradient-orbit"
        />
        {parallaxLayers.map((layer, index) => (
          <motion.div
            key={layer.id}
            className={`absolute inset-10 rounded-full bg-gradient-to-br from-cyber/20 via-transparent to-accent/20 ${layer.blur} ${layer.opacity}`}
            style={{
              scale: 1 + index * 0.1,
              y: layerTransforms[index],
            }}
          />
        ))}
        <div className="noise-overlay" />
      </motion.div>

      <SiteHeader />

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-32 px-6 pb-32 pt-28 md:gap-40 md:px-10 lg:px-16">
        <Hero />
        <MetricsMarquee />
        <Services />
        <CaseStudies />
        <Process />
        <Testimonials />
        <ContactCta />
      </main>

      <SiteFooter />
    </div>
  );
}

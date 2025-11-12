import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const navItems = [
  { label: 'Vision', href: '#vision' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Case Studies', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function SiteHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-30 flex justify-center">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
        className="mt-6 flex w-[min(960px,90vw)] items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-xl"
      >
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
          <span className="relative flex h-9 w-9 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-brand-magenta/40 blur-md" />
            <Zap className="relative h-5 w-5 text-brand-iris" />
          </span>
          Taxchela Studio
        </a>

        <div className="hidden items-center gap-6 text-sm font-medium text-white/70 md:flex">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              whileHover={{ scale: 1.06, color: '#c913cf' }}
              className="transition-colors duration-300"
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="hidden rounded-full bg-brand-magenta px-5 py-2 text-sm font-semibold text-midnight shadow-glow sm:block"
        >
          Launch Project
        </motion.a>
      </motion.nav>
    </header>
  );
}

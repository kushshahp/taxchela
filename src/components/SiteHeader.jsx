import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Vision', href: '#vision' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Experience', href: '#motion-gallery' },
  { label: 'Case Studies', href: '#work' },
  { label: 'Insights', href: '#insights' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-30 flex justify-center">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
        className="mt-6 flex w-[min(1000px,94vw)] items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl"
      >
        <a href="#vision" className="flex items-center gap-2 text-sm font-semibold tracking-tight text-white">
          <span className="relative flex h-9 w-9 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-magenta/40 blur-md" />
            <img src="/assets/img/taxchela-logo-mark.svg" alt="TaxChela logo" className="relative h-6 w-6" />
          </span>
          <span className="font-display text-lg uppercase tracking-[0.12em]">TaxChela</span>
        </a>

        <button
          type="button"
          className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          Menu
        </button>

        <div className="hidden items-center gap-6 text-sm font-medium text-white/70 md:flex">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              whileHover={{ scale: 1.06, color: '#C913CF' }}
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
          className="hidden rounded-full bg-magenta px-5 py-2 text-sm font-semibold text-midnight shadow-glow sm:block"
        >
          Book a call
        </motion.a>
      </motion.nav>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-[88px] w-[min(90vw,360px)] rounded-3xl border border-white/10 bg-midnight-200/95 p-6 text-sm text-white/70 shadow-xl backdrop-blur"
        >
          <nav id="primary-navigation" className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 transition-colors hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="mailto:hello@taxchela.com"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-magenta px-4 py-3 text-sm font-semibold text-midnight"
          >
            hello@taxchela.com
          </a>
        </motion.div>
      )}
    </header>
  );
}

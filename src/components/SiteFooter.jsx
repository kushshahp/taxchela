import { motion } from 'framer-motion';

const footerLinks = [
  {
    title: 'Studios',
    items: ['Bengaluru', 'Mumbai', 'Remote-first'],
  },
  {
    title: 'Specialties',
    items: ['Compliance Pods', 'Automation Design', 'Tax Intelligence'],
  },
  {
    title: 'Resources',
    items: ['Solutions', 'Insights', 'Contact'],
  },
];

export default function SiteFooter() {
  return (
    <footer className="relative border-t border-white/10 bg-midnight-100/60">
      <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/5 to-white/0" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16 md:flex-row md:items-start md:justify-between md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8 }}
          className="flex max-w-md flex-col gap-4"
        >
          <a href="#vision" className="flex items-center gap-3 text-white">
            <img src="/assets/img/taxchela-logo-horizontal.svg" alt="TaxChela" className="h-8 w-auto" />
          </a>
          <p className="text-sm text-white/60">
            We build calm, animated compliance journeys for founders, finance leaders, and creator studios across India.
          </p>
          <span className="text-xs uppercase tracking-[0.4em] text-white/40">© {new Date().getFullYear()} TaxChela. All rights reserved.</span>
        </motion.div>

        <div className="grid grid-cols-2 gap-8 text-sm text-white/60 sm:grid-cols-3">
          {footerLinks.map((group) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-3"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-white/50">{group.title}</span>
              <ul className="flex flex-col gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <a href={item === 'Solutions' ? '#solutions' : item === 'Insights' ? '#insights' : item === 'Contact' ? '#contact' : '#'} className="transition-colors duration-300 hover:text-magenta">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </footer>
  );
}

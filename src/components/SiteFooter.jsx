import { motion } from 'framer-motion';

const footerLinks = [
  {
    title: 'Studios',
    items: ['Los Angeles', 'Singapore', 'Berlin'],
  },
  {
    title: 'Specialties',
    items: ['Motion Systems', 'Compliance AI', 'CX Automation'],
  },
  {
    title: 'Connect',
    items: ['LinkedIn', 'Dribbble', 'Behance'],
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
          <span className="font-display text-2xl text-white">Taxchela Studio</span>
          <p className="text-sm text-white/60">
            We craft animated fiscal universes for teams who want to fall in love with compliance.
          </p>
          <span className="text-xs uppercase tracking-[0.4em] text-white/40">© {new Date().getFullYear()} Taxchela. All rights reserved.</span>
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
                    <a href="#" className="transition-colors duration-300 hover:text-brand-magenta">
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

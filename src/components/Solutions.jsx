import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Papa from 'papaparse';

const fetchCsv = (path) =>
  new Promise((resolve, reject) => {
    Papa.parse(path, {
      download: true,
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      complete: ({ data }) => resolve(data),
      error: reject,
    });
  });

const gradients = [
  'from-magenta/30 via-transparent to-indigo/30',
  'from-violet/30 via-transparent to-magenta/20',
  'from-indigo/30 via-transparent to-violet/25',
];

export default function Solutions() {
  const [catalogue, setCatalogue] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const loadData = async () => {
      try {
        const [categories, products] = await Promise.all([
          fetchCsv('/data/categories.csv'),
          fetchCsv('/data/products.csv'),
        ]);

        if (!active) return;

        const grouped = categories.map((category) => ({
          ...category,
          products: products.filter((product) => product.category === category.slug),
        }));

        setCatalogue(grouped);
      } catch (error) {
        console.warn('Failed to load CSV content', error);
      } finally {
        if (active) {
          setIsLoading(false);
        }
      }
    };

    loadData();

    return () => {
      active = false;
    };
  }, []);

  return (
    <section id="solutions" className="flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-sm font-semibold uppercase tracking-[0.4em] text-white/50"
        >
          Solutions
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl font-display text-4xl text-white/90"
        >
          Pods that adapt to every growth stage with automation-first rituals.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-base text-white/70"
        >
          Each solution pulls content directly from <code className="rounded bg-white/10 px-2 py-1">/data/products.csv</code> and
          <code className="ml-1 rounded bg-white/10 px-2 py-1">/data/categories.csv</code>, keeping the catalogue authorable for
          your team.
        </motion.p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="col-span-full flex items-center justify-center rounded-3xl border border-white/10 bg-white/5 py-12 text-sm text-white/60"
          >
            Loading pods…
          </motion.div>
        )}

        {catalogue.map((category, index) => (
          <motion.article
            key={category.slug}
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
            className="glass-panel relative overflow-hidden rounded-3xl p-8 shadow-lg shadow-black/20"
          >
            <div
              className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${gradients[index % gradients.length]} blur-3xl`}
            />
            <div className="relative flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl text-white">{category.category}</h3>
                <span className="text-xs uppercase tracking-[0.35em] text-white/50">{index + 1}</span>
              </div>
              <p className="text-sm leading-relaxed text-white/70">{category.description}</p>

              <ul className="mt-4 flex flex-col gap-3 text-sm text-white/70">
                {category.products.slice(0, 3).map((product) => (
                  <li
                    key={product.service_name}
                    className="flex items-start justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <div className="flex-1 pr-3">
                      <p className="font-semibold text-white/80">{product.service_name}</p>
                      <p className="text-xs text-white/60">{product.description}</p>
                    </div>
                    <span className="whitespace-nowrap text-xs font-semibold text-magenta">
                      ₹{Number(product.price).toLocaleString('en-IN')}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

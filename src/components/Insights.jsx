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

export default function Insights() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const loadPosts = async () => {
      try {
        const blogs = await fetchCsv('/data/blogs.csv');
        if (!active) return;
        setPosts(blogs);
      } catch (error) {
        console.warn('Failed to load blog CSV', error);
      } finally {
        if (active) {
          setIsLoading(false);
        }
      }
    };

    loadPosts();

    return () => {
      active = false;
    };
  }, []);

  return (
    <section id="insights" className="flex flex-col gap-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-4"
      >
        <span className="text-sm font-semibold uppercase tracking-[0.4em] text-white/50">Insights</span>
        <h2 className="max-w-3xl font-display text-4xl text-white/90">
          Fresh intelligence from the TaxChela knowledge base.
        </h2>
        <p className="max-w-2xl text-base text-white/70">
          Articles are sourced from <code className="rounded bg-white/10 px-2 py-1">/data/blogs.csv</code>, so your editorial team can
          update topics without touching code.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="col-span-full flex items-center justify-center rounded-3xl border border-white/10 bg-white/5 py-12 text-sm text-white/60"
          >
            Loading articles…
          </motion.div>
        )}

        {posts.map((post, index) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel relative flex h-full flex-col overflow-hidden rounded-3xl"
          >
            <div className="relative h-44 overflow-hidden">
              <img
                src={post.image || '/assets/img/blog-placeholder.svg'}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent" />
              <span className="absolute bottom-4 left-4 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                {post.category}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-4 p-6">
              <h3 className="font-display text-xl text-white/90">{post.title}</h3>
              <p className="text-sm text-white/70">{post.short_description}</p>
              <motion.a
                href={post.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ x: 6 }}
                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-magenta"
              >
                Read the insight
                <span aria-hidden className="text-lg">→</span>
              </motion.a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

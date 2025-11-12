/*
 * TaxChela motion + data orchestration
 * ------------------------------------
 * - Pulses the logo on load and animates hero counters.
 * - Wires responsive navigation and smooth scrolling.
 * - Applies scroll-triggered reveals with GSAP + ScrollTrigger.
 * - Parses CSV datasets (PapaParse) to render insights and service grids.
 */

(function () {
  const loadScript = (url) =>
    new Promise((resolve, reject) => {
      if (document.querySelector(`script[data-lib='${url}']`)) {
        resolve();
        return;
      }
      const script = document.createElement('script');
      script.src = url;
      script.async = true;
      script.defer = true;
      script.dataset.lib = url;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Failed to load ${url}`));
      document.head.appendChild(script);
    });

  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const initNavigation = () => {
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav-links');
    if (!toggle || !nav) return;

    const closeNav = () => {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('open');
    };

    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
    });

    nav.querySelectorAll('a').forEach((link) =>
      link.addEventListener('click', () => {
        if (window.innerWidth <= 900) closeNav();
      })
    );

    document.addEventListener('click', (event) => {
      if (!nav.contains(event.target) && !toggle.contains(event.target)) {
        closeNav();
      }
    });
  };

  const pulseLogo = () => {
    const logo = document.querySelector('.hero-logo');
    if (!logo) return;
    requestAnimationFrame(() => logo.classList.add('glow'));
  };

  const animateCounters = () => {
    if (isReducedMotion) return;
    const counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;

    const options = {
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const element = entry.target;
        const targetValue = Number(element.dataset.counter || '0');
        const duration = 1400;
        const startTime = performance.now();
        const startValue = 0;

        const step = (currentTime) => {
          const elapsed = Math.min(currentTime - startTime, duration);
          const progress = elapsed / duration;
          const eased = 1 - Math.pow(1 - progress, 4);
          const value = Math.round(startValue + (targetValue - startValue) * eased);
          element.textContent = value.toLocaleString('en-IN');
          if (elapsed < duration) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
        obs.unobserve(element);
      });
    }, options);

    counters.forEach((counter) => observer.observe(counter));
  };

  const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (event) => {
        const id = anchor.getAttribute('href');
        const target = document.querySelector(id);
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: isReducedMotion ? 'auto' : 'smooth', block: 'start' });
      });
    });
  };

  const initScrollAnimations = async () => {
    if (isReducedMotion) {
      document.querySelectorAll('[data-animate]').forEach((element) => element.classList.add('animated'));
      return;
    }

    try {
      await loadScript('https://cdn.jsdelivr.net/npm/gsap@3.12.2/dist/gsap.min.js');
      await loadScript('https://cdn.jsdelivr.net/npm/gsap@3.12.2/dist/ScrollTrigger.min.js');
    } catch (error) {
      console.warn(error.message);
      document.querySelectorAll('[data-animate]').forEach((element) => element.classList.add('animated'));
      return;
    }

    if (!window.gsap || !window.ScrollTrigger) {
      document.querySelectorAll('[data-animate]').forEach((element) => element.classList.add('animated'));
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    document.querySelectorAll('[data-animate]').forEach((element) => {
      const animation = element.dataset.animate;
      const config = {
        opacity: 0,
        y: 48,
      };

      if (animation === 'slide-up') {
        config.y = 72;
      }

      gsap.fromTo(
        element,
        config,
        {
          opacity: 1,
          y: 0,
          ease: 'power3.out',
          duration: 0.9,
          delay: element.dataset.delay ? Number(element.dataset.delay) : 0,
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            once: true,
          },
        }
      );
    });
  };

  const ensurePapa = async () => {
    if (window.Papa) return;
    try {
      await loadScript('https://cdn.jsdelivr.net/npm/papaparse@5.4.1/papaparse.min.js');
    } catch (error) {
      console.warn(error.message);
    }
  };

  const buildBlogCards = (entries = []) => {
    const grid = document.querySelector('#blog-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const fragment = document.createDocumentFragment();
    entries.forEach((entry, index) => {
      const card = document.createElement('article');
      card.className = 'blog-card';
      card.dataset.animate = 'fade-up';
      card.dataset.delay = (index % 3) * 0.08;

      const imageWrapper = document.createElement('div');
      imageWrapper.className = 'blog-card_media lazy-media';
      const image = document.createElement('img');
      image.loading = 'lazy';
      image.alt = entry.title ? `${entry.title} thumbnail` : 'Blog thumbnail';
      image.src = entry.image || '/assets/img/blog-placeholder.jpg';
      imageWrapper.appendChild(image);

      const category = document.createElement('span');
      category.className = 'blog-card_category';
      category.textContent = entry.category || 'General';

      const title = document.createElement('h3');
      title.textContent = entry.title || 'Untitled insight';

      const description = document.createElement('p');
      description.textContent = entry.short_description || '';

      const cta = document.createElement('a');
      cta.href = entry.link || '#';
      cta.className = 'blog-card_link';
      cta.target = '_blank';
      cta.rel = 'noopener noreferrer';
      cta.textContent = 'Read insight';

      card.append(imageWrapper, category, title, description, cta);
      fragment.appendChild(card);
    });

    grid.appendChild(fragment);
  };

  const loadBlogs = async () => {
    if (!document.querySelector('#blog-grid')) return;
    await ensurePapa();
    if (!window.Papa) return;

    Papa.parse('/data/blogs.csv', {
      header: true,
      download: true,
      skipEmptyLines: true,
      complete: (results) => {
        buildBlogCards(results.data);
        initScrollAnimations();
      },
      error: (error) => console.warn('Blog CSV error:', error.message),
    });
  };

  const buildServiceSections = (products = [], categories = []) => {
    const container = document.querySelector('#service-groups-root');
    if (!container) return;

    container.innerHTML = '';
    const catOrder = categories.length ? categories.map((cat) => cat.slug || cat.id || cat.category) : [];
    const grouped = products.reduce((acc, product) => {
      const cat = product.category || 'Other';
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(product);
      return acc;
    }, {});

    const orderedCategories = catOrder.length
      ? catOrder.filter((cat) => grouped[cat]).concat(Object.keys(grouped).filter((cat) => !catOrder.includes(cat)))
      : Object.keys(grouped);

    orderedCategories.forEach((category, catIndex) => {
      const section = document.createElement('section');
      section.className = 'service-category';
      section.dataset.animate = 'fade-up';
      section.dataset.delay = (catIndex % 2) * 0.1;

      const header = document.createElement('header');
      header.className = 'service-category_header';
      const heading = document.createElement('h3');
      heading.textContent = category;
      const count = document.createElement('span');
      count.textContent = `${grouped[category].length} service${grouped[category].length > 1 ? 's' : ''}`;
      header.append(heading, count);

      const grid = document.createElement('div');
      grid.className = 'service-grid';

      grouped[category].forEach((item, itemIndex) => {
        const card = document.createElement('article');
        card.className = 'service-card';
        card.dataset.delay = ((itemIndex % 3) * 0.08).toFixed(2);
        card.dataset.animate = 'slide-up';

        const title = document.createElement('h4');
        title.textContent = item.service_name || 'Service';
        const description = document.createElement('p');
        description.textContent = item.description || '';
        const price = document.createElement('span');
        price.className = 'service-card_price';
        price.textContent = item.price ? `₹${Number(item.price).toLocaleString('en-IN')}` : 'Custom quote';

        card.append(title, description, price);
        grid.appendChild(card);
      });

      section.append(header, grid);
      container.appendChild(section);
    });
  };

  const loadServices = async () => {
    if (!document.querySelector('#service-groups-root')) return;
    await ensurePapa();
    if (!window.Papa) return;

    let productsData = [];
    let categoriesData = [];

    await Promise.all([
      new Promise((resolve) =>
        Papa.parse('/data/products.csv', {
          header: true,
          download: true,
          skipEmptyLines: true,
          complete: (results) => {
            productsData = results.data;
            resolve();
          },
          error: (error) => {
            console.warn('Products CSV error:', error.message);
            resolve();
          },
        })
      ),
      new Promise((resolve) =>
        Papa.parse('/data/categories.csv', {
          header: true,
          download: true,
          skipEmptyLines: true,
          complete: (results) => {
            categoriesData = results.data;
            resolve();
          },
          error: (error) => {
            console.warn('Categories CSV error:', error.message);
            resolve();
          },
        })
      ),
    ]);

    buildServiceSections(productsData, categoriesData);
    initScrollAnimations();
  };

  const initFooterInteractions = () => {
    const footerLinks = document.querySelectorAll('.site-footer a');
    footerLinks.forEach((link) => {
      link.addEventListener('mouseenter', () => link.classList.add('is-hovered'));
      link.addEventListener('mouseleave', () => link.classList.remove('is-hovered'));
    });
  };

  const onReady = () => {
    initNavigation();
    initSmoothScroll();
    pulseLogo();
    animateCounters();
    initScrollAnimations();
    loadBlogs();
    loadServices();
    initFooterInteractions();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }
})();

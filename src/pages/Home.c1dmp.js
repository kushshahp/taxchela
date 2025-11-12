import React from 'react';

const highlights = [
  {
    title: 'Tax Strategy Playbooks',
    description:
      'Guided blueprints that help founders, CFOs, and finance teams make proactive tax decisions with confidence.',
  },
  {
    title: 'Always-On Compliance',
    description:
      'Smart reminders, timelines, and scenario walkthroughs that keep every filing, registration, and payment on track.',
  },
  {
    title: 'Financial Intelligence',
    description:
      'Deep-dives that translate policy and regulation into simple language, numbers, and actions you can rely on.',
  },
];

const services = [
  {
    heading: 'Tax & Regulatory',
    blurb: 'From GST to direct tax and cross-border structuring, stay ahead of every regulatory curve.',
  },
  {
    heading: 'Corporate Law',
    blurb: 'Templates, explainers, and playbooks for board governance, fundraising, and strategic transactions.',
  },
  {
    heading: 'Capital & Finance',
    blurb: 'Practical insight on valuation, investor reporting, FP&A, and building resilient finance functions.',
  },
];

const milestones = [
  {
    stage: 'Discover',
    content: 'Start with curated explainers and visuals that make complex mandates surprisingly clear.',
  },
  {
    stage: 'Design',
    content: 'Apply tactical frameworks, calculators, and walkthroughs tailored for your industry.',
  },
  {
    stage: 'Deliver',
    content: 'Turn insight into motion with checklists, workflows, and team-ready action plans.',
  },
];

const testimonials = [
  {
    quote:
      'Taxchela removes the fear from compliance. The animated explainers and walkthroughs help our entire team understand what has to be done, fast.',
    name: 'Ritika Anand',
    role: 'Director, Revline Labs',
  },
  {
    quote:
      'We use Taxchela playbooks before every board meeting. The dashboards and visuals make complex legal updates simple to communicate.',
    name: 'Manish Kothari',
    role: 'Founder, FinSight Advisory',
  },
];

export default function Home() {
  return (
    <div className="home-shell">
      <style>{`
        .home-shell {
          position: relative;
          min-height: 100vh;
          overflow-x: hidden;
          background: radial-gradient(circle at top left, #312e81 0%, #0f172a 45%, #020617 100%);
          color: #e2e8f0;
          font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        }

        .home-shell::before,
        .home-shell::after {
          content: '';
          position: absolute;
          width: 42rem;
          height: 42rem;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.25;
          z-index: 0;
          animation: orb-pulse 18s ease-in-out infinite;
        }

        .home-shell::before {
          top: -18rem;
          left: -16rem;
          background: #7dd3fc;
        }

        .home-shell::after {
          bottom: -20rem;
          right: -18rem;
          background: #c084fc;
          animation-delay: 6s;
        }

        .layout-container {
          position: relative;
          z-index: 1;
          width: min(1100px, calc(100% - 3rem));
          margin: 0 auto;
          padding: 6rem 0 5rem;
          display: flex;
          flex-direction: column;
          gap: 6rem;
        }

        .hero-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          align-items: center;
          gap: 3rem;
        }

        .hero-copy h1 {
          font-size: clamp(2.5rem, 4vw + 1rem, 4.75rem);
          line-height: 1.05;
          font-weight: 700;
          margin-bottom: 1.5rem;
          letter-spacing: -0.04em;
        }

        .hero-copy p {
          font-size: clamp(1.1rem, 1.5vw + 0.8rem, 1.3rem);
          color: #cbd5f5;
          margin-bottom: 2rem;
          max-width: 32rem;
        }

        .action-row {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .primary-btn,
        .secondary-btn {
          padding: 0.9rem 1.8rem;
          font-size: 0.95rem;
          border-radius: 999px;
          font-weight: 600;
          transition: transform 0.45s ease, box-shadow 0.45s ease, background 0.45s ease;
          border: none;
          cursor: pointer;
        }

        .primary-btn {
          background: linear-gradient(135deg, #818cf8 0%, #38bdf8 50%, #22d3ee 100%);
          color: #0f172a;
          box-shadow: 0 12px 30px rgba(14, 165, 233, 0.35);
        }

        .primary-btn:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 16px 40px rgba(14, 165, 233, 0.45);
        }

        .secondary-btn {
          background: rgba(148, 163, 184, 0.12);
          color: #e2e8f0;
          border: 1px solid rgba(148, 163, 184, 0.2);
        }

        .secondary-btn:hover {
          transform: translateY(-4px);
          background: rgba(148, 163, 184, 0.2);
        }

        .hero-visual {
          position: relative;
          isolation: isolate;
          display: grid;
          place-items: center;
          padding: 2.5rem;
        }

        .visual-core {
          position: relative;
          width: min(420px, 100%);
          aspect-ratio: 1;
          border-radius: 36px;
          background: linear-gradient(160deg, rgba(59, 130, 246, 0.18) 0%, rgba(14, 116, 144, 0.28) 100%);
          border: 1px solid rgba(148, 163, 184, 0.3);
          overflow: hidden;
          box-shadow: inset 0 0 60px rgba(14, 116, 144, 0.2), 0 30px 60px rgba(15, 23, 42, 0.45);
        }

        .visual-core::before,
        .visual-core::after {
          content: '';
          position: absolute;
          inset: 12%;
          border-radius: 28px;
          background: radial-gradient(circle at top left, rgba(56, 189, 248, 0.35) 0%, rgba(59, 130, 246, 0.2) 40%, transparent 70%);
          mix-blend-mode: screen;
          animation: float 18s ease-in-out infinite;
        }

        .visual-core::after {
          inset: 18%;
          background: radial-gradient(circle at bottom right, rgba(244, 114, 182, 0.35) 0%, rgba(99, 102, 241, 0.25) 45%, transparent 80%);
          animation-delay: 6s;
        }

        .floating-card {
          position: absolute;
          padding: 1rem 1.4rem;
          border-radius: 18px;
          background: rgba(15, 23, 42, 0.75);
          border: 1px solid rgba(148, 163, 184, 0.25);
          box-shadow: 0 20px 45px rgba(8, 47, 73, 0.35);
          backdrop-filter: blur(14px);
          animation: float 16s ease-in-out infinite;
        }

        .floating-card:nth-child(1) {
          top: 12%;
          left: 12%;
          animation-delay: 0s;
        }

        .floating-card:nth-child(2) {
          bottom: 14%;
          right: 14%;
          animation-delay: 6s;
        }

        .floating-card span {
          display: block;
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(148, 163, 184, 0.7);
          margin-bottom: 0.35rem;
        }

        .floating-card strong {
          font-size: 1.1rem;
          color: #f8fafc;
        }

        .section-heading {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          text-align: center;
          max-width: 760px;
          margin: 0 auto 3rem;
        }

        .section-heading span {
          font-size: 0.85rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(148, 163, 184, 0.7);
        }

        .section-heading h2 {
          font-size: clamp(2rem, 3vw + 1rem, 3.4rem);
          font-weight: 700;
          color: #f1f5f9;
        }

        .section-heading p {
          color: #cbd5f5;
          font-size: 1.05rem;
        }

        .highlight-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.75rem;
        }

        .highlight-card {
          position: relative;
          padding: 1.9rem;
          border-radius: 24px;
          background: rgba(15, 23, 42, 0.65);
          border: 1px solid rgba(148, 163, 184, 0.2);
          box-shadow: 0 18px 45px rgba(8, 47, 73, 0.35);
          overflow: hidden;
          transition: transform 0.6s ease, border-color 0.6s ease, background 0.6s ease;
        }

        .highlight-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at top left, rgba(14, 165, 233, 0.18), transparent 60%);
          opacity: 0;
          transition: opacity 0.6s ease;
        }

        .highlight-card:hover {
          transform: translateY(-12px);
          border-color: rgba(129, 140, 248, 0.6);
          background: rgba(30, 41, 59, 0.75);
        }

        .highlight-card:hover::after {
          opacity: 1;
        }

        .highlight-card h3 {
          font-size: 1.4rem;
          margin-bottom: 0.85rem;
          color: #f8fafc;
        }

        .highlight-card p {
          color: rgba(226, 232, 240, 0.85);
          line-height: 1.6;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.5rem;
        }

        .service-card {
          padding: 2.1rem;
          background: rgba(12, 19, 38, 0.8);
          border-radius: 26px;
          border: 1px solid rgba(148, 163, 184, 0.18);
          box-shadow: inset 0 1px 0 rgba(148, 163, 184, 0.2), 0 18px 40px rgba(8, 47, 73, 0.35);
          transition: transform 0.45s ease, border-color 0.45s ease;
        }

        .service-card:hover {
          transform: translateY(-10px);
          border-color: rgba(14, 165, 233, 0.5);
        }

        .service-card h3 {
          font-size: 1.3rem;
          margin-bottom: 0.75rem;
          color: #f8fafc;
        }

        .service-card p {
          color: rgba(226, 232, 240, 0.8);
          line-height: 1.6;
        }

        .timeline {
          display: grid;
          gap: 1.5rem;
        }

        .timeline-step {
          display: grid;
          grid-template-columns: minmax(120px, 160px) 1fr;
          gap: 1.5rem;
          align-items: center;
          padding: 1.6rem;
          border-radius: 24px;
          background: rgba(15, 23, 42, 0.72);
          border: 1px solid rgba(148, 163, 184, 0.2);
          box-shadow: 0 16px 36px rgba(8, 47, 73, 0.3);
        }

        .timeline-step strong {
          font-size: 1.6rem;
          color: #38bdf8;
          letter-spacing: 0.08em;
        }

        .timeline-step p {
          color: rgba(226, 232, 240, 0.88);
          font-size: 1.05rem;
          line-height: 1.6;
        }

        .testimonials {
          display: grid;
          gap: 1.5rem;
        }

        .testimonial-card {
          position: relative;
          padding: 2rem 2.4rem;
          border-radius: 30px;
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.85), rgba(15, 23, 42, 0.92));
          border: 1px solid rgba(148, 163, 184, 0.22);
          box-shadow: 0 24px 50px rgba(8, 47, 73, 0.35);
          overflow: hidden;
        }

        .testimonial-card::before {
          content: '“';
          position: absolute;
          top: -1.5rem;
          left: 1.2rem;
          font-size: 6rem;
          color: rgba(148, 163, 184, 0.12);
          font-family: 'Georgia', serif;
        }

        .testimonial-quote {
          font-size: 1.1rem;
          line-height: 1.8;
          color: rgba(241, 245, 249, 0.92);
          margin-bottom: 1.5rem;
        }

        .testimonial-author {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          color: rgba(148, 163, 184, 0.9);
        }

        .cta-panel {
          margin-top: 1rem;
          border-radius: 36px;
          padding: 3rem;
          background: linear-gradient(120deg, rgba(99, 102, 241, 0.65), rgba(14, 165, 233, 0.48));
          color: #0f172a;
          display: grid;
          gap: 1.8rem;
          box-shadow: 0 30px 60px rgba(15, 23, 42, 0.35);
        }

        .cta-panel h2 {
          font-size: clamp(2rem, 3vw + 1rem, 3rem);
          font-weight: 700;
        }

        .cta-panel p {
          color: rgba(15, 23, 42, 0.8);
          font-size: 1.05rem;
        }

        .cta-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .cta-actions a {
          text-decoration: none;
        }

        .cta-secondary {
          background: rgba(15, 23, 42, 0.15);
          color: #0f172a;
          border: 1px solid rgba(15, 23, 42, 0.3);
        }

        @keyframes orb-pulse {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(4%, 6%, 0) scale(1.1);
          }
        }

        @keyframes float {
          0% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          50% {
            transform: translate3d(0, -10px, 0) rotate(2deg);
          }
          100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
        }

        @media (max-width: 768px) {
          .layout-container {
            padding-top: 5rem;
            gap: 5rem;
          }

          .timeline-step {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .cta-panel {
            padding: 2.5rem;
          }
        }
      `}</style>

      <div className="layout-container">
        <section className="hero-section">
          <div className="hero-copy" data-animate="fade-in">
            <h1>
              Animated intelligence for modern tax, law, &amp; finance teams.
            </h1>
            <p>
              Experience a new way to learn and execute. Taxchela fuses storytelling visuals with tactical guidance so you can act on complex mandates instantly.
            </p>
            <div className="action-row">
              <a className="primary-btn" href="/read">
                Explore the Library
              </a>
              <a className="secondary-btn" href="/book-online">
                Book a Strategy Call
              </a>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="visual-core">
              <div className="floating-card">
                <span>Compliance Tracker</span>
                <strong>24 live workflows</strong>
              </div>
              <div className="floating-card">
                <span>Insights Delivered</span>
                <strong>6k+ weekly readers</strong>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="section-heading">
            <span>Why Taxchela</span>
            <h2>A cinematic learning experience for every stakeholder.</h2>
            <p>
              Our motion-first modules decode tax, law, and finance topics using interactive flows, animated briefs, and data-rich visuals that mirror the polish of leading creative studios.
            </p>
          </div>
          <div className="highlight-grid">
            {highlights.map((item) => (
              <article key={item.title} className="highlight-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <div className="section-heading">
            <span>In Motion</span>
            <h2>Three beats from discovery to delivery.</h2>
            <p>
              Follow a guided rhythm—each stage unlocks its own set of interactive dashboards, video explainers, and ready-to-use templates.
            </p>
          </div>
          <div className="timeline">
            {milestones.map((step) => (
              <div key={step.stage} className="timeline-step">
                <strong>{step.stage}</strong>
                <p>{step.content}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="section-heading">
            <span>Disciplines</span>
            <h2>Where we bring the studio to strategy.</h2>
            <p>
              Shape confident decisions with curated animations, voiceovers, and dynamic frameworks across your core growth and compliance pillars.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article key={service.heading} className="service-card">
                <h3>{service.heading}</h3>
                <p>{service.blurb}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <div className="section-heading">
            <span>Voices</span>
            <h2>Trusted by forward finance &amp; legal teams.</h2>
            <p>
              Teams rely on our animated briefings and frameworks to prepare for board reviews, investor discussions, and regulatory audits.
            </p>
          </div>
          <div className="testimonials">
            {testimonials.map((item) => (
              <blockquote key={item.name} className="testimonial-card">
                <p className="testimonial-quote">{item.quote}</p>
                <footer className="testimonial-author">
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="cta-panel">
          <h2>Ready to experience tax &amp; finance content with studio-grade motion?</h2>
          <p>
            Book a personalised walkthrough and see how Taxchela animates complex mandates into visual stories, dashboards, and decision trees tailored for your business.
          </p>
          <div className="cta-actions">
            <a className="primary-btn" href="/book-online">
              Schedule a Walkthrough
            </a>
            <a className="primary-btn cta-secondary" href="/plans-pricing">
              Compare Plans
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

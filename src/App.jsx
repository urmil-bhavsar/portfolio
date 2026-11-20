import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  Mail,
  Linkedin,
  Instagram,
  Menu,
  X,
  Copy,
  Check,
  Cpu,
  Terminal,
  Sun,
  Moon,
  SlidersHorizontal,
  ExternalLink,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { siteConfig, projects, stackGroups, experiences, artwork, education } from './data/content';

const reveal = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function ProjectArchitectureVisual({ project }) {
  const diagrams = {
    '01': {
      nodes: ['Clinical Event', 'Tx Outbox', 'Apache Kafka', 'Notifications'],
      metric: '100% Delivery · Zero Loss',
      badge: 'EVENT-DRIVEN ARCHITECTURE',
    },
    '02': {
      nodes: ['Gujarati/Eng Input', 'Sarvam AI 105B', 'Phonetic Match', 'Recursive CTEs'],
      metric: 'sub-800ms Latency · Multilingual',
      badge: 'AI TRANSLITERATION PIPELINE',
    },
    '03': {
      nodes: ['CRM Webhooks', 'OAuth 2.0 Cycle', 'Tenant Isolation', 'Virtualized DOM'],
      metric: 'Zero Tenant Leakage · 10k+ Records',
      badge: 'MULTI-TENANT SAAS ENGINE',
    },
    '04': {
      nodes: ['Voice / Speech', 'LangChain Agent', 'SQL AST Safety', 'PostgreSQL Chart'],
      metric: 'Hours Saved · Spoken SQL',
      badge: 'AUTONOMOUS TEXT-TO-SQL',
    },
    '05': {
      nodes: ['OpenAPI 3.0 Specs', 'Codegen CLI', 'Typed TS Clients', 'Contract Validation'],
      metric: 'Zero Manual Boilerplate',
      badge: 'ENTERPRISE API CODEGEN',
    },
    '06': {
      nodes: ['Car Rental UI', 'Admin Workflows', 'Nginx Reverse Proxy', 'Hostinger VPS'],
      metric: '99.9% Uptime · SSL Certbot',
      badge: 'PRODUCTION CLOUD DEPLOYMENT',
    },
    '07': {
      nodes: ['Property Portal', 'Catalog CMS', 'Node.js Backend', 'VPS Production'],
      metric: 'Live Commercial System',
      badge: 'COMMERCIAL REAL ESTATE PLATFORM',
    },
  };

  const current = diagrams[project.number] || {
    nodes: ['Client Request', 'Service API', 'Database', 'Output'],
    metric: 'Production System',
    badge: 'SYSTEM ARCHITECTURE',
  };

  return (
    <div className={`project-visual project-${project.accent}`} aria-hidden="true">
      <div className="visual-grid" />
      <div className="arch-flow-wrap">
        <div className="arch-flow-badge">{current.badge}</div>
        <div className="arch-flow-nodes">
          {current.nodes.map((node, idx) => (
            <div key={node} className="arch-flow-step">
              <div className="arch-node-box">
                <span className="arch-node-index">0{idx + 1}</span>
                <span className="arch-node-title">{node}</span>
              </div>
              {idx < current.nodes.length - 1 && (
                <div className="arch-node-connector">
                  <span className="connector-line" />
                  <span className="connector-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="arch-flow-footer">
          <span className="arch-metric-pill">✓ {current.metric}</span>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [activeLightboxImg, setActiveLightboxImg] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [telemetryTab, setTelemetryTab] = useState('spec'); // 'spec' | 'console'

  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'output', text: 'URMIL-SYSTEMS v2.7.0 (x86_64-linux-node)' },
    { type: 'output', text: 'High-throughput microservices & AI agent architecture online.' },
    { type: 'prompt', text: 'outbox' },
    { type: 'output', text: '✓ Kafka Transactional Outbox: 20+ clinical events, 100% at-least-once delivery, VVIP masking.' },
  ]);

  const runCommand = (cmd) => {
    if (cmd === 'clear') {
      setTerminalHistory([]);
      return;
    }
    let response = '';
    switch (cmd) {
      case 'outbox':
        response = '✓ Kafka Transactional Outbox: 20+ clinical events, 100% at-least-once delivery, VVIP masking.';
        break;
      case 'ai':
        response = '✓ AI Agents: Sarvam AI (105B) multilingual phonetics + LangChain Text-to-SQL + STT analytics.';
        break;
      case 'perf':
        response = '✓ Performance: Sub-800ms API latency via composite indexing + recursive CTEs; 10k+ virtualized rows.';
        break;
      case 'stack':
        response = '✓ Tech: Node.js, NestJS, TypeScript, Python, React, Angular, PostgreSQL, Redis, Kafka, Docker, Vitest.';
        break;
      case 'contact':
        response = '✓ Contact: urmilwork1@gmail.com | Ahmedabad, India (Open to Relocate).';
        break;
      default:
        response = `Command not recognized: ${cmd}. Available: outbox, ai, perf, stack, contact, clear.`;
    }
    setTerminalHistory((prev) => [
      ...prev,
      { type: 'prompt', text: cmd },
      { type: 'output', text: response },
    ]);
  };

  useEffect(() => {
    const isLocked = mobileOpen || activeModalProject !== null || activeLightboxImg !== null;
    document.body.classList.toggle('menu-open', isLocked);
    return () => document.body.classList.remove('menu-open');
  }, [mobileOpen, activeModalProject, activeLightboxImg]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveModalProject(null);
        setActiveLightboxImg(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2400);
    } catch (err) {
      console.error('Failed to copy email', err);
    }
  };

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'systems') return project.category === 'systems' || project.category === 'ai';
    if (activeFilter === 'production') return project.category === 'production';
    return true;
  });

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="container nav-wrap">
          <a href="#top" className="brand" aria-label="Urmil Bhavsar home">
            URMIL BHAVSAR
          </a>

          <nav className="nav desktop-nav" aria-label="Main navigation">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#about">About</a>
            <a href="#creative">Creative</a>
            <a href="#contact">Contact</a>
            <a
              href={siteConfig.resume}
              download="Urmil Bhavsar - Full Stack & AI Engineer Resume.pdf"
              className="nav-resume"
              target="_blank"
              rel="noreferrer"
            >
              Resume <ArrowUpRight size={14} />
            </a>

            {/* THEME TOGGLE BUTTON */}
            <button
              type="button"
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
              <span className="theme-label">{theme === 'dark' ? 'Light' : 'Dark'}</span>
            </button>
          </nav>

          <div className="mobile-header-actions">
            <button
              type="button"
              className="theme-toggle-btn mobile-theme-btn"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            <button
              type="button"
              className="menu-toggle"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div id="mobile-menu" className="mobile-menu">
            <nav className="nav mobile-nav" aria-label="Mobile navigation">
              <a href="#work" onClick={() => setMobileOpen(false)}>Work</a>
              <a href="#experience" onClick={() => setMobileOpen(false)}>Experience</a>
              <a href="#about" onClick={() => setMobileOpen(false)}>About</a>
              <a href="#creative" onClick={() => setMobileOpen(false)}>Creative</a>
              <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
              <a
                href={siteConfig.resume}
                download="Urmil Bhavsar - Full Stack & AI Engineer Resume.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileOpen(false)}
              >
                Resume ↗
              </a>
            </nav>
          </div>
        )}
      </header>

      <main id="top">
        {/* HERO SECTION */}
        <section className="hero section-shell">
          <div className="container hero-grid">
            <motion.div className="hero-copy" initial="hidden" animate="show" variants={reveal}>
              <p className="eyebrow">FULL STACK & AI SYSTEMS ENGINEER</p>
              <h1>
                I build scalable distributed systems and AI-powered production platforms.
              </h1>
              <p className="lede">
                Full Stack & AI Engineer with 2.7+ years of experience engineering high-throughput distributed microservices, scalable backend architectures, and AI-powered production systems using Node.js, NestJS, TypeScript, Python, React, Angular, and PostgreSQL.
              </p>

              <div className="cta-row">
                <a href="#work" className="primary-link">
                  Explore my work
                </a>
                <a href="#contact" className="secondary-link">
                  Let’s connect
                </a>
              </div>

              <div className="meta-row">
                <span>Ahmedabad, India</span>
                <span>Open to Relocate</span>
              </div>
            </motion.div>

            {/* ENGINEERING TELEMETRY & TERMINAL CARD */}
            <motion.div
              className="hero-telemetry"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
            >
              <div className="telemetry-header">
                <div className="telemetry-status">
                  <span className="status-dot pulsing" aria-hidden="true" />
                  <span>Available for select roles</span>
                </div>

                  <div className="telemetry-tabs">
                    <button
                      type="button"
                      className={`telemetry-tab-btn ${telemetryTab === 'spec' ? 'active' : ''}`}
                      onClick={() => setTelemetryTab('spec')}
                    >
                      <Cpu size={11} /> SPEC
                    </button>
                    <button
                      type="button"
                      className={`telemetry-tab-btn ${telemetryTab === 'console' ? 'active' : ''}`}
                      onClick={() => setTelemetryTab('console')}
                    >
                      <Terminal size={11} /> CONSOLE
                    </button>
                  </div>
                </div>

                    {telemetryTab === 'spec' ? (
                      <>
                        <div className="telemetry-body">
                          <div className="telemetry-item">
                            <span className="telemetry-label">Architecture Core</span>
                            <strong>Event-Driven Outbox · Microservices · BFF</strong>
                          </div>
                          <div className="telemetry-item">
                            <span className="telemetry-label">Data & Authorization</span>
                            <strong>PostgreSQL Recursive CTEs · Redis Throttling</strong>
                          </div>
                          <div className="telemetry-item">
                            <span className="telemetry-label">AI & Agentic Systems</span>
                            <strong>LangChain · Text-to-SQL · Sarvam AI (105B)</strong>
                          </div>
                          <div className="telemetry-item">
                            <span className="telemetry-label">Infrastructure & Testing</span>
                            <strong>Docker · Jenkins CI/CD · Kafka · Vitest</strong>
                          </div>
                        </div>

                        <div className="telemetry-stats">
                          <div className="telemetry-stat">
                            <span className="stat-value">2.7+</span>
                            <span className="stat-sub">Years Exp</span>
                          </div>
                          <div className="telemetry-stat">
                            <span className="stat-value">100%</span>
                            <span className="stat-sub">Outbox Delivery</span>
                          </div>
                          <div className="telemetry-stat">
                            <span className="stat-value">&lt;800ms</span>
                            <span className="stat-sub">API Latency</span>
                          </div>
                        </div>
                      </>
                    ) : (
                <div className="telemetry-console">
                  <div className="console-history">
                    {terminalHistory.map((line, idx) => (
                      <div key={idx} className={`console-line ${line.type}`}>
                        {line.type === 'prompt' && <span className="prompt-prefix">urmil@systems:~$ </span>}
                        <span className="console-text">{line.text}</span>
                      </div>
                    ))}
                  </div>
                  <div className="console-actions">
                    <span className="console-action-label">EXEC:</span>
                    {['outbox', 'ai', 'perf', 'stack', 'contact', 'clear'].map((cmd) => (
                      <button
                        key={cmd}
                        type="button"
                        className="console-cmd-chip"
                        onClick={() => runCommand(cmd)}
                      >
                        {cmd}
                      </button>
                    ))}
                  </div>
                </div>
              )}
                </motion.div>
              </div>
            </section>

            {/* SELECTED WORK SECTION */}
            <section id="work" className="section-shell">
              <div className="container">
                <div className="section-heading split-heading">
                  <div>
                    <p className="eyebrow">Selected Work</p>
                    <h2>Distributed systems, AI agents, and production platforms.</h2>
                  </div>
                </div>

                {/* PROJECT FILTER TABS */}
                <div className="project-filters" role="tablist" aria-label="Project category filters">
                  <button
                    type="button"
                    className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                    onClick={() => setActiveFilter('all')}
                  >
                    All Projects ({projects.length})
                  </button>
                  <button
                    type="button"
                    className={`filter-btn ${activeFilter === 'systems' ? 'active' : ''}`}
                    onClick={() => setActiveFilter('systems')}
                  >
                    AI & Distributed Systems ({projects.filter((p) => p.category === 'systems' || p.category === 'ai').length})
                  </button>
                  <button
                    type="button"
                    className={`filter-btn ${activeFilter === 'production' ? 'active' : ''}`}
                    onClick={() => setActiveFilter('production')}
                  >
                    Live Production ({projects.filter((p) => p.category === 'production').length})
                  </button>
                </div>

                <motion.div layout className="projects">
                  <AnimatePresence>
                    {filteredProjects.map((project) => (
                      <motion.article
                        layout
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.35 }}
                        key={project.name}
                        className={`project project-${project.mode}`}
                      >
                        <div className="project-index">{project.number}</div>
                        <div className="project-copy">
                          <p className="project-name">{project.name}</p>
                          <h3>{project.label}</h3>
                          <p>{project.summary}</p>
                          {project.impact && (
                            <p className="project-impact">
                              <strong>Impact:</strong> {project.impact}
                            </p>
                          )}
                          <div className="project-tech">
                            {project.tech.map((tech) => (
                              <span key={tech}>{tech}</span>
                            ))}
                          </div>

                          <div className="project-actions">
                            {project.link && (
                              <a href={project.link} target="_blank" rel="noreferrer" className="inline-link action-live">
                                View live project <ArrowUpRight size={14} />
                              </a>
                            )}

                            {project.deepDive && (
                              <button
                                type="button"
                                className="deep-dive-btn"
                                onClick={() => setActiveModalProject(project)}
                              >
                                <SlidersHorizontal size={13} />
                                Architecture Deep-Dive
                              </button>
                            )}

                            {!project.link && !project.deepDive && (
                              <span className="inline-link muted">{project.badge || 'Enterprise Architecture'}</span>
                            )}
                          </div>
                        </div>

                        {/* DYNAMIC ARCHITECTURE FLOW DIAGRAM */}
                        <ProjectArchitectureVisual project={project} />
                      </motion.article>
                    ))}
                  </AnimatePresence>
                </motion.div>
              </div>
            </section>

            {/* THE STACK SECTION */}
            <section className="section-shell stack-section">
              <div className="container">
                <div className="section-heading split-heading">
                  <p className="eyebrow">The Stack</p>
                  <h2>Engineering across product and infrastructure.</h2>
                </div>

                <div className="stack-grid">
                  {stackGroups.map((group) => (
                    <div key={group.title} className="stack-group">
                      <h3>{group.title}</h3>
                      <div className="stack-pills">
                        {group.items.map((item) => (
                          <span key={item} className="stack-pill">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* EXPERIENCE SECTION */}
            <section id="experience" className="section-shell">
              <div className="container">
                <div className="section-heading split-heading">
                  <p className="eyebrow">Experience</p>
                  <h2>Building reliable systems with product intent.</h2>
                </div>

                <div className="timeline">
                  {experiences.map((item) => (
                    <article key={`${item.company}-${item.date}`} className="timeline-item">
                      <div className="timeline-mark" aria-hidden="true" />
                      <div className="timeline-content">
                        <div className="timeline-topline">
                          <div>
                            <h3>{item.company}</h3>
                            <p className="role">{item.title}</p>
                          </div>
                          <span>{item.date}</span>
                        </div>

                        <p className="timeline-detail">{item.detail}</p>

                        <ul className="role-points">
                          {item.accomplishments.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>

                        <div className="project-tech compact-tech">
                          {item.technologies.map((tech) => (
                            <span key={tech}>{tech}</span>
                          ))}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            {/* ABOUT SECTION */}
            <section id="about" className="section-shell about-section">
              <div className="container about-grid">
                <div className="about-big">
                  <p className="eyebrow">About</p>
                  <h2>I work between systems and story.</h2>
                </div>

                <div className="about-copy">
                  <p>
                    I’m a full stack developer who enjoys turning complex ideas into practical, dependable systems. I care about building products that are not only functional, but also clear, scalable, and easy for people to use.
                  </p>
                  <p>
                    My work sits between engineering and design — I like solving technical problems, improving workflows, and creating experiences that feel thoughtful from both a product and user perspective.
                  </p>
                  <div className="about-meta">
                    <div>
                      <span>Based in</span>
                      <strong>Ahmedabad, India</strong>
                    </div>
                    <div>
                      <span>Experience</span>
                      <strong>{siteConfig.experience}</strong>
                    </div>
                    <div>
                      <span>Focus</span>
                      <strong>Full Stack, Backend & AI Systems</strong>
                    </div>
                    <div>
                      <span>Education</span>
                      <strong>{education.degree}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CREATIVE DRAWING SECTION */}
            <section id="creative" className="section-shell creative-section">
              <div className="container">
                <div className="section-heading split-heading">
                  <p className="eyebrow">Beyond the Code</p>
                  <h2>I build with code. I create with a pencil.</h2>
                </div>

                <div className="art-gallery">
                  {artwork.map((item) => (
                    <figure
                      key={item.src}
                      className="art-item"
                      onClick={() => setActiveLightboxImg(item)}
                      title="Click to view full illustration"
                    >
                      <img src={item.src} alt={item.alt} loading="lazy" />
                      <figcaption className="art-caption">
                        <span>{item.title}</span>
                        <span className="art-expand-hint">Expand ↗</span>
                      </figcaption>
                    </figure>
                  ))}
                </div>

                <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="explore-link">
                  Explore more drawings <ArrowUpRight size={14} />
                </a>
              </div>
            </section>

            {/* EDUCATION SECTION */}
            <section className="section-shell education-section">
              <div className="container education-box">
                <div>
                  <p className="eyebrow">Education</p>
                </div>
                <div className="education-details">
                  <p className="education-year">{education.year}</p>
                  <h3>{education.degree}</h3>
                  <p>{education.field}</p>
                  <p>{education.college}</p>
                </div>
              </div>
            </section>

            {/* CONTACT SECTION */}
            <section id="contact" className="section-shell contact-section">
              <div className="container contact-box">
                <p className="eyebrow">Let’s build something thoughtful.</p>
                <h2>Available for meaningful product work and thoughtful engineering.</h2>
                <div className="contact-links">
                  <a href={`mailto:${siteConfig.email}`}>
                    <Mail size={16} />
                    {siteConfig.email}
                  </a>

                  <button
                    type="button"
                    className="email-copy-pill"
                    onClick={copyEmailToClipboard}
                    title="Copy email address"
                  >
                    {copiedEmail ? <Check size={15} color="var(--accent)" /> : <Copy size={15} />}
                    <span>{copiedEmail ? 'Copied to clipboard!' : 'Copy Email'}</span>
                  </button>

                  <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">
                    <Linkedin size={16} />
                    LinkedIn
                  </a>

                  {siteConfig.github && (
                    <a href={siteConfig.github} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  )}

                  <a href={siteConfig.instagram} target="_blank" rel="noreferrer">
                    <Instagram size={16} />
                    Instagram
                  </a>

                  <a
                    href={siteConfig.resume}
                    download="Urmil Bhavsar - Full Stack & AI Engineer Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Resume
                  </a>
                </div>
              </div>
            </section>
          </main>

          <footer className="site-footer">
            <div className="container footer-flex">
              <div>
                <p className="brand small">URMIL BHAVSAR</p>
                <p>Full Stack & AI Systems Engineer</p>
              </div>

              <div className="footer-links">
                <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                <a href={siteConfig.instagram} target="_blank" rel="noreferrer">Instagram</a>
                <a href={`mailto:${siteConfig.email}`}>Email</a>
                <a
                  href={siteConfig.resume}
                  download="Urmil Bhavsar - Full Stack & AI Engineer Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </div>

              <p>© 2026 Urmil Bhavsar</p>
            </div>
          </footer>

          {/* ARCHITECTURE DEEP-DIVE MODAL */}
          <AnimatePresence>
            {activeModalProject && (
              <div
                className="modal-backdrop"
                onClick={() => setActiveModalProject(null)}
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
              >
                <motion.div
                  className="modal-content"
                  initial={{ opacity: 0, y: 30, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.97 }}
                  transition={{ duration: 0.25 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    type="button"
                    className="modal-close-btn"
                    onClick={() => setActiveModalProject(null)}
                    aria-label="Close modal"
                  >
                    <X size={18} />
                  </button>

                  <div className="modal-header">
                    <p className="eyebrow">{activeModalProject.badge || 'Architecture Case Study'}</p>
                    <h3 id="modal-title">{activeModalProject.label}</h3>
                    <p className="modal-subtitle">{activeModalProject.name}</p>
                  </div>

                  {activeModalProject.deepDive?.challenge && (
                    <div className="modal-section">
                      <h4>The Architectural Challenge</h4>
                      <p>{activeModalProject.deepDive.challenge}</p>
                    </div>
                  )}

                  {activeModalProject.deepDive?.solution && (
                    <div className="modal-section">
                      <h4>Delivery & Systems Solution</h4>
                      <p>{activeModalProject.deepDive.solution}</p>
                    </div>
                  )}

                  {activeModalProject.deepDive?.metrics && (
                    <div className="modal-section">
                      <h4>Production Impact & Metrics</h4>
                      <div className="modal-metrics">
                        {activeModalProject.deepDive.metrics.map((metric) => (
                          <div key={metric} className="modal-metric-card">
                            {metric}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="modal-section">
                    <h4>System Technologies</h4>
                    <div className="stack-pills">
                      {activeModalProject.tech.map((tech) => (
                        <span key={tech} className="stack-pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {activeModalProject.link && (
                    <div className="modal-footer">
                      <a
                        href={activeModalProject.link}
                        target="_blank"
                        rel="noreferrer"
                        className="primary-link"
                      >
                        Open Live Deployment <ExternalLink size={14} />
                      </a>
                    </div>
                  )}
                </motion.div>
              </div>
            )}
          </AnimatePresence>

          {/* ARTWORK LIGHTBOX */}
          <AnimatePresence>
            {activeLightboxImg && (
              <div
                className="modal-backdrop lightbox-backdrop"
                onClick={() => setActiveLightboxImg(null)}
                role="dialog"
                aria-modal="true"
              >
                <motion.div
                  className="lightbox-content"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.25 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    type="button"
                    className="lightbox-close-btn"
                    onClick={() => setActiveLightboxImg(null)}
                    aria-label="Close illustration"
                  >
                    <X size={20} />
                  </button>
                  <img src={activeLightboxImg.src} alt={activeLightboxImg.alt} />
                  <div className="lightbox-caption">
                    <strong>{activeLightboxImg.title}</strong>
                    <p>{activeLightboxImg.alt}</p>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
        );
}

        export default App;

import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Linkedin, Instagram, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { siteConfig, projects, stackGroups, experiences, artwork, education } from './data/content';

const reveal = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('menu-open', mobileOpen);
    return () => document.body.classList.remove('menu-open');
  }, [mobileOpen]);

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
            <a href={siteConfig.resume} className="nav-resume" target="_blank" rel="noreferrer">
              Resume <ArrowUpRight size={14} />
            </a>
          </nav>

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

        {mobileOpen && (
          <div id="mobile-menu" className="mobile-menu">
            <nav className="nav mobile-nav" aria-label="Mobile navigation">
              <a href="#work" onClick={() => setMobileOpen(false)}>Work</a>
              <a href="#experience" onClick={() => setMobileOpen(false)}>Experience</a>
              <a href="#about" onClick={() => setMobileOpen(false)}>About</a>
              <a href="#creative" onClick={() => setMobileOpen(false)}>Creative</a>
              <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
              <a href={siteConfig.resume} target="_blank" rel="noreferrer" onClick={() => setMobileOpen(false)}>
                Resume ↗
              </a>
            </nav>
          </div>
        )}
      </header>

      <main id="top">
        <section className="hero section-shell">
          <div className="container hero-grid">
            <motion.div className="hero-copy" initial="hidden" animate="show" variants={reveal}>
              <p className="eyebrow">FULL STACK DEVELOPER</p>
              <h1>
                I build practical digital solutions with code and curiosity.
              </h1>
              <p className="lede">
                I’m a full stack developer focused on building reliable web applications and backend systems that solve real business problems.
                With 2+ years of experience, I work across React, Angular, Node.js, PostgreSQL, APIs, AWS, Docker, and CI/CD to deliver scalable, user-friendly products.
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

          </div>
        </section>

        <section id="work" className="section-shell">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Selected Work</p>
            </div>

            <div className="projects">
              {projects.map((project) => (
                <article key={project.name} className={`project project-${project.mode}`}>
                  <div className="project-index">{project.number}</div>
                  <div className="project-copy">
                    <p className="project-name">{project.name}</p>
                    <h3>{project.label}</h3>
                    <p>{project.summary}</p>
                    <div className="project-tech">
                      {project.tech.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noreferrer" className="inline-link">
                        View live project <ArrowUpRight size={14} />
                      </a>
                    ) : (
                      <span className="inline-link muted">Project details</span>
                    )}
                  </div>

                  <div className={`project-visual project-${project.accent}`} aria-hidden="true">
                    <div className="visual-grid" />
                    <div className="visual-curve" />
                    <div className="visual-bars" />
                    <div className="visual-node node-one" />
                    <div className="visual-node node-two" />
                    <div className="visual-node node-three" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

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
                  <p>{group.items.join(' · ')}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

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
                  <strong>Full Stack Development</strong>
                </div>
                <div>
                  <span>Education</span>
                  <strong>{education.degree}</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="creative" className="section-shell creative-section">
          <div className="container">
            <div className="section-heading split-heading">
              <p className="eyebrow">Beyond the Code</p>
              <h2>I build with code. I create with a pencil.</h2>
            </div>

            <div className="art-gallery">
              {artwork.map((item) => (
                <figure key={item.src} className="art-item">
                  <img src={item.src} alt={item.alt} loading="lazy" />
                </figure>
              ))}
            </div>

            <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="explore-link">
              Explore more drawings <ArrowUpRight size={14} />
            </a>
          </div>
        </section>

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

        <section id="contact" className="section-shell contact-section">
          <div className="container contact-box">
            <p className="eyebrow">Let’s build something thoughtful.</p>
            <h2>Available for meaningful product work and thoughtful engineering.</h2>
            <div className="contact-links">
              <a href={`mailto:${siteConfig.email}`}>
                <Mail size={16} />
                {siteConfig.email}
              </a>
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
              <a href={siteConfig.resume} target="_blank" rel="noreferrer">
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
            <p>Full Stack Developer</p>
          </div>

          <div className="footer-links">
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={siteConfig.instagram} target="_blank" rel="noreferrer">Instagram</a>
            <a href={`mailto:${siteConfig.email}`}>Email</a>
            <a href={siteConfig.resume} target="_blank" rel="noreferrer">Resume</a>
          </div>

          <p>© 2026 Urmil Bhavsar</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

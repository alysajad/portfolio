import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUpRight, Braces, Check, ChevronRight, CircleDot, Clock3, Code2, Cpu, Database, Fingerprint, GitBranch, Github, Globe, Linkedin, Mail, MapPin, Network, Phone, Server, ShieldCheck, Terminal, Trophy, type LucideIcon } from "lucide-react";
import { certifications, experience, profile, projects, pursuing, skills } from "./content";
import Reveal from "./reveal";
import ScrollExperience from "./scroll-experience";
import SkySketch from "./sky-sketch";

const quickStack = ["Python", "FastAPI", "PostgreSQL", "Redis", "Next.js", "TypeScript", "Docker", "Linux", "Wazuh", "Kali Linux", "SQLAlchemy", "MongoDB"];
const capabilities = [
  { icon: Server, name: "Backend", detail: "Systems", target: "utrust" },
  { icon: ShieldCheck, name: "Security", detail: "Research", target: "siem" },
  { icon: Cpu, name: "AI & Agentic", detail: "Systems", target: "bug-bounty" },
  { icon: Globe, name: "Full-Stack", detail: "Development", target: "makeaton" },
];

function SectionHeader({ label, next, nextLabel }: { label: string; next: string; nextLabel: string }) {
  return <div className="section-header"><span>{label}</span><span className="section-rule" /><a className="circle-link" href={`#${next}`} aria-label={`Continue to ${nextLabel}`}><ChevronRight size={17} /></a></div>;
}

function Title({ children, id, className = "" }: { children: React.ReactNode; id: string; className?: string }) {
  return <Reveal><div className={`title-wrap ${className}`}><span className="quote" aria-hidden="true">“</span><h2 id={id}>{children}</h2></div></Reveal>;
}

function Ghost({ number }: { number: string }) {
  return <span className="ghost-number" aria-hidden="true">{number}</span>;
}

function Portrait({ hero = false }: { hero?: boolean }) {
  const sizes = `${hero ? "(max-width: 639px) 44vw" : "(max-width: 639px) 280px"}, (max-width: 800px) 215px, (max-width: 1100px) 260px, ${hero ? 380 : 300}px`;
  return <div className="portrait-frame">
    <Image src="/images/sajad-portrait.png" alt="Sajad Hussain Malla, arms crossed against an amber panel" width={1122} height={1402} sizes={sizes} preload={hero} />
    <Image className="portrait-color" src="/images/sajad-portrait-color.png" alt="" aria-hidden="true" fill sizes={sizes} loading={hero ? "eager" : "lazy"} />
  </div>;
}

function ContactLink({ icon: Icon, href, children, external = false }: { icon: LucideIcon; href: string; children: React.ReactNode; external?: boolean }) {
  return <a className="contact-link" href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}><Icon size={18} /><span>{children}</span><ArrowUpRight className="contact-arrow" size={16} /><span className="sr-only">{external ? " (opens in a new tab)" : ""}</span></a>;
}

export default function Home() {
  return <>
    <a className="skip-link" href="#about">Skip to portfolio content</a>
    <ScrollExperience />
    <aside className="vertical-label" aria-hidden="true">SAJAD ©</aside>
    <main className="page-shell">
      <section className="hero section" id="hero" aria-labelledby="hero-title">
        <SkySketch kind="flock" />
        <div className="hero-top"><a href="#hero" className="brand-mark" aria-label="Sajad Hussain Malla home"><span /><span /></a><span className="eyebrow">BACKEND / SECURITY / AI</span><span className="hero-year">PORTFOLIO</span></div>
        <div className="hero-composition">
          <div className="doodles" aria-hidden="true"><Terminal className="doodle d1" /><Braces className="doodle d2" /><ShieldCheck className="doodle d3" /><Server className="doodle d4" /><GitBranch className="doodle d5" /><Network className="doodle d6" /></div>
          <div className="hero-type"><span className="hero-quote" aria-hidden="true">“</span><h1 id="hero-title"><span className="hero-line first-line">BACKEND<span className="period">.</span></span><span className="ribbon-label hero-ribbon">Backend Engineer</span><span className="hero-line second-line">ENGINEER<span className="period">.</span></span></h1><p className="hero-description">SWE Intern @ Nippon Toyota<br /><span>B.Tech CSE · CUSAT · Kochi, India</span></p></div>
          <div className="hero-portrait"><div className="portrait-orbit" aria-hidden="true" /><Portrait hero /><span className="ribbon-label winner-ribbon">Backend · Security · AI</span><span className="portrait-caption">Sajad Hussain Malla <span>aka Jin</span></span></div>
        </div>
        <div className="hero-bottom"><a href="#about" className="name-link"><span className="outline-circle"><ArrowDown size={18} /></span>{profile.name}</a><span className="selected-note">Selected Best<br />Backend Build</span></div>
        <Ghost number="01" />
      </section>

      <section className="section about" id="about" aria-labelledby="about-title">
        <SkySketch kind="plane" />
        <SkySketch kind="breeze" />
        <SectionHeader label="About me" next="what-i-do" nextLabel="what I do" />
        <div className="about-grid">
          <div className="about-sidebar"><div className="about-portrait"><Portrait /><Fingerprint className="about-doodle" aria-hidden="true" /></div><div className="dark-contact"><h3>Let’s work together<span>:</span></h3><ContactLink icon={Mail} href={`mailto:${profile.email}`}>{profile.email}</ContactLink><ContactLink icon={Phone} href="tel:+919103321565">{profile.phone}</ContactLink><ContactLink icon={Github} href={profile.github} external>alysajad</ContactLink><ContactLink icon={Linkedin} href={profile.linkedin} external>LinkedIn</ContactLink><p className="location"><MapPin size={16} />Kochi, Kerala, India</p></div></div>
          <div className="about-copy"><Title id="about-title" className="hello-title">HELLO<span className="amber">.</span></Title><p className="bio">I’m <strong>Sajad Hussain Malla</strong>, a backend-first engineer who builds production systems that hold under pressure and breaks them (legally) to find what doesn’t. Currently finishing B.Tech CSE at CUSAT while working as a Software Engineer Intern at Nippon Toyota, where I’ve shipped a multi-cluster used-car platform, AI valuation modules, and migrated a decade of legacy data into PostgreSQL. Outside work hours, I’m doing CTFs, hunting bugs, and competing at hackathons.</p>
            <div className="about-details"><div><h3 className="underline-title">Education</h3><div className="education-entry"><span className="education-year">2023 to<br />2026</span><div><h4>B.Tech Computer Science Engineering</h4><p>Cochin University of Science and Technology (CUSAT)</p><small>Kochi, Kerala · GPA: 8.1</small></div></div><div className="education-entry"><span className="education-year">2022</span><div><h4>Senior Secondary · JKBOSE</h4><p>Govt. Boys HSS Magam, Budgam, J&amp;K</p><small>423/500 · Top 10 Ranker</small></div></div></div><div><h3 className="underline-title">Tech stack</h3><div className="quick-stack">{quickStack.map(item => <span key={item}>{item}</span>)}</div></div></div>
            <h3 className="underline-title experience-label">Working experience</h3><div className="mini-experience">{experience.slice(0, 4).map(job => <div key={job.role}><h4>{job.role}</h4><p>{job.company}</p><small>{job.date} {job.end && `to ${job.end}`} · {job.location}</small></div>)}</div>
          </div>
        </div><Ghost number="02" />
      </section>

      <section className="section capabilities" id="what-i-do" aria-labelledby="capabilities-title">
        <SkySketch kind="plane" />
        <SectionHeader label="What I do" next="projects" nextLabel="projects" />
        <div className="contents-title"><span className="ghost-title" aria-hidden="true">TABLE OF CONTENT.</span><Title id="capabilities-title">TABLE <span className="of-sticker">OF</span> CONTENT<span className="amber">.</span></Title></div>
        <div className="capability-grid">{capabilities.map(({ icon: Icon, name, detail, target }) => <a href={`#${target}`} className="capability-card" key={name} aria-label={`Explore ${name} ${detail} project`}><span className="capability-icon"><Icon size={65} strokeWidth={1.6} /><ArrowUpRight size={19} className="capability-arrow" /></span><span className="capability-label"><strong>{name}</strong><span>{detail}</span></span></a>)}</div><Ghost number="03" />
      </section>

      <section className="section projects" id="projects" aria-labelledby="projects-title">
        <SkySketch kind="bug" />
        <SkySketch kind="flock" />
        <SectionHeader label="Selected work" next="skills" nextLabel="skills" /><div className="heading-line"><Title id="projects-title">PROJECTS<span className="amber">.</span></Title><span className="eyebrow">SIX SELECTED BUILDS / 2024 to 2026</span></div>
        <div className="project-grid">{projects.map((project, index) => <Reveal className={index === 0 ? "featured-wrap" : ""} kind="card" key={project.id}><article className={`project-card ${index === 0 ? "featured-project" : ""}`} id={project.id}>
          <div className="project-top"><span className="project-number" aria-hidden="true">{project.number}</span><span className="status">{project.status === "Active" ? <CircleDot size={12} /> : <Check size={12} />}{project.status}</span></div>
          <div className="project-body"><p className="project-type">{project.type} <span>/ {project.year}</span></p><h3>{project.title}</h3><p className="project-subtitle">{project.subtitle}</p><p className="project-description">{project.description}</p>{index === 0 && <div className="project-metrics"><div><strong>30<span>%</span></strong><span>Faster valuation-to-listing</span></div><div><strong>20<span>%</span></strong><span>Uplift in used-car sales</span></div><div><strong>4</strong><span>Dealer clusters</span></div></div>}<div className="tech-tags">{project.stack.map(item => <span key={item}>{item}</span>)}</div>{project.note && <p className="project-note"><Trophy size={14} />{project.note}</p>}{project.url && <a className="project-link" href={project.url} target="_blank" rel="noopener noreferrer">Visit project <ArrowUpRight size={16} /><span className="sr-only"> · {project.title} (opens in a new tab)</span></a>}</div>
        </article></Reveal>)}</div><Ghost number="04" />
      </section>

      <section className="section skills" id="skills" aria-labelledby="skills-title">
        <SkySketch kind="orbit" /><SectionHeader label="The toolkit" next="certifications" nextLabel="certifications and awards" /><Title id="skills-title">SKILLS<span className="amber">.</span></Title><div className="skills-grid">{skills.map((group, index) => { const Icon = [Code2, Database, Cpu, Terminal, ShieldCheck, Globe][index]; return <div className="skill-group" key={group.title}><Icon size={24} strokeWidth={1.6} /><h3>{group.title}</h3><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></div>; })}</div><Ghost number="05" /></section>

      <section className="section certifications" id="certifications" aria-labelledby="certifications-title">
        <SkySketch kind="constellation" /><SectionHeader label="Certifications & awards" next="experience" nextLabel="experience" /><Title id="certifications-title">CERTIFIED<span className="amber">.</span><br />AWARDED<span className="amber">.</span></Title><div className="certifications-grid"><div><h3 className="underline-title">Certifications</h3><div className="cert-list">{certifications.map(cert => <div className="cert-row" key={cert.name}><span className="cert-icon"><Check size={16} /></span><div><h4>{cert.name}</h4><p>{cert.issuer}</p></div><span className="sr-only">Completed</span></div>)}</div><h3 className="pursuing-label">IN PROGRESS</h3><div className="cert-list">{pursuing.map(cert => <div className="cert-row pursuing" key={cert.name}><span className="cert-icon"><Clock3 size={16} /></span><div><h4>{cert.name}</h4><p>{cert.issuer}</p></div></div>)}</div></div><div className="awards"><div className="award-stat"><Trophy size={40} strokeWidth={1.5} /><span>12<span>×</span></span><h3>National Hackathon Winner</h3></div><h4>Notable wins</h4><ul className="wins">{["Huddle Global 2025 (KSUM)", "Make-a-ton 7.0 (MLH)", "Code reCET (CET Trivandrum)", "INKRIT 2.0 & 3.0", "HACKnTech"].map(win => <li key={win}><ArrowUpRight size={16} />{win}</li>)}</ul><p className="award-other">Social Summer of Code Certificate · ULSA</p></div></div><Ghost number="06" /></section>

      <section className="section experience" id="experience" aria-labelledby="experience-title">
        <SkySketch kind="football" />
        <SkySketch kind="breeze" /><SectionHeader label="The journey" next="contact" nextLabel="contact" /><Title id="experience-title">EXPERIENCE<span className="amber">.</span></Title><ol className="timeline">{experience.map((job, index) => <li className="timeline-entry" key={job.role}><div className="timeline-date"><span>{job.date}</span><small>{job.end}</small></div><div className="timeline-content"><span className={`timeline-node ${index === 0 ? "active-node" : ""}`} aria-hidden="true" /><div className="timeline-title"><h3>{job.role}</h3>{job.active && <span className="current-tag">Current</span>}</div><p className="timeline-company">{job.company} · {job.location}</p><ul>{job.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul></div></li>)}</ol><div className="community"><h3 className="underline-title">Beyond the build</h3><div><p><strong>Volunteer / organiser</strong>Team Lead · Make-a-ton 8.0 · Dhishna Tech Fest · Sargam Cultural Fest · Vibhava CUSAT</p><p><strong>Off the clock</strong>CTFs · Football · Tinkering at Tinkerspace</p><p><strong>Languages</strong>English · Hindi · Urdu · Malayalam (conversational)</p></div></div><Ghost number="07" /></section>

      <section className="section contact" id="contact" aria-labelledby="contact-title">
        <SkySketch kind="flock" /><SectionHeader label="Let’s work together" next="hero" nextLabel="the top" /><div className="contact-intro"><Title id="contact-title">LET’S<br />BUILD<span className="amber">.</span></Title><div><ArrowUpRight className="contact-big-arrow" size={76} strokeWidth={1} aria-hidden="true" /><p>I’m open to backend engineering roles, security research collaborations, and hackathons. Based in Kochi, open to remote.</p></div></div><div className="contact-grid"><div className="contact-card"><ContactLink icon={Mail} href={`mailto:${profile.email}`}>{profile.email}</ContactLink><ContactLink icon={Phone} href="tel:+919103321565">{profile.phone}</ContactLink><p className="location"><MapPin size={18} />Kochi, Kerala, India</p></div><div className="contact-card"><ContactLink icon={Linkedin} href={profile.linkedin} external>LinkedIn</ContactLink><ContactLink icon={Github} href={profile.github} external>GitHub</ContactLink><ContactLink icon={Globe} href={profile.website} external>Portfolio</ContactLink></div></div><Ghost number="08" /></section>
      <footer><span>Sajad Hussain Malla · B.Tech CSE · CUSAT</span><span>Built with Next.js + Tailwind</span><a href="#hero" aria-label="Back to top"><ArrowRight size={18} className="footer-arrow" /></a></footer>
    </main>
  </>;
}

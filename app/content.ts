export const profile = {
  name: "Sajad Hussain Malla",
  email: "huxi1314k@gmail.com",
  phone: "+91-9103321565",
  github: "https://github.com/alysajad",
  linkedin: "https://www.linkedin.com/in/sajad-hussain-malla-983854274/",
  website: "https://sajadhussain.tech",
};

export const projects = [
  {
    id: "utrust", number: "01", title: "UTrust Platform", subtitle: "Nippon Toyota · UTrust Used Cars Division",
    type: "Production · Internship", status: "Active", year: "Jul 2026 to Present",
    description: "Built internal procurement & inventory tooling for UTrust, reducing valuation-to-listing TAT by 30% via AI-assisted modules, directly driving a 20% uplift in used-car sales. Migrated records dating to 2014 from siloed legacy systems into a centralised PostgreSQL DB. Delivered a Next.js / FastAPI multi-cluster dealer platform across 4 clusters with AI valuation, RC/Vahan verification, and real-time bidding.",
    stack: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Redis", "SQLAlchemy", "Docker", "AI Valuation"],
  },
  {
    id: "makeaton", number: "02", title: "Make-a-ton 8.0", subtitle: "Hackathon Management Platform",
    type: "Hackathon · Full-Stack", status: "Shipped", year: "2025",
    description: "Full-stack event dashboard with role-based auth, live Supabase Realtime subscriptions, three-stage checkpoint progression, mentorship request queue, and a multi-criteria judge scoring engine across 6 rubrics.",
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    note: "Won Make-a-ton 7.0 (MLH) previously; organised Make-a-ton 8.0 as Team Lead.",
    url: "https://dashboard.makeaton.in/",
  },
  {
    id: "bug-bounty", number: "03", title: "Bug Bounty Hunter", subtitle: "AI Security Analyst Platform",
    type: "AI · Security", status: "Complete", year: "Dec 2025",
    description: "Backend platform exposing Python REST APIs; Gemini LLM agent detects SQLi, XSS, and business logic flaws via deterministic + AI-driven analysis. Agentic pipelines handle subdomain discovery and endpoint mapping; real-time progress streamed via SSE. PoC Generator outputs validated curl/Python exploit scripts.",
    stack: ["Python", "FastAPI", "Gemini API", "SSE", "Agentic Architecture"],
    url: "https://bughunter-yamg.onrender.com",
  },
  {
    id: "argus", number: "04", title: "ARGUS", subtitle: "Real-Time PPE Detection System",
    type: "Computer Vision · Django", status: "Complete", year: "Feb 2024",
    description: "Real-time object detection backend in Python (YOLOv8) for safety-gear violation detection. Integrated Django REST API with a live alert notification system. Demo approved by BPCL and HP at Dhishna Tech Fest.",
    stack: ["Python", "YOLOv8", "Roboflow", "Django REST", "Computer Vision"],
    note: "Demo approved by BPCL and HP at Dhishna Tech Fest.",
  },
  {
    id: "databot", number: "05", title: "DataBot", subtitle: "Natural Language Database Access",
    type: "AI · Backend", status: "Complete", year: "2024",
    description: "Python backend that translates natural language prompts into validated SQL queries via Gemini LLM, executes them against a MySQL database using SQLAlchemy ORM, and returns structured JSON responses via a Flask REST API.",
    stack: ["Python", "SQLAlchemy", "Gemini API", "Flask", "MySQL"],
  },
  {
    id: "siem", number: "06", title: "Local SIEM Lab", subtitle: "SIEM & Penetration Testing Lab",
    type: "Security · Infrastructure", status: "Complete", year: "2024",
    description: "Automated log ingestion and alert parsing using Python scripts on top of Wazuh SIEM; set up traffic capture and analysis pipelines for DNS, TCP/IP, and HTTP on locally deployed vulnerable machines.",
    stack: ["Python", "Wazuh", "Wireshark", "Kali Linux", "Nmap"],
  },
];

export const skills = [
  { title: "Languages & Frameworks", items: ["Python", "C", "C++", "SQL", "TypeScript", "Django", "Flask", "FastAPI", "RESTful APIs"] },
  { title: "Data & Databases", items: ["MySQL", "MongoDB", "Redis", "PostgreSQL", "SQLAlchemy", "Schema Design", "Query Optimisation"] },
  { title: "AI & Agentic Tools", items: ["Gemini API", "Claude (Anthropic)", "OpenAI-compatible LLMs", "MCPs", "SSE", "YOLOv8", "Agentic Micro-architectures"] },
  { title: "DevOps & Tools", items: ["Docker", "Git", "CI/CD", "Linux (Kali)", "Linux (Ubuntu)"] },
  { title: "Security", items: ["Wazuh SIEM", "Wireshark", "Nmap", "Metasploit", "Nessus", "OpenVAS", "Penetration Testing"] },
  { title: "Frontend", items: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Realtime"] },
];

export const experience = [
  { date: "JUL 2026", end: "PRESENT", role: "Software Engineer Intern", company: "Nippon Toyota Pvt. Ltd. · UTrust Used Cars Division", location: "Kochi", active: true,
    bullets: ["Built internal procurement & inventory tooling for the UTrust platform, reducing valuation-to-listing TAT by 30% via AI-assisted modules, directly driving a 20% uplift in used-car sales.", "Migrated records dating to 2014 from siloed legacy systems into a centralised PostgreSQL DB.", "Delivered a Next.js / FastAPI multi-cluster dealer platform (4 clusters) with AI valuation, RC/Vahan verification, and real-time bidding."] },
  { date: "MAY 2025", end: "JUL 2025", role: "Cybersecurity Analyst Intern", company: "ElevateLabs", location: "Remote",
    bullets: ["Automated Nessus/OpenVAS scan reporting into risk-tiered CVE schemas; captured live traffic (Wireshark, tcpdump) to detect TCP/DNS/HTTP anomalies.", "Ran full pentest lifecycle (recon, enumeration, exploitation) on Kali Linux.", "Authored a SOC playbook covering password policy, entropy analysis, and incident response procedures."] },
  { date: "DEC 2024", end: "PRESENT", role: "Tech Lead", company: "ACES · Assoc. of Computer Engineering Students, CUSAT", location: "Kochi", active: true,
    bullets: ["Organised cybersecurity workshops, coding bootcamps, and competitive programming events for 200+ CS students.", "Managed lab setups and technical resources for departmental hackathons."] },
  { date: "MAY 2024", end: "", role: "Open Source Contributor", company: "Social Summer of Code · ULSA", location: "Remote",
    bullets: ["Fixed memory allocation bugs in C/C++ projects; collaborated with international developers."] },
  { date: "FEB 2024", end: "", role: "Team Lead · Tech Fest Dhishna", company: "CUSAT", location: "Kochi",
    bullets: ["Led organisation of one of the largest inter-college tech events in Kerala."] },
  { date: "JUN 2023", end: "PRESENT", role: "B.Tech CSE", company: "Cochin University of Science and Technology (CUSAT)", location: "Kochi",
    bullets: ["GPA: 8.1"] },
];

export const certifications = [
  { name: "Google Cybersecurity Analyst Certificate", issuer: "Coursera · SIEM, SOC tools, Network Security" },
  { name: "IT Security: Defense Against the Digital Dark Arts", issuer: "Coursera · Google" },
  { name: "Certified Cybersecurity Educator Professional", issuer: "CCEP · Red Team Leaders" },
  { name: "Forage Job Simulations", issuer: "Tata Group, Visa, AIG, Datacom, Air India" },
  { name: "IEDC Innovation & Design Bootcamp", issuer: "Phase II" },
];

export const pursuing = [
  { name: "Certified Ethical Hacker", issuer: "CEH" },
  { name: "SAL1", issuer: "TryHackMe" },
];

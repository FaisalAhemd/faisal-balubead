import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Mail, Phone, Linkedin, ArrowRight, Calendar, Briefcase, BarChart2, Code2, Download, Shield, Database, Settings } from "lucide-react"
import { SiPython, SiMysql } from "react-icons/si"

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-accent selection:text-accent-foreground">
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section id="home" className="relative min-h-screen flex items-center pt-20 pb-12 px-6 md:px-12 lg:px-24">
          <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
               style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '32px 32px' }}>
          </div>

          <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="order-2 lg:order-1 flex flex-col items-start text-left"
            >
              <motion.div variants={fadeInUp} className="inline-block px-3 py-1 mb-6 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium tracking-wide">
                Saudi Arabia
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold font-serif leading-tight mb-4 text-primary dark:text-foreground">
                Faisal<br />Balubead<span className="text-accent">.</span>
              </motion.h1>
              <motion.div variants={fadeInUp} className="h-1 w-20 bg-accent mb-6 rounded-full"></motion.div>
              <motion.h2 variants={fadeInUp} className="text-xl md:text-2xl font-light text-muted-foreground mb-8">
                IT Service Management Specialist & BI Analyst
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-base md:text-lg text-foreground/80 max-w-lg mb-10 leading-relaxed">
                Bridging enterprise IT infrastructure and business intelligence — optimizing ITSM workflows, configuring CMDB, managing ITAM lifecycles, and delivering Power BI insights aligned with ITIL 4 frameworks.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <a href="#contact" className="px-8 py-3.5 bg-primary text-primary-foreground dark:bg-accent dark:text-accent-foreground font-medium rounded-md hover:opacity-90 transition-opacity flex items-center gap-2">
                  Get in Touch <ArrowRight size={18} />
                </a>
                <a href="#projects" className="px-8 py-3.5 bg-secondary text-secondary-foreground font-medium rounded-md hover:bg-secondary/80 transition-colors">
                  View Work
                </a>
                <a
                  href={`${import.meta.env.BASE_URL}Faisal-Balubead-CV.pdf`}
                  download="Faisal-Balubead-CV.pdf"
                  className="px-8 py-3.5 border border-accent/40 text-accent font-medium rounded-md hover:bg-accent/10 transition-colors flex items-center gap-2"
                >
                  <Download size={18} /> Resume
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="order-1 lg:order-2 flex justify-center lg:justify-end"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem]">
                <div className="absolute inset-0 rounded-full border-2 border-accent/30 translate-x-4 translate-y-4"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/20 to-transparent"></div>
                <img
                  src={`${import.meta.env.BASE_URL}profile.jpeg`}
                  alt="Faisal Balubead"
                  className="absolute inset-0 w-full h-full object-cover rounded-full shadow-2xl z-10 border-4 border-background"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 px-6 md:px-12 bg-secondary/30">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-primary dark:text-foreground">Professional Summary</h2>
              <div className="h-1 w-12 bg-accent mx-auto rounded-full"></div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-card border border-border p-8 md:p-12 rounded-xl shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
              <p className="text-lg md:text-xl leading-relaxed text-card-foreground/90 font-light">
                <strong className="font-semibold text-primary dark:text-foreground">Results-driven Computer Science graduate</strong> with strong expertise in IT Service Management (ITSM), Business Intelligence (BI), and IT Operations. Proven track record in optimizing enterprise IT workflows, configuring <strong className="text-accent">Configuration Management Databases (CMDB)</strong>, and managing IT Asset Management (ITAM) lifecycles aligned with <strong className="text-accent">ITIL 4 frameworks</strong>. Skilled in leveraging Power BI, SQL, and data governance to monitor SLAs, automate KPI reporting, and deliver actionable insights for executive leadership.
              </p>
            </motion.div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-24 px-6 md:px-12">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-primary dark:text-foreground">Experience</h2>
              <div className="h-1 w-12 bg-accent rounded-full"></div>
            </motion.div>

            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-border before:via-accent/50 before:to-transparent">

              {/* Perfect Presentation (2P) */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-accent text-accent-foreground shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10 ml-0 md:ml-0">
                  <Briefcase size={16} />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card border border-border p-6 rounded-xl shadow-sm ml-4 md:ml-0">
                  <div className="flex flex-col mb-4">
                    <h3 className="font-bold text-xl text-primary dark:text-foreground">Service Delivery Officer (Tamheer)</h3>
                    <span className="text-accent font-medium mt-1">Perfect Presentation (2P)</span>
                    <span className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                      <Calendar size={14} /> Feb 2026 – Present &nbsp;·&nbsp; Madinah, Saudi Arabia
                    </span>
                  </div>
                  <ul className="space-y-3 text-sm text-card-foreground/80">
                    <li><strong className="text-foreground/90">IT Infrastructure & CMDB Management:</strong> Led end-to-end discovery, auditing, and structured reconciliation of 1,000+ enterprise IT assets, establishing a centralized CMDB across client projects.</li>
                    <li><strong className="text-foreground/90">Process Digitalization & Efficiency:</strong> Digitalized asset tracking workflows, improving data accuracy by 35%, eliminating operational discrepancies, and reducing device lifecycle processing time by 20%.</li>
                    <li><strong className="text-foreground/90">IT Operations & SLA Management:</strong> Developed dynamic executive Power BI dashboards to track core ITSM KPIs (incidents, service requests, change requests), maintaining 98%+ SLA compliance.</li>
                    <li><strong className="text-foreground/90">User Support & Deployment:</strong> Oversaw hardware replacement initiatives for 300+ users, ensuring seamless allocation, deployment, and documentation.</li>
                    <li><strong className="text-foreground/90">Data-Driven Service Delivery:</strong> Generated weekly and monthly executive reports using key performance metrics, reducing average incident resolution time by 15%.</li>
                  </ul>
                </div>
              </motion.div>

              {/* Madinah Development Authority */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-secondary text-secondary-foreground shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10 ml-0 md:ml-0">
                  <Briefcase size={16} />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card/50 border border-border p-6 rounded-xl ml-4 md:ml-0">
                  <div className="flex flex-col mb-4">
                    <h3 className="font-bold text-xl text-primary dark:text-foreground">Data Analyst (Project Contract)</h3>
                    <span className="text-muted-foreground font-medium mt-1">Madinah Development Authority</span>
                    <span className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                      <Calendar size={14} /> Jan 2025 – Jan 2026 &nbsp;·&nbsp; Madinah, Saudi Arabia
                    </span>
                  </div>
                  <ul className="space-y-3 text-sm text-card-foreground/80">
                    <li><strong className="text-foreground/90">Strategic Risk & Data Analysis:</strong> Conducted comprehensive data analysis and risk assessments on complex government datasets for strategic decision support.</li>
                    <li><strong className="text-foreground/90">Requirements & Systems Alignment:</strong> Collaborated with cross-functional IT and business teams to define project requirements, aligning technical capabilities with organizational goals.</li>
                    <li><strong className="text-foreground/90">Executive Decision Support:</strong> Engineered interactive Power BI dashboards and predictive models, translating complex technical metrics into strategic recommendations for leadership.</li>
                  </ul>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* TECHNICAL PROJECTS SECTION */}
        <section id="projects" className="py-24 px-6 md:px-12 bg-secondary/30">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-primary dark:text-foreground">Key IT Projects</h2>
              <div className="h-1 w-12 bg-accent rounded-full mb-4"></div>
              <p className="text-muted-foreground">Enterprise Managed IT Services — Perfect Presentation (2P)</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Taibah University */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-card border border-border rounded-xl shadow-sm overflow-hidden hover:shadow-md hover:border-accent/30 transition-all"
              >
                <div className="bg-primary dark:bg-muted p-6 flex items-center gap-3 text-primary-foreground dark:text-foreground">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <Database size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-accent font-bold tracking-widest uppercase mb-1">University Project</div>
                    <h3 className="font-bold text-lg leading-tight">Taibah University Managed IT Services</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 text-sm text-card-foreground/80">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0"></span>
                      Spearheaded end-to-end IT asset discovery and CMDB configuration across university-wide IT infrastructure, establishing automated Configuration Item (CI) relationships.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0"></span>
                      Streamlined Incident, Change, and Request Management workflows, reducing operational friction across university IT operations.
                    </li>
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {["CMDB", "ITSM", "CI Relationships", "Workflow Optimization"].map(tag => (
                      <span key={tag} className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Madinah Municipality */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-card border border-border rounded-xl shadow-sm overflow-hidden hover:shadow-md hover:border-accent/30 transition-all"
              >
                <div className="bg-primary dark:bg-muted p-6 flex items-center gap-3 text-primary-foreground dark:text-foreground">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <BarChart2 size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-accent font-bold tracking-widest uppercase mb-1">Government Project</div>
                    <h3 className="font-bold text-lg leading-tight">Madinah Region Municipality IT Services</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 text-sm text-card-foreground/80">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0"></span>
                      Managed hardware exchange and asset registration for municipal operations, improving allocation log accuracy by 25%.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0"></span>
                      Analyzed service desk operational data to generate key performance metrics and sustain high SLA compliance standards.
                    </li>
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {["Asset Inventory", "Data Reconciliation", "SLA Analytics", "KPI Reporting"].map(tag => (
                      <span key={tag} className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Graduation Project */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="grid md:grid-cols-5 gap-0 rounded-2xl overflow-hidden shadow-xl border border-border bg-card"
            >
              <div className="md:col-span-2 bg-primary dark:bg-muted p-8 md:p-12 flex flex-col justify-center text-primary-foreground dark:text-foreground relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <SiMysql size={120} />
                </div>
                <div className="relative z-10">
                  <div className="text-accent text-sm font-bold tracking-widest uppercase mb-2">Graduation Project</div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">Surgical Operations Management System (SOMS)</h3>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className="px-3 py-1 bg-white/10 dark:bg-background/50 rounded-full text-xs">PHP</span>
                    <span className="px-3 py-1 bg-white/10 dark:bg-background/50 rounded-full text-xs">Python</span>
                    <span className="px-3 py-1 bg-white/10 dark:bg-background/50 rounded-full text-xs">SQL</span>
                    <span className="px-3 py-1 bg-white/10 dark:bg-background/50 rounded-full text-xs">UML</span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-3 p-8 md:p-12">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-primary dark:text-foreground flex items-center gap-2 mb-2">
                      <div className="w-8 h-px bg-accent"></div> Systems Analysis
                    </h4>
                    <p className="text-card-foreground/80 text-sm md:text-base leading-relaxed">
                      Conducted full lifecycle analysis including functional/non-functional requirements and UML design (Class & Sequence diagrams).
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary dark:text-foreground flex items-center gap-2 mb-2">
                      <div className="w-8 h-px bg-accent"></div> Full-Stack Development
                    </h4>
                    <p className="text-card-foreground/80 text-sm md:text-base leading-relaxed">
                      Built a robust system using PHP, Python, HTML, CSS, and JavaScript with strict Role-Based Access Control (RBAC) for security.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary dark:text-foreground flex items-center gap-2 mb-2">
                      <div className="w-8 h-px bg-accent"></div> Data & BI
                    </h4>
                    <p className="text-card-foreground/80 text-sm md:text-base leading-relaxed">
                      Designed a relational SQL database and developed an integrated dashboard providing dynamic charts for deep operational insights.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-24 px-6 md:px-12">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-primary dark:text-foreground">Technical Skills</h2>
              <div className="h-1 w-12 bg-accent mx-auto rounded-full mb-6"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">Core competencies across ITSM, asset management, business intelligence, and technical proficiency.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "ITSM & Tools",
                  skills: ["ITIL 4 Framework", "CMDB Configuration", "IT Asset Management (ITAM)", "Service Desk Operations", "SLA Tracking", "Incident / Change Management", "iTop", "Ivanti", "PRTG"],
                  icon: <Shield className="text-accent mb-4" size={32} />
                },
                {
                  title: "Business Intelligence & Data",
                  skills: ["Power BI", "DAX & Power Query", "Data Modeling", "Advanced Excel", "SQL & SQL Server", "ETL Pipelines", "Data Governance", "Predictive Analytics"],
                  icon: <BarChart2 className="text-[#F2C811] mb-4" size={32} />
                },
                {
                  title: "Programming & Web",
                  skills: ["Python (Data Analysis)", "HTML & CSS", "JavaScript", "PHP"],
                  icon: <Code2 className="text-accent mb-4" size={32} />
                },
                {
                  title: "Productivity & Collaboration",
                  skills: ["Microsoft Office Suite", "Executive Reporting", "Stakeholder Management", "Cross-Functional Collaboration", "Technical Process Improvement"],
                  icon: <Settings className="text-accent mb-4" size={32} />
                }
              ].map((category, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="bg-card border border-border p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  {category.icon}
                  <h3 className="font-bold text-lg mb-4 text-primary dark:text-foreground">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="text-sm text-card-foreground/80 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Highlights Bar */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mt-12 py-6 px-8 bg-primary dark:bg-card border dark:border-border rounded-xl flex flex-wrap justify-center gap-8 md:gap-12 text-primary-foreground dark:text-foreground shadow-lg"
            >
              {['Power BI', 'SQL', 'CMDB / ITAM', 'ITIL 4', 'iTop · Ivanti'].map((tool, idx) => (
                <div key={idx} className="flex items-center gap-2 font-medium tracking-wide">
                  <span className="text-accent text-xl">✦</span> {tool}
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* EDUCATION & CERTIFICATIONS */}
        <section id="education" className="py-24 px-6 md:px-12 bg-secondary/30">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-16">

              {/* Education */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h2 className="text-3xl font-bold font-serif mb-4 text-primary dark:text-foreground">Education</h2>
                <div className="h-1 w-12 bg-accent rounded-full mb-10"></div>

                <div className="bg-card border border-border p-8 rounded-xl shadow-sm relative">
                  <div className="absolute top-0 right-0 p-4">
                    <span className="inline-flex items-center justify-center px-3 py-1 text-xs font-bold bg-accent/10 text-accent rounded-full border border-accent/20">GPA: 3.86/4.00</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary dark:text-foreground mb-1">Bachelor of Computer Science</h3>
                  <div className="text-accent font-medium mb-4">First Class Honours</div>

                  <div className="text-card-foreground/80 mb-2 font-medium">Umm Al-Qura University</div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={14} /> Jun 2020 – Jun 2024
                  </div>
                </div>
              </motion.div>

              {/* Certifications */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h2 className="text-3xl font-bold font-serif mb-4 text-primary dark:text-foreground">Certifications</h2>
                <div className="h-1 w-12 bg-accent rounded-full mb-10"></div>

                <div className="space-y-4">
                  {[
                    { name: "ITIL® 4 Foundation — IT Service Management", org: "Axelos · Expected 2026", status: "In Progress" },
                    { name: "Data Analysis Using Power BI", org: "Tuwaiq Academy", status: "Completed" },
                    { name: "SQL for Business Analysis", org: "Udemy", status: "Completed" },
                    { name: "Angular Development", org: "Tuwaiq Academy", status: "Completed" }
                  ].map((cert, idx) => (
                    <div key={idx} className="bg-card border border-border p-5 rounded-xl flex items-center justify-between group hover:border-accent/50 transition-colors">
                      <div>
                        <h4 className="font-bold text-primary dark:text-foreground text-sm md:text-base">{cert.name}</h4>
                        <div className="text-sm text-muted-foreground mt-1">{cert.org}</div>
                      </div>
                      {cert.status === "In Progress" ? (
                        <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-md shrink-0 ml-4">In Progress</span>
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-accent shrink-0 ml-4 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 px-6 md:px-12 bg-primary dark:bg-background text-primary-foreground dark:text-foreground border-t border-border">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">Let's Connect</h2>
              <p className="text-primary-foreground/80 dark:text-foreground/80 text-lg mb-12 max-w-2xl mx-auto font-light">
                Open to opportunities in IT Service Management, Business Intelligence, and IT Operations. Whether you have a question or a project in mind, my inbox is always open.
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                <a
                  href="mailto:faisalbalubead@gmail.com"
                  className="flex items-center gap-3 text-lg hover:text-accent transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 dark:bg-card border border-white/10 dark:border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-primary transition-all">
                    <Mail size={20} />
                  </div>
                  faisalbalubead@gmail.com
                </a>

                <a
                  href="tel:+966504962852"
                  className="flex items-center gap-3 text-lg hover:text-accent transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 dark:bg-card border border-white/10 dark:border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-primary transition-all">
                    <Phone size={20} />
                  </div>
                  +966504962852
                </a>
              </div>

              <div className="mt-16 pt-8 border-t border-white/10 dark:border-border flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="font-serif font-bold text-xl tracking-wider">FB<span className="text-accent">.</span></div>

                <a
                  href={`${import.meta.env.BASE_URL}Faisal-Balubead-CV.pdf`}
                  download="Faisal-Balubead-CV.pdf"
                  className="flex items-center gap-2 text-sm uppercase tracking-widest hover:text-accent transition-colors"
                >
                  <Download size={16} /> Download CV
                </a>

                <a
                  href="https://www.linkedin.com/in/faisal-balubead-3b30b4217"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm uppercase tracking-widest hover:text-accent transition-colors"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}

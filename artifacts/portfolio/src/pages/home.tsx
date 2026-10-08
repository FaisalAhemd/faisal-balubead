import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Mail, Phone, Linkedin, ArrowRight, Calendar, Briefcase, BarChart2, Code2, Download, Shield, Database, Settings } from "lucide-react"
import { translatePortfolioText, type PortfolioLanguage } from "@/lib/portfolio-translations"

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
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
  const [language, setLanguage] = useState<PortfolioLanguage>(() => {
    if (typeof window === "undefined") return "en"
    return window.localStorage.getItem("portfolio-language") === "ar" ? "ar" : "en"
  })
  const t = (text: string) => translatePortfolioText(text, language)

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
    window.localStorage.setItem("portfolio-language", language)
    const title = language === "ar"
      ? "فيصل بالعبيد — أخصائي عمليات تقنية المعلومات"
      : "Faisal Balubead — IT Operations Portfolio"
    const description = language === "ar"
      ? "فيصل بالعبيد، أخصائي عمليات تقنية المعلومات والدعم الفني في المدينة المنورة. خبرة في دعم تقنية المعلومات والبنية التحتية وإدارة الخدمات."
      : "Faisal Balubead — IT Operations Specialist and Technical Support professional in Madinah, Saudi Arabia. Experienced in IT support, infrastructure, and service operations."
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute("content", description)
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title)
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description)
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", title)
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", description)
  }, [language])

  return (
    <div dir={language === "ar" ? "rtl" : "ltr"} className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-accent selection:text-accent-foreground">
      <Navbar language={language} onLanguageChange={() => setLanguage(language === "ar" ? "en" : "ar")} />

      <main data-build-release="it-operations-cv-2.0-bilingual">
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
              className={`hero-copy order-2 lg:order-1 flex flex-col ${language === "ar" ? "items-end text-right" : "items-start text-left"}`}
            >
              <motion.div variants={fadeInUp} className="inline-block px-3 py-1 mb-6 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium tracking-wide">
                {t("Saudi Arabia")}
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold font-serif leading-tight mb-4 text-primary dark:text-foreground">
                {language === "ar" ? <>فيصل<br />بالعبيد<span className="text-accent">.</span></> : <>Faisal<br />Balubead<span className="text-accent">.</span></>}
              </motion.h1>
              <motion.div variants={fadeInUp} className="h-1 w-20 bg-accent mb-6 rounded-full"></motion.div>
              <motion.h2 variants={fadeInUp} className="text-xl md:text-2xl font-light text-muted-foreground mb-8">
                {t("IT Operations Specialist | Technical Support")}
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-base md:text-lg text-foreground/80 max-w-lg mb-10 leading-relaxed">
                {t("I support end users, keep enterprise systems reliable, manage IT assets, and use operational reporting to improve service delivery.")}
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <a href="#contact" className="px-8 py-3.5 bg-primary text-primary-foreground dark:bg-accent dark:text-accent-foreground font-medium rounded-md hover:opacity-90 transition-opacity flex items-center gap-2">
                  {t("Get in Touch")} <ArrowRight size={18} />
                </a>
                <a href="#projects" className="px-8 py-3.5 bg-secondary text-secondary-foreground font-medium rounded-md hover:bg-secondary/80 transition-colors">
                  {t("View Work")}
                </a>
                <a
                  href={`${import.meta.env.BASE_URL}Faisal-Balubead-Resume-IT-Operations-2.0.pdf`}
                  download="Faisal-Balubead-Resume-IT-Operations-2.0.pdf"
                  className="px-8 py-3.5 border border-accent/40 text-accent font-medium rounded-md hover:bg-accent/10 transition-colors flex items-center gap-2"
                >
                  <Download size={18} /> {t("Resume")}
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
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-primary dark:text-foreground">{t("Professional Summary")}</h2>
              <div className="h-1 w-12 bg-accent mx-auto rounded-full"></div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-card border border-border p-8 md:p-12 rounded-xl shadow-sm relative overflow-hidden"
            >
              <div className="summary-accent absolute top-0 left-0 w-1 h-full bg-accent"></div>
              <p className="text-lg md:text-xl leading-relaxed text-card-foreground/90 font-light">
                {t("Results-driven Computer Science graduate (First Class Honours) and certified ITIL® 4 Foundation professional. Hands-on experience in L1/L2 technical support, Active Directory administration, Windows Server management, and IT Infrastructure operations. Proven track record in supporting 300+ end-users, managing 1,000+ IT assets (CMDB/ITAM), and maintaining a 98%+ SLA resolution rate. Skilled in hardware/software troubleshooting, basic network connectivity, and leveraging Power BI for operational IT reporting.")}
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
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-primary dark:text-foreground">{t("Experience")}</h2>
              <div className="h-1 w-12 bg-accent rounded-full"></div>
            </motion.div>

            <div className="experience-timeline space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-border before:via-accent/50 before:to-transparent">

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
                <div className="experience-card w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card border border-border p-6 rounded-xl shadow-sm ml-4 md:ml-0">
                  <div className="flex flex-col mb-4">
                    <h3 className="font-bold text-xl text-primary dark:text-foreground">{t("Service Delivery Officer (Tamheer)")}</h3>
                    <span className="text-accent font-medium mt-1">{t("Perfect Presentation (2P)")}</span>
                    <span className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                      <Calendar size={14} /> {t("Feb 2026 – Aug 2026 · Madinah, Saudi Arabia")}
                    </span>
                  </div>
                  <ul className="space-y-3 text-sm text-card-foreground/80">
                    <li><strong className="text-foreground/90">{t("IT Infrastructure & Asset Management")}:</strong> {t("Led the end-to-end discovery, auditing, and physical reconciliation of 1,000+ enterprise IT assets across client projects, building a centralized CMDB and ensuring system availability.")}</li>
                    <li><strong className="text-foreground/90">{t("Technical Support & Hardware Rollout")}:</strong> {t("Executed hardware replacement and equipment setup initiatives for 300+ end-users, providing hands-on L1/L2 deployment, software configuration, and documentation compliant with standard procedures.")}</li>
                    <li><strong className="text-foreground/90">{t("IT Operations & SLA Management")}:</strong> {t("Developed dynamic executive Power BI dashboards to track core ITSM KPIs (incidents, service requests, change requests), helping maintain a 98%+ SLA compliance rate.")}</li>
                    <li><strong className="text-foreground/90">{t("Service Support Optimization")}:</strong> {t("Analyzed service desk incident logs and user requests to identify operational bottlenecks, streamlining support workflows and reducing average incident resolution time by 15%.")}</li>
                    <li><strong className="text-foreground/90">{t("Data-Driven Executive Reporting")}:</strong> {t("Engineered weekly and monthly IT performance reports for leadership using key ITSM metrics, enabling data-informed decision-making and continuous service delivery tracking.")}</li>
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
                <div className="experience-card w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card/50 border border-border p-6 rounded-xl ml-4 md:ml-0">
                  <div className="flex flex-col mb-4">
                    <h3 className="font-bold text-xl text-primary dark:text-foreground">{t("Data Analyst (Project Contract)")}</h3>
                    <span className="text-muted-foreground font-medium mt-1">{t("Madinah Development Authority")}</span>
                    <span className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                      <Calendar size={14} /> {t("Jan 2025 – Jan 2026 · Madinah, Saudi Arabia")}
                    </span>
                  </div>
                  <ul className="space-y-3 text-sm text-card-foreground/80">
                    <li><strong className="text-foreground/90">{t("Strategic Risk & Data Analysis")}:</strong> {t("Conducted comprehensive data analysis and risk assessments on 10+ complex government datasets, mitigating operational risks and optimizing decision-making processes by 20%.")}</li>
                    <li><strong className="text-foreground/90">{t("Requirements & Systems Alignment")}:</strong> {t("Collaborated with cross-functional IT and business teams to define project requirements, aligning technical capabilities with organizational goals.")}</li>
                    <li><strong className="text-foreground/90">{t("Executive Decision Support")}:</strong> {t("Engineered interactive Power BI dashboards and predictive models, translating complex technical metrics into strategic recommendations for leadership.")}</li>
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
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-primary dark:text-foreground">{t("Key IT Projects & Managed Services")}</h2>
              <div className="h-1 w-12 bg-accent rounded-full mb-4"></div>
              <p className="text-muted-foreground">{t("Enterprise Managed IT Services — Perfect Presentation (2P)")}</p>
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
                    <div className="text-xs text-accent font-bold tracking-widest uppercase mb-1">{t("University Project")}</div>
                    <h3 className="font-bold text-lg leading-tight">{t("Taibah University Managed IT Services")}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 text-sm text-card-foreground/80">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0"></span>
                      {t("Spearheaded end-to-end IT asset discovery and CMDB configuration for 1,000+ CIs across 15+ university departments, establishing automated asset relationships and reducing manual tracking discrepancies by 30%.")}
                    </li>
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {["CMDB", "ITSM", "CI Relationships", "Workflow Optimization"].map(tag => (
                      <span key={tag} className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">{t(tag)}</span>
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
                    <div className="text-xs text-accent font-bold tracking-widest uppercase mb-1">{t("Government Project")}</div>
                    <h3 className="font-bold text-lg leading-tight">{t("Madinah Region Municipality Managed IT Services")}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 text-sm text-card-foreground/80">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0"></span>
                      {t("Managed end-user hardware replacement, equipment exchange, and asset registration for municipal operations, improving log accuracy by 25%, while monitoring service desk ticketing data to sustain high SLA compliance.")}
                    </li>
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {["Hardware Exchange", "Asset Registration", "25% Log Accuracy", "SLA Monitoring"].map(tag => (
                      <span key={tag} className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">{t(tag)}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

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
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-primary dark:text-foreground">{t("Technical Skills")}</h2>
              <div className="h-1 w-12 bg-accent mx-auto rounded-full mb-6"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">{t("Core competencies across IT support, infrastructure operations, and technical reporting.")}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Core IT Specialist & Technical Support",
                  skills: ["L1/L2 Technical Support", "Hardware Deployment & Rollout", "System & Peripheral Troubleshooting", "Windows 10/11 OS Administration", "User & Access Management (Active Directory Concepts, Password Resets)", "Software Installation", "Printers & Peripherals", "Network & Connectivity Basics (LAN, WAN, TCP/IP, DNS, DHCP, VPN Support)", "Backup & System Recovery"],
                  icon: <Shield className="text-accent mb-4" size={32} />
                },
                {
                  title: "ITSM & Infrastructure Operations",
                  skills: ["ITIL® 4 Framework", "Configuration Management Database (CMDB)", "IT Asset Management (ITAM)", "Service Desk Operations", "Ticket & Incident Management", "Change Management", "SLA Compliance & Tracking", "Configuration Items (CIs)", "Asset Lifecycle Management", "Service Desk Tools (iTop, Ivanti, PRTG)"],
                  icon: <BarChart2 className="text-[#F2C811] mb-4" size={32} />
                },
                {
                  title: "Systems, Data & Reporting",
                  skills: ["Windows Server Basics (2019/2022 - AZ-800 Lab)", "Power BI", "DAX", "Power Query", "Data Modeling", "Advanced Excel", "SQL", "SQL Server", "Operational Dashboards", "KPI Reporting", "Technical Documentation"],
                  icon: <Code2 className="text-accent mb-4" size={32} />
                },
                {
                  title: "Programming & Tools",
                  skills: ["Python (Data Analysis)", "HTML", "CSS", "JavaScript", "PHP", "Microsoft Office Suite"],
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
                  <h3 className="font-bold text-lg mb-4 text-primary dark:text-foreground">{t(category.title)}</h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="text-sm text-card-foreground/80 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0"></span>
                          {t(skill)}
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
              {['L1/L2 Support', 'Windows 10/11', 'CMDB / ITAM', 'ITIL 4', 'Power BI'].map((tool, idx) => (
                <div key={idx} className="flex items-center gap-2 font-medium tracking-wide">
                  <span className="text-accent text-xl">✦</span> {t(tool)}
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
                <h2 className="text-3xl font-bold font-serif mb-4 text-primary dark:text-foreground">{t("Education")}</h2>
                <div className="h-1 w-12 bg-accent rounded-full mb-10"></div>

                <div className="bg-card border border-border p-8 rounded-xl shadow-sm relative">
                  <div className="education-gpa absolute top-0 right-0 p-4">
                    <span className="inline-flex items-center justify-center px-3 py-1 text-xs font-bold bg-accent/10 text-accent rounded-full border border-accent/20">{t("GPA: 3.86/4.00")}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary dark:text-foreground mb-1">{t("Bachelor of Computer Science")}</h3>
                  <div className="text-accent font-medium mb-4">{t("First Class Honours")}</div>

                  <div className="text-card-foreground/80 mb-2 font-medium">{t("Umm Al-Qura University")}</div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={14} /> {t("Jun 2020 – Jun 2024")}
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
                <h2 className="text-3xl font-bold font-serif mb-4 text-primary dark:text-foreground">{t("Certifications")}</h2>
                <div className="h-1 w-12 bg-accent rounded-full mb-10"></div>

                <div className="space-y-4">
                  {[
                    { name: "ITIL® 4 Foundation — IT Service Management", org: "PeopleCert · September 2026", status: "Completed", url: "https://drive.google.com/file/d/1F1_YOt-6-wWCiDtihMsYlk6Zzs0SXEG7/view?usp=sharing" },
                    { name: "Freelancing Practitioner Certificate", org: "Ministry of Human Resources and Social Development · Information Technology Systems", date: "Issued 08 October 2026 · Expires 08 October 2027", status: "Completed", url: `${import.meta.env.BASE_URL}Freelancing-Practitioner-Certificate-Redacted.pdf`, linkLabel: "View certificate" },
                    { name: "Windows Server Hybrid Administrator Associate (AZ-800, AZ-801)", org: "In Progress", status: "In Progress" },
                    { name: "Data Analysis Using Power BI", org: "Tawal Academy · February 2026", status: "Completed" },
                    { name: "SQL for Business Analysis", org: "Udemy · December 2025", status: "Completed" },
                    { name: "Angular Development", org: "Tuwaiq Academy · July 2024", status: "Completed" }
                  ].map((cert, idx) => (
                    <div key={idx} className="bg-card border border-border p-5 rounded-xl flex items-center justify-between group hover:border-accent/50 transition-colors">
                      <div>
                        <h4 className="font-bold text-primary dark:text-foreground text-sm md:text-base">{t(cert.name)}</h4>
                        <div className="text-sm text-muted-foreground mt-1">{t(cert.org)}</div>
                        {"date" in cert && cert.date && <div className="text-xs text-muted-foreground mt-1">{t(cert.date)}</div>}
                      </div>
                      <div className="cert-actions flex items-center gap-3 shrink-0 ml-4">
                        {cert.status === "In Progress" ? (
                          <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-md">{t("In Progress")}</span>
                        ) : (
                          <div className="w-2 h-2 rounded-full bg-accent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                        )}
                        {cert.url && (
                          <a
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-medium text-accent underline underline-offset-2 hover:opacity-80"
                          >
                            {t("linkLabel" in cert && cert.linkLabel ? cert.linkLabel : "Preview certificate")}
                          </a>
                        )}
                      </div>
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
              <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">{t("Let's Connect")}</h2>
              <p className="text-primary-foreground/80 dark:text-foreground/80 text-lg mb-12 max-w-2xl mx-auto font-light">
                {t("Open to opportunities in IT Operations and Technical Support. Whether you have a question or a project in mind, my inbox is always open.")}
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
                  href={`${import.meta.env.BASE_URL}Faisal-Balubead-Resume-IT-Operations-2.0.pdf`}
                  download="Faisal-Balubead-Resume-IT-Operations-2.0.pdf"
                  className="flex items-center gap-2 text-sm uppercase tracking-widest hover:text-accent transition-colors"
                >
                  <Download size={16} /> {t("Download CV")}
                </a>

                <a
                  href="https://www.linkedin.com/in/faisal-balubead-3b30b4217"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm uppercase tracking-widest hover:text-accent transition-colors"
                >
                  <Linkedin size={16} /> {t("LinkedIn")}
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}

"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Users, Code } from "lucide-react"

const professionalExperience = [
  {
    role: "Full-Stack Developer",
    company: "Xtrahera Innovations",
    location: "Remote",
    period: "Mar 2025 – Present",
    desc: "Commercial Development: Delivering diverse technical solutions including AILearn (EdTech) and Maya Zaskia (E-Commerce). End-to-End Engineering: Managed the complete software lifecycle, from database architecture (SQL/NoSQL) and API development to live server deployment and maintenance. Data & AI Solutions: Integrated AI Chatbots for educational platforms and implemented scraping pipelines for data-driven clients.",
    icon: <Code className="size-5" />,
  },
  {
    role: "Frontend Developer (Professional Consultation Project)",
    company: "PT Rekayasa Industri (via Xtrahera)",
    location: "Hybrid",
    period: "Mar 2025 – May 2025",
    desc: "Enterprise Solution: Developed \"CoComm,\" a digital approval dashboard to streamline corporate workflows for a major BUMN client. Tech Implementation: Translated Figma prototypes into pixel-perfect responsive interfaces using Laravel (PHP) and Tailwind CSS. Agile Collaboration: Worked in a cross-functional team of 5, facilitating weekly sprints to meet strict industrial deliverables.",
    icon: <Briefcase className="size-5" />,
  },
  {
    role: "IT Staff & Web Developer (Community Service/P2M)",
    company: "Keluarga Mahasiswa Komputer (Kemakom) UPI",
    location: "Indragiri Village",
    period: "Jun 2025 – Aug 2025",
    desc: "Digital Transformation: Spearheaded the digitization of village administration by developing a Resident Data Security System, replacing manual record-keeping. Tourism Promotion: Designed and deployed a tourism profile website to boost local visibility and visitor engagement. Deployment: Managed the full deployment process and conducted user training for village officials.",
    icon: <Briefcase className="size-5" />,
  },
  {
    role: "Practicum Assistant - Database Management System",
    company: "Universitas Pendidikan Indonesia",
    location: "On-site",
    period: "Feb 2025 – Jun 2025",
    desc: "Mentorship: Selected by faculty to lead lab sessions for 70+ undergraduates, teaching Database Design (ERD), Normalization, and Advanced SQL (Stored Procedures, Triggers). Project Supervision: Guided students in integrating MySQL databases with PHP/Web frontends for their final projects. Evaluation: Assessed code efficiency and query optimization, providing personalized feedback to ensure concept mastery.",
    icon: <Briefcase className="size-5" />,
  },
]

const leadershipExperience = [
  {
    role: "Secretary",
    company: "Competitive Programming Club (CPC) UPI",
    period: "Jan 2025 – Jan 2026",
    desc: "Operations Management: Managed member databases and administrative workflows for the university's algorithmic community. Event Coordination: Facilitated programming contests and weekly training sessions, ensuring a conducive learning environment. Communication: Designed visual assets and managed internal broadcasts to disseminate information effectively.",
    icon: <Users className="size-5" />,
  },
  {
    role: "Head of Opening & Closing Subdivision",
    company: "Dinamik 20 (Dies Natalis KEMAKOM UPI)",
    period: "Jun 2025 – Dec 2025",
    desc: "Show Director: Orchestrated the grand opening and closing ceremonies for the department's largest annual event. Team Leadership: Led a specialized team to manage stage flow, talent coordination, and technical requirements. Concept Development: Developed the artistic direction for the ceremonies aligned with the event's grand theme.",
    icon: <Users className="size-5" />,
  },
  {
    role: "Graphic Design Staff",
    company: "Dinamik 19 (Dies Natalis KEMAKOM UPI)",
    period: "Jul 2024 – Dec 2024",
    desc: "Visual Identity: Contributed to the event's visual branding under the theme \"Unleash Talent Toward Excellent\". Asset Creation: Designed social media feeds and large-scale print materials (banners/backdrops).",
    icon: <Users className="size-5" />,
  },
  {
    role: "General Treasurer",
    company: "A-Storia Inauguration 2023",
    period: "Oct 2023 – Nov 2023",
    desc: "Financial Management: Managed the event budget and financial reporting, ensuring transparency and proper allocation of funds.",
    icon: <Users className="size-5" />,
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-foreground/[0.01]">
      <div className="max-w-5xl mx-auto space-y-24">
        {/* Professional Experience */}
        <div className="space-y-16">
          <div className="space-y-4 text-center">
            <div className="inline-flex items-center gap-2 text-primary uppercase tracking-[0.3em] text-xs font-bold">
              <span className="w-12 h-px bg-primary/30" />
              Professional Experience
            </div>
            <h3 className="text-3xl md:text-5xl font-serif text-amber-900 dark:text-amber-50">Industry & Technical Work</h3>
          </div>

          <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-border before:to-transparent">
            {professionalExperience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
                  {exp.icon}
                </div>

                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl glass-panel border-none shadow-xl transition-all hover:scale-[1.02]">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <h4 className="font-serif font-bold text-xl text-slate-800 dark:text-cyan-100">{exp.role}</h4>
                    <Badge variant="outline" className="w-fit bg-primary/5 border-primary/20 text-primary font-bold">
                      {exp.period}
                    </Badge>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                    <p className="font-medium text-foreground/80">{exp.company}</p>
                    {exp.location && <span className="text-xs text-muted-foreground md:before:content-['•'] md:before:mx-2">({exp.location})</span>}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership & Organizational Experience */}
        <div className="space-y-16">
          <div className="space-y-4 text-center">
            <div className="inline-flex items-center gap-2 text-primary uppercase tracking-[0.3em] text-xs font-bold">
              <span className="w-12 h-px bg-primary/30" />
              Leadership & Organizational
            </div>
            <h3 className="text-3xl md:text-5xl font-serif text-amber-900 dark:text-amber-50">Community & Event Leadership</h3>
          </div>

          <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-border before:to-transparent">
            {leadershipExperience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
                  {exp.icon}
                </div>

                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl glass-panel border-none shadow-xl transition-all hover:scale-[1.02]">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <h4 className="font-serif font-bold text-xl text-slate-800 dark:text-cyan-100">{exp.role}</h4>
                    <Badge variant="outline" className="w-fit bg-primary/5 border-primary/20 text-primary font-bold">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="font-medium text-foreground/80 mb-2">{exp.company}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

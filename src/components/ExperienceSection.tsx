import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface RouteStop {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
  technologies?: string[];
}

const journey: RouteStop[] = [
  {
    id: '01',
    year: 'AUG 2025 — PRESENT',
    title: 'DEVOPS ENGINEER',
    organization: 'YUPPTV • HYDERABAD',
    description:
      'Engineering and supporting production OTT infrastructure across cloud and Linux environments — supporting application deployments, automating operational workflows, monitoring system health, troubleshooting production issues, and contributing to reliable and scalable platform operations.',
    technologies: [
      'AWS',
      'LINUX',
      'CI/CD',
      'DOCKER',
      'KUBERNETES',
      'AUTOMATION',
      'MONITORING',
    ],
  },
  {
    id: '02',
    year: 'DEVOPS / CLOUD',
    title: 'CLOUD & DEVOPS PROJECTS',
    organization: 'HANDS-ON ENGINEERING',
    description:
      'Built and worked with cloud infrastructure, containerized applications, CI/CD workflows, deployment automation, and monitoring environments using AWS, Docker, Kubernetes, Jenkins, Terraform, Prometheus, and Grafana.',
    technologies: [
      'AWS',
      'JENKINS',
      'DOCKER',
      'KUBERNETES',
      'TERRAFORM',
      'PROMETHEUS',
      'GRAFANA',
    ],
  },
  {
    id: '03',
    year: '2021 — 2025',
    title: 'B.TECH — ELECTRONICS & COMMUNICATION ENGINEERING',
    organization: 'PRIYADARSHINI INSTITUTE OF TECHNOLOGY AND SCIENCE',
    description:
      'Completed Bachelor of Technology in Electronics and Communication Engineering, building a foundation in engineering, systems, networking, programming, and problem solving.',
    technologies: [
      'ENGINEERING',
      'NETWORKING',
      'PROGRAMMING',
      'SYSTEMS',
    ],
  },
];

export const ExperienceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 90%'],
  });

  const lineHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '100%']
  );

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative z-50 w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-8 pb-28 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Ambient glow */}

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#D4AF37]/[0.035] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-7"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            04 / EXPERIENCE
          </span>

          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* ================= TITLE ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448]">
              EXPERIENCE &
            </span>

            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A]">
              JOURNEY.
            </span>
          </h2>
        </motion.div>

        {/* ================= TIMELINE ================= */}

        <div className="relative w-full">

          {/* Background track */}

          <div className="absolute left-[19px] md:left-[140px] top-4 bottom-8 w-[1px] bg-[#8C6D4F]/20" />

          {/* Animated gold track */}

          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[19px] md:left-[140px] top-4 w-[2px] bg-gradient-to-b from-[#D4AF37] via-[#C99E5D] to-[#8C6D4F]/10 shadow-[0_0_10px_#D4AF37] origin-top"
          />

          <div className="space-y-16">

            {journey.map((stop, idx) => (
              <motion.div
                key={stop.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{
                  once: true,
                  margin: '-50px',
                }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.1,
                }}
                className="relative flex flex-col md:flex-row items-start group"
              >

                {/* ================= YEAR ================= */}

                <div className="hidden md:block w-[140px] shrink-0 pr-8 pt-0.5 text-right">
                  <span className="text-[10px] font-mono tracking-[0.2em] text-[#8C6D4F] group-hover:text-[#D4AF37] transition-colors">
                    {stop.year}
                  </span>
                </div>

                {/* ================= NODE ================= */}

                <div className="absolute left-[19px] md:left-[140px] top-1.5 -translate-x-1/2 flex items-center justify-center">

                  <div className="absolute w-7 h-7 rounded-full border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/40 group-hover:scale-150 transition-all duration-700" />

                  <div className="w-2.5 h-2.5 rounded-full bg-[#120F0C] border border-[#8C6D4F] group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] group-hover:shadow-[0_0_12px_#D4AF37] transition-all duration-300" />

                </div>

                {/* ================= CONTENT ================= */}

                <div className="ml-14 md:ml-12 pl-2 max-w-3xl">

                  {/* Mobile year */}

                  <div className="md:hidden mb-2">

                    <span className="text-[10px] font-mono tracking-[0.2em] text-[#D4AF37]">
                      {stop.year}
                    </span>

                  </div>

                  {/* Role */}

                  <h3
                    className="text-3xl sm:text-4xl md:text-5xl tracking-wide text-white group-hover:text-[#F7E7C4] transition-colors mb-1 leading-none"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {stop.title}
                  </h3>

                  {/* Organization */}

                  <span
                    className="block text-[10px] font-medium tracking-[0.2em] uppercase text-[#8C6D4F] mb-4"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {stop.organization}
                  </span>

                  {/* Description */}

                  <p
                    className="text-xs sm:text-[13px] font-light text-[#A8988B] leading-[1.8] max-w-2xl group-hover:text-[#D5CBC0] transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {stop.description}
                  </p>

                  {/* Technology tags */}

                  {stop.technologies && (
                    <div className="flex flex-wrap gap-2 mt-5">

                      {stop.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="px-2.5 py-1.5 text-[9px] tracking-[0.14em] uppercase border border-[#8C6D4F]/30 bg-[#120F0C] text-[#CDBBA9] group-hover:border-[#D4AF37]/50 group-hover:text-[#F3DBB3] transition-all duration-300"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {technology}
                        </span>
                      ))}

                    </div>
                  )}

                </div>

              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

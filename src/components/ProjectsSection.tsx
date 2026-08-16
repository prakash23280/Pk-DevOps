import React from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  githubUrl: string;
  tech: string[];
  metrics: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    number: '01',
    title: 'CI/CD AUTOMATION PIPELINE',
    category: 'CI/CD / AUTOMATION',
    description:
      'Designed a CI/CD workflow using Jenkins, Git, GitHub, Docker, and Linux to automate application build and deployment processes. Deployed containerized applications using Docker and Kubernetes, with Prometheus and Grafana for monitoring, scaling, and observability.',
    githubUrl: 'https://github.com/',
    tech: [
      'Jenkins',
      'Git',
      'GitHub',
      'Docker',
      'Linux',
      'Kubernetes',
      'Prometheus',
      'Grafana',
    ],
    metrics: [
      { label: 'PIPELINE', value: 'JENKINS CI/CD' },
      { label: 'CONTAINERS', value: 'DOCKER' },
      { label: 'ORCHESTRATION', value: 'KUBERNETES' },
      { label: 'MONITORING', value: 'PROMETHEUS + GRAFANA' },
    ],
  },

  {
    number: '02',
    title: 'AWS CLOUD INFRASTRUCTURE',
    category: 'CLOUD / INFRASTRUCTURE',
    description:
      'Worked with AWS cloud infrastructure and services including EC2, S3, RDS, CloudWatch, CloudFront, and Elastic Load Balancing, together with Linux-based server administration and operational monitoring.',
    githubUrl: 'https://github.com/',
    tech: [
      'AWS',
      'EC2',
      'S3',
      'RDS',
      'CloudWatch',
      'CloudFront',
      'ELB',
      'Linux',
    ],
    metrics: [
      { label: 'COMPUTE', value: 'EC2' },
      { label: 'STORAGE', value: 'S3' },
      { label: 'DATABASE', value: 'RDS' },
      { label: 'OBSERVABILITY', value: 'CLOUDWATCH' },
      { label: 'DELIVERY', value: 'CLOUDFRONT' },
      { label: 'BALANCING', value: 'ELB' },
    ],
  },

  {
    number: '03',
    title: 'DOCKERIZED DEVOPS PORTFOLIO',
    category: 'DEVOPS / CONTAINERIZATION',
    description:
      'Containerized and deployed a modern portfolio application using Docker and Nginx, creating a reproducible deployment environment and managing the project through Git and GitHub.',
    githubUrl: 'https://github.com/',
    tech: [
      'Docker',
      'Nginx',
      'Linux',
      'Git',
      'GitHub',
      'HTML',
      'CSS',
    ],
    metrics: [
      { label: 'CONTAINER', value: 'DOCKER' },
      { label: 'WEB SERVER', value: 'NGINX' },
      { label: 'SOURCE CONTROL', value: 'GIT' },
      { label: 'DEPLOYMENT', value: 'CONTAINERIZED' },
    ],
  },

  {
    number: '04',
    title: 'OTT APPLICATION MONITORING',
    category: 'DEVOPS / PRODUCTION MONITORING',
    description:
      'Monitored and supported OTT application infrastructure across Linux and cloud environments, focusing on server health, resource utilization, application availability, alerts, and operational troubleshooting using monitoring and observability tools.',
    githubUrl: 'https://github.com/',
    tech: [
      'Linux',
      'AWS',
      'Site24x7',
      'Nagios',
      'Prometheus',
      'Grafana',
      'Kibana',
      'CloudWatch',
    ],
    metrics: [
      { label: 'MONITORING', value: 'SITE24x7' },
      { label: 'INFRASTRUCTURE', value: 'LINUX + AWS' },
      { label: 'OBSERVABILITY', value: 'GRAFANA' },
      { label: 'ALERTING', value: 'NAGIOS' },
      { label: 'ANALYTICS', value: 'KIBANA' },
    ],
  },

  {
    number: '05',
    title: 'INFRASTRUCTURE MONITORING DASHBOARD',
    category: 'MONITORING / OBSERVABILITY',
    description:
      'Built a centralized infrastructure monitoring dashboard to visualize server health, CPU and memory utilization, disk usage, network metrics, application availability, and system performance. Integrated Prometheus for metrics collection and Grafana for visualization, dashboards, and alerting.',
    githubUrl: 'https://github.com/',
    tech: [
      'Prometheus',
      'Grafana',
      'Node Exporter',
      'Linux',
      'Docker',
      'AWS',
    ],
    metrics: [
      { label: 'METRICS', value: 'PROMETHEUS' },
      { label: 'VISUALIZATION', value: 'GRAFANA' },
      { label: 'EXPORTER', value: 'NODE EXPORTER' },
      { label: 'PLATFORM', value: 'LINUX / AWS' },
      { label: 'DEPLOYMENT', value: 'DOCKER' },
      { label: 'ALERTING', value: 'GRAFANA' },
    ],
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="work"
      className="relative z-0 isolate w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-8 pb-[70vh] px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Ambient background */}

      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#8C6D4F]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Section label */}

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-5"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            02 / DEVOPS PROJECTS
          </span>

          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448]">
              ENGINEERED
            </span>

            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A]">
              SYSTEMS.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#A8988B] max-w-sm mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            DevOps, cloud, automation, containerization, CI/CD,
            monitoring, and production engineering projects.
          </p>
        </motion.div>

        {/* Project stack */}

        <ScrollStack
          itemDistance={20}
          itemScale={0.035}
          itemStackDistance={28}
          stackPosition="15%"
          scaleEndPosition="6%"
          baseScale={0.88}
          useWindowScroll={true}
        >
          {projects.map((project) => (
            <ScrollStackItem key={project.title}>

              <article className="relative w-full rounded-2xl border border-[#8C6D4F]/50 bg-[#0E0C0A] p-8 sm:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.98)] group overflow-hidden transition-colors duration-500 hover:border-[#D4AF37]">

                {/* Gold top edge */}

                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

                {/* Corner brackets */}

                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

                {/* Background number */}

                <span
                  className="absolute -bottom-6 -right-3 text-8xl sm:text-9xl font-bold text-[#EAD8C7]/5 select-none pointer-events-none leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {project.number}
                </span>

                {/* Main content */}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">

                  {/* Left side */}

                  <div className="lg:col-span-7">

                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-xs font-mono font-bold text-[#D4AF37]">
                        {project.number} //
                      </span>

                      <span className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-[#A8988B]">
                        {project.category}
                      </span>
                    </div>

                    <h3
                      className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-4 group-hover:text-[#F7E7C4] transition-colors uppercase leading-[0.9]"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {project.title}
                    </h3>

                    <p
                      className="text-xs sm:text-sm md:text-[14px] font-light text-[#BDB0A4] leading-[1.85] tracking-wide mb-8 max-w-2xl"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {project.description}
                    </p>

                    {/* Technology chips */}

                    <div className="flex flex-wrap gap-2 pt-6 border-t border-[#8C6D4F]/25">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-[10px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/40 bg-[#16120E] text-[#E8D7C5] group-hover:border-[#D4AF37]/50 transition-all duration-300"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* Right side */}

                  <div className="lg:col-span-5 flex flex-col space-y-6 lg:pl-6 lg:border-l lg:border-[#8C6D4F]/25">

                    <div className="space-y-3">

                      <span className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#8C6D4F] block mb-2">
                        // PROJECT PROFILE
                      </span>

                      {project.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="p-3.5 rounded-sm border border-[#8C6D4F]/25 bg-[#050403] flex items-center justify-between"
                        >
                          <span className="text-[10px] font-mono text-[#A8988B]">
                            {metric.label}
                          </span>

                          <span className="text-[11px] font-mono font-medium text-[#F7E7C4]">
                            {metric.value}
                          </span>
                        </div>
                      ))}

                    </div>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-3 px-6 py-3.5 border border-[#8C6D4F] bg-[#16120E] hover:border-[#D4AF37] hover:bg-[#D4AF37] text-[#EAD8C7] hover:text-black text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      <span>VIEW PROJECT</span>
                      <span className="text-xs">↗</span>
                    </a>

                  </div>
                </div>

              </article>

            </ScrollStackItem>
          ))}
        </ScrollStack>

      </div>
    </section>
  );
};

export default ProjectsSection;

import React, { useRef, useState } from 'react';
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from 'framer-motion';
import type { Variants } from 'framer-motion';
import aboutImg from '../assets/about.png';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const techGroups = [
  {
    title: 'CLOUD & AWS',
    items: [
      'AWS',
      'EC2',
      'S3',
      'RDS',
      'CloudWatch',
      'CloudFront',
      'ELB',
    ],
  },
  {
    title: 'CONTAINERS & ORCHESTRATION',
    items: ['Docker', 'Kubernetes'],
  },
  {
    title: 'INFRASTRUCTURE & AUTOMATION',
    items: [
      'Terraform',
      'Ansible',
      'Linux',
      'Shell Scripting',
    ],
  },
  {
    title: 'CI/CD & VERSION CONTROL',
    items: [
      'Jenkins',
      'Git',
      'GitHub',
      'CI/CD',
    ],
  },
  {
    title: 'MONITORING & OBSERVABILITY',
    items: [
      'Prometheus',
      'Grafana',
      'Nagios',
      'Site24x7',
      'Kibana',
    ],
  },
  {
    title: 'WEB & APPLICATION',
    items: [
      'Nginx',
      'Apache',
      'Python',
    ],
  },
];

export const AboutSection: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  const [isHovered, setIsHovered] = useState(false);

  /* ================= 3D MOUSE TILT ================= */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [8, -8]),
    {
      damping: 20,
      stiffness: 180,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-10, 10]),
    {
      damping: 20,
      stiffness: 180,
    }
  );

  /* ================= SPOTLIGHT ================= */

  const spotlightX = useMotionValue(50);
  const spotlightY = useMotionValue(50);

  const spotlight = useTransform(
    [spotlightX, spotlightY],
    ([x, y]) =>
      `radial-gradient(
        circle 230px at ${x}% ${y}%,
        rgba(255,255,255,0.22),
        rgba(212,175,55,0.10),
        transparent 72%
      )`
  );

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (!cardRef.current) return;

    const rect =
      cardRef.current.getBoundingClientRect();

    const x =
      (e.clientX - rect.left) /
        rect.width -
      0.5;

    const y =
      (e.clientY - rect.top) /
        rect.height -
      0.5;

    mouseX.set(x);
    mouseY.set(y);

    spotlightX.set(
      ((e.clientX - rect.left) /
        rect.width) *
        100
    );

    spotlightY.set(
      ((e.clientY - rect.top) /
        rect.height) *
        100
    );
  };

  const handleMouseLeave = () => {
    setIsHovered(false);

    mouseX.set(0);
    mouseY.set(0);

    spotlightX.set(50);
    spotlightY.set(50);
  };

  return (
    <section
      id="about"
      className="relative w-screen bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-24 lg:pt-32 pb-8 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >

      {/* ================= AMBIENT LIGHT ================= */}

      <motion.div
        animate={{
          scale: [1, 1.16, 1],
          opacity: [0.05, 0.12, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 left-1/6 w-[34rem] h-[34rem] bg-[#D4AF37] rounded-full blur-[180px] pointer-events-none"
      />

      <motion.div
        animate={{
          scale: [1.15, 1, 1.15],
          opacity: [0.04, 0.09, 0.04],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-1/6 right-1/5 w-[30rem] h-[30rem] bg-[#8C6D4F] rounded-full blur-[180px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* ================= SECTION LABEL ================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: -20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="flex items-center space-x-4 mb-10"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            01 / ABOUT ME
          </span>

          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* ================= LEFT CONTENT ================= */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: '-80px',
            }}
            className="lg:col-span-7"
          >

            {/* Main heading */}

            <motion.div
              variants={fadeUpVariants}
              className="mb-7 select-none"
            >
              <h2
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.1rem] tracking-tight uppercase leading-[0.86]"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                }}
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                  I BUILD
                </span>

                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                  AND AUTOMATE
                </span>

                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#DFBE8A] via-[#9B7640] to-[#342410] drop-shadow-[0_10px_30px_rgba(155,118,64,0.4)]">
                  INFRASTRUCTURE.
                </span>
              </h2>
            </motion.div>

            {/* Introduction */}

            <motion.p
              variants={fadeUpVariants}
              className="text-xs sm:text-sm md:text-[14px] font-light text-[#B3A497] leading-[1.85] tracking-wide mb-10 max-w-2xl"
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              I&apos;m{' '}
              <span className="text-[#F3DBB3] font-medium">
                Prakash
              </span>
              , a DevOps Engineer focused on cloud
              infrastructure, Linux systems,
              automation, monitoring, and application
              deployments. I work with modern DevOps
              and AWS technologies to build reliable
              environments, streamline operational
              workflows, and support scalable
              applications.
            </motion.p>

            {/* Core stack */}

            <motion.div
              variants={fadeUpVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-12 pt-6 border-t border-[#8C6D4F]/25"
            >

              <div>
                <span
                  className="text-3xl sm:text-4xl text-[#F4EBE2]"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                  }}
                >
                  AWS
                </span>

                <p className="text-[9px] tracking-[0.22em] text-[#8C6D4F] mt-1">
                  CLOUD
                </p>
              </div>

              <div>
                <span
                  className="text-3xl sm:text-4xl text-[#D4AF37]"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                  }}
                >
                  DOCKER
                </span>

                <p className="text-[9px] tracking-[0.22em] text-[#8C6D4F] mt-1">
                  CONTAINERS
                </p>
              </div>

              <div>
                <span
                  className="text-3xl sm:text-4xl text-[#F4EBE2]"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                  }}
                >
                  K8S
                </span>

                <p className="text-[9px] tracking-[0.22em] text-[#8C6D4F] mt-1">
                  ORCHESTRATION
                </p>
              </div>

              <div>
                <span
                  className="text-3xl sm:text-4xl text-[#D4AF37]"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                  }}
                >
                  IaC
                </span>

                <p className="text-[9px] tracking-[0.22em] text-[#8C6D4F] mt-1">
                  TERRAFORM
                </p>
              </div>

            </motion.div>

            {/* Technology matrix */}

            <motion.div
              variants={fadeUpVariants}
              className="space-y-6"
            >

              <div className="flex items-center gap-4">
                <span
                  className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37]"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  TECHNOLOGY MATRIX
                </span>

                <div className="h-[1px] flex-1 bg-gradient-to-r from-[#8C6D4F]/50 to-transparent" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {techGroups.map((group) => (
                  <motion.div
                    key={group.title}
                    whileHover={{
                      y: -3,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="group relative p-5 border border-[#8C6D4F]/25 bg-[#0D0A08]/70 hover:border-[#D4AF37]/60 transition-all duration-400"
                  >

                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="flex items-center gap-2 mb-4">

                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]" />

                      <span
                        className="text-[9px] tracking-[0.22em] uppercase text-[#A8988B]"
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                        }}
                      >
                        {group.title}
                      </span>

                    </div>

                    <div className="flex flex-wrap gap-2">

                      {group.items.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1.5 text-[9px] tracking-[0.13em] uppercase border border-[#8C6D4F]/30 bg-[#15110D] text-[#E5D7C8] hover:border-[#D4AF37]/60 hover:text-white transition-all duration-300"
                          style={{
                            fontFamily: "'Montserrat', sans-serif",
                          }}
                        >
                          {tech}
                        </span>
                      ))}

                    </div>

                  </motion.div>
                ))}

              </div>
            </motion.div>

          </motion.div>

          {/* ================= RIGHT PHOTO ================= */}

          <div className="lg:col-span-5 flex items-center justify-center relative perspective-[1400px] lg:sticky lg:top-24">

            {/* Outer glow */}

            <motion.div
              animate={{
                scale: isHovered
                  ? 1.08
                  : 1,
                opacity: isHovered
                  ? 0.32
                  : 0.13,
                rotate: isHovered
                  ? 8
                  : 0,
              }}
              transition={{
                duration: 1.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute -inset-8 bg-[conic-gradient(from_0deg,#D4AF37_0%,#8C6D4F_30%,transparent_60%,#D4AF37_100%)] blur-2xl rounded-3xl pointer-events-none"
            />

            {/* 3D photo card */}

            <motion.div
              ref={cardRef}
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.94,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              animate={{
                y: isHovered ? -6 : 0,
              }}
              transition={{
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              onMouseMove={handleMouseMove}
              onMouseEnter={() =>
                setIsHovered(true)
              }
              onMouseLeave={
                handleMouseLeave
              }
              className="relative p-3.5 border border-[#8C6D4F]/40 rounded-sm bg-[#120F0C]/80 backdrop-blur-xl shadow-[0_25px_70px_rgba(0,0,0,0.95)] cursor-pointer group transition-colors duration-500 hover:border-[#D4AF37]/80"
            >

              {/* Corner accents */}

              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#D4AF37] z-20 shadow-[0_0_10px_rgba(212,175,55,0.35)]" />

              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#D4AF37] z-20 shadow-[0_0_10px_rgba(212,175,55,0.35)]" />

              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#D4AF37] z-20 shadow-[0_0_10px_rgba(212,175,55,0.35)]" />

              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#D4AF37] z-20 shadow-[0_0_10px_rgba(212,175,55,0.35)]" />

              {/* Photo */}

              <div className="relative overflow-hidden w-full max-w-[390px] aspect-[4/5] bg-black rounded-sm">

                <motion.img
                  src={aboutImg}
                  alt="Prakash DevOps Engineer"
                  animate={{
                    scale: isHovered
                      ? 1.04
                      : 1,
                  }}
                  transition={{
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="w-full h-full object-cover object-top filter brightness-[0.97] contrast-[1.05] saturate-[1.03] group-hover:brightness-105 transition-all duration-700"
                />

                {/* Soft mouse spotlight */}

                <motion.div
                  className="absolute inset-0 pointer-events-none mix-blend-overlay"
                  style={{
                    background:
                      spotlight,
                  }}
                  animate={{
                    opacity: isHovered ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                />

                {/* Soft vignette */}

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_48%,rgba(0,0,0,0.28)_100%)] pointer-events-none" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

                {/* Gentle light sweep - no horizontal scanner */}

                <motion.div
                  initial={{
                    opacity: 0,
                    x: '-100%',
                  }}
                  animate={{
                    opacity: isHovered ? 0.7 : 0,
                    x: isHovered ? '100%' : '-100%',
                  }}
                  transition={{
                    duration: 1.2,
                    ease: 'easeInOut',
                  }}
                  className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-[#F3DBB3]/10 to-transparent skew-x-12 pointer-events-none"
                />

                {/* Signature */}

                <motion.div
                  initial={{
                    opacity: 0,
                    x: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.8,
                    duration: 0.8,
                  }}
                  className="absolute bottom-4 right-4 z-20 select-none"
                >
                  <span
                    className="text-3xl text-[#F2D8A7] drop-shadow-[0_0_12px_rgba(242,216,167,0.5)] group-hover:text-white transition-colors"
                    style={{
                      fontFamily:
                        "'Herr Von Muellerhoff', cursive",
                    }}
                  >
                    Prakash
                  </span>
                </motion.div>

              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;

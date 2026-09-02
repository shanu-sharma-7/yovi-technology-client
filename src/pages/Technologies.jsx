import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Sparkles,
  Code2,
  Cloud,
  BrainCircuit,
  Smartphone,
  Boxes,
  Palette,
  Check,
} from "lucide-react";

/* =========================================================
   TECHNOLOGY GROUPS
========================================================= */

const technologyGroups = [
  {
    number: "01",
    title: "Web Technologies",
    description:
      "Modern technologies for building fast, responsive and scalable websites and web applications.",
    icon: Code2,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=95",
    technologies: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
    ],
    features: [
      "Modern Web Applications",
      "Responsive Interfaces",
      "SEO-Friendly Architecture",
      "High Performance",
    ],
    accent: "blue",
  },

  {
    number: "02",
    title: "Mobile Technologies",
    description:
      "Flexible mobile technologies for creating reliable applications across Android, iOS and multiple platforms.",
    icon: Smartphone,
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1600&q=95",
    technologies: [
      "Android",
      "iOS",
      "Cross-Platform",
      "REST APIs",
    ],
    features: [
      "Android Applications",
      "iOS Applications",
      "Cross-Platform Development",
      "Business Applications",
    ],
    accent: "cyan",
  },

  {
    number: "03",
    title: "AI & Automation",
    description:
      "AI technologies that help businesses automate workflows, improve customer experiences and build intelligent products.",
    icon: BrainCircuit,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=95",
    technologies: [
      "AI APIs",
      "LLM",
      "AI Chatbots",
      "Automation",
    ],
    features: [
      "AI-Powered Solutions",
      "Intelligent Chatbots",
      "Workflow Automation",
      "AI Integrations",
    ],
    accent: "indigo",
  },

  {
    number: "04",
    title: "ERP & CRM Technologies",
    description:
      "Reliable backend and database technologies for building connected business management and customer platforms.",
    icon: Boxes,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=95",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "REST APIs",
    ],
    features: [
      "Custom ERP Systems",
      "CRM Platforms",
      "Inventory Management",
      "Business Automation",
    ],
    accent: "blue",
  },

  {
    number: "05",
    title: "Cloud & Infrastructure",
    description:
      "Cloud-ready technologies and deployment solutions designed for reliable, secure and scalable digital products.",
    icon: Cloud,
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=95",
    technologies: [
      "Cloud Services",
      "Firebase",
      "Hosting",
      "Deployment",
      "APIs",
    ],
    features: [
      "Cloud Deployment",
      "Scalable Infrastructure",
      "Application Hosting",
      "Reliable Systems",
    ],
    accent: "cyan",
  },

  {
    number: "06",
    title: "Design & Development Tools",
    description:
      "Modern tools that help us design, develop, manage and continuously improve digital products.",
    icon: Palette,
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1600&q=95",
    technologies: [
      "Git",
      "GitHub",
      "Figma",
      "API Integration",
      "Cloud Tools",
    ],
    features: [
      "Version Control",
      "UI/UX Design",
      "API Integration",
      "Team Collaboration",
    ],
    accent: "indigo",
  },
];

/* =========================================================
   ACCENT STYLES
========================================================= */

const accentStyles = {
  blue: {
    glow:
      "bg-blue-500/[0.09] group-hover:bg-blue-500/[0.16]",

    icon:
      "text-blue-200 border-blue-300/15 bg-blue-400/[0.08] group-hover:border-blue-300/30 group-hover:bg-blue-400/[0.14]",

    number:
      "text-blue-200/60 group-hover:text-blue-200",

    tag:
      "group-hover:border-blue-300/25 group-hover:bg-blue-400/[0.08] group-hover:text-blue-100",

    check:
      "group-hover:border-blue-300/30 group-hover:bg-blue-400/10 group-hover:text-blue-100",

    arrow:
      "group-hover:border-blue-300/30 group-hover:bg-blue-400/[0.10] group-hover:text-blue-100",
  },

  cyan: {
    glow:
      "bg-cyan-500/[0.08] group-hover:bg-cyan-500/[0.15]",

    icon:
      "text-cyan-200 border-cyan-300/15 bg-cyan-400/[0.07] group-hover:border-cyan-300/30 group-hover:bg-cyan-400/[0.13]",

    number:
      "text-cyan-200/60 group-hover:text-cyan-200",

    tag:
      "group-hover:border-cyan-300/25 group-hover:bg-cyan-400/[0.08] group-hover:text-cyan-100",

    check:
      "group-hover:border-cyan-300/30 group-hover:bg-cyan-400/10 group-hover:text-cyan-100",

    arrow:
      "group-hover:border-cyan-300/30 group-hover:bg-cyan-400/[0.10] group-hover:text-cyan-100",
  },

  indigo: {
    glow:
      "bg-indigo-500/[0.08] group-hover:bg-indigo-500/[0.15]",

    icon:
      "text-indigo-200 border-indigo-300/15 bg-indigo-400/[0.07] group-hover:border-indigo-300/30 group-hover:bg-indigo-400/[0.13]",

    number:
      "text-indigo-200/60 group-hover:text-indigo-200",

    tag:
      "group-hover:border-indigo-300/25 group-hover:bg-indigo-400/[0.08] group-hover:text-indigo-100",

    check:
      "group-hover:border-indigo-300/30 group-hover:bg-indigo-400/10 group-hover:text-indigo-100",

    arrow:
      "group-hover:border-indigo-300/30 group-hover:bg-indigo-400/[0.10] group-hover:text-indigo-100",
  },
};

/* =========================================================
   TECHNOLOGIES PAGE
========================================================= */

function Technologies() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07152f] text-white">

      {/* =====================================================
          GLOBAL BLUE AMBIENT BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

        {/* Top Blue Atmosphere */}

        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, 25, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[5%]
            top-[-160px]
            h-[600px]
            w-[600px]
            rounded-full
            bg-blue-500/[0.14]
            blur-[150px]
          "
        />

        {/* Cyan Atmosphere */}

        <motion.div
          animate={{
            x: [0, -35, 0],
            y: [0, 30, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[42%]
            top-[20%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-cyan-400/[0.065]
            blur-[150px]
          "
        />

        {/* Right Indigo Atmosphere */}

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[-140px]
            top-[35%]
            h-[550px]
            w-[550px]
            rounded-full
            bg-indigo-500/[0.10]
            blur-[150px]
          "
        />

        {/* Bottom Blue Atmosphere */}

        <motion.div
          animate={{
            x: [0, 35, 0],
            y: [0, -20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[-120px]
            left-[8%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-blue-400/[0.07]
            blur-[140px]
          "
        />

        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />

        {/* Center Vignette */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_5%,#07152f_90%)]
          "
        />

        {/* Bottom Fade */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[35%]
            bg-gradient-to-t
            from-[#07152f]
            to-transparent
          "
        />

      </div>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          px-6
          pb-28
          pt-40
          sm:px-8
          lg:px-12
        "
      >

        {/* Hero Technology Image */}

        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            top-0
            h-[680px]
            overflow-hidden
          "
        >

          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=95"
            alt=""
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
              opacity-[0.20]
              saturate-[1.15]
            "
          />

          {/* Image Gradient */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-b
              from-[#07152f]/20
              via-[#07152f]/55
              to-[#07152f]
            "
          />

          {/* Blue Radial Glow */}

          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_65%_35%,rgba(59,130,246,0.24),transparent_42%)]
            "
          />

        </div>


        {/* Hero Content */}

        <div className="relative mx-auto max-w-7xl">

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative max-w-5xl"
          >

            {/* Eyebrow */}

            <div className="mb-7 flex items-center gap-3">

              <motion.span
                animate={{
                  rotate: [0, 8, -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-blue-300/25
                  bg-gradient-to-br
                  from-blue-500/20
                  to-cyan-500/10
                  shadow-[0_0_35px_rgba(59,130,246,0.18)]
                "
              >
                <Sparkles
                  size={13}
                  className="text-blue-200"
                />
              </motion.span>

              <span
                className="
                  text-[10px]
                  font-semibold
                  tracking-[0.25em]
                  text-blue-200/85
                "
              >
                TECHNOLOGY STACK
              </span>

            </div>


            {/* Main Heading */}

            <h1
              className="
                text-5xl
                font-semibold
                leading-[0.98]
                tracking-[-0.055em]
                text-white
                sm:text-6xl
                md:text-7xl
                lg:text-[88px]
              "
            >

              Technology that

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-white
                  via-blue-100
                  to-cyan-200
                  bg-clip-text
                  text-transparent
                "
              >
                powers your business.
              </span>

            </h1>


            {/* Description */}

            <p
              className="
                mt-8
                max-w-2xl
                text-base
                leading-7
                text-blue-50/70
                sm:text-lg
                sm:leading-8
              "
            >
              We use modern technologies, scalable architectures
              and proven engineering practices to build reliable
              digital products for growing businesses.
            </p>

          </motion.div>


          {/* Technology Categories */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.4,
            }}
            className="
              mt-20
              flex
              flex-wrap
              gap-x-10
              gap-y-4
              border-t
              border-white/[0.10]
              pt-7
              text-[10px]
              font-medium
              tracking-[0.22em]
              text-blue-100/45
            "
          >

            {[
              "WEB",
              "MOBILE",
              "AI",
              "ERP",
              "CRM",
              "CLOUD",
              "TOOLS",
            ].map((item) => (

              <span
                key={item}
                className="
                  transition-all
                  duration-300
                  hover:text-cyan-200
                  hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.35)]
                "
              >
                {item}
              </span>

            ))}

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          TECHNOLOGY ECOSYSTEM
      ===================================================== */}

      <section
        className="
          relative
          border-t
          border-white/[0.10]
          px-6
          py-32
          sm:px-8
          lg:px-12
        "
      >

        <div className="mx-auto max-w-7xl">

          {/* Section Heading */}

          <div className="mb-14 max-w-3xl">

            <span
              className="
                text-[10px]
                font-semibold
                tracking-[0.25em]
                text-blue-200/85
              "
            >
              OUR TECHNOLOGY ECOSYSTEM
            </span>

            <h2
              className="
                mt-5
                text-4xl
                font-semibold
                tracking-[-0.05em]
                text-white
                sm:text-5xl
                md:text-6xl
              "
            >

              The technology behind

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-white
                  via-blue-100
                  to-cyan-200
                  bg-clip-text
                  text-transparent
                "
              >
                better digital products.
              </span>

            </h2>

            <p
              className="
                mt-6
                max-w-xl
                text-sm
                leading-7
                text-blue-50/65
              "
            >
              We select the right technologies based on your
              product, users, business requirements and
              long-term growth.
            </p>

          </div>


          {/* Technology Cards */}

          <div className="space-y-5">

            {technologyGroups.map((group, index) => {

              const Icon = group.icon;
              const accent = accentStyles[group.accent];

              return (

                <motion.article
                  key={group.number}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.12,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.04,
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[30px]
                    border
                    border-white/[0.10]
                    bg-white/[0.045]
                    shadow-[0_20px_70px_rgba(0,0,0,0.15)]
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:border-blue-300/[0.24]
                    hover:bg-white/[0.065]
                    hover:shadow-[0_25px_100px_rgba(0,0,0,0.25)]
                  "
                >

                  {/* Top Right Glow */}

                  <div
                    className={`
                      pointer-events-none
                      absolute
                      -right-28
                      -top-28
                      h-80
                      w-80
                      rounded-full
                      ${accent.glow}
                      blur-[100px]
                      transition-all
                      duration-700
                    `}
                  />

                  {/* Bottom Left Cyan Glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      bottom-[-170px]
                      left-[-100px]
                      h-72
                      w-72
                      rounded-full
                      bg-cyan-500/[0.025]
                      blur-[100px]
                      transition-all
                      duration-700
                      group-hover:bg-cyan-500/[0.07]
                    "
                  />


                  {/* Main Card Grid */}

                  <div
                    className="
                      relative
                      grid
                      gap-8
                      p-5
                      sm:p-7
                      lg:grid-cols-[300px_1fr_0.8fr]
                      lg:gap-10
                      lg:p-10
                    "
                  >

                    {/* =================================================
                        IMAGE
                    ================================================= */}

                    <div
                      className="
                        relative
                        min-h-[230px]
                        overflow-hidden
                        rounded-[22px]
                        border
                        border-white/[0.12]
                        bg-black/30
                        shadow-[0_15px_50px_rgba(0,0,0,0.20)]
                      "
                    >

                      <motion.img
                        src={group.image}
                        alt={group.title}
                        loading="lazy"
                        whileHover={{
                          scale: 1.07,
                        }}
                        transition={{
                          duration: 0.7,
                        }}
                        className="
                          absolute
                          inset-0
                          h-full
                          w-full
                          object-cover
                          opacity-100
                          saturate-[1.08]
                          transition-all
                          duration-500
                          group-hover:brightness-110
                        "
                      />

                      {/* Image Overlay */}

                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-r
                          from-[#07152f]/30
                          via-[#07152f]/5
                          to-transparent
                        "
                      />

                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-[#07152f]/65
                          via-transparent
                          to-transparent
                        "
                      />

                      {/* Blue Image Glow */}

                      <div
                        className="
                          absolute
                          -bottom-16
                          -left-10
                          h-40
                          w-40
                          rounded-full
                          bg-blue-400/[0.12]
                          blur-[60px]
                          transition-all
                          duration-500
                          group-hover:scale-150
                        "
                      />

                      {/* Image Label */}

                      <div
                        className="
                          absolute
                          bottom-5
                          left-5
                          flex
                          items-center
                          gap-3
                        "
                      >

                        <span
                          className={`
                            text-[11px]
                            font-semibold
                            tracking-[0.2em]
                            ${accent.number}
                          `}
                        >
                          {group.number}
                        </span>

                        <span
                          className="
                            h-px
                            w-8
                            bg-white/35
                          "
                        />

                        <span
                          className="
                            text-[9px]
                            font-medium
                            tracking-[0.18em]
                            text-white/75
                          "
                        >
                          YOVI TECHNOLOGIES
                        </span>

                      </div>

                    </div>


                    {/* =================================================
                        MAIN CONTENT
                    ================================================= */}

                    <div>

                      {/* Number + Icon */}

                      <div className="flex items-center gap-4">

                        <span
                          className={`
                            text-[10px]
                            font-semibold
                            tracking-[0.2em]
                            transition-colors
                            duration-300
                            ${accent.number}
                          `}
                        >
                          {group.number}
                        </span>

                        <div
                          className={`
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-xl
                            border
                            transition-all
                            duration-300
                            ${accent.icon}
                          `}
                        >

                          <Icon
                            size={19}
                            strokeWidth={1.5}
                          />

                        </div>

                      </div>


                      {/* Title */}

                      <h2
                        className="
                          mt-6
                          text-3xl
                          font-semibold
                          tracking-[-0.04em]
                          text-white
                          sm:text-4xl
                        "
                      >
                        {group.title}
                      </h2>


                      {/* Description */}

                      <p
                        className="
                          mt-4
                          max-w-xl
                          text-sm
                          leading-7
                          text-blue-50/70
                          transition-colors
                          duration-300
                          group-hover:text-blue-50/90
                        "
                      >
                        {group.description}
                      </p>


                      {/* Technologies */}

                      <div className="mt-7 flex flex-wrap gap-2">

                        {group.technologies.map(
                          (technology, techIndex) => (

                            <span
                              key={technology}
                              className={`
                                rounded-full
                                border
                                px-3
                                py-1.5
                                text-[10px]
                                font-medium
                                transition-all
                                duration-300
                                ${
                                  techIndex % 3 === 0
                                    ? "border-blue-300/20 bg-blue-400/[0.07] text-blue-100/75 group-hover:border-blue-300/30 group-hover:bg-blue-400/[0.11] group-hover:text-blue-100"
                                    : techIndex % 3 === 1
                                    ? "border-cyan-300/20 bg-cyan-400/[0.06] text-cyan-100/70 group-hover:border-cyan-300/30 group-hover:bg-cyan-400/[0.10] group-hover:text-cyan-100"
                                    : "border-white/[0.12] bg-white/[0.035] text-white/55 group-hover:border-white/[0.18] group-hover:bg-white/[0.05] group-hover:text-white/80"
                                }
                              `}
                            >
                              {technology}
                            </span>

                          )
                        )}

                      </div>

                    </div>


                    {/* =================================================
                        FEATURES
                    ================================================= */}

                    <div>

                      <p
                        className="
                          mb-5
                          text-[10px]
                          font-semibold
                          tracking-[0.2em]
                          text-blue-100/45
                        "
                      >
                        WHAT IT ENABLES
                      </p>

                      <div className="space-y-3">

                        {group.features.map((feature) => (

                          <div
                            key={feature}
                            className="
                              flex
                              items-center
                              gap-3
                              text-sm
                              text-blue-50/65
                              transition-colors
                              duration-200
                              hover:text-white
                            "
                          >

                            <span
                              className={`
                                flex
                                h-5
                                w-5
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-white/[0.12]
                                bg-white/[0.025]
                                text-white/40
                                transition-all
                                duration-200
                                ${accent.check}
                              `}
                            >
                              <Check size={11} />
                            </span>

                            {feature}

                          </div>

                        ))}

                      </div>

                    </div>

                  </div>


                  {/* Card Arrow */}

                  <div
                    className={`
                      absolute
                      right-7
                      top-7
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/[0.10]
                      bg-white/[0.035]
                      text-white/35
                      transition-all
                      duration-300
                      ${accent.arrow}
                    `}
                  >

                    <ArrowUpRight
                      size={15}
                      className="
                        transition-transform
                        duration-300
                        group-hover:rotate-45
                      "
                    />

                  </div>

                </motion.article>

              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          ENGINEERING APPROACH
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          border-t
          border-white/[0.10]
          px-6
          py-32
          sm:px-8
          lg:px-12
        "
      >

        {/* Background Image */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            overflow-hidden
          "
        >

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=95"
            alt=""
            className="
              h-full
              w-full
              object-cover
              opacity-[0.15]
              grayscale-[10%]
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#07152f]
              via-[#07152f]/80
              to-[#07152f]/50
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#07152f]
              via-transparent
              to-[#07152f]
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.18),transparent_45%)]
            "
          />

        </div>


        <div className="relative mx-auto max-w-7xl">

          {/* Heading */}

          <div className="max-w-3xl">

            <span
              className="
                text-[10px]
                font-semibold
                tracking-[0.25em]
                text-cyan-200/85
              "
            >
              ENGINEERING APPROACH
            </span>

            <h2
              className="
                mt-5
                text-4xl
                font-semibold
                tracking-[-0.05em]
                text-white
                sm:text-5xl
                md:text-6xl
              "
            >

              Technology is only

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-blue-200
                  via-white
                  to-cyan-200
                  bg-clip-text
                  text-transparent
                "
              >
                part of the solution.
              </span>

            </h2>

            <p
              className="
                mt-6
                max-w-xl
                text-sm
                leading-7
                text-blue-50/65
              "
            >
              The right technology matters, but so do
              architecture, security, performance and the
              ability to evolve with your business.
            </p>

          </div>


          {/* Visual Panel */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              group
              relative
              mt-14
              h-[260px]
              overflow-hidden
              rounded-[30px]
              border
              border-white/[0.10]
              shadow-[0_20px_80px_rgba(0,0,0,0.25)]
            "
          >

            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=95"
              alt="Software engineering workspace"
              className="
                h-full
                w-full
                object-cover
                opacity-35
                grayscale-[5%]
                transition-transform
                duration-1000
                group-hover:scale-105
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-[#07152f]/90
                via-[#07152f]/55
                to-[#07152f]/30
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.16),transparent_45%)]
              "
            />

            <div className="absolute inset-0 flex items-center px-7 sm:px-10">

              <div className="max-w-xl">

                <p
                  className="
                    text-[9px]
                    font-semibold
                    tracking-[0.25em]
                    text-cyan-200/80
                  "
                >
                  ENGINEERED WITH INTENTION
                </p>

                <p
                  className="
                    mt-3
                    text-xl
                    font-medium
                    tracking-[-0.025em]
                    text-white/85
                    sm:text-2xl
                  "
                >
                  Clean architecture. Reliable systems.
                  Better digital experiences.
                </p>

              </div>

            </div>

          </motion.div>


          {/* Approach Cards */}

          <div
            className="
              mt-5
              grid
              gap-4
              md:grid-cols-3
            "
          >

            {[
              {
                icon: Boxes,
                title: "Scalable Architecture",
                text:
                  "We choose technologies and structures that can evolve as your business grows.",
              },
              {
                icon: Check,
                title: "Reliable Engineering",
                text:
                  "Our development approach focuses on stability, maintainability and long-term reliability.",
              },
              {
                icon: Cloud,
                title: "Future Ready",
                text:
                  "Cloud-ready systems and modern technologies help your product adapt to changing needs.",
              },
            ].map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[26px]
                    border
                    border-white/[0.09]
                    bg-white/[0.045]
                    p-7
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:border-blue-300/20
                    hover:bg-blue-400/[0.025]
                    hover:shadow-[0_15px_60px_rgba(37,99,235,0.08)]
                  "
                >

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16
                      h-40
                      w-40
                      rounded-full
                      bg-blue-500/[0.035]
                      blur-[70px]
                      transition-all
                      duration-500
                      group-hover:bg-blue-500/[0.10]
                    "
                  />

                  <div
                    className="
                      relative
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/[0.08]
                      bg-white/[0.025]
                      text-blue-200/70
                      transition-all
                      duration-300
                      group-hover:border-blue-300/20
                      group-hover:bg-blue-400/10
                      group-hover:text-blue-100
                    "
                  >

                    <Icon
                      size={19}
                      strokeWidth={1.5}
                    />

                  </div>

                  <h3
                    className="
                      relative
                      mt-6
                      text-sm
                      font-medium
                      text-white/85
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      relative
                      mt-3
                      text-xs
                      leading-6
                      text-blue-50/45
                    "
                  >
                    {item.text}
                  </p>

                </motion.div>

              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          CUSTOM TECHNOLOGY CTA
      ===================================================== */}

      <section
        className="
          border-t
          border-white/[0.10]
          px-6
          py-32
          sm:px-8
          lg:px-12
        "
      >

        <div className="mx-auto max-w-7xl">

          <div
            className="
              group
              relative
              min-h-[500px]
              overflow-hidden
              rounded-[34px]
              border
              border-blue-300/[0.12]
              shadow-[0_20px_100px_rgba(37,99,235,0.06)]
            "
          >

            {/* Main Image */}

            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1800&q=95"
              alt="Team building custom digital technology"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                opacity-40
                saturate-[1.05]
                transition-transform
                duration-1000
                group-hover:scale-105
              "
            />

            {/* Image Overlay */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-[#07152f]/95
                via-[#07152f]/72
                to-[#07152f]/30
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#07152f]/90
                via-transparent
                to-[#07152f]/20
              "
            />

            {/* Blue Glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-32
                -top-32
                h-[400px]
                w-[400px]
                rounded-full
                bg-blue-500/[0.12]
                blur-[120px]
              "
            />

            {/* Cyan Glow */}

            <div
              className="
                pointer-events-none
                absolute
                -bottom-32
                -left-32
                h-[300px]
                w-[300px]
                rounded-full
                bg-cyan-500/[0.06]
                blur-[110px]
              "
            />


            {/* Content */}

            <div
              className="
                relative
                z-10
                flex
                min-h-[500px]
                items-center
                p-8
                sm:p-12
                lg:p-16
              "
            >

              <div className="max-w-3xl">

                <span
                  className="
                    text-[10px]
                    font-semibold
                    tracking-[0.25em]
                    text-cyan-200/85
                  "
                >
                  NEED SOMETHING CUSTOM?
                </span>

                <h2
                  className="
                    mt-5
                    text-4xl
                    font-semibold
                    tracking-[-0.05em]
                    text-white
                    sm:text-5xl
                    md:text-6xl
                  "
                >

                  Your business doesn't

                  <span
                    className="
                      block
                      bg-gradient-to-r
                      from-blue-200
                      via-white
                      to-cyan-200
                      bg-clip-text
                      text-transparent
                    "
                  >
                    need generic technology.
                  </span>

                </h2>

                <p
                  className="
                    mt-6
                    max-w-xl
                    text-sm
                    leading-7
                    text-blue-50/70
                  "
                >
                  From custom APIs and business systems to
                  AI integrations and automation, we can
                  design a technology stack around your exact
                  requirements.
                </p>

                <a
                  href="/contact"
                  className="
                    group/button
                    mt-9
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-gradient-to-r
                    from-blue-500
                    via-blue-500
                    to-cyan-500
                    px-7
                    py-4
                    text-sm
                    font-semibold
                    text-white
                    shadow-[0_15px_60px_rgba(37,99,235,0.25)]
                    transition-all
                    duration-300
                    hover:scale-[1.03]
                    hover:shadow-[0_20px_80px_rgba(34,211,238,0.28)]
                  "
                >

                  Discuss Your Project

                  <span
                    className="
                      flex
                      h-6
                      w-6
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      text-blue-600
                      transition-transform
                      duration-300
                      group-hover/button:rotate-45
                    "
                  >
                    <ArrowUpRight size={13} />
                  </span>

                </a>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          border-t
          border-white/[0.10]
          px-6
          py-32
          sm:px-8
          lg:px-12
        "
      >

        {/* CTA Background */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            overflow-hidden
          "
        >

          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1800&q=95"
            alt=""
            className="
              h-full
              w-full
              object-cover
              opacity-[0.15]
              grayscale-[5%]
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#07152f]
              via-[#07152f]/75
              to-[#07152f]
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#07152f]
              via-transparent
              to-[#07152f]
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.20),transparent_48%)]
            "
          />

        </div>


        {/* Blue Glow */}

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            left-[30%]
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-500/[0.09]
            blur-[140px]
          "
        />

        {/* Cyan Glow */}

        <motion.div
          animate={{
            scale: [1, 1.06, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            left-[68%]
            top-1/2
            h-[420px]
            w-[420px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-400/[0.07]
            blur-[130px]
          "
        />

        {/* Indigo Glow */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[65%]
            h-[260px]
            w-[260px]
            -translate-x-1/2
            rounded-full
            bg-indigo-500/[0.05]
            blur-[110px]
          "
        />


        {/* CTA Content */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            relative
            z-10
            mx-auto
            max-w-4xl
            text-center
          "
        >

          <span
            className="
              text-[10px]
              font-semibold
              tracking-[0.28em]
              text-cyan-200/90
            "
          >
            READY TO BUILD?
          </span>


          <h2
            className="
              mt-6
              text-4xl
              font-semibold
              leading-tight
              tracking-[-0.05em]
              text-white
              sm:text-5xl
              md:text-6xl
            "
          >

            Let's create something

            <span
              className="
                block
                bg-gradient-to-r
                from-blue-200
                via-white
                to-cyan-200
                bg-clip-text
                text-transparent
              "
            >
              worth building.
            </span>

          </h2>


          <p
            className="
              mx-auto
              mt-6
              max-w-xl
              text-sm
              leading-7
              text-blue-50/70
            "
          >
            Have a project, idea or business challenge?
            Let's talk about how the right technology can
            move it forward.
          </p>


          <a
            href="/contact"
            className="
              group
              mt-9
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-gradient-to-r
              from-blue-500
              via-blue-500
              to-cyan-500
              px-7
              py-4
              text-sm
              font-semibold
              text-white
              shadow-[0_15px_60px_rgba(37,99,235,0.30)]
              transition-all
              duration-300
              hover:scale-[1.04]
              hover:shadow-[0_20px_80px_rgba(34,211,238,0.30)]
            "
          >

            Start a Project

            <span
              className="
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                bg-white
                text-blue-600
                transition-all
                duration-300
                group-hover:rotate-45
              "
            >
              <ArrowUpRight size={13} />
            </span>

          </a>

        </motion.div>

      </section>

    </main>
  );
}

export default Technologies;

import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Sparkles,
  Code2,
  Server,
  Database,
  Cloud,
  BrainCircuit,
  GitBranch,
  Layers3,
  ShieldCheck,
  Zap,
} from "lucide-react";

const technologyGroups = [
  {
    number: "01",
    title: "Frontend Engineering",
    description:
      "Modern interfaces engineered for performance, responsiveness and exceptional user experiences.",
    icon: Code2,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=85",
    technologies: [
      "React",
      "Next.js",
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
    ],
  },
  {
    number: "02",
    title: "Backend Engineering",
    description:
      "Reliable server-side systems, APIs and business logic designed to scale with your product.",
    icon: Server,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",
    technologies: [
      "Node.js",
      "Express.js",
      "PHP",
      "Python",
      "REST APIs",
    ],
  },
  {
    number: "03",
    title: "Databases",
    description:
      "Structured and flexible data architectures built around your application's requirements.",
    icon: Database,
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85",
    technologies: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
    ],
  },
  {
    number: "04",
    title: "Cloud & Infrastructure",
    description:
      "Cloud-ready applications and deployment workflows designed for reliability and scalability.",
    icon: Cloud,
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85",
    technologies: [
      "Cloud Services",
      "Firebase",
      "Deployment",
      "Hosting",
    ],
  },
  {
    number: "05",
    title: "AI & Automation",
    description:
      "Intelligent integrations that automate workflows and create smarter digital experiences.",
    icon: BrainCircuit,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85",
    technologies: [
      "AI APIs",
      "AI Chatbots",
      "Automation",
      "Intelligent Systems",
    ],
  },
  {
    number: "06",
    title: "Development Tools",
    description:
      "Modern engineering tools that help teams collaborate, maintain and continuously improve products.",
    icon: GitBranch,
    image:
      "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=1200&q=85",
    technologies: [
      "Git",
      "GitHub",
      "API Integration",
      "Cloud Tools",
    ],
  },
];

const principles = [
  {
    icon: Layers3,
    title: "Scalable Architecture",
    text: "We choose technologies and structures that can evolve as your business grows.",
  },
  {
    icon: ShieldCheck,
    title: "Security Mindset",
    text: "Security and reliability remain important throughout the development lifecycle.",
  },
  {
    icon: Zap,
    title: "Performance First",
    text: "Fast, responsive and efficient digital experiences are built into our approach.",
  },
];

function Technologies() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020403] text-white">

      {/* =====================================================
          GLOBAL BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

        <div
          className="
            absolute
            left-[-180px]
            top-[5%]
            h-[550px]
            w-[550px]
            rounded-full
            bg-emerald-500/[0.045]
            blur-[160px]
          "
        />

        <div
          className="
            absolute
            right-[-180px]
            top-[25%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-cyan-500/[0.035]
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            left-1/2
            bottom-[-250px]
            h-[550px]
            w-[550px]
            -translate-x-1/2
            rounded-full
            bg-teal-500/[0.03]
            blur-[160px]
          "
        />

        {/* Subtle grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            [background-size:80px_80px]
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
          pb-20
          pt-36
          sm:px-8
          sm:pb-24
          sm:pt-40
          lg:px-12
          lg:pb-28
        "
      >

        {/* Hero Glows */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/4
            top-0
            h-[550px]
            w-[550px]
            rounded-full
            bg-emerald-500/[0.055]
            blur-[150px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-10
            top-32
            h-[400px]
            w-[400px]
            rounded-full
            bg-cyan-500/[0.035]
            blur-[140px]
          "
        />


        <div
          className="
            relative
            mx-auto
            grid
            max-w-7xl
            items-center
            gap-14
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-20
          "
        >

          {/* LEFT */}

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
            className="relative z-10 max-w-5xl"
          >

            {/* Eyebrow */}

            <div className="mb-7 flex items-center gap-3">

              <motion.span
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 4,
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
                  border-emerald-300/25
                  bg-gradient-to-br
                  from-emerald-500/20
                  to-cyan-500/10
                  shadow-[0_0_35px_rgba(16,185,129,0.15)]
                "
              >
                <Sparkles
                  size={13}
                  className="text-emerald-200"
                />
              </motion.span>

              <span
                className="
                  text-[10px]
                  font-semibold
                  tracking-[0.25em]
                  text-emerald-200/70
                "
              >
                TECHNOLOGY STACK
              </span>

            </div>


            {/* Heading */}

            <h1
              className="
                text-5xl
                font-semibold
                leading-[0.98]
                tracking-[-0.055em]
                sm:text-6xl
                md:text-7xl
                lg:text-[82px]
              "
            >

              Technology that

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-white
                  via-emerald-200
                  to-cyan-300
                  bg-clip-text
                  text-transparent
                "
              >
                moves ideas forward.
              </span>

            </h1>


            <p
              className="
                mt-8
                max-w-2xl
                text-base
                leading-7
                text-white/40
                sm:text-lg
              "
            >
              We use modern technologies, proven engineering
              practices and scalable architectures to turn
              business ideas into reliable digital products.
            </p>

          </motion.div>


          {/* HERO IMAGE */}

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.15,
            }}
            className="
              group
              relative
              min-h-[340px]
              overflow-hidden
              rounded-[34px]
              border
              border-white/[0.08]
              bg-white/[0.02]
              shadow-[0_30px_100px_rgba(0,0,0,0.45)]
              sm:min-h-[410px]
            "
          >

            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=90"
              alt="Technology team working on digital products"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                opacity-55
                grayscale-[20%]
                transition-transform
                duration-1000
                group-hover:scale-105
              "
            />

            {/* Dark image overlay */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-[#020403]/85
                via-[#020403]/40
                to-emerald-950/45
              "
            />

            {/* Emerald glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-72
                w-72
                rounded-full
                bg-emerald-400/[0.14]
                blur-[90px]
              "
            />

            {/* Floating visual */}

            <div
              className="
                absolute
                bottom-6
                left-6
                right-6
                rounded-2xl
                border
                border-white/[0.10]
                bg-black/35
                p-5
                backdrop-blur-xl
              "
            >

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-[9px] tracking-[0.22em] text-emerald-300/70">
                    DIGITAL ENGINEERING
                  </p>

                  <p className="mt-2 text-sm font-medium text-white/85">
                    Built for scale. Designed for people.
                  </p>
                </div>

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-emerald-300/20
                    bg-emerald-400/10
                  "
                >
                  <ArrowUpRight
                    size={17}
                    className="text-emerald-200"
                  />
                </div>

              </div>

            </div>

          </motion.div>

        </div>


        {/* Technology Strip */}

        <div className="relative mx-auto mt-20 max-w-7xl">

          <div
            className="
              overflow-hidden
              rounded-2xl
              border
              border-white/[0.07]
              bg-white/[0.018]
              shadow-[0_0_80px_rgba(16,185,129,0.035)]
            "
          >

            <div
              className="
                flex
                min-w-max
                gap-10
                px-6
                py-5
                text-[10px]
                font-medium
                tracking-[0.22em]
                text-white/25
              "
            >

              <span className="transition-colors hover:text-emerald-300">
                REACT
              </span>

              <span className="transition-colors hover:text-cyan-300">
                NEXT.JS
              </span>

              <span className="transition-colors hover:text-emerald-300">
                NODE.JS
              </span>

              <span className="transition-colors hover:text-teal-300">
                EXPRESS
              </span>

              <span className="transition-colors hover:text-emerald-300">
                MONGODB
              </span>

              <span className="transition-colors hover:text-cyan-300">
                MYSQL
              </span>

              <span className="transition-colors hover:text-teal-300">
                POSTGRESQL
              </span>

              <span className="transition-colors hover:text-emerald-200">
                PYTHON
              </span>

              <span className="transition-colors hover:text-cyan-300">
                AI
              </span>

              <span className="transition-colors hover:text-teal-300">
                CLOUD
              </span>

              <span className="transition-colors hover:text-white/70">
                GITHUB
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TECHNOLOGY ECOSYSTEM
      ===================================================== */}

      <section
        className="
          border-t
          border-white/[0.07]
          px-6
          py-24
          sm:px-8
          sm:py-28
          lg:px-12
          lg:py-32
        "
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 max-w-3xl">

            <span
              className="
                text-[10px]
                font-semibold
                tracking-[0.25em]
                text-emerald-300/80
              "
            >
              OUR ECOSYSTEM
            </span>

            <h2
              className="
                mt-5
                text-4xl
                font-semibold
                tracking-[-0.05em]
                sm:text-5xl
                md:text-6xl
              "
            >
              The right tools{" "}

              <span
                className="
                  bg-gradient-to-r
                  from-emerald-300/80
                  via-white/45
                  to-cyan-300/60
                  bg-clip-text
                  text-transparent
                "
              >
                for the right problem.
              </span>

            </h2>

            <p
              className="
                mt-6
                max-w-xl
                text-sm
                leading-7
                text-white/35
              "
            >
              We don't select technology just because it's
              popular. We choose the tools that make sense for
              the product, users and business goals.
            </p>

          </div>


          {/* Technology Cards */}

          <div
            className="
              grid
              gap-4
              md:grid-cols-2
            "
          >

            {technologyGroups.map((group, index) => {

              const Icon = group.icon;

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
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="
                    group
                    relative
                    min-h-[430px]
                    overflow-hidden
                    rounded-[30px]
                    border
                    border-white/[0.07]
                    bg-[#050807]
                    p-8
                    shadow-[0_10px_60px_rgba(0,0,0,0.2)]
                    transition-all
                    duration-500
                    hover:border-emerald-300/20
                    hover:shadow-[0_20px_80px_rgba(16,185,129,0.10)]
                    sm:p-10
                  "
                >

                  {/* =====================================================
                      CARD IMAGE
                  ===================================================== */}

                  <img
                    src={group.image}
                    alt={group.title}
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                      opacity-[0.30]
                      grayscale-[15%]
                      transition-all
                      duration-700
                      group-hover:scale-105
                      group-hover:opacity-[0.40]
                    "
                  />

                  {/* Image overlay */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-b
                      from-[#020403]/45
                      via-[#020403]/65
                      to-[#020403]/90
                    "
                  />

                  {/* Bottom readability overlay */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#020403]/80
                      via-transparent
                      to-transparent
                    "
                  />

                  {/* Emerald Card Glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-24
                      -top-24
                      h-64
                      w-64
                      rounded-full
                      bg-emerald-500/[0.06]
                      blur-[90px]
                      transition-all
                      duration-700
                      group-hover:bg-emerald-500/[0.15]
                    "
                  />

                  {/* Cyan Card Glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -bottom-32
                      -left-32
                      h-56
                      w-56
                      rounded-full
                      bg-cyan-500/[0.035]
                      blur-[90px]
                      transition-all
                      duration-700
                      group-hover:bg-cyan-500/[0.08]
                    "
                  />


                  {/* Top */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      items-center
                      justify-between
                    "
                  >

                    <span
                      className="
                        text-[10px]
                        tracking-[0.2em]
                        text-white/40
                        transition-colors
                        duration-300
                        group-hover:text-emerald-300/80
                      "
                    >
                      {group.number}
                    </span>

                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/[0.12]
                        bg-black/30
                        backdrop-blur-md
                        transition-all
                        duration-300
                        group-hover:border-emerald-300/25
                        group-hover:bg-emerald-400/10
                      "
                    >

                      <Icon
                        size={19}
                        strokeWidth={1.5}
                        className="
                          text-white/55
                          transition-colors
                          duration-300
                          group-hover:text-emerald-200
                        "
                      />

                    </div>

                  </div>


                  {/* Title */}

                  <div className="relative z-10 mt-16">

                    <h3
                      className="
                        text-2xl
                        font-medium
                        tracking-[-0.03em]
                        text-white/95
                        transition-colors
                        duration-300
                        group-hover:text-white
                      "
                    >
                      {group.title}
                    </h3>

                    <p
                      className="
                        mt-4
                        max-w-lg
                        text-sm
                        leading-6
                        text-white/45
                        transition-colors
                        duration-300
                        group-hover:text-white/60
                      "
                    >
                      {group.description}
                    </p>

                  </div>


                  {/* Technology Pills */}

                  <div
                    className="
                      relative
                      z-10
                      mt-8
                      flex
                      flex-wrap
                      gap-2
                    "
                  >

                    {group.technologies.map((technology, techIndex) => (

                      <span
                        key={technology}
                        className={`
                          rounded-full
                          border
                          px-3
                          py-1.5
                          text-[10px]
                          tracking-[0.05em]
                          backdrop-blur-sm
                          transition-all
                          duration-300
                          ${
                            techIndex % 3 === 0
                              ? "border-emerald-400/[0.20] bg-emerald-400/[0.08] text-emerald-100/75 group-hover:border-emerald-300/30 group-hover:bg-emerald-400/[0.12] group-hover:text-emerald-100"
                              : techIndex % 3 === 1
                              ? "border-cyan-400/[0.18] bg-cyan-400/[0.07] text-cyan-100/70 group-hover:border-cyan-300/25 group-hover:bg-cyan-400/[0.10] group-hover:text-cyan-100"
                              : "border-white/[0.12] bg-black/25 text-white/55 group-hover:border-white/[0.18] group-hover:bg-white/[0.05] group-hover:text-white/75"
                          }
                        `}
                      >
                        {technology}
                      </span>

                    ))}

                  </div>

                </motion.article>
              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          ENGINEERING PRINCIPLES
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          border-t
          border-white/[0.07]
          px-6
          py-28
          sm:px-8
          sm:py-32
          lg:px-12
        "
      >

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[450px]
            w-[450px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-emerald-500/[0.035]
            blur-[140px]
          "
        />


        <div className="relative mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <span
              className="
                text-[10px]
                font-semibold
                tracking-[0.25em]
                text-emerald-300/80
              "
            >
              ENGINEERING PRINCIPLES
            </span>

            <h2
              className="
                mt-5
                text-4xl
                font-semibold
                tracking-[-0.05em]
                sm:text-5xl
              "
            >
              Technology is only

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-white/40
                  via-emerald-300/55
                  to-cyan-300/45
                  bg-clip-text
                  text-transparent
                "
              >
                part of the solution.
              </span>

            </h2>

          </div>


          {/* Engineering Visual */}

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
              border-white/[0.07]
            "
          >

            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=85"
              alt="Software engineering workspace"
              className="
                h-full
                w-full
                object-cover
                opacity-30
                grayscale
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
                from-[#020403]/95
                via-[#020403]/60
                to-emerald-950/40
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.12),transparent_45%)]
              "
            />

            <div className="absolute inset-0 flex items-center px-7 sm:px-10">

              <div className="max-w-xl">

                <p
                  className="
                    text-[9px]
                    font-semibold
                    tracking-[0.25em]
                    text-emerald-300/70
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
                    text-white/80
                    sm:text-2xl
                  "
                >
                  Clean architecture. Reliable systems.
                  Better digital experiences.
                </p>

              </div>

            </div>

          </motion.div>


          <div
            className="
              mt-5
              grid
              gap-4
              md:grid-cols-3
            "
          >

            {principles.map((item, index) => {

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
                    border-white/[0.07]
                    bg-white/[0.018]
                    p-7
                    transition-all
                    duration-500
                    hover:border-emerald-300/15
                    hover:bg-emerald-400/[0.025]
                    hover:shadow-[0_15px_60px_rgba(16,185,129,0.06)]
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
                      bg-emerald-500/[0.035]
                      blur-[70px]
                      transition-all
                      duration-500
                      group-hover:bg-emerald-500/[0.10]
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
                      transition-all
                      duration-300
                      group-hover:border-emerald-300/20
                      group-hover:bg-emerald-400/10
                    "
                  >

                    <Icon
                      size={19}
                      strokeWidth={1.5}
                      className="
                        text-white/40
                        transition-colors
                        duration-300
                        group-hover:text-emerald-200
                      "
                    />

                  </div>

                  <h3
                    className="
                      relative
                      mt-6
                      text-sm
                      font-medium
                      text-white/80
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
                      text-white/30
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
          CUSTOM TECHNOLOGY
      ===================================================== */}

      <section
        className="
          border-t
          border-white/[0.07]
          px-6
          py-28
          sm:px-8
          sm:py-32
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
              border-emerald-300/[0.10]
              shadow-[0_20px_100px_rgba(16,185,129,0.05)]
            "
          >

            {/* Main Image */}

            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1800&q=90"
              alt="Team building custom digital technology"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                opacity-35
                grayscale-[15%]
                transition-transform
                duration-1000
                group-hover:scale-105
              "
            />

            {/* Image overlays */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-[#020403]/95
                via-[#020403]/75
                to-[#020403]/35
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#020403]/90
                via-transparent
                to-emerald-950/20
              "
            />

            {/* Emerald Glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-32
                -top-32
                h-[400px]
                w-[400px]
                rounded-full
                bg-emerald-500/[0.10]
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
                bg-cyan-500/[0.055]
                blur-[110px]
              "
            />


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
                    text-emerald-200/75
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
                    sm:text-5xl
                    md:text-6xl
                  "
                >

                  Your business doesn't

                  <span
                    className="
                      block
                      bg-gradient-to-r
                      from-emerald-300
                      via-teal-200
                      to-cyan-300
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
                    text-white/45
                  "
                >
                  From custom APIs and business systems to AI
                  integrations and automation, we can design a
                  technology stack around your exact requirements.
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
                    from-emerald-500
                    to-teal-500
                    px-7
                    py-4
                    text-sm
                    font-semibold
                    text-white
                    shadow-[0_12px_45px_rgba(16,185,129,0.20)]
                    transition-all
                    duration-300
                    hover:scale-[1.03]
                    hover:shadow-[0_18px_60px_rgba(16,185,129,0.30)]
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
                      text-emerald-600
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
          border-white/[0.07]
          px-6
          py-28
          sm:px-8
          sm:py-32
          lg:px-12
        "
      >

        {/* Background visual */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.08]
          "
        >

          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1800&q=80"
            alt=""
            className="h-full w-full object-cover grayscale"
          />

        </div>


        {/* Emerald Glow */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[450px]
            w-[450px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-emerald-500/[0.08]
            blur-[140px]
            sm:h-[550px]
            sm:w-[550px]
            sm:blur-[160px]
          "
        />

        {/* Dark overlay */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[#020403]/75
          "
        />


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
              text-emerald-300/80
            "
          >
            LET'S BUILD
          </span>

          <h2
            className="
              mt-6
              text-4xl
              font-semibold
              tracking-[-0.05em]
              sm:text-5xl
              md:text-6xl
            "
          >

            Have an idea?

            <span
              className="
                block
                bg-gradient-to-r
                from-emerald-200/80
                via-white/50
                to-cyan-300/55
                bg-clip-text
                text-transparent
              "
            >
              Let's engineer it.
            </span>

          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-xl
              text-sm
              leading-6
              text-white/40
            "
          >
            Tell us about your idea and let's build the
            technology behind your next digital product.
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
              from-emerald-500
              to-teal-500
              px-7
              py-4
              text-sm
              font-semibold
              text-white
              shadow-[0_15px_60px_rgba(16,185,129,0.20)]
              transition-all
              duration-300
              hover:scale-[1.03]
              hover:shadow-[0_20px_70px_rgba(16,185,129,0.30)]
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
                text-emerald-600
                transition-transform
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



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

        {/* Emerald atmosphere */}
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

        {/* Cyan atmosphere */}
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

        {/* Teal bottom atmosphere */}
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

      </div>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative px-6 pb-20 pt-36 sm:px-8 sm:pb-24 sm:pt-40 lg:px-12">

        {/* Hero Glow */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/3
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
            className="max-w-5xl"
          >

            {/* Eyebrow */}

            <div className="mb-7 flex items-center gap-3">

              <span
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
              </span>

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
                lg:text-[86px]
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


          {/* Technology Strip */}

          <div
            className="
              mt-20
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
                    overflow-hidden
                    rounded-[30px]
                    border
                    border-white/[0.07]
                    bg-gradient-to-br
                    from-white/[0.035]
                    via-white/[0.018]
                    to-emerald-500/[0.012]
                    p-8
                    shadow-[0_10px_60px_rgba(0,0,0,0.2)]
                    transition-all
                    duration-500
                    hover:border-emerald-300/20
                    hover:shadow-[0_20px_80px_rgba(16,185,129,0.10)]
                    sm:p-10
                  "
                >

                  {/* Card Glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-24
                      -top-24
                      h-64
                      w-64
                      rounded-full
                      bg-emerald-500/[0.045]
                      blur-[90px]
                      transition-all
                      duration-700
                      group-hover:bg-emerald-500/[0.13]
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -bottom-32
                      -left-32
                      h-56
                      w-56
                      rounded-full
                      bg-cyan-500/[0.025]
                      blur-[90px]
                      transition-all
                      duration-700
                      group-hover:bg-cyan-500/[0.07]
                    "
                  />


                  {/* Top */}

                  <div
                    className="
                      relative
                      flex
                      items-center
                      justify-between
                    "
                  >

                    <span
                      className="
                        text-[10px]
                        tracking-[0.2em]
                        text-white/20
                        transition-colors
                        duration-300
                        group-hover:text-emerald-300/60
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
                          text-white/30
                          transition-colors
                          duration-300
                          group-hover:text-emerald-200
                        "
                      />

                    </div>

                  </div>


                  {/* Title */}

                  <div className="relative mt-12">

                    <h3
                      className="
                        text-2xl
                        font-medium
                        tracking-[-0.03em]
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
                        text-white/30
                        transition-colors
                        duration-300
                        group-hover:text-white/40
                      "
                    >
                      {group.description}
                    </p>

                  </div>


                  {/* Technology Pills */}

                  <div
                    className="
                      relative
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
                          transition-all
                          duration-300
                          ${
                            techIndex % 3 === 0
                              ? "border-emerald-400/[0.13] bg-emerald-400/[0.045] text-emerald-200/60 group-hover:border-emerald-300/25 group-hover:text-emerald-100/75"
                              : techIndex % 3 === 1
                              ? "border-cyan-400/[0.11] bg-cyan-400/[0.035] text-cyan-200/55 group-hover:border-cyan-300/20 group-hover:text-cyan-100/70"
                              : "border-white/[0.08] bg-white/[0.025] text-white/40 group-hover:border-white/[0.14] group-hover:text-white/60"
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


          <div
            className="
              mt-16
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
              overflow-hidden
              rounded-[34px]
              border
              border-emerald-300/[0.10]
              bg-gradient-to-br
              from-emerald-500/[0.065]
              via-white/[0.018]
              to-cyan-500/[0.04]
              p-8
              shadow-[0_20px_100px_rgba(16,185,129,0.05)]
              sm:p-12
              lg:p-16
            "
          >

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
                bg-emerald-500/[0.09]
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

            <div className="relative max-w-3xl">

              <span
                className="
                  text-[10px]
                  font-semibold
                  tracking-[0.25em]
                  text-emerald-200/70
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
                "
              >

                Your business doesn't

                <span
                  className="
                    bg-gradient-to-r
                    from-emerald-300
                    via-teal-200
                    to-cyan-300
                    bg-clip-text
                    text-transparent
                  "
                >
                  {" "}need generic technology.
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
            bg-emerald-500/[0.06]
            blur-[140px]
            sm:h-[550px]
            sm:w-[550px]
            sm:blur-[160px]
          "
        />

        {/* Cyan Glow */}

        <div
          className="
            pointer-events-none
            absolute
            left-[25%]
            top-[40%]
            h-[250px]
            w-[250px]
            rounded-full
            bg-cyan-500/[0.035]
            blur-[100px]
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
                via-white/40
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
              text-white/35
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


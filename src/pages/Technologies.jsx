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
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative px-6 pb-24 pt-40 sm:px-8 lg:px-12">

        <div
          className="
            pointer-events-none
            absolute
            left-1/3
            top-0
            h-[500px]
            w-[500px]
            rounded-full
            bg-blue-600/[0.06]
            blur-[140px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-10
            top-40
            h-[350px]
            w-[350px]
            rounded-full
            bg-violet-600/[0.06]
            blur-[120px]
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
                  flex h-7 w-7
                  items-center justify-center
                  rounded-full
                  border border-violet-400/20
                  bg-violet-400/10
                "
              >
                <Sparkles
                  size={13}
                  className="text-violet-300"
                />
              </span>

              <span
                className="
                  text-[10px]
                  font-medium
                  tracking-[0.25em]
                  text-violet-300/70
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

              <span className="block text-white/30">
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


          {/* Stack marquee-style line */}

          <div
            className="
              mt-20
              overflow-hidden
              border-y
              border-white/[0.06]
              py-5
            "
          >

            <div
              className="
                flex
                min-w-max
                gap-10
                text-[10px]
                font-medium
                tracking-[0.22em]
                text-white/20
              "
            >
              <span>REACT</span>
              <span>NEXT.JS</span>
              <span>NODE.JS</span>
              <span>EXPRESS</span>
              <span>MONGODB</span>
              <span>MYSQL</span>
              <span>POSTGRESQL</span>
              <span>PYTHON</span>
              <span>AI</span>
              <span>CLOUD</span>
              <span>GITHUB</span>
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
          border-white/[0.06]
          px-6
          py-28
          sm:px-8
          lg:px-12
        "
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 max-w-3xl">

            <span
              className="
                text-[10px]
                font-medium
                tracking-[0.25em]
                text-violet-300/70
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
              The right tools
              <span className="text-white/30">
                {" "}for the right problem.
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
                    y: -5,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[30px]
                    border
                    border-white/[0.07]
                    bg-white/[0.025]
                    p-8
                    transition-all
                    duration-500
                    hover:border-violet-300/15
                    hover:bg-white/[0.035]
                    sm:p-10
                  "
                >

                  {/* Glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-24
                      -top-24
                      h-64
                      w-64
                      rounded-full
                      bg-violet-500/[0.05]
                      blur-[90px]
                      transition-all
                      duration-700
                      group-hover:bg-violet-500/[0.10]
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
                      "
                    >
                      {group.number}
                    </span>

                    <Icon
                      size={20}
                      strokeWidth={1.5}
                      className="
                        text-white/30
                        transition-colors
                        duration-300
                        group-hover:text-violet-200
                      "
                    />

                  </div>


                  {/* Title */}

                  <div className="relative mt-12">

                    <h3
                      className="
                        text-2xl
                        font-medium
                        tracking-[-0.03em]
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
                      "
                    >
                      {group.description}
                    </p>

                  </div>


                  {/* Technology pills */}

                  <div
                    className="
                      relative
                      mt-8
                      flex
                      flex-wrap
                      gap-2
                    "
                  >

                    {group.technologies.map((technology) => (

                      <span
                        key={technology}
                        className="
                          rounded-full
                          border
                          border-white/[0.08]
                          bg-white/[0.03]
                          px-3
                          py-1.5
                          text-[10px]
                          tracking-[0.05em]
                          text-white/40
                          transition-all
                          duration-300
                          group-hover:border-white/[0.12]
                          group-hover:text-white/60
                        "
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
          border-t
          border-white/[0.06]
          px-6
          py-32
          sm:px-8
          lg:px-12
        "
      >

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <span
              className="
                text-[10px]
                font-medium
                tracking-[0.25em]
                text-violet-300/70
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
              <span className="block text-white/30">
                part of the solution.
              </span>
            </h2>

          </div>


          <div
            className="
              mt-16
              grid
              gap-10
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
                  className="
                    border-t
                    border-white/[0.08]
                    pt-7
                  "
                >

                  <Icon
                    size={20}
                    strokeWidth={1.5}
                    className="text-white/40"
                  />

                  <h3
                    className="
                      mt-6
                      text-sm
                      font-medium
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
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
          border-white/[0.06]
          px-6
          py-32
          sm:px-8
          lg:px-12
        "
      >

        <div
          className="
            mx-auto
            max-w-7xl
          "
        >

          <div
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-white/[0.07]
              bg-white/[0.025]
              p-8
              sm:p-12
              lg:p-16
            "
          >

            <div
              className="
                pointer-events-none
                absolute
                -right-32
                -top-32
                h-[400px]
                w-[400px]
                rounded-full
                bg-violet-500/[0.07]
                blur-[120px]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-32
                -left-32
                h-[300px]
                w-[300px]
                rounded-full
                bg-blue-500/[0.05]
                blur-[110px]
              "
            />

            <div className="relative max-w-3xl">

              <span
                className="
                  text-[10px]
                  font-medium
                  tracking-[0.25em]
                  text-violet-300/70
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
                <span className="text-white/30">
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
                  group
                  mt-9
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-white
                  px-7
                  py-4
                  text-sm
                  font-semibold
                  text-black
                  transition-all
                  duration-300
                  hover:scale-[1.03]
                "
              >
                Discuss Your Project

                <span
                  className="
                    flex h-6 w-6
                    items-center
                    justify-center
                    rounded-full
                    bg-black
                    text-white
                    transition-transform
                    duration-300
                    group-hover:rotate-45
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
          CTA
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          border-t
          border-white/[0.06]
          px-6
          py-32
          sm:px-8
          lg:px-12
        "
      >

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[400px]
            w-[400px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-violet-500/[0.07]
            blur-[130px]
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
              font-medium
              tracking-[0.25em]
              text-violet-300/70
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

            <span className="block text-white/30">
              Let's engineer it.
            </span>
          </h2>

          <a
            href="/contact"
            className="
              group
              mt-9
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-white
              px-7
              py-4
              text-sm
              font-semibold
              text-black
              transition-all
              duration-300
              hover:scale-[1.03]
            "
          >
            Start a Project

            <span
              className="
                flex h-6 w-6
                items-center
                justify-center
                rounded-full
                bg-black
                text-white
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
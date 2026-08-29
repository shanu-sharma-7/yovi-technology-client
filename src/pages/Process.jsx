import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Lightbulb,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Understand",
    label: "DISCOVERY",
    description:
      "We start by understanding your business, users, challenges and objectives. The goal is to understand the problem before building the solution.",
    icon: Search,
    points: [
      "Business requirements",
      "User needs",
      "Goals & objectives",
    ],
  },
  {
    number: "02",
    title: "Plan",
    label: "STRATEGY",
    description:
      "We turn requirements into a clear product and technology strategy with the right features, architecture and roadmap.",
    icon: Target,
    points: [
      "Product roadmap",
      "Technology planning",
      "Project milestones",
    ],
  },
  {
    number: "03",
    title: "Design",
    label: "EXPERIENCE",
    description:
      "We create modern interfaces and intuitive user experiences that balance aesthetics, usability and business goals.",
    icon: Lightbulb,
    points: [
      "UI/UX design",
      "Design systems",
      "Responsive experiences",
    ],
  },
  {
    number: "04",
    title: "Develop",
    label: "ENGINEERING",
    description:
      "Our engineers transform the approved design into a scalable digital product using modern technologies and clean development practices.",
    icon: Code2,
    points: [
      "Frontend development",
      "Backend & APIs",
      "Database integration",
    ],
  },
  {
    number: "05",
    title: "Test",
    label: "QUALITY",
    description:
      "Before launch, we test the product across functionality, responsiveness, performance and reliability to ensure everything works as expected.",
    icon: ShieldCheck,
    points: [
      "Functional testing",
      "Performance checks",
      "Responsive testing",
    ],
  },
  {
    number: "06",
    title: "Launch",
    label: "GO LIVE",
    description:
      "Once everything is ready, we deploy the solution and make it available to your customers with a smooth and reliable launch.",
    icon: Rocket,
    points: [
      "Production deployment",
      "Configuration",
      "Launch monitoring",
    ],
  },
  {
    number: "07",
    title: "Support",
    label: "CONTINUOUS GROWTH",
    description:
      "Our relationship doesn't end after launch. We help maintain, improve and evolve your digital solution as your business grows.",
    icon: CheckCircle2,
    points: [
      "Maintenance",
      "Improvements",
      "Ongoing support",
    ],
  },
];

function Process() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            left-[15%]
            top-[-150px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-violet-600/[0.07]
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            right-[-100px]
            top-[35%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-blue-500/[0.05]
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            bottom-[-150px]
            left-[30%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-violet-500/[0.05]
            blur-[150px]
          "
        />

      </div>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative px-6 pb-24 pt-40 sm:px-8 lg:px-12">

        <div className="mx-auto max-w-7xl">

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
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-violet-400/20
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
                HOW WE WORK
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
              From idea

              <span className="block text-white/30">
                to impact.
              </span>
            </h1>


            {/* Description */}

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
              A structured approach that brings strategy,
              design, engineering and continuous improvement
              together to create digital solutions that deliver
              real business value.
            </p>

          </motion.div>


          {/* Process statement */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="
              mt-20
              grid
              gap-4
              border-t
              border-white/[0.07]
              pt-8
              sm:grid-cols-3
            "
          >

            <div>
              <span className="text-[9px] tracking-[0.22em] text-white/20">
                STRATEGY
              </span>

              <p className="mt-2 text-sm text-white/50">
                Understand the business.
              </p>
            </div>

            <div>
              <span className="text-[9px] tracking-[0.22em] text-white/20">
                EXECUTION
              </span>

              <p className="mt-2 text-sm text-white/50">
                Build with precision.
              </p>
            </div>

            <div>
              <span className="text-[9px] tracking-[0.22em] text-white/20">
                GROWTH
              </span>

              <p className="mt-2 text-sm text-white/50">
                Improve continuously.
              </p>
            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          PROCESS TIMELINE
      ===================================================== */}

      <section
        className="
          relative
          border-t
          border-white/[0.06]
          px-6
          py-28
          sm:px-8
          lg:px-12
        "
      >

        <div className="mx-auto max-w-6xl">

          {/* Section heading */}

          <div className="mb-20">

            <span
              className="
                text-[10px]
                font-medium
                tracking-[0.25em]
                text-violet-300/70
              "
            >
              THE PROCESS
            </span>

            <h2
              className="
                mt-5
                max-w-3xl
                text-4xl
                font-semibold
                tracking-[-0.05em]
                sm:text-5xl
              "
            >
              A process designed
              <span className="text-white/30">
                {" "}for better outcomes.
              </span>
            </h2>

          </div>


          {/* Timeline */}

          <div className="relative">

            {/* Vertical line */}

            <div
              className="
                absolute
                left-[23px]
                top-0
                bottom-0
                hidden
                w-px
                bg-gradient-to-b
                from-violet-400/40
                via-white/[0.08]
                to-transparent
                sm:block
              "
            />


            <div className="space-y-6">

              {processSteps.map((step, index) => {

                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.number}
                    initial={{
                      opacity: 0,
                      y: 35,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.05,
                    }}
                    className="group relative"
                  >

                    {/* Timeline dot */}

                    <div
                      className="
                        absolute
                        left-0
                        top-8
                        z-10
                        hidden
                        h-[47px]
                        w-[47px]
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/[0.10]
                        bg-[#080808]
                        sm:flex
                      "
                    >

                      <div
                        className="
                          h-2
                          w-2
                          rounded-full
                          bg-violet-300
                          shadow-lg
                          shadow-violet-400/40
                          transition-all
                          duration-300
                          group-hover:scale-150
                        "
                      />

                    </div>


                    {/* Card */}

                    <div
                      className="
                        relative
                        ml-0
                        overflow-hidden
                        rounded-[28px]
                        border
                        border-white/[0.07]
                        bg-white/[0.025]
                        p-7
                        transition-all
                        duration-500
                        group-hover:border-violet-300/15
                        group-hover:bg-white/[0.035]
                        sm:ml-[90px]
                        sm:p-10
                      "
                    >

                      {/* Glow */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          -right-32
                          -top-32
                          h-[280px]
                          w-[280px]
                          rounded-full
                          bg-violet-500/[0.04]
                          blur-[100px]
                          transition-all
                          duration-700
                          group-hover:bg-violet-500/[0.09]
                        "
                      />


                      {/* Top row */}

                      <div
                        className="
                          relative
                          flex
                          items-start
                          justify-between
                          gap-6
                        "
                      >

                        <div>

                          <span
                            className="
                              text-[9px]
                              font-medium
                              tracking-[0.22em]
                              text-violet-300/60
                            "
                          >
                            {step.label}
                          </span>

                          <h3
                            className="
                              mt-3
                              text-3xl
                              font-medium
                              tracking-[-0.04em]
                              sm:text-4xl
                            "
                          >
                            {step.title}
                          </h3>

                        </div>


                        {/* Number */}

                        <span
                          className="
                            text-4xl
                            font-semibold
                            tracking-[-0.05em]
                            text-white/[0.08]
                            transition-colors
                            duration-300
                            group-hover:text-violet-200/20
                            sm:text-5xl
                          "
                        >
                          {step.number}
                        </span>

                      </div>


                      {/* Content */}

                      <div
                        className="
                          relative
                          mt-7
                          grid
                          gap-8
                          md:grid-cols-[1fr_auto]
                          md:items-end
                        "
                      >

                        <p
                          className="
                            max-w-2xl
                            text-sm
                            leading-7
                            text-white/35
                          "
                        >
                          {step.description}
                        </p>


                        {/* Icon */}

                        <div
                          className="
                            hidden
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-2xl
                            border
                            border-white/[0.08]
                            bg-white/[0.025]
                            text-white/35
                            transition-all
                            duration-500
                            group-hover:border-violet-300/20
                            group-hover:text-violet-200
                            md:flex
                          "
                        >
                          <Icon
                            size={22}
                            strokeWidth={1.5}
                          />
                        </div>

                      </div>


                      {/* Points */}

                      <div
                        className="
                          relative
                          mt-8
                          flex
                          flex-wrap
                          gap-2
                        "
                      >

                        {step.points.map((point) => (

                          <span
                            key={point}
                            className="
                              rounded-full
                              border
                              border-white/[0.07]
                              bg-white/[0.025]
                              px-3
                              py-1.5
                              text-[10px]
                              text-white/35
                              transition-all
                              duration-300
                              group-hover:border-white/[0.12]
                              group-hover:text-white/50
                            "
                          >
                            {point}
                          </span>

                        ))}

                      </div>

                    </div>

                  </motion.div>
                );

              })}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PRINCIPLE
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

          <div
            className="
              grid
              gap-14
              lg:grid-cols-[0.9fr_1.1fr]
              lg:items-center
            "
          >

            {/* Left */}

            <div>

              <span
                className="
                  text-[10px]
                  font-medium
                  tracking-[0.25em]
                  text-violet-300/70
                "
              >
                OUR PRINCIPLE
              </span>

              <h2
                className="
                  mt-5
                  text-4xl
                  font-semibold
                  leading-tight
                  tracking-[-0.05em]
                  sm:text-5xl
                "
              >
                Great products aren't
                <span className="block text-white/30">
                  built by accident.
                </span>
              </h2>

            </div>


            {/* Right */}

            <div>

              <div
                className="
                  relative
                  rounded-[30px]
                  border
                  border-white/[0.07]
                  bg-white/[0.025]
                  p-8
                  sm:p-10
                "
              >

                <BrainCircuit
                  size={28}
                  strokeWidth={1.5}
                  className="text-violet-200/60"
                />

                <p
                  className="
                    mt-7
                    text-lg
                    leading-8
                    tracking-[-0.02em]
                    text-white/55
                    sm:text-xl
                  "
                >
                  We believe successful digital products come
                  from the combination of{" "}
                  <span className="text-white">
                    clear strategy, thoughtful design,
                    strong engineering
                  </span>{" "}
                  and continuous improvement.
                </p>

              </div>

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
            h-[450px]
            w-[450px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-violet-500/[0.07]
            blur-[140px]
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
            READY TO BUILD?
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
            Let's turn your idea

            <span className="block text-white/30">
              into something real.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-xl
              text-sm
              leading-7
              text-white/35
            "
          >
            Tell us what you're building and let's explore
            how technology can move your business forward.
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
            Start a Project

            <span
              className="
                flex
                h-6
                w-6
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

export default Process;
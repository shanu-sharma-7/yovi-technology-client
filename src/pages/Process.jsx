
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
    accent: "violet",
    points: ["Business requirements", "User needs", "Goals & objectives"],
  },
  {
    number: "02",
    title: "Plan",
    label: "STRATEGY",
    description:
      "We turn requirements into a clear product and technology strategy with the right features, architecture and roadmap.",
    icon: Target,
    accent: "indigo",
    points: ["Product roadmap", "Technology planning", "Project milestones"],
  },
  {
    number: "03",
    title: "Design",
    label: "EXPERIENCE",
    description:
      "We create modern interfaces and intuitive user experiences that balance aesthetics, usability and business goals.",
    icon: Lightbulb,
    accent: "fuchsia",
    points: ["UI/UX design", "Design systems", "Responsive experiences"],
  },
  {
    number: "04",
    title: "Develop",
    label: "ENGINEERING",
    description:
      "Our engineers transform the approved design into a scalable digital product using modern technologies and clean development practices.",
    icon: Code2,
    accent: "blue",
    points: ["Frontend development", "Backend & APIs", "Database integration"],
  },
  {
    number: "05",
    title: "Test",
    label: "QUALITY",
    description:
      "Before launch, we test the product across functionality, responsiveness, performance and reliability to ensure everything works as expected.",
    icon: ShieldCheck,
    accent: "cyan",
    points: ["Functional testing", "Performance checks", "Responsive testing"],
  },
  {
    number: "06",
    title: "Launch",
    label: "GO LIVE",
    description:
      "Once everything is ready, we deploy the solution and make it available to your customers with a smooth and reliable launch.",
    icon: Rocket,
    accent: "sky",
    points: ["Production deployment", "Configuration", "Launch monitoring"],
  },
  {
    number: "07",
    title: "Support",
    label: "CONTINUOUS GROWTH",
    description:
      "Our relationship doesn't end after launch. We help maintain, improve and evolve your digital solution as your business grows.",
    icon: CheckCircle2,
    accent: "emerald",
    points: ["Maintenance", "Improvements", "Ongoing support"],
  },
];

const accentStyles = {
  violet: {
    glow: "bg-violet-500/[0.07]",
    hoverGlow: "group-hover:bg-violet-500/[0.13]",
    border: "group-hover:border-violet-400/20",
    icon: "group-hover:text-violet-200",
    iconBg: "group-hover:bg-violet-400/[0.10]",
    iconBorder: "group-hover:border-violet-300/20",
    dot: "bg-violet-300",
    shadow: "shadow-violet-400/40",
    label: "text-violet-300/70",
    number: "group-hover:text-violet-200/20",
  },

  indigo: {
    glow: "bg-indigo-500/[0.07]",
    hoverGlow: "group-hover:bg-indigo-500/[0.13]",
    border: "group-hover:border-indigo-400/20",
    icon: "group-hover:text-indigo-200",
    iconBg: "group-hover:bg-indigo-400/[0.10]",
    iconBorder: "group-hover:border-indigo-300/20",
    dot: "bg-indigo-300",
    shadow: "shadow-indigo-400/40",
    label: "text-indigo-300/70",
    number: "group-hover:text-indigo-200/20",
  },

  fuchsia: {
    glow: "bg-fuchsia-500/[0.06]",
    hoverGlow: "group-hover:bg-fuchsia-500/[0.12]",
    border: "group-hover:border-fuchsia-400/20",
    icon: "group-hover:text-fuchsia-200",
    iconBg: "group-hover:bg-fuchsia-400/[0.10]",
    iconBorder: "group-hover:border-fuchsia-300/20",
    dot: "bg-fuchsia-300",
    shadow: "shadow-fuchsia-400/40",
    label: "text-fuchsia-300/70",
    number: "group-hover:text-fuchsia-200/20",
  },

  blue: {
    glow: "bg-blue-500/[0.07]",
    hoverGlow: "group-hover:bg-blue-500/[0.13]",
    border: "group-hover:border-blue-400/20",
    icon: "group-hover:text-blue-200",
    iconBg: "group-hover:bg-blue-400/[0.10]",
    iconBorder: "group-hover:border-blue-300/20",
    dot: "bg-blue-300",
    shadow: "shadow-blue-400/40",
    label: "text-blue-300/70",
    number: "group-hover:text-blue-200/20",
  },

  cyan: {
    glow: "bg-cyan-500/[0.06]",
    hoverGlow: "group-hover:bg-cyan-500/[0.12]",
    border: "group-hover:border-cyan-400/20",
    icon: "group-hover:text-cyan-200",
    iconBg: "group-hover:bg-cyan-400/[0.10]",
    iconBorder: "group-hover:border-cyan-300/20",
    dot: "bg-cyan-300",
    shadow: "shadow-cyan-400/40",
    label: "text-cyan-300/70",
    number: "group-hover:text-cyan-200/20",
  },

  sky: {
    glow: "bg-sky-500/[0.06]",
    hoverGlow: "group-hover:bg-sky-500/[0.12]",
    border: "group-hover:border-sky-400/20",
    icon: "group-hover:text-sky-200",
    iconBg: "group-hover:bg-sky-400/[0.10]",
    iconBorder: "group-hover:border-sky-300/20",
    dot: "bg-sky-300",
    shadow: "shadow-sky-400/40",
    label: "text-sky-300/70",
    number: "group-hover:text-sky-200/20",
  },

  emerald: {
    glow: "bg-emerald-500/[0.06]",
    hoverGlow: "group-hover:bg-emerald-500/[0.12]",
    border: "group-hover:border-emerald-400/20",
    icon: "group-hover:text-emerald-200",
    iconBg: "group-hover:bg-emerald-400/[0.10]",
    iconBorder: "group-hover:border-emerald-300/20",
    dot: "bg-emerald-300",
    shadow: "shadow-emerald-400/40",
    label: "text-emerald-300/70",
    number: "group-hover:text-emerald-200/20",
  },
};

function Process() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#040406] text-white">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Violet */}

        <div
          className="
            absolute
            left-[8%]
            top-[-180px]
            h-[560px]
            w-[560px]
            rounded-full
            bg-violet-600/[0.09]
            blur-[160px]
          "
        />

        {/* Blue */}

        <div
          className="
            absolute
            right-[-120px]
            top-[30%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-blue-600/[0.07]
            blur-[150px]
          "
        />

        {/* Cyan */}

        <div
          className="
            absolute
            bottom-[-180px]
            left-[35%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-cyan-500/[0.045]
            blur-[160px]
          "
        />

        {/* Subtle center light */}

        <div
          className="
            absolute
            left-1/2
            top-[40%]
            h-[300px]
            w-[300px]
            -translate-x-1/2
            rounded-full
            bg-indigo-500/[0.035]
            blur-[130px]
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
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-violet-400/20
                  bg-gradient-to-br
                  from-violet-400/15
                  to-blue-400/10
                  shadow-[0_0_30px_rgba(139,92,246,0.12)]
                "
              >
                <Sparkles
                  size={14}
                  className="text-violet-200"
                />
              </span>

              <span
                className="
                  text-[10px]
                  font-medium
                  tracking-[0.25em]
                  text-violet-200/70
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

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-white
                  via-violet-200
                  to-blue-300
                  bg-clip-text
                  text-transparent
                "
              >
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

            {[
              {
                title: "STRATEGY",
                text: "Understand the business.",
                accent: "text-violet-300/60",
              },
              {
                title: "EXECUTION",
                text: "Build with precision.",
                accent: "text-blue-300/60",
              },
              {
                title: "GROWTH",
                text: "Improve continuously.",
                accent: "text-cyan-300/60",
              },
            ].map((item) => (

              <div key={item.title}>

                <span
                  className={`text-[9px] tracking-[0.22em] ${item.accent}`}
                >
                  {item.title}
                </span>

                <p className="mt-2 text-sm text-white/50">
                  {item.text}
                </p>

              </div>

            ))}

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

              <span
                className="
                  bg-gradient-to-r
                  from-white/40
                  via-white/25
                  to-white/15
                  bg-clip-text
                  text-transparent
                "
              >
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
                bottom-0
                left-[23px]
                top-0
                hidden
                w-px
                bg-gradient-to-b
                from-violet-400/40
                via-indigo-400/20
                to-cyan-400/10
                sm:block
              "
            />


            <div className="space-y-6">

              {processSteps.map((step, index) => {

                const Icon = step.icon;
                const theme = accentStyles[step.accent];

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
                        bg-[#07070a]
                        backdrop-blur-xl
                        sm:flex
                      "
                    >

                      <div
                        className={`
                          h-2
                          w-2
                          rounded-full
                          ${theme.dot}
                          shadow-lg
                          ${theme.shadow}
                          transition-all
                          duration-300
                          group-hover:scale-150
                        `}
                      />

                    </div>


                    {/* Card */}

                    <div
                      className={`
                        relative
                        ml-0
                        overflow-hidden
                        rounded-[28px]
                        border
                        border-white/[0.07]
                        bg-gradient-to-br
                        from-white/[0.035]
                        to-white/[0.015]
                        p-7
                        backdrop-blur-xl
                        transition-all
                        duration-500
                        ${theme.border}
                        group-hover:shadow-[0_20px_70px_rgba(0,0,0,0.25)]
                        sm:ml-[90px]
                        sm:p-10
                      `}
                    >

                      {/* Glow */}

                      <div
                        className={`
                          pointer-events-none
                          absolute
                          -right-32
                          -top-32
                          h-[280px]
                          w-[280px]
                          rounded-full
                          ${theme.glow}
                          blur-[100px]
                          transition-all
                          duration-700
                          ${theme.hoverGlow}
                        `}
                      />


                      {/* Secondary glow */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          bottom-[-100px]
                          left-[-100px]
                          h-[200px]
                          w-[200px]
                          rounded-full
                          bg-blue-500/[0.025]
                          blur-[90px]
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
                            className={`
                              text-[9px]
                              font-medium
                              tracking-[0.22em]
                              ${theme.label}
                            `}
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
                          className={`
                            text-4xl
                            font-semibold
                            tracking-[-0.05em]
                            text-white/[0.08]
                            transition-colors
                            duration-300
                            ${theme.number}
                            sm:text-5xl
                          `}
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
                          className={`
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
                            ${theme.iconBorder}
                            ${theme.iconBg}
                            ${theme.icon}
                            md:flex
                          `}
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
                              group-hover:border-white/[0.13]
                              group-hover:bg-white/[0.04]
                              group-hover:text-white/55
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
          relative
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

                <span
                  className="
                    block
                    bg-gradient-to-r
                    from-white/40
                    to-white/15
                    bg-clip-text
                    text-transparent
                  "
                >
                  built by accident.
                </span>
              </h2>

            </div>


            {/* Right */}

            <div>

              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-white/[0.07]
                  bg-gradient-to-br
                  from-violet-500/[0.07]
                  via-white/[0.025]
                  to-blue-500/[0.05]
                  p-8
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:border-violet-300/20
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
                    bg-violet-500/[0.08]
                    blur-[100px]
                    transition-all
                    duration-700
                    group-hover:bg-violet-500/[0.14]
                  "
                />

                <div className="relative">

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-violet-300/15
                      bg-violet-400/[0.08]
                    "
                  >
                    <BrainCircuit
                      size={24}
                      strokeWidth={1.5}
                      className="text-violet-200/70"
                    />
                  </div>

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

                    <span
                      className="
                        bg-gradient-to-r
                        from-violet-200
                        to-blue-200
                        bg-clip-text
                        text-transparent
                      "
                    >
                      clear strategy, thoughtful design,
                      strong engineering
                    </span>

                    {" "}and continuous improvement.
                  </p>

                </div>

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

        {/* Main CTA glow */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-violet-500/[0.08]
            blur-[150px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            left-[20%]
            top-1/2
            h-[250px]
            w-[250px]
            -translate-y-1/2
            rounded-full
            bg-blue-500/[0.05]
            blur-[120px]
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

            <span
              className="
                block
                bg-gradient-to-r
                from-white/45
                via-violet-200/40
                to-blue-200/35
                bg-clip-text
                text-transparent
              "
            >
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
              bg-gradient-to-r
              from-white
              to-violet-100
              px-7
              py-4
              text-sm
              font-semibold
              text-black
              shadow-[0_10px_40px_rgba(139,92,246,0.18)]
              transition-all
              duration-300
              hover:scale-[1.04]
              hover:shadow-[0_15px_50px_rgba(139,92,246,0.28)]
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


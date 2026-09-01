
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
    accent: "emerald",
    points: ["Business requirements", "User needs", "Goals & objectives"],
  },
  {
    number: "02",
    title: "Plan",
    label: "STRATEGY",
    description:
      "We turn requirements into a clear product and technology strategy with the right features, architecture and roadmap.",
    icon: Target,
    accent: "teal",
    points: ["Product roadmap", "Technology planning", "Project milestones"],
  },
  {
    number: "03",
    title: "Design",
    label: "EXPERIENCE",
    description:
      "We create modern interfaces and intuitive user experiences that balance aesthetics, usability and business goals.",
    icon: Lightbulb,
    accent: "cyan",
    points: ["UI/UX design", "Design systems", "Responsive experiences"],
  },
  {
    number: "04",
    title: "Develop",
    label: "ENGINEERING",
    description:
      "Our engineers transform the approved design into a scalable digital product using modern technologies and clean development practices.",
    icon: Code2,
    accent: "emerald",
    points: ["Frontend development", "Backend & APIs", "Database integration"],
  },
  {
    number: "05",
    title: "Test",
    label: "QUALITY",
    description:
      "Before launch, we test the product across functionality, responsiveness, performance and reliability to ensure everything works as expected.",
    icon: ShieldCheck,
    accent: "teal",
    points: ["Functional testing", "Performance checks", "Responsive testing"],
  },
  {
    number: "06",
    title: "Launch",
    label: "GO LIVE",
    description:
      "Once everything is ready, we deploy the solution and make it available to your customers with a smooth and reliable launch.",
    icon: Rocket,
    accent: "cyan",
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
  emerald: {
    glow: "bg-emerald-500/[0.06]",
    hoverGlow: "group-hover:bg-emerald-500/[0.12]",
    border: "group-hover:border-emerald-400/20",
    icon: "group-hover:text-emerald-200",
    iconBg: "group-hover:bg-emerald-400/[0.09]",
    iconBorder: "group-hover:border-emerald-300/20",
    dot: "bg-emerald-300",
    shadow: "shadow-emerald-400/40",
    label: "text-emerald-300/70",
    number: "group-hover:text-emerald-200/20",
  },

  teal: {
    glow: "bg-teal-500/[0.06]",
    hoverGlow: "group-hover:bg-teal-500/[0.12]",
    border: "group-hover:border-teal-400/20",
    icon: "group-hover:text-teal-200",
    iconBg: "group-hover:bg-teal-400/[0.09]",
    iconBorder: "group-hover:border-teal-300/20",
    dot: "bg-teal-300",
    shadow: "shadow-teal-400/40",
    label: "text-teal-300/70",
    number: "group-hover:text-teal-200/20",
  },

  cyan: {
    glow: "bg-cyan-500/[0.055]",
    hoverGlow: "group-hover:bg-cyan-500/[0.11]",
    border: "group-hover:border-cyan-400/20",
    icon: "group-hover:text-cyan-200",
    iconBg: "group-hover:bg-cyan-400/[0.09]",
    iconBorder: "group-hover:border-cyan-300/20",
    dot: "bg-cyan-300",
    shadow: "shadow-cyan-400/40",
    label: "text-cyan-300/70",
    number: "group-hover:text-cyan-200/20",
  },
};

function Process() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020403] text-white">

      {/* =====================================================
          GLOBAL AMBIENT BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Emerald atmosphere */}
        <div
          className="
            absolute
            left-[-180px]
            top-[-150px]
            h-[560px]
            w-[560px]
            rounded-full
            bg-emerald-500/[0.055]
            blur-[160px]
          "
        />

        {/* Cyan atmosphere */}
        <div
          className="
            absolute
            right-[-180px]
            top-[32%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-cyan-500/[0.035]
            blur-[160px]
          "
        />

        {/* Teal bottom atmosphere */}
        <div
          className="
            absolute
            bottom-[-220px]
            left-1/2
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

      <section className="relative px-6 pb-24 pt-36 sm:px-8 sm:pt-40 lg:px-12">

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

            {/* EYEBROW */}

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
                  size={14}
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
                HOW WE WORK
              </span>

            </div>


            {/* HEADING */}

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
                  via-emerald-200
                  to-cyan-300
                  bg-clip-text
                  text-transparent
                "
              >
                to impact.
              </span>

            </h1>


            {/* DESCRIPTION */}

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
              A structured approach that brings strategy, design,
              engineering and continuous improvement together to
              create digital solutions that deliver real business value.
            </p>

          </motion.div>


          {/* PROCESS STATEMENT */}

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
                accent: "text-emerald-300/65",
              },
              {
                title: "EXECUTION",
                text: "Build with precision.",
                accent: "text-teal-300/65",
              },
              {
                title: "GROWTH",
                text: "Improve continuously.",
                accent: "text-cyan-300/65",
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
          border-white/[0.07]
          px-6
          py-28
          sm:px-8
          lg:px-12
        "
      >

        <div className="mx-auto max-w-6xl">

          {/* SECTION HEADING */}

          <motion.div
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
              duration: 0.7,
            }}
            className="mb-20"
          >

            <span
              className="
                text-[10px]
                font-semibold
                tracking-[0.25em]
                text-emerald-300/80
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
                  from-emerald-300/60
                  via-white/30
                  to-cyan-300/40
                  bg-clip-text
                  text-transparent
                "
              >
                {" "}for better outcomes.
              </span>

            </h2>

          </motion.div>


          {/* TIMELINE */}

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
                from-emerald-400/35
                via-teal-400/20
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

                    {/* TIMELINE DOT */}

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
                        bg-[#050706]
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


                    {/* CARD */}

                    <div
                      className={`
                        relative
                        ml-0
                        overflow-hidden
                        rounded-[28px]
                        border
                        border-white/[0.07]
                        bg-gradient-to-br
                        from-white/[0.04]
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

                      {/* CARD GLOW */}

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


                      {/* SECONDARY GLOW */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          bottom-[-100px]
                          left-[-100px]
                          h-[200px]
                          w-[200px]
                          rounded-full
                          bg-cyan-500/[0.02]
                          blur-[90px]
                        "
                      />


                      {/* TOP ROW */}

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


                        {/* NUMBER */}

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


                      {/* CONTENT */}

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


                        {/* ICON */}

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


                      {/* POINTS */}

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
          overflow-hidden
          border-t
          border-white/[0.07]
          px-6
          py-32
          sm:px-8
          lg:px-12
        "
      >

        {/* Ambient glows */}

        <div
          className="
            pointer-events-none
            absolute
            right-[-180px]
            top-1/2
            h-[550px]
            w-[550px]
            -translate-y-1/2
            rounded-full
            bg-emerald-500/[0.045]
            blur-[160px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            left-[-180px]
            bottom-[-100px]
            h-[350px]
            w-[350px]
            rounded-full
            bg-cyan-500/[0.03]
            blur-[120px]
          "
        />


        <div
          className="
            mx-auto
            grid
            max-w-7xl
            gap-14
            lg:grid-cols-[0.9fr_1.1fr]
            lg:items-center
          "
        >

          {/* LEFT */}

          <div>

            <span
              className="
                text-[10px]
                font-semibold
                tracking-[0.25em]
                text-emerald-300/80
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
                  from-emerald-200/75
                  via-white/35
                  to-cyan-300/50
                  bg-clip-text
                  text-transparent
                "
              >
                built by accident.
              </span>

            </h2>

          </div>


          {/* RIGHT */}

          <div>

            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[30px]
                border
                border-emerald-300/[0.10]
                bg-gradient-to-br
                from-white/[0.045]
                via-emerald-500/[0.025]
                to-cyan-500/[0.02]
                p-8
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-emerald-300/20
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
                  bg-emerald-500/[0.075]
                  blur-[100px]
                  transition-all
                  duration-700
                  group-hover:bg-emerald-500/[0.13]
                "
              />

              <div className="relative">

                {/* ICON */}

                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-emerald-300/15
                    bg-emerald-400/[0.08]
                  "
                >
                  <BrainCircuit
                    size={24}
                    strokeWidth={1.5}
                    className="text-emerald-200/70"
                  />
                </div>


                {/* TEXT */}

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
                      from-emerald-200
                      to-cyan-200
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

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          border-t
          border-white/[0.07]
          px-6
          py-32
          sm:px-8
          lg:px-12
        "
      >

        {/* MAIN GLOW */}

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
            bg-emerald-500/[0.055]
            blur-[150px]
          "
        />

        {/* SECONDARY GLOW */}

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
            bg-cyan-500/[0.035]
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
              font-semibold
              tracking-[0.28em]
              text-emerald-300/80
            "
          >
            LET'S BUILD SOMETHING
          </span>


          <h2
            className="
              mt-6
              text-4xl
              font-semibold
              leading-tight
              tracking-[-0.05em]
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
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
              Let's turn it into reality.
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
            Tell us what you're building, what you're trying
            to improve, or where you want to go next.
          </p>


          {/* CTA */}

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
              shadow-[0_15px_60px_rgba(16,185,129,0.22)]
              transition-all
              duration-300
              hover:scale-[1.04]
              hover:shadow-[0_20px_80px_rgba(16,185,129,0.32)]
            "
          >
            Start a Conversation

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

export default Process;


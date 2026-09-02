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
    accent: "blue",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=90",
    points: ["Business requirements", "User needs", "Goals & objectives"],
  },
  {
    number: "02",
    title: "Plan",
    label: "STRATEGY",
    description:
      "We turn requirements into a clear product and technology strategy with the right features, architecture and roadmap.",
    icon: Target,
    accent: "cyan",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=90",
    points: ["Product roadmap", "Technology planning", "Project milestones"],
  },
  {
    number: "03",
    title: "Design",
    label: "EXPERIENCE",
    description:
      "We create modern interfaces and intuitive user experiences that balance aesthetics, usability and business goals.",
    icon: Lightbulb,
    accent: "indigo",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1400&q=90",
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
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=90",
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
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=90",
    points: ["Functional testing", "Performance checks", "Responsive testing"],
  },
  {
    number: "06",
    title: "Launch",
    label: "GO LIVE",
    description:
      "Once everything is ready, we deploy the solution and make it available to your customers with a smooth and reliable launch.",
    icon: Rocket,
    accent: "indigo",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=90",
    points: ["Production deployment", "Configuration", "Launch monitoring"],
  },
  {
    number: "07",
    title: "Support",
    label: "CONTINUOUS GROWTH",
    description:
      "Our relationship doesn't end after launch. We help maintain, improve and evolve your digital solution as your business grows.",
    icon: CheckCircle2,
    accent: "blue",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=90",
    points: ["Maintenance", "Improvements", "Ongoing support"],
  },
];

const accentStyles = {
  blue: {
    glow: "bg-blue-500/[0.10]",
    hoverGlow: "group-hover:bg-blue-500/[0.17]",
    border: "group-hover:border-blue-300/[0.24]",
    icon: "group-hover:text-blue-100",
    iconBg: "group-hover:bg-blue-400/[0.10]",
    iconBorder: "group-hover:border-blue-300/25",
    dot: "bg-blue-300",
    shadow: "shadow-blue-400/40",
    label: "text-blue-200/75",
    number: "group-hover:text-blue-100/25",
    tag:
      "group-hover:border-blue-300/25 group-hover:bg-blue-400/[0.08] group-hover:text-blue-100",
  },

  cyan: {
    glow: "bg-cyan-500/[0.09]",
    hoverGlow: "group-hover:bg-cyan-500/[0.16]",
    border: "group-hover:border-cyan-300/[0.24]",
    icon: "group-hover:text-cyan-100",
    iconBg: "group-hover:bg-cyan-400/[0.10]",
    iconBorder: "group-hover:border-cyan-300/25",
    dot: "bg-cyan-300",
    shadow: "shadow-cyan-400/40",
    label: "text-cyan-200/75",
    number: "group-hover:text-cyan-100/25",
    tag:
      "group-hover:border-cyan-300/25 group-hover:bg-cyan-400/[0.08] group-hover:text-cyan-100",
  },

  indigo: {
    glow: "bg-indigo-500/[0.09]",
    hoverGlow: "group-hover:bg-indigo-500/[0.16]",
    border: "group-hover:border-indigo-300/[0.24]",
    icon: "group-hover:text-indigo-100",
    iconBg: "group-hover:bg-indigo-400/[0.10]",
    iconBorder: "group-hover:border-indigo-300/25",
    dot: "bg-indigo-300",
    shadow: "shadow-indigo-400/40",
    label: "text-indigo-200/75",
    number: "group-hover:text-indigo-100/25",
    tag:
      "group-hover:border-indigo-300/25 group-hover:bg-indigo-400/[0.08] group-hover:text-indigo-100",
  },
};

function Process() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07152f] text-white">

      {/* =====================================================
          GLOBAL BLUE AMBIENT BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

        {/* Top blue atmosphere */}

        <motion.div
          animate={{
            x: [0, 45, 0],
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
            left-[8%]
            top-[-150px]
            h-[600px]
            w-[600px]
            rounded-full
            bg-blue-500/[0.14]
            blur-[150px]
          "
        />

        {/* Cyan atmosphere */}

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 35, 0],
            scale: [1, 1.10, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[42%]
            top-[18%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-cyan-400/[0.065]
            blur-[150px]
          "
        />

        {/* Right indigo atmosphere */}

        <motion.div
          animate={{
            x: [0, -45, 0],
            y: [0, 35, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[-120px]
            top-[35%]
            h-[540px]
            w-[540px]
            rounded-full
            bg-indigo-500/[0.10]
            blur-[150px]
          "
        />

        {/* Bottom blue atmosphere */}

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
            bottom-[-100px]
            left-[10%]
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

        {/* Center vignette */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_5%,#07152f_88%)]
          "
        />

        {/* Bottom fade */}

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

      <section className="relative overflow-hidden px-6 pb-28 pt-40 sm:px-8 lg:px-12">

        {/* Hero technology image */}

        <div className="pointer-events-none absolute inset-x-0 top-0 h-[650px] overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=90"
            alt=""
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
              opacity-[0.20]
              grayscale-[10%]
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-b
              from-[#07152f]/25
              via-[#07152f]/60
              to-[#07152f]
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_65%_35%,rgba(59,130,246,0.24),transparent_42%)]
            "
          />

        </div>


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
                  border-blue-300/25
                  bg-gradient-to-br
                  from-blue-500/20
                  to-cyan-500/10
                  shadow-[0_0_35px_rgba(59,130,246,0.18)]
                "
              >
                <Sparkles
                  size={14}
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
                HOW WE WORK
              </span>

            </div>


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
              From idea

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
                to impact.
              </span>

            </h1>


            <p
              className="
                mt-8
                max-w-2xl
                text-base
                font-normal
                leading-7
                text-blue-50/75
                sm:text-lg
                sm:leading-8
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
              border-white/[0.10]
              pt-8
              sm:grid-cols-3
            "
          >

            {[
              {
                title: "STRATEGY",
                text: "Understand the business.",
                accent: "text-blue-200/65",
              },
              {
                title: "EXECUTION",
                text: "Build with precision.",
                accent: "text-cyan-200/65",
              },
              {
                title: "GROWTH",
                text: "Improve continuously.",
                accent: "text-indigo-200/65",
              },
            ].map((item) => (

              <div key={item.title}>

                <span
                  className={`text-[9px] tracking-[0.22em] ${item.accent}`}
                >
                  {item.title}
                </span>

                <p className="mt-2 text-sm text-blue-50/60">
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
          border-white/[0.10]
          px-6
          py-32
          sm:px-8
          lg:px-12
        "
      >

        <div className="mx-auto max-w-6xl">

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
                text-blue-200/80
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
                text-white
                sm:text-5xl
              "
            >
              A process designed

              <span
                className="
                  bg-gradient-to-r
                  from-blue-200/80
                  via-white/40
                  to-cyan-200/70
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
                from-blue-400/40
                via-cyan-400/25
                to-indigo-400/10
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
                        z-20
                        hidden
                        h-[47px]
                        w-[47px]
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/[0.12]
                        bg-[#07152f]/90
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
                        min-h-[380px]
                        overflow-hidden
                        rounded-[30px]
                        border
                        border-white/[0.10]
                        bg-white/[0.045]
                        p-7
                        shadow-[0_20px_70px_rgba(0,0,0,0.18)]
                        backdrop-blur-xl
                        transition-all
                        duration-500
                        ${theme.border}
                        group-hover:bg-white/[0.06]
                        group-hover:shadow-[0_25px_100px_rgba(0,0,0,0.28)]
                        sm:ml-[90px]
                        sm:min-h-[400px]
                        sm:p-10
                      `}
                    >

                      {/* =================================================
                          CARD IMAGE
                      ================================================= */}

                      <img
                        src={step.image}
                        alt={`${step.title} process`}
                        loading="lazy"
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          h-full
                          w-full
                          object-cover
                          opacity-[0.42]
                          saturate-[1.08]
                          grayscale-[3%]
                          transition-all
                          duration-1000
                          group-hover:scale-105
                          group-hover:opacity-[0.58]
                        "
                      />


                      {/* IMAGE OVERLAY */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          bg-gradient-to-r
                          from-[#07152f]/88
                          via-[#07152f]/48
                          to-[#07152f]/15
                        "
                      />

                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-[#07152f]/88
                          via-[#07152f]/20
                          to-transparent
                        "
                      />


                      {/* IMAGE HIGHLIGHT */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          bg-[radial-gradient(circle_at_75%_35%,rgba(59,130,246,0.16),transparent_38%)]
                        "
                      />


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
                          bg-cyan-500/[0.035]
                          blur-[90px]
                        "
                      />


                      {/* CONTENT */}

                      <div className="relative z-10">

                        {/* TOP ROW */}

                        <div
                          className="
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
                                font-semibold
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
                                font-semibold
                                tracking-[-0.04em]
                                text-white
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
                              text-white/[0.18]
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
                            mt-8
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
                              font-normal
                              leading-7
                              text-blue-50/75
                              sm:text-[15px]
                              sm:leading-7
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
                              border-white/[0.12]
                              bg-[#07152f]/45
                              text-white/50
                              backdrop-blur-md
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
                            mt-9
                            flex
                            flex-wrap
                            gap-2
                          "
                        >

                          {step.points.map((point) => (

                            <span
                              key={point}
                              className={`
                                rounded-full
                                border
                                border-white/[0.12]
                                bg-[#07152f]/45
                                px-3
                                py-1.5
                                text-[10px]
                                font-medium
                                text-blue-50/65
                                backdrop-blur-md
                                transition-all
                                duration-300
                                ${theme.tag}
                              `}
                            >
                              {point}
                            </span>

                          ))}

                        </div>

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
          border-white/[0.10]
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
            right-[-180px]
            top-1/2
            h-[550px]
            w-[550px]
            -translate-y-1/2
            rounded-full
            bg-blue-500/[0.055]
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
            bg-cyan-500/[0.035]
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
                text-blue-200/80
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
                  from-blue-200/85
                  via-white/45
                  to-cyan-200/65
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
                border-blue-300/[0.12]
                bg-gradient-to-br
                from-white/[0.05]
                via-blue-500/[0.025]
                to-cyan-500/[0.02]
                p-8
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-blue-300/25
                sm:p-10
              "
            >

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-24
                  h-64
                  w-64
                  rounded-full
                  bg-blue-500/[0.075]
                  blur-[100px]
                  transition-all
                  duration-700
                  group-hover:bg-blue-500/[0.13]
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
                    border-blue-300/15
                    bg-blue-400/[0.08]
                  "
                >
                  <BrainCircuit
                    size={24}
                    strokeWidth={1.5}
                    className="text-blue-200/75"
                  />
                </div>


                <p
                  className="
                    mt-7
                    text-lg
                    leading-8
                    tracking-[-0.02em]
                    text-blue-50/70
                    sm:text-xl
                  "
                >
                  We believe successful digital products come
                  from the combination of{" "}

                  <span
                    className="
                      bg-gradient-to-r
                      from-blue-200
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
          border-white/[0.10]
          px-6
          py-32
          sm:px-8
          lg:px-12
        "
      >

        {/* CTA IMAGE */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
          "
        >

          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1800&q=90"
            alt=""
            className="
              h-full
              w-full
              object-cover
              opacity-[0.22]
              grayscale-[10%]
            "
          />

        </div>


        {/* CTA OVERLAY */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-r
            from-[#07152f]/90
            via-[#07152f]/75
            to-[#07152f]/90
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-[#07152f]
            via-transparent
            to-[#07152f]/70
          "
        />


        {/* CENTER GLOW */}

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
            bg-blue-500/[0.075]
            blur-[150px]
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
              text-blue-200/85
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
              text-white
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
                from-blue-200/90
                via-white/50
                to-cyan-200/65
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
              text-blue-50/65
            "
          >
            Tell us what you're building, what you're trying
            to improve, or where you want to go next.
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

export default Process;
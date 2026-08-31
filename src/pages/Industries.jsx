import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Factory,
  HeartPulse,
  Truck,
  GraduationCap,
  Building2,
  ShoppingBag,
  BriefcaseBusiness,
  Hotel,
  Rocket,
  Sparkles,
} from "lucide-react";

const industries = [
  {
    number: "01",
    title: "Manufacturing",
    description:
      "Digital systems that help manufacturers improve operations, workflows and business visibility.",
    icon: Factory,
    accent: "violet",
  },
  {
    number: "02",
    title: "Healthcare",
    description:
      "Modern digital experiences and technology solutions for healthcare businesses and service providers.",
    icon: HeartPulse,
    accent: "rose",
  },
  {
    number: "03",
    title: "Logistics & Transportation",
    description:
      "Connected digital solutions for transportation, logistics operations and customer management.",
    icon: Truck,
    accent: "blue",
  },
  {
    number: "04",
    title: "Education",
    description:
      "Digital platforms and applications that make learning, administration and engagement easier.",
    icon: GraduationCap,
    accent: "cyan",
  },
  {
    number: "05",
    title: "Real Estate",
    description:
      "Digital experiences that help property businesses showcase, manage and grow their operations.",
    icon: Building2,
    accent: "amber",
  },
  {
    number: "06",
    title: "Retail & E-commerce",
    description:
      "High-performance commerce experiences designed to improve customer journeys and conversions.",
    icon: ShoppingBag,
    accent: "pink",
  },
  {
    number: "07",
    title: "Professional Services",
    description:
      "Technology solutions that help service businesses automate processes and serve customers better.",
    icon: BriefcaseBusiness,
    accent: "indigo",
  },
  {
    number: "08",
    title: "Hospitality",
    description:
      "Digital experiences that improve customer engagement, operations and online presence.",
    icon: Hotel,
    accent: "emerald",
  },
  {
    number: "09",
    title: "Startups & SMBs",
    description:
      "Flexible and scalable technology solutions built around the needs of growing businesses.",
    icon: Rocket,
    accent: "orange",
  },
];

const accentStyles = {
  violet: {
    glow: "bg-violet-500/[0.07] group-hover:bg-violet-500/[0.14]",
    icon:
      "group-hover:border-violet-300/30 group-hover:bg-violet-400/10 group-hover:text-violet-200",
    line: "group-hover:bg-violet-400",
    number: "group-hover:text-violet-300/60",
  },

  rose: {
    glow: "bg-rose-500/[0.06] group-hover:bg-rose-500/[0.13]",
    icon:
      "group-hover:border-rose-300/30 group-hover:bg-rose-400/10 group-hover:text-rose-200",
    line: "group-hover:bg-rose-400",
    number: "group-hover:text-rose-300/60",
  },

  blue: {
    glow: "bg-blue-500/[0.06] group-hover:bg-blue-500/[0.13]",
    icon:
      "group-hover:border-blue-300/30 group-hover:bg-blue-400/10 group-hover:text-blue-200",
    line: "group-hover:bg-blue-400",
    number: "group-hover:text-blue-300/60",
  },

  cyan: {
    glow: "bg-cyan-500/[0.06] group-hover:bg-cyan-500/[0.13]",
    icon:
      "group-hover:border-cyan-300/30 group-hover:bg-cyan-400/10 group-hover:text-cyan-200",
    line: "group-hover:bg-cyan-400",
    number: "group-hover:text-cyan-300/60",
  },

  amber: {
    glow: "bg-amber-500/[0.06] group-hover:bg-amber-500/[0.13]",
    icon:
      "group-hover:border-amber-300/30 group-hover:bg-amber-400/10 group-hover:text-amber-200",
    line: "group-hover:bg-amber-400",
    number: "group-hover:text-amber-300/60",
  },

  pink: {
    glow: "bg-pink-500/[0.06] group-hover:bg-pink-500/[0.13]",
    icon:
      "group-hover:border-pink-300/30 group-hover:bg-pink-400/10 group-hover:text-pink-200",
    line: "group-hover:bg-pink-400",
    number: "group-hover:text-pink-300/60",
  },

  indigo: {
    glow: "bg-indigo-500/[0.06] group-hover:bg-indigo-500/[0.13]",
    icon:
      "group-hover:border-indigo-300/30 group-hover:bg-indigo-400/10 group-hover:text-indigo-200",
    line: "group-hover:bg-indigo-400",
    number: "group-hover:text-indigo-300/60",
  },

  emerald: {
    glow: "bg-emerald-500/[0.06] group-hover:bg-emerald-500/[0.13]",
    icon:
      "group-hover:border-emerald-300/30 group-hover:bg-emerald-400/10 group-hover:text-emerald-200",
    line: "group-hover:bg-emerald-400",
    number: "group-hover:text-emerald-300/60",
  },

  orange: {
    glow: "bg-orange-500/[0.06] group-hover:bg-orange-500/[0.13]",
    icon:
      "group-hover:border-orange-300/30 group-hover:bg-orange-400/10 group-hover:text-orange-200",
    line: "group-hover:bg-orange-400",
    number: "group-hover:text-orange-300/60",
  },
};

function Industries() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">

      {/* =====================================================
          GLOBAL BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

        {/* Violet Glow */}
        <motion.div
          className="
            absolute
            left-[15%]
            top-[5%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-violet-600/[0.08]
            blur-[150px]
          "
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Blue Glow */}
        <motion.div
          className="
            absolute
            right-[5%]
            top-[35%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-blue-500/[0.05]
            blur-[150px]
          "
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Cyan Glow */}
        <div
          className="
            absolute
            bottom-[10%]
            left-[40%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-cyan-500/[0.025]
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

        {/* Radial Fade */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_15%,#050505_80%)]
          "
        />

      </div>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative px-6 pb-24 pt-40 sm:px-8 lg:px-12">

        {/* Hero Glow */}

        <div
          className="
            pointer-events-none
            absolute
            right-1/4
            top-10
            h-[500px]
            w-[500px]
            rounded-full
            bg-violet-600/[0.08]
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
              </motion.span>

              <span
                className="
                  text-[10px]
                  font-medium
                  tracking-[0.25em]
                  text-violet-300/70
                "
              >
                INDUSTRIES WE SERVE
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

              Technology for

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
                businesses that move.
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
              We build digital products and business solutions
              for organizations across industries, adapting
              technology to the way each business works.
            </p>

          </motion.div>


          {/* Industry Tags */}

          <div
            className="
              mt-20
              flex
              flex-wrap
              gap-x-8
              gap-y-4
              border-t
              border-white/[0.07]
              pt-7
              text-[10px]
              tracking-[0.22em]
              text-white/25
            "
          >
            {[
              "MANUFACTURING",
              "HEALTHCARE",
              "LOGISTICS",
              "EDUCATION",
              "RETAIL",
              "STARTUPS",
            ].map((item) => (
              <span
                key={item}
                className="transition-colors duration-300 hover:text-violet-300/70"
              >
                {item}
              </span>
            ))}
          </div>

        </div>

      </section>


      {/* =====================================================
          INDUSTRIES GRID
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

          {/* Section Heading */}

          <div className="mb-14 max-w-2xl">

            <span
              className="
                text-[10px]
                font-medium
                tracking-[0.25em]
                text-violet-300/70
              "
            >
              OUR EXPERTISE
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
              Different industries.

              <span className="block text-white/30">
                One technology mindset.
              </span>
            </h2>

          </div>


          {/* Grid */}

          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >

            {industries.map((industry, index) => {

              const Icon = industry.icon;
              const theme = accentStyles[industry.accent];

              return (
                <motion.article
                  key={industry.number}
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
                    delay: index * 0.04,
                  }}
                  whileHover={{
                    y: -7,
                  }}
                  className="
                    group
                    relative
                    min-h-[310px]
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-white/[0.07]
                    bg-white/[0.025]
                    p-7
                    transition-all
                    duration-500
                    hover:border-white/[0.14]
                    hover:bg-white/[0.035]
                    hover:shadow-2xl
                    sm:p-8
                  "
                >

                  {/* Industry Glow */}

                  <div
                    className={`
                      pointer-events-none
                      absolute
                      -right-20
                      -top-20
                      h-56
                      w-56
                      rounded-full
                      blur-[80px]
                      transition-all
                      duration-700
                      ${theme.glow}
                    `}
                  />


                  {/* Top Accent Line */}

                  <div
                    className={`
                      absolute
                      left-8
                      top-0
                      h-px
                      w-0
                      transition-all
                      duration-500
                      group-hover:w-20
                      ${theme.line}
                    `}
                  />


                  {/* Number */}

                  <div className="relative flex items-center justify-between">

                    <span
                      className={`
                        text-[10px]
                        tracking-[0.2em]
                        text-white/20
                        transition-colors
                        duration-300
                        ${theme.number}
                      `}
                    >
                      {industry.number}
                    </span>

                    <ArrowUpRight
                      size={16}
                      className="
                        text-white/20
                        transition-all
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:text-white/70
                      "
                    />

                  </div>


                  {/* Icon */}

                  <div
                    className={`
                      relative
                      mt-12
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      text-white/45
                      transition-all
                      duration-300
                      ${theme.icon}
                    `}
                  >
                    <Icon
                      size={21}
                      strokeWidth={1.5}
                    />
                  </div>


                  {/* Content */}

                  <div className="relative mt-7">

                    <h3
                      className="
                        text-xl
                        font-medium
                        tracking-[-0.025em]
                        transition-colors
                        duration-300
                        group-hover:text-white
                      "
                    >
                      {industry.title}
                    </h3>

                    <p
                      className="
                        mt-3
                        text-sm
                        leading-6
                        text-white/30
                        transition-colors
                        duration-300
                        group-hover:text-white/40
                      "
                    >
                      {industry.description}
                    </p>

                  </div>

                </motion.article>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          BUSINESS FOCUS
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
            grid
            max-w-7xl
            gap-14
            lg:grid-cols-2
            lg:items-center
          "
        >

          {/* Left */}

          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            <span
              className="
                text-[10px]
                font-medium
                tracking-[0.25em]
                text-violet-300/70
              "
            >
              BUSINESS FIRST
            </span>

            <h2
              className="
                mt-5
                text-4xl
                font-semibold
                leading-tight
                tracking-[-0.05em]
                sm:text-5xl
                md:text-6xl
              "
            >
              We adapt technology

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-white
                  to-blue-300/70
                  bg-clip-text
                  text-transparent
                "
              >
                to your business.
              </span>
            </h2>

            <p
              className="
                mt-7
                max-w-xl
                text-sm
                leading-7
                text-white/35
              "
            >
              Every industry has different workflows,
              customers and challenges. That's why we don't
              simply apply the same technology everywhere.
            </p>

          </motion.div>


          {/* Right */}

          <motion.div
            initial={{
              opacity: 0,
              x: 25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              relative
              overflow-hidden
              rounded-[30px]
              border
              border-white/[0.07]
              bg-white/[0.025]
              p-8
              sm:p-10
            "
          >

            {/* Blue Glow */}

            <div
              className="
                absolute
                -right-24
                -top-24
                h-64
                w-64
                rounded-full
                bg-blue-500/[0.07]
                blur-[90px]
              "
            />

            <div className="relative space-y-6">

              {[
                {
                  title: "Understand",
                  text: "Learn how your business operates.",
                },
                {
                  title: "Customize",
                  text: "Choose technology around your requirements.",
                },
                {
                  title: "Build",
                  text: "Create scalable digital solutions.",
                },
                {
                  title: "Grow",
                  text: "Improve and evolve with your business.",
                },
              ].map((item, index) => (

                <motion.div
                  key={item.title}
                  whileHover={{
                    x: 5,
                  }}
                  className="
                    group/step
                    flex
                    items-start
                    gap-5
                    border-b
                    border-white/[0.06]
                    pb-6
                    last:border-0
                    last:pb-0
                  "
                >

                  <span
                    className="
                      mt-0.5
                      text-[10px]
                      tracking-[0.15em]
                      text-white/20
                      transition-colors
                      duration-300
                      group-hover/step:text-violet-300/60
                    "
                  >
                    0{index + 1}
                  </span>

                  <div>

                    <h3
                      className="
                        text-sm
                        font-medium
                        text-white/80
                        transition-colors
                        duration-300
                        group-hover/step:text-white
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-1.5
                        text-xs
                        leading-5
                        text-white/25
                      "
                    >
                      {item.text}
                    </p>

                  </div>

                </motion.div>

              ))}

            </div>

          </motion.div>

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

        {/* CTA Glow */}

        <motion.div
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
            blur-[130px]
          "
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
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
            YOUR INDUSTRY. YOUR SOLUTION.
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
            Have a business challenge?

            <span
              className="
                block
                bg-gradient-to-r
                from-white/30
                via-violet-300/50
                to-blue-300/50
                bg-clip-text
                text-transparent
              "
            >
              Let's solve it with technology.
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
            Tell us about your business and we'll explore
            the right digital approach for you.
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
              shadow-[0_0_40px_rgba(139,92,246,0.12)]
              transition-all
              duration-300
              hover:scale-[1.03]
              hover:shadow-[0_0_50px_rgba(139,92,246,0.22)]
            "
          >
            Talk to YoVi

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

export default Industries;
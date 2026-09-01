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
  },
  {
    number: "02",
    title: "Healthcare",
    description:
      "Modern digital experiences and technology solutions for healthcare businesses and service providers.",
    icon: HeartPulse,
  },
  {
    number: "03",
    title: "Logistics & Transportation",
    description:
      "Connected digital solutions for transportation, logistics operations and customer management.",
    icon: Truck,
  },
  {
    number: "04",
    title: "Education",
    description:
      "Digital platforms and applications that make learning, administration and engagement easier.",
    icon: GraduationCap,
  },
  {
    number: "05",
    title: "Real Estate",
    description:
      "Digital experiences that help property businesses showcase, manage and grow their operations.",
    icon: Building2,
  },
  {
    number: "06",
    title: "Retail & E-commerce",
    description:
      "High-performance commerce experiences designed to improve customer journeys and conversions.",
    icon: ShoppingBag,
  },
  {
    number: "07",
    title: "Professional Services",
    description:
      "Technology solutions that help service businesses automate processes and serve customers better.",
    icon: BriefcaseBusiness,
  },
  {
    number: "08",
    title: "Hospitality",
    description:
      "Digital experiences that improve customer engagement, operations and online presence.",
    icon: Hotel,
  },
  {
    number: "09",
    title: "Startups & SMBs",
    description:
      "Flexible and scalable technology solutions built around the needs of growing businesses.",
    icon: Rocket,
  },
];

function Industries() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020403] text-white">

      {/* =====================================================
          GLOBAL AMBIENT BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

        {/* Emerald Atmosphere */}

        <motion.div
          className="
            absolute
            left-[10%]
            top-[5%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-emerald-500/[0.045]
            blur-[160px]
          "
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.45, 0.7, 0.45],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Cyan Atmosphere */}

        <motion.div
          className="
            absolute
            right-[-100px]
            top-[35%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-cyan-500/[0.03]
            blur-[150px]
          "
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Teal Bottom Glow */}

        <div
          className="
            absolute
            bottom-[-100px]
            left-1/2
            h-[400px]
            w-[400px]
            -translate-x-1/2
            rounded-full
            bg-teal-500/[0.025]
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
            bg-[radial-gradient(circle_at_center,transparent_15%,#020403_82%)]
          "
        />

      </div>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative
          px-6
          pb-24
          pt-36
          sm:px-8
          sm:pt-40
          lg:px-12
          lg:pt-44
        "
      >

        {/* Hero Glow */}

        <motion.div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-10
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-emerald-500/[0.045]
            blur-[150px]
          "
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.4, 0.65, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
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

            {/* EYEBROW */}

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
                  text-emerald-200/65
                "
              >
                INDUSTRIES WE SERVE
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

              Technology for

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
                businesses that move.
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
              We build digital products and business solutions
              for organizations across industries, adapting
              technology to the way each business works.
            </p>

          </motion.div>


          {/* INDUSTRY TAGS */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
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
              font-medium
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
                className="
                  transition-colors
                  duration-300
                  hover:text-emerald-300/80
                "
              >
                {item}
              </span>

            ))}

          </motion.div>

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

          {/* SECTION HEADING */}

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
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mb-14 max-w-2xl"
          >

            <span
              className="
                text-[10px]
                font-semibold
                tracking-[0.25em]
                text-emerald-300/80
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

          </motion.div>


          {/* INDUSTRY GRID */}

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
                    hover:border-emerald-300/[0.16]
                    hover:bg-white/[0.035]
                    hover:shadow-[0_25px_80px_rgba(16,185,129,0.06)]
                    sm:p-8
                  "
                >

                  {/* CARD GLOW */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-20
                      -top-20
                      h-56
                      w-56
                      rounded-full
                      bg-emerald-500/[0.045]
                      blur-[80px]
                      transition-all
                      duration-700
                      group-hover:bg-emerald-500/[0.10]
                    "
                  />


                  {/* SECONDARY GLOW */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -bottom-24
                      -left-20
                      h-44
                      w-44
                      rounded-full
                      bg-cyan-500/[0.02]
                      blur-[70px]
                      transition-all
                      duration-700
                      group-hover:bg-cyan-500/[0.055]
                    "
                  />


                  {/* TOP ACCENT */}

                  <div
                    className="
                      absolute
                      left-8
                      top-0
                      h-px
                      w-0
                      bg-gradient-to-r
                      from-emerald-400
                      to-cyan-400
                      transition-all
                      duration-500
                      group-hover:w-20
                    "
                  />


                  {/* NUMBER */}

                  <div className="relative flex items-center justify-between">

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
                        group-hover:text-emerald-200/80
                      "
                    />

                  </div>


                  {/* ICON */}

                  <div
                    className="
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
                      group-hover:border-emerald-300/25
                      group-hover:bg-emerald-400/[0.07]
                      group-hover:text-emerald-200
                      group-hover:shadow-[0_0_30px_rgba(16,185,129,0.10)]
                    "
                  >

                    <Icon
                      size={21}
                      strokeWidth={1.5}
                    />

                  </div>


                  {/* CONTENT */}

                  <div className="relative mt-7">

                    <h3
                      className="
                        text-xl
                        font-medium
                        tracking-[-0.025em]
                        text-white/90
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
                        group-hover:text-white/45
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

        {/* Ambient Glow */}

        <div
          className="
            pointer-events-none
            absolute
            left-[-180px]
            top-1/2
            h-[500px]
            w-[500px]
            -translate-y-1/2
            rounded-full
            bg-emerald-500/[0.035]
            blur-[150px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-[-150px]
            bottom-[-100px]
            h-[400px]
            w-[400px]
            rounded-full
            bg-cyan-500/[0.025]
            blur-[130px]
          "
        />


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

          {/* LEFT */}

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
                font-semibold
                tracking-[0.25em]
                text-emerald-300/80
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
                  from-emerald-200
                  via-emerald-300/70
                  to-cyan-300/60
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


          {/* RIGHT */}

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
              shadow-[0_25px_100px_rgba(0,0,0,0.25)]
              backdrop-blur-xl
              sm:p-10
            "
          >

            {/* Grid */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-[0.025]
                [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
                [background-size:40px_40px]
              "
            />


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
                bg-emerald-500/[0.06]
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
                      group-hover/step:text-emerald-300/70
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
          border-white/[0.07]
          px-6
          py-28
          sm:px-8
          sm:py-32
          lg:px-12
        "
      >

        {/* Main Glow */}

        <motion.div
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
            bg-emerald-500/[0.045]
            blur-[150px]
          "
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />


        {/* Cyan Core */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[250px]
            w-[250px]
            -translate-x-1/2
            -translate-y-1/2
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
            YOUR INDUSTRY. YOUR SOLUTION.
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
            "
          >

            Have a business challenge?

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


          {/* CTA BUTTON */}

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

            Talk to YoVi

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

export default Industries;
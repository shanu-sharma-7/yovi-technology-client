
import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Sparkles,
  Target,
  Eye,
  ShieldCheck,
  Layers3,
  Zap,
  Users,
  Check,
  Globe2,
} from "lucide-react";

function About() {
  const features = [
    {
      icon: Layers3,
      title: "Customized Solutions",
      text: "Technology designed around your specific business requirements.",
      accent: "emerald",
    },
    {
      icon: Zap,
      title: "Modern Technology",
      text: "Current tools and scalable architectures built for long-term growth.",
      accent: "teal",
    },
    {
      icon: ShieldCheck,
      title: "Secure Development",
      text: "Security-conscious development practices across the product lifecycle.",
      accent: "cyan",
    },
    {
      icon: Users,
      title: "Business Focused",
      text: "Every technical decision is connected to a meaningful business outcome.",
      accent: "emerald",
    },
    {
      icon: Globe2,
      title: "Digital First",
      text: "Responsive and accessible experiences built for today's users.",
      accent: "teal",
    },
    {
      icon: Check,
      title: "Post-Launch Support",
      text: "We stay connected after launch to help your digital product evolve.",
      accent: "cyan",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020403] text-white">

      {/* =====================================================
          GLOBAL AMBIENT BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

        {/* Emerald atmosphere */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[18%]
            top-[5%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-emerald-500/[0.055]
            blur-[150px]
          "
        />

        {/* Teal atmosphere */}
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 35, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[-10%]
            top-[30%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-teal-500/[0.04]
            blur-[140px]
          "
        />

        {/* Cyan atmosphere */}
        <motion.div
          animate={{
            x: [0, 35, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[10%]
            left-[5%]
            h-[300px]
            w-[300px]
            rounded-full
            bg-cyan-400/[0.035]
            blur-[130px]
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

        {/* Vignette */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_10%,#020403_82%)]
          "
        />

      </div>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative px-6 pb-28 pt-40 sm:px-8 lg:px-12">

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
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-emerald-300/20
                  bg-gradient-to-br
                  from-emerald-400/15
                  to-cyan-400/10
                  shadow-[0_0_30px_rgba(16,185,129,0.12)]
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
                  font-medium
                  tracking-[0.25em]
                  text-emerald-200/70
                "
              >
                ABOUT YOVI TECHNOLOGIES
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
                lg:text-[88px]
              "
            >
              Technology with

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-white
                  via-white/40
                  to-emerald-200/25
                  bg-clip-text
                  text-transparent
                "
              >
                a reason behind it.
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
              YoVi Technologies is a technology and digital
              solutions company helping businesses build,
              improve and grow their digital presence.
            </p>

          </motion.div>


          {/* =================================================
              POSITIONING CARDS
          ================================================= */}

          <div
            className="
              mt-20
              grid
              gap-3
              sm:grid-cols-3
            "
          >

            {[
              {
                title: "Technology",
                text: "Modern engineering",
                icon: Globe2,
                glow: "bg-emerald-500/[0.075]",
                iconColor: "text-emerald-200",
                borderColor: "border-emerald-300/10",
              },
              {
                title: "Innovation",
                text: "AI & automation",
                icon: Zap,
                glow: "bg-teal-500/[0.065]",
                iconColor: "text-teal-200",
                borderColor: "border-teal-300/10",
              },
              {
                title: "Growth",
                text: "Business focused",
                icon: Target,
                glow: "bg-cyan-500/[0.055]",
                iconColor: "text-cyan-200",
                borderColor: "border-cyan-300/10",
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
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + index * 0.1,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/[0.07]
                    bg-white/[0.025]
                    p-7
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:border-white/[0.14]
                    hover:bg-white/[0.04]
                  "
                >

                  <div
                    className={`
                      absolute
                      -right-20
                      -top-20
                      h-44
                      w-44
                      rounded-full
                      ${item.glow}
                      blur-[70px]
                      transition-all
                      duration-500
                      group-hover:scale-125
                    `}
                  />

                  <div className="relative">

                    <div
                      className={`
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        border
                        ${item.borderColor}
                        bg-white/[0.04]
                        ${item.iconColor}
                      `}
                    >
                      <Icon size={18} strokeWidth={1.5} />
                    </div>

                    <span
                      className="
                        mt-6
                        block
                        text-[9px]
                        tracking-[0.2em]
                        text-white/20
                      "
                    >
                      0{index + 1}
                    </span>

                    <h3
                      className="
                        mt-3
                        text-lg
                        font-medium
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-xs
                        text-white/30
                      "
                    >
                      {item.text}
                    </p>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHO WE ARE
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
            gap-16
            lg:grid-cols-[0.8fr_1.2fr]
          "
        >

          <div>

            <span
              className="
                text-[10px]
                font-medium
                tracking-[0.25em]
                text-emerald-300/70
              "
            >
              WHO WE ARE
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
              More than a

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-white/40
                  via-white/25
                  to-emerald-200/30
                  bg-clip-text
                  text-transparent
                "
              >
                technology company.
              </span>
            </h2>

          </div>


          <div className="space-y-6">

            <p
              className="
                text-lg
                leading-8
                text-white/60
              "
            >
              YoVi Technologies helps businesses turn ideas,
              challenges and opportunities into practical
              digital solutions.
            </p>

            <p
              className="
                text-sm
                leading-7
                text-white/35
              "
            >
              We specialize in modern websites, custom web
              applications, mobile applications, AI-powered
              solutions, ERP and CRM systems, UI/UX design and
              digital marketing.
            </p>

            <p
              className="
                text-sm
                leading-7
                text-white/35
              "
            >
              Our approach combines technology, design,
              automation and digital growth to create solutions
              that are visually impressive, scalable, secure
              and focused on real business outcomes.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          MISSION / VISION
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

          <div
            className="
              grid
              gap-5
              lg:grid-cols-2
            "
          >

            {/* Mission */}

            <motion.div
              whileHover={{
                y: -6,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[30px]
                border
                border-emerald-300/[0.08]
                bg-white/[0.025]
                p-8
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-emerald-300/[0.18]
              "
            >

              <div
                className="
                  absolute
                  -right-24
                  -top-24
                  h-72
                  w-72
                  rounded-full
                  bg-emerald-500/[0.07]
                  blur-[100px]
                  transition-all
                  duration-700
                  group-hover:scale-125
                "
              />

              <div
                className="
                  relative
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-emerald-300/15
                  bg-emerald-400/[0.07]
                  text-emerald-200
                  shadow-[0_0_30px_rgba(16,185,129,0.10)]
                "
              >
                <Target size={21} />
              </div>

              <span
                className="
                  relative
                  mt-8
                  block
                  text-[10px]
                  tracking-[0.25em]
                  text-emerald-300/50
                "
              >
                OUR MISSION
              </span>

              <h3
                className="
                  relative
                  mt-4
                  text-3xl
                  font-semibold
                  tracking-[-0.04em]
                "
              >
                Simplify technology.

                <span
                  className="
                    block
                    bg-gradient-to-r
                    from-emerald-200/60
                    to-white/25
                    bg-clip-text
                    text-transparent
                  "
                >
                  Accelerate growth.
                </span>
              </h3>

              <p
                className="
                  relative
                  mt-6
                  text-sm
                  leading-7
                  text-white/35
                "
              >
                To help businesses use technology to simplify
                operations, strengthen their digital presence,
                reach more customers and achieve sustainable
                growth.
              </p>

            </motion.div>


            {/* Vision */}

            <motion.div
              whileHover={{
                y: -6,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[30px]
                border
                border-cyan-300/[0.08]
                bg-white/[0.025]
                p-8
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-cyan-300/[0.18]
              "
            >

              <div
                className="
                  absolute
                  -right-24
                  -top-24
                  h-72
                  w-72
                  rounded-full
                  bg-cyan-500/[0.06]
                  blur-[100px]
                  transition-all
                  duration-700
                  group-hover:scale-125
                "
              />

              <div
                className="
                  relative
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-cyan-300/15
                  bg-cyan-400/[0.06]
                  text-cyan-200
                  shadow-[0_0_30px_rgba(34,211,238,0.08)]
                "
              >
                <Eye size={21} />
              </div>

              <span
                className="
                  relative
                  mt-8
                  block
                  text-[10px]
                  tracking-[0.25em]
                  text-cyan-300/50
                "
              >
                OUR VISION
              </span>

              <h3
                className="
                  relative
                  mt-4
                  text-3xl
                  font-semibold
                  tracking-[-0.04em]
                "
              >
                Build what's next.

                <span
                  className="
                    block
                    bg-gradient-to-r
                    from-cyan-200/60
                    to-white/25
                    bg-clip-text
                    text-transparent
                  "
                >
                  Together.
                </span>
              </h3>

              <p
                className="
                  relative
                  mt-6
                  text-sm
                  leading-7
                  text-white/35
                "
              >
                To become a trusted technology partner for
                businesses by delivering innovative, reliable,
                scalable and results-driven digital solutions.
              </p>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY YOVI
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
                text-emerald-300/70
              "
            >
              WHY CHOOSE YOVI
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
              Built around your

              <span
                className="
                  bg-gradient-to-r
                  from-emerald-200
                  via-white/60
                  to-cyan-300
                  bg-clip-text
                  text-transparent
                "
              >
                {" "}business.
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
              We don't believe in one-size-fits-all
              technology. Every solution starts with your
              business, your users and your goals.
            </p>

          </div>


          {/* Features */}

          <div
            className="
              mt-16
              grid
              gap-5
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >

            {features.map((item, index) => {

              const Icon = item.icon;

              const accent =
                item.accent === "emerald"
                  ? "text-emerald-200 bg-emerald-400/[0.07] border-emerald-300/10 group-hover:border-emerald-300/20"
                  : item.accent === "teal"
                  ? "text-teal-200 bg-teal-400/[0.06] border-teal-300/10 group-hover:border-teal-300/20"
                  : "text-cyan-200 bg-cyan-400/[0.06] border-cyan-300/10 group-hover:border-cyan-300/20";

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
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/[0.07]
                    bg-white/[0.02]
                    p-6
                    transition-all
                    duration-500
                    hover:border-white/[0.14]
                    hover:bg-white/[0.035]
                  "
                >

                  <div
                    className="
                      absolute
                      -right-16
                      -top-16
                      h-32
                      w-32
                      rounded-full
                      bg-emerald-500/[0.035]
                      blur-[60px]
                      transition-all
                      duration-500
                      group-hover:scale-150
                    "
                  />

                  <div
                    className={`
                      relative
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      border
                      ${accent}
                    `}
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.5}
                    />
                  </div>

                  <h3
                    className="
                      relative
                      mt-5
                      text-sm
                      font-medium
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      relative
                      mt-2
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
          APPROACH
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

          <div>

            <span
              className="
                text-[10px]
                font-medium
                tracking-[0.25em]
                text-emerald-300/70
              "
            >
              HOW WE THINK
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
              Technology should

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-white/40
                  via-white/25
                  to-emerald-200/30
                  bg-clip-text
                  text-transparent
                "
              >
                solve real problems.
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
              We start by understanding the problem before
              choosing the technology. This helps us build
              solutions that are useful, maintainable and
              capable of growing with the business.
            </p>

          </div>


          {/* Principles */}

          <motion.div
            whileHover={{
              y: -4,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-[30px]
              border
              border-emerald-300/[0.08]
              bg-white/[0.025]
              p-7
              backdrop-blur-xl
              transition-all
              duration-500
              hover:border-emerald-300/[0.16]
            "
          >

            <div
              className="
                absolute
                -right-20
                -top-20
                h-60
                w-60
                rounded-full
                bg-emerald-500/[0.05]
                blur-[90px]
                transition-all
                duration-700
                group-hover:scale-125
              "
            />

            <div className="relative">

              {[
                "Understand the business",
                "Define the right strategy",
                "Design meaningful experiences",
                "Build scalable technology",
                "Test and refine",
                "Launch and support",
              ].map((item, index) => (

                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-4
                    border-b
                    border-white/[0.06]
                    py-5
                    last:border-0
                  "
                >

                  <span
                    className="
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-emerald-300/10
                      bg-emerald-400/[0.05]
                      text-[9px]
                      tracking-[0.1em]
                      text-emerald-200/50
                    "
                  >
                    0{index + 1}
                  </span>

                  <span
                    className="
                      text-sm
                      text-white/55
                      transition-colors
                      duration-300
                      group-hover:text-white/70
                    "
                  >
                    {item}
                  </span>

                </div>

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

        {/* Main CTA glow */}

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
            bg-emerald-500/[0.055]
            blur-[140px]
          "
        />

        {/* Cyan secondary glow */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[280px]
            w-[280px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-500/[0.045]
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
              tracking-[0.25em]
              text-emerald-300/80
            "
          >
            LET'S BUILD TOGETHER
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
            Your next digital idea

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
              starts here.
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
            Let's turn your ideas into meaningful digital
            experiences that are built to grow.
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
              shadow-[0_15px_60px_rgba(16,185,129,0.22)]
              transition-all
              duration-300
              hover:scale-[1.04]
              hover:shadow-[0_20px_80px_rgba(16,185,129,0.32)]
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

export default About;


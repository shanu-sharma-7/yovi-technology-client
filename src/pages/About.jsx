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
      accent: "blue",
    },
    {
      icon: Zap,
      title: "Modern Technology",
      text: "Current tools and scalable architectures built for long-term growth.",
      accent: "cyan",
    },
    {
      icon: ShieldCheck,
      title: "Secure Development",
      text: "Security-conscious development practices across the product lifecycle.",
      accent: "indigo",
    },
    {
      icon: Users,
      title: "Business Focused",
      text: "Every technical decision is connected to a meaningful business outcome.",
      accent: "blue",
    },
    {
      icon: Globe2,
      title: "Digital First",
      text: "Responsive and accessible experiences built for today's users.",
      accent: "cyan",
    },
    {
      icon: Check,
      title: "Post-Launch Support",
      text: "We stay connected after launch to help your digital product evolve.",
      accent: "indigo",
    },
  ];

  const positioning = [
    {
      title: "Technology",
      text: "Modern engineering",
      icon: Globe2,
      glow: "bg-blue-500/[0.12]",
      iconColor: "text-blue-200",
      borderColor: "border-blue-300/20",
    },
    {
      title: "Innovation",
      text: "AI & automation",
      icon: Zap,
      glow: "bg-cyan-400/[0.11]",
      iconColor: "text-cyan-200",
      borderColor: "border-cyan-300/20",
    },
    {
      title: "Growth",
      text: "Business focused",
      icon: Target,
      glow: "bg-indigo-500/[0.10]",
      iconColor: "text-indigo-200",
      borderColor: "border-indigo-300/20",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07152f] text-white">

      {/* =====================================================
          GLOBAL BLUE AMBIENT BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

        {/* Top blue glow */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
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
            top-[-8%]
            h-[600px]
            w-[600px]
            rounded-full
            bg-blue-500/[0.18]
            blur-[150px]
          "
        />

        {/* Cyan center glow */}
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[45%]
            top-[18%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-cyan-400/[0.08]
            blur-[150px]
          "
        />

        {/* Right indigo glow */}
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
            right-[-10%]
            top-[35%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-indigo-500/[0.13]
            blur-[150px]
          "
        />

        {/* Bottom blue glow */}
        <motion.div
          animate={{
            x: [0, 35, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[-10%]
            left-[10%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-blue-400/[0.09]
            blur-[140px]
          "
        />

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.045]
            [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />

        {/* Soft overlay */}
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

        {/* Hero image */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[620px] overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=85"
            alt=""
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
              opacity-[0.15]
              grayscale-[20%]
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-b
              from-[#07152f]/35
              via-[#07152f]/70
              to-[#07152f]
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_65%_35%,rgba(59,130,246,0.22),transparent_40%)]
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
                  border-blue-300/25
                  bg-blue-400/10
                  shadow-[0_0_30px_rgba(59,130,246,0.18)]
                "
              >
                <Sparkles
                  size={13}
                  className="text-blue-200"
                />
              </span>

              <span
                className="
                  text-[10px]
                  font-semibold
                  tracking-[0.25em]
                  text-blue-200/80
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
                text-white
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
                  via-blue-100
                  to-cyan-200
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
                text-blue-50/75
                sm:text-lg
              "
            >
              YoVi Technologies is a technology and digital
              solutions company helping businesses build,
              improve and grow their digital presence.
            </p>

          </motion.div>


          {/* POSITIONING CARDS */}

          <div
            className="
              mt-20
              grid
              gap-4
              sm:grid-cols-3
            "
          >

            {positioning.map((item, index) => {
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
                    border-white/[0.12]
                    bg-white/[0.065]
                    p-7
                    shadow-[0_20px_70px_rgba(0,0,0,0.12)]
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:border-white/[0.22]
                    hover:bg-white/[0.09]
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
                        bg-white/[0.06]
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
                        text-blue-100/40
                      "
                    >
                      0{index + 1}
                    </span>

                    <h3
                      className="
                        mt-3
                        text-lg
                        font-semibold
                        text-white
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-xs
                        text-blue-50/60
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
          border-white/[0.10]
          px-6
          py-28
          sm:px-8
          lg:px-12
          lg:py-36
        "
      >

        <div
          className="
            mx-auto
            grid
            max-w-7xl
            gap-14
            lg:grid-cols-[1.05fr_0.95fr]
            lg:items-center
            lg:gap-20
          "
        >

          {/* IMAGE */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
            }}
            whileHover={{
              y: -5,
            }}
            className="group relative"
          >

            <div
              className="
                pointer-events-none
                absolute
                -inset-8
                rounded-[45px]
                bg-blue-500/[0.10]
                blur-[65px]
                transition-all
                duration-700
                group-hover:bg-blue-400/[0.16]
              "
            />

            <div
              className="
                relative
                aspect-[4/4.2]
                overflow-hidden
                rounded-[32px]
                border
                border-blue-300/[0.18]
                bg-white/[0.04]
                shadow-[0_30px_100px_rgba(0,0,0,0.25)]
              "
            >

              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=90"
                alt="Technology team collaborating"
                className="
                  h-full
                  w-full
                  object-cover
                  object-center
                  grayscale-[10%]
                  opacity-90
                  transition-all
                  duration-700
                  group-hover:scale-105
                  group-hover:opacity-100
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#07152f]/75
                  via-[#07152f]/10
                  to-blue-950/10
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-[radial-gradient(circle_at_75%_20%,rgba(59,130,246,0.20),transparent_32%)]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-[32px]
                  ring-1
                  ring-inset
                  ring-white/[0.12]
                "
              />


              {/* Top badge */}

              <div
                className="
                  absolute
                  left-5
                  top-5
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/[0.16]
                  bg-[#07152f]/65
                  px-3
                  py-2
                  backdrop-blur-xl
                "
              >

                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-cyan-300
                    shadow-[0_0_12px_rgba(103,232,249,0.8)]
                  "
                />

                <span
                  className="
                    text-[8px]
                    font-medium
                    tracking-[0.18em]
                    text-white/75
                  "
                >
                  DIGITAL PARTNERSHIP
                </span>

              </div>


              {/* Bottom badge */}

              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  right-5
                  flex
                  items-end
                  justify-between
                "
              >

                <div>

                  <p
                    className="
                      text-[9px]
                      tracking-[0.22em]
                      text-blue-200/80
                    "
                  >
                    YOVI TECHNOLOGIES
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      text-white/65
                    "
                  >
                    Engineering meaningful digital experiences
                  </p>

                </div>

                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/[0.14]
                    bg-[#07152f]/55
                    text-blue-200
                    backdrop-blur-xl
                  "
                >
                  <Globe2 size={16} />
                </div>

              </div>

            </div>

          </motion.div>


          {/* CONTENT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
          >

            <span
              className="
                text-[10px]
                font-semibold
                tracking-[0.25em]
                text-blue-200/80
              "
            >
              WHO WE ARE
            </span>

            <h2
              className="
                mt-5
                text-4xl
                font-semibold
                leading-[1.05]
                tracking-[-0.05em]
                text-white
                sm:text-5xl
              "
            >
              More than a

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-blue-100
                  via-white
                  to-cyan-200
                  bg-clip-text
                  text-transparent
                "
              >
                technology company.
              </span>
            </h2>

            <div
              className="
                mt-8
                h-px
                w-16
                bg-gradient-to-r
                from-blue-300
                to-transparent
              "
            />

            <div className="mt-8 space-y-6">

              <p
                className="
                  text-lg
                  leading-8
                  text-white/80
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
                  text-blue-50/65
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
                  text-blue-50/65
                "
              >
                Our approach combines technology, design,
                automation and digital growth to create solutions
                that are visually impressive, scalable, secure
                and focused on real business outcomes.
              </p>

            </div>


            {/* Expertise tags */}

            <div
              className="
                mt-9
                flex
                flex-wrap
                gap-2
              "
            >

              {[
                "ENGINEERING",
                "DESIGN",
                "AI",
                "GROWTH",
              ].map((item) => (
                <span
                  key={item}
                  className="
                    rounded-full
                    border
                    border-blue-200/[0.14]
                    bg-blue-400/[0.06]
                    px-3
                    py-1.5
                    text-[8px]
                    tracking-[0.18em]
                    text-blue-100/60
                    transition-all
                    duration-300
                    hover:border-cyan-300/30
                    hover:text-cyan-200
                  "
                >
                  {item}
                </span>
              ))}

            </div>


            {/* Small stats */}

            <div
              className="
                mt-10
                grid
                grid-cols-2
                gap-3
                sm:max-w-md
              "
            >

              <div
                className="
                  rounded-2xl
                  border
                  border-white/[0.10]
                  bg-white/[0.055]
                  p-4
                  backdrop-blur-xl
                "
              >
                <p className="text-xl font-semibold text-white">
                  01
                </p>

                <p
                  className="
                    mt-1
                    text-[9px]
                    tracking-[0.18em]
                    text-blue-100/45
                  "
                >
                  BUSINESS FIRST
                </p>
              </div>

              <div
                className="
                  rounded-2xl
                  border
                  border-white/[0.10]
                  bg-white/[0.055]
                  p-4
                  backdrop-blur-xl
                "
              >
                <p className="text-xl font-semibold text-white">
                  02
                </p>

                <p
                  className="
                    mt-1
                    text-[9px]
                    tracking-[0.18em]
                    text-blue-100/45
                  "
                >
                  DIGITAL FIRST
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          MISSION / VISION
      ===================================================== */}

      <section
        className="
          border-t
          border-white/[0.10]
          px-6
          py-28
          sm:px-8
          lg:px-12
        "
      >

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-5 lg:grid-cols-2">

            {/* MISSION */}

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
                border-blue-300/[0.14]
                bg-white/[0.045]
                p-8
                shadow-[0_20px_70px_rgba(0,0,0,0.12)]
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-blue-300/[0.28]
              "
            >

              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85"
                alt=""
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  opacity-[0.10]
                  grayscale-[15%]
                  transition-all
                  duration-700
                  group-hover:scale-105
                  group-hover:opacity-[0.14]
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-[#07152f]/70
                  via-[#07152f]/80
                  to-blue-950/55
                "
              />

              <div
                className="
                  absolute
                  -right-24
                  -top-24
                  h-72
                  w-72
                  rounded-full
                  bg-blue-500/[0.10]
                  blur-[100px]
                  transition-all
                  duration-700
                  group-hover:scale-125
                "
              />

              <div className="relative z-10">

                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-blue-300/20
                    bg-blue-400/[0.10]
                    text-blue-200
                    shadow-[0_0_30px_rgba(59,130,246,0.15)]
                  "
                >
                  <Target size={21} />
                </div>

                <span
                  className="
                    mt-8
                    block
                    text-[10px]
                    tracking-[0.25em]
                    text-blue-200/70
                  "
                >
                  OUR MISSION
                </span>

                <h3
                  className="
                    mt-4
                    text-3xl
                    font-semibold
                    tracking-[-0.04em]
                    text-white
                  "
                >
                  Simplify technology.

                  <span
                    className="
                      block
                      bg-gradient-to-r
                      from-blue-200
                      to-cyan-200
                      bg-clip-text
                      text-transparent
                    "
                  >
                    Accelerate growth.
                  </span>
                </h3>

                <p
                  className="
                    mt-6
                    text-sm
                    leading-7
                    text-blue-50/65
                  "
                >
                  To help businesses use technology to simplify
                  operations, strengthen their digital presence,
                  reach more customers and achieve sustainable
                  growth.
                </p>

              </div>

            </motion.div>


            {/* VISION */}

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
                border-cyan-300/[0.14]
                bg-white/[0.045]
                p-8
                shadow-[0_20px_70px_rgba(0,0,0,0.12)]
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-cyan-300/[0.28]
              "
            >

              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85"
                alt=""
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  opacity-[0.10]
                  grayscale-[10%]
                  transition-all
                  duration-700
                  group-hover:scale-105
                  group-hover:opacity-[0.14]
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-[#07152f]/70
                  via-[#07152f]/80
                  to-indigo-950/55
                "
              />

              <div
                className="
                  absolute
                  -right-24
                  -top-24
                  h-72
                  w-72
                  rounded-full
                  bg-cyan-500/[0.08]
                  blur-[100px]
                  transition-all
                  duration-700
                  group-hover:scale-125
                "
              />

              <div className="relative z-10">

                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-cyan-300/20
                    bg-cyan-400/[0.08]
                    text-cyan-200
                    shadow-[0_0_30px_rgba(34,211,238,0.12)]
                  "
                >
                  <Eye size={21} />
                </div>

                <span
                  className="
                    mt-8
                    block
                    text-[10px]
                    tracking-[0.25em]
                    text-cyan-200/70
                  "
                >
                  OUR VISION
                </span>

                <h3
                  className="
                    mt-4
                    text-3xl
                    font-semibold
                    tracking-[-0.04em]
                    text-white
                  "
                >
                  Build what's next.

                  <span
                    className="
                      block
                      bg-gradient-to-r
                      from-cyan-200
                      to-blue-200
                      bg-clip-text
                      text-transparent
                    "
                  >
                    Together.
                  </span>
                </h3>

                <p
                  className="
                    mt-6
                    text-sm
                    leading-7
                    text-blue-50/65
                  "
                >
                  To become a trusted technology partner for
                  businesses by delivering innovative, reliable,
                  scalable and results-driven digital solutions.
                </p>

              </div>

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
          border-white/[0.10]
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
                font-semibold
                tracking-[0.25em]
                text-blue-200/80
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
                text-white
                sm:text-5xl
                md:text-6xl
              "
            >
              Built around your

              <span
                className="
                  bg-gradient-to-r
                  from-blue-200
                  via-white
                  to-cyan-200
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
                text-blue-50/65
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
                item.accent === "blue"
                  ? "text-blue-200 bg-blue-400/[0.09] border-blue-300/15 group-hover:border-blue-300/30"
                  : item.accent === "cyan"
                  ? "text-cyan-200 bg-cyan-400/[0.08] border-cyan-300/15 group-hover:border-cyan-300/30"
                  : "text-indigo-200 bg-indigo-400/[0.08] border-indigo-300/15 group-hover:border-indigo-300/30";

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
                    border-white/[0.10]
                    bg-white/[0.045]
                    p-6
                    shadow-[0_15px_50px_rgba(0,0,0,0.10)]
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:border-white/[0.20]
                    hover:bg-white/[0.07]
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
                      bg-blue-400/[0.06]
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
                      font-semibold
                      text-white
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
                      text-blue-50/60
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
          border-white/[0.10]
          px-6
          py-28
          sm:px-8
          lg:px-12
          lg:py-32
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

          {/* TEXT */}

          <div>

            <span
              className="
                text-[10px]
                font-semibold
                tracking-[0.25em]
                text-blue-200/80
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
                text-white
                sm:text-5xl
              "
            >
              Technology should

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-blue-100
                  via-white
                  to-cyan-200
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
                text-blue-50/65
              "
            >
              We start by understanding the problem before
              choosing the technology. This helps us build
              solutions that are useful, maintainable and
              capable of growing with the business.
            </p>

          </div>


          {/* APPROACH VISUAL */}

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
              duration: 0.8,
            }}
            whileHover={{
              y: -4,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-[30px]
              border
              border-blue-300/[0.14]
              bg-white/[0.045]
              shadow-[0_20px_70px_rgba(0,0,0,0.14)]
              backdrop-blur-xl
              transition-all
              duration-500
              hover:border-blue-300/[0.28]
            "
          >

            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=85"
              alt=""
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                opacity-[0.13]
                grayscale-[15%]
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-[#07152f]/85
                via-[#07152f]/75
                to-blue-950/50
              "
            />

            <div
              className="
                absolute
                -right-20
                -top-20
                h-60
                w-60
                rounded-full
                bg-blue-500/[0.08]
                blur-[90px]
                transition-all
                duration-700
                group-hover:scale-125
              "
            />

            <div className="relative z-10 p-7">

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
                    border-white/[0.09]
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
                      border-blue-300/20
                      bg-blue-400/[0.08]
                      text-[9px]
                      tracking-[0.1em]
                      text-blue-200/70
                    "
                  >
                    0{index + 1}
                  </span>

                  <span
                    className="
                      text-sm
                      text-white/70
                      transition-colors
                      duration-300
                      group-hover:text-white/85
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
          border-white/[0.10]
          px-6
          py-32
          sm:px-8
          lg:px-12
        "
      >

        {/* CTA background */}

        <div className="pointer-events-none absolute inset-0">

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=85"
            alt=""
            className="
              h-full
              w-full
              object-cover
              opacity-[0.10]
              grayscale-[10%]
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-[#07152f]/75
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.20),transparent_48%)]
            "
          />

        </div>


        {/* Blue glow */}

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
            bg-blue-500/[0.10]
            blur-[140px]
          "
        />

        {/* Cyan glow */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[300px]
            w-[300px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-400/[0.08]
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
              text-cyan-200/85
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
              text-white
              sm:text-5xl
              md:text-6xl
            "
          >
            Your next digital idea

            <span
              className="
                block
                bg-gradient-to-r
                from-blue-200
                via-white
                to-cyan-200
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
              text-blue-50/70
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
                text-blue-600
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
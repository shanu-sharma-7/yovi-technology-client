
import { motion } from "framer-motion";

import {
  ArrowDown,
  ArrowUpRight,
  Sparkles,
  Globe2,
  BrainCircuit,
  Smartphone,
  Boxes,
  Megaphone,
} from "lucide-react";

import SpotlightCard from "../components/SpotlightCard";
import AnimatedBackground from "../components/AnimatedBackground";

function Home() {
  return (
    <main className="relative overflow-hidden bg-[#020204] text-white">

      {/* =====================================================
          GLOBAL AMBIENT BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Violet atmosphere */}
        <div
          className="
            absolute
            left-[-180px]
            top-[600px]
            h-[600px]
            w-[600px]
            rounded-full
            bg-violet-600/[0.055]
            blur-[160px]
          "
        />

        {/* Blue atmosphere */}
        <div
          className="
            absolute
            right-[-220px]
            top-[1400px]
            h-[600px]
            w-[600px]
            rounded-full
            bg-blue-600/[0.045]
            blur-[160px]
          "
        />

        {/* Indigo bottom glow */}
        <div
          className="
            absolute
            bottom-[-250px]
            left-1/2
            h-[550px]
            w-[550px]
            -translate-x-1/2
            rounded-full
            bg-indigo-600/[0.035]
            blur-[160px]
          "
        />

      </div>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-screen">

        <AnimatedBackground />

        {/* Main hero aura */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[15%]
            h-[600px]
            w-[600px]
            -translate-x-1/2
            rounded-full
            bg-violet-600/[0.07]
            blur-[170px]
          "
        />

        {/* Secondary blue aura */}

        <div
          className="
            pointer-events-none
            absolute
            right-[5%]
            top-[25%]
            h-[300px]
            w-[300px]
            rounded-full
            bg-blue-500/[0.035]
            blur-[120px]
          "
        />


        <div
          className="
            relative
            mx-auto
            flex
            min-h-screen
            max-w-7xl
            items-center
            px-6
            pb-20
            pt-32
            sm:px-8
            lg:px-12
          "
        >

          <div
            className="
              grid
              w-full
              items-center
              gap-16
              lg:grid-cols-[1.15fr_0.85fr]
            "
          >

            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <div>

              {/* EYEBROW */}

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="mb-7 flex items-center gap-3"
              >

                <span
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-violet-300/25
                    bg-gradient-to-br
                    from-violet-500/20
                    to-blue-500/10
                    shadow-[0_0_35px_rgba(139,92,246,0.18)]
                  "
                >
                  <Sparkles
                    size={13}
                    className="text-violet-200"
                  />
                </span>

                <span
                  className="
                    text-[11px]
                    font-semibold
                    tracking-[0.22em]
                    text-violet-200/65
                  "
                >
                  DIGITAL PRODUCTS • AI • ENGINEERING
                </span>

              </motion.div>


              {/* HEADING */}

              <motion.h1
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.1,
                }}
                className="
                  max-w-4xl
                  text-5xl
                  font-semibold
                  leading-[0.98]
                  tracking-[-0.055em]
                  sm:text-6xl
                  md:text-7xl
                  lg:text-[76px]
                  xl:text-[88px]
                "
              >

                We build digital

                <span
                  className="
                    block
                    bg-gradient-to-r
                    from-white
                    via-white/65
                    to-white/25
                    bg-clip-text
                    text-transparent
                  "
                >
                  experiences that
                </span>

                <span
                  className="
                    block
                    bg-gradient-to-r
                    from-violet-200
                    via-violet-400
                    to-blue-400
                    bg-clip-text
                    text-transparent
                  "
                >
                  move businesses.
                </span>

              </motion.h1>


              {/* DESCRIPTION */}

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.25,
                }}
                className="
                  mt-8
                  max-w-xl
                  text-base
                  leading-7
                  text-white/45
                  sm:text-lg
                "
              >
                We combine technology, design and AI to create
                scalable digital products and intelligent business
                solutions built for growth.
              </motion.p>


              {/* CTA */}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                }}
                className="
                  mt-9
                  flex
                  flex-wrap
                  items-center
                  gap-3
                "
              >

                {/* Primary */}

                <a
                  href="/contact"
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    rounded-full
                    bg-gradient-to-r
                    from-violet-500
                    to-indigo-500
                    px-6
                    py-3.5
                    text-sm
                    font-semibold
                    text-white
                    shadow-[0_12px_45px_rgba(124,58,237,0.22)]
                    transition-all
                    duration-300
                    hover:scale-[1.03]
                    hover:shadow-[0_18px_60px_rgba(124,58,237,0.32)]
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
                      text-violet-600
                      transition-all
                      duration-300
                      group-hover:rotate-45
                    "
                  >
                    <ArrowUpRight size={13} />
                  </span>

                </a>


                {/* Secondary */}

                <a
                  href="/services"
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/[0.10]
                    bg-white/[0.025]
                    px-6
                    py-3.5
                    text-sm
                    font-medium
                    text-white/65
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-violet-300/30
                    hover:bg-violet-400/[0.07]
                    hover:text-white
                  "
                >
                  Explore Services
                </a>

              </motion.div>


              {/* TAGS */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.7,
                }}
                className="
                  mt-14
                  flex
                  flex-wrap
                  items-center
                  gap-x-6
                  gap-y-3
                  text-[10px]
                  font-medium
                  tracking-[0.2em]
                  text-white/25
                "
              >

                <span>WEB</span>
                <span>AI</span>
                <span>MOBILE</span>
                <span>ERP</span>
                <span>CRM</span>

              </motion.div>

            </div>


            {/* =================================================
                RIGHT VISUAL
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.3,
              }}
              className="
                relative
                hidden
                h-[520px]
                items-center
                justify-center
                lg:flex
              "
            >

              {/* Core glow */}

              <div
                className="
                  absolute
                  h-[370px]
                  w-[370px]
                  rounded-full
                  bg-violet-500/[0.10]
                  blur-[120px]
                "
              />

              <div
                className="
                  absolute
                  h-[220px]
                  w-[220px]
                  rounded-full
                  bg-blue-500/[0.07]
                  blur-[80px]
                "
              />


              {/* OUTER RING */}

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  h-[390px]
                  w-[390px]
                  rounded-full
                  border
                  border-violet-300/[0.10]
                  shadow-[0_0_80px_rgba(139,92,246,0.05)]
                "
              >

                <div
                  className="
                    absolute
                    -left-1
                    top-1/2
                    h-2
                    w-2
                    rounded-full
                    bg-violet-300
                    shadow-[0_0_25px_rgba(196,181,253,0.9)]
                  "
                />

              </motion.div>


              {/* INNER RING */}

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  h-[280px]
                  w-[280px]
                  rounded-full
                  border
                  border-blue-300/[0.12]
                "
              >

                <div
                  className="
                    absolute
                    right-5
                    top-8
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-blue-300
                    shadow-[0_0_20px_rgba(147,197,253,0.8)]
                  "
                />

              </motion.div>


              {/* CORE */}

              <motion.div
                animate={{
                  scale: [1, 1.04, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  relative
                  flex
                  h-40
                  w-40
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-violet-200/[0.18]
                  bg-gradient-to-br
                  from-white/[0.07]
                  via-violet-500/[0.05]
                  to-blue-500/[0.04]
                  shadow-[0_0_100px_rgba(124,58,237,0.18)]
                  backdrop-blur-xl
                "
              >

                <div
                  className="
                    absolute
                    inset-5
                    rounded-full
                    border
                    border-white/[0.07]
                  "
                />

                <div className="text-center">

                  <span
                    className="
                      block
                      bg-gradient-to-b
                      from-white
                      via-violet-200
                      to-violet-400
                      bg-clip-text
                      text-4xl
                      font-bold
                      tracking-[-0.05em]
                      text-transparent
                    "
                  >
                    Y
                  </span>

                  <span
                    className="
                      mt-1
                      block
                      text-[8px]
                      tracking-[0.3em]
                      text-white/35
                    "
                  >
                    YOVI
                  </span>

                </div>

              </motion.div>


              {/* BUILD */}

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  left-2
                  top-28
                  rounded-2xl
                  border
                  border-violet-300/[0.12]
                  bg-violet-400/[0.035]
                  px-4
                  py-3
                  shadow-[0_10px_45px_rgba(124,58,237,0.10)]
                  backdrop-blur-xl
                "
              >

                <span
                  className="
                    text-[9px]
                    font-medium
                    tracking-[0.2em]
                    text-violet-200/55
                  "
                >
                  BUILD
                </span>

              </motion.div>


              {/* SCALE */}

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  bottom-24
                  right-4
                  rounded-2xl
                  border
                  border-blue-300/[0.12]
                  bg-blue-400/[0.035]
                  px-4
                  py-3
                  shadow-[0_10px_45px_rgba(59,130,246,0.10)]
                  backdrop-blur-xl
                "
              >

                <span
                  className="
                    text-[9px]
                    font-medium
                    tracking-[0.2em]
                    text-blue-200/55
                  "
                >
                  SCALE
                </span>

              </motion.div>

            </motion.div>

          </div>

        </div>


        {/* SCROLL */}

        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
            absolute
            bottom-8
            left-1/2
            hidden
            -translate-x-1/2
            flex-col
            items-center
            gap-2
            text-violet-200/30
            md:flex
          "
        >

          <span className="text-[9px] tracking-[0.25em]">
            SCROLL
          </span>

          <ArrowDown size={14} />

        </motion.div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section
        className="
          relative
          border-t
          border-white/[0.07]
          bg-[#020204]
          px-6
          py-28
          sm:px-8
          lg:px-12
        "
      >

        <div className="mx-auto max-w-7xl">

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
            className="
              mb-14
              flex
              flex-col
              justify-between
              gap-7
              md:flex-row
              md:items-end
            "
          >

            <div>

              <span
                className="
                  text-[10px]
                  font-semibold
                  tracking-[0.25em]
                  text-violet-300/80
                "
              >
                WHAT WE BUILD
              </span>

              <h2
                className="
                  mt-5
                  max-w-3xl
                  text-4xl
                  font-semibold
                  leading-tight
                  tracking-[-0.05em]
                  sm:text-5xl
                  md:text-6xl
                "
              >
                Technology that turns

                <span
                  className="
                    bg-gradient-to-r
                    from-violet-300/60
                    via-white/35
                    to-blue-300/40
                    bg-clip-text
                    text-transparent
                  "
                >
                  {" "}ideas into impact.
                </span>

              </h2>

            </div>


            <a
              href="/services"
              className="
                group
                flex
                w-fit
                items-center
                gap-3
                text-sm
                font-medium
                text-white/45
                transition-colors
                hover:text-violet-200
              "
            >

              View all services

              <span
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>

            </a>

          </motion.div>


          {/* SERVICE CARDS */}

          <div
            className="
              grid
              gap-4
              md:grid-cols-2
              lg:grid-cols-3
            "
          >

            <SpotlightCard
              number="01"
              title="Web Development"
              description="High-performance websites and custom web applications designed for modern businesses."
              technologies={[
                "React",
                "Next.js",
                "Node.js",
              ]}
              icon={Globe2}
              className="min-h-[360px] lg:col-span-2"
            />


            <SpotlightCard
              number="02"
              title="AI Solutions"
              description="Intelligent automation and AI integrations that help businesses work smarter."
              technologies={[
                "AI APIs",
                "Automation",
              ]}
              icon={BrainCircuit}
              className="min-h-[360px]"
            />


            <SpotlightCard
              number="03"
              title="Mobile Apps"
              description="Modern mobile experiences for Android, iOS and cross-platform ecosystems."
              technologies={[
                "Android",
                "iOS",
              ]}
              icon={Smartphone}
              className="min-h-[330px]"
            />


            <SpotlightCard
              number="04"
              title="ERP & CRM"
              description="Connected systems that simplify business operations and customer management."
              technologies={[
                "ERP",
                "CRM",
              ]}
              icon={Boxes}
              className="min-h-[330px]"
            />


            <SpotlightCard
              number="05"
              title="Digital Growth"
              description="SEO, advertising and digital strategies focused on visibility and measurable growth."
              technologies={[
                "SEO",
                "Google Ads",
              ]}
              icon={Megaphone}
              className="min-h-[330px]"
            />

          </div>


          {/* BRAND LINE */}

          <div
            className="
              mt-12
              flex
              flex-col
              gap-3
              border-t
              border-white/[0.07]
              pt-7
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >

            <span
              className="
                text-[10px]
                font-medium
                tracking-[0.25em]
                text-violet-200/25
              "
            >
              TECHNOLOGY • DESIGN • AI
            </span>

            <span
              className="
                text-xs
                text-white/25
              "
            >
              Explore the complete YoVi ecosystem →
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY YOVI
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          border-t
          border-white/[0.07]
          bg-[#020204]
          px-6
          py-32
          sm:px-8
          lg:px-12
        "
      >

        {/* Ambient glow */}

        <div
          className="
            pointer-events-none
            absolute
            right-[-180px]
            top-1/2
            h-[600px]
            w-[600px]
            -translate-y-1/2
            rounded-full
            bg-violet-600/[0.055]
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
            bg-blue-500/[0.035]
            blur-[120px]
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

          {/* TEXT */}

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
              duration: 0.8,
            }}
          >

            <span
              className="
                text-[10px]
                font-semibold
                tracking-[0.25em]
                text-violet-300/80
              "
            >
              WHY YOVI
            </span>

            <h2
              className="
                mt-5
                max-w-2xl
                text-4xl
                font-semibold
                leading-tight
                tracking-[-0.05em]
                sm:text-5xl
                md:text-6xl
              "
            >

              Not just developers.

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-violet-200/75
                  via-white/35
                  to-blue-300/50
                  bg-clip-text
                  text-transparent
                "
              >
                Your technology partner.
              </span>

            </h2>

            <p
              className="
                mt-7
                max-w-xl
                text-base
                leading-7
                text-white/40
              "
            >
              YoVi Technologies combines engineering,
              design, AI and digital growth to help businesses
              build stronger digital foundations and create
              meaningful customer experiences.
            </p>


            <a
              href="/about"
              className="
                group
                mt-9
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-violet-300/[0.15]
                bg-violet-400/[0.035]
                px-5
                py-3
                text-sm
                font-medium
                text-white/65
                transition-all
                duration-300
                hover:border-violet-300/30
                hover:bg-violet-400/[0.08]
                hover:text-white
                hover:shadow-[0_10px_40px_rgba(124,58,237,0.12)]
              "
            >

              Discover YoVi

              <ArrowUpRight
                size={15}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />

            </a>

          </motion.div>


          {/* VISUAL */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.9,
            }}
            className="relative"
          >

            <div
              className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-violet-300/[0.10]
                bg-gradient-to-br
                from-white/[0.045]
                via-violet-500/[0.025]
                to-blue-500/[0.015]
                p-8
                shadow-[0_30px_120px_rgba(0,0,0,0.3)]
                backdrop-blur-xl
                sm:p-10
              "
            >

              {/* Grid */}

              <div
                className="
                  absolute
                  inset-0
                  opacity-[0.045]
                  [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
                  [background-size:40px_40px]
                "
              />

              {/* Violet glow */}

              <div
                className="
                  absolute
                  right-[-80px]
                  top-[-80px]
                  h-60
                  w-60
                  rounded-full
                  bg-violet-500/[0.10]
                  blur-[90px]
                "
              />

              {/* Blue glow */}

              <div
                className="
                  absolute
                  bottom-[-100px]
                  left-[-80px]
                  h-52
                  w-52
                  rounded-full
                  bg-blue-500/[0.06]
                  blur-[80px]
                "
              />


              <div className="relative z-10">

                <span
                  className="
                    text-[10px]
                    font-semibold
                    tracking-[0.25em]
                    text-violet-200/35
                  "
                >
                  THE YOVI APPROACH
                </span>


                <div className="mt-12 space-y-6">

                  {/* 01 */}

                  <div className="flex items-center gap-4">

                    <span
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-violet-300/20
                        bg-violet-400/[0.08]
                        text-sm
                        text-violet-200
                        shadow-[0_0_25px_rgba(124,58,237,0.12)]
                      "
                    >
                      01
                    </span>

                    <div>

                      <p className="text-sm font-medium text-white">
                        Technology
                      </p>

                      <p className="mt-1 text-xs text-violet-100/30">
                        Modern engineering
                      </p>

                    </div>

                  </div>


                  <div
                    className="
                      ml-5
                      h-8
                      w-px
                      bg-gradient-to-b
                      from-violet-400/25
                      to-blue-400/10
                    "
                  />


                  {/* 02 */}

                  <div className="flex items-center gap-4">

                    <span
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/10
                        bg-white/[0.04]
                        text-sm
                        text-white/55
                      "
                    >
                      02
                    </span>

                    <div>

                      <p className="text-sm font-medium text-white">
                        Design
                      </p>

                      <p className="mt-1 text-xs text-white/25">
                        Premium experiences
                      </p>

                    </div>

                  </div>


                  <div className="ml-5 h-8 w-px bg-white/10" />


                  {/* 03 */}

                  <div className="flex items-center gap-4">

                    <span
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-blue-300/15
                        bg-blue-400/[0.05]
                        text-sm
                        text-blue-200/65
                      "
                    >
                      03
                    </span>

                    <div>

                      <p className="text-sm font-medium text-white">
                        Intelligence
                      </p>

                      <p className="mt-1 text-xs text-white/25">
                        AI & automation
                      </p>

                    </div>

                  </div>


                  <div
                    className="
                      ml-5
                      h-8
                      w-px
                      bg-gradient-to-b
                      from-blue-300/15
                      to-white/5
                    "
                  />


                  {/* 04 */}

                  <div className="flex items-center gap-4">

                    <span
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/10
                        bg-white/[0.04]
                        text-sm
                        text-white/55
                      "
                    >
                      04
                    </span>

                    <div>

                      <p className="text-sm font-medium text-white">
                        Growth
                      </p>

                      <p className="mt-1 text-xs text-white/25">
                        Business outcomes
                      </p>

                    </div>

                  </div>

                </div>

              </div>

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
          bg-[#020204]
          px-6
          py-32
          sm:px-8
          lg:px-12
        "
      >

        {/* Main violet aura */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[550px]
            w-[550px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-violet-600/[0.075]
            blur-[160px]
          "
        />

        {/* Blue aura */}

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
            bg-blue-500/[0.055]
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
              text-violet-300/80
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
                from-violet-200/80
                via-white/40
                to-blue-300/55
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
              leading-6
              text-white/40
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
              from-violet-500
              to-indigo-500
              px-7
              py-4
              text-sm
              font-semibold
              text-white
              shadow-[0_15px_60px_rgba(124,58,237,0.22)]
              transition-all
              duration-300
              hover:scale-[1.04]
              hover:shadow-[0_20px_80px_rgba(124,58,237,0.32)]
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
                text-violet-600
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

export default Home;


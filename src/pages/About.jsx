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
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative px-6 pb-28 pt-40 sm:px-8 lg:px-12">

        {/* Glow */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/3
            top-10
            h-[500px]
            w-[500px]
            rounded-full
            bg-violet-600/[0.07]
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

              <span className="block text-white/30">
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


          {/* Stats / positioning */}

          <div
            className="
              mt-20
              grid
              gap-px
              overflow-hidden
              rounded-3xl
              border
              border-white/[0.07]
              bg-white/[0.07]
              sm:grid-cols-3
            "
          >

            {[
              {
                title: "Technology",
                text: "Modern engineering",
              },
              {
                title: "Innovation",
                text: "AI & automation",
              },
              {
                title: "Growth",
                text: "Business focused",
              },
            ].map((item, index) => (

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
                className="
                  bg-[#080808]
                  p-7
                  sm:p-8
                "
              >

                <span
                  className="
                    text-[10px]
                    tracking-[0.2em]
                    text-white/20
                  "
                >
                  0{index + 1}
                </span>

                <h3
                  className="
                    mt-5
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

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          ABOUT
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
              <span className="block text-white/30">
                technology company.
              </span>
            </h2>

          </div>


          {/* Right */}

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
                y: -5,
              }}
              transition={{
                duration: 0.3,
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
                sm:p-10
              "
            >

              <div
                className="
                  absolute
                  -right-24
                  -top-24
                  h-64
                  w-64
                  rounded-full
                  bg-violet-500/[0.07]
                  blur-[90px]
                "
              />

              <div
                className="
                  relative
                  flex h-12 w-12
                  items-center justify-center
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.04]
                  text-violet-200
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
                  text-white/25
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
                <span className="block text-white/30">
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
                y: -5,
              }}
              transition={{
                duration: 0.3,
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
                sm:p-10
              "
            >

              <div
                className="
                  absolute
                  -right-24
                  -top-24
                  h-64
                  w-64
                  rounded-full
                  bg-blue-500/[0.06]
                  blur-[90px]
                "
              />

              <div
                className="
                  relative
                  flex h-12 w-12
                  items-center justify-center
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.04]
                  text-blue-200
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
                  text-white/25
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
                <span className="block text-white/30">
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
                text-violet-300/70
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
              <span className="text-white/30">
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
              gap-x-10
              gap-y-10
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >

            {[
              {
                icon: Layers3,
                title: "Customized Solutions",
                text: "Technology designed around your specific business requirements.",
              },
              {
                icon: Zap,
                title: "Modern Technology",
                text: "Current tools and scalable architectures built for long-term growth.",
              },
              {
                icon: ShieldCheck,
                title: "Secure Development",
                text: "Security-conscious development practices across the product lifecycle.",
              },
              {
                icon: Users,
                title: "Business Focused",
                text: "Every technical decision is connected to a meaningful business outcome.",
              },
              {
                icon: Globe2,
                title: "Digital First",
                text: "Responsive and accessible experiences built for today's users.",
              },
              {
                icon: Check,
                title: "Post-Launch Support",
                text: "We stay connected after launch to help your digital product evolve.",
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
                  className="
                    border-t
                    border-white/[0.08]
                    pt-6
                  "
                >

                  <Icon
                    size={19}
                    strokeWidth={1.5}
                    className="text-white/40"
                  />

                  <h3
                    className="
                      mt-5
                      text-sm
                      font-medium
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
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
                text-violet-300/70
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
              <span className="block text-white/30">
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

          <div
            className="
              rounded-[30px]
              border
              border-white/[0.07]
              bg-white/[0.025]
              p-7
              sm:p-9
            "
          >

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
                    text-[10px]
                    tracking-[0.15em]
                    text-white/20
                  "
                >
                  0{index + 1}
                </span>

                <span
                  className="
                    text-sm
                    text-white/55
                  "
                >
                  {item}
                </span>

              </div>

            ))}

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

            <span className="block text-white/30">
              starts here.
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

export default About;
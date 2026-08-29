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
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative px-6 pb-24 pt-40 sm:px-8 lg:px-12">

        {/* Background glow */}

        <div
          className="
            pointer-events-none
            absolute
            right-1/4
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

              <span className="block text-white/30">
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


          {/* Bottom line */}

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
            <span>MANUFACTURING</span>
            <span>HEALTHCARE</span>
            <span>LOGISTICS</span>
            <span>EDUCATION</span>
            <span>RETAIL</span>
            <span>STARTUPS</span>
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

          {/* Section heading */}

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
                    y: -5,
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
                    transition-colors
                    duration-500
                    hover:border-white/[0.14]
                    hover:bg-white/[0.035]
                    sm:p-8
                  "
                >

                  {/* Glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-20
                      -top-20
                      h-56
                      w-56
                      rounded-full
                      bg-violet-500/[0.06]
                      blur-[80px]
                      transition-all
                      duration-700
                      group-hover:bg-violet-500/[0.11]
                    "
                  />


                  {/* Number */}

                  <div className="relative flex items-center justify-between">

                    <span
                      className="
                        text-[10px]
                        tracking-[0.2em]
                        text-white/20
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
                        group-hover:text-white/70
                      "
                    />

                  </div>


                  {/* Icon */}

                  <div
                    className="
                      relative
                      mt-12
                      flex h-12 w-12
                      items-center justify-center
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      text-white/45
                      transition-all
                      duration-300
                      group-hover:border-violet-300/20
                      group-hover:bg-violet-400/10
                      group-hover:text-violet-200
                    "
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

          <div>

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
              <span className="block text-white/30">
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

          </div>


          {/* Right */}

          <div
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

                <div
                  key={item.title}
                  className="
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

                </div>

              ))}

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

            <span className="block text-white/30">
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
              transition-all
              duration-300
              hover:scale-[1.03]
            "
          >
            Talk to YoVi

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

export default Industries;
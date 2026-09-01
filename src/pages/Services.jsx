
import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Globe2,
  BrainCircuit,
  Smartphone,
  Boxes,
  Megaphone,
  Palette,
  Check,
  Sparkles,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Globe2,
    title: "Web Development",
    description:
      "Modern, high-performance websites and web applications designed around your business goals.",
    items: [
      "Business Websites",
      "Corporate Websites",
      "Dynamic Websites",
      "E-commerce Websites",
      "Landing Pages",
      "Custom Web Applications",
      "Website Redesign & Maintenance",
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript"],
    accent: "emerald",
  },

  {
    number: "02",
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Scalable mobile experiences that help businesses connect with customers wherever they are.",
    items: [
      "Android Applications",
      "iOS Applications",
      "Cross-Platform Applications",
      "Custom Business Applications",
    ],
    technologies: ["Android", "iOS", "Cross-Platform"],
    accent: "cyan",
  },

  {
    number: "03",
    icon: BrainCircuit,
    title: "AI Solutions",
    description:
      "Intelligent systems that automate repetitive work, improve customer experiences and unlock new possibilities.",
    items: [
      "AI Chatbots",
      "AI-Powered Business Solutions",
      "Workflow Automation",
      "AI Integrations",
      "Intelligent Customer Support",
    ],
    technologies: ["AI APIs", "Automation", "LLM"],
    accent: "teal",
  },

  {
    number: "04",
    icon: Boxes,
    title: "ERP & CRM Development",
    description:
      "Connected business platforms that bring operations, customers and workflows together.",
    items: [
      "Custom ERP Systems",
      "CRM Development",
      "Business Management Systems",
      "Inventory Management",
      "Lead Management",
      "Workflow Management",
    ],
    technologies: ["Node.js", "MongoDB", "MySQL", "REST APIs"],
    accent: "emerald",
  },

  {
    number: "05",
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Data-driven digital growth strategies designed to increase visibility, generate leads and reach the right audience.",
    items: [
      "Search Engine Optimization",
      "Google Ads",
      "Meta Ads",
      "Social Media Marketing",
      "Lead Generation",
      "Content Marketing",
    ],
    technologies: ["SEO", "Google Ads", "Meta Ads", "Analytics"],
    accent: "cyan",
  },

  {
    number: "06",
    icon: Palette,
    title: "UI/UX & Branding",
    description:
      "Thoughtful visual experiences and brand systems that make businesses memorable.",
    items: [
      "UI/UX Design",
      "Website Design",
      "Logo Design",
      "Brand Identity",
      "Social Media Creatives",
    ],
    technologies: ["UI/UX", "Figma", "Branding"],
    accent: "teal",
  },
];

const accentStyles = {
  emerald: {
    glow:
      "bg-emerald-500/[0.055] group-hover:bg-emerald-500/[0.11]",

    icon:
      "text-emerald-200 border-emerald-300/10 bg-emerald-400/[0.06] group-hover:border-emerald-300/25 group-hover:bg-emerald-400/[0.11]",

    number:
      "text-emerald-300/35 group-hover:text-emerald-300/70",

    tag:
      "group-hover:border-emerald-300/[0.14] group-hover:bg-emerald-400/[0.05] group-hover:text-emerald-200/70",

    check:
      "group-hover:border-emerald-300/25 group-hover:bg-emerald-400/10 group-hover:text-emerald-200",

    arrow:
      "group-hover:border-emerald-300/25 group-hover:bg-emerald-400/[0.08] group-hover:text-emerald-100",
  },

  cyan: {
    glow:
      "bg-cyan-500/[0.045] group-hover:bg-cyan-500/[0.09]",

    icon:
      "text-cyan-200 border-cyan-300/10 bg-cyan-400/[0.05] group-hover:border-cyan-300/25 group-hover:bg-cyan-400/[0.10]",

    number:
      "text-cyan-300/35 group-hover:text-cyan-300/70",

    tag:
      "group-hover:border-cyan-300/[0.14] group-hover:bg-cyan-400/[0.05] group-hover:text-cyan-200/70",

    check:
      "group-hover:border-cyan-300/25 group-hover:bg-cyan-400/10 group-hover:text-cyan-200",

    arrow:
      "group-hover:border-cyan-300/25 group-hover:bg-cyan-400/[0.08] group-hover:text-cyan-100",
  },

  teal: {
    glow:
      "bg-teal-500/[0.045] group-hover:bg-teal-500/[0.09]",

    icon:
      "text-teal-200 border-teal-300/10 bg-teal-400/[0.05] group-hover:border-teal-300/25 group-hover:bg-teal-400/[0.10]",

    number:
      "text-teal-300/35 group-hover:text-teal-300/70",

    tag:
      "group-hover:border-teal-300/[0.14] group-hover:bg-teal-400/[0.05] group-hover:text-teal-200/70",

    check:
      "group-hover:border-teal-300/25 group-hover:bg-teal-400/10 group-hover:text-teal-200",

    arrow:
      "group-hover:border-teal-300/25 group-hover:bg-teal-400/[0.08] group-hover:text-teal-100",
  },
};

function Services() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020403] text-white">

      {/* =====================================================
          GLOBAL AMBIENT BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

        {/* Emerald atmosphere */}

        <motion.div
          animate={{
            x: [0, 35, 0],
            y: [0, 25, 0],
            scale: [1, 1.07, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[10%]
            top-[-140px]
            h-[520px]
            w-[520px]
            rounded-full
            bg-emerald-500/[0.06]
            blur-[150px]
          "
        />

        {/* Cyan atmosphere */}

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[-120px]
            top-[25%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-cyan-500/[0.04]
            blur-[150px]
          "
        />

        {/* Teal bottom atmosphere */}

        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[-80px]
            left-[15%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-teal-500/[0.035]
            blur-[140px]
          "
        />

        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />

        {/* Vignette */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_5%,#020403_88%)]
          "
        />

      </div>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative px-6 pb-28 pt-40 sm:px-8 lg:px-12">

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
                  border-emerald-300/25
                  bg-gradient-to-br
                  from-emerald-500/20
                  to-cyan-500/10
                  shadow-[0_0_35px_rgba(16,185,129,0.16)]
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
                  font-semibold
                  tracking-[0.25em]
                  text-emerald-200/70
                "
              >
                OUR SERVICES
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

              Everything you need

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-white
                  via-emerald-200/65
                  to-cyan-300/45
                  bg-clip-text
                  text-transparent
                "
              >
                to build what matters.
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
              From digital products and AI-powered solutions
              to business systems and digital growth, YoVi
              brings technology, design and strategy together.
            </p>

          </motion.div>


          {/* Service categories */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.4,
            }}
            className="
              mt-20
              flex
              flex-wrap
              gap-x-10
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
              "WEB",
              "MOBILE",
              "AI",
              "ERP",
              "CRM",
              "GROWTH",
            ].map((item) => (
              <span
                key={item}
                className="
                  transition-all
                  duration-300
                  hover:text-emerald-200
                  hover:drop-shadow-[0_0_12px_rgba(16,185,129,0.35)]
                "
              >
                {item}
              </span>
            ))}

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section
        className="
          relative
          border-t
          border-white/[0.07]
          px-6
          py-32
          sm:px-8
          lg:px-12
        "
      >

        <div className="mx-auto max-w-7xl">

          <div className="space-y-5">

            {services.map((service, index) => {

              const Icon = service.icon;
              const accent = accentStyles[service.accent];

              return (
                <motion.article
                  key={service.number}
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
                    amount: 0.12,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.04,
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
                    border-white/[0.07]
                    bg-white/[0.025]
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:border-emerald-300/[0.14]
                    hover:bg-white/[0.035]
                    hover:shadow-[0_25px_100px_rgba(0,0,0,0.35)]
                  "
                >

                  {/* Accent Glow */}

                  <div
                    className={`
                      pointer-events-none
                      absolute
                      -right-28
                      -top-28
                      h-80
                      w-80
                      rounded-full
                      ${accent.glow}
                      blur-[100px]
                      transition-all
                      duration-700
                    `}
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      bottom-[-170px]
                      left-[-100px]
                      h-72
                      w-72
                      rounded-full
                      bg-cyan-500/[0.02]
                      blur-[100px]
                      transition-all
                      duration-700
                      group-hover:bg-cyan-500/[0.05]
                    "
                  />


                  {/* Content */}

                  <div
                    className="
                      relative
                      grid
                      gap-10
                      p-7
                      sm:p-9
                      lg:grid-cols-[90px_1fr_0.8fr]
                      lg:gap-12
                      lg:p-12
                    "
                  >

                    {/* Number + Icon */}

                    <div>

                      <span
                        className={`
                          text-[10px]
                          font-semibold
                          tracking-[0.2em]
                          transition-colors
                          duration-300
                          ${accent.number}
                        `}
                      >
                        {service.number}
                      </span>

                      <div
                        className={`
                          mt-5
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          rounded-xl
                          border
                          transition-all
                          duration-300
                          ${accent.icon}
                        `}
                      >
                        <Icon
                          size={19}
                          strokeWidth={1.5}
                        />
                      </div>

                    </div>


                    {/* Main Content */}

                    <div>

                      <h2
                        className="
                          text-3xl
                          font-semibold
                          tracking-[-0.04em]
                          text-white
                          sm:text-4xl
                        "
                      >
                        {service.title}
                      </h2>

                      <p
                        className="
                          mt-4
                          max-w-xl
                          text-sm
                          leading-6
                          text-white/40
                          transition-colors
                          duration-300
                          group-hover:text-white/50
                        "
                      >
                        {service.description}
                      </p>


                      {/* Technologies */}

                      <div className="mt-7 flex flex-wrap gap-2">

                        {service.technologies.map((technology) => (

                          <span
                            key={technology}
                            className={`
                              rounded-full
                              border
                              border-white/[0.08]
                              bg-white/[0.02]
                              px-3
                              py-1.5
                              text-[10px]
                              font-medium
                              text-white/35
                              transition-all
                              duration-300
                              ${accent.tag}
                            `}
                          >
                            {technology}
                          </span>

                        ))}

                      </div>

                    </div>


                    {/* Features */}

                    <div>

                      <p
                        className="
                          mb-5
                          text-[10px]
                          font-semibold
                          tracking-[0.2em]
                          text-white/20
                        "
                      >
                        WHAT WE OFFER
                      </p>

                      <div className="space-y-3">

                        {service.items.map((item) => (

                          <div
                            key={item}
                            className="
                              group/item
                              flex
                              items-center
                              gap-3
                              text-sm
                              text-white/40
                              transition-colors
                              duration-200
                              hover:text-white/75
                            "
                          >

                            <span
                              className={`
                                flex
                                h-5
                                w-5
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-white/[0.09]
                                bg-white/[0.02]
                                text-white/25
                                transition-all
                                duration-200
                                ${accent.check}
                              `}
                            >
                              <Check size={11} />
                            </span>

                            {item}

                          </div>

                        ))}

                      </div>

                    </div>

                  </div>


                  {/* Arrow */}

                  <div
                    className={`
                      absolute
                      right-7
                      top-7
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/[0.08]
                      bg-white/[0.02]
                      text-white/20
                      transition-all
                      duration-300
                      ${accent.arrow}
                    `}
                  >

                    <ArrowUpRight
                      size={15}
                      className="
                        transition-transform
                        duration-300
                        group-hover:rotate-45
                      "
                    />

                  </div>

                </motion.article>
              );
            })}

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

        {/* Emerald */}

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            left-[30%]
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-emerald-500/[0.055]
            blur-[140px]
          "
        />

        {/* Cyan */}

        <motion.div
          animate={{
            scale: [1, 1.06, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            left-[68%]
            top-1/2
            h-[420px]
            w-[420px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-500/[0.045]
            blur-[130px]
          "
        />

        {/* Center teal */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[65%]
            h-[260px]
            w-[260px]
            -translate-x-1/2
            rounded-full
            bg-teal-500/[0.035]
            blur-[110px]
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
            READY TO BUILD?
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

            Let's create something

            <span
              className="
                block
                bg-gradient-to-r
                from-emerald-200/80
                via-white/45
                to-cyan-300/55
                bg-clip-text
                text-transparent
              "
            >
              worth building.
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
            Have a project, idea or business challenge?
            Let's talk about how technology can move it forward.
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

export default Services;


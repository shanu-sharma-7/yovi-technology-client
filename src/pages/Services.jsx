
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
  },
];

function Services() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030305] text-white">

      {/* =====================================================
          GLOBAL BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            left-1/2
            top-[-180px]
            h-[650px]
            w-[650px]
            -translate-x-1/2
            rounded-full
            bg-violet-600/[0.09]
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            right-[-200px]
            top-[900px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-indigo-500/[0.05]
            blur-[140px]
          "
        />

      </div>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative px-6 pb-24 pt-40 sm:px-8 lg:px-12">

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
            className="max-w-4xl"
          >

            {/* Eyebrow */}

            <div className="mb-7 flex items-center gap-3">

              <span
                className="
                  flex h-8 w-8
                  items-center justify-center
                  rounded-full
                  border border-violet-400/20
                  bg-gradient-to-br
                  from-violet-500/15
                  to-indigo-500/10
                  shadow-[0_0_30px_rgba(139,92,246,0.12)]
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
                  font-semibold
                  tracking-[0.28em]
                  text-violet-300/80
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
                lg:text-[86px]
              "
            >
              Everything you need

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-white/40
                  via-white/25
                  to-white/10
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
                text-white/45
                sm:text-lg
              "
            >
              From digital products and AI-powered solutions
              to business systems and digital growth, YoVi
              brings technology, design and strategy together.
            </p>

          </motion.div>


          {/* Bottom info */}

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
              border-white/[0.08]
              pt-7
              text-[10px]
              font-medium
              tracking-[0.22em]
              text-white/30
            "
          >

            <span className="transition-colors hover:text-violet-300">
              WEB
            </span>

            <span className="transition-colors hover:text-violet-300">
              MOBILE
            </span>

            <span className="transition-colors hover:text-violet-300">
              AI
            </span>

            <span className="transition-colors hover:text-violet-300">
              ERP
            </span>

            <span className="transition-colors hover:text-violet-300">
              CRM
            </span>

            <span className="transition-colors hover:text-violet-300">
              GROWTH
            </span>

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
          py-28
          sm:px-8
          lg:px-12
        "
      >

        <div className="mx-auto max-w-7xl">

          <div className="space-y-5">

            {services.map((service, index) => {

              const Icon = service.icon;

              return (
                <motion.article
                  key={service.number}
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
                    amount: 0.12,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.04,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[30px]
                    border
                    border-white/[0.08]
                    bg-gradient-to-br
                    from-white/[0.045]
                    via-white/[0.02]
                    to-transparent
                    shadow-[0_20px_80px_rgba(0,0,0,0.2)]
                    transition-all
                    duration-500
                    hover:-translate-y-[2px]
                    hover:border-violet-300/[0.18]
                    hover:shadow-[0_25px_100px_rgba(124,58,237,0.08)]
                  "
                >

                  {/* Card inner glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-32
                      -top-32
                      h-80
                      w-80
                      rounded-full
                      bg-violet-500/[0.045]
                      blur-[100px]
                      transition-all
                      duration-700
                      group-hover:bg-violet-500/[0.11]
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      bottom-[-180px]
                      left-[-100px]
                      h-72
                      w-72
                      rounded-full
                      bg-indigo-500/[0.035]
                      blur-[100px]
                      transition-all
                      duration-700
                      group-hover:bg-indigo-500/[0.07]
                    "
                  />


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

                    {/* Number */}

                    <div>

                      <span
                        className="
                          text-[10px]
                          font-semibold
                          tracking-[0.2em]
                          text-violet-300/35
                          transition-colors
                          duration-300
                          group-hover:text-violet-300/70
                        "
                      >
                        {service.number}
                      </span>

                      <div
                        className="
                          mt-5
                          flex h-11 w-11
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-white/[0.10]
                          bg-white/[0.035]
                          text-white/45
                          shadow-inner
                          transition-all
                          duration-300
                          group-hover:border-violet-300/25
                          group-hover:bg-violet-400/[0.12]
                          group-hover:text-violet-200
                          group-hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]
                        "
                      >
                        <Icon
                          size={19}
                          strokeWidth={1.5}
                        />
                      </div>

                    </div>


                    {/* Main content */}

                    <div>

                      <h2
                        className="
                          text-3xl
                          font-semibold
                          tracking-[-0.04em]
                          text-white
                          transition-colors
                          duration-300
                          group-hover:text-violet-50
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


                      {/* Technology tags */}

                      <div
                        className="
                          mt-7
                          flex
                          flex-wrap
                          gap-2
                        "
                      >

                        {service.technologies.map((technology) => (

                          <span
                            key={technology}
                            className="
                              rounded-full
                              border
                              border-white/[0.09]
                              bg-white/[0.025]
                              px-3
                              py-1.5
                              text-[10px]
                              font-medium
                              text-white/40
                              transition-all
                              duration-300
                              group-hover:border-violet-300/[0.12]
                              group-hover:bg-violet-400/[0.04]
                              group-hover:text-violet-200/60
                            "
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
                          text-white/25
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
                              text-white/45
                              transition-colors
                              duration-200
                              hover:text-white/75
                            "
                          >

                            <span
                              className="
                                flex h-5 w-5
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-white/[0.10]
                                bg-white/[0.02]
                                text-white/30
                                transition-all
                                duration-200
                                group-hover/item:border-violet-300/25
                                group-hover/item:bg-violet-400/10
                                group-hover/item:text-violet-200
                              "
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
                    className="
                      absolute
                      right-7
                      top-7
                      flex h-9 w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/[0.10]
                      bg-white/[0.02]
                      text-white/25
                      transition-all
                      duration-300
                      group-hover:border-violet-300/25
                      group-hover:bg-violet-400/[0.08]
                      group-hover:text-violet-100
                      group-hover:shadow-[0_0_25px_rgba(139,92,246,0.12)]
                    "
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

        {/* CTA glow */}

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
            bg-violet-600/[0.09]
            blur-[140px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[260px]
            w-[260px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-indigo-500/[0.08]
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
              font-semibold
              text-[10px]
              tracking-[0.28em]
              text-violet-300/80
            "
          >
            READY TO BUILD?
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
            Let's create something

            <span
              className="
                block
                bg-gradient-to-r
                from-white/45
                via-white/25
                to-white/10
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
              text-white/40
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
              bg-white
              px-7
              py-4
              text-sm
              font-semibold
              text-black
              shadow-[0_10px_50px_rgba(255,255,255,0.08)]
              transition-all
              duration-300
              hover:scale-[1.04]
              hover:shadow-[0_15px_60px_rgba(139,92,246,0.20)]
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
                transition-all
                duration-300
                group-hover:rotate-45
                group-hover:bg-violet-600
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


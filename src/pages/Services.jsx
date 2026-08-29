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
            left-1/2
            top-20
            h-[500px]
            w-[500px]
            -translate-x-1/2
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
            className="max-w-4xl"
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

              <span className="block text-white/30">
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
              border-white/[0.07]
              pt-7
              text-[10px]
              tracking-[0.22em]
              text-white/25
            "
          >

            <span>WEB</span>
            <span>MOBILE</span>
            <span>AI</span>
            <span>ERP</span>
            <span>CRM</span>
            <span>GROWTH</span>

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
          border-white/[0.06]
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
                    border-white/[0.07]
                    bg-white/[0.025]
                    transition-all
                    duration-500
                    hover:border-white/[0.14]
                    hover:bg-white/[0.035]
                  "
                >

                  {/* Hover glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-32
                      -top-32
                      h-72
                      w-72
                      rounded-full
                      bg-violet-500/[0.06]
                      blur-[90px]
                      transition-all
                      duration-700
                      group-hover:bg-violet-500/[0.1]
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
                          font-medium
                          tracking-[0.2em]
                          text-white/25
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
                          border-white/10
                          bg-white/[0.04]
                          text-white/50
                          transition-all
                          duration-300
                          group-hover:border-violet-300/20
                          group-hover:bg-violet-400/10
                          group-hover:text-violet-200
                        "
                      >
                        <Icon size={19} strokeWidth={1.5} />
                      </div>

                    </div>


                    {/* Main content */}

                    <div>

                      <h2
                        className="
                          text-3xl
                          font-semibold
                          tracking-[-0.04em]
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
                          text-white/35
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
                              border-white/[0.08]
                              bg-white/[0.025]
                              px-3
                              py-1.5
                              text-[10px]
                              text-white/35
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
                          font-medium
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
                              flex
                              items-center
                              gap-3
                              text-sm
                              text-white/45
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
                                border-white/10
                                text-white/30
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
                      border-white/10
                      text-white/25
                      transition-all
                      duration-300
                      group-hover:border-white/20
                      group-hover:text-white
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
          border-white/[0.06]
          px-6
          py-32
          sm:px-8
          lg:px-12
        "
      >

        <div
          className="
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

            <span className="block text-white/30">
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

export default Services;
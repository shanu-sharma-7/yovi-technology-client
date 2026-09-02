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
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=90",
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
    accent: "blue",
  },

  {
    number: "02",
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Scalable mobile experiences that help businesses connect with customers wherever they are.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1400&q=90",
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
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=90",
    items: [
      "AI Chatbots",
      "AI-Powered Business Solutions",
      "Workflow Automation",
      "AI Integrations",
      "Intelligent Customer Support",
    ],
    technologies: ["AI APIs", "Automation", "LLM"],
    accent: "indigo",
  },

  {
    number: "04",
    icon: Boxes,
    title: "ERP & CRM Development",
    description:
      "Connected business platforms that bring operations, customers and workflows together.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=90",
    items: [
      "Custom ERP Systems",
      "CRM Development",
      "Business Management Systems",
      "Inventory Management",
      "Lead Management",
      "Workflow Management",
    ],
    technologies: ["Node.js", "MongoDB", "MySQL", "REST APIs"],
    accent: "blue",
  },

  {
    number: "05",
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Data-driven digital growth strategies designed to increase visibility, generate leads and reach the right audience.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=90",
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
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1400&q=90",
    items: [
      "UI/UX Design",
      "Website Design",
      "Logo Design",
      "Brand Identity",
      "Social Media Creatives",
    ],
    technologies: ["UI/UX", "Figma", "Branding"],
    accent: "indigo",
  },
];

const accentStyles = {
  blue: {
    glow:
      "bg-blue-500/[0.10] group-hover:bg-blue-500/[0.17]",

    icon:
      "text-blue-200 border-blue-300/15 bg-blue-400/[0.08] group-hover:border-blue-300/30 group-hover:bg-blue-400/[0.14]",

    number:
      "text-blue-200/60 group-hover:text-blue-200",

    tag:
      "group-hover:border-blue-300/25 group-hover:bg-blue-400/[0.08] group-hover:text-blue-100",

    check:
      "group-hover:border-blue-300/30 group-hover:bg-blue-400/10 group-hover:text-blue-100",

    arrow:
      "group-hover:border-blue-300/30 group-hover:bg-blue-400/[0.10] group-hover:text-blue-100",
  },

  cyan: {
    glow:
      "bg-cyan-500/[0.08] group-hover:bg-cyan-500/[0.15]",

    icon:
      "text-cyan-200 border-cyan-300/15 bg-cyan-400/[0.07] group-hover:border-cyan-300/30 group-hover:bg-cyan-400/[0.13]",

    number:
      "text-cyan-200/60 group-hover:text-cyan-200",

    tag:
      "group-hover:border-cyan-300/25 group-hover:bg-cyan-400/[0.08] group-hover:text-cyan-100",

    check:
      "group-hover:border-cyan-300/30 group-hover:bg-cyan-400/10 group-hover:text-cyan-100",

    arrow:
      "group-hover:border-cyan-300/30 group-hover:bg-cyan-400/[0.10] group-hover:text-cyan-100",
  },

  indigo: {
    glow:
      "bg-indigo-500/[0.08] group-hover:bg-indigo-500/[0.15]",

    icon:
      "text-indigo-200 border-indigo-300/15 bg-indigo-400/[0.07] group-hover:border-indigo-300/30 group-hover:bg-indigo-400/[0.13]",

    number:
      "text-indigo-200/60 group-hover:text-indigo-200",

    tag:
      "group-hover:border-indigo-300/25 group-hover:bg-indigo-400/[0.08] group-hover:text-indigo-100",

    check:
      "group-hover:border-indigo-300/30 group-hover:bg-indigo-400/10 group-hover:text-indigo-100",

    arrow:
      "group-hover:border-indigo-300/30 group-hover:bg-indigo-400/[0.10] group-hover:text-indigo-100",
  },
};

function Services() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07152f] text-white">

      {/* =====================================================
          GLOBAL BLUE AMBIENT BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

        {/* Top blue atmosphere */}

        <motion.div
          animate={{
            x: [0, 45, 0],
            y: [0, 25, 0],
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
            top-[-150px]
            h-[600px]
            w-[600px]
            rounded-full
            bg-blue-500/[0.16]
            blur-[150px]
          "
        />

        {/* Cyan atmosphere */}

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 35, 0],
            scale: [1, 1.10, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[42%]
            top-[18%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-cyan-400/[0.075]
            blur-[150px]
          "
        />

        {/* Right indigo atmosphere */}

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
            right-[-120px]
            top-[35%]
            h-[540px]
            w-[540px]
            rounded-full
            bg-indigo-500/[0.12]
            blur-[150px]
          "
        />

        {/* Bottom blue atmosphere */}

        <motion.div
          animate={{
            x: [0, 35, 0],
            y: [0, -20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[-100px]
            left-[10%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-blue-400/[0.08]
            blur-[140px]
          "
        />

        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.04]
            [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />

        {/* Center vignette */}

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

        {/* Hero technology image */}

        <div className="pointer-events-none absolute inset-x-0 top-0 h-[650px] overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=90"
            alt=""
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
              opacity-[0.20]
              grayscale-[10%]
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-b
              from-[#07152f]/25
              via-[#07152f]/60
              to-[#07152f]
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_65%_35%,rgba(59,130,246,0.24),transparent_42%)]
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
            className="relative max-w-5xl"
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
                  border-blue-300/25
                  bg-gradient-to-br
                  from-blue-500/20
                  to-cyan-500/10
                  shadow-[0_0_35px_rgba(59,130,246,0.18)]
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
                  text-blue-200/85
                "
              >
                OUR SERVICES
              </span>

            </div>


            {/* Main heading */}

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

              Everything you need

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
                to build what matters.
              </span>

            </h1>


            {/* Description */}

            <p
              className="
                mt-8
                max-w-2xl
                text-base
                font-normal
                leading-7
                text-blue-50/75
                sm:text-lg
                sm:leading-8
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
              border-white/[0.10]
              pt-7
              text-[10px]
              font-medium
              tracking-[0.22em]
              text-blue-100/45
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
                  hover:text-cyan-200
                  hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.35)]
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
          border-white/[0.10]
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
                    border-white/[0.10]
                    bg-white/[0.045]
                    shadow-[0_20px_70px_rgba(0,0,0,0.15)]
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:border-blue-300/[0.24]
                    hover:bg-white/[0.065]
                    hover:shadow-[0_25px_100px_rgba(0,0,0,0.25)]
                  "
                >

                  {/* Top-right glow */}

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

                  {/* Bottom-left cyan glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      bottom-[-170px]
                      left-[-100px]
                      h-72
                      w-72
                      rounded-full
                      bg-cyan-500/[0.025]
                      blur-[100px]
                      transition-all
                      duration-700
                      group-hover:bg-cyan-500/[0.06]
                    "
                  />


                  {/* =================================================
                      CONTENT
                  ================================================= */}

                  <div
                    className="
                      relative
                      grid
                      gap-8
                      p-5
                      sm:p-7
                      lg:grid-cols-[300px_1fr_0.8fr]
                      lg:gap-10
                      lg:p-10
                    "
                  >

                    {/* =================================================
                        IMAGE
                    ================================================= */}

                    <div
                      className="
                        relative
                        min-h-[220px]
                        overflow-hidden
                        rounded-[22px]
                        border
                        border-white/[0.12]
                        bg-black/30
                        shadow-[0_15px_50px_rgba(0,0,0,0.20)]
                      "
                    >

                      <motion.img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        whileHover={{
                          scale: 1.07,
                        }}
                        transition={{
                          duration: 0.7,
                        }}
                        className="
                          absolute
                          inset-0
                          h-full
                          w-full
                          object-cover
                          opacity-[0.95]
                          saturate-[1.05]
                          grayscale-[5%]
                          transition-opacity
                          duration-500
                          group-hover:opacity-100
                        "
                      />

                      {/* Much lighter image overlay */}

                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-r
                          from-[#07152f]/45
                          via-[#07152f]/10
                          to-transparent
                        "
                      />

                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-[#07152f]/65
                          via-transparent
                          to-transparent
                        "
                      />

                      {/* Blue image glow */}

                      <div
                        className="
                          absolute
                          -bottom-16
                          -left-10
                          h-40
                          w-40
                          rounded-full
                          bg-blue-400/[0.14]
                          blur-[60px]
                          transition-all
                          duration-500
                          group-hover:scale-150
                        "
                      />

                      {/* Number over image */}

                      <div
                        className="
                          absolute
                          bottom-5
                          left-5
                          flex
                          items-center
                          gap-3
                        "
                      >

                        <span
                          className={`
                            text-[11px]
                            font-semibold
                            tracking-[0.2em]
                            ${accent.number}
                          `}
                        >
                          {service.number}
                        </span>

                        <span
                          className="
                            h-px
                            w-8
                            bg-white/35
                          "
                        />

                        <span
                          className="
                            text-[9px]
                            font-medium
                            tracking-[0.18em]
                            text-white/65
                          "
                        >
                          YOVI TECHNOLOGIES
                        </span>

                      </div>

                    </div>


                    {/* =================================================
                        MAIN CONTENT
                    ================================================= */}

                    <div>

                      {/* Number + Icon */}

                      <div className="flex items-center gap-4">

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


                      {/* Title */}

                      <h2
                        className="
                          mt-6
                          text-3xl
                          font-semibold
                          tracking-[-0.04em]
                          text-white
                          sm:text-4xl
                        "
                      >
                        {service.title}
                      </h2>


                      {/* Description */}

                      <p
                        className="
                          mt-4
                          max-w-xl
                          text-sm
                          font-normal
                          leading-7
                          text-blue-50/70
                          transition-colors
                          duration-300
                          group-hover:text-blue-50/85
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
                              border-white/[0.12]
                              bg-white/[0.035]
                              px-3
                              py-1.5
                              text-[10px]
                              font-medium
                              text-blue-50/60
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


                    {/* =================================================
                        FEATURES
                    ================================================= */}

                    <div>

                      <p
                        className="
                          mb-5
                          text-[10px]
                          font-semibold
                          tracking-[0.2em]
                          text-blue-100/45
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
                              font-normal
                              text-blue-50/65
                              transition-colors
                              duration-200
                              hover:text-white
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
                                border-white/[0.12]
                                bg-white/[0.025]
                                text-white/40
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
                      border-white/[0.10]
                      bg-white/[0.035]
                      text-white/35
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
          border-white/[0.10]
          px-6
          py-32
          sm:px-8
          lg:px-12
        "
      >

        {/* CTA Background */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            overflow-hidden
          "
        >

          <img
            src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1800&q=90"
            alt=""
            className="
              h-full
              w-full
              object-cover
              opacity-[0.16]
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#07152f]
              via-[#07152f]/75
              to-[#07152f]
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#07152f]
              via-transparent
              to-[#07152f]
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
            bg-blue-500/[0.09]
            blur-[140px]
          "
        />

        {/* Cyan glow */}

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
            bg-cyan-400/[0.07]
            blur-[130px]
          "
        />

        {/* Center glow */}

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
            bg-indigo-500/[0.05]
            blur-[110px]
          "
        />


        {/* CTA Content */}

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
              text-cyan-200/90
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
              text-white
              sm:text-5xl
              md:text-6xl
            "
          >

            Let's create something

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
              worth building.
            </span>

          </h2>


          <p
            className="
              mx-auto
              mt-6
              max-w-xl
              text-sm
              leading-7
              text-blue-50/70
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
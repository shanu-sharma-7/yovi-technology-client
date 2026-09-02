import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Globe2,
  Smartphone,
  BrainCircuit,
  Boxes,
  Megaphone,
  Palette,
  Sparkles,
} from "lucide-react";

const industries = [
  {
    number: "01",
    title: "Technology & SaaS",
    description:
      "High-performance digital products, websites and scalable applications built for technology companies and growing SaaS businesses.",
    icon: Globe2,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=95",
    services: ["Web Development", "Mobile Apps", "AI Solutions"],
  },

  {
    number: "02",
    title: "Healthcare",
    description:
      "Digital platforms and intelligent solutions that help healthcare organizations improve patient experiences, operations and communication.",
    icon: BrainCircuit,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=95",
    services: ["Web Development", "AI Solutions", "CRM"],
  },

  {
    number: "03",
    title: "Logistics & Transportation",
    description:
      "Connected technology for fleet operations, logistics management, customer communication and smarter business workflows.",
    icon: Boxes,
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=95",
    services: ["ERP & CRM", "Mobile Apps", "Automation"],
  },

  {
    number: "04",
    title: "Education",
    description:
      "Modern digital experiences that make learning, administration, communication and student engagement easier.",
    icon: Smartphone,
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=95",
    services: ["Web Development", "Mobile Apps", "UI/UX"],
  },

  {
    number: "05",
    title: "Retail & E-commerce",
    description:
      "Conversion-focused digital experiences that help retail brands build stronger customer journeys and grow online.",
    icon: Megaphone,
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=95",
    services: ["E-commerce", "Digital Marketing", "AI"],
  },

  {
    number: "06",
    title: "Professional Services",
    description:
      "Business technology that helps service companies automate workflows, manage customers and build a stronger digital presence.",
    icon: Palette,
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=95",
    services: ["Web Development", "CRM", "Branding"],
  },
];

const serviceColors = [
  "border-blue-300/15 bg-blue-400/[0.06] text-blue-100/75",
  "border-cyan-300/15 bg-cyan-400/[0.06] text-cyan-100/75",
  "border-indigo-300/15 bg-indigo-400/[0.06] text-indigo-100/75",
];

function Industries() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07152f] font-sans text-white antialiased">

      {/* =====================================================
          GLOBAL BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

        {/* Blue glow */}

        <motion.div
          animate={{
            x: [0, 40, 0],
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
            left-[5%]
            top-[-160px]
            h-[620px]
            w-[620px]
            rounded-full
            bg-blue-500/[0.13]
            blur-[150px]
          "
        />

        {/* Cyan glow */}

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[40%]
            top-[25%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-cyan-400/[0.055]
            blur-[150px]
          "
        />

        {/* Indigo glow */}

        <motion.div
          animate={{
            x: [0, -35, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[-150px]
            top-[40%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-indigo-500/[0.09]
            blur-[150px]
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
            bg-[radial-gradient(circle_at_center,transparent_10%,#07152f_90%)]
          "
        />

      </div>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          px-6
          pb-28
          pt-36
          sm:px-8
          sm:pt-40
          lg:px-12
          lg:pt-44
        "
      >

        {/* Hero Image */}

        <div className="pointer-events-none absolute inset-x-0 top-0 h-[680px] overflow-hidden">

          <motion.img
            initial={{
              opacity: 0,
              scale: 1.06,
            }}
            animate={{
              opacity: 0.32,
              scale: 1,
            }}
            transition={{
              duration: 1.4,
              ease: "easeOut",
            }}
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2000&q=95"
            alt=""
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
              saturate-[1.05]
            "
          />

          {/* Soft readability overlay */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-b
              from-[#07152f]/25
              via-[#07152f]/55
              to-[#07152f]
            "
          />

          {/* Blue light */}

          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_65%_35%,rgba(59,130,246,0.20),transparent_45%)]
            "
          />

        </div>


        {/* Hero glow */}

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.35, 0.6, 0.35],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            left-1/2
            top-10
            h-[520px]
            w-[520px]
            -translate-x-1/2
            rounded-full
            bg-blue-500/[0.07]
            blur-[150px]
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

              <motion.span
                animate={{
                  rotate: [0, 8, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  flex
                  h-9
                  w-9
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
                  size={14}
                  className="text-blue-200"
                />

              </motion.span>

              <span
                className="
                  text-[11px]
                  font-semibold
                  tracking-[0.25em]
                  text-blue-200/85
                "
              >
                INDUSTRIES WE SERVE
              </span>

            </div>


            {/* Heading */}

            <h1
              className="
                text-5xl
                font-bold
                leading-[0.98]
                tracking-[-0.055em]
                text-white
                sm:text-6xl
                md:text-7xl
                lg:text-[88px]
              "
            >

              Technology built

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
                around your industry.
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
              Every business works differently. We combine web,
              mobile, AI, business systems, marketing and design
              to create technology that fits the way your industry works.
            </p>

          </motion.div>


          {/* Industry Tags */}

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
              gap-x-9
              gap-y-4
              border-t
              border-white/[0.10]
              pt-7
              text-[10px]
              font-semibold
              tracking-[0.22em]
              text-blue-100/45
            "
          >

            {[
              "TECHNOLOGY",
              "HEALTHCARE",
              "LOGISTICS",
              "EDUCATION",
              "RETAIL",
              "SERVICES",
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
          INDUSTRIES SECTION
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

          {/* Section heading */}

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
            className="mb-14 max-w-3xl"
          >

            <span
              className="
                text-[11px]
                font-semibold
                tracking-[0.25em]
                text-cyan-200/85
              "
            >
              WHERE WE WORK
            </span>

            <h2
              className="
                mt-5
                text-4xl
                font-bold
                leading-tight
                tracking-[-0.05em]
                text-white
                sm:text-5xl
              "
            >

              Different industries.

              <span className="block text-white/35">
                Powerful technology.
              </span>

            </h2>

            <p
              className="
                mt-6
                max-w-2xl
                text-sm
                leading-7
                text-blue-50/60
                sm:text-base
              "
            >
              From startups and technology companies to healthcare,
              logistics, education and retail, we build digital
              solutions around real business requirements.
            </p>

          </motion.div>


          {/* Industry Grid */}

          <div
            className="
              grid
              gap-5
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
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    y: -7,
                  }}
                  className="
                    group
                    relative
                    min-h-[490px]
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-white/[0.10]
                    bg-white/[0.045]
                    shadow-[0_20px_70px_rgba(0,0,0,0.18)]
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:border-blue-300/[0.25]
                    hover:bg-white/[0.065]
                    hover:shadow-[0_30px_100px_rgba(37,99,235,0.15)]
                  "
                >

                  {/* =================================================
                      CLEAR CARD IMAGE
                  ================================================= */}

                  <div
                    className="
                      absolute
                      inset-x-0
                      top-0
                      h-[260px]
                      overflow-hidden
                    "
                  >

                    <motion.img
                      src={industry.image}
                      alt={industry.title}
                      loading="lazy"
                      whileHover={{
                        scale: 1.06,
                      }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                      }}
                      className="
                        h-full
                        w-full
                        object-cover
                        object-center
                        opacity-100
                        saturate-[1.08]
                        transition-all
                        duration-500
                        group-hover:brightness-110
                      "
                    />

                    {/* Very light overlay only at bottom */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-b
                        from-black/5
                        via-transparent
                        to-[#07152f]/90
                      "
                    />

                    {/* Subtle blue tint */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-br
                        from-blue-500/[0.05]
                        via-transparent
                        to-cyan-500/[0.04]
                      "
                    />

                  </div>


                  {/* Card glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-24
                      -top-24
                      h-72
                      w-72
                      rounded-full
                      bg-blue-500/[0.06]
                      blur-[90px]
                      transition-all
                      duration-700
                      group-hover:bg-blue-500/[0.12]
                    "
                  />


                  {/* Top accent */}

                  <div
                    className="
                      absolute
                      left-8
                      top-0
                      z-30
                      h-[2px]
                      w-0
                      bg-gradient-to-r
                      from-blue-400
                      to-cyan-400
                      transition-all
                      duration-500
                      group-hover:w-24
                    "
                  />


                  {/* Content */}

                  <div
                    className="
                      relative
                      z-20
                      flex
                      min-h-[490px]
                      flex-col
                      p-7
                      sm:p-8
                    "
                  >

                    {/* Top row */}

                    <div className="flex items-center justify-between">

                      <span
                        className="
                          rounded-full
                          border
                          border-white/[0.12]
                          bg-[#07152f]/55
                          px-3
                          py-1.5
                          text-[10px]
                          font-semibold
                          tracking-[0.18em]
                          text-white/70
                          backdrop-blur-md
                        "
                      >
                        {industry.number}
                      </span>


                      <div
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/[0.14]
                          bg-[#07152f]/55
                          text-white/55
                          backdrop-blur-md
                          transition-all
                          duration-300
                          group-hover:border-cyan-300/30
                          group-hover:bg-blue-400/[0.10]
                          group-hover:text-cyan-100
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

                    </div>


                    {/* Spacer for image */}

                    <div className="flex-1" />


                    {/* Icon */}

                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-white/[0.16]
                        bg-[#07152f]/75
                        text-blue-100
                        shadow-[0_10px_35px_rgba(0,0,0,0.35)]
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        group-hover:border-cyan-300/30
                        group-hover:bg-blue-400/[0.12]
                        group-hover:text-cyan-100
                        group-hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]
                      "
                    >

                      <Icon
                        size={21}
                        strokeWidth={1.7}
                      />

                    </div>


                    {/* Text */}

                    <div className="mt-6">

                      <h3
                        className="
                          text-2xl
                          font-bold
                          tracking-[-0.035em]
                          text-white
                          transition-colors
                          duration-300
                          group-hover:text-cyan-50
                        "
                      >
                        {industry.title}
                      </h3>

                      <p
                        className="
                          mt-3
                          text-sm
                          font-normal
                          leading-6
                          text-blue-50/65
                          transition-colors
                          duration-300
                          group-hover:text-blue-50/80
                        "
                      >
                        {industry.description}
                      </p>

                    </div>


                    {/* Services */}

                    <div className="mt-6 flex flex-wrap gap-2">

                      {industry.services.map((service, serviceIndex) => (

                        <span
                          key={service}
                          className={`
                            rounded-full
                            border
                            px-3
                            py-1.5
                            text-[10px]
                            font-medium
                            transition-all
                            duration-300
                            ${serviceColors[serviceIndex % serviceColors.length]}
                          `}
                        >
                          {service}
                        </span>

                      ))}

                    </div>

                  </div>

                </motion.article>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          BUSINESS APPROACH
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

        {/* Background */}

        <div
          className="
            pointer-events-none
            absolute
            left-[-200px]
            top-1/2
            h-[500px]
            w-[500px]
            -translate-y-1/2
            rounded-full
            bg-blue-500/[0.045]
            blur-[150px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-[-150px]
            bottom-[-100px]
            h-[450px]
            w-[450px]
            rounded-full
            bg-cyan-400/[0.035]
            blur-[140px]
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

          {/* Left */}

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
                text-[11px]
                font-semibold
                tracking-[0.25em]
                text-cyan-200/85
              "
            >
              BUSINESS FIRST
            </span>

            <h2
              className="
                mt-5
                text-4xl
                font-bold
                leading-tight
                tracking-[-0.05em]
                text-white
                sm:text-5xl
                md:text-6xl
              "
            >

              Technology should fit

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-blue-200
                  via-blue-300
                  to-cyan-200
                  bg-clip-text
                  text-transparent
                "
              >
                your business.
              </span>

            </h2>

            <p
              className="
                mt-7
                max-w-xl
                text-sm
                leading-7
                text-blue-50/65
                sm:text-base
              "
            >
              We don't believe in one-size-fits-all technology.
              We understand your workflows, customers and goals
              before choosing the right digital approach.
            </p>

          </motion.div>


          {/* Right */}

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
              border-white/[0.10]
              bg-white/[0.045]
              p-8
              shadow-[0_25px_100px_rgba(0,0,0,0.25)]
              backdrop-blur-xl
              sm:p-10
            "
          >

            {/* Background image */}

            <div className="absolute inset-0 overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=95"
                alt=""
                className="
                  h-full
                  w-full
                  object-cover
                  opacity-[0.18]
                  saturate-[1.05]
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-[#07152f]/90
                  via-[#07152f]/78
                  to-[#07152f]/65
                "
              />

            </div>


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
                bg-blue-500/[0.08]
                blur-[90px]
              "
            />


            <div className="relative space-y-6">

              {[
                {
                  number: "01",
                  title: "Understand",
                  text: "Learn how your industry and business actually operate.",
                },
                {
                  number: "02",
                  title: "Choose",
                  text: "Select the right mix of web, mobile, AI and business technology.",
                },
                {
                  number: "03",
                  title: "Build",
                  text: "Create scalable digital solutions around your requirements.",
                },
                {
                  number: "04",
                  title: "Grow",
                  text: "Improve, optimize and evolve as your business grows.",
                },
              ].map((item) => (

                <motion.div
                  key={item.number}
                  whileHover={{
                    x: 6,
                  }}
                  className="
                    group/step
                    flex
                    items-start
                    gap-5
                    border-b
                    border-white/[0.08]
                    pb-6
                    last:border-0
                    last:pb-0
                  "
                >

                  <span
                    className="
                      mt-0.5
                      text-[10px]
                      font-semibold
                      tracking-[0.15em]
                      text-blue-200/40
                      transition-colors
                      duration-300
                      group-hover/step:text-cyan-200
                    "
                  >
                    {item.number}
                  </span>

                  <div>

                    <h3
                      className="
                        text-sm
                        font-semibold
                        text-white/85
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
                        text-blue-50/50
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
          border-white/[0.10]
          px-6
          py-32
          sm:px-8
          lg:px-12
        "
      >

        {/* CTA Image */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            overflow-hidden
          "
        >

          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2000&q=95"
            alt=""
            className="
              h-full
              w-full
              object-cover
              opacity-[0.18]
              saturate-[1.05]
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#07152f]/95
              via-[#07152f]/70
              to-[#07152f]/95
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
              bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_48%)]
            "
          />

        </div>


        {/* Blue glow */}

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.45, 0.8, 0.45],
          }}
          transition={{
            duration: 8,
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
            bg-blue-500/[0.08]
            blur-[140px]
          "
        />


        {/* Cyan glow */}

        <motion.div
          animate={{
            scale: [1, 1.06, 1],
            opacity: [0.4, 0.75, 0.4],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            left-[70%]
            top-1/2
            h-[420px]
            w-[420px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-400/[0.06]
            blur-[130px]
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
              text-[11px]
              font-semibold
              tracking-[0.28em]
              text-cyan-200/90
            "
          >
            YOUR INDUSTRY. YOUR SOLUTION.
          </span>


          <h2
            className="
              mt-6
              text-4xl
              font-bold
              leading-tight
              tracking-[-0.05em]
              text-white
              sm:text-5xl
              md:text-6xl
            "
          >

            Have a business challenge?

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
              Let's solve it with technology.
            </span>

          </h2>


          <p
            className="
              mx-auto
              mt-6
              max-w-xl
              text-sm
              leading-7
              text-blue-50/65
              sm:text-base
            "
          >
            Tell us about your business and we'll explore
            the right combination of technology, design and
            digital strategy for you.
          </p>


          {/* CTA */}

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

export default Industries;
import { useEffect, useState } from "react";
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

import api from "../services/api";

function About() {
  const [websiteImages, setWebsiteImages] = useState([]);
  const [aboutContent, setAboutContent] = useState(null);
  const [contentLoading, setContentLoading] = useState(true);

  /*
  ============================================================
  FALLBACK IMAGES
  These will be used if admin has not uploaded an image yet.
  ============================================================
  */

  const fallbackImages = {
    "about-hero":
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=85",

    "about-who-we-are":
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=90",

    "about-mission":
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85",

    "about-vision":
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85",

    "about-approach":
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=85",

    "about-cta":
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=85",
  };

  /*
  ============================================================
  FALLBACK ABOUT CONTENT
  Used if CMS data is unavailable.
  ============================================================
  */

  const fallbackContent = {
    hero: {
      badge: "ABOUT YOVI TECHNOLOGIES",
      headingLine1: "Technology with",
      headingLine2: "a reason behind it.",
      description:
        "YoVi Technologies is a technology and digital solutions company helping businesses build, improve and grow their digital presence.",
    },

    positioning: [
      {
        title: "Technology",
        subtitle: "Modern engineering",
      },
      {
        title: "Innovation",
        subtitle: "AI & automation",
      },
      {
        title: "Growth",
        subtitle: "Business focused",
      },
    ],

    whoWeAre: {
      eyebrow: "WHO WE ARE",
      heading: "More than a",
      highlightedHeading: "technology company.",

      paragraphs: [
        "YoVi Technologies helps businesses turn ideas, challenges and opportunities into practical digital solutions.",

        "We specialize in modern websites, custom web applications, mobile applications, AI-powered solutions, ERP and CRM systems, UI/UX design and digital marketing.",

        "Our approach combines technology, design, automation and digital growth to create solutions that are visually impressive, scalable, secure and focused on real business outcomes.",
      ],

      expertiseTags: [
        "ENGINEERING",
        "DESIGN",
        "AI",
        "GROWTH",
      ],

      stats: [
        {
          number: "01",
          label: "BUSINESS FIRST",
        },
        {
          number: "02",
          label: "DIGITAL FIRST",
        },
      ],

      overlayEyebrow: "DIGITAL PARTNERSHIP",
      overlayTitle: "YOVI TECHNOLOGIES",
      overlayDescription:
        "Engineering meaningful digital experiences",
    },

    mission: {
      eyebrow: "OUR MISSION",
      heading: "Simplify technology.",
      highlightedHeading: "Accelerate growth.",
      description:
        "To help businesses use technology to simplify operations, strengthen their digital presence, reach more customers and achieve sustainable growth.",
    },

    vision: {
      eyebrow: "OUR VISION",
      heading: "Build what's next.",
      highlightedHeading: "Together.",
      description:
        "To become a trusted technology partner for businesses by delivering innovative, reliable, scalable and results-driven digital solutions.",
    },

    whyChoose: {
      eyebrow: "WHY CHOOSE YOVI",
      heading: "Built around your",
      highlightedHeading: "business.",
      description:
        "We don't believe in one-size-fits-all technology. Every solution starts with your business, your users and your goals.",

      features: [
        {
          title: "Customized Solutions",
          description:
            "Technology designed around your specific business requirements.",
        },
        {
          title: "Modern Technology",
          description:
            "Current tools and scalable architectures built for long-term growth.",
        },
        {
          title: "Secure Development",
          description:
            "Security-conscious development practices across the product lifecycle.",
        },
        {
          title: "Business Focused",
          description:
            "Every technical decision is connected to a meaningful business outcome.",
        },
        {
          title: "Digital First",
          description:
            "Responsive and accessible experiences built for today's users.",
        },
        {
          title: "Post-Launch Support",
          description:
            "We stay connected after launch to help your digital product evolve.",
        },
      ],
    },

    approach: {
      eyebrow: "HOW WE THINK",
      heading: "Technology should",
      highlightedHeading: "solve real problems.",
      description:
        "We start by understanding the problem before choosing the technology. This helps us build solutions that are useful, maintainable and capable of growing with the business.",

      steps: [
        {
          number: "01",
          title: "Understand the business",
        },
        {
          number: "02",
          title: "Define the right strategy",
        },
        {
          number: "03",
          title: "Design meaningful experiences",
        },
        {
          number: "04",
          title: "Build scalable technology",
        },
        {
          number: "05",
          title: "Test and refine",
        },
        {
          number: "06",
          title: "Launch and support",
        },
      ],
    },

    cta: {
      eyebrow: "LET'S BUILD TOGETHER",
      heading: "Your next digital idea",
      highlightedHeading: "starts here.",
      description:
        "Let's turn your ideas into meaningful digital experiences that are built to grow.",
      buttonText: "Start a Project",
      buttonLink: "/contact",
    },
  };

  /*
  ============================================================
  FETCH ABOUT CONTENT + IMAGES
  ============================================================
  */

  useEffect(() => {
    const fetchAboutContent = async () => {
      try {
        const response = await api.get("/content/about");

        setAboutContent(response.data?.data || response.data);
      } catch (error) {
        console.error("About Content Error:", error);
      } finally {
        setContentLoading(false);
      }
    };

    const fetchImages = async () => {
      try {
        const response = await api.get("/images");

        setWebsiteImages(response.data?.data || []);
      } catch (error) {
        console.error("About Images Error:", error);
      }
    };

    fetchAboutContent();
    fetchImages();
  }, []);

  /*
  ============================================================
  IMAGE HELPER
  Admin image -> use admin image
  Otherwise -> use fallback image
  ============================================================
  */

  const getImageByKey = (key) => {
    const image = websiteImages.find(
      (item) => item.key === key
    );

    return image?.url || fallbackImages[key];
  };

  /*
  ============================================================
  CONTENT HELPERS
  CMS content -> fallback content
  ============================================================
  */

  const content = aboutContent || fallbackContent;

  const hero = {
    ...fallbackContent.hero,
    ...(content.hero || {}),
  };

  const aboutPositioning =
    content.positioning?.length > 0
      ? content.positioning
      : fallbackContent.positioning;

  const whoWeAre = {
    ...fallbackContent.whoWeAre,
    ...(content.whoWeAre || {}),
  };

  const mission = {
    ...fallbackContent.mission,
    ...(content.mission || {}),
  };

  const vision = {
    ...fallbackContent.vision,
    ...(content.vision || {}),
  };

  const whyChoose = {
    ...fallbackContent.whyChoose,
    ...(content.whyChoose || {}),
  };

  const approach = {
    ...fallbackContent.approach,
    ...(content.approach || {}),
  };

  const cta = {
    ...fallbackContent.cta,
    ...(content.cta || {}),
  };

  /*
  ============================================================
  FEATURE ICONS
  Icons remain part of the UI.
  Content comes from CMS.
  ============================================================
  */

  const featureIcons = [
    Layers3,
    Zap,
    ShieldCheck,
    Users,
    Globe2,
    Check,
  ];

  const featureAccents = [
    "blue",
    "cyan",
    "indigo",
    "blue",
    "cyan",
    "indigo",
  ];

  /*
  ============================================================
  POSITIONING UI
  Icons / colors remain hardcoded.
  Text comes from CMS.
  ============================================================
  */

  const positioningUI = [
    {
      icon: Globe2,
      glow: "bg-blue-500/[0.12]",
      iconColor: "text-blue-200",
      borderColor: "border-blue-300/20",
    },
    {
      icon: Zap,
      glow: "bg-cyan-400/[0.11]",
      iconColor: "text-cyan-200",
      borderColor: "border-cyan-300/20",
    },
    {
      icon: Target,
      glow: "bg-indigo-500/[0.10]",
      iconColor: "text-indigo-200",
      borderColor: "border-indigo-300/20",
    },
  ];

  /*
  ============================================================
  LOADING STATE
  ============================================================
  */

  if (contentLoading && !aboutContent) {
    return (
      <main className="relative min-h-screen overflow-hidden bg-[#07152f] text-white">
        <div className="flex min-h-screen items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div
              className="
                h-10
                w-10
                animate-spin
                rounded-full
                border-2
                border-blue-300/20
                border-t-blue-300
              "
            />

            <p className="text-xs tracking-[0.2em] text-blue-100/50">
              LOADING ABOUT
            </p>
          </div>
        </div>
      </main>
    );
  }

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
            src={getImageByKey("about-hero")}
            alt="Technology and digital innovation"
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
                {hero.badge}
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
              {hero.headingLine1}

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
                {hero.headingLine2}
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
              {hero.description}
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

            {aboutPositioning.map((item, index) => {

              const ui =
                positioningUI[index] || positioningUI[0];

              const Icon = ui.icon;

              return (
                <motion.div
                  key={`${item.title}-${index}`}
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
                      ${ui.glow}
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
                        ${ui.borderColor}
                        bg-white/[0.06]
                        ${ui.iconColor}
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
                      {item.subtitle || item.text}
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
                src={getImageByKey("about-who-we-are")}
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
                  {whoWeAre.overlayEyebrow}
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
                    {whoWeAre.overlayTitle}
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      text-white/65
                    "
                  >
                    {whoWeAre.overlayDescription}
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
              {whoWeAre.eyebrow}
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
              {whoWeAre.heading}

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
                {whoWeAre.highlightedHeading}
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
                {whoWeAre.paragraphs?.[0]}
              </p>

              <p
                className="
                  text-sm
                  leading-7
                  text-blue-50/65
                "
              >
                {whoWeAre.paragraphs?.[1]}
              </p>

              <p
                className="
                  text-sm
                  leading-7
                  text-blue-50/65
                "
              >
                {whoWeAre.paragraphs?.[2]}
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

              {(whoWeAre.expertiseTags || []).map((item) => (
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

              {(whoWeAre.stats || []).slice(0, 2).map((stat, index) => (
                <div
                  key={`${stat.label}-${index}`}
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
                    {stat.number}
                  </p>

                  <p
                    className="
                      mt-1
                      text-[9px]
                      tracking-[0.18em]
                      text-blue-100/45
                    "
                  >
                    {stat.label}
                  </p>
                </div>
              ))}

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
                src={getImageByKey("about-mission")}
                alt="Business team collaboration"
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
                  {mission.eyebrow}
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
                  {mission.heading}

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
                    {mission.highlightedHeading}
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
                  {mission.description}
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
                src={getImageByKey("about-vision")}
                alt="Global digital technology"
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
                  {vision.eyebrow}
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
                  {vision.heading}

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
                    {vision.highlightedHeading}
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
                  {vision.description}
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
              {whyChoose.eyebrow}
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
              {whyChoose.heading}

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
                {" "}
                {whyChoose.highlightedHeading}
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
              {whyChoose.description}
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

            {(whyChoose.features || []).map((item, index) => {

              const Icon =
                featureIcons[index] || Layers3;

              const accentName =
                featureAccents[index] || "blue";

              const accent =
                accentName === "blue"
                  ? "text-blue-200 bg-blue-400/[0.09] border-blue-300/15 group-hover:border-blue-300/30"
                  : accentName === "cyan"
                  ? "text-cyan-200 bg-cyan-400/[0.08] border-cyan-300/15 group-hover:border-cyan-300/30"
                  : "text-indigo-200 bg-indigo-400/[0.08] border-indigo-300/15 group-hover:border-indigo-300/30";

              return (
                <motion.div
                  key={`${item.title}-${index}`}
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
                    {item.description || item.text}
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
              {approach.eyebrow}
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
              {approach.heading}

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
                {approach.highlightedHeading}
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
              {approach.description}
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
              src={getImageByKey("about-approach")}
              alt="Digital business strategy"
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

              {(approach.steps || []).map((item, index) => (

                <div
                  key={`${item.title}-${index}`}
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
                    {item.number || `0${index + 1}`}
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
                    {item.title}
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
            src={getImageByKey("about-cta")}
            alt="Digital technology workspace"
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
            {cta.eyebrow}
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
            {cta.heading}

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
              {cta.highlightedHeading}
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
            {cta.description}
          </p>

          <a
            href={cta.buttonLink || "/contact"}
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

            {cta.buttonText}

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
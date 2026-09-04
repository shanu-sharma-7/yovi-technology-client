import { useEffect, useState } from "react";
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
import api from "../services/api";

/* =========================================================
   DEFAULT / FALLBACK HOME CONTENT
   ---------------------------------------------------------
   This content remains visible if:
   1. API fails
   2. API returns incomplete data
   3. Admin has not changed anything
========================================================= */

const defaultHomeContent = {
  hero: {
    badge: "DIGITAL PRODUCTS • AI • ENGINEERING",

    headingLine1: "We build digital",
    headingLine2: "experiences that",
    headingLine3: "move businesses.",

    description:
      "We combine technology, design and AI to create scalable digital products and intelligent business solutions built for growth.",

    primaryButton: {
      text: "Start a Project",
      link: "/contact",
    },

    secondaryButton: {
      text: "Explore Services",
      link: "/services",
    },

    tags: ["WEB", "AI", "MOBILE", "ERP", "CRM"],
  },

  services: {
    eyebrow: "WHAT WE BUILD",

    heading: "Technology that turns",

    highlightedHeading: "ideas into impact.",

    viewAllText: "View all services",

    viewAllLink: "/services",

    cards: [
      {
        number: "01",
        title: "Web Development",
        description:
          "High-performance websites and custom web applications designed for modern businesses.",
        technologies: ["React", "Next.js", "Node.js"],
      },

      {
        number: "02",
        title: "AI Solutions",
        description:
          "Intelligent automation and AI integrations that help businesses work smarter.",
        technologies: ["AI APIs", "Automation"],
      },

      {
        number: "03",
        title: "Mobile Apps",
        description:
          "Modern mobile experiences for Android, iOS and cross-platform ecosystems.",
        technologies: ["Android", "iOS"],
      },

      {
        number: "04",
        title: "ERP & CRM",
        description:
          "Connected systems that simplify business operations and customer management.",
        technologies: ["ERP", "CRM"],
      },

      {
        number: "05",
        title: "Digital Growth",
        description:
          "SEO, advertising and digital strategies focused on visibility and measurable growth.",
        technologies: ["SEO", "Google Ads"],
      },
    ],
  },

  whyYovi: {
    eyebrow: "WHY YOVI",

    heading: "Not just developers.",

    highlightedHeading: "Your technology partner.",

    description:
      "YoVi Technologies combines engineering, design, AI and digital growth to help businesses build stronger digital foundations and create meaningful customer experiences.",

    buttonText: "Discover YoVi",

    buttonLink: "/about",

    approach: [
      {
        number: "01",
        title: "Technology",
        subtitle: "Modern engineering",
      },

      {
        number: "02",
        title: "Design",
        subtitle: "Premium experiences",
      },

      {
        number: "03",
        title: "Intelligence",
        subtitle: "AI & automation",
      },

      {
        number: "04",
        title: "Growth",
        subtitle: "Business outcomes",
      },
    ],
  },

  cta: {
    eyebrow: "LET'S BUILD SOMETHING",

    heading: "Have an idea?",

    highlightedHeading: "Let's turn it into reality.",

    description:
      "Tell us what you're building, what you're trying to improve, or where you want to go next.",

    buttonText: "Start a Conversation",

    buttonLink: "/contact",
  },
};

/* =========================================================
   FALLBACK IMAGES
========================================================= */

const fallbackImages = {
  "hero-digital":
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=95",

  "hero-engineering":
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1800&q=95",

  "hero-ai":
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1800&q=95",

  "hero-mobile":
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1800&q=95",

  "hero-business":
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=95",

  "hero-growth":
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=95",

  "service-web":
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1800&q=95",

  "service-ai":
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1800&q=95",

  "service-mobile":
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1800&q=95",

  "service-erp":
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=95",

  "service-growth":
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=95",

  "why-yovi":
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=95",
};

/* =========================================================
   HERO IMAGE CONFIG
========================================================= */

const heroImageConfig = [
  {
    key: "hero-digital",
    label: "DIGITAL",
  },
  {
    key: "hero-engineering",
    label: "ENGINEERING",
  },
  {
    key: "hero-ai",
    label: "AI",
  },
  {
    key: "hero-mobile",
    label: "MOBILE",
  },
  {
    key: "hero-business",
    label: "BUSINESS",
  },
  {
    key: "hero-growth",
    label: "GROWTH",
  },
];

/* =========================================================
   SERVICE ICON CONFIG
========================================================= */

const serviceIcons = [
  Globe2,
  BrainCircuit,
  Smartphone,
  Boxes,
  Megaphone,
];

/* =========================================================
   SERVICE STYLE CONFIG
========================================================= */

const serviceStyles = [
  {
    accent: "blue",
    imageKey: "service-web",
    className: "min-h-[360px] lg:col-span-2",
  },
  {
    accent: "cyan",
    imageKey: "service-ai",
    className: "min-h-[360px]",
  },
  {
    accent: "blue",
    imageKey: "service-mobile",
    className: "min-h-[330px]",
  },
  {
    accent: "cyan",
    imageKey: "service-erp",
    className: "min-h-[330px]",
  },
  {
    accent: "blue",
    imageKey: "service-growth",
    className: "min-h-[330px]",
  },
];

/* =========================================================
   HERO IMAGE SLIDER
========================================================= */

function HeroImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const totalImages = images.length;

  /*
    TRUE INFINITE CAROUSEL

    Original:
    01 02 03 04 05 06

    Render:
    01 02 03 04 05 06 | 01 02 03 04 05 06
  */

  const infiniteImages =
    totalImages > 1 ? [...images, ...images] : images;

  /* =======================================================
     AUTO PLAY
  ======================================================= */

  useEffect(() => {
    if (isDragging || isResetting || totalImages <= 1) {
      return;
    }

    const timer = setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3500);

    return () => clearTimeout(timer);
  }, [
    currentIndex,
    isDragging,
    isResetting,
    totalImages,
  ]);

  /* =======================================================
     RESET AFTER CLONED FIRST SET
  ======================================================= */

  useEffect(() => {
    if (currentIndex !== totalImages) {
      return;
    }

    const resetTimer = setTimeout(() => {
      setIsResetting(true);
      setCurrentIndex(0);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsResetting(false);
        });
      });
    }, 700);

    return () => clearTimeout(resetTimer);
  }, [currentIndex, totalImages]);

  /* =======================================================
     EMPTY STATE
  ======================================================= */

  if (totalImages === 0) {
    return null;
  }

  /* =======================================================
     NEXT
  ======================================================= */

  const goNext = () => {
    if (totalImages <= 1) return;

    setCurrentIndex((prev) => {
      if (prev >= totalImages) {
        return 0;
      }

      return prev + 1;
    });
  };

  /* =======================================================
     PREVIOUS
  ======================================================= */

  const goPrevious = () => {
    if (totalImages <= 1) return;

    setCurrentIndex((prev) => {
      if (prev === 0) {
        return totalImages - 1;
      }

      if (prev > totalImages) {
        return totalImages - 1;
      }

      return prev - 1;
    });
  };

  /* =======================================================
     ACTIVE DOT
  ======================================================= */

  const activeIndex =
    currentIndex >= totalImages
      ? currentIndex - totalImages
      : currentIndex;

  return (
    <div className="relative mt-8 w-full overflow-hidden sm:mt-10 lg:mt-12">
      {/* TOP LINE */}

      <div className="mb-4 flex items-center justify-between px-1">
        <span className="text-[9px] font-semibold tracking-[0.25em] text-white/40">
          SELECTED WORK
        </span>

        <span className="text-[9px] font-medium tracking-[0.2em] text-cyan-200/45">
          06 — DIGITAL EXPERIENCES
        </span>
      </div>

      {/* SLIDER */}

      <div className="relative overflow-hidden">
        <motion.div
          className="
            flex
            cursor-grab
            gap-3
            active:cursor-grabbing
            sm:gap-4
          "
          animate={{
            x: `calc(-${currentIndex} * (min(72vw, 310px) + 12px))`,
          }}
          transition={{
            duration: isResetting ? 0 : 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          drag="x"
          dragConstraints={{
            left: 0,
            right: 0,
          }}
          dragElastic={0.08}
          onDragStart={() => {
            setIsDragging(true);
          }}
          onDragEnd={(_, info) => {
            setIsDragging(false);

            const threshold = 45;

            if (info.offset.x < -threshold) {
              goNext();
            } else if (info.offset.x > threshold) {
              goPrevious();
            }
          }}
        >
          {infiniteImages.map((image, index) => {
            const originalIndex = index % totalImages;

            return (
              <motion.div
                key={`${image.key}-${index}`}
                className="
                  relative
                  h-[170px]
                  w-[72vw]
                  max-w-[310px]
                  shrink-0
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-blue-300/[0.14]
                  bg-blue-950/[0.15]
                  shadow-[0_20px_60px_rgba(0,0,0,0.30)]
                  sm:h-[190px]
                  sm:w-[48vw]
                  sm:max-w-[330px]
                  lg:h-[205px]
                "
                whileHover={{
                  y: -4,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                <img
                  src={image.src}
                  alt={image.label}
                  draggable="false"
                  loading={index > 2 ? "lazy" : "eager"}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    select-none
                    object-cover
                    object-center
                    opacity-[0.92]
                    saturate-[1.05]
                    contrast-[1.04]
                    transition-all
                    duration-700
                    hover:scale-105
                  "
                />

                <div className="absolute inset-0 bg-[#07152f]/[0.18]" />

                <div
                  className="
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.12),transparent_45%)]
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_20%_80%,rgba(34,211,238,0.06),transparent_40%)]
                  "
                />

                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    h-28
                    bg-gradient-to-t
                    from-[#07152f]/90
                    via-[#07152f]/35
                    to-transparent
                  "
                />

                <div
                  className="
                    absolute
                    inset-x-4
                    bottom-4
                    flex
                    items-end
                    justify-between
                  "
                >
                  <div>
                    <span
                      className="
                        text-[8px]
                        font-semibold
                        tracking-[0.25em]
                        text-cyan-200/80
                      "
                    >
                      0{originalIndex + 1}
                    </span>

                    <p
                      className="
                        mt-1
                        text-xs
                        font-semibold
                        tracking-[0.08em]
                        text-white
                      "
                    >
                      {image.label}
                    </p>
                  </div>

                  <span
                    className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/20
                      bg-[#07152f]/35
                      text-white/80
                      backdrop-blur-md
                    "
                  >
                    <ArrowUpRight size={12} />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* CONTROLS */}

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => {
                setCurrentIndex(index);
              }}
              className={`
                h-[2px]
                rounded-full
                transition-all
                duration-500
                ${
                  activeIndex === index
                    ? "w-7 bg-cyan-300"
                    : "w-2 bg-white/25 hover:bg-white/45"
                }
              `}
            />
          ))}
        </div>

        <span
          className="
            text-[8px]
            font-medium
            tracking-[0.2em]
            text-white/30
          "
        >
          DRAG TO EXPLORE
        </span>
      </div>
    </div>
  );
}

/* =========================================================
   HOME
========================================================= */

function Home() {
  const [websiteImages, setWebsiteImages] = useState([]);

  const [homeContent, setHomeContent] = useState(
    defaultHomeContent
  );

  /* =======================================================
     FETCH ADMIN MANAGED HOME CONTENT
     GET /api/content/home
  ======================================================= */

  useEffect(() => {
    const fetchHomeContent = async () => {
      try {
        const response = await api.get("/content/home");

        const data = response.data?.data;

        if (!data) {
          return;
        }

        /*
          Deep merge ensures that if admin has only changed
          one field, the remaining default content remains.
        */

        setHomeContent({
          ...defaultHomeContent,

          hero: {
            ...defaultHomeContent.hero,
            ...(data.hero || {}),

            primaryButton: {
              ...defaultHomeContent.hero.primaryButton,
              ...(data.hero?.primaryButton || {}),
            },

            secondaryButton: {
              ...defaultHomeContent.hero.secondaryButton,
              ...(data.hero?.secondaryButton || {}),
            },

            tags:
              Array.isArray(data.hero?.tags) &&
              data.hero.tags.length > 0
                ? data.hero.tags
                : defaultHomeContent.hero.tags,
          },

          services: {
            ...defaultHomeContent.services,
            ...(data.services || {}),

            cards:
              Array.isArray(data.services?.cards) &&
              data.services.cards.length > 0
                ? data.services.cards
                : defaultHomeContent.services.cards,
          },

          whyYovi: {
            ...defaultHomeContent.whyYovi,
            ...(data.whyYovi || {}),

            approach:
              Array.isArray(data.whyYovi?.approach) &&
              data.whyYovi.approach.length > 0
                ? data.whyYovi.approach
                : defaultHomeContent.whyYovi.approach,
          },

          cta: {
            ...defaultHomeContent.cta,
            ...(data.cta || {}),
          },
        });
      } catch (error) {
        console.error(
          "Home Content API Error ❌",
          error.response?.data || error.message
        );

        /*
          Keep existing default content if API fails.
        */
        setHomeContent(defaultHomeContent);
      }
    };

    fetchHomeContent();
  }, []);

  /* =======================================================
     FETCH ADMIN MANAGED IMAGES
     GET /api/images
  ======================================================= */

  useEffect(() => {
    const fetchWebsiteImages = async () => {
      try {
        const response = await api.get("/images");

        const imageData = response.data?.data || [];

        setWebsiteImages(imageData);
      } catch (error) {
        console.error(
          "Home Images API Error ❌",
          error.response?.data || error.message
        );

        setWebsiteImages([]);
      }
    };

    fetchWebsiteImages();
  }, []);

  /* =======================================================
     GET IMAGE BY KEY
  ======================================================= */

  const getImageByKey = (key) => {
    const adminImage = websiteImages.find(
      (image) => image.key === key
    );

    if (adminImage?.url) {
      return adminImage.url;
    }

    return fallbackImages[key] || "";
  };

  /* =======================================================
     HERO IMAGES
  ======================================================= */

  const dynamicHeroImages = heroImageConfig.map((item) => ({
    key: item.key,
    src: getImageByKey(item.key),
    label: item.label,
  }));

  /* =======================================================
     WHY YOVI IMAGE
  ======================================================= */

  const whyYoviImage = getImageByKey("why-yovi");

  /* =======================================================
     SERVICES
  ======================================================= */

  const serviceCards = homeContent.services.cards || [];

  return (
    <main
      className="
        relative
        overflow-hidden
        bg-[#07152f]
        font-sans
        antialiased
        text-white
      "
    >
      {/* =====================================================
          GLOBAL AMBIENT BLUE BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-[-180px]
            top-[500px]
            h-[600px]
            w-[600px]
            rounded-full
            bg-blue-500/[0.09]
            blur-[160px]
          "
        />

        <div
          className="
            absolute
            right-[-220px]
            top-[1300px]
            h-[600px]
            w-[600px]
            rounded-full
            bg-cyan-500/[0.065]
            blur-[160px]
          "
        />

        <div
          className="
            absolute
            bottom-[-250px]
            left-1/2
            h-[550px]
            w-[550px]
            -translate-x-1/2
            rounded-full
            bg-indigo-500/[0.06]
            blur-[160px]
          "
        />
      </div>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-0 lg:min-h-screen">
        <div className="hidden lg:block">
          <AnimatedBackground />
        </div>

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[15%]
            h-[450px]
            w-[450px]
            -translate-x-1/2
            rounded-full
            bg-blue-500/[0.09]
            blur-[150px]
            sm:h-[550px]
            sm:w-[550px]
            lg:h-[600px]
            lg:w-[600px]
            lg:blur-[170px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-[5%]
            top-[25%]
            hidden
            h-[300px]
            w-[300px]
            rounded-full
            bg-cyan-500/[0.065]
            blur-[120px]
            lg:block
          "
        />

        <div
          className="
            relative
            mx-auto
            flex
            max-w-7xl
            items-center
            px-6
            pb-10
            pt-36
            sm:px-8
            sm:pb-14
            sm:pt-40
            lg:min-h-screen
            lg:px-12
            lg:pb-20
            lg:pt-32
          "
        >
          <div
            className="
              grid
              w-full
              items-center
              gap-8
              lg:grid-cols-[1.15fr_0.85fr]
              lg:gap-16
            "
          >
            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <div>
              {/* EYEBROW */}

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
                  duration: 0.7,
                }}
                className="mb-6 flex items-center gap-3 sm:mb-7"
              >
                <span
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-blue-300/30
                    bg-gradient-to-br
                    from-blue-500/25
                    to-cyan-500/15
                    shadow-[0_0_35px_rgba(59,130,246,0.20)]
                  "
                >
                  <Sparkles
                    size={13}
                    className="text-cyan-200"
                  />
                </span>

                <span
                  className="
                    text-[9px]
                    font-semibold
                    tracking-[0.18em]
                    text-cyan-100/80
                    sm:text-[11px]
                    sm:tracking-[0.22em]
                  "
                >
                  {homeContent.hero.badge}
                </span>
              </motion.div>

              {/* HEADING */}

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.1,
                }}
                className="
                  max-w-4xl
                  text-5xl
                  font-semibold
                  leading-[0.96]
                  tracking-[-0.055em]
                  sm:text-6xl
                  md:text-7xl
                  lg:text-[76px]
                  xl:text-[88px]
                "
              >
                {homeContent.hero.headingLine1}

                <span
                  className="
                    block
                    bg-gradient-to-r
                    from-white
                    via-white/85
                    to-blue-100/55
                    bg-clip-text
                    text-transparent
                  "
                >
                  {homeContent.hero.headingLine2}
                </span>

                <span
                  className="
                    block
                    bg-gradient-to-r
                    from-blue-100
                    via-blue-400
                    to-cyan-300
                    bg-clip-text
                    text-transparent
                  "
                >
                  {homeContent.hero.headingLine3}
                </span>
              </motion.h1>

              {/* DESCRIPTION */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
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
                  mt-6
                  max-w-xl
                  text-base
                  font-normal
                  leading-7
                  text-white/60
                  sm:mt-8
                  sm:text-lg
                  sm:leading-8
                "
              >
                {homeContent.hero.description}
              </motion.p>

              {/* CTA */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                }}
                className="
                  mt-7
                  flex
                  flex-wrap
                  items-center
                  gap-3
                  sm:mt-9
                "
              >
                {/* PRIMARY */}

                <a
                  href={homeContent.hero.primaryButton.link}
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    rounded-full
                    bg-gradient-to-r
                    from-blue-600
                    via-blue-500
                    to-cyan-500
                    px-5
                    py-3.5
                    text-sm
                    font-semibold
                    text-white
                    shadow-[0_12px_45px_rgba(37,99,235,0.28)]
                    transition-all
                    duration-300
                    hover:scale-[1.03]
                    hover:shadow-[0_18px_60px_rgba(37,99,235,0.38)]
                    sm:px-6
                  "
                >
                  {homeContent.hero.primaryButton.text}

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

                {/* SECONDARY */}

                <a
                  href={homeContent.hero.secondaryButton.link}
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-blue-200/[0.16]
                    bg-blue-400/[0.06]
                    px-5
                    py-3.5
                    text-sm
                    font-medium
                    text-white/75
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-cyan-300/30
                    hover:bg-blue-400/[0.11]
                    hover:text-white
                    sm:px-6
                  "
                >
                  {homeContent.hero.secondaryButton.text}
                </a>
              </motion.div>

              {/* TAGS */}

              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 0.7,
                }}
                className="
                  mt-7
                  flex
                  flex-wrap
                  items-center
                  gap-x-5
                  gap-y-2
                  text-[10px]
                  font-semibold
                  tracking-[0.18em]
                  text-white/40
                  sm:mt-10
                  sm:gap-x-6
                  sm:gap-y-3
                  sm:tracking-[0.2em]
                  lg:mt-14
                "
              >
                {homeContent.hero.tags.map((tag, index) => (
                  <span key={`${tag}-${index}`}>
                    {tag}
                  </span>
                ))}
              </motion.div>

              {/* HERO SLIDER */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.85,
                }}
              >
                <HeroImageSlider
                  images={dynamicHeroImages}
                />
              </motion.div>
            </div>

            {/* =================================================
                RIGHT HERO VISUAL
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
              <div
                className="
                  absolute
                  inset-8
                  overflow-hidden
                  rounded-[42px]
                  border
                  border-blue-300/[0.14]
                  bg-[#07152f]
                  shadow-[0_30px_100px_rgba(0,0,0,0.35)]
                "
              >
                <img
                  src={getImageByKey("hero-digital")}
                  alt="Digital technology and engineering"
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    object-center
                    scale-[1.04]
                    opacity-[0.62]
                    saturate-[1.08]
                    contrast-[1.05]
                  "
                />

                <div className="absolute inset-0 bg-[#07152f]/[0.42]" />

                <div
                  className="
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.22),transparent_48%)]
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_center,transparent_25%,rgba(4,12,24,0.62)_90%)]
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    opacity-20
                    [background-image:linear-gradient(rgba(96,165,250,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.10)_1px,transparent_1px)]
                    [background-size:45px_45px]
                  "
                />
              </div>

              {/* CORE GLOW */}

              <div
                className="
                  absolute
                  h-[370px]
                  w-[370px]
                  rounded-full
                  bg-blue-500/[0.08]
                  blur-[120px]
                "
              />

              <div
                className="
                  absolute
                  h-[220px]
                  w-[220px]
                  rounded-full
                  bg-cyan-500/[0.075]
                  blur-[80px]
                "
              />

              {/* OUTER RING */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
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
                  border-blue-300/[0.14]
                  shadow-[0_0_80px_rgba(59,130,246,0.07)]
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
                    bg-blue-300
                    shadow-[0_0_25px_rgba(147,197,253,0.95)]
                  "
                />
              </motion.div>

              {/* INNER RING */}

              <motion.div
                animate={{
                  rotate: -360,
                }}
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
                  border-cyan-300/[0.15]
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
                    bg-cyan-300
                    shadow-[0_0_20px_rgba(103,232,249,0.9)]
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
                  z-10
                  flex
                  h-40
                  w-40
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-blue-200/[0.22]
                  bg-gradient-to-br
                  from-white/[0.10]
                  via-blue-500/[0.09]
                  to-cyan-500/[0.08]
                  shadow-[0_0_100px_rgba(59,130,246,0.20)]
                  backdrop-blur-xl
                "
              >
                <div
                  className="
                    absolute
                    inset-5
                    rounded-full
                    border
                    border-white/[0.10]
                  "
                />

                <div className="text-center">
                  <span
                    className="
                      block
                      bg-gradient-to-b
                      from-white
                      via-blue-200
                      to-cyan-400
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
                      font-semibold
                      tracking-[0.3em]
                      text-white/50
                    "
                  >
                    YOVI
                  </span>
                </div>
              </motion.div>

              {/* BUILD */}

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  left-2
                  top-28
                  z-20
                  rounded-2xl
                  border
                  border-blue-300/[0.16]
                  bg-blue-400/[0.07]
                  px-4
                  py-3
                  shadow-[0_10px_45px_rgba(59,130,246,0.12)]
                  backdrop-blur-xl
                "
              >
                <span
                  className="
                    text-[9px]
                    font-semibold
                    tracking-[0.2em]
                    text-blue-100/80
                  "
                >
                  BUILD
                </span>
              </motion.div>

              {/* SCALE */}

              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  bottom-24
                  right-4
                  z-20
                  rounded-2xl
                  border
                  border-cyan-300/[0.16]
                  bg-cyan-400/[0.07]
                  px-4
                  py-3
                  shadow-[0_10px_45px_rgba(34,211,238,0.12)]
                  backdrop-blur-xl
                "
              >
                <span
                  className="
                    text-[9px]
                    font-semibold
                    tracking-[0.2em]
                    text-cyan-100/80
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
          animate={{
            y: [0, 7, 0],
          }}
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
            text-blue-200/45
            md:flex
          "
        >
          <span className="text-[9px] font-medium tracking-[0.25em]">
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
          border-blue-200/[0.08]
          bg-[#07152f]
          px-6
          py-20
          sm:px-8
          sm:py-24
          lg:px-12
          lg:py-28
        "
      >
        <div className="mx-auto max-w-7xl">
          {/* SECTION HEADING */}

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
              mb-10
              flex
              flex-col
              justify-between
              gap-6
              md:mb-14
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
                  text-blue-300
                "
              >
                {homeContent.services.eyebrow}
              </span>

              <h2
                className="
                  mt-5
                  max-w-3xl
                  text-4xl
                  font-semibold
                  leading-[1.02]
                  tracking-[-0.05em]
                  sm:text-5xl
                  md:text-6xl
                "
              >
                {homeContent.services.heading}

                {homeContent.services.highlightedHeading && (
                  <span
                    className="
                      bg-gradient-to-r
                      from-blue-300
                      via-white/70
                      to-cyan-300
                      bg-clip-text
                      text-transparent
                    "
                  >
                    {" "}
                    {homeContent.services.highlightedHeading}
                  </span>
                )}
              </h2>
            </div>

            <a
              href={homeContent.services.viewAllLink}
              className="
                group
                flex
                w-fit
                items-center
                gap-3
                text-sm
                font-medium
                text-white/55
                transition-colors
                hover:text-cyan-200
              "
            >
              {homeContent.services.viewAllText}

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
            {serviceCards
              .slice(0, 5)
              .map((service, index) => {
                const Icon =
                  serviceIcons[index] || Globe2;

                const style =
                  serviceStyles[index] ||
                  serviceStyles[0];

                return (
                  <SpotlightCard
                    key={`${service.number}-${service.title}-${index}`}
                    number={service.number}
                    title={service.title}
                    description={service.description}
                    technologies={
                      service.technologies || []
                    }
                    icon={Icon}
                    accent={style.accent}
                    image={getImageByKey(
                      style.imageKey
                    )}
                    className={style.className}
                  />
                );
              })}
          </div>

          {/* BRAND LINE */}

          <div
            className="
              mt-10
              flex
              flex-col
              gap-3
              border-t
              border-blue-200/[0.08]
              pt-6
              sm:mt-12
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:pt-7
            "
          >
            <span
              className="
                text-[10px]
                font-semibold
                tracking-[0.25em]
                text-blue-200/40
              "
            >
              TECHNOLOGY • DESIGN • AI
            </span>

            <span className="text-xs text-white/35">
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
          border-blue-200/[0.08]
          bg-[#07152f]
          px-6
          py-24
          sm:px-8
          sm:py-28
          lg:px-12
          lg:py-32
        "
      >
        {/* AMBIENT GLOW */}

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
            bg-blue-500/[0.075]
            blur-[160px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            bottom-[-100px]
            left-[-180px]
            h-[350px]
            w-[350px]
            rounded-full
            bg-cyan-500/[0.05]
            blur-[120px]
          "
        />

        <div
          className="
            mx-auto
            grid
            max-w-7xl
            gap-10
            lg:grid-cols-2
            lg:items-center
            lg:gap-14
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
                text-blue-300
              "
            >
              {homeContent.whyYovi.eyebrow}
            </span>

            <h2
              className="
                mt-5
                max-w-2xl
                text-4xl
                font-semibold
                leading-[1.02]
                tracking-[-0.05em]
                sm:text-5xl
                md:text-6xl
              "
            >
              {homeContent.whyYovi.heading}

              {homeContent.whyYovi.highlightedHeading && (
                <span
                  className="
                    block
                    bg-gradient-to-r
                    from-blue-200
                    via-white/65
                    to-cyan-300
                    bg-clip-text
                    text-transparent
                  "
                >
                  {homeContent.whyYovi.highlightedHeading}
                </span>
              )}
            </h2>

            <p
              className="
                mt-6
                max-w-xl
                text-base
                font-normal
                leading-7
                text-white/55
                sm:mt-7
              "
            >
              {homeContent.whyYovi.description}
            </p>

            <a
              href={homeContent.whyYovi.buttonLink}
              className="
                group
                mt-8
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-blue-300/[0.18]
                bg-blue-400/[0.05]
                px-5
                py-3
                text-sm
                font-medium
                text-white/75
                transition-all
                duration-300
                hover:border-cyan-300/30
                hover:bg-blue-400/[0.09]
                hover:text-white
                hover:shadow-[0_10px_40px_rgba(59,130,246,0.14)]
              "
            >
              {homeContent.whyYovi.buttonText}

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

          {/* WHY YOVI VISUAL */}

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
                min-h-[520px]
                overflow-hidden
                rounded-[32px]
                border
                border-blue-300/[0.14]
                bg-[#07152f]
                p-7
                shadow-[0_30px_120px_rgba(0,0,0,0.3)]
                sm:p-10
              "
            >
              {/* IMAGE */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  overflow-hidden
                "
              >
                <img
                  src={whyYoviImage}
                  alt="YoVi Technologies"
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    object-center
                    scale-[1.02]
                    opacity-[0.52]
                    saturate-[1.05]
                    contrast-[1.04]
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-[#07152f]/[0.48]
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.18),transparent_38%)]
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_20%_80%,rgba(34,211,238,0.08),transparent_35%)]
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_center,transparent_25%,rgba(4,12,24,0.58)_100%)]
                  "
                />
              </div>

              {/* GRID */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-[0.06]
                  [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
                  [background-size:40px_40px]
                "
              />

              {/* DECORATIVE GLOW */}

              <div
                className="
                  pointer-events-none
                  absolute
                  right-[-80px]
                  top-[-80px]
                  h-60
                  w-60
                  rounded-full
                  bg-blue-500/[0.11]
                  blur-[90px]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-[-100px]
                  left-[-80px]
                  h-52
                  w-52
                  rounded-full
                  bg-cyan-500/[0.07]
                  blur-[80px]
                "
              />

              {/* CONTENT */}

              <div className="relative z-10">
                <span
                  className="
                    text-[10px]
                    font-semibold
                    tracking-[0.25em]
                    text-blue-100/70
                  "
                >
                  THE YOVI APPROACH
                </span>

                <div className="mt-10 space-y-5 sm:mt-12 sm:space-y-6">
                  {homeContent.whyYovi.approach
                    .slice(0, 4)
                    .map((item, index) => {
                      const isFirst = index === 0;
                      const isThird = index === 2;

                      return (
                        <div key={`${item.number}-${index}`}>
                          <div className="flex items-center gap-4">
                            <span
                              className={`
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-xl
                                border
                                text-sm
                                font-medium
                                ${
                                  isFirst
                                    ? "border-blue-300/25 bg-blue-400/[0.10] text-blue-100 shadow-[0_0_25px_rgba(59,130,246,0.14)]"
                                    : isThird
                                      ? "border-cyan-300/20 bg-cyan-400/[0.06] text-cyan-100/80"
                                      : "border-white/10 bg-white/[0.04] text-white/70"
                                }
                              `}
                            >
                              {item.number}
                            </span>

                            <div>
                              <p className="text-sm font-semibold text-white">
                                {item.title}
                              </p>

                              <p
                                className={`
                                  mt-1 text-xs
                                  ${
                                    isFirst
                                      ? "text-blue-100/50"
                                      : "text-white/40"
                                  }
                                `}
                              >
                                {item.subtitle}
                              </p>
                            </div>
                          </div>

                          {index <
                            Math.min(
                              homeContent.whyYovi.approach
                                .length,
                              4
                            ) -
                              1 && (
                            <div
                              className={`
                                ml-5
                                h-8
                                w-px
                                ${
                                  isFirst
                                    ? "bg-gradient-to-b from-blue-400/35 to-cyan-400/10"
                                    : isThird
                                      ? "bg-gradient-to-b from-cyan-300/20 to-white/5"
                                      : "bg-white/10"
                                }
                              `}
                            />
                          )}
                        </div>
                      );
                    })}
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
          border-blue-200/[0.08]
          bg-[#07152f]
          px-6
          py-24
          sm:px-8
          sm:py-28
          lg:px-12
          lg:py-32
        "
      >
        {/* CTA GLOW */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[450px]
            w-[450px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-500/[0.075]
            blur-[140px]
            sm:h-[550px]
            sm:w-[550px]
            sm:blur-[160px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[220px]
            w-[220px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-500/[0.06]
            blur-[90px]
            sm:h-[280px]
            sm:w-[280px]
            sm:blur-[100px]
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
              text-blue-300
            "
          >
            {homeContent.cta.eyebrow}
          </span>

          <h2
            className="
              mt-6
              text-4xl
              font-semibold
              leading-[1.02]
              tracking-[-0.05em]
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            {homeContent.cta.heading}

            {homeContent.cta.highlightedHeading && (
              <span
                className="
                  block
                  bg-gradient-to-r
                  from-blue-200
                  via-white/70
                  to-cyan-300
                  bg-clip-text
                  text-transparent
                "
              >
                {homeContent.cta.highlightedHeading}
              </span>
            )}
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-xl
              text-sm
              font-normal
              leading-6
              text-white/50
              sm:mt-6
            "
          >
            {homeContent.cta.description}
          </p>

          <a
            href={homeContent.cta.buttonLink}
            className="
              group
              mt-8
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-gradient-to-r
              from-blue-600
              via-blue-500
              to-cyan-500
              px-7
              py-4
              text-sm
              font-semibold
              text-white
              shadow-[0_15px_60px_rgba(37,99,235,0.25)]
              transition-all
              duration-300
              hover:scale-[1.04]
              hover:shadow-[0_20px_80px_rgba(37,99,235,0.38)]
            "
          >
            {homeContent.cta.buttonText}

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

export default Home;
import { useEffect, useState } from "react";
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

import api from "../services/api";

// =========================================
// FALLBACK IMAGES
// =========================================

const fallbackImages = {
  "services-hero":
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=90",

  "services-web":
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=90",

  "services-mobile":
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1400&q=90",

  "services-ai":
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=90",

  "services-erp":
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=90",

  "services-growth":
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=90",

  "services-branding":
    "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1400&q=90",

  "services-cta":
    "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1800&q=90",
};

// =========================================
// ORIGINAL SERVICES DATA
// DO NOT DELETE
// =========================================

const defaultServices = [
  {
    number: "01",
    icon: Globe2,
    title: "Web Development",
    description:
      "Modern, high-performance websites and web applications designed around your business goals.",
    imageKey: "services-web",
    items: [
      "Business Websites",
      "Corporate Websites",
      "Dynamic Websites",
      "E-commerce Websites",
      "Landing Pages",
      "Custom Web Applications",
      "Website Redesign & Maintenance",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
    ],
    accent: "blue",
  },

  {
    number: "02",
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Scalable mobile experiences that help businesses connect with customers wherever they are.",
    imageKey: "services-mobile",
    items: [
      "Android Applications",
      "iOS Applications",
      "Cross-Platform Applications",
      "Custom Business Applications",
    ],
    technologies: [
      "Android",
      "iOS",
      "Cross-Platform",
    ],
    accent: "cyan",
  },

  {
    number: "03",
    icon: BrainCircuit,
    title: "AI Solutions",
    description:
      "Intelligent systems that automate repetitive work, improve customer experiences and unlock new possibilities.",
    imageKey: "services-ai",
    items: [
      "AI Chatbots",
      "AI-Powered Business Solutions",
      "Workflow Automation",
      "AI Integrations",
      "Intelligent Customer Support",
    ],
    technologies: [
      "AI APIs",
      "Automation",
      "LLM",
    ],
    accent: "indigo",
  },

  {
    number: "04",
    icon: Boxes,
    title: "ERP & CRM Development",
    description:
      "Connected business platforms that bring operations, customers and workflows together.",
    imageKey: "services-erp",
    items: [
      "Custom ERP Systems",
      "CRM Development",
      "Business Management Systems",
      "Inventory Management",
      "Lead Management",
      "Workflow Management",
    ],
    technologies: [
      "Node.js",
      "MongoDB",
      "MySQL",
      "REST APIs",
    ],
    accent: "blue",
  },

  {
    number: "05",
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Data-driven digital growth strategies designed to increase visibility, generate leads and reach the right audience.",
    imageKey: "services-growth",
    items: [
      "Search Engine Optimization",
      "Google Ads",
      "Meta Ads",
      "Social Media Marketing",
      "Lead Generation",
      "Content Marketing",
    ],
    technologies: [
      "SEO",
      "Google Ads",
      "Meta Ads",
      "Analytics",
    ],
    accent: "cyan",
  },

  {
    number: "06",
    icon: Palette,
    title: "UI/UX & Branding",
    description:
      "Thoughtful visual experiences and brand systems that make businesses memorable.",
    imageKey: "services-branding",
    items: [
      "UI/UX Design",
      "Website Design",
      "Logo Design",
      "Brand Identity",
      "Social Media Creatives",
    ],
    technologies: [
      "UI/UX",
      "Figma",
      "Branding",
    ],
    accent: "indigo",
  },
];

// =========================================
// ACCENT STYLES
// =========================================

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

// =========================================
// SERVICES COMPONENT
// =========================================

function Services() {
  // =========================================
  // STATES
  // =========================================

  const [websiteImages, setWebsiteImages] = useState([]);

  const [content, setContent] = useState(null);

  // =========================================
  // FETCH WEBSITE IMAGES
  // =========================================

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await api.get("/images");

        setWebsiteImages(
          response.data?.data || []
        );
      } catch (error) {
        console.error(
          "Services Images Error:",
          error
        );
      }
    };

    fetchImages();
  }, []);

  // =========================================
  // FETCH SERVICES CONTENT
  // =========================================

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await api.get(
          "/content/services"
        );

        setContent(
          response.data?.data || null
        );
      } catch (error) {
        console.error(
          "Services Content Error:",
          error
        );

        // Keep original content if API fails
        setContent(null);
      }
    };

    fetchContent();
  }, []);

  // =========================================
  // GET IMAGE BY KEY
  // =========================================

  const getImageByKey = (key) => {
    const image = websiteImages.find(
      (item) => item.key === key
    );

    return (
      image?.url ||
      fallbackImages[key]
    );
  };

  // =========================================
  // MERGE ADMIN CONTENT WITH ORIGINAL DATA
  // =========================================
  //
  // Original data is ALWAYS preserved.
  //
  // Admin content overrides only when available.
  //
  // =========================================

  const adminCards =
    content?.services?.cards || [];

  const services = defaultServices.map(
    (defaultService, index) => {
      const adminService =
        adminCards[index];

      // No admin data for this service
      if (!adminService) {
        return defaultService;
      }

      return {
        ...defaultService,

        number:
          adminService.number ||
          defaultService.number,

        title:
          adminService.title ||
          defaultService.title,

        description:
          adminService.description ||
          defaultService.description,

        imageKey:
          adminService.imageKey ||
          defaultService.imageKey,

        items:
          Array.isArray(
            adminService.items
          ) &&
          adminService.items.length > 0
            ? adminService.items
            : defaultService.items,

        technologies:
          Array.isArray(
            adminService.technologies
          ) &&
          adminService.technologies.length > 0
            ? adminService.technologies
            : defaultService.technologies,
      };
    }
  );

  // =========================================
  // HERO FALLBACK DATA
  // =========================================

  const heroBadge =
    content?.hero?.badge ||
    "OUR SERVICES";

  const heroHeadingLine1 =
    content?.hero?.headingLine1 ||
    "Everything you need";

  const heroHeadingLine2 =
    content?.hero?.headingLine2 ||
    "to build what matters.";

  const heroDescription =
    content?.hero?.description ||
    "From digital products and AI-powered solutions to business systems and digital growth, YoVi brings technology, design and strategy together.";

  const heroTags =
    Array.isArray(
      content?.hero?.tags
    ) &&
    content.hero.tags.length > 0
      ? content.hero.tags
      : [
          "WEB",
          "MOBILE",
          "AI",
          "ERP",
          "CRM",
          "GROWTH",
        ];

  // =========================================
  // CTA FALLBACK DATA
  // =========================================

  const ctaEyebrow =
    content?.cta?.eyebrow ||
    "READY TO BUILD?";

  const ctaHeading =
    content?.cta?.heading ||
    "Let's create something";

  const ctaHighlightedHeading =
    content?.cta?.highlightedHeading ||
    "worth building.";

  const ctaDescription =
    content?.cta?.description ||
    "Have a project, idea or business challenge? Let's talk about how technology can move it forward.";

  const ctaButtonText =
    content?.cta?.buttonText ||
    "Start a Project";

  const ctaButtonLink =
    content?.cta?.buttonLink ||
    "/contact";

  // =========================================
  // RETURN
  // =========================================

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07152f] text-white">

      {/* =========================================
          GLOBAL BLUE AMBIENT BACKGROUND
      ========================================= */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

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

        <div
          className="
            absolute
            inset-0
            opacity-[0.04]
            [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_5%,#07152f_88%)]
          "
        />

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

      {/* =========================================
          HERO
      ========================================= */}

      <section className="relative overflow-hidden px-6 pb-28 pt-40 sm:px-8 lg:px-12">

        <div className="pointer-events-none absolute inset-x-0 top-0 h-[650px] overflow-hidden">

          <img
            src={getImageByKey(
              "services-hero"
            )}
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

            {/* HERO BADGE */}

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
                {heroBadge}
              </span>

            </div>

            {/* HERO HEADING */}

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
              {heroHeadingLine1}

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
                {heroHeadingLine2}
              </span>

              {content?.hero?.headingLine3 && (
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
                  {content.hero.headingLine3}
                </span>
              )}

            </h1>

            {/* HERO DESCRIPTION */}

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
              {heroDescription}
            </p>

          </motion.div>

          {/* HERO TAGS */}

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

            {heroTags.map(
              (item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="
                    transition-all
                    duration-300
                    hover:text-cyan-200
                    hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.35)]
                  "
                >
                  {item}
                </span>
              )
            )}

          </motion.div>

        </div>
      </section>

      {/* =========================================
          SERVICES
      ========================================= */}

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

            {services.map(
              (service, index) => {

                const Icon =
                  service.icon;

                const accent =
                  accentStyles[
                    service.accent
                  ] ||
                  accentStyles.blue;

                return (
                  <motion.article
                    key={`${service.number}-${index}`}
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
                      delay:
                        index * 0.04,
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

                    {/* CARD GLOW */}

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
                        bg-cyan-500/[0.025]
                        blur-[100px]
                        transition-all
                        duration-700
                        group-hover:bg-cyan-500/[0.06]
                      "
                    />

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

                      {/* =====================================
                          IMAGE
                      ===================================== */}

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
                          src={getImageByKey(
                            service.imageKey
                          )}
                          alt={
                            service.title
                          }
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

                      {/* =====================================
                          MAIN CONTENT
                      ===================================== */}

                      <div>

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

                        {/* TECHNOLOGIES */}

                        <div className="mt-7 flex flex-wrap gap-2">

                          {(
                            Array.isArray(
                              service.technologies
                            )
                              ? service.technologies
                              : []
                          ).map(
                            (
                              technology,
                              technologyIndex
                            ) => (
                              <span
                                key={`${technology}-${technologyIndex}`}
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
                            )
                          )}

                        </div>

                      </div>

                      {/* =====================================
                          FEATURES
                      ===================================== */}

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

                          {(
                            Array.isArray(
                              service.items
                            )
                              ? service.items
                              : []
                          ).map(
                            (
                              item,
                              itemIndex
                            ) => (
                              <div
                                key={`${item}-${itemIndex}`}
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
                                  <Check
                                    size={11}
                                  />
                                </span>

                                {item}

                              </div>
                            )
                          )}

                        </div>

                      </div>

                    </div>

                    {/* =====================================
                        ARROW
                    ===================================== */}

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
              }
            )}

          </div>
        </div>
      </section>

      {/* =========================================
          CTA
      ========================================= */}

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

        {/* CTA IMAGE */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            overflow-hidden
          "
        >

          <img
            src={getImageByKey(
              "services-cta"
            )}
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

        {/* CTA BLUE GLOW */}

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

        {/* CTA CONTENT */}

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

          {/* CTA EYEBROW */}

          <span
            className="
              text-[10px]
              font-semibold
              tracking-[0.28em]
              text-cyan-200/90
            "
          >
            {ctaEyebrow}
          </span>

          {/* CTA HEADING */}

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
            {ctaHeading}

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
              {ctaHighlightedHeading}
            </span>
          </h2>

          {/* CTA DESCRIPTION */}

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
            {ctaDescription}
          </p>

          {/* CTA BUTTON */}

          <a
            href={ctaButtonLink}
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
            {ctaButtonText}

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
              <ArrowUpRight
                size={13}
              />
            </span>

          </a>

        </motion.div>

      </section>

    </main>
  );
}

export default Services;
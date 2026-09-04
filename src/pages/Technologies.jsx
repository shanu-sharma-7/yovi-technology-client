import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Sparkles,
  Code2,
  Cloud,
  BrainCircuit,
  Smartphone,
  Boxes,
  Palette,
  Check,
} from "lucide-react";

import api from "../services/api";

/* =========================================================
   FALLBACK IMAGES
========================================================= */

const fallbackImages = {
  "technologies-hero":
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=95",
  "technologies-web":
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=95",
  "technologies-mobile":
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1600&q=95",
  "technologies-ai":
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=95",
  "technologies-erp":
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=95",
  "technologies-cloud":
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=95",
  "technologies-tools":
    "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1600&q=95",
  "technologies-engineering":
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=95",
  "technologies-custom-cta":
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1800&q=95",
  "technologies-final-cta":
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1800&q=95",
};

/* =========================================================
   DEFAULT TECHNOLOGY GROUPS
========================================================= */

const defaultTechnologyGroups = [
  {
    number: "01",
    title: "Web Technologies",
    description:
      "Modern technologies for building fast, responsive and scalable websites and web applications.",
    imageKey: "technologies-web",
    icon: Code2,
    technologies: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
    ],
    features: [
      "Modern Web Applications",
      "Responsive Interfaces",
      "SEO-Friendly Architecture",
      "High Performance",
    ],
    accent: "blue",
  },
  {
    number: "02",
    title: "Mobile Technologies",
    description:
      "Flexible mobile technologies for creating reliable applications across Android, iOS and multiple platforms.",
    imageKey: "technologies-mobile",
    icon: Smartphone,
    technologies: [
      "Android",
      "iOS",
      "Cross-Platform",
      "REST APIs",
    ],
    features: [
      "Android Applications",
      "iOS Applications",
      "Cross-Platform Development",
      "Business Applications",
    ],
    accent: "cyan",
  },
  {
    number: "03",
    title: "AI & Automation",
    description:
      "AI technologies that help businesses automate workflows, improve customer experiences and build intelligent products.",
    imageKey: "technologies-ai",
    icon: BrainCircuit,
    technologies: [
      "AI APIs",
      "LLM",
      "AI Chatbots",
      "Automation",
    ],
    features: [
      "AI-Powered Solutions",
      "Intelligent Chatbots",
      "Workflow Automation",
      "AI Integrations",
    ],
    accent: "indigo",
  },
  {
    number: "04",
    title: "ERP & CRM Technologies",
    description:
      "Reliable backend and database technologies for building connected business management and customer platforms.",
    imageKey: "technologies-erp",
    icon: Boxes,
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "REST APIs",
    ],
    features: [
      "Custom ERP Systems",
      "CRM Platforms",
      "Inventory Management",
      "Business Automation",
    ],
    accent: "blue",
  },
  {
    number: "05",
    title: "Cloud & Infrastructure",
    description:
      "Cloud-ready technologies and deployment solutions designed for reliable, secure and scalable digital products.",
    imageKey: "technologies-cloud",
    icon: Cloud,
    technologies: [
      "Cloud Services",
      "Firebase",
      "Hosting",
      "Deployment",
      "APIs",
    ],
    features: [
      "Cloud Deployment",
      "Scalable Infrastructure",
      "Application Hosting",
      "Reliable Systems",
    ],
    accent: "cyan",
  },
  {
    number: "06",
    title: "Design & Development Tools",
    description:
      "Modern tools that help us design, develop, manage and continuously improve digital products.",
    imageKey: "technologies-tools",
    icon: Palette,
    technologies: [
      "Git",
      "GitHub",
      "Figma",
      "API Integration",
      "Cloud Tools",
    ],
    features: [
      "Version Control",
      "UI/UX Design",
      "API Integration",
      "Team Collaboration",
    ],
    accent: "indigo",
  },
];

/* =========================================================
   DEFAULT CONTENT
========================================================= */

const defaultContent = {
  hero: {
    eyebrow: "TECHNOLOGY STACK",
    headingLine1: "Technology that",
    headingLine2: "powers your business.",
    description:
      "We use modern technologies, scalable architectures and proven engineering practices to build reliable digital products for growing businesses.",
    categories: [
      "WEB",
      "MOBILE",
      "AI",
      "ERP",
      "CRM",
      "CLOUD",
      "TOOLS",
    ],
  },

  ecosystem: {
    eyebrow: "OUR TECHNOLOGY ECOSYSTEM",
    headingLine1: "The technology behind",
    headingLine2: "better digital products.",
    description:
      "We select the right technologies based on your product, users, business requirements and long-term growth.",
  },

  items: defaultTechnologyGroups,

  engineering: {
    eyebrow: "ENGINEERING APPROACH",
    headingLine1: "Technology is only",
    headingLine2: "part of the solution.",
    description:
      "The right technology matters, but so do architecture, security, performance and the ability to evolve with your business.",
    visualEyebrow: "ENGINEERED WITH INTENTION",
    visualText:
      "Clean architecture. Reliable systems. Better digital experiences.",
    cards: [
      {
        title: "Scalable Architecture",
        description:
          "We choose technologies and structures that can evolve as your business grows.",
        icon: "boxes",
      },
      {
        title: "Reliable Engineering",
        description:
          "Our development approach focuses on stability, maintainability and long-term reliability.",
        icon: "check",
      },
      {
        title: "Future Ready",
        description:
          "Cloud-ready systems and modern technologies help your product adapt to changing needs.",
        icon: "cloud",
      },
    ],
  },

  customCta: {
    eyebrow: "NEED SOMETHING CUSTOM?",
    headingLine1: "Your business doesn't",
    headingLine2: "need generic technology.",
    description:
      "From custom APIs and business systems to AI integrations and automation, we can design a technology stack around your exact requirements.",
    buttonText: "Discuss Your Project",
    buttonLink: "/contact",
  },

  finalCta: {
    eyebrow: "READY TO BUILD?",
    headingLine1: "Let's create something",
    headingLine2: "worth building.",
    description:
      "Have a project, idea or business challenge? Let's talk about how the right technology can move it forward.",
    buttonText: "Start a Project",
    buttonLink: "/contact",
  },
};

/* =========================================================
   ACCENT STYLES
========================================================= */

const accentStyles = {
  blue: {
    glow:
      "bg-blue-500/[0.09] group-hover:bg-blue-500/[0.16]",
    icon:
      "text-blue-200 border-blue-300/15 bg-blue-400/[0.08] group-hover:border-blue-300/30 group-hover:bg-blue-400/[0.14]",
    number:
      "text-blue-200/60 group-hover:text-blue-200",
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
    check:
      "group-hover:border-indigo-300/30 group-hover:bg-indigo-400/10 group-hover:text-indigo-100",
    arrow:
      "group-hover:border-indigo-300/30 group-hover:bg-indigo-400/[0.10] group-hover:text-indigo-100",
  },
};

/* =========================================================
   ICON HELPER
========================================================= */

const getTechnologyIcon = (icon) => {
  if (typeof icon === "function") return icon;

  if (icon === "smartphone") return Smartphone;
  if (icon === "brain") return BrainCircuit;
  if (icon === "brainCircuit") return BrainCircuit;
  if (icon === "boxes") return Boxes;
  if (icon === "cloud") return Cloud;
  if (icon === "palette") return Palette;

  return Code2;
};

/* =========================================================
   TECHNOLOGIES
========================================================= */

function Technologies() {
  const [websiteImages, setWebsiteImages] = useState([]);
  const [content, setContent] = useState(defaultContent);

  /* =========================================================
     FETCH IMAGES + CONTENT
  ========================================================= */

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      try {
        const [imageResponse, contentResponse] =
          await Promise.all([
            api.get("/images", {
              params: {
                _t: Date.now(),
              },
            }),

            /* 
             * IMPORTANT:
             * Cache-Control / Pragma headers removed.
             * They were causing CORS preflight failure.
             * _t query parameter is enough for cache busting.
             */
            api.get("/content/technologies", {
              params: {
                _t: Date.now(),
              },
            }),
          ]);

        if (!mounted) return;

        setWebsiteImages(
          imageResponse.data?.data || []
        );

        /*
         * API RESPONSE NORMALIZATION
         */

        let data =
          contentResponse.data?.data ??
          contentResponse.data?.content ??
          contentResponse.data;

        if (data?.content) {
          data = data.content;
        }
if (!data || typeof data !== "object") {
  return;
}

console.log("TECHNOLOGIES API DATA:", data);
console.log("TECHNOLOGIES API ITEMS:", data?.items);

        /*
         * HERO
         */

        const mergedHero = {
          ...defaultContent.hero,
          ...(data.hero || {}),
        };

        /*
         * ECOSYSTEM
         */

        const mergedEcosystem = {
          ...defaultContent.ecosystem,
          ...(data.ecosystem || {}),
        };

        /*
         * ITEMS
         */

        const mergedItems = Array.isArray(data.items)
          ? data.items.map((item, index) => ({
              ...(defaultTechnologyGroups[index] || {}),
              ...item,

              technologies:
                Array.isArray(item.technologies)
                  ? item.technologies
                  : defaultTechnologyGroups[index]
                      ?.technologies || [],

              features:
                Array.isArray(item.features)
                  ? item.features
                  : defaultTechnologyGroups[index]
                      ?.features || [],
            }))
          : defaultTechnologyGroups;

        /*
         * ENGINEERING
         */

        const engineeringData =
          data.engineering &&
          typeof data.engineering === "object"
            ? data.engineering
            : {};

        const engineeringCards =
          Array.isArray(engineeringData.cards)
            ? engineeringData.cards.map(
                (card, index) => ({
                  ...(defaultContent.engineering.cards[
                    index
                  ] || {}),
                  ...card,

                  description:
                    card.description !== undefined
                      ? card.description
                      : card.text !== undefined
                      ? card.text
                      : defaultContent.engineering
                          .cards[index]?.description || "",
                })
              )
            : defaultContent.engineering.cards;

        const mergedEngineering = {
          ...defaultContent.engineering,
          ...engineeringData,
          cards: engineeringCards,
        };

        /*
         * CUSTOM CTA
         */

        const mergedCustomCta = {
          ...defaultContent.customCta,
          ...(data.customCta || {}),
        };

        /*
         * FINAL CTA
         */

        const mergedFinalCta = {
          ...defaultContent.finalCta,
          ...(data.finalCta || {}),
        };

        /*
         * FINAL CONTENT
         */

        setContent({
          ...defaultContent,
          ...data,

          hero: mergedHero,
          ecosystem: mergedEcosystem,
          items: mergedItems,
          engineering: mergedEngineering,
          customCta: mergedCustomCta,
          finalCta: mergedFinalCta,
        });
      } catch (error) {
        console.error(
          "Technologies Data Error:",
          error
        );
      }
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, []);

  /* =========================================================
     IMAGE HELPER
  ========================================================= */

  const getImageByKey = (key) => {
    const image = websiteImages.find(
      (item) => item.key === key
    );

    return image?.url || fallbackImages[key];
  };

  /* =========================================================
     SAFE TECHNOLOGY GROUPS
  ========================================================= */

  const groups = Array.isArray(content.items)
    ? content.items
    : defaultTechnologyGroups;

  /* =========================================================
     ENGINEERING ICON
  ========================================================= */

  const getEngineeringIcon = (type) => {
    if (type === "check") return Check;
    if (type === "cloud") return Cloud;

    return Boxes;
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07152f] text-white">

      {/* GLOBAL BACKGROUND */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

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
          className="absolute left-[5%] top-[-160px] h-[600px] w-[600px] rounded-full bg-blue-500/[0.14] blur-[150px]"
        />

        <motion.div
          animate={{
            x: [0, -35, 0],
            y: [0, 30, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[42%] top-[20%] h-[520px] w-[520px] rounded-full bg-cyan-400/[0.065] blur-[150px]"
        />

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-140px] top-[35%] h-[550px] w-[550px] rounded-full bg-indigo-500/[0.10] blur-[150px]"
        />

        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:80px_80px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_5%,#07152f_90%)]" />

        <div className="absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-[#07152f] to-transparent" />
      </div>

      {/* HERO */}

      <section className="relative overflow-hidden px-6 pb-28 pt-40 sm:px-8 lg:px-12">

        <div className="pointer-events-none absolute inset-x-0 top-0 h-[680px] overflow-hidden">

          <img
            src={getImageByKey("technologies-hero")}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.20] saturate-[1.15]"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#07152f]/20 via-[#07152f]/55 to-[#07152f]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,rgba(59,130,246,0.24),transparent_42%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-5xl"
          >

            <div className="mb-7 flex items-center gap-3">

              <motion.span
                animate={{
                  rotate: [0, 8, -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-300/25 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 shadow-[0_0_35px_rgba(59,130,246,0.18)]"
              >
                <Sparkles
                  size={13}
                  className="text-blue-200"
                />
              </motion.span>

              <span className="text-[10px] font-semibold tracking-[0.25em] text-blue-200/85">
                {content.hero.eyebrow}
              </span>
            </div>

            <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-[88px]">
              {content.hero.headingLine1}

              <span className="block bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                {content.hero.headingLine2}
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-blue-50/70 sm:text-lg sm:leading-8">
              {content.hero.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.4,
            }}
            className="mt-20 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/[0.10] pt-7 text-[10px] font-medium tracking-[0.22em] text-blue-100/45"
          >
            {(content.hero.categories || []).map(
              (item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="transition-all duration-300 hover:text-cyan-200 hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.35)]"
                >
                  {item}
                </span>
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* TECHNOLOGY ECOSYSTEM */}

      <section className="relative border-t border-white/[0.10] px-6 py-32 sm:px-8 lg:px-12">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 max-w-3xl">

            <span className="text-[10px] font-semibold tracking-[0.25em] text-blue-200/85">
              {content.ecosystem.eyebrow}
            </span>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl md:text-6xl">
              {content.ecosystem.headingLine1}

              <span className="block bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                {content.ecosystem.headingLine2}
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-blue-50/65">
              {content.ecosystem.description}
            </p>
          </div>

          <div className="space-y-5">

            {groups.map((group, index) => {

              const Icon = getTechnologyIcon(
                group.icon ||
                  defaultTechnologyGroups[index]?.icon
              );

              const accent =
                accentStyles[group.accent] ||
                accentStyles.blue;

              return (
                <motion.article
                  key={`${group.number}-${group.title}-${index}`}
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
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-[30px] border border-white/[0.10] bg-white/[0.045] shadow-[0_20px_70px_rgba(0,0,0,0.15)] backdrop-blur-xl transition-all duration-500 hover:border-blue-300/[0.24] hover:bg-white/[0.065]"
                >

                  <div
                    className={`pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full ${accent.glow} blur-[100px] transition-all duration-700`}
                  />

                  <div className="relative grid gap-8 p-5 sm:p-7 lg:grid-cols-[300px_1fr_0.8fr] lg:gap-10 lg:p-10">

                    <div className="relative min-h-[230px] overflow-hidden rounded-[22px] border border-white/[0.12] bg-black/30">

                      <motion.img
                        src={getImageByKey(
                          group.imageKey ||
                            defaultTechnologyGroups[
                              index
                            ]?.imageKey
                        )}
                        alt={group.title}
                        loading="lazy"
                        whileHover={{ scale: 1.07 }}
                        transition={{ duration: 0.7 }}
                        className="absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover:brightness-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-r from-[#07152f]/30 via-[#07152f]/5 to-transparent" />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#07152f]/65 via-transparent to-transparent" />

                      <div className="absolute bottom-5 left-5 flex items-center gap-3">

                        <span
                          className={`text-[11px] font-semibold tracking-[0.2em] ${accent.number}`}
                        >
                          {group.number}
                        </span>

                        <span className="h-px w-8 bg-white/35" />

                        <span className="text-[9px] font-medium tracking-[0.18em] text-white/75">
                          YOVI TECHNOLOGIES
                        </span>
                      </div>
                    </div>

                    <div>

                      <div className="flex items-center gap-4">

                        <span
                          className={`text-[10px] font-semibold tracking-[0.2em] ${accent.number}`}
                        >
                          {group.number}
                        </span>

                        <div
                          className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-300 ${accent.icon}`}
                        >
                          <Icon
                            size={19}
                            strokeWidth={1.5}
                          />
                        </div>
                      </div>

                      <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                        {group.title}
                      </h2>

                      <p className="mt-4 max-w-xl text-sm leading-7 text-blue-50/70 transition-colors group-hover:text-blue-50/90">
                        {group.description}
                      </p>

                      <div className="mt-7 flex flex-wrap gap-2">

                        {(group.technologies || []).map(
                          (technology, techIndex) => (
                            <span
                              key={`${technology}-${techIndex}`}
                              className={`rounded-full border px-3 py-1.5 text-[10px] font-medium ${
                                techIndex % 3 === 0
                                  ? "border-blue-300/20 bg-blue-400/[0.07] text-blue-100/75"
                                  : techIndex % 3 === 1
                                  ? "border-cyan-300/20 bg-cyan-400/[0.06] text-cyan-100/70"
                                  : "border-white/[0.12] bg-white/[0.035] text-white/55"
                              }`}
                            >
                              {technology}
                            </span>
                          )
                        )}
                      </div>
                    </div>

                    <div>

                      <p className="mb-5 text-[10px] font-semibold tracking-[0.2em] text-blue-100/45">
                        WHAT IT ENABLES
                      </p>

                      <div className="space-y-3">

                        {(group.features || []).map(
                          (feature, featureIndex) => (
                            <div
                              key={`${feature}-${featureIndex}`}
                              className="flex items-center gap-3 text-sm text-blue-50/65 transition-colors hover:text-white"
                            >
                              <span
                                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.025] text-white/40 ${accent.check}`}
                              >
                                <Check size={11} />
                              </span>

                              {feature}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`absolute right-7 top-7 flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.10] bg-white/[0.035] text-white/35 ${accent.arrow}`}
                  >
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:rotate-45"
                    />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ENGINEERING APPROACH */}

      <section className="relative overflow-hidden border-t border-white/[0.10] px-6 py-32 sm:px-8 lg:px-12">

        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          <img
            src={getImageByKey(
              "technologies-engineering"
            )}
            alt=""
            className="h-full w-full object-cover opacity-[0.15]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#07152f] via-[#07152f]/80 to-[#07152f]/50" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#07152f] via-transparent to-[#07152f]" />
        </div>

        <div className="relative mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <span className="text-[10px] font-semibold tracking-[0.25em] text-cyan-200/85">
              {content.engineering.eyebrow}
            </span>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl md:text-6xl">
              {content.engineering.headingLine1}

              <span className="block bg-gradient-to-r from-blue-200 via-white to-cyan-200 bg-clip-text text-transparent">
                {content.engineering.headingLine2}
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-blue-50/65">
              {content.engineering.description}
            </p>
          </div>

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
              duration: 0.7,
            }}
            className="group relative mt-14 h-[260px] overflow-hidden rounded-[30px] border border-white/[0.10]"
          >

            <img
              src={getImageByKey(
                "technologies-engineering"
              )}
              alt="Software engineering workspace"
              className="h-full w-full object-cover opacity-35 transition-transform duration-1000 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#07152f]/90 via-[#07152f]/55 to-[#07152f]/30" />

            <div className="absolute inset-0 flex items-center px-7 sm:px-10">

              <div className="max-w-xl">

                <p className="text-[9px] font-semibold tracking-[0.25em] text-cyan-200/80">
                  {content.engineering.visualEyebrow}
                </p>

                <p className="mt-3 text-xl font-medium tracking-[-0.025em] text-white/85 sm:text-2xl">
                  {content.engineering.visualText}
                </p>
              </div>
            </div>
          </motion.div>

          <div className="mt-5 grid gap-4 md:grid-cols-3">

            {(content.engineering.cards || []).map(
              (item, index) => {

                const Icon =
                  getEngineeringIcon(item.icon);

                const description =
                  item.description !== undefined
                    ? item.description
                    : item.text !== undefined
                    ? item.text
                    : "";

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
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    whileHover={{ y: -5 }}
                    className="group relative overflow-hidden rounded-[26px] border border-white/[0.09] bg-white/[0.045] p-7 backdrop-blur-xl transition-all duration-500 hover:border-blue-300/20"
                  >

                    <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-blue-200/70 group-hover:border-blue-300/20 group-hover:bg-blue-400/10 group-hover:text-blue-100">
                      <Icon
                        size={19}
                        strokeWidth={1.5}
                      />
                    </div>

                    <h3 className="relative mt-6 text-sm font-medium text-white/85">
                      {item.title}
                    </h3>

                    <p className="relative mt-3 text-xs leading-6 text-blue-50/45">
                      {description}
                    </p>
                  </motion.div>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* CUSTOM CTA */}

      <section className="border-t border-white/[0.10] px-6 py-32 sm:px-8 lg:px-12">

        <div className="mx-auto max-w-7xl">

          <div className="group relative min-h-[500px] overflow-hidden rounded-[34px] border border-blue-300/[0.12]">

            <img
              src={getImageByKey(
                "technologies-custom-cta"
              )}
              alt="Team building custom digital technology"
              className="absolute inset-0 h-full w-full object-cover opacity-40 transition-transform duration-1000 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#07152f]/95 via-[#07152f]/72 to-[#07152f]/30" />

            <div className="relative z-10 flex min-h-[500px] items-center p-8 sm:p-12 lg:p-16">

              <div className="max-w-3xl">

                <span className="text-[10px] font-semibold tracking-[0.25em] text-cyan-200/85">
                  {content.customCta.eyebrow}
                </span>

                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl md:text-6xl">
                  {content.customCta.headingLine1}

                  <span className="block bg-gradient-to-r from-blue-200 via-white to-cyan-200 bg-clip-text text-transparent">
                    {content.customCta.headingLine2}
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-sm leading-7 text-blue-50/70">
                  {content.customCta.description}
                </p>

                <a
                  href={
                    content.customCta.buttonLink ||
                    "/contact"
                  }
                  className="group/button mt-9 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-500 via-blue-500 to-cyan-500 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03]"
                >
                  {content.customCta.buttonText}

                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-blue-600 transition-transform duration-300 group-hover/button:rotate-45">
                    <ArrowUpRight size={13} />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="relative overflow-hidden border-t border-white/[0.10] px-6 py-32 sm:px-8 lg:px-12">

        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          <img
            src={getImageByKey(
              "technologies-final-cta"
            )}
            alt=""
            className="h-full w-full object-cover opacity-[0.15]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#07152f] via-[#07152f]/75 to-[#07152f]" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#07152f] via-transparent to-[#07152f]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.20),transparent_48%)]" />
        </div>

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
          className="relative z-10 mx-auto max-w-4xl text-center"
        >

          <span className="text-[10px] font-semibold tracking-[0.28em] text-cyan-200/90">
            {content.finalCta.eyebrow}
          </span>

          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.05em] text-white sm:text-5xl md:text-6xl">
            {content.finalCta.headingLine1}

            <span className="block bg-gradient-to-r from-blue-200 via-white to-cyan-200 bg-clip-text text-transparent">
              {content.finalCta.headingLine2}
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-blue-50/70">
            {content.finalCta.description}
          </p>

          <a
            href={
              content.finalCta.buttonLink ||
              "/contact"
            }
            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-500 via-blue-500 to-cyan-500 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.04]"
          >
            {content.finalCta.buttonText}

            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-blue-600 transition-all duration-300 group-hover:rotate-45">
              <ArrowUpRight size={13} />
            </span>
          </a>
        </motion.div>
      </section>
    </main>
  );
}

export default Technologies;
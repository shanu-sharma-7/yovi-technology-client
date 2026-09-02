import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

function SpotlightCard({
  number,
  title,
  description,
  technologies = [],
  icon: Icon,
  className = "",
  accent = "blue",
  image = "",
}) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;

    if (!card) return;

    const rect = card.getBoundingClientRect();

    card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  const accentStyles = {
    blue: {
      glow: "rgba(59,130,246,0.24)",
      border: "group-hover:border-blue-300/30",
      iconBg: "group-hover:bg-blue-400/15",
      iconText: "group-hover:text-blue-100",
      number: "text-blue-200/70 group-hover:text-blue-100",
      tag:
        "group-hover:border-blue-300/25 group-hover:bg-blue-400/10 group-hover:text-blue-100",
    },

    cyan: {
      glow: "rgba(34,211,238,0.23)",
      border: "group-hover:border-cyan-300/30",
      iconBg: "group-hover:bg-cyan-400/15",
      iconText: "group-hover:text-cyan-100",
      number: "text-cyan-200/70 group-hover:text-cyan-100",
      tag:
        "group-hover:border-cyan-300/25 group-hover:bg-cyan-400/10 group-hover:text-cyan-100",
    },

    indigo: {
      glow: "rgba(99,102,241,0.24)",
      border: "group-hover:border-indigo-300/30",
      iconBg: "group-hover:bg-indigo-400/15",
      iconText: "group-hover:text-indigo-100",
      number: "text-indigo-200/70 group-hover:text-indigo-100",
      tag:
        "group-hover:border-indigo-300/25 group-hover:bg-indigo-400/10 group-hover:text-indigo-100",
    },

    violet: {
      glow: "rgba(139,92,246,0.24)",
      border: "group-hover:border-violet-300/30",
      iconBg: "group-hover:bg-violet-400/15",
      iconText: "group-hover:text-violet-100",
      number: "text-violet-200/70 group-hover:text-violet-100",
      tag:
        "group-hover:border-violet-300/25 group-hover:bg-violet-400/10 group-hover:text-violet-100",
    },
  };

  const theme = accentStyles[accent] || accentStyles.blue;

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`
        group
        relative
        min-h-[520px]
        overflow-hidden
        rounded-[30px]
        border
        border-white/[0.10]
        bg-[#0a1935]
        shadow-[0_20px_70px_rgba(0,0,0,0.20)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-[0_30px_100px_rgba(0,0,0,0.32)]
        ${theme.border}
        ${className}
      `}
    >
      {/* =====================================================
          IMAGE
      ===================================================== */}

      {image && (
        <div className="pointer-events-none absolute inset-0">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
              opacity-[0.52]
              saturate-[1.05]
              transition-all
              duration-700
              group-hover:scale-105
              group-hover:opacity-[0.62]
            "
          />

          {/* Main readability overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-b
              from-[#07152f]/45
              via-[#07152f]/65
              to-[#07152f]/98
            "
          />

          {/* Left cinematic overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#07152f]/75
              via-transparent
              to-[#07152f]/30
            "
          />

          {/* Bottom fade */}
          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-[55%]
              bg-gradient-to-t
              from-[#07152f]
              via-[#07152f]/80
              to-transparent
            "
          />

          {/* Accent ambient glow */}
          <div
            className="
              absolute
              inset-0
              opacity-40
              transition-opacity
              duration-700
              group-hover:opacity-75
            "
            style={{
              background: `radial-gradient(
                circle at 75% 20%,
                ${theme.glow},
                transparent 42%
              )`,
            }}
          />
        </div>
      )}

      {/* =====================================================
          CURSOR SPOTLIGHT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -inset-px
          z-[1]
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
        style={{
          background: `radial-gradient(
            360px circle at var(--mouse-x) var(--mouse-y),
            ${theme.glow},
            transparent 45%
          )`,
        }}
      />

      {/* =====================================================
          TOP RIGHT GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          z-[1]
          h-52
          w-52
          rounded-full
          blur-[80px]
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
        style={{
          background: theme.glow,
        }}
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 flex h-full min-h-[520px] flex-col p-7 sm:p-8">
        {/* TOP */}

        <div className="flex items-start justify-between">
          <div
            className={`
              text-[11px]
              font-semibold
              tracking-[0.22em]
              transition-colors
              duration-300
              ${theme.number}
            `}
          >
            {number}
          </div>

          {Icon && (
            <div
              className={`
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                border
                border-white/[0.14]
                bg-white/[0.06]
                text-white/70
                backdrop-blur-xl
                shadow-[0_8px_30px_rgba(0,0,0,0.18)]
                transition-all
                duration-300
                ${theme.iconBg}
                ${theme.iconText}
                group-hover:scale-110
              `}
            >
              <Icon size={20} strokeWidth={1.5} />
            </div>
          )}
        </div>

        {/* SERVICE LABEL */}

        <div className="mt-14">
          <span
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.24em]
              text-blue-100/45
            "
          >
            YOVI TECHNOLOGIES
          </span>
        </div>

        {/* TITLE + DESCRIPTION */}

        <div className="mt-4">
          <h3
            className="
              max-w-xl
              text-3xl
              font-semibold
              leading-[1.08]
              tracking-[-0.045em]
              text-white
              transition-transform
              duration-300
              group-hover:translate-x-0.5
              sm:text-[34px]
            "
          >
            {title}
          </h3>

          <p
            className="
              mt-4
              max-w-lg
              text-[15px]
              font-normal
              leading-7
              text-blue-50/65
              transition-colors
              duration-300
              group-hover:text-blue-50/80
            "
          >
            {description}
          </p>
        </div>

        {/* TECHNOLOGIES */}

        {technologies.length > 0 && (
          <div className="mt-auto pt-8">
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className={`
                    rounded-full
                    border
                    border-white/[0.10]
                    bg-white/[0.045]
                    px-3.5
                    py-2
                    text-[10px]
                    font-medium
                    tracking-wide
                    text-blue-50/55
                    backdrop-blur-md
                    transition-all
                    duration-300
                    ${theme.tag}
                  `}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* BOTTOM */}

        <div className="mt-7 flex items-end justify-between border-t border-white/[0.08] pt-5">
          <span
            className="
              text-[10px]
              font-medium
              tracking-[0.2em]
              text-white/30
              transition-colors
              duration-300
              group-hover:text-white/50
            "
          >
            EXPLORE SERVICE
          </span>

          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/[0.12]
              bg-white/[0.035]
              text-white/45
              backdrop-blur-md
              transition-all
              duration-300
              group-hover:rotate-45
              group-hover:border-white/25
              group-hover:bg-white/[0.08]
              group-hover:text-white
            "
          >
            <ArrowUpRight size={16} strokeWidth={1.7} />
          </div>
        </div>
      </div>
    </article>
  );
}

export default SpotlightCard;
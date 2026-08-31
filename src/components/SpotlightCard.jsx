
import { useRef } from "react";

function SpotlightCard({
  number,
  title,
  description,
  technologies,
  icon: Icon,
  className = "",
  accent = "violet",
}) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;

    if (!card) return;

    const rect = card.getBoundingClientRect();

    card.style.setProperty(
      "--mouse-x",
      `${e.clientX - rect.left}px`
    );

    card.style.setProperty(
      "--mouse-y",
      `${e.clientY - rect.top}px`
    );
  };

  const accentStyles = {
    violet: {
      glow: "rgba(139,92,246,0.20)",
      border: "group-hover:border-violet-400/30",
      iconBg: "group-hover:bg-violet-400/15",
      iconText: "group-hover:text-violet-200",
      number: "text-violet-300/60",
    },

    blue: {
      glow: "rgba(59,130,246,0.20)",
      border: "group-hover:border-blue-400/30",
      iconBg: "group-hover:bg-blue-400/15",
      iconText: "group-hover:text-blue-200",
      number: "text-blue-300/60",
    },

    cyan: {
      glow: "rgba(6,182,212,0.20)",
      border: "group-hover:border-cyan-400/30",
      iconBg: "group-hover:bg-cyan-400/15",
      iconText: "group-hover:text-cyan-200",
      number: "text-cyan-300/60",
    },

    pink: {
      glow: "rgba(236,72,153,0.20)",
      border: "group-hover:border-pink-400/30",
      iconBg: "group-hover:bg-pink-400/15",
      iconText: "group-hover:text-pink-200",
      number: "text-pink-300/60",
    },

    emerald: {
      glow: "rgba(16,185,129,0.20)",
      border: "group-hover:border-emerald-400/30",
      iconBg: "group-hover:bg-emerald-400/15",
      iconText: "group-hover:text-emerald-200",
      number: "text-emerald-300/60",
    },

    orange: {
      glow: "rgba(249,115,22,0.20)",
      border: "group-hover:border-orange-400/30",
      iconBg: "group-hover:bg-orange-400/15",
      iconText: "group-hover:text-orange-200",
      number: "text-orange-300/60",
    },
  };

  const theme = accentStyles[accent] || accentStyles.violet;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`
        group relative overflow-hidden rounded-[28px]
        border border-white/[0.08]
        bg-gradient-to-br
        from-white/[0.055]
        via-white/[0.025]
        to-white/[0.015]
        p-7

        shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]

        transition-all duration-500
        hover:-translate-y-1
        hover:shadow-2xl

        ${theme.border}
        ${className}
      `}
    >

      {/* Cursor spotlight */}
      <div
        className="
          pointer-events-none
          absolute
          -inset-px
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
        style={{
          background: `radial-gradient(
            380px circle at var(--mouse-x) var(--mouse-y),
            ${theme.glow},
            transparent 45%
          )`,
        }}
      />

      {/* Top gradient glow */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: theme.glow,
        }}
      />

      <div className="relative z-10 flex h-full flex-col">

        {/* Top */}
        <div className="flex items-start justify-between">

          <span
            className={`
              text-[10px]
              font-semibold
              tracking-[0.2em]
              transition-colors
              duration-300
              ${theme.number}
            `}
          >
            {number}
          </span>

          {Icon && (
            <div
              className={`
                flex h-11 w-11
                items-center justify-center
                rounded-2xl
                border border-white/10
                bg-white/[0.045]
                text-white/60
                transition-all duration-300

                ${theme.iconBg}
                ${theme.iconText}

                group-hover:scale-110
              `}
            >
              <Icon size={19} strokeWidth={1.5} />
            </div>
          )}

        </div>


        {/* Content */}
        <div className="mt-auto pt-20">

          <h3
            className="
              text-2xl
              font-semibold
              tracking-[-0.04em]
              text-white
              transition-transform
              duration-300
              group-hover:translate-x-0.5
            "
          >
            {title}
          </h3>

          <p
            className="
              mt-3
              max-w-md
              text-sm
              leading-6
              text-white/45
              transition-colors
              duration-300
              group-hover:text-white/60
            "
          >
            {description}
          </p>


          {/* Technologies */}
          {technologies && (
            <div className="mt-6 flex flex-wrap gap-2">

              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    border border-white/[0.08]
                    bg-white/[0.035]
                    px-3
                    py-1.5
                    text-[10px]
                    text-white/40
                    transition-all
                    duration-300
                    group-hover:border-white/[0.13]
                    group-hover:bg-white/[0.06]
                    group-hover:text-white/55
                  "
                >
                  {tech}
                </span>
              ))}

            </div>
          )}

        </div>


        {/* Arrow */}
        <div
          className="
            absolute
            bottom-7
            right-7
            flex h-9 w-9
            items-center justify-center
            rounded-full
            border border-white/10
            bg-white/[0.025]
            text-white/40
            transition-all duration-300

            group-hover:rotate-45
            group-hover:bg-white/[0.08]
            group-hover:border-white/20
            group-hover:text-white
          "
        >
          ↗
        </div>

      </div>

    </div>
  );
}

export default SpotlightCard;


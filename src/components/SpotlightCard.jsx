import { useRef } from "react";

function SpotlightCard({
  number,
  title,
  description,
  technologies,
  icon: Icon,
  className = "",
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

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`
        group relative overflow-hidden rounded-[28px]
        border border-white/[0.08]
        bg-white/[0.025]
        p-7
        transition-all duration-500
        hover:-translate-y-1
        hover:border-white/[0.15]
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
          background:
            "radial-gradient(350px circle at var(--mouse-x) var(--mouse-y), rgba(139,92,246,0.12), transparent 45%)",
        }}
      />

      <div className="relative z-10 flex h-full flex-col">

        {/* Top */}
        <div className="flex items-start justify-between">

          <span className="text-[10px] font-medium tracking-[0.2em] text-white/25">
            {number}
          </span>

          {Icon && (
            <div
              className="
                flex h-10 w-10 items-center justify-center
                rounded-xl
                border border-white/10
                bg-white/[0.04]
                text-white/60
                transition-all duration-300
                group-hover:border-violet-400/20
                group-hover:bg-violet-400/10
                group-hover:text-violet-200
              "
            >
              <Icon size={18} strokeWidth={1.5} />
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
              text-white/40
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
                    bg-white/[0.025]
                    px-3
                    py-1.5
                    text-[10px]
                    text-white/35
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
            text-white/40
            transition-all duration-300
            group-hover:rotate-45
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
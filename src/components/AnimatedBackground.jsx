import { motion } from "framer-motion";

function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

      {/* =====================================================
          MAIN VIOLET AURA
      ===================================================== */}

      <motion.div
        className="
          absolute
          left-[30%]
          top-[-5%]
          h-[600px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-violet-500/[0.10]
          blur-[160px]
        "
        animate={{
          x: [0, 60, 0],
          y: [0, 35, 0],
          scale: [1, 1.12, 1],
          opacity: [0.45, 0.7, 0.45],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          ELECTRIC BLUE AURA
      ===================================================== */}

      <motion.div
        className="
          absolute
          right-[-10%]
          top-[18%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-500/[0.08]
          blur-[150px]
        "
        animate={{
          x: [0, -80, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          CYAN DIGITAL ACCENT
      ===================================================== */}

      <motion.div
        className="
          absolute
          bottom-[10%]
          left-[-5%]
          h-[360px]
          w-[360px]
          rounded-full
          bg-cyan-400/[0.045]
          blur-[130px]
        "
        animate={{
          x: [0, 70, 0],
          y: [0, -40, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          SMALL CENTER HIGHLIGHT
      ===================================================== */}

      <motion.div
        className="
          absolute
          left-1/2
          top-[30%]
          h-[220px]
          w-[220px]
          -translate-x-1/2
          rounded-full
          bg-violet-300/[0.035]
          blur-[100px]
        "
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.55, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          TECH GRID
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.035]
          [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          [background-size:72px_72px]
        "
      />

      {/* =====================================================
          HORIZONTAL LIGHT
      ===================================================== */}

      <div
        className="
          absolute
          left-0
          right-0
          top-[48%]
          h-px
          bg-gradient-to-r
          from-transparent
          via-violet-300/[0.06]
          to-transparent
        "
      />

      {/* =====================================================
          CENTER RADIAL VIGNETTE
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_45%_32%,transparent_10%,#030305_75%)]
        "
      />

      {/* =====================================================
          TOP VIGNETTE
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,transparent_0%,#030305_78%)]
          opacity-60
        "
      />

      {/* =====================================================
          SIDE DARKNESS
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(to_right,#030305_0%,transparent_18%,transparent_82%,#030305_100%)]
          opacity-60
        "
      />

      {/* =====================================================
          BOTTOM FADE
      ===================================================== */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-56
          bg-gradient-to-t
          from-[#030305]
          via-[#030305]/85
          to-transparent
        "
      />

    </div>
  );
}

export default AnimatedBackground;
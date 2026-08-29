import { motion } from "framer-motion";

function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

      {/* Main glow */}
      <motion.div
        className="
          absolute
          left-1/2
          top-[15%]
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-violet-600/20
          blur-[140px]
        "
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.5, 0.35],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blue glow */}
      <motion.div
        className="
          absolute
          right-[-10%]
          top-[35%]
          h-[350px]
          w-[350px]
          rounded-full
          bg-blue-600/10
          blur-[120px]
        "
        animate={{
          x: [0, -60, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.06]
          [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      {/* Radial fade */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_20%,#050505_75%)]
        "
      />

      {/* Bottom fade */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-40
          bg-gradient-to-t
          from-[#050505]
          to-transparent
        "
      />

    </div>
  );
}

export default AnimatedBackground;
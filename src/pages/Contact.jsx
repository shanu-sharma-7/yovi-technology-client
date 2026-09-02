import { useState } from "react";
import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    customService: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // =========================================================
  // HANDLE INPUT CHANGE
  // =========================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================================================
  // SUBMIT CONTACT FORM
  // =========================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      const API_URL =
        "https://yovi-technology-backend-1.onrender.com/api";

      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Something went wrong."
        );
      }

      setStatus({
        type: "success",
        message:
          "Thanks for reaching out! We'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        customService: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact Form Error ❌", error);

      setStatus({
        type: "error",
        message:
          error.message ||
          "Unable to submit your message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07152f] text-white">

      {/* =====================================================
          GLOBAL BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

        {/* Blue atmosphere */}

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
            left-[-180px]
            top-[-120px]
            h-[600px]
            w-[600px]
            rounded-full
            bg-blue-500/[0.13]
            blur-[150px]
          "
        />

        {/* Cyan atmosphere */}

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 35, 0],
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
            top-[20%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-cyan-400/[0.06]
            blur-[150px]
          "
        />

        {/* Right indigo atmosphere */}

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
            right-[-150px]
            top-[35%]
            h-[540px]
            w-[540px]
            rounded-full
            bg-indigo-500/[0.09]
            blur-[150px]
          "
        />

        {/* Bottom atmosphere */}

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
            bottom-[-180px]
            left-[10%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-blue-400/[0.06]
            blur-[140px]
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

      <section className="relative overflow-hidden px-6 pb-24 pt-36 sm:px-8 lg:px-12">

        {/* Technology image background */}

        <div className="pointer-events-none absolute inset-x-0 top-0 h-[620px] overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=90"
            alt=""
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
              opacity-[0.18]
              saturate-[1.15]
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-b
              from-[#07152f]/20
              via-[#07152f]/65
              to-[#07152f]
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_65%_35%,rgba(59,130,246,0.22),transparent_42%)]
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
                GET IN TOUCH
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
              Let's build something

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
                worth building.
              </span>
            </h1>


            {/* Description */}

            <p
              className="
                mt-8
                max-w-2xl
                text-base
                leading-7
                text-blue-50/70
                sm:text-lg
                sm:leading-8
              "
            >
              Have an idea, a business challenge or a digital
              product in mind? Tell us what you're working on
              and let's turn it into something real.
            </p>


            {/* Categories */}

            <div
              className="
                mt-12
                flex
                flex-wrap
                gap-x-9
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

              {[
                "WEB",
                "MOBILE",
                "AI",
                "ERP",
                "CRM",
                "GROWTH",
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

            </div>

          </motion.div>


          {/* =====================================================
              MAIN CONTACT GRID
          ===================================================== */}

          <div
            className="
              mt-16
              grid
              gap-6
              lg:grid-cols-[0.75fr_1.25fr]
              lg:gap-7
            "
          >

            {/* =================================================
                LEFT SIDE
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -25,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              className="space-y-5"
            >

              {/* =================================================
                  IMAGE CARD
              ================================================= */}

              <div
                className="
                  group
                  relative
                  h-[310px]
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-white/[0.10]
                  bg-black/30
                  shadow-[0_20px_80px_rgba(0,0,0,0.35)]
                "
              >

                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=90"
                  alt="Modern technology and digital innovation"
                  loading="lazy"
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    opacity-100
                    saturate-[1.1]
                    contrast-[1.05]
                    transition-all
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* Image overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#07152f]/95
                    via-[#07152f]/25
                    to-transparent
                  "
                />

                {/* Blue glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    right-[-80px]
                    top-[-80px]
                    h-56
                    w-56
                    rounded-full
                    bg-blue-400/[0.20]
                    blur-[90px]
                    transition-all
                    duration-700
                    group-hover:bg-cyan-400/[0.25]
                  "
                />

                {/* Content */}

                <div className="absolute inset-x-0 bottom-0 p-7">

                  <div className="mb-3 flex items-center gap-2">

                    <span
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-cyan-300
                        shadow-[0_0_14px_rgba(103,232,249,0.9)]
                      "
                    />

                    <span
                      className="
                        text-[10px]
                        font-semibold
                        tracking-[0.25em]
                        text-cyan-200/80
                      "
                    >
                      DIGITAL INNOVATION
                    </span>

                  </div>

                  <h3
                    className="
                      text-2xl
                      font-semibold
                      tracking-[-0.04em]
                      text-white
                    "
                  >
                    Ideas into digital reality.
                  </h3>

                  <p
                    className="
                      mt-2
                      max-w-sm
                      text-sm
                      leading-6
                      text-white/60
                    "
                  >
                    Strategy, design, technology and AI working
                    together to build something meaningful.
                  </p>

                </div>

              </div>


              {/* =================================================
                  CONTACT DETAILS
              ================================================= */}

              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/[0.10]
                  bg-white/[0.045]
                  p-7
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:border-blue-300/[0.20]
                  hover:bg-white/[0.06]
                "
              >

                {/* Glow */}

                <div
                  className="
                    absolute
                    -right-24
                    -top-24
                    h-56
                    w-56
                    rounded-full
                    bg-blue-500/[0.08]
                    blur-[90px]
                    transition-all
                    duration-500
                    group-hover:bg-blue-500/[0.14]
                  "
                />

                <div
                  className="
                    absolute
                    -bottom-24
                    -left-24
                    h-48
                    w-48
                    rounded-full
                    bg-cyan-500/[0.05]
                    blur-[80px]
                  "
                />


                <span
                  className="
                    relative
                    text-[10px]
                    font-semibold
                    tracking-[0.2em]
                    text-blue-200/45
                  "
                >
                  CONTACT
                </span>


                <div className="relative mt-8 space-y-7">

                  {/* EMAIL */}

                  <div className="group/item flex gap-4">

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/10
                        bg-white/[0.04]
                        transition-all
                        duration-300
                        group-hover/item:border-blue-300/25
                        group-hover/item:bg-blue-400/[0.07]
                      "
                    >
                      <Mail
                        size={17}
                        className="text-blue-200"
                      />
                    </div>

                    <div>

                      <p className="text-xs text-white/35">
                        Email
                      </p>

                      <p className="mt-1 text-sm text-white/80">
                        hello@yovitechnologies.com
                      </p>

                    </div>

                  </div>


                  {/* PHONE */}

                  <div className="group/item flex gap-4">

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/10
                        bg-white/[0.04]
                        transition-all
                        duration-300
                        group-hover/item:border-cyan-300/25
                        group-hover/item:bg-cyan-400/[0.07]
                      "
                    >
                      <Phone
                        size={17}
                        className="text-cyan-200"
                      />
                    </div>

                    <div>

                      <p className="text-xs text-white/35">
                        Phone
                      </p>

                      <p className="mt-1 text-sm text-white/80">
                        +91 XXXXX XXXXX
                      </p>

                    </div>

                  </div>


                  {/* LOCATION */}

                  <div className="group/item flex gap-4">

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/10
                        bg-white/[0.04]
                        transition-all
                        duration-300
                        group-hover/item:border-blue-300/25
                        group-hover/item:bg-blue-400/[0.07]
                      "
                    >
                      <MapPin
                        size={17}
                        className="text-blue-200"
                      />
                    </div>

                    <div>

                      <p className="text-xs text-white/35">
                        Location
                      </p>

                      <p className="mt-1 text-sm text-white/80">
                        India
                      </p>

                    </div>

                  </div>

                </div>

              </div>


              {/* =================================================
                  WHAT WE DO
              ================================================= */}

              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-blue-300/[0.12]
                  bg-gradient-to-br
                  from-blue-500/[0.075]
                  via-white/[0.025]
                  to-cyan-500/[0.035]
                  p-7
                  transition-all
                  duration-500
                  hover:border-blue-300/[0.22]
                "
              >

                <div
                  className="
                    absolute
                    -right-16
                    -top-16
                    h-40
                    w-40
                    rounded-full
                    bg-blue-500/[0.08]
                    blur-3xl
                    transition-all
                    duration-500
                    group-hover:bg-blue-500/[0.13]
                  "
                />

                <div
                  className="
                    absolute
                    -bottom-20
                    -left-16
                    h-36
                    w-36
                    rounded-full
                    bg-cyan-500/[0.05]
                    blur-3xl
                  "
                />

                <div className="relative">

                  <span
                    className="
                      text-[10px]
                      font-semibold
                      tracking-[0.2em]
                      text-blue-200/45
                    "
                  >
                    WHAT WE DO
                  </span>

                  <p
                    className="
                      mt-5
                      text-lg
                      font-medium
                      tracking-tight
                      text-white/90
                    "
                  >
                    Web • AI • Mobile • ERP • CRM
                  </p>

                  <p
                    className="
                      mt-3
                      max-w-sm
                      text-sm
                      leading-6
                      text-blue-50/45
                    "
                  >
                    From first idea to a scalable digital
                    product, we're here to help.
                  </p>

                  <div className="mt-7 flex items-center gap-2">

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
                        text-[9px]
                        font-medium
                        tracking-[0.2em]
                        text-blue-200/45
                      "
                    >
                      TECHNOLOGY • DESIGN • AI
                    </span>

                  </div>

                </div>

              </div>

            </motion.div>


            {/* =================================================
                FORM
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 25,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.25,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/[0.10]
                bg-white/[0.045]
                p-6
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-blue-300/[0.16]
                sm:p-8
                lg:p-10
              "
            >

              {/* Form glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  right-[-100px]
                  top-[-100px]
                  h-[300px]
                  w-[300px]
                  rounded-full
                  bg-blue-500/[0.06]
                  blur-[100px]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-[-120px]
                  left-[-100px]
                  h-[260px]
                  w-[260px]
                  rounded-full
                  bg-cyan-500/[0.035]
                  blur-[100px]
                "
              />


              {/* Form header */}

              <div className="relative mb-8">

                <span
                  className="
                    text-[10px]
                    font-semibold
                    tracking-[0.2em]
                    text-cyan-200/60
                  "
                >
                  START A CONVERSATION
                </span>

                <h2
                  className="
                    mt-3
                    text-3xl
                    font-semibold
                    tracking-[-0.045em]
                    text-white
                    sm:text-4xl
                  "
                >
                  Tell us about your project.
                </h2>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-blue-50/45
                  "
                >
                  Share a few details and we'll take it from there.
                </p>

              </div>


              {/* =================================================
                  STATUS
              ================================================= */}

              {status.message && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className={`
                    relative
                    mb-6
                    flex
                    items-start
                    gap-3
                    rounded-2xl
                    border
                    p-4
                    ${
                      status.type === "success"
                        ? "border-emerald-400/20 bg-emerald-400/[0.06] text-emerald-200"
                        : "border-red-400/20 bg-red-400/[0.06] text-red-200"
                    }
                  `}
                >

                  {status.type === "success" ? (
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0"
                    />
                  ) : (
                    <AlertCircle
                      size={18}
                      className="mt-0.5 shrink-0"
                    />
                  )}

                  <p className="text-sm leading-6">
                    {status.message}
                  </p>

                </motion.div>
              )}


              {/* =================================================
                  FORM
              ================================================= */}

              <form
                onSubmit={handleSubmit}
                className="relative space-y-5"
              >

                {/* NAME + EMAIL */}

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>

                    <label
                      className="
                        mb-2
                        block
                        text-xs
                        font-medium
                        text-white/45
                      "
                    >
                      Name *
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="
                        w-full
                        rounded-2xl
                        border
                        border-white/10
                        bg-black/25
                        px-4
                        py-3.5
                        text-sm
                        text-white
                        outline-none
                        transition-all
                        placeholder:text-white/20
                        hover:border-white/15
                        focus:border-blue-400/40
                        focus:bg-blue-400/[0.025]
                        focus:ring-1
                        focus:ring-blue-400/10
                      "
                    />

                  </div>


                  <div>

                    <label
                      className="
                        mb-2
                        block
                        text-xs
                        font-medium
                        text-white/45
                      "
                    >
                      Email *
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="
                        w-full
                        rounded-2xl
                        border
                        border-white/10
                        bg-black/25
                        px-4
                        py-3.5
                        text-sm
                        text-white
                        outline-none
                        transition-all
                        placeholder:text-white/20
                        hover:border-white/15
                        focus:border-blue-400/40
                        focus:bg-blue-400/[0.025]
                        focus:ring-1
                        focus:ring-blue-400/10
                      "
                    />

                  </div>

                </div>


                {/* PHONE + COMPANY */}

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>

                    <label
                      className="
                        mb-2
                        block
                        text-xs
                        font-medium
                        text-white/45
                      "
                    >
                      Phone
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="
                        w-full
                        rounded-2xl
                        border
                        border-white/10
                        bg-black/25
                        px-4
                        py-3.5
                        text-sm
                        text-white
                        outline-none
                        transition-all
                        placeholder:text-white/20
                        hover:border-white/15
                        focus:border-cyan-400/40
                        focus:bg-cyan-400/[0.025]
                        focus:ring-1
                        focus:ring-cyan-400/10
                      "
                    />

                  </div>


                  <div>

                    <label
                      className="
                        mb-2
                        block
                        text-xs
                        font-medium
                        text-white/45
                      "
                    >
                      Company
                    </label>

                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company name"
                      className="
                        w-full
                        rounded-2xl
                        border
                        border-white/10
                        bg-black/25
                        px-4
                        py-3.5
                        text-sm
                        text-white
                        outline-none
                        transition-all
                        placeholder:text-white/20
                        hover:border-white/15
                        focus:border-cyan-400/40
                        focus:bg-cyan-400/[0.025]
                        focus:ring-1
                        focus:ring-cyan-400/10
                      "
                    />

                  </div>

                </div>


                {/* SERVICE */}

                <div>

                  <label
                    className="
                      mb-2
                      block
                      text-xs
                      font-medium
                      text-white/45
                    "
                  >
                    What do you need?
                  </label>

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="
                      w-full
                      cursor-pointer
                      appearance-none
                      rounded-2xl
                      border
                      border-white/10
                      bg-[#08152f]
                      px-4
                      py-3.5
                      text-sm
                      text-white/75
                      outline-none
                      transition-all
                      hover:border-white/15
                      focus:border-blue-400/40
                      focus:ring-1
                      focus:ring-blue-400/10
                    "
                  >

                    <option
                      value=""
                      className="bg-[#08152f] text-white/50"
                    >
                      Select a service
                    </option>

                    <option
                      value="Web Development"
                      className="bg-[#08152f] text-white"
                    >
                      Web Development
                    </option>

                    <option
                      value="AI Solutions"
                      className="bg-[#08152f] text-white"
                    >
                      AI Solutions
                    </option>

                    <option
                      value="Mobile Apps"
                      className="bg-[#08152f] text-white"
                    >
                      Mobile Apps
                    </option>

                    <option
                      value="ERP & CRM"
                      className="bg-[#08152f] text-white"
                    >
                      ERP & CRM
                    </option>

                    <option
                      value="UI / UX & Branding"
                      className="bg-[#08152f] text-white"
                    >
                      UI / UX & Branding
                    </option>

                    <option
                      value="Digital Growth"
                      className="bg-[#08152f] text-white"
                    >
                      Digital Growth
                    </option>

                    <option
                      value="Other / Custom Requirement"
                      className="bg-[#08152f] text-white"
                    >
                      Other / Custom Requirement
                    </option>

                  </select>

                </div>


                {/* CUSTOM SERVICE */}

                {formData.service ===
                  "Other / Custom Requirement" && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                  >

                    <label
                      className="
                        mb-2
                        block
                        text-xs
                        font-medium
                        text-white/45
                      "
                    >
                      Tell us what you need *
                    </label>

                    <textarea
                      name="customService"
                      value={formData.customService}
                      onChange={handleChange}
                      required
                      rows={3}
                      placeholder="Describe your requirement..."
                      className="
                        w-full
                        resize-none
                        rounded-2xl
                        border
                        border-white/10
                        bg-black/25
                        px-4
                        py-3.5
                        text-sm
                        leading-6
                        text-white
                        outline-none
                        transition-all
                        placeholder:text-white/20
                        hover:border-white/15
                        focus:border-blue-400/40
                        focus:bg-blue-400/[0.025]
                        focus:ring-1
                        focus:ring-blue-400/10
                      "
                    />

                  </motion.div>
                )}


                {/* MESSAGE */}

                <div>

                  <label
                    className="
                      mb-2
                      block
                      text-xs
                      font-medium
                      text-white/45
                    "
                  >
                    Message *
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us a little about your project..."
                    className="
                      w-full
                      resize-none
                      rounded-2xl
                      border
                      border-white/10
                      bg-black/25
                      px-4
                      py-3.5
                      text-sm
                      leading-6
                      text-white
                      outline-none
                      transition-all
                      placeholder:text-white/20
                      hover:border-white/15
                      focus:border-blue-400/40
                      focus:bg-blue-400/[0.025]
                      focus:ring-1
                      focus:ring-blue-400/10
                    "
                  />

                </div>


                {/* SUBMIT */}

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-2xl
                    bg-gradient-to-r
                    from-blue-500
                    via-blue-500
                    to-cyan-500
                    px-6
                    py-4
                    text-sm
                    font-semibold
                    text-white
                    shadow-[0_15px_60px_rgba(37,99,235,0.22)]
                    transition-all
                    duration-300
                    hover:scale-[1.01]
                    hover:shadow-[0_20px_80px_rgba(34,211,238,0.25)]
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                    disabled:hover:scale-100
                  "
                >

                  {loading ? (
                    <>
                      <Loader2
                        size={17}
                        className="animate-spin"
                      />

                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message

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
                    </>
                  )}

                </button>

              </form>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section className="relative px-6 pb-32 sm:px-8 lg:px-12">

        <motion.div
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
            duration: 0.7,
          }}
          className="
            relative
            mx-auto
            max-w-7xl
            overflow-hidden
            rounded-[30px]
            border
            border-blue-300/[0.12]
            bg-gradient-to-r
            from-blue-500/[0.055]
            via-white/[0.02]
            to-cyan-500/[0.045]
            px-7
            py-8
            sm:px-10
            sm:py-9
          "
        >

          {/* Background glow */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-64
              w-64
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-blue-500/[0.06]
              blur-[100px]
            "
          />

          <div
            className="
              relative
              flex
              flex-col
              gap-5
              md:flex-row
              md:items-center
              md:justify-between
            "
          >

            <div>

              <span
                className="
                  text-[9px]
                  font-semibold
                  tracking-[0.25em]
                  text-cyan-200/70
                "
              >
                READY WHEN YOU ARE
              </span>

              <p
                className="
                  mt-2
                  text-sm
                  text-blue-50/50
                "
              >
                Let's create something that moves your business.
              </p>

            </div>


            <a
              href="/services"
              className="
                group
                flex
                w-fit
                items-center
                gap-2
                rounded-full
                border
                border-white/[0.10]
                bg-white/[0.025]
                px-5
                py-3
                text-xs
                font-medium
                text-white/65
                transition-all
                duration-300
                hover:border-cyan-300/25
                hover:bg-cyan-400/[0.06]
                hover:text-white
              "
            >
              Explore Services

              <ArrowUpRight
                size={14}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />

            </a>

          </div>

        </motion.div>

      </section>

    </main>
  );
}

export default Contact;
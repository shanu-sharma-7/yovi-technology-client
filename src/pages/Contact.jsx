
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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================================
  // SUBMIT CONTACT FORM
  // =========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      // =========================================
      // PRODUCTION BACKEND URL
      // =========================================

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
    <main className="relative min-h-screen overflow-hidden bg-[#020403] px-6 pb-24 pt-32 text-white sm:px-8 lg:px-12">

      {/* =====================================================
          GLOBAL BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Emerald atmosphere */}
        <div
          className="
            absolute
            left-[-180px]
            top-[5%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-emerald-500/[0.055]
            blur-[160px]
          "
        />

        {/* Cyan atmosphere */}
        <div
          className="
            absolute
            right-[-180px]
            top-[35%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-cyan-500/[0.04]
            blur-[150px]
          "
        />

        {/* Bottom emerald glow */}
        <div
          className="
            absolute
            bottom-[-250px]
            left-1/2
            h-[550px]
            w-[550px]
            -translate-x-1/2
            rounded-full
            bg-teal-500/[0.035]
            blur-[160px]
          "
        />

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />

        {/* Fade */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_15%,#020403_78%)]
          "
        />

      </div>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative mx-auto max-w-7xl">

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="max-w-4xl"
        >

          {/* EYEBROW */}

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
                border-emerald-300/25
                bg-gradient-to-br
                from-emerald-500/20
                to-cyan-500/10
                shadow-[0_0_35px_rgba(16,185,129,0.15)]
              "
            >
              <Sparkles
                size={14}
                className="text-emerald-200"
              />
            </span>

            <span
              className="
                text-[10px]
                font-semibold
                tracking-[0.25em]
                text-emerald-200/65
              "
            >
              GET IN TOUCH
            </span>

          </div>


          {/* HEADING */}

          <h1
            className="
              max-w-4xl
              text-5xl
              font-semibold
              leading-[0.98]
              tracking-[-0.055em]
              sm:text-6xl
              md:text-7xl
            "
          >
            Let's build something{" "}

            <span
              className="
                block
                bg-gradient-to-r
                from-emerald-200
                via-emerald-400
                to-cyan-400
                bg-clip-text
                text-transparent
              "
            >
              meaningful.
            </span>

          </h1>


          {/* DESCRIPTION */}

          <p
            className="
              mt-7
              max-w-xl
              text-base
              leading-7
              text-white/40
              sm:text-lg
            "
          >
            Have an idea, a business challenge, or a digital
            product in mind? Tell us what you're working on.
          </p>

        </motion.div>


        {/* =====================================================
            CONTACT GRID
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

          {/* =====================================================
              LEFT INFORMATION
          ===================================================== */}

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

            {/* CONTACT CARD */}

            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/[0.08]
                bg-white/[0.025]
                p-7
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-emerald-300/[0.18]
                hover:bg-emerald-400/[0.025]
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
                  bg-emerald-500/[0.055]
                  blur-[90px]
                  transition-all
                  duration-500
                  group-hover:bg-emerald-500/[0.10]
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
                  bg-cyan-500/[0.035]
                  blur-[80px]
                "
              />


              <span
                className="
                  relative
                  text-[10px]
                  font-semibold
                  tracking-[0.2em]
                  text-emerald-200/30
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
                      group-hover/item:border-emerald-300/25
                      group-hover/item:bg-emerald-400/[0.06]
                    "
                  >
                    <Mail
                      size={17}
                      className="text-emerald-200"
                    />
                  </div>

                  <div>

                    <p className="text-xs text-white/30">
                      Email
                    </p>

                    <p className="mt-1 text-sm text-white/75">
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
                      group-hover/item:bg-cyan-400/[0.06]
                    "
                  >
                    <Phone
                      size={17}
                      className="text-cyan-200"
                    />
                  </div>

                  <div>

                    <p className="text-xs text-white/30">
                      Phone
                    </p>

                    <p className="mt-1 text-sm text-white/75">
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
                      group-hover/item:border-emerald-300/25
                      group-hover/item:bg-emerald-400/[0.06]
                    "
                  >
                    <MapPin
                      size={17}
                      className="text-emerald-200"
                    />
                  </div>

                  <div>

                    <p className="text-xs text-white/30">
                      Location
                    </p>

                    <p className="mt-1 text-sm text-white/75">
                      India
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* WHAT WE DO CARD */}

            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-emerald-300/[0.12]
                bg-gradient-to-br
                from-emerald-500/[0.075]
                via-white/[0.025]
                to-cyan-500/[0.035]
                p-7
                transition-all
                duration-500
                hover:border-emerald-300/[0.20]
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
                  bg-emerald-500/[0.08]
                  blur-3xl
                  transition-all
                  duration-500
                  group-hover:bg-emerald-500/[0.13]
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
                    text-emerald-200/30
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
                    text-white/85
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
                    text-white/35
                  "
                >
                  From first idea to a scalable digital
                  product, we're here to help.
                </p>


                {/* SMALL LINE */}

                <div
                  className="
                    mt-7
                    flex
                    items-center
                    gap-2
                  "
                >

                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-emerald-300
                      shadow-[0_0_12px_rgba(110,231,183,0.8)]
                    "
                  />

                  <span
                    className="
                      text-[9px]
                      font-medium
                      tracking-[0.2em]
                      text-emerald-200/35
                    "
                  >
                    TECHNOLOGY • DESIGN • AI
                  </span>

                </div>

              </div>

            </div>

          </motion.div>


          {/* =====================================================
              FORM
          ===================================================== */}

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
              border-white/[0.08]
              bg-white/[0.025]
              p-6
              backdrop-blur-xl
              transition-all
              duration-500
              hover:border-emerald-300/[0.12]
              sm:p-8
              lg:p-10
            "
          >

            {/* FORM GLOW */}

            <div
              className="
                pointer-events-none
                absolute
                right-[-100px]
                top-[-100px]
                h-[300px]
                w-[300px]
                rounded-full
                bg-emerald-500/[0.045]
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
                bg-cyan-500/[0.025]
                blur-[100px]
              "
            />


            {/* FORM HEADER */}

            <div className="relative mb-8">

              <span
                className="
                  text-[10px]
                  font-semibold
                  tracking-[0.2em]
                  text-emerald-300/50
                "
              >
                START A CONVERSATION
              </span>

              <h2
                className="
                  mt-3
                  text-2xl
                  font-semibold
                  tracking-[-0.04em]
                "
              >
                Tell us about your project.
              </h2>

              <p
                className="
                  mt-2
                  text-sm
                  text-white/30
                "
              >
                Share a few details and we'll take it from there.
              </p>

            </div>


            {/* STATUS */}

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


            {/* FORM */}

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
                      text-white/40
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
                      bg-black/30
                      px-4
                      py-3.5
                      text-sm
                      text-white
                      outline-none
                      transition-all
                      placeholder:text-white/20
                      hover:border-white/15
                      focus:border-emerald-400/35
                      focus:bg-emerald-400/[0.025]
                      focus:ring-1
                      focus:ring-emerald-400/10
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
                      text-white/40
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
                      bg-black/30
                      px-4
                      py-3.5
                      text-sm
                      text-white
                      outline-none
                      transition-all
                      placeholder:text-white/20
                      hover:border-white/15
                      focus:border-emerald-400/35
                      focus:bg-emerald-400/[0.025]
                      focus:ring-1
                      focus:ring-emerald-400/10
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
                      text-white/40
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
                      bg-black/30
                      px-4
                      py-3.5
                      text-sm
                      text-white
                      outline-none
                      transition-all
                      placeholder:text-white/20
                      hover:border-white/15
                      focus:border-cyan-400/35
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
                      text-white/40
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
                      bg-black/30
                      px-4
                      py-3.5
                      text-sm
                      text-white
                      outline-none
                      transition-all
                      placeholder:text-white/20
                      hover:border-white/15
                      focus:border-cyan-400/35
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
                    text-white/40
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
                    bg-[#080b0a]
                    px-4
                    py-3.5
                    text-sm
                    text-white/70
                    outline-none
                    transition-all
                    hover:border-white/15
                    focus:border-emerald-400/35
                    focus:bg-[#090e0c]
                    focus:ring-1
                    focus:ring-emerald-400/10
                  "
                >

                  <option
                    value=""
                    className="bg-[#080b0a] text-white/50"
                  >
                    Select a service
                  </option>

                  <option
                    value="Web Development"
                    className="bg-[#080b0a] text-white"
                  >
                    Web Development
                  </option>

                  <option
                    value="AI Solutions"
                    className="bg-[#080b0a] text-white"
                  >
                    AI Solutions
                  </option>

                  <option
                    value="Mobile Apps"
                    className="bg-[#080b0a] text-white"
                  >
                    Mobile Apps
                  </option>

                  <option
                    value="ERP & CRM"
                    className="bg-[#080b0a] text-white"
                  >
                    ERP & CRM
                  </option>

                  <option
                    value="UI / UX & Branding"
                    className="bg-[#080b0a] text-white"
                  >
                    UI / UX & Branding
                  </option>

                  <option
                    value="Digital Growth"
                    className="bg-[#080b0a] text-white"
                  >
                    Digital Growth
                  </option>

                  <option
                    value="Other / Custom Requirement"
                    className="bg-[#080b0a] text-white"
                  >
                    Other / Custom Requirement
                  </option>

                </select>

              </div>


              {/* CUSTOM SERVICE */}

              {formData.service === "Other / Custom Requirement" && (
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
                      text-white/40
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
                      bg-black/30
                      px-4
                      py-3.5
                      text-sm
                      leading-6
                      text-white
                      outline-none
                      transition-all
                      placeholder:text-white/20
                      hover:border-white/15
                      focus:border-emerald-400/35
                      focus:bg-emerald-400/[0.025]
                      focus:ring-1
                      focus:ring-emerald-400/10
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
                    text-white/40
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
                    bg-black/30
                    px-4
                    py-3.5
                    text-sm
                    leading-6
                    text-white
                    outline-none
                    transition-all
                    placeholder:text-white/20
                    hover:border-white/15
                    focus:border-emerald-400/35
                    focus:bg-emerald-400/[0.025]
                    focus:ring-1
                    focus:ring-emerald-400/10
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
                  from-emerald-500
                  to-teal-500
                  px-6
                  py-4
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_12px_45px_rgba(16,185,129,0.16)]
                  transition-all
                  duration-300
                  hover:scale-[1.01]
                  hover:shadow-[0_18px_60px_rgba(16,185,129,0.26)]
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
                        text-emerald-600
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

      </section>


      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section className="relative mx-auto mt-24 max-w-7xl">

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
            overflow-hidden
            rounded-[30px]
            border
            border-emerald-300/[0.10]
            bg-gradient-to-r
            from-emerald-500/[0.045]
            via-white/[0.015]
            to-cyan-500/[0.035]
            px-7
            py-8
            sm:px-10
            sm:py-9
          "
        >

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
              bg-emerald-500/[0.04]
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
                  text-emerald-300/55
                "
              >
                READY WHEN YOU ARE
              </span>

              <p
                className="
                  mt-2
                  text-sm
                  text-white/45
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
                text-white/60
                transition-all
                duration-300
                hover:border-emerald-300/25
                hover:bg-emerald-400/[0.06]
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


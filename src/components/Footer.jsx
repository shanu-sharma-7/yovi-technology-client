
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import yoviLogo from "../assets/yovi-logo.png";

function Footer() {
  const services = [
    "Web Development",
    "Mobile Apps",
    "AI Solutions",
    "ERP & CRM",
    "Digital Marketing",
    "UI/UX & Branding",
  ];

  const companyLinks = [
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Industries",
      path: "/industries",
    },
    {
      name: "Technologies",
      path: "/technologies",
    },
    {
      name: "Process",
      path: "/process",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#030305] text-white">

      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Main violet glow */}
        <div
          className="
            absolute
            left-[8%]
            top-[-220px]
            h-[520px]
            w-[520px]
            rounded-full
            bg-violet-600/[0.08]
            blur-[150px]
          "
        />

        {/* Blue glow */}
        <div
          className="
            absolute
            right-[-120px]
            top-[25%]
            h-[480px]
            w-[480px]
            rounded-full
            bg-blue-600/[0.06]
            blur-[150px]
          "
        />

        {/* Bottom violet glow */}
        <div
          className="
            absolute
            bottom-[-250px]
            left-1/3
            h-[500px]
            w-[500px]
            rounded-full
            bg-fuchsia-500/[0.04]
            blur-[160px]
          "
        />

        {/* Subtle center glow */}
        <div
          className="
            absolute
            left-1/2
            top-[35%]
            h-[300px]
            w-[300px]
            -translate-x-1/2
            rounded-full
            bg-violet-400/[0.025]
            blur-[120px]
          "
        />

      </div>


      {/* =========================================
          MAIN FOOTER
      ========================================= */}

      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-20 sm:px-8 lg:px-12">


        {/* =====================================
            TOP CTA
        ===================================== */}

        <div
          className="
            relative
            grid
            gap-10
            overflow-hidden
            border-b
            border-white/[0.08]
            pb-16
            lg:grid-cols-[1.2fr_0.8fr]
            lg:items-end
          "
        >

          {/* CTA glow */}
          <div
            className="
              pointer-events-none
              absolute
              -left-32
              -top-32
              h-[300px]
              w-[300px]
              rounded-full
              bg-violet-500/[0.06]
              blur-[100px]
            "
          />

          <div className="relative">

            <span
              className="
                inline-flex
                items-center
                gap-2
                text-[10px]
                font-medium
                tracking-[0.25em]
                text-violet-300/70
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-violet-300 shadow-lg shadow-violet-400/50" />

              HAVE A PROJECT IN MIND?
            </span>

            <h2
              className="
                mt-5
                max-w-3xl
                text-4xl
                font-semibold
                leading-[1.05]
                tracking-[-0.05em]
                sm:text-5xl
                md:text-6xl
              "
            >
              Let's build something

              <span className="block bg-gradient-to-r from-white/40 via-white/25 to-transparent bg-clip-text text-transparent">
                meaningful.
              </span>
            </h2>

          </div>


          <div className="relative lg:flex lg:justify-end">

            <Link
              to="/contact"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-white/10
                bg-white
                px-6
                py-3.5
                text-sm
                font-semibold
                text-black
                shadow-[0_0_35px_rgba(139,92,246,0.12)]
                transition-all
                duration-300
                hover:scale-[1.04]
                hover:shadow-[0_0_45px_rgba(139,92,246,0.22)]
              "
            >
              Start a Project

              <span
                className="
                  flex
                  h-6
                  w-6
                  items-center
                  justify-center
                  rounded-full
                  bg-[#080808]
                  text-white
                  transition-all
                  duration-300
                  group-hover:rotate-45
                  group-hover:bg-violet-600
                "
              >
                <ArrowUpRight size={13} />
              </span>

            </Link>

          </div>

        </div>


        {/* =====================================
            FOOTER GRID
        ===================================== */}

        <div
          className="
            grid
            gap-12
            py-16
            sm:grid-cols-2
            lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]
          "
        >


          {/* =================================
              BRAND
          ================================= */}

          <div>

            <Link
              to="/"
              className="group inline-flex items-center gap-3"
            >

              {/* Logo */}
              <div
                className="
                  relative
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-white
                  shadow-[0_0_30px_rgba(139,92,246,0.12)]
                  transition-all
                  duration-300
                  group-hover:scale-105
                  group-hover:border-violet-300/30
                  group-hover:shadow-[0_0_35px_rgba(139,92,246,0.22)]
                "
              >

                <img
                  src={yoviLogo}
                  alt="YoVi Technologies"
                  className="h-full w-full object-contain p-1.5"
                />

                {/* Shine */}
                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    -translate-x-full
                    bg-gradient-to-r
                    from-transparent
                    via-black/10
                    to-transparent
                    transition-transform
                    duration-700
                    group-hover:translate-x-full
                  "
                />

              </div>


              <div className="leading-none">

                <span
                  className="
                    block
                    text-lg
                    font-semibold
                    tracking-[-0.03em]
                  "
                >
                  YoVi
                </span>

                <span
                  className="
                    mt-1
                    block
                    text-[7px]
                    tracking-[0.28em]
                    text-violet-300/40
                  "
                >
                  TECHNOLOGIES
                </span>

              </div>

            </Link>


            <p
              className="
                mt-6
                max-w-sm
                text-sm
                leading-7
                text-white/30
              "
            >
              Technology, design and AI solutions that help
              businesses build, grow and operate better.
            </p>


            <div className="mt-7">

              <span
                className="
                  text-[9px]
                  tracking-[0.22em]
                  text-violet-300/40
                "
              >
                INNOVATE • INTEGRATE • INSPIRE
              </span>

            </div>

          </div>


          {/* =================================
              SERVICES
          ================================= */}

          <div>

            <span
              className="
                text-[9px]
                font-medium
                tracking-[0.22em]
                text-violet-300/50
              "
            >
              SERVICES
            </span>

            <div className="mt-6 space-y-3">

              {services.map((service) => (

                <div
                  key={service}
                  className="
                    cursor-default
                    text-sm
                    text-white/35
                    transition-all
                    duration-300
                    hover:translate-x-1
                    hover:text-violet-200
                  "
                >
                  {service}
                </div>

              ))}

            </div>

          </div>


          {/* =================================
              COMPANY
          ================================= */}

          <div>

            <span
              className="
                text-[9px]
                font-medium
                tracking-[0.22em]
                text-violet-300/50
              "
            >
              COMPANY
            </span>

            <div className="mt-6 space-y-3">

              {companyLinks.map((link) => (

                <Link
                  key={link.path}
                  to={link.path}
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-white/35
                    transition-all
                    duration-300
                    hover:translate-x-1
                    hover:text-white
                  "
                >

                  <span
                    className="
                      h-1
                      w-1
                      rounded-full
                      bg-violet-400/0
                      transition-all
                      duration-300
                      group-hover:bg-violet-300
                    "
                  />

                  {link.name}

                </Link>

              ))}

            </div>

          </div>


          {/* =================================
              CONTACT
          ================================= */}

          <div>

            <span
              className="
                text-[9px]
                font-medium
                tracking-[0.22em]
                text-violet-300/50
              "
            >
              GET IN TOUCH
            </span>


            <div className="mt-6 space-y-5">


              {/* Email */}

              <a
                href="mailto:Info@yovitechnologies.com"
                className="group flex items-start gap-3"
              >

                <div
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-white/[0.07]
                    bg-white/[0.025]
                    transition-all
                    duration-300
                    group-hover:border-violet-300/20
                    group-hover:bg-violet-400/10
                  "
                >
                  <Mail
                    size={14}
                    className="
                      text-white/30
                      transition-colors
                      group-hover:text-violet-300
                    "
                  />
                </div>

                <span
                  className="
                    pt-1.5
                    text-sm
                    text-white/35
                    transition-colors
                    group-hover:text-white
                  "
                >
                  Info@yovitechnologies.com
                </span>

              </a>


              {/* Phone */}

              <a
                href="tel:7082341255"
                className="group flex items-center gap-3"
              >

                <div
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-white/[0.07]
                    bg-white/[0.025]
                    transition-all
                    duration-300
                    group-hover:border-violet-300/20
                    group-hover:bg-violet-400/10
                  "
                >
                  <Phone
                    size={14}
                    className="
                      text-white/30
                      transition-colors
                      group-hover:text-violet-300
                    "
                  />
                </div>

                <span
                  className="
                    text-sm
                    text-white/35
                    transition-colors
                    group-hover:text-white
                  "
                >
                  +91 70823 41255
                </span>

              </a>


              {/* Location */}

              <div className="flex items-start gap-3">

                <div
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-white/[0.07]
                    bg-white/[0.025]
                  "
                >
                  <MapPin
                    size={14}
                    className="text-white/30"
                  />
                </div>

                <span
                  className="
                    pt-1
                    text-sm
                    leading-6
                    text-white/35
                  "
                >
                  Satnali, Mahendergarh,
                  <br />
                  Haryana – 123024, India
                </span>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================
            BOTTOM BAR
        ===================================== */}

        <div
          className="
            flex
            flex-col
            gap-5
            border-t
            border-white/[0.08]
            pt-7
            text-[10px]
            text-white/20
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <span>
            © {new Date().getFullYear()} YoVi Technologies. All rights reserved.
          </span>


          <div className="flex gap-6">

            <span
              className="
                cursor-pointer
                transition-colors
                duration-300
                hover:text-violet-300/70
              "
            >
              Privacy Policy
            </span>

            <span
              className="
                cursor-pointer
                transition-colors
                duration-300
                hover:text-violet-300/70
              "
            >
              Terms
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;


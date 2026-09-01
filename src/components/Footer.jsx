
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
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-[#020403] text-white">

      {/* =====================================================
          AMBIENT BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Emerald atmosphere */}
        <div
          className="
            absolute
            left-[-180px]
            top-[-180px]
            h-[520px]
            w-[520px]
            rounded-full
            bg-emerald-500/[0.045]
            blur-[160px]
          "
        />

        {/* Cyan atmosphere */}
        <div
          className="
            absolute
            right-[-180px]
            top-[25%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-cyan-500/[0.035]
            blur-[160px]
          "
        />

        {/* Bottom emerald glow */}
        <div
          className="
            absolute
            bottom-[-260px]
            left-1/2
            h-[550px]
            w-[550px]
            -translate-x-1/2
            rounded-full
            bg-emerald-500/[0.035]
            blur-[160px]
          "
        />

        {/* Subtle center glow */}
        <div
          className="
            absolute
            left-1/2
            top-[35%]
            h-[320px]
            w-[320px]
            -translate-x-1/2
            rounded-full
            bg-teal-500/[0.025]
            blur-[130px]
          "
        />

      </div>


      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-20 sm:px-8 lg:px-12">

        {/* ===================================================
            CTA
        =================================================== */}

        <div
          className="
            relative
            grid
            gap-10
            overflow-hidden
            border-b
            border-white/[0.07]
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
              h-[320px]
              w-[320px]
              rounded-full
              bg-emerald-500/[0.05]
              blur-[110px]
            "
          />

          <div className="relative">

            <span
              className="
                inline-flex
                items-center
                gap-2
                text-[10px]
                font-semibold
                tracking-[0.25em]
                text-emerald-300/70
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-emerald-300
                  shadow-[0_0_18px_rgba(110,231,183,0.8)]
                "
              />

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

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-emerald-200/75
                  via-white/40
                  to-cyan-300/45
                  bg-clip-text
                  text-transparent
                "
              >
                meaningful.
              </span>

            </h2>

          </div>


          {/* CTA BUTTON */}

          <div className="relative lg:flex lg:justify-end">

            <Link
              to="/contact"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-gradient-to-r
                from-emerald-500
                to-teal-500
                px-6
                py-3.5
                text-sm
                font-semibold
                text-white
                shadow-[0_12px_45px_rgba(16,185,129,0.18)]
                transition-all
                duration-300
                hover:scale-[1.04]
                hover:shadow-[0_18px_60px_rgba(16,185,129,0.30)]
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
                  bg-white
                  text-emerald-600
                  transition-all
                  duration-300
                  group-hover:rotate-45
                "
              >
                <ArrowUpRight size={13} />
              </span>

            </Link>

          </div>

        </div>


        {/* ===================================================
            FOOTER GRID
        =================================================== */}

        <div
          className="
            grid
            gap-12
            py-16
            sm:grid-cols-2
            lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]
          "
        >

          {/* =================================================
              BRAND
          ================================================= */}

          <div>

            <Link
              to="/"
              className="group inline-flex items-center gap-3"
            >

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
                  border-emerald-300/[0.12]
                  bg-white
                  shadow-[0_0_30px_rgba(16,185,129,0.08)]
                  transition-all
                  duration-300
                  group-hover:scale-105
                  group-hover:border-emerald-300/30
                  group-hover:shadow-[0_0_40px_rgba(16,185,129,0.18)]
                "
              >

                <img
                  src={yoviLogo}
                  alt="YoVi Technologies"
                  className="h-full w-full object-contain p-1.5"
                />

                {/* Logo shine */}

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
                    text-emerald-200/40
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
                  text-emerald-200/40
                "
              >
                INNOVATE • INTEGRATE • INSPIRE
              </span>

            </div>

          </div>


          {/* =================================================
              SERVICES
          ================================================= */}

          <div>

            <span
              className="
                text-[9px]
                font-semibold
                tracking-[0.22em]
                text-emerald-300/55
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
                    hover:text-emerald-100
                  "
                >
                  {service}
                </div>

              ))}

            </div>

          </div>


          {/* =================================================
              COMPANY
          ================================================= */}

          <div>

            <span
              className="
                text-[9px]
                font-semibold
                tracking-[0.22em]
                text-emerald-300/55
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
                      bg-emerald-300/0
                      transition-all
                      duration-300
                      group-hover:bg-emerald-300
                      group-hover:shadow-[0_0_8px_rgba(110,231,183,0.7)]
                    "
                  />

                  {link.name}

                </Link>

              ))}

            </div>

          </div>


          {/* =================================================
              CONTACT
          ================================================= */}

          <div>

            <span
              className="
                text-[9px]
                font-semibold
                tracking-[0.22em]
                text-emerald-300/55
              "
            >
              GET IN TOUCH
            </span>


            <div className="mt-6 space-y-5">

              {/* EMAIL */}

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
                    group-hover:border-emerald-300/20
                    group-hover:bg-emerald-400/[0.07]
                  "
                >

                  <Mail
                    size={14}
                    className="
                      text-white/30
                      transition-colors
                      group-hover:text-emerald-200
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


              {/* PHONE */}

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
                    group-hover:border-emerald-300/20
                    group-hover:bg-emerald-400/[0.07]
                  "
                >

                  <Phone
                    size={14}
                    className="
                      text-white/30
                      transition-colors
                      group-hover:text-emerald-200
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


              {/* LOCATION */}

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


        {/* ===================================================
            BOTTOM BAR
        =================================================== */}

        <div
          className="
            flex
            flex-col
            gap-5
            border-t
            border-white/[0.07]
            pt-7
            text-[10px]
            text-white/20
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <span>
            © {new Date().getFullYear()} YoVi Technologies.
            All rights reserved.
          </span>


          <div className="flex gap-6">

            <Link
              to="/privacy"
              className="
                transition-colors
                duration-300
                hover:text-emerald-200/70
              "
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="
                transition-colors
                duration-300
                hover:text-emerald-200/70
              "
            >
              Terms
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;


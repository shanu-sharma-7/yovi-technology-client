import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import yoviLogo from "../assets/yovi-logo.png";

function Footer() {
  const services = [
    "Web Development",
    "Mobile App Development",
    "AI Solutions",
    "ERP & CRM Development",
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
    <footer className="relative overflow-hidden border-t border-blue-200/[0.10] bg-[#07152f] text-white">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Clear technology image */}

        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2200&q=95"
          alt=""
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
            opacity-[0.16]
          "
        />

        {/* Main dark overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-[#07152f]/70
            via-[#07152f]/88
            to-[#07152f]
          "
        />

        {/* Blue atmosphere */}

        <div
          className="
            absolute
            left-[-180px]
            top-[-180px]
            h-[600px]
            w-[600px]
            rounded-full
            bg-blue-500/[0.13]
            blur-[150px]
          "
        />

        {/* Cyan atmosphere */}

        <div
          className="
            absolute
            right-[-180px]
            top-[20%]
            h-[550px]
            w-[550px]
            rounded-full
            bg-cyan-400/[0.09]
            blur-[150px]
          "
        />

        {/* Bottom blue glow */}

        <div
          className="
            absolute
            bottom-[-250px]
            left-1/2
            h-[600px]
            w-[600px]
            -translate-x-1/2
            rounded-full
            bg-blue-500/[0.08]
            blur-[150px]
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

      </div>


      {/* =====================================================
          MAIN
      ===================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-20 sm:px-8 lg:px-12">


        {/* ===================================================
            CTA
        =================================================== */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-blue-200/[0.12]
            bg-[#0a1d3d]/60
            px-7
            py-10
            shadow-[0_30px_100px_rgba(0,0,0,0.25)]
            backdrop-blur-xl
            sm:px-10
            sm:py-12
            lg:px-12
            lg:py-14
          "
        >

          {/* CTA image */}

          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1800&q=95"
            alt=""
            className="
              pointer-events-none
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
              opacity-[0.10]
            "
          />

          {/* CTA overlay */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-r
              from-[#07152f]
              via-[#07152f]/80
              to-[#07152f]/50
            "
          />

          {/* Blue glow */}

          <div
            className="
              pointer-events-none
              absolute
              -right-32
              -top-32
              h-[380px]
              w-[380px]
              rounded-full
              bg-blue-500/[0.16]
              blur-[120px]
            "
          />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

            {/* CTA TEXT */}

            <div>

              <div className="mb-5 flex items-center gap-3">

                <span
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-cyan-300/25
                    bg-cyan-400/[0.08]
                    shadow-[0_0_30px_rgba(34,211,238,0.15)]
                  "
                >
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-cyan-300
                      shadow-[0_0_15px_rgba(34,211,238,0.9)]
                    "
                  />
                </span>

                <span
                  className="
                    text-[10px]
                    font-semibold
                    tracking-[0.28em]
                    text-cyan-200/85
                  "
                >
                  HAVE A PROJECT IN MIND?
                </span>

              </div>


              <h2
                className="
                  max-w-3xl
                  text-4xl
                  font-semibold
                  leading-[1.05]
                  tracking-[-0.045em]
                  text-white
                  sm:text-5xl
                  md:text-6xl
                "
              >
                Let's build something

                <span
                  className="
                    block
                    bg-gradient-to-r
                    from-blue-200
                    via-white
                    to-cyan-200
                    bg-clip-text
                    text-transparent
                  "
                >
                  worth building.
                </span>
              </h2>


              <p
                className="
                  mt-5
                  max-w-xl
                  text-sm
                  leading-7
                  text-blue-50/65
                  sm:text-base
                "
              >
                From websites and mobile apps to AI-powered systems,
                ERP, CRM and digital growth — let's create something
                that moves your business forward.
              </p>

            </div>


            {/* CTA BUTTON */}

            <div className="relative">

              <Link
                to="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-gradient-to-r
                  from-blue-500
                  via-blue-500
                  to-cyan-500
                  px-7
                  py-4
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_15px_60px_rgba(37,99,235,0.30)]
                  transition-all
                  duration-300
                  hover:scale-[1.04]
                  hover:shadow-[0_20px_80px_rgba(34,211,238,0.28)]
                "
              >
                Start a Project

                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-blue-600
                    transition-all
                    duration-300
                    group-hover:rotate-45
                  "
                >
                  <ArrowUpRight size={14} />
                </span>

              </Link>

            </div>

          </div>

        </div>


        {/* ===================================================
            FOOTER GRID
        =================================================== */}

        <div
          className="
            grid
            gap-12
            border-b
            border-white/[0.08]
            py-16
            sm:grid-cols-2
            lg:grid-cols-[1.35fr_0.85fr_0.75fr_1fr]
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

              {/* LOGO */}

              <div
                className="
                  relative
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-2xl
                  border
                  border-blue-200/[0.18]
                  bg-white
                  shadow-[0_0_35px_rgba(59,130,246,0.14)]
                  transition-all
                  duration-300
                  group-hover:scale-105
                  group-hover:border-cyan-300/40
                  group-hover:shadow-[0_0_45px_rgba(34,211,238,0.20)]
                "
              >

                <img
                  src={yoviLogo}
                  alt="YoVi Technologies"
                  className="
                    h-full
                    w-full
                    object-contain
                    p-1.5
                  "
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


              {/* BRAND NAME */}

              <div className="leading-none">

                <span
                  className="
                    block
                    text-xl
                    font-semibold
                    tracking-[-0.035em]
                    text-white
                  "
                >
                  YoVi
                </span>

                <span
                  className="
                    mt-1.5
                    block
                    text-[7px]
                    font-medium
                    tracking-[0.30em]
                    text-cyan-200/55
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
                text-blue-50/55
              "
            >
              Technology, design and AI solutions that help
              businesses build, grow and operate better.
            </p>


            {/* TAGLINE */}

            <div className="mt-7">

              <span
                className="
                  rounded-full
                  border
                  border-blue-300/[0.12]
                  bg-blue-400/[0.04]
                  px-3
                  py-1.5
                  text-[9px]
                  font-medium
                  tracking-[0.20em]
                  text-cyan-200/55
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
                text-[10px]
                font-semibold
                tracking-[0.22em]
                text-cyan-200/75
              "
            >
              SERVICES
            </span>


            <div className="mt-6 space-y-3.5">

              {services.map((service) => (

                <div
                  key={service}
                  className="
                    group
                    flex
                    cursor-default
                    items-center
                    gap-2.5
                    text-sm
                    font-medium
                    text-blue-50/55
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
                      shrink-0
                      rounded-full
                      bg-cyan-300/20
                      transition-all
                      duration-300
                      group-hover:bg-cyan-300
                      group-hover:shadow-[0_0_10px_rgba(34,211,238,0.8)]
                    "
                  />

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
                text-[10px]
                font-semibold
                tracking-[0.22em]
                text-cyan-200/75
              "
            >
              COMPANY
            </span>


            <div className="mt-6 space-y-3.5">

              {companyLinks.map((link) => (

                <Link
                  key={link.path}
                  to={link.path}
                  className="
                    group
                    flex
                    items-center
                    gap-2.5
                    text-sm
                    font-medium
                    text-blue-50/55
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
                      shrink-0
                      rounded-full
                      bg-blue-300/20
                      transition-all
                      duration-300
                      group-hover:bg-blue-300
                      group-hover:shadow-[0_0_10px_rgba(59,130,246,0.8)]
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
                text-[10px]
                font-semibold
                tracking-[0.22em]
                text-cyan-200/75
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
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-blue-200/[0.10]
                    bg-blue-400/[0.04]
                    transition-all
                    duration-300
                    group-hover:border-cyan-300/30
                    group-hover:bg-cyan-400/[0.08]
                  "
                >

                  <Mail
                    size={15}
                    className="
                      text-blue-100/45
                      transition-colors
                      group-hover:text-cyan-200
                    "
                  />

                </div>


                <span
                  className="
                    pt-1.5
                    text-sm
                    font-medium
                    text-blue-50/55
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
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-blue-200/[0.10]
                    bg-blue-400/[0.04]
                    transition-all
                    duration-300
                    group-hover:border-blue-300/30
                    group-hover:bg-blue-400/[0.08]
                  "
                >

                  <Phone
                    size={15}
                    className="
                      text-blue-100/45
                      transition-colors
                      group-hover:text-blue-200
                    "
                  />

                </div>


                <span
                  className="
                    text-sm
                    font-medium
                    text-blue-50/55
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
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-blue-200/[0.10]
                    bg-blue-400/[0.04]
                  "
                >

                  <MapPin
                    size={15}
                    className="text-blue-100/45"
                  />

                </div>


                <span
                  className="
                    pt-1
                    text-sm
                    font-medium
                    leading-6
                    text-blue-50/55
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
            pt-7
            text-[11px]
            font-medium
            text-blue-100/35
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <span>
            © {new Date().getFullYear()} YoVi Technologies.
            All rights reserved.
          </span>


          <div className="flex gap-7">

            <Link
              to="/privacy"
              className="
                transition-colors
                duration-300
                hover:text-cyan-200
              "
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="
                transition-colors
                duration-300
                hover:text-cyan-200
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
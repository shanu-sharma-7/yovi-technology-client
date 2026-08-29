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
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-[#050505] text-white">

      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-[15%] top-[-180px] h-[400px] w-[400px] rounded-full bg-violet-600/[0.06] blur-[130px]" />

        <div className="absolute bottom-[-200px] right-[10%] h-[400px] w-[400px] rounded-full bg-blue-500/[0.04] blur-[130px]" />

      </div>


      {/* =========================================
          MAIN FOOTER
      ========================================= */}

      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-20 sm:px-8 lg:px-12">

        {/* =====================================
            TOP CTA
        ===================================== */}

        <div className="grid gap-10 border-b border-white/[0.07] pb-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">

          <div>

            <span className="text-[10px] font-medium tracking-[0.25em] text-violet-300/60">
              HAVE A PROJECT IN MIND?
            </span>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl md:text-6xl">
              Let's build something
              <span className="text-white/30"> meaningful.</span>
            </h2>

          </div>


          <div className="lg:flex lg:justify-end">

            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.03]"
            >
              Start a Project

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={13} />
              </span>

            </Link>

          </div>

        </div>


        {/* =====================================
            FOOTER GRID
        ===================================== */}

        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">

          {/* =================================
              BRAND
          ================================= */}

          <div>

            <Link
              to="/"
              className="group inline-flex items-center gap-3"
            >

            <div
  className="
    relative flex h-10 w-10
    items-center justify-center
    overflow-hidden rounded-xl
    bg-white
    shadow-lg shadow-white/5
    transition-transform duration-300
    group-hover:scale-105
  "
>
  <img
    src={yoviLogo}
    alt="YoVi Technologies"
    className="h-full w-full object-contain p-1.5"
  />

  <span
    className="
      pointer-events-none
      absolute inset-0
      -translate-x-full
      bg-gradient-to-r
      from-transparent
      via-black/10
      to-transparent
      transition-transform duration-700
      group-hover:translate-x-full
    "
  />
</div>


              <div className="leading-none">

                <span className="block text-lg font-semibold tracking-[-0.03em]">
                  YoVi
                </span>

                <span className="mt-1 block text-[7px] tracking-[0.28em] text-white/30">
                  TECHNOLOGIES
                </span>

              </div>

            </Link>


            <p className="mt-6 max-w-sm text-sm leading-7 text-white/30">
              Technology, design and AI solutions that help
              businesses build, grow and operate better.
            </p>


            <div className="mt-7">

              <span className="text-[9px] tracking-[0.22em] text-white/20">
                INNOVATE • INTEGRATE • INSPIRE
              </span>

            </div>

          </div>


          {/* =================================
              SERVICES
          ================================= */}

          <div>

            <span className="text-[9px] font-medium tracking-[0.22em] text-white/25">
              SERVICES
            </span>

            <div className="mt-6 space-y-3">

              {services.map((service) => (
                <div
                  key={service}
                  className="text-sm text-white/40 transition-colors duration-300 hover:text-white/70"
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

            <span className="text-[9px] font-medium tracking-[0.22em] text-white/25">
              COMPANY
            </span>

            <div className="mt-6 space-y-3">

              {companyLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-sm text-white/40 transition-colors duration-300 hover:text-white"
                >
                  {link.name}
                </Link>
              ))}

            </div>

          </div>


          {/* =================================
              CONTACT
          ================================= */}

          <div>

            <span className="text-[9px] font-medium tracking-[0.22em] text-white/25">
              GET IN TOUCH
            </span>


            <div className="mt-6 space-y-4">

              <a
                href="mailto:Info@yovitechnologies.com"
                className="group flex items-start gap-3"
              >

                <Mail
                  size={15}
                  className="mt-0.5 shrink-0 text-white/25 transition-colors group-hover:text-violet-300"
                />

                <span className="text-sm text-white/40 transition-colors group-hover:text-white">
                  Info@yovitechnologies.com
                </span>

              </a>


              <a
                href="tel:7082341255"
                className="group flex items-center gap-3"
              >

                <Phone
                  size={15}
                  className="shrink-0 text-white/25 transition-colors group-hover:text-violet-300"
                />

                <span className="text-sm text-white/40 transition-colors group-hover:text-white">
                  +91 70823 41255
                </span>

              </a>


              <div className="flex items-start gap-3">

                <MapPin
                  size={15}
                  className="mt-0.5 shrink-0 text-white/25"
                />

                <span className="text-sm leading-6 text-white/40">
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

        <div className="flex flex-col gap-5 border-t border-white/[0.07] pt-7 text-[10px] text-white/20 sm:flex-row sm:items-center sm:justify-between">

          <span>
            © {new Date().getFullYear()} YoVi Technologies. All rights reserved.
          </span>

          <div className="flex gap-6">

            <span className="transition-colors hover:text-white/50">
              Privacy Policy
            </span>

            <span className="transition-colors hover:text-white/50">
              Terms
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
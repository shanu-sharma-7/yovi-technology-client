
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import yoviLogo from "../assets/yovi-logo.png";
import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
    When mobile menu opens, add extra top space to the page
    so the dropdown doesn't cover the hero content.
  */
  useEffect(() => {
    if (menuOpen) {
      document.body.style.setProperty(
        "--mobile-menu-space",
        "360px"
      );
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.style.setProperty(
        "--mobile-menu-space",
        "0px"
      );
      document.body.classList.remove("mobile-menu-open");
    }

    return () => {
      document.body.style.setProperty(
        "--mobile-menu-space",
        "0px"
      );
      document.body.classList.remove("mobile-menu-open");
    };
  }, [menuOpen]);

  const navLinks = [
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Services",
      path: "/services",
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
  ];

  const navLinkClass = ({ isActive }) =>
    `
      group relative flex items-center
      rounded-full
      px-4 py-2.5
      text-[13px]
      font-medium
      transition-all duration-300

      ${
        isActive
          ? `
            bg-gradient-to-r
            from-violet-500/[0.14]
            via-indigo-500/[0.10]
            to-blue-500/[0.08]

            text-white

            shadow-[inset_0_0_25px_rgba(139,92,246,0.06)]
            ring-1 ring-violet-300/[0.08]
          `
          : `
            text-white/45

            hover:bg-white/[0.035]
            hover:text-white/90
          `
      }
    `;

  return (
    <>
      {/* =====================================================
          MOBILE PAGE OFFSET
      ===================================================== */}

      <style>
        {`
          @media (max-width: 1023px) {
            body.mobile-menu-open > #root {
              padding-top: var(--mobile-menu-space);
              transition: padding-top 0.35s ease;
            }
          }

          @media (min-width: 1024px) {
            body.mobile-menu-open > #root {
              padding-top: 0;
            }
          }
        `}
      </style>


      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">

        <div className="mx-auto max-w-7xl">

          {/* =====================================================
              NAVBAR
          ===================================================== */}

          <nav
            className={`
              relative flex items-center justify-between
              rounded-full
              border
              px-3 py-2
              sm:px-4 sm:py-2.5
              transition-all duration-500

              ${
                scrolled
                  ? `
                    border-violet-300/[0.14]
                    bg-[#07070B]/[0.92]
                    shadow-[0_20px_70px_rgba(0,0,0,0.55)]
                    backdrop-blur-2xl
                  `
                  : `
                    border-white/[0.07]
                    bg-white/[0.025]
                    shadow-[0_10px_40px_rgba(0,0,0,0.12)]
                    backdrop-blur-xl
                  `
              }
            `}
          >

            {/* =====================================================
                SUBTLE NAVBAR GLOW
            ===================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                overflow-hidden
                rounded-full
              "
            >

              <div
                className="
                  absolute
                  left-[18%]
                  top-[-80px]
                  h-[160px]
                  w-[280px]
                  rounded-full
                  bg-violet-500/[0.055]
                  blur-[70px]
                "
              />

              <div
                className="
                  absolute
                  right-[15%]
                  top-[-80px]
                  h-[140px]
                  w-[240px]
                  rounded-full
                  bg-blue-500/[0.035]
                  blur-[70px]
                "
              />

            </div>


            {/* =====================================================
                LOGO
            ===================================================== */}

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="
                group
                relative
                z-10
                flex
                items-center
                gap-2.5
              "
            >

              <div
                className="
                  relative
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-xl
                  bg-white
                  shadow-[0_0_25px_rgba(139,92,246,0.15)]
                  transition-all
                  duration-300
                  group-hover:scale-105
                  group-hover:shadow-[0_0_35px_rgba(139,92,246,0.28)]
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

                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    -translate-x-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/50
                    to-transparent
                    transition-transform
                    duration-700
                    group-hover:translate-x-full
                  "
                />

              </div>


              {/* Brand */}

              <div className="hidden leading-none sm:block">

                <span
                  className="
                    block
                    bg-gradient-to-r
                    from-white
                    via-white
                    to-violet-200
                    bg-clip-text
                    text-transparent
                    text-[17px]
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
                    font-medium
                    tracking-[0.28em]
                    text-violet-200/40
                  "
                >
                  TECHNOLOGIES
                </span>

              </div>

            </Link>


            {/* =====================================================
                DESKTOP NAVIGATION
            ===================================================== */}

            <div className="relative z-10 hidden items-center gap-1 lg:flex">

              <NavLink
                to="/"
                className={navLinkClass}
              >
                {({ isActive }) => (
                  <>
                    Home

                    {isActive && (
                      <span
                        className="
                          absolute
                          bottom-1
                          left-1/2
                          h-1
                          w-1
                          -translate-x-1/2
                          rounded-full
                          bg-violet-300
                          shadow-[0_0_14px_rgba(167,139,250,0.9)]
                        "
                      />
                    )}
                  </>
                )}
              </NavLink>


              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={navLinkClass}
                >
                  {({ isActive }) => (
                    <>
                      {link.name}

                      {isActive && (
                        <span
                          className="
                            absolute
                            bottom-1
                            left-1/2
                            h-1
                            w-1
                            -translate-x-1/2
                            rounded-full
                            bg-violet-300
                            shadow-[0_0_14px_rgba(167,139,250,0.9)]
                          "
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}

            </div>


            {/* =====================================================
                DESKTOP CTA
            ===================================================== */}

            <Link
              to="/contact"
              className="
                group
                relative
                z-10
                hidden
                items-center
                gap-2
                overflow-hidden
                rounded-full
                bg-gradient-to-r
                from-violet-500
                via-indigo-500
                to-blue-500
                px-4
                py-2.5
                text-[13px]
                font-semibold
                text-white
                shadow-[0_8px_30px_rgba(99,102,241,0.18)]
                transition-all
                duration-300
                hover:scale-[1.03]
                hover:shadow-[0_12px_40px_rgba(139,92,246,0.32)]
                lg:flex
              "
            >

              <span
                className="
                  absolute
                  inset-0
                  -translate-x-full
                  bg-gradient-to-r
                  from-transparent
                  via-white/15
                  to-transparent
                  transition-transform
                  duration-700
                  group-hover:translate-x-full
                "
              />

              <span className="relative">
                Let's Talk
              </span>

              <span
                className="
                  relative
                  flex
                  h-5
                  w-5
                  items-center
                  justify-center
                  rounded-full
                  bg-white/15
                  text-white
                  backdrop-blur-sm
                  transition-transform
                  duration-300
                  group-hover:rotate-45
                "
              >
                <ArrowUpRight size={12} />
              </span>

            </Link>


            {/* =====================================================
                MOBILE MENU BUTTON
            ===================================================== */}

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="
                relative
                z-10
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-violet-300/[0.12]
                bg-gradient-to-br
                from-violet-500/[0.10]
                to-blue-500/[0.05]
                text-white
                shadow-[inset_0_0_15px_rgba(139,92,246,0.04)]
                transition-all
                duration-300
                hover:border-violet-300/[0.22]
                hover:bg-violet-500/[0.14]
                lg:hidden
              "
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
            >

              {menuOpen ? (
                <X size={19} />
              ) : (
                <Menu size={19} />
              )}

            </button>

          </nav>


          {/* =====================================================
              MOBILE MENU
          ===================================================== */}

          <div
            className={`
              overflow-hidden
              transition-all
              duration-300
              lg:hidden

              ${
                menuOpen
                  ? "mt-2 max-h-[600px] opacity-100"
                  : "pointer-events-none max-h-0 opacity-0"
              }
            `}
          >

            <div
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-violet-300/[0.10]
                bg-[#07070B]/[0.98]
                p-3
                shadow-[0_25px_80px_rgba(0,0,0,0.65)]
                backdrop-blur-2xl
              "
            >

              {/* Mobile glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  right-[-100px]
                  top-[-100px]
                  h-[250px]
                  w-[250px]
                  rounded-full
                  bg-violet-500/[0.07]
                  blur-[90px]
                "
              />


              <div className="relative z-10">

                {/* Home */}

                <NavLink
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `
                      block
                      rounded-2xl
                      px-4
                      py-3
                      text-sm
                      font-medium
                      transition-all
                      duration-300

                      ${
                        isActive
                          ? `
                            bg-gradient-to-r
                            from-violet-500/[0.14]
                            to-indigo-500/[0.08]
                            text-white
                            ring-1
                            ring-violet-400/[0.10]
                            shadow-[inset_0_0_25px_rgba(139,92,246,0.05)]
                          `
                          : `
                            text-white/55
                            hover:bg-white/[0.035]
                            hover:text-white
                          `
                      }
                    `
                  }
                >
                  Home
                </NavLink>


                {/* Mobile Links */}

                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `
                        block
                        rounded-2xl
                        px-4
                        py-3
                        text-sm
                        font-medium
                        transition-all
                        duration-300

                        ${
                          isActive
                            ? `
                              bg-gradient-to-r
                              from-violet-500/[0.14]
                              to-indigo-500/[0.08]
                              text-white
                              ring-1
                              ring-violet-400/[0.10]
                              shadow-[inset_0_0_25px_rgba(139,92,246,0.05)]
                            `
                            : `
                              text-white/55
                              hover:bg-white/[0.035]
                              hover:text-white
                            `
                        }
                      `
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}


                {/* Mobile CTA */}

                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="
                    group
                    relative
                    mt-2
                    flex
                    items-center
                    justify-center
                    gap-2
                    overflow-hidden
                    rounded-2xl
                    bg-gradient-to-r
                    from-violet-500
                    via-indigo-500
                    to-blue-500
                    px-4
                    py-3.5
                    text-sm
                    font-semibold
                    text-white
                    shadow-[0_10px_35px_rgba(99,102,241,0.20)]
                    transition-all
                    duration-300
                  "
                >

                  <span
                    className="
                      absolute
                      inset-0
                      -translate-x-full
                      bg-gradient-to-r
                      from-transparent
                      via-white/15
                      to-transparent
                      transition-transform
                      duration-700
                      group-hover:translate-x-full
                    "
                  />

                  <span className="relative">
                    Start a Project
                  </span>

                  <span
                    className="
                      relative
                      flex
                      h-5
                      w-5
                      items-center
                      justify-center
                      rounded-full
                      bg-white/15
                      transition-transform
                      duration-300
                      group-hover:rotate-45
                    "
                  >
                    <ArrowUpRight size={12} />
                  </span>

                </Link>

              </div>

            </div>

          </div>

        </div>

      </header>
    </>
  );
}

export default Navbar;


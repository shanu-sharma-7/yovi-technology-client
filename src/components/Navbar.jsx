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
      group relative rounded-full
      px-4 py-2.5
      text-[13px]
      font-medium
      transition-all duration-300

      ${
        isActive
          ? "text-white"
          : "text-white/45 hover:text-white"
      }
    `;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">

      <div className="mx-auto max-w-7xl">

        {/* =========================================
            NAVBAR
        ========================================= */}

        <nav
          className={`
            relative flex items-center justify-between
            rounded-full border
            px-3 py-2
            sm:px-4 sm:py-2.5
            transition-all duration-500

            ${
              scrolled
                ? `
                  border-white/[0.13]
                  bg-[#08080A]/90
                  shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                  backdrop-blur-2xl
                `
                : `
                  border-white/[0.07]
                  bg-white/[0.025]
                  backdrop-blur-xl
                `
            }
          `}
        >

          {/* =========================================
              LOGO
          ========================================= */}

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="group flex items-center gap-2.5"
          >

            {/* Logo */}

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
</div>


            {/* Brand */}

            <div className="hidden leading-none sm:block">

              <span className="block text-[17px] font-semibold tracking-[-0.03em] text-white">
                YoVi
              </span>

              <span className="mt-1 block text-[7px] font-medium tracking-[0.28em] text-white/30">
                TECHNOLOGIES
              </span>

            </div>

          </Link>


          {/* =========================================
              DESKTOP NAVIGATION
          ========================================= */}

          <div className="hidden items-center gap-1 lg:flex">

            {/* Home */}

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
                        bottom-0.5
                        left-1/2
                        h-1
                        w-1
                        -translate-x-1/2
                        rounded-full
                        bg-violet-300
                        shadow-[0_0_10px_rgba(196,181,253,0.8)]
                      "
                    />
                  )}
                </>
              )}
            </NavLink>


            {/* Other Links */}

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
                          bottom-0.5
                          left-1/2
                          h-1
                          w-1
                          -translate-x-1/2
                          rounded-full
                          bg-violet-300
                          shadow-[0_0_10px_rgba(196,181,253,0.8)]
                        "
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}

          </div>


          {/* =========================================
              CTA
          ========================================= */}

          <Link
            to="/contact"
            className="
              group hidden
              items-center gap-2
              rounded-full
              bg-white
              px-4 py-2.5
              text-[13px]
              font-semibold
              text-black
              transition-all duration-300
              hover:scale-[1.03]
              hover:bg-white/90
              lg:flex
            "
          >

            Let's Talk

            <span
              className="
                flex h-5 w-5
                items-center justify-center
                rounded-full
                bg-black text-white
                transition-transform duration-300
                group-hover:rotate-45
              "
            >
              <ArrowUpRight size={12} />
            </span>

          </Link>


          {/* =========================================
              MOBILE MENU BUTTON
          ========================================= */}

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-full
              border border-white/10
              bg-white/[0.04]
              text-white
              transition-all duration-300
              hover:border-white/20
              hover:bg-white/[0.08]
              lg:hidden
            "
            aria-label="Toggle navigation"
          >

            {menuOpen ? (
              <X size={19} />
            ) : (
              <Menu size={19} />
            )}

          </button>

        </nav>


        {/* =========================================
            MOBILE MENU
        ========================================= */}

        <div
          className={`
            overflow-hidden
            transition-all duration-500
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
              rounded-3xl
              border border-white/[0.09]
              bg-[#08080A]/95
              p-3
              shadow-[0_20px_70px_rgba(0,0,0,0.4)]
              backdrop-blur-2xl
            "
          >

            {/* Mobile Home */}

            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `
                  block rounded-2xl
                  px-4 py-3
                  text-sm font-medium
                  transition-all duration-300

                  ${
                    isActive
                      ? "bg-white/[0.07] text-white"
                      : "text-white/55 hover:bg-white/[0.04] hover:text-white"
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
                    block rounded-2xl
                    px-4 py-3
                    text-sm font-medium
                    transition-all duration-300

                    ${
                      isActive
                        ? "bg-white/[0.07] text-white"
                        : "text-white/55 hover:bg-white/[0.04] hover:text-white"
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
                group mt-2
                flex items-center
                justify-center gap-2
                rounded-2xl
                bg-white
                px-4 py-3.5
                text-sm font-semibold
                text-black
                transition-all duration-300
                hover:bg-white/90
              "
            >

              Start a Project

              <span
                className="
                  flex h-5 w-5
                  items-center justify-center
                  rounded-full
                  bg-black text-white
                  transition-transform duration-300
                  group-hover:rotate-45
                "
              >
                <ArrowUpRight size={12} />
              </span>

            </Link>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;
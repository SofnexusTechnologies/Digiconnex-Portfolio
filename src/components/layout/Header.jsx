import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

/**
 * Accessible, responsive header for Marketing Agency portfolio
 * - Uses NavLink for active state
 * - Accessible dropdown (Services) with keyboard support
 * - Mobile slide-down menu with focus trap-ish behavior
 *
 * Ensure you have your design tokens set in globals.css + tailwind.config.js
 */

const NAV = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "B2B Data Solutions", href: "/services#data" },
      { name: "Automation Services", href: "/services#automation" },
      { name: "Technology Solutions", href: "/services#technology" },
    ],
  },
  { name: "Industries", href: "/industries" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "About", href: "/about" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const servicesRef = useRef(null);
  const mobileRef = useRef(null);
  const toggleBtnRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function onDocClick(e) {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
      if (
        mobileRef.current &&
        !mobileRef.current.contains(e.target) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(e.target)
      ) {
        setMobileOpen(false);
      }
    }
    function onEsc(e) {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-card/80 backdrop-blur-md border-b border-border">
        <div className="container-custom flex items-center justify-between gap-4 py-3">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 no-underline">
            <div
              aria-hidden
              className="w-10 h-10 rounded-lg flex items-center justify-center shadow-card bg-gradient-brand"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="4"
                  fill="white"
                  opacity="0.06"
                />
                <path
                  d="M6 14L10.2 9.6L14 14"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div>
              <span className="block font-extrabold text-lg leading-none text-gradient">
                AgencyPro
              </span>
              <span className="block text-xs -mt-0.5 text-muted-foreground">
                Creative · Strategy · Tech
              </span>
            </div>
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV.map((item) => {
              if (item.dropdown) {
                return (
                  <div key={item.name} className="relative" ref={servicesRef}>
                    {/* trigger */}
                    <button
                      aria-haspopup="menu"
                      aria-expanded={servicesOpen}
                      onClick={() => setServicesOpen((v) => !v)}
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                      className={`inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition ${
                        servicesOpen
                          ? "text-primary bg-primary/10"
                          : "text-foreground hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>

                    {/* menu */}
                    <div
                      role="menu"
                      aria-label="Services submenu"
                      className={`absolute left-0 mt-2 w-64 rounded-lg border border-border bg-card shadow-elegant overflow-hidden transition-transform duration-200 transform origin-top ${
                        servicesOpen
                          ? "scale-100 opacity-100 translate-y-0"
                          : "scale-95 opacity-0 -translate-y-1 pointer-events-none"
                      }`}
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      {item.dropdown.map((sub) => (
                        <NavLink
                          key={sub.name}
                          to={sub.href}
                          className={({ isActive }) =>
                            `block px-4 py-3 text-sm text-foreground hover:text-primary hover:bg-primary/5 transition-colors ${
                              isActive ? "text-primary font-semibold" : ""
                            }`
                          }
                        >
                          {sub.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition ${
                      isActive
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:text-primary hover:bg-primary/5"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              );
            })}

            <NavLink to="/contact" className="ml-2">
              <span className="btn-highlight shadow-elegant">Get Started</span>
            </NavLink>
          </nav>

          {/* mobile toggle */}
          <div className="md:hidden flex items-center">
            <button
              ref={toggleBtnRef}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="p-2 rounded-md text-foreground hover:text-primary hover:bg-primary/5 transition"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        <div
          ref={mobileRef}
          className={`md:hidden overflow-hidden transition-[max-height,opacity,transform] duration-300 ease-in-out ${
            mobileOpen
              ? "max-h-[1000px] opacity-100 translate-y-0"
              : "max-h-0 opacity-0 translate-y-[-6px]"
          }`}
        >
          <div className="px-4 pb-6 pt-2">
            <div className="space-y-1">
              {NAV.map((item) => {
                if (item.dropdown) {
                  return (
                    <div
                      key={item.name}
                      className="border-b border-border/60 pb-2"
                    >
                      <button
                        onClick={() => setServicesOpen((v) => !v)}
                        aria-expanded={servicesOpen}
                        className="w-full flex items-center justify-between px-3 py-3 text-left rounded-md text-foreground hover:text-primary hover:bg-primary/5 transition"
                      >
                        <span className="font-medium">{item.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            servicesOpen ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </button>

                      <div
                        className={`mt-2 pl-3 transition-[max-height,opacity] ${
                          servicesOpen
                            ? "max-h-40 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        {item.dropdown.map((sub) => (
                          <NavLink
                            key={sub.name}
                            to={sub.href}
                            onClick={() => {
                              setMobileOpen(false);
                              setServicesOpen(false);
                            }}
                            className="block px-3 py-2 rounded-md text-sm text-foreground hover:text-primary hover:bg-primary/5 transition"
                          >
                            {sub.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-3 rounded-md text-foreground hover:text-primary hover:bg-primary/5 transition"
                  >
                    {item.name}
                  </NavLink>
                );
              })}
            </div>

            <div className="mt-4 px-2">
              <NavLink to="/contact" onClick={() => setMobileOpen(false)}>
                <span className="btn-highlight shadow-elegant block text-center">
                  Get Started
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

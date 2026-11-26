import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import { navigationItems } from "../../data/navigation.js";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link
          className="brand"
          to="/"
          aria-label="TPC-26 home"
          onClick={closeMenu}
        >
          <span className="brand-mark" aria-hidden="true">
            <img src="/images (2).png" alt="" />
          </span>
          <span className="brand-copy">
            <strong>TPC `26</strong>
            <small>TEACHER &amp; PARENT CONFERENCE</small>
          </span>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav
          id="primary-navigation"
          className={menuOpen ? "main-nav is-open" : "main-nav"}
          aria-label="Main navigation"
        
        >
          {navigationItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              end={item.href === "/"}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
          <a
            className="button button-pink nav-register"
            href="https://eventpulse.ng/events/teacher-parent-conference-raising-world-leaders-together"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Register now <ArrowRight size={15} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}

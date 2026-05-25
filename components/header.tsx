"use client";
import { useState } from "react";
import "../styles/home.css";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <nav className="navbar">

        <Link href="/" className="logo" onClick={closeMenu}>
          {"</>"} BuildWithDenis
        </Link>

        {/* Desktop + Mobile nav links */}
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link href="/ourservices" onClick={closeMenu}>Services</Link>
          <Link href="/work"        onClick={closeMenu}>Work</Link>
          <Link href="/process"     onClick={closeMenu}>Process</Link>
          <Link href="/about"       onClick={closeMenu}>About</Link>
          <Link href="/faq"         onClick={closeMenu}>FAQ</Link>
          {/* Contact button inside drawer on mobile */}
          <Link href="/contact" className="talk-btn contact-btn mobile-cta" onClick={closeMenu}>
            Contact
          </Link>
        </div>

        {/* Desktop CTA */}
        <button className="talk-btn desktop-cta">
          <Link href="/contact" className="contact-btn">Contact</Link>
        </button>

        {/* Hamburger */}
        <button
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span />
          <span />
          <span />
        </button>

      </nav>
    </header>
  );
}

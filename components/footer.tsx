import Link from "next/link";

export default function Footer() {

  return (
<footer className="footer">

  <div className="footer-glow"></div>

  <div className="footer-cta">

    <p className="section-tag">
      • LET'S BUILD SOMETHING GREAT
    </p>

    <h2>
      Let’s create a digital
      experience people
      actually remember.
    </h2>

    <p>
      Modern websites designed for
      businesses that want to stand out.
    </p>

    <button className="footer-btn"><Link href="/contact">Start Your Project →</Link>
    </button>

  </div>

  <div className="footer-brand-bg">
    BUILDWITHDENIS
  </div>

  <div className="footer-bottom">

    <div className="footer-left">

      <Link href="/" className="footer-logo">
      {"</>"} BuildWithDenis
      </Link>

      <span>
        © 2026 All rights reserved.
      </span>

    </div>

    <div className="footer-links">

      <Link href="/work">Work</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="https://www.linkedin.com/in/denisyadav/">LinkedIn</Link>
      <Link href="mailto:denisyadavv@gmail.com">Email</Link>

    </div>

  </div>

</footer>
  )
}
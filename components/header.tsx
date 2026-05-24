import "../styles/home.css";
import Link from "next/link";
export default function Home() {
  return (
    <main className="header">

      <header className="navbar">
        <Link href="/" className="footer-logo">
        {"</>"} BuildWithDenis
        </Link>

        <nav>
          <Link href="/ourservices">Services</Link>
          <Link href="/work">Work</Link>
          <Link href="/process">Process</Link>
          <Link href="/about">About</Link>
          <Link href="/faq">FAQ</Link>
        </nav>

        <button className="talk-btn"><Link href="/contact" className="contact-btn">Contact</Link></button>
      </header>
      </main>
  )
}
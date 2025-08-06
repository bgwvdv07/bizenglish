import Link from 'next/link'
import { useState } from 'react'

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div>
      <header style={{
        backgroundColor: 'var(--cream)',
        borderBottom: '1px solid #f3e5db',
        padding: '1.2rem 0',
        boxShadow: 'var(--shadow)',
        position: 'relative',
        zIndex: 100,
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            color: '#5A4B47',
            fontSize: '1.8rem',
            margin: 0,
          }}>
            Biz English <span style={{ fontSize: '1.2rem' }}>🧡</span>
          </h1>

          {/* Hamburger */}
          <button
            className="hamburger"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          </button>

          {/* Desktop Nav */}
          <nav className="nav-desktop">
            <Link href="/" passHref><span style={navLinkStyle}>Home</span></Link>
            <Link href="/about" passHref><span style={navLinkStyle}>About</span></Link>
            <a href="/#signup" style={navLinkStyle}>Sign Up</a>
          </nav>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="nav-mobile">
            <Link href="/" passHref><span onClick={toggleMenu} style={navLinkStyle}>Home</span></Link>
            <Link href="/about" passHref><span onClick={toggleMenu} style={navLinkStyle}>About</span></Link>
            <a href="/#signup" onClick={toggleMenu} style={navLinkStyle}>Sign Up</a>
          </nav>
        )}
      </header>

      <main className="container">{children}</main>

      <footer style={{
        backgroundColor: 'var(--sunny)',
        color: '#5A4B47',
        textAlign: 'center',
        padding: '1rem 0',
        fontSize: '0.9rem',
        marginTop: '3rem',
        boxShadow: 'inset 0 1px 5px rgba(0,0,0,0.05)',
      }}>
        &copy; {new Date().getFullYear()} Biz English with Friends. All rights reserved.
      </footer>
    </div>
  )
}

const navLinkStyle = {
  color: '#5A4B47',
  fontWeight: '500',
  textDecoration: 'none',
  fontSize: '1rem',
  padding: '0.5rem 1rem',
  display: 'inline-block',
  cursor: 'pointer',
  transition: 'color 0.2s ease',
}

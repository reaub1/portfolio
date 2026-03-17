import { useState, useEffect, useRef } from 'react';
import './Header.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#cv' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const hamburgerRef = useRef(null);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        hamburgerRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  const handleBrandClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className="navbar" aria-label="Main navigation">
        <a className="navbar-brand" href="/" onClick={handleBrandClick}>Robin Bechlem</a>

        <button
          ref={hamburgerRef}
          className={`navbar-hamburger${menuOpen ? ' open' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul id="nav-menu" className={`navbar-links${menuOpen ? ' open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={handleLinkClick}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <header className="hero-header fade-in">
        <h1>Welcome to my portfolio</h1>
        <p>I am Robin Bechlem, a junior software engineer.</p>
      </header>
    </>
  );
};

export default Header;

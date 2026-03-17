import { useState, useEffect, useRef } from 'react';
import './Header.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#cv' },
  { label: 'Contact', href: '#contact' },
];

const TYPEWRITER_STRINGS = ['Engineer', 'Builder', 'Problem Solver'];
const TYPING_SPEED = 90;
const DELETING_SPEED = 55;
const PAUSE_AFTER_WORD = 1400;
const PAUSE_BEFORE_DELETE = 300;

/* ---- SVG icons ---- */
const MoonIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
  </svg>
);

const SunIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1"  x2="12" y2="3"  stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="4.22" y1="4.22"   x2="5.64" y2="5.64"   stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="1"  y1="12" x2="3"  y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"   stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"   stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const hamburgerRef = useRef(null);

  /* ---- Dark mode ---- */
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  /* ---- Typewriter ---- */
  const [displayedText, setDisplayedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = TYPEWRITER_STRINGS[wordIndex];

    let timeout;

    if (!isDeleting && displayedText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_WORD);
    } else if (isDeleting && displayedText === '') {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % TYPEWRITER_STRINGS.length);
      }, PAUSE_BEFORE_DELETE);
    } else if (isDeleting) {
      timeout = setTimeout(
        () => setDisplayedText((prev) => prev.slice(0, -1)),
        DELETING_SPEED
      );
    } else {
      timeout = setTimeout(
        () => setDisplayedText(currentWord.slice(0, displayedText.length + 1)),
        TYPING_SPEED
      );
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, wordIndex]);

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
        <a className="navbar-brand" href="#" onClick={handleBrandClick} aria-label="Back to top">Robin Bechlem</a>

        <div className="navbar-controls">
          <ul id="nav-menu" className={`navbar-links${menuOpen ? ' open' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={handleLinkClick}>{link.label}</a>
              </li>
            ))}
          </ul>

          <button
            className="navbar-theme-toggle"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            onClick={() => setIsDark((prev) => !prev)}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>

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
        </div>
      </nav>

      <header className="hero-header fade-in">
        {/* Animated background blobs */}
        <span className="hero-blob hero-blob--1" aria-hidden="true" />
        <span className="hero-blob hero-blob--2" aria-hidden="true" />
        <span className="hero-blob hero-blob--3" aria-hidden="true" />
        <span className="hero-blob hero-blob--4" aria-hidden="true" />

        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I'm Robin Bechlem</h1>
            <p className="hero-subtitle">
              Junior Software{' '}
              <span className="hero-typewriter" aria-hidden="true">
                {displayedText}
                <span className="hero-cursor">|</span>
              </span>
              <span className="sr-only">Software Engineer</span>
            </p>
            <a href="#projects" className="hero-cta">
              See my work ↓
            </a>
          </div>

          <div className="hero-avatar" aria-hidden="true">
            RB
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

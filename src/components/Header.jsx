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

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const hamburgerRef = useRef(null);

  // Typewriter state
  const [displayedText, setDisplayedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = TYPEWRITER_STRINGS[wordIndex];

    let timeout;

    if (!isDeleting && displayedText === currentWord) {
      // Finished typing — pause then start deleting
      timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_WORD);
    } else if (isDeleting && displayedText === '') {
      // Finished deleting — move to next word
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
        <a className="navbar-brand" href="#" onClick={handleBrandClick}>Robin Bechlem</a>

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

import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://formspree.io/f/xgonppjq', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(e.target),
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact-section fade-in">
      <h2>Get in touch</h2>
      <div className="contact-inner">

        {/* Left: hook text */}
        <div className="contact-intro">
          <p className="contact-intro-lead">
            Available for opportunities.
          </p>
          <p>
            Whether it's an internship, apprenticeship, or full-time position,
            I'd love to hear from you.
          </p>
          <ul className="contact-details">
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true" className="contact-icon">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
              </svg>
              <a href="mailto:robin.bechlem@gmail.com">robin.bechlem@gmail.com</a>
            </li>
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true" className="contact-icon">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.039-1.852-3.039-1.853 0-2.136 1.445-2.136 2.939v5.669H9.352V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.369-1.85 3.603 0 4.268 2.37 4.268 5.451v6.29zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
              </svg>
              <a
                href="https://www.linkedin.com/in/robin-bechlem-7b948b1b9/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true" className="contact-icon">
                <path d="M12 0.297C5.37 0.297 0 5.667 0 12.297c0 5.292 3.438 9.788 8.205 11.387.6.111.82-.261.82-.577 0-.285-.011-1.04-.017-2.04-3.338.726-4.042-1.613-4.042-1.613-.546-1.385-1.333-1.755-1.333-1.755-1.089-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.305 3.495.998.108-.776.419-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.469-2.382 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.838 1.233 1.91 1.233 3.22 0 4.609-2.803 5.625-5.475 5.92.43.372.815 1.103.815 2.222 0 1.606-.015 2.896-.015 3.289 0 .319.216.694.825.576C20.565 22.082 24 17.584 24 12.297 24 5.667 18.63 0.297 12 0.297z"/>
              </svg>
              <a
                href="https://github.com/reaub1"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>

        {/* Right: form */}
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder="Your name"
              required
              autoComplete="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              autoComplete="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              placeholder="Your message..."
              required
            />
          </div>

          {status === 'success' && (
            <p className="contact-feedback contact-feedback--success" role="status">
              Message sent! I'll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="contact-feedback contact-feedback--error" role="alert">
              Something went wrong. Please try again.
            </p>
          )}

          <button
            type="submit"
            className="contact-submit"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : 'Send →'}
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;

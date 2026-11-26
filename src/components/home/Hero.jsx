import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-orbit orbit-one" aria-hidden="true" />
      <div className="hero-orbit orbit-two" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow"><span /> TEACHER &amp; PARENT CONFERENCE 2026</p>
          <h1 id="hero-title">
            Raising<br />
            world leaders<br />
            <em>together.</em>
          </h1>
          <p className="hero-description">
            One transformative day for the people shaping tomorrow—parents,
            teachers and school leaders.
          </p>

          <div className="event-meta">
            <span><CalendarDays size={16} aria-hidden="true" /> Saturday, 28 November 2026</span>
            <span className="meta-divider" aria-hidden="true" />
            <span><MapPin size={16} aria-hidden="true" /> The Alpha Hall, Akobo, Ibadan</span>
          </div>

          <div className="hero-actions" id="register">
            <a
            className="button button-pink nav-register"
            href="https://eventpulse.ng/events/teacher-parent-conference-raising-world-leaders-together"
            target="_blank"
            rel="noopener noreferrer"
            
          >
            Register now <ArrowRight size={15} aria-hidden="true" />
          </a>
            <a className="button button-outline" href="#sponsor">Become a sponsor</a>
          </div>

          <div className="hero-note">
            <span className="note-line" aria-hidden="true" />
            <span>Every child needs a champion.</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-blob blob-pink" aria-hidden="true" />
          <div className="visual-blob blob-lilac" aria-hidden="true" />
          <img
            className="hero-photo"
            src="/images/week4/IMG_3112.jpg"
            alt="An instructor helping students during a practical learning session"
            fetchPriority="high"
          />
          <div className="photo-caption">
            <span className="caption-mark" aria-hidden="true">“</span>
            <span>Better education.<br />Brighter futures.</span>
          </div>
          <div className="attendance-bubble" aria-label="800 plus teachers, parents and leaders">
            <strong>800+</strong>
            <span>teachers, parents<br />&amp; leaders</span>
          </div>
          <div className="floating-dot" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

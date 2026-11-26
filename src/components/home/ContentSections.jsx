import { Link } from "react-router-dom";
import {
  ArrowDownRight, ArrowRight, BookOpen, HeartHandshake, Lightbulb,
  MonitorSmartphone, UsersRound, Clock3, MessageCircle, Presentation,
  Handshake, MapPin, Mail, Phone, ChevronDown
} from "lucide-react";

const benefits = [
  { number: "01", icon: Lightbulb, title: "Mentor with purpose", text: "Move beyond instruction to shape character, curiosity and courage.", detail: "Explore how intentional mentoring helps children develop curiosity, character and confidence. The conference encourages adults to model the values they hope children will carry into the world.", image: "/images/week4/IMG_3111.jpg" },
  { number: "02", icon: HeartHandshake, title: "Strengthen wellbeing", text: "Build the confidence to guide children through an uncertain future.", detail: "Children learn best when the adults around them are supported, emotionally aware and ready to listen. Take away ideas for nurturing resilience and creating safer conversations at home and school.", image: "/images/week4/IMG_3148.jpg" },
  { number: "03", icon: MonitorSmartphone, title: "Raise digital leaders", text: "Explore practical ways to help children use technology with wisdom.", detail: "Digital skills matter, but so do judgement, safety and responsibility. Discover ways adults can guide young people to use technology thoughtfully and create rather than only consume.", image: "/images/week4/IMG_3090.jpg" },
  { number: "04", icon: UsersRound, title: "Find your people", text: "Connect with a community of parents, educators and school leaders.", detail: "Build relationships with people facing similar questions. Shared experiences can lead to fresh ideas, practical support and collaboration that continues beyond the event.", image: "/images/week4/IMG_3150.jpg" },
  { number: "05", icon: BookOpen, title: "Turn insight into action", text: "Leave with useful ideas to put into practice at home and in school.", detail: "Move from inspiration to action with questions, strategies and perspectives you can adapt to your own setting. Small, consistent changes can make everyday learning more meaningful.", image: "/images/week4/IMG_3068.jpg" },
  { number: "06", icon: Presentation, title: "Shape tomorrow together", text: "Align families, teachers and communities around children's futures.", detail: "Children benefit when the adults around them share a sense of purpose. The conference creates room to discuss leadership, education, community and the skills young people need for a changing world.", image: "/images/week4/IMG_3060.jpg" },
];

const schedule = [
  { time: "9:00–10:00 AM", type: "ARRIVAL", title: "Registration & AI education video", text: "Welcome attendees and introduce the day’s focus on education and technology." },
  { time: "10:00–10:10 AM", type: "WELCOME", title: "Welcome address", text: "Boluwatife Adebisi sets the tone for the day." },
  { time: "10:10–10:15 AM", type: "OPENING", title: "Opening remarks", text: "Frame the conference theme: Raising World Leaders Together." },
  { time: "10:15–10:50 AM", type: "TALK 01", title: "The Mind Behind the Mission", text: "Raising world leaders together · Keynote: Dr Adesina Aladewura." },
  { time: "10:55–11:25 AM", type: "TALK 02", title: "Healing the Wounded Mind", text: "Mental resilience for educators raising generations · Mr Adesida Adetunji." },
  { time: "11:30 AM–12:00 PM", type: "PANEL 01", title: "The Role of Government in Raising Leaders", text: "Government officials panel · Moderator: Samuel Obasa." },
  { time: "12:05–12:20 PM", type: "SHOWCASE", title: "Sponsors & partners showcase", text: "Meet the organisations supporting the conference." },
  { time: "12:25–12:55 PM", type: "TALK 03", title: "The Purpose-Driven Educator", text: "Overcoming the fallback-profession mindset to raise high-value graduates · Mr Timothy Ayodele." },
  { time: "1:00–1:30 PM", type: "TALK 04", title: "The Economics of Vision", text: "Financial stewardship to break the scarcity mindset · Ruth Olabode." },
  { time: "1:35–2:15 PM", type: "PANEL 02", title: "Dismantling the Victim Mentality", text: "Practical steps for parents and teachers · Moderator: Boluwatife Adebisi." },
  { time: "2:20–2:35 PM", type: "NETWORKING", title: "Lunch & partners showcase", text: "Refreshments, networking and sponsor showcases." },
  { time: "2:40–3:10 PM", type: "TALK 05", title: "From Classroom to Career", text: "What it takes to build job-ready talent · Mr Favour Afolabi." },
  { time: "3:15–3:55 PM", type: "PANEL 03", title: "AI Safety Measures", text: "Raising digitally skilled, values-driven leaders in an AI age · Moderator: Aruna Azeez." },
  { time: "3:55–4:00 PM", type: "COMMUNITY", title: "Group pictures", text: "Capture the people and connections from the day." },
  { time: "4:05–4:20 PM", type: "CLOSING ACTIVITIES", title: "Games, gifts & sponsor showcase", text: "A final opportunity to connect with the community and partners." },
  { time: "4:20–4:25 PM", type: "CLOSING", title: "Closing remarks", text: "Recap and call to action · Adeola Lawal." },
];

const partners = [
  { initials: "SQI", name: "SQI College of ICT", type: "Gold Partner", image: "/images/partners/sqi-college-of-ict.png", url: "https://sqi.edu.ng/" },
  { initials: "HH", name: "HarvestHouse Christian Center", type: "Venue Partner" },
  { initials: "OY", name: "Oyo State Ministry of Education", type: "Supporting Partner", image: "/images/partners/oyo-state-ministry-of-education.jpg", url: "https://oyostate.gov.ng/" },
  { initials: "UB", name: "Oyo State Universal Basic Education Board", type: "Supporting Partner", image: "/images/partners/oyo-state-universal-basic-education-board.jpg" },
];

const faqs = [
  { q: "Who should attend the conference?", a: "The conference is intended for parents, teachers, school leaders and others who help shape children's learning and development." },
  { q: "When and where will it take place?", a: "Saturday, 28 November 2026 at The Alpha Hall, Iyana Olopa Road, Akobo, Ibadan. Please confirm final venue directions before travelling." },
  { q: "How do I register?", a: "Use the registration page to contact the organisers for the approved registration form and current attendance details." },
  { q: "Can my organisation become a sponsor?", a: "Yes. Use the sponsorship enquiry option to contact the organisers for the approved sponsorship packages and benefits." },
];

function SectionLabel({ children }) {
  return <p className="section-label"><span />{children}</p>;
}

export function AboutSection() {
  return (
    <section className="about-section section-pad" id="about">
      <div className="about-index">01 <span>— WHY WE GATHER</span></div>
      <div className="about-grid">
        <h2>It takes a village<br />to raise a <em>leader.</em></h2>
        <div className="about-copy">
          <p>Children are growing up in a world changing faster than ever. The Teacher &amp; Parent Conference brings the adults who guide them into one room—to learn, reconnect and lead with intention.</p>
          <a className="text-link" href="#takeaways">Explore the conference <ArrowRight size={16} /></a>
        </div>
      </div>
      <div className="about-bottomline">
        <span>ONE SHARED PURPOSE</span>
        <span className="line" />
        <span>BETTER SUPPORT FOR EVERY CHILD</span>
      </div>
    </section>
  );
}

export function TakeawaysSection() {
  return (
    <section className="takeaways-section section-pad" id="takeaways">
      <div className="section-heading-row">
        <div>
          <SectionLabel>WHAT YOU WILL TAKE HOME</SectionLabel>
          <h2>Ideas that change<br />how we raise children.</h2>
        </div>
        <p>Practical insight, renewed confidence and a community that stays with you long after the day ends.</p>
      </div>
      <div className="benefit-list">
        {benefits.map(({ number, icon: Icon, title, text }) => (
          <Link className="benefit-row" key={number} to={`/impact/${number}`}>
            <span className="benefit-number">{number}</span>
            <span className="benefit-icon"><Icon size={22} /></span>
            <h3>{title}</h3>
            <p>{text}</p>
            <ArrowDownRight className="benefit-arrow" size={22} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export function ProgrammeSection() {
  return (
    <section className="programme-section section-pad" id="programme">
      <div className="programme-heading">
        <div>
          <SectionLabel>ONE MEANINGFUL DAY</SectionLabel>
          <h2>A programme built<br /><em>for connection.</em></h2>
        </div>
        <div className="date-stamp"><strong>28</strong><span>NOV<br />2026</span></div>
      </div>
      <p className="programme-intro">Thought-provoking conversations, practical tools and space to meet people who care as deeply as you do.</p>
      <div className="timeline">
        {schedule.map((item) => (
          <article className="timeline-item" key={item.time}>
            <div className="timeline-time"><Clock3 size={15} />{item.time}</div>
            <div className="timeline-marker"><span /></div>
            <div className="timeline-content">
              <span className="timeline-type">{item.type}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
            <ArrowDownRight className="timeline-arrow" size={20} />
          </article>
        ))}
      </div>
      <p className="content-note">Agenda adapted from the supplied Teacher &amp; Parent Conference 2026 proposal. Please confirm any final changes with the organisers.</p>
    </section>
  );
}

export function PartnersSection() {
  return (
    <section className="partners-section section-pad" id="partners">
      <div className="partners-top">
        <div>
          <SectionLabel>IN GOOD COMPANY</SectionLabel>
          <h2>Our 2026<br /><em>partners.</em></h2>
        </div>
        <p>Working together to create better opportunities for the next generation.</p>
      </div>
      <div className="partner-grid">
        {partners.map((partner) => {
          const content = (
            <>
              <div className="partner-image-wrap">{partner.image ? <img src={partner.image} alt={`${partner.name} logo`} loading="lazy" /> : <span className="partner-monogram-art">{partner.initials}</span>}</div>
              <div><h3>{partner.name}</h3><p>{partner.type}</p></div>
              {partner.url ? <ArrowDownRight size={18} aria-hidden="true" /> : null}
            </>
          );
          return partner.url ? (
            <a className="partner-item" key={partner.initials} href={partner.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${partner.name} website (opens in a new tab)`}>{content}</a>
          ) : (
            <article className="partner-item" key={partner.initials}>{content}</article>
          );
        })}
      </div>
      <p className="content-note">Partner names and categories are reproduced from the supplied 2026 sponsorship proposal. Official logo artwork is shown where it was included in the supplied image pack.</p>
    </section>
  );
}

export function SponsorSection() {
  return (
    <section className="sponsor-section section-pad" id="sponsor">
      <div className="sponsor-art" aria-hidden="true">
        <span className="sponsor-circle circle-a" />
        <span className="sponsor-circle circle-b" />
        <span className="sponsor-number">02</span>
      </div>
      <div className="sponsor-copy">
        <SectionLabel>MAKE AN IMPACT</SectionLabel>
        <h2>Help shape the<br /><em>next chapter.</em></h2>
        <p>Partner with a community committed to helping children thrive. Sponsorship gives your organisation a meaningful way to support parents, educators and school leaders.</p>
        <a className="button button-pink" href="mailto:foundation@rubiestech.org?subject=Teacher%20%26%20Parent%20Conference%202026%20sponsorship%20enquiry">
          Enquire about sponsorship <ArrowRight size={16} />
        </a>
        <div className="sponsor-logo-strip"><img src="/images/foundation-logo.png" alt="Rubies Tech Foundation" /><span>Education · Community · Digital opportunity</span></div>
        <span className="sponsor-footnote">Ask the organisers for the confirmed sponsorship tiers and benefits.</span>
      </div>
    </section>
  );
}

export function VenueSection() {
  return (
    <section className="venue-section section-pad" id="venue">
      <div className="venue-copy">
        <SectionLabel>MEET US IN IBADAN</SectionLabel>
        <h2>A place for<br /><em>big ideas.</em></h2>
        <p>Join us at The Alpha Hall, Iyana Olopa Road, Akobo, Ibadan, for a day of learning, conversation and connection.</p>
        <div className="venue-detail"><MapPin size={19} /><span><strong>The Alpha Hall</strong><small>Iyana Olopa Road, Akobo, Ibadan, Nigeria</small></span></div>
        <div className="venue-detail"><CalendarDaysIcon /><span><strong>Saturday, 28 November 2026</strong><small>Full-day conference</small></span></div>
        <a className="text-link" href="https://www.google.com/maps/search/?api=1&query=The+Alpha+Hall+Iyana+Olopa+Road+Akobo+Ibadan" target="_blank" rel="noreferrer">
          Open directions <ArrowRight size={16} />
        </a>
      </div>
      <div className="venue-visual">
        <div className="venue-map-art">
          <span className="map-road road-one" /><span className="map-road road-two" />
          <span className="map-road road-three" /><span className="map-road road-four" />
          <span className="map-pin"><MapPin size={25} /></span>
          <span className="map-label">AKOBO<br /><small>IBADAN</small></span>
          <span className="map-caption">YOUR NEXT CONVERSATION STARTS HERE</span>
        </div>
      </div>
    </section>
  );
}

function CalendarDaysIcon() {
  return <BookOpen size={19} />;
}

export function FAQSection() {
  return (
    <section className="faq-section section-pad" id="faq">
      <div className="faq-heading">
        <SectionLabel>GOOD TO KNOW</SectionLabel>
        <h2>A few things<br />you might <em>wonder.</em></h2>
        <p>Need something else? Contact the conference team for the latest confirmed information.</p>
        <a className="text-link" href="mailto:bolu@rubiestech.org">Ask us a question <ArrowRight size={16} /></a>
      </div>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <details className="faq-item" key={faq.q} open={index === 0}>
            <summary><span>{String(index + 1).padStart(2, "0")}</span>{faq.q}<ChevronDown size={18} /></summary>
            <p>{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="final-cta section-pad" id="register-final">
      <div className="cta-topline"><span>TPC / 26</span><span>28 NOVEMBER 2026 · IBADAN</span></div>
      <div className="cta-layout">
        <h2>Tomorrow is<br />something we<br /><em>raise together.</em></h2>
        <div className="cta-copy">
          <p>Let’s raise the next generation of world leaders—together.</p>
          <a className="button button-light"
            href="https://eventpulse.ng/events/teacher-parent-conference-raising-world-leaders-together"
            target="_blank"
            rel="noopener noreferrer"
            >Register your interest <ArrowRight size={16} /></a>
        </div>
      </div>
      <div className="cta-bottom"><span>FOR PARENTS. FOR TEACHERS. FOR EVERY CHILD.</span><ArrowRight size={19} /></div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link className="brand footer-logo" to="/">
            <span className="brand-mark" aria-hidden="true">
            <img src="/images (2).png" alt="" />
          </span>
            <span className="brand-copy"><strong>TPC`26</strong><small>TEACHER &amp; PARENT CONFERENCE</small></span>
          </Link>
          <p>Equipping the adults who guide children with ideas, confidence and community for a changing world.</p>
          <span className="organiser-note">Organised by Rubies Tech Foundation</span>
        </div>
        <div className="footer-column"><h3>Explore</h3><Link to="/">Home</Link><Link to="/about">About</Link><Link to="/foundation">Foundation</Link><Link to="/programme">Programme</Link><Link to="/partners">Partners</Link><Link to="/sponsor">Sponsor</Link></div>
        <div className="footer-column"><h3>Get in touch</h3><a href="mailto:foundation@rubiestech.org"><Mail size={15} /> foundation@rubiestech.org</a><a href="tel:+2348030000000"><Phone size={15} /> +234 813 719 7307</a><span><MapPin size={15} /> Akobo, Ibadan, Nigeria</span></div>
      </div>
      <div className="footer-bottom"><span>© 2026 Rubies Tech Foundation. All rights reserved.</span><span>*Contact details must be verified before launch.</span><Link to="/">Back to home ↑</Link></div>
    </footer>
  );
}

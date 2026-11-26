import {
  ArrowRight,
  CalendarDays,
  MapPin,
  UsersRound,
  Mail,
  CheckCircle2,
  BookOpen,
  HeartHandshake,
  Lightbulb,
  Handshake,
  Building2,
  MessageCircle,
  ExternalLink,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import GallerySection from "../components/home/GallerySection.jsx";
import { FAQSection, SiteFooter } from "../components/home/ContentSections.jsx";
import "../styles/home.css";
import "../styles/sections.css";

function PageHero({ eyebrow, title, accent, description, image, tag }) {
  return (
    <section className="inner-page-hero" id="main-content">
      <div className="inner-page-copy">
        <p className="eyebrow">
          <span />
          {eyebrow}
        </p>
        <h1>
          {title}
          <br />
          <em>{accent}</em>
        </h1>
        <p className="hero-description">{description}</p>
        {tag && <span className="page-hero-tag">{tag}</span>}
      </div>
      <div className="page-hero-visual">
        <img src={image} alt="Conference community and learning activities" />
        <span className="page-image-caption">
          TEACHER &amp; PARENT CONFERENCE <b>·</b> 2026
        </span>
      </div>
    </section>
  );
}
function SectionIntro({ label, title, accent, text }) {
  return (
    <div className="custom-section-intro">
      <p className="section-label">
        <span />
        {label}
      </p>
      <h2>
        {title}
        <br />
        <em>{accent}</em>
      </h2>
      {text && <p className="page-body">{text}</p>}
    </div>
  );
}
function PageCTA({
  title,
  text,
  href = "/register",
  label = "Explore registration",
}) {
  return (
    <section className="custom-page-cta">
      <div>
        <p className="section-label">
          <span />
          NEXT STEP
        </p>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <Link className="button button-pink" to={href}>
        {label}
        <ArrowRight size={16} />
      </Link>
    </section>
  );
}

export function AboutPage() {
  const pillars = [
    {
      icon: BookOpen,
      number: "01",
      title: "Learn with intention",
      text: "Explore ideas that can be applied in classrooms, homes and everyday conversations with children.",
    },
    {
      icon: HeartHandshake,
      number: "02",
      title: "Build shared understanding",
      text: "Bring parents and educators into the same conversation, with the child's growth at the centre.",
    },
    {
      icon: Lightbulb,
      number: "03",
      title: "Leave with fresh perspective",
      text: "Make space for new approaches, useful questions and relationships that continue after the event.",
    },
  ];
  return (
    <>
      <main id="main-content">
        <PageHero
          eyebrow="THE THINKING BEHIND TPC / 26"
          title="A shared vision."
          accent="A brighter future."
          description="Children thrive when the people around them learn from one another. TPC / 26 creates room for parents, teachers and school leaders to connect around that shared responsibility."
          image="/images/week4/IMG_3112.jpg"
          tag="ONE COMMUNITY · MANY PERSPECTIVES"
        />
        <section className="about-story-section section-pad">
          <div className="about-story-number">
            TPC
            <br />
            <strong>26</strong>
          </div>
          <div className="about-story-copy">
            <p className="section-label">
              <span />
              WHY THIS CONFERENCE MATTERS
            </p>
            <h2>
              When the adults connect,
              <br />
              <em>children benefit.</em>
            </h2>
            <p>
              Home and school are two of the most influential places in a
              child's life. Yet the conversations between them can be difficult
              to start and even harder to sustain. The Teacher &amp; Parent
              Conference is designed to bring those perspectives together in one
              shared space.
            </p>
            <p>
              Through learning, discussion and community, the conference invites
              attendees to think beyond their individual roles and consider what
              becomes possible when we work together.
            </p>
          </div>
        </section>
        <section className="custom-pillars-section section-pad">
          <SectionIntro
            label="THE TPC APPROACH"
            title="More than a meeting."
            accent="A place to move forward."
            text="The experience is built around three connected ideas: learning, understanding and action."
          />
          <div className="custom-pillar-grid">
            {pillars.map(({ icon: Icon, number, title, text }) => (
              <article className="custom-pillar-card" key={number}>
                <div className="custom-pillar-top">
                  <span>{number}</span>
                  <Icon size={24} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>
        <GallerySection />
        <PageCTA
          title="Be part of the conversation."
          text="Find out how to join the conference and take part in the day."
        />
      </main>
      <SiteFooter />
    </>
  );
}

export function RegisterPage() {
  const steps = [
    {
      n: "01",
      title: "Request the official link",
      text: "Contact the organisers to get the approved registration form and current attendance details.",
    },
    {
      n: "02",
      title: "Confirm your details",
      text: "Use the official form to review any attendee information, fees or requirements supplied by the organisers.",
    },
    {
      n: "03",
      title: "Plan your visit",
      text: "Keep the date and venue details handy, and check for updates before travelling.",
    },
  ];
  return (
    <>
      <main id="main-content">
        <PageHero
          eyebrow="YOUR NEXT STEP STARTS HERE"
          title="Save a place for"
          accent="new perspectives."
          description="Join parents, teachers and school leaders for a day focused on the people and ideas shaping children's futures."
          image="/images/week4/IMG_3090.jpg"
          tag="SATURDAY · 28 NOVEMBER 2026"
        />
        <section className="register-overview section-pad">
          <div className="register-overview-main">
            <p className="section-label">
              <span />
              TPC / 26 · ATTENDEE INFORMATION
            </p>
            <h2>
              Make time for
              <br />
              <em>what matters.</em>
            </h2>
            <p className="page-body">
              TPC / 26 is scheduled for Saturday, 28 November 2026 at The Alpha
              Hall, Iyana Olopa Road, Akobo, Ibadan. The conference is intended
              for people who support children's learning and development at
              home, in school and across the wider community.
            </p>
            <div className="register-facts">
              <div>
                <CalendarDays />
                <span>
                  <small>DATE</small>
                  <strong>Saturday, 28 November 2026</strong>
                </span>
              </div>
              <div>
                <MapPin />
                <span>
                  <small>VENUE</small>
                  <strong>The Alpha Hall</strong>
                  <small>Akobo, Ibadan, Nigeria</small>
                </span>
              </div>
              <div>
                <UsersRound />
                <span>
                  <small>WHO IT'S FOR</small>
                  <strong>Parents, educators and school leaders</strong>
                </span>
              </div>
            </div>
          </div>
          <aside className="register-card register-card-featured">
            <div className="register-card-icon">
              <UsersRound size={25} />
            </div>
            <span className="register-card-kicker">
              REGISTRATION INFORMATION
            </span>
            <h3>Ready to take part?</h3>
            <p>
              The approved registration form has not been provided in this
              website package yet. Contact the organisers to request the correct
              link and confirm any fees or attendance requirements.
            </p>
            <a
              className="button button-pink"
              href="mailto:foundation@rubiestech.org?subject=TPC%2026%20registration%20enquiry"
            >
              Request registration link <ArrowRight size={16} />
            </a>
            <small>This enquiry does not register you for the event.</small>
          </aside>
        </section>
        <section className="registration-steps section-pad">
          <SectionIntro
            label="HOW TO GET STARTED"
            title="Three steps."
            accent="One meaningful day."
            text="Use this guide while the organisers finalise the official registration details."
          />
          <div className="registration-step-list">
            {steps.map((s) => (
              <article key={s.n}>
                <span className="registration-step-number">{s.n}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
                <CheckCircle2 size={21} />
              </article>
            ))}
          </div>
        </section>
        <FAQSection />
        <PageCTA
          title="Need help before registering?"
          text="Send the conference team an enquiry about attendance details."
          href="/venue"
          label="View venue details"
        />
      </main>
      <SiteFooter />
    </>
  );
}

export function SponsorPage() {
  const packages = [
    {
      name: "Headline",
      price: "₦8,000,000",
      slots: "1 slot · exclusive",
      items: [
        "Your name in the event title",
        "15-minute keynote and a panel seat",
        "Premium stand at the entrance",
        "Largest logo on every material",
      ],
    },
    {
      name: "Platinum",
      price: "₦5,000,000",
      slots: "Up to 2 slots",
      items: [
        "Co-sponsor recognition on stage",
        "10-minute main-stage presentation",
        "Full exhibition stand",
        "Prominent logo on all materials",
      ],
    },
    {
      name: "Gold",
      price: "₦1,000,000",
      slots: "5 slots · 1 taken",
      items: [
        "Table display in the networking area",
        "60-second video during breaks",
        "Logo on backdrop and banners",
        "Insert in every delegate pack",
      ],
    },
    {
      name: "Silver",
      price: "₦500,000",
      slots: "Up to 10 slots",
      items: [
        "Logo on sponsor board and programme",
        "Thank-you from the MC on stage",
        "Flyers at the resource desk",
        "Social media thank-you",
      ],
    },
  ];
  const benefits = [
    ["Your name in the event title", "Yes", "No", "No", "No"],
    [
      "Logo on banners and backdrop",
      "Largest, first",
      "Prominent",
      "Standard",
      "Sponsor board",
    ],
    ["Logo on T-shirts, tags, notepads", "Yes", "Yes", "No", "No"],
    ["Main-stage speaking slot", "15 min + panel", "10 min", "No", "No"],
    ["Exhibition space", "Premium stand", "Full stand", "Table display", "No"],
    [
      "Promo video during breaks",
      "60 sec, 3 plays",
      "60 sec, 2 plays",
      "30 sec, 1 play",
      "No",
    ],
    ["Material in 850 delegate packs", "Yes", "Yes", "Yes", "Resource desk"],
    ["MC mentions", "Throughout", "Open and close", "Once", "Once"],
    ["VIP seats", "7", "5", "3", "2"],
    [
      "Social media features",
      "Full campaign",
      "3 posts",
      "1 post",
      "Group post",
    ],
    ["Conference highlight video", "Lead feature", "Featured", "Logo", "Logo"],
    ["Impact report and photo pack", "Yes", "Yes", "Yes", "Yes"],
  ];
  const budget = [
    ["Participant meals and packs", "₦3,700,000"],
    ["Speakers, hosts and guests", "₦1,510,000"],
    ["Branding and decoration", "₦1,000,000"],
    ["Volunteers and logistics", "₦1,000,000"],
    ["Media coverage", "₦857,800"],
    ["Venue (provided by a partner)", "₦750,000"],
    ["Marketing and publicity", "₦500,000"],
    ["Contingency", "₦500,000"],
  ];
  const detailedBudget = [
    [
      "Venue and Screen (HarvestHouse Christian Center)",
      "1",
      "₦1,000,000",
      "₦1,000,000",
    ],
    ["Fuel", "160", "₦1,830", "₦292,800"],
    ["Speakers stipend", "5", "₦100,000", "₦500,000"],
    ["Speakers gift pack and food", "5", "₦30,000", "₦150,000"],
    ["Speaker accommodation", "3", "₦40,000", "₦120,000"],
    ["Hosts", "2", "₦100,000", "₦200,000"],
    ["Panelists: gift pack and food", "8", "₦30,000", "₦240,000"],
    ["Special guests: gift pack and food", "10", "₦30,000", "₦300,000"],
    ["Branding and decoration", "1", "₦1,500,000", "₦1,500,000"],
    ["Media: photo, video, drone, highlights", "1", "₦750,000", "₦750,000"],
    ["Venue cleaning", "5", "₦15,000", "₦75,000"],
    ["Volunteers and church officials: meals", "40", "₦3,500", "₦140,000"],
    ["T-shirts", "50", "₦7,000", "₦350,000"],
    ["Printing: tags, pens, notepads", "850", "₦2,000", "₦1,700,000"],
    ["Participants: meals and water", "800", "₦2,500", "₦2,000,000"],
    ["Marketing and publicity", "1", "₦500,000", "₦500,000"],
    ["Miscellaneous", "1", "₦500,000", "₦500,000"],
  ];
  const dates = [
    ["Friday, 6 November", "Sponsorship confirmed by email"],
    ["Friday, 13 November", "Logos and materials due for printing"],
    ["Saturday, 28 November", "Conference day in Ibadan"],
    ["Monday, 28 December", "Impact report and media pack delivered"],
  ];
  return (
    <>
      <main id="main-content">
        <PageHero
          eyebrow="SPONSORSHIP & SUPPORT"
          title="Put your support"
          accent="behind possibility."
          description="A practical partnership opportunity to strengthen the adults shaping children's futures."
          image="/images/week4/IMG_3148.jpg"
          tag="TPC / 26 · SPONSORSHIP PROPOSAL"
        />
        <section className="sponsor-intro-section section-pad">
          <div>
            <p className="section-label">
              <span />
              WHY SUPPORT TPC / 26
            </p>
            <h2>
              Tools alone do not transform a child.{" "}
              <em>The adults around them do.</em>
            </h2>
          </div>
          <div>
            <p className="page-body">
              For nine years Rubies Tech Foundation has taught children to code.
              One question kept returning: why do the tools not always turn into
              transformation? The answer kept pointing to the teacher and the
              parent. Many are stretched thin, overlooked and carrying real
              worry about their own future. A worried adult has little room left
              to nurture a future leader. The Teacher &amp; Parent Conference is
              our response.
            </p>
            <p className="page-body">
              In 2026, the foundation brings its online conference community
              together in person: 800 people in one room.
            </p>
          </div>
        </section>

        <section className="section-pad proposal-story">
          <SectionIntro
            label="WHO WE ARE"
            title="Nine years of building"
            accent="young tech talent."
            text="Rubies Tech Foundation is the nonprofit arm of Rubies Technologies, a social enterprise that equips Africans with emerging tech and digital skills for global relevance. Since 2017, we have taught children across Nigeria and online in the UK, Canada and the US. The foundation brings this teaching, free, to communities that need it most."
          />
          <div className="proposal-mission-grid">
            <article>
              <span>OUR VISION</span>
              <p>
                To pioneer a future where empowered individuals, fortified with
                tech skills, drive global excellence through innovation and
                transformative solutions.
              </p>
            </article>
            <article>
              <span>OUR MISSION</span>
              <p>
                To educate, equip and empower individuals with emerging
                technological and digital skills for global relevance, fostering
                problem solving and innovation.
              </p>
            </article>
          </div>
          <h3 className="proposal-subheading">Our journey, 2017 to 2024</h3>
          <div className="proposal-timeline">
            <article>
              <b>2017</b>
              <p>First school visits in Akure, Ogbomoso and Oyo.</p>
            </article>
            <article>
              <b>2018</b>
              <p>Coding programmes in Ogbomoso.</p>
            </article>
            <article>
              <b>2019</b>
              <p>Summer of Code holiday programme with Africa Code Week.</p>
            </article>
            <article>
              <b>2020</b>
              <p>
                Restructured into three arms: Rubies Code School, Rubies Code
                Club and Rubies Tech Foundation.
              </p>
            </article>
            <article>
              <b>2021</b>
              <p>
                School Tech Tour across 9 schools in Oyo and Ogun; STEM for
                Girls, Bariga; Idi Araba Correctional Centre.
              </p>
            </article>
            <article>
              <b>2022</b>
              <p>
                Schools tour in Abeokuta; Ijoko Project, Ogun State; coding at
                the American Corner.
              </p>
            </article>
            <article>
              <b>2023</b>
              <p>
                Tech Up Epe, Lagos; Tech Up Ogbomoso, Oyo; free Python and
                Scratch classes.
              </p>
            </article>
            <article>
              <b>2024</b>
              <p>
                School Tech Tour in Ibadan, Lagos and Sagamu; Girls Tech
                Bootcamp; 3-day coding bootcamp.
              </p>
            </article>
          </div>
          <div className="proposal-stats">
            <div>
              <strong>9</strong>
              <span>years of work since 2017</span>
            </div>
            <div>
              <strong>4,000+</strong>
              <span>students impacted</span>
            </div>
            <div>
              <strong>20+</strong>
              <span>schools visited in Nigeria</span>
            </div>
            <div>
              <strong>10,000+</strong>
              <span>live online classes</span>
            </div>
            <div>
              <strong>3</strong>
              <span>arms: Code School, Code Club and Foundation</span>
            </div>
            <div>
              <strong>4</strong>
              <span>countries: Nigeria, UK, Canada and US</span>
            </div>
          </div>
        </section>

        <section className="section-pad proposal-conference">
          <SectionIntro
            label="THE CONFERENCE AT A GLANCE"
            title="One day to change"
            accent="how adults lead."
            text="Raising World Leaders Together is a one-day gathering for the people shaping children's learning and development."
          />
          <div className="proposal-facts-grid">
            <article>
              <span>THEME</span>
              <strong>Raising World Leaders Together</strong>
            </article>
            <article>
              <span>WHEN</span>
              <strong>Saturday, 28 November 2026</strong>
            </article>
            <article>
              <span>WHERE</span>
              <strong>
                The Alpha Hall, Iyana Olopa Road, Akobo, Ibadan, Oyo State
              </strong>
            </article>
            <article>
              <span>WHO</span>
              <strong>800 teachers, parents and school leaders/owners</strong>
            </article>
            <article>
              <span>FORMAT</span>
              <strong>
                Keynotes, panel sessions, exhibitions and networking
              </strong>
            </article>
          </div>
          <h3 className="proposal-subheading">What we aim to achieve</h3>
          <ol className="proposal-goals">
            <li>
              Move teachers and parents from instruction to purposeful
              mentorship.
            </li>
            <li>Strengthen their wellbeing and confidence about the future.</li>
            <li>Share practical ways to raise digitally confident children.</li>
            <li>Build a lasting network of educators and parents.</li>
          </ol>
          <div className="proposal-past">
            <span>WE HAVE DONE THIS BEFORE</span>
            <strong>1,000+</strong>
            <p>
              People reached by our online conferences since 2021, live and
              through YouTube replays.
            </p>
            <div>
              <b>Tech Educator Conference</b>
              <b>Parents Conference</b>
              <b>Brace Conference</b>
            </div>
            <small>
              For teachers and school leaders · For parents and guardians · For
              young people and their parents
            </small>
          </div>
        </section>

        <section className="section-pad proposal-day">
          <SectionIntro
            label="ON THE DAY"
            title="A full-scale,"
            accent="well-run event."
            text="The event plan sets out the people, materials and coverage needed to welcome participants and deliver the programme."
          />
          <div className="proposal-stats proposal-day-stats">
            <div>
              <strong>800</strong>
              <span>teachers, parents and school leaders in the room</span>
            </div>
            <div>
              <strong>5</strong>
              <span>
                keynote speakers on leadership, mentorship and wellbeing
              </span>
            </div>
            <div>
              <strong>8</strong>
              <span>panellists sharing practical experience</span>
            </div>
            <div>
              <strong>10</strong>
              <span>special guests from education and the community</span>
            </div>
            <div>
              <strong>850</strong>
              <span>delegate packs with name tags, pens and notepads</span>
            </div>
            <div>
              <strong>800</strong>
              <span>meals served to participants</span>
            </div>
            <div>
              <strong>40</strong>
              <span>volunteers keeping things running</span>
            </div>
            <div>
              <strong>Full</strong>
              <span>
                media coverage: photography, video, drone and a highlight reel
              </span>
            </div>
          </div>
        </section>

        <section className="section-pad proposal-partners">
          <SectionIntro
            label="ALREADY ON BOARD"
            title="Partners supporting"
            accent="this conference."
            text="The supplied proposal lists the following organisations and roles."
          />
          <div className="proposal-confirmed-partners">
            <article>
              <img
                src="/images/partners/sqi-college-of-ict.png"
                alt="SQI College of ICT logo"
              />
              <div>
                <span>GOLD PARTNER</span>
                <h3>SQI College of ICT</h3>
              </div>
            </article>
            <article>
              <img
                src="/images/week4/IMG_3066.jpg"
                alt="HarvestHouse Christian Center image"
              />
              <div>
                <span>VENUE PARTNER</span>
                <h3>HarvestHouse Christian Center</h3>
              </div>
            </article>
            <article>
              <img
                src="/images/partners/oyo-state-ministry-of-education.jpg"
                alt="Oyo State Ministry of Education logo"
              />
              <div>
                <span>SUPPORTING PARTNER</span>
                <h3>Oyo State Ministry of Education</h3>
              </div>
            </article>
            <article>
              <img
                src="/images/partners/oyo-state-universal-basic-education-board.jpg"
                alt="Oyo State Universal Basic Education Board logo"
              />
              <div>
                <span>SUPPORTING PARTNER</span>
                <h3>Oyo State Universal Basic Education Board</h3>
              </div>
            </article>
          </div>
          <p className="content-note">
            The proposal states that headline, platinum, gold and silver
            sponsorship places are open. The Gold tier is listed as having 1 of
            5 slots taken.
          </p>
        </section>

        <section className="section-pad proposal-value">
          <SectionIntro
            label="WHY PARTNER WITH US"
            title="What your support"
            accent="makes possible."
          />
          <div className="proposal-value-grid">
            <article>
              <h3>Transform lives</h3>
              <p>
                Equip 800 adults to raise confident children. The impact
                multiplies in every home and class.
              </p>
            </article>
            <article>
              <h3>Reach real influencers</h3>
              <p>
                Teachers, parents and school leaders who shape dozens of
                children and families each.
              </p>
            </article>
            <article>
              <h3>Earn lasting trust</h3>
              <p>
                Teachers and parents remember who showed up for them, and they
                tell others.
              </p>
            </article>
            <article>
              <h3>Invest in education</h3>
              <p>
                Supports UN Sustainable Development Goal 4, quality education,
                with results you can report.
              </p>
            </article>
            <article>
              <h3>Content that lasts</h3>
              <p>
                Professional photos, video and a highlight reel for your own
                channels.
              </p>
            </article>
            <article>
              <h3>A proven partner</h3>
              <p>
                Nine years of programmes delivered and reported. Every naira is
                accounted for.
              </p>
            </article>
          </div>
        </section>

        <section className="section-pad proposal-packages">
          <SectionIntro
            label="SPONSORSHIP PACKAGES"
            title="Four ways"
            accent="to partner."
            text="Choose a package aligned with your organisation's goals. All figures are in Nigerian Naira."
          />
          <div className="proposal-package-grid">
            {packages.map((item) => (
              <article key={item.name}>
                <span>{item.slots}</span>
                <h3>{item.name} Partner</h3>
                <strong>{item.price}</strong>
                <ul>
                  {item.items.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="content-note">
            The organisers provide each exhibition stand's space, table and
            canopy. Sponsors bring their branded materials.
          </p>
          <h3 className="proposal-subheading">Benefits side by side</h3>
          <div className="proposal-table-wrap">
            <table className="proposal-table">
              <thead>
                <tr>
                  <th>Benefit</th>
                  <th>Headline ₦8M</th>
                  <th>Platinum ₦5M</th>
                  <th>Gold ₦1M</th>
                  <th>Silver ₦500K</th>
                </tr>
              </thead>
              <tbody>
                {benefits.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, i) => (
                      <td key={i}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="section-pad proposal-budget">
          <SectionIntro
            label="WHERE YOUR MONEY GOES"
            title="A transparent"
            accent="conference budget."
            text="The proposal sets out a total budget of ₦10,317,800, with ₦9,317,800 to raise. The venue is provided in kind by a partner."
          />
          <div className="budget-total-grid">
            <div>
              <span>TOTAL BUDGET</span>
              <strong>₦10,317,800</strong>
            </div>
            <div>
              <span>TO RAISE</span>
              <strong>₦9,317,800</strong>
            </div>
          </div>
          <div className="proposal-table-wrap">
            <table className="proposal-table">
              <thead>
                <tr>
                  <th>Budget area</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {budget.map((row) => (
                  <tr key={row[0]}>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 className="proposal-subheading">Detailed budget</h3>
          <div className="proposal-table-wrap">
            <table className="proposal-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Qty</th>
                  <th>Unit (₦)</th>
                  <th>Total (₦)</th>
                </tr>
              </thead>
              <tbody>
                {detailedBudget.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, i) => (
                      <td key={i}>{cell}</td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <th colSpan="3">Total budget</th>
                  <th>₦10,317,800</th>
                </tr>
                <tr>
                  <td colSpan="3">Venue provided by a partner</td>
                  <td>₦1,000,000</td>
                </tr>
                <tr>
                  <th colSpan="3">Amount to raise</th>
                  <th>₦9,317,800</th>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="content-note">
            All figures are in Nigerian Naira. The proposal's headline budget
            summary lists venue support at ₦750,000, while its detailed budget
            lists venue and screen at ₦1,000,000 and the in-kind venue
            contribution at ₦1,000,000. Both figures are shown as supplied
            rather than silently reconciled.
          </p>
        </section>

        <section className="section-pad proposal-support">
          <SectionIntro
            label="OTHER WAYS TO SUPPORT"
            title="Give in the way"
            accent="that suits you."
          />
          <div className="proposal-value-grid">
            <article>
              <h3>Adopt a budget line</h3>
              <p>Fund one part of the day and be named as its partner.</p>
              <ul>
                <li>Participant meals and water — ₦2,000,000</li>
                <li>Delegate packs — ₦1,700,000</li>
                <li>Branding and decoration — ₦1,500,000</li>
                <li>Media coverage — ₦750,000</li>
                <li>Volunteer T-shirts — ₦350,000</li>
              </ul>
            </article>
            <article>
              <h3>In-kind support</h3>
              <p>
                Food, drinks, printing, gift items or equipment, recognised at
                the tier that matches their value.
              </p>
            </article>
            <article>
              <h3>Media partnership</h3>
              <p>
                Radio, TV and online platforms that help reach teachers and
                parents, in return for branding.
              </p>
            </article>
            <article>
              <h3>A package built for you</h3>
              <p>
                Tell the organisers what matters to your organisation and they
                will shape a partnership around your goals.
              </p>
            </article>
          </div>
        </section>

        <section className="section-pad proposal-commitment">
          <SectionIntro
            label="OUR COMMITMENT TO YOU"
            title="Clear, accountable"
            accent="and on time."
          />
          <div className="proposal-commit-grid">
            <article>
              <span>BEFORE THE EVENT</span>
              <p>
                Written confirmation by email, an official receipt, and your
                approval of every branded item before printing.
              </p>
            </article>
            <article>
              <span>ON THE DAY</span>
              <p>
                A named sponsor contact who makes sure every benefit in your
                package is delivered as agreed.
              </p>
            </article>
            <article>
              <span>AFTER THE EVENT</span>
              <p>
                An impact report with attendance, participant feedback, spending
                summary, photos and media reach.
              </p>
            </article>
          </div>
          <h3 className="proposal-subheading">Key dates</h3>
          <div className="proposal-dates">
            {dates.map(([date, detail]) => (
              <article key={date}>
                <b>{date}</b>
                <span>{detail}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="sponsor-contact-band section-pad">
          <div className="sponsor-contact-symbol">
            <Building2 size={34} />
          </div>
          <div>
            <p className="section-label">
              <span />
              SPONSORSHIP & PARTNERSHIP ENQUIRIES
            </p>
            <h2>
              Let's raise world
              <br />
              <em>leaders together.</em>
            </h2>
            <p className="page-body">
              The foundation would love to walk you through the full vision and
              shape a partnership that fits your goals.
            </p>
            <div className="proposal-contact-details">
              <p>
                <b>EMAIL</b>
                <a href="mailto:foundation@rubiestech.org">
                  foundation@rubiestech.org
                </a>
              </p>
              <p>
                <b>PHONE</b>
                <a href="tel:+2347015016330">+234 701 501 6330</a> ·{" "}
                <a href="tel:+2348109711209">+234 810 971 1209</a>
              </p>
              <p>
                <b>WEBSITE</b>
                <a
                  href="https://rubiestech.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  rubiestech.org
                </a>
              </p>
              <p>
                <b>LINKEDIN AND X</b>
                <span>Rubies Tech Foundation</span>
              </p>
            </div>
            <a
              className="button button-pink"
              href="mailto:foundation@rubiestech.org?subject=Teacher%20%26%20Parent%20Conference%202026%20partnership%20enquiry"
            >
              Contact the foundation <Mail size={16} />
            </a>
          </div>
        </section>
        <PageCTA
          title="Explore the conference partners"
          text="See the organisations named in the 2026 proposal."
          href="/partners"
          label="Meet the partners"
        />
      </main>
      <SiteFooter />
    </>
  );
}

export function PartnersPage() {
  const audiences = [
    {
      n: "01",
      title: "Education organisations",
      text: "Connect around ideas, resources and practices that can support better learning experiences.",
    },
    {
      n: "02",
      title: "Community organisations",
      text: "Help bring different voices into the conversation about children's growth and wellbeing.",
    },
    {
      n: "03",
      title: "Businesses and supporters",
      text: "Explore practical ways to contribute expertise, resources or services to the event.",
    },
  ];
  return (
    <>
      <main id="main-content">
        <PageHero
          eyebrow="WORKING BETTER TOGETHER"
          title="Progress is a"
          accent="shared effort."
          description="TPC / 26 welcomes conversations with organisations and communities who care about the people shaping the next generation."
          image="/images/week4/IMG_3150.jpg"
          tag="CONNECTION · COLLABORATION · COMMUNITY"
        />
        <section className="partners-manifesto section-pad">
          <p className="section-label">
            <span />A SHARED COMMITMENT
          </p>
          <h2>
            Different strengths.
            <br />
            <em>One important future.</em>
          </h2>
          <p className="page-body">
            Parents, teachers, schools, community groups and organisations each
            bring a different perspective. Meaningful collaboration creates
            opportunities to exchange knowledge, find common ground and support
            the adults helping children thrive.
          </p>
        </section>
        <section className="partner-audience-section section-pad">
          <SectionIntro
            label="WHO CAN CONNECT WITH US"
            title="There is room for"
            accent="more voices."
            text="We are open to enquiries from groups whose work aligns with the aims of the conference."
          />
          <div className="partner-audience-grid">
            {audiences.map(({ n, title, text }) => (
              <article key={n}>
                <span>{n}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <ArrowRight size={19} />
              </article>
            ))}
          </div>
          <p className="content-note">
            No organisation's participation or endorsement should be assumed
            until confirmed by the conference organisers.
          </p>
        </section>
        <section className="partner-gallery-band">
          <img
            src="/images/week4/IMG_3066.jpg"
            alt="People coming together for a learning and community event"
          />
          <div>
            <p className="section-label">
              <span />
              THE VALUE OF CONNECTION
            </p>
            <h2>
              Make space for
              <br />
              <em>shared ideas.</em>
            </h2>
            <p>
              Strong partnerships begin with a conversation. Tell the team what
              your organisation does and how you would like to get involved.
            </p>
            <a
              className="button button-pink"
              href="mailto:foundation@rubiestech.org?subject=TPC%2026%20partnership%20enquiry"
            >
              Start a conversation <Mail size={16} />
            </a>
          </div>
        </section>
        <PageCTA
          title="Could we work together?"
          text="Contact the team to discuss partner opportunities and confirm the current arrangements."
          href="/sponsor"
          label="View sponsorship options"
        />
      </main>
      <SiteFooter />
    </>
  );
}

export function VenuePage() {
  const visit = [
    {
      icon: MapPin,
      title: "Confirm the location",
      text: "The Alpha Hall, Iyana Olopa Road, Akobo, Ibadan, Nigeria.",
    },
    {
      icon: CalendarDays,
      title: "Keep the date in view",
      text: "The conference is scheduled for Saturday, 28 November 2026.",
    },
    {
      icon: MessageCircle,
      title: "Check before travelling",
      text: "Confirm start time, entry arrangements and any updated directions with the organisers.",
    },
  ];
  return (
    <>
      <main id="main-content">
        <PageHero
          eyebrow="VENUE & VISITOR INFORMATION"
          title="A place to meet."
          accent="Ideas to take home."
          description="Plan for a day of learning and connection at The Alpha Hall in Akobo, Ibadan."
          image="/images/week4/IMG_3068.jpg"
          tag="AKOBO · IBADAN, NIGERIA"
        />
        <section className="venue-feature-section section-pad">
          <div className="venue-photo-stack">
            <img
              src="/images/week4/IMG_3060.jpg"
              alt="Conference venue and event space"
            />
            <div className="venue-photo-label">
              <MapPin size={18} />
              <span>
                AKOBO, IBADAN<strong>NIGERIA</strong>
              </span>
            </div>
          </div>
          <div className="venue-feature-copy">
            <p className="section-label">
              <span />
              YOUR VISIT AT A GLANCE
            </p>
            <h2>
              Arrive ready
              <br />
              to <em>connect.</em>
            </h2>
            <p className="page-body">
              The venue for TPC / 26 is The Alpha Hall, Iyana Olopa Road, Akobo,
              Ibadan. As the event approaches, check with the organisers for the
              final schedule, entry information and any travel guidance.
            </p>
            <div className="venue-fact-row">
              <CalendarDays />
              <div>
                <small>CONFERENCE DATE</small>
                <strong>Saturday, 28 November 2026</strong>
              </div>
            </div>
            <div className="venue-fact-row">
              <MapPin />
              <div>
                <small>VENUE</small>
                <strong>The Alpha Hall</strong>
                <span>Akobo, Ibadan, Nigeria</span>
              </div>
            </div>
            <a
              className="button button-pink"
              href="https://www.google.com/maps/search/?api=1&query=The+Alpha+Hall+Iyana+Olopa+Road+Akobo+Ibadan"
              target="_blank"
              rel="noreferrer"
            >
              Open map directions <ExternalLink size={15} />
            </a>
          </div>
        </section>
        <section className="venue-planning-section section-pad">
          <SectionIntro
            label="BEFORE YOU SET OFF"
            title="A smoother visit"
            accent="starts with a check."
            text="Use these quick reminders to make sure you have the information you need before travelling."
          />
          <div className="venue-planning-grid">
            {visit.map(({ icon: Icon, title, text }, i) => (
              <article key={title}>
                <span>0{i + 1}</span>
                <Icon size={23} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <p className="content-note">
            Final arrival times, parking details, accessibility information and
            on-the-day arrangements should be confirmed by the organisers.
          </p>
        </section>
        <PageCTA
          title="Planning to attend?"
          text="Request the official registration details before making your plans."
          href="/register"
          label="Registration information"
        />
      </main>
      <SiteFooter />
    </>
  );
}

const impactDetails = [
  {
    id: "01",
    title: "Mentor with purpose",
    accent: "Lead by example.",
    image: "/images/week4/IMG_3111.jpg",
    body: "Children learn from the adults around them. Purposeful mentoring means making time to listen, asking thoughtful questions and modelling curiosity, integrity and courage.",
    points: [
      "Create space for questions and discovery.",
      "Model the values you want children to practise.",
      "Celebrate effort, progress and thoughtful problem-solving.",
    ],
  },
  {
    id: "02",
    title: "Strengthen wellbeing",
    accent: "Support the whole child.",
    image: "/images/week4/IMG_3148.jpg",
    body: "Learning and wellbeing are connected. Parents and educators can help children feel heard and supported while also caring for their own resilience as the adults guiding them.",
    points: [
      "Listen without rushing to judge.",
      "Build routines that encourage belonging and confidence.",
      "Make supportive conversations part of everyday life.",
    ],
  },
  {
    id: "03",
    title: "Raise digital leaders",
    accent: "Use technology wisely.",
    image: "/images/week4/IMG_3090.jpg",
    body: "Digital confidence is more than knowing how to use a device. Young people need opportunities to create with technology while learning about safety, responsibility and the impact of their choices.",
    points: [
      "Encourage children to build and create, not only consume.",
      "Talk openly about online safety and responsible AI use.",
      "Connect digital skills with real-world problem-solving.",
    ],
  },
  {
    id: "04",
    title: "Find your people",
    accent: "Grow through connection.",
    image: "/images/week4/IMG_3150.jpg",
    body: "No parent or teacher has to solve every challenge alone. A supportive community creates room to share experience, exchange ideas and build practical relationships around children's development.",
    points: [
      "Share what works and what you are still learning.",
      "Build respectful communication between home and school.",
      "Keep useful connections going after the conference.",
    ],
  },
  {
    id: "05",
    title: "Turn insight into action",
    accent: "Make learning practical.",
    image: "/images/week4/IMG_3068.jpg",
    body: "An inspiring idea matters most when it can be used. Take conference insights and adapt them to your own classroom, home or community rather than waiting for one perfect solution.",
    points: [
      "Choose one useful idea to try first.",
      "Adapt strategies to the needs of your children.",
      "Reflect on what worked and improve as you go.",
    ],
  },
  {
    id: "06",
    title: "Shape tomorrow together",
    accent: "Raise world leaders together.",
    image: "/images/week4/IMG_3060.jpg",
    body: "Children's futures are shaped by many people: families, teachers, school leaders, communities and organisations. Shared purpose helps these groups work toward a future where every child has the chance to learn and thrive.",
    points: [
      "Keep children's needs at the centre of decisions.",
      "Connect education with character, creativity and digital skills.",
      "Look for practical ways to contribute in your community.",
    ],
  },
];
const momentDetails = [
  {
    id: "01",
    title: "Learning side by side",
    image: "IMG_3111.jpg",
    body: "Learning grows when people can explore, ask questions and share discoveries together. This image represents the practical, community-centred learning that inspires the foundation's work.",
  },
  {
    id: "02",
    title: "Ideas in action",
    image: "IMG_3090.jpg",
    body: "Hands-on activities help young learners turn new ideas into something they can test, change and improve. Practical learning can make technology feel more accessible.",
  },
  {
    id: "03",
    title: "Every learner matters",
    image: "IMG_3148.jpg",
    body: "Every child deserves the opportunity to learn regardless of background or location. Supportive learning environments make room for different starting points and different strengths.",
  },
  {
    id: "04",
    title: "Guidance that grows confidence",
    image: "IMG_3068.jpg",
    body: "Guidance from teachers, mentors and caring adults can help young people move from uncertainty to confidence as they build new skills.",
  },
  {
    id: "05",
    title: "A community of learners",
    image: "IMG_3150.jpg",
    body: "A strong learning community brings together people with different experiences and a shared commitment to helping children thrive.",
  },
  {
    id: "06",
    title: "Growing together",
    image: "IMG_3060.jpg",
    body: "Progress is built through consistent opportunities, encouragement and collaboration. Every small step can help open the door to a bigger future.",
  },
];

export function ImpactDetailPage() {
  const { id } = useParams();
  const item = impactDetails.find((entry) => entry.id === id);
  if (!item)
    return (
      <main id="main-content" className="section-pad">
        <h1>Page not found</h1>
        <Link to="/">Return home</Link>
      </main>
    );
  return (
    <>
      <main id="main-content">
        <PageHero
          eyebrow={`WHAT YOU WILL TAKE HOME · ${item.id}`}
          title={item.title}
          accent={item.accent}
          description={item.body}
          image={item.image}
          tag="PRACTICAL IDEAS · SHARED PURPOSE"
        />
        <section className="detail-content-section section-pad">
          <div>
            <p className="section-label">
              <span />
              PUT IT INTO PRACTICE
            </p>
            <h2>
              Small steps.
              <br />
              <em>Meaningful change.</em>
            </h2>
          </div>
          <div className="detail-points">
            {item.points.map((point, i) => (
              <article key={point}>
                <span>0{i + 1}</span>
                <p>{point}</p>
              </article>
            ))}
          </div>
        </section>
        <PageCTA
          title="Keep exploring the conference."
          text="Discover the people, programme and mission behind TPC / 26."
          href="/programme"
          label="View the agenda"
        />
      </main>
      <SiteFooter />
    </>
  );
}

export function MomentDetailPage() {
  const { id } = useParams();
  const item = momentDetails.find((entry) => entry.id === id);
  if (!item)
    return (
      <main id="main-content" className="section-pad">
        <h1>Page not found</h1>
        <Link to="/">Return home</Link>
      </main>
    );
  return (
    <>
      <main id="main-content">
        <PageHero
          eyebrow={`SMALL MOMENTS · ${item.id}`}
          title={item.title}
          accent="Lasting impact."
          description={item.body}
          image={`/images/week4/${item.image}`}
          tag="LEARNING IN COMMUNITY"
        />
        <section className="moment-detail section-pad">
          <img src={`/images/week4/${item.image}`} alt={item.title} />
          <div>
            <p className="section-label">
              <span />
              WHY THESE MOMENTS MATTER
            </p>
            <h2>
              Opportunity begins
              <br />
              <em>with access.</em>
            </h2>
            <p className="page-body">
              {item.body} Rubies Tech Foundation works to make technology
              education more accessible to children and teenagers, especially in
              communities where opportunities may be limited.
            </p>
            <Link className="text-link" to="/foundation">
              Discover the foundation <ArrowRight size={16} />
            </Link>
          </div>
        </section>
        <PageCTA
          title="Every child deserves a chance to create."
          text="Learn how Rubies Tech Foundation is working to widen access to technology education."
          href="/foundation"
          label="About the foundation"
        />
      </main>
      <SiteFooter />
    </>
  );
}

export function FoundationPage() {
  return (
    <>
      <main id="main-content">
        <PageHero
          eyebrow="ABOUT RUBIES TECH FOUNDATION"
          title="Technology for"
          accent="every child."
          description="Making technology education accessible to every child, regardless of background or location."
          image="/images/week4/IMG_3090.jpg"
          tag="ACCESS · SKILLS · OPPORTUNITY"
        />
        <section className="foundation-story section-pad">
          <div>
            <p className="section-label">
              <span />
              OUR STORY
            </p>
            <h2>
              One visit.
              <br />
              <em>A wider mission.</em>
            </h2>
          </div>
          <div>
            <p className="page-body">
              Rubies Tech Foundation is the nonprofit arm of Rubies
              Technologies. It provides free coding programmes, training and
              community projects for children and teenagers in low-income, rural
              and hard-to-reach communities, helping them build digital skills
              to thrive and compete globally.
            </p>
            <p className="page-body">
              The story began on 15 June 2017, when founder Temiloluwa Olarinde
              visited three schools in Akure, Ondo State, to teach children
              Scratch programming for free. Having grown up without access to
              technology herself, she wanted the next generation to have
              opportunities she had missed.
            </p>
            <p className="page-body">
              What began as a few school visits grew into free bootcamps and
              community projects across Ondo, Oyo, Ogun and Lagos States. In
              2022, Rubies Tech Foundation was formally registered to carry the
              mission forward.
            </p>
          </div>
        </section>
        <section className="foundation-programmes section-pad">
          <SectionIntro
            label="OUR WORK"
            title="Opening doors to"
            accent="digital possibility."
            text="Programmes are designed to bring practical technology learning closer to young people and the adults who support them."
          />
          <div className="foundation-programme-grid">
            <article>
              <img
                src="/images/week4/IMG_3090.jpg"
                alt="Children learning with computers"
              />
              <span>01</span>
              <h3>Tech Up Bootcamp</h3>
              <p>
                Free holiday coding programmes in communities including Ijoko,
                Epe and Ogbomoso, where children can build their first projects.
              </p>
            </article>
            <article>
              <img
                src="/images/week4/IMG_3111.jpg"
                alt="Practical learning session"
              />
              <span>02</span>
              <h3>Girls Tech Bootcamp</h3>
              <p>
                A programme designed to help close the gender gap in technology,
                training teenage girls in Python and robotics over six months.
              </p>
            </article>
            <article>
              <img
                src="/images/week4/IMG_3068.jpg"
                alt="Mentoring and technology education"
              />
              <span>03</span>
              <h3>School Tech Tour</h3>
              <p>
                Taking technology education directly into schools and helping
                establish Code Clubs for continued learning.
              </p>
            </article>
            <article>
              <img
                src="/images/week4/IMG_3150.jpg"
                alt="Young people learning together"
              />
              <span>04</span>
              <h3>Kids Spotlight</h3>
              <p>
                Sharing the stories of young innovators so more people can see
                what children are learning and building.
              </p>
            </article>
          </div>
        </section>
        <section className="foundation-quote section-pad">
          <p className="section-label">
            <span />
            OUR BELIEF
          </p>
          <h2>
            Every child deserves the chance to create solutions{" "}
            <em>with technology.</em>
          </h2>
          <p>
            Through the Brace Conference for kids and teens, alongside
            conferences for teachers, parents and school leaders, the foundation
            also supports the adults preparing children for a digital future.
          </p>
        </section>
        <PageCTA
          title="Help widen access to opportunity."
          text="Explore the conference and find out how you can be part of the community."
          href="/register"
          label="Explore registration"
        />
      </main>
      <SiteFooter />
    </>
  );
}

export function ProgrammePage() {
  return (
    <>
      <main id="main-content">
        <PageHero
          eyebrow="TPC / 26 · EVENT AGENDA"
          title="One day."
          accent="A shared future."
          description="The supplied programme for Raising World Leaders Together, bringing educators, parents, public leaders and technology voices into one room."
          image="/images/week4/IMG_3111.jpg"
          tag="SATURDAY · 28 NOVEMBER 2026"
        />
        <section className="section-pad programme-full-page">
          <div className="programme-full-heading">
            <div>
              <p className="section-label">
                <span />
                THE DAY AT A GLANCE
              </p>
              <h2>
                Teacher &amp; Parent
                <br />
                <em>Conference 2026.</em>
              </h2>
            </div>
            <div className="programme-location">
              <CalendarDays />
              <strong>Saturday, 28 November 2026</strong>
              <span>The Alpha Hall, Iyana Olopa Road, Akobo, Ibadan</span>
            </div>
          </div>
          <div className="programme-full-list">
            {[
              [
                "9:00–10:00 AM",
                "Registration",
                "Video presentation on AI & education",
              ],
              ["10:00–10:10 AM", "Welcome address", "Boluwatife Adebisi"],
              [
                "10:10–10:15 AM",
                "Opening remarks",
                "Framing the conference theme and goals",
              ],
              [
                "10:15–10:50 AM",
                "The Mind Behind the Mission",
                "Dr Adesina Aladewura · Keynote",
              ],
              [
                "10:55–11:25 AM",
                "Healing the Wounded Mind",
                "Mr Adesida Adetunji · Mental resilience for educators",
              ],
              [
                "11:30 AM–12:00 PM",
                "The Role of Government in Raising Leaders",
                "Panel 1 · Moderator: Samuel Obasa",
              ],
              [
                "12:05–12:20 PM",
                "Sponsors & partners showcase",
                "Meet supporting organisations",
              ],
              [
                "12:25–12:55 PM",
                "The Purpose-Driven Educator",
                "Mr Timothy Ayodele",
              ],
              ["1:00–1:30 PM", "The Economics of Vision", "Ruth Olabode"],
              [
                "1:35–2:15 PM",
                "Dismantling the Victim Mentality",
                "Panel 2 · Moderator: Boluwatife Adebisi",
              ],
              [
                "2:20–2:35 PM",
                "Lunch, networking & partners showcase",
                "Refreshments and connection",
              ],
              ["2:40–3:10 PM", "From Classroom to Career", "Mr Favour Afolabi"],
              [
                "3:15–3:55 PM",
                "AI Safety Measures",
                "Panel 3 · Moderator: Aruna Azeez",
              ],
              ["3:55–4:00 PM", "Group pictures", "Hosted community photo"],
              [
                "4:05–4:20 PM",
                "Games, gifts & sponsor showcase",
                "Closing activities",
              ],
              ["4:20–4:25 PM", "Closing remarks", "Adeola Lawal"],
            ].map(([time, title, detail], i) => (
              <article key={time}>
                <time>{time}</time>
                <span>0{i + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="content-note">
            Agenda adapted from the supplied sponsorship proposal. The organiser
            should confirm the final venue, speaker details and running order
            before publication.
          </p>
        </section>
        <PageCTA
          title="Be part of the conversation."
          text="Find out how to take part in the conference."
          href="/register"
          label="Registration information"
        />
      </main>
      <SiteFooter />
    </>
  );
}

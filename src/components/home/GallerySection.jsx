import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const moments = [
  { image: "MAP_0058.jpg", title: "Learning side by side", detail: "Practical guidance and shared discovery", className: "gallery-card-tall" },
  { image: "MAP_0113.jpg", title: "Ideas in action", detail: "Learners building skills together", className: "" },
  { image: "MAP_0137.jpg", title: "Every learner matters", detail: "Focused support at every step", className: "" },
  { image: "MAP_0138.jpg", title: "Guidance that grows confidence", detail: "Mentoring through hands-on learning", className: "gallery-card-wide" },
  { image: "MAP_0143.jpg", title: "A community of learners", detail: "Different perspectives, one shared goal", className: "" },
  { image: "MAP_0148.jpg", title: "Growing together", detail: "A room full of curiosity", className: "" },
  { image: "MAP_0151.jpg", title: "Shared experiences", detail: "Learning through connection", className: "" },
  { image: "MAP_0152.jpg", title: "Building the future", detail: "A community making a difference", className: "" },
];

export default function GallerySection() {
  return (
    <section className="gallery-section section-pad" id="moments" aria-labelledby="gallery-title">
      <div className="gallery-heading">
        <div>
          <p className="section-label"><span /> LEARNING IN COMMUNITY</p>
          <h2 id="gallery-title">Small moments.<br /><em>Lasting impact.</em></h2>
        </div>
        <p className="gallery-intro">A look at the people, practical learning and shared experiences that help young people build confidence for the future.</p>
      </div>
      <div className="gallery-grid">
        {moments.map((moment, index) => (
          <Link className={`gallery-card ${moment.className}`} key={moment.image} to={`/moments/0${index + 1}`} aria-label={`Read more: ${moment.title}`}>
            <img src={`/images/week1/${moment.image}`} alt={moment.title} loading="lazy" />
            <div className="gallery-shade" />
            <div className="gallery-card-copy">
              <span>0{index + 1} / COMMUNITY</span>
              <h3>{moment.title}</h3>
              <p>{moment.detail}</p>
            </div>
            <span className="gallery-card-arrow" aria-hidden="true"><ArrowUpRight size={19} /></span>
          </Link>
        ))}
      </div>
      <div className="gallery-note-panel"><span className="gallery-note-mark">TPC / 26</span><p>Photography from the supplied Week 1 folder highlights the people and shared experiences behind the conference. Explore each story to see how access, guidance and shared effort can open new possibilities for young people.</p><Link to="/foundation">Learn about the foundation <ArrowUpRight size={16}/></Link></div>
    </section>
  );
}

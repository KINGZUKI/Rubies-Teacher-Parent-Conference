import { CalendarDays, MapPin, UsersRound } from "lucide-react";

const stats = [
  {
    icon: UsersRound,
    value: "800+",
    label: "teachers, parents & leaders",
  },
  {
    icon: CalendarDays,
    value: "28",
    suffix: "NOV ’26",
    label: "Saturday · Ibadan",
  },
  {
    icon: MapPin,
    value: "One shared vision",
    label: "Stronger schools, brighter futures",
  },
];

export default function StatsBanner() {
  return (
    <section className="stats-banner" aria-label="Conference highlights">
      <div className="stats-inner">
        {stats.map(({ icon: Icon, value, suffix, label }) => (
          <div className="stat-item" key={value}>
            <span className="stat-icon"><Icon size={27} aria-hidden="true" /></span>
            <div>
              <strong>{value}{suffix && <small> {suffix}</small>}</strong>
              <span>{label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

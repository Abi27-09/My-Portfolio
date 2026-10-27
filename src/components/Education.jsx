import { GraduationCap, CalendarDays, MapPin } from "lucide-react";

const education = [
  
  {
    level: "Postgraduate",
    qualification: "Master of Computer Applications (MCA)",
    institution: "Spectrum Institute of Management and Computer Sciences, LB Nagar",
    university: "Osmania University, Hyderabad",
    period: "2024 – 2026",
    location: "Hyderabad, Telangana, India",
    details: "Computer Science",
    score: "7.0/10 CGPA",
  },
  {
    level: "Graduate",
    qualification: "Bachelor of Science",
    institution: "Government Degree College, Kukatpally",
    university: "Osmania University, Hyderabad",
    period: "2021 – 2024",
    location: "Hyderabad, Telangana, India",
    details: "Computer Science",
    score: "7.85/10 CGPA",
  },
  {
    level: "Intermediate",
    qualification: "Intermediate / 12th Standard",
    institution: "Sai Shivani Junior College, Hanumakonda",
    period: "2021",
    location: "Hanumakonda, Telangana",
    score: "90%",
  },
  {
    level: "10th Standard",
    qualification: "SSC / Secondary School Certificate",
    institution: "Raman High School, Madikonda",
    period: "2019",
    location: "Hanumakonda, Telangana",
    score: "8.0 CGPA",
  },
];

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="section-heading">
        <span className="eyebrow">ACADEMIC JOURNEY</span>
        <h2>
          My <span className="gradient-text">Education</span>
        </h2>
        <p>My academic journey, from school to higher education.</p>
      </div>

      <div className="education-list">
  {education.map((item, index) => (
    <article className="education-card" key={item.level}>
      <div className="education-timeline">
        <div className="education-icon">
          <GraduationCap size={22} />
        </div>

        {index < education.length - 1 && (
          <div className="education-timeline-line" />
        )}
      </div>

      <div className="education-content">
        <span className="education-level">{item.level}</span>
        <h3>{item.qualification}</h3>
        <h4>{item.institution}</h4>

        {item.university && (
          <p className="education-university">
            University: {item.university}
          </p>
        )}

        {item.details && (
          <p className="education-details">{item.details}</p>
        )}

        <div className="education-meta">
          <span>
            <CalendarDays size={15} />
            {item.period}
          </span>
          <span>
            <MapPin size={15} />
            {item.location}
          </span>
        </div>

        <p className="education-score">
          <strong>CGPA / Percentage:</strong> {item.score}
        </p>
      </div>
    </article>
  ))}
</div>
    </section>
  );
}
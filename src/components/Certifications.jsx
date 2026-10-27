import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Cybersecurity Analyst",
    issuer: "Tata Strive Skill Development Centre",
    date: "April 2025 – July 2025",
    status: "COMPLETED",
    credentialId: "500385978",
    certificateUrl: "https://drive.google.com/file/d/1N-6hh6aJ8Dj3NdjM0zYRN5M3Yid7swT2/view?usp=drive_link",
  },
  {
    title: "Cyber Threat Intelligence 101",
    issuer: "ARC Foundation",
    date: "May 2026",
    status: "COMPLETED",
    certificateUrl: "Ahttps://arcx.io/verify-certificate?id=40d548e4ab0b7d7d9f19a99bfce97351dcf21c8e&k=d5ec08ac31234c97b2307b8aecb72463",
  },
  {
    title: "Junior SOC Analyst",
    issuer: "Vibe Security",
    date: "May 2026",
    status: "COMPLETED",
    credentialId: "VS-JSOC-CERT443464",
    certificateUrl: "https://vibsecurity.com/verify-certificate?id=VS-JSOC-CERT443464",
  },
  {
    title: "Junior GRC Analyst",
    issuer: "Vibe Security",
    date: "May 2026",
    status: "COMPLETED",
    credentialId: "VS-JGRC-CERT991743",
    certificateUrl: "ADD_CERTIFICATE_URLhttps://vibsecurity.com/verify-certificate?id=VS-JGRC-CERT991743",
  },
  {
    title: "Certified Ethical Hacker",
    issuer: "Cisco Networking Academy",
    date: "June 2026",
    status: "COMPLETED",
    certificateUrl: "https://drive.google.com/file/d/1MR8dKezgaWu6xIKrU2frr4j7N1uxeTy_/view?usp=drive_link",
  },
  {
    title: "Cybersecurity & Ethical Hacking Internship",
    issuer: "Cryptonic Area",
    date: "July 2026 – August 2026",
    status: "COMPLETED",
    credentialId: "CA0072",
    certificateUrl: "https://drive.google.com/drive/folders/1PoZwHL_t-lQio-WnqcgyESqpj_wveJeI?usp=drive_link",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section cert-section">
      <div className="container">
        <div className="section-kicker reveal">
          <span>04 / CREDENTIALS</span>
          <span>PROFESSIONAL DEVELOPMENT</span>
        </div>

        <div className="section-title-row reveal">
          <h2 className="section-heading">
            Proof of <span className="accent-text">progress.</span>
          </h2>
          <p className="cert-caption">Learning never stops.</p>
        </div>

        <div className="cert-list">
          {certifications.map((cert, i) => (
            <article className="cert-row reveal" key={cert.title}>
              <span className="cert-index">
                {String(i + 1).padStart(2, "0")}
              </span>

              <span className="cert-award">
                <Award size={22} />
              </span>

              <div className="cert-details">
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
                <p className="cert-credential">
                  Credential ID: {cert.credentialId}
                </p>

                {cert.certificateUrl !== "ADD_CERTIFICATE_URL" &&
                  cert.certificateUrl && (
                    <a
                      className="cert-link"
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Certificate
                      <ExternalLink size={14} />
                    </a>
                  )}
              </div>

              <span className="cert-date">{cert.date}</span>
              <span className="cert-status">{cert.status}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
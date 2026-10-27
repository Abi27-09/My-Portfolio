import { ArrowUpRight, ShieldCheck, Network, SearchCode, ChartNoAxesCombined} from "lucide-react";

const projects = [
  {
    number: "01", category: "NETWORK SECURITY", title: "Python Network Packet Sniffer",
    description: "A Python and Scapy tool for observing network packets and inspecting source IPs, destination IPs, and protocol types in an authorized lab environment.",
    tags: ["Python", "Scapy", "Networking"], icon: Network,
    repo: "https://github.com/Abi27-09/Python-Network-PacketSniffer"
  },
  {
    number: "02", category: "RECON AUTOMATION", title: "Web Recon Automation",
    description: "Automates domain reconnaissance by collecting DNS records, HTTP headers, SSL/TLS certificate details, and other public-facing configuration data.",
    tags: ["Python", "DNS", "HTTP / TLS"], icon: SearchCode,
    repo: "https://github.com/Abi27-09/Web-Recon-Automation"
  },
  {
    number: "03", category: "INCIDENT RESPONSE", title: "Security Monitoring & Incident Response",
    description: "Analyzes system logs to flag repeated failed logins and suspicious activity, then helps classify incidents and recommend response actions.",
    tags: ["Python", "Log Analysis", "IR"], icon: ShieldCheck,
    repo: "https://github.com/Abi27-09/Security-Monitoring-Incident-Response"
  },
  {
    number: "04",
    category: "CYBERSECURITY & DATA ANALYTICS",
    title: "A Data Analytics Approach to the Cybercrime Underground Economy",
    description: "A cybersecurity and data analytics project focused on studying cybercrime patterns and managing research data to gain insights into the cybercrime underground economy.",
    tags: ["Python", "Django", "MySQL", "Data Analytics"],
    icon: ChartNoAxesCombined,
    repo: "https://github.com/Abi27-09/A-Data-Analytics-Approach-to-the-Cybercrime-Underground-Economy"
  }
];
export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-kicker reveal"><span>02 / SELECTED WORK</span><span>A FEW THINGS I'VE BUILT</span></div>
        <div className="section-title-row reveal"><h2 className="section-heading">Ideas into <span className="accent-text">reality.</span></h2><a className="text-link" href="https://github.com/Abi27-09" target="_blank" rel="noreferrer">All GitHub projects <ArrowUpRight size={16} /></a></div>
        <div className="projects-grid">
          {projects.map((project) => {
            const Icon = project.icon;
            return <article className="project-card reveal" key={project.number}>
              <div className="project-top"><span className="project-number">{project.number} / 04</span><span className="project-icon"><Icon size={21} /></span></div>
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <a className="project-link" href={project.repo} target="_blank" rel="noreferrer">View repository <ArrowUpRight size={16} /></a>
            </article>;
          })}
        </div>
        <p className="section-note">Replace the sample repository URLs with your actual GitHub project links before publishing.</p>
      </div>
    </section>
  );
}

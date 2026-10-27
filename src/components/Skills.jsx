import { Code2, 
  Shield,  
  ShieldCheck,
  Network,
  Search,
  Bug,
  Code,
  Database,
  Terminal,
  Monitor,
  Eye,
  LockKeyhole,
  Globe,
  FileSearch,
  Activity,
  Server,
  Brain,
  Users,
  MessageCircle,
  Lightbulb,
  Target,
  GitBranch,
  FileCode,
  Radar,
  ChartNoAxesCombined,
  ClipboardCheck,
  BookOpen,
} from "lucide-react";

const skills = [

  // Operating systems
  { name: "Kali Linux", category: "SYSTEMS", icon: Terminal },
  { name: "Ubuntu Linux", category: "SYSTEMS", icon: Monitor },
  { name: "macOS", category: "SYSTEMS", icon: Monitor },
  { name: "Windows", category: "SYSTEMS", icon: Monitor },

    // Programming and data
  { name: "Python", category: "DEVELOPMENT", icon: Code },
  { name: "SQL & Data", category: "DATA", icon: Database },
  { name: "HTML & CSS", category: "DEVELOPMENT", icon: Globe },
  { name: "Git & GitHub", category: "DEVELOPMENT", icon: GitBranch },

    // Security tools
  { name: "Nmap", category: "TOOLS", icon: Network },
  { name: "Wireshark", category: "TOOLS", icon: Activity },
  { name: "Burp Suite", category: "TOOLS", icon: Bug },
  { name: "OWASP ZAP", category: "TOOLS", icon: ShieldCheck },
  { name: "SQLmap", category: "TOOLS", icon: Database },
  { name: "Metasploit", category: "TOOLS", icon: Terminal },
  { name: "Netcat", category: "TOOLS", icon: Network },
  { name: "DVWA", category: "TOOLS", icon: Globe },
  { name: "PortSwigger Labs", category: "TOOLS", icon: BookOpen },
  
  // Cybersecurity
  { name: "Vulnerability Assessment", category: "SECURITY", icon: Bug },
  { name: "Penetration Testing", category: "SECURITY", icon: Search },
  { name: "OWASP Top 10", category: "SECURITY", icon: Globe },
  { name: "Web Application Security", category: "SECURITY", icon: LockKeyhole },
  { name: "Secure Coding", category: "SECURITY", icon: FileCode },
  { name: "Incident Response", category: "SECURITY", icon: Activity },
  { name: "Threat Intelligence", category: "SECURITY", icon: Eye },
  { name: "SIEM Fundamentals", category: "SECURITY", icon: Radar },
  { name: "IDS/IPS", category: "SECURITY", icon: ShieldCheck },
  { name: "Governance, Risk & Compliance", category: "SECURITY", icon: ClipboardCheck },

  // Networking
  { name: "TCP/IP", category: "NETWORKING", icon: Network },
  { name: "DNS", category: "NETWORKING", icon: Globe },
  { name: "HTTP/HTTPS", category: "NETWORKING", icon: Server },
  { name: "Network Monitoring", category: "NETWORKING", icon: Activity },
  { name: "Firewalls", category: "NETWORKING", icon: ShieldCheck },

];
export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-kicker reveal"><span>03 / TOOLKIT</span><span>TECHNOLOGIES I WORK WITH</span></div>
        <div className="skills-intro reveal"><h2 className="section-heading">Tools of the <span className="accent-text">trade.</span></h2><p>A growing toolkit built through hands-on practice, coursework, and independent projects.</p></div>
        <div className="skills-grid">
          {skills.map(({ name, category, icon: Icon }, index) => <div className="skill-card reveal" key={name} style={{ "--delay": `${index * 55}ms` }}>
            <div className="skill-icon"><Icon size={22} strokeWidth={1.7} /></div><span className="skill-category">{category}</span><h3>{name}</h3>
          </div>)}
        </div>
      </div>
    </section>
  );
}

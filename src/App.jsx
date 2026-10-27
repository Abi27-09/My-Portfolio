import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import Certifications from "./components/Certifications.jsx";
import Contact from "./components/Contact.jsx";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="ticker" aria-label="Areas of interest">
          <div className="ticker-track">
            {Array.from({ length: 2 }).map((_, i) => (
              <span className="ticker-set" key={i}>
                <span>BUILD WITH PURPOSE</span><b>✳</b><span>SECURITY MINDED</span><b>✳</b>
                <span>ALWAYS LEARNING</span><b>✳</b>
              </span>
            ))}
          </div>
        </div>
        <section id="about" className="section about-section">
          <div className="section-kicker reveal"><span>01 / ABOUT</span><span>THE PERSON BEHIND THE CODE</span></div>
          <div className="about-grid">
            <h2 className="section-heading reveal">Curious mind.<br /><span className="muted">Practical builder.</span></h2>
            <div className="about-copy reveal">
              <p>I’m Abbadi Abilash, an aspiring cybersecurity professional passionate about network security, Python, and ethical hacking. I enjoy building practical security tools, analyzing vulnerabilities, and exploring ways to protect digital systems. I’m eager to learn, grow, and contribute to real-world cybersecurity challenges.</p>
              <p>My approach is simple: stay curious, keep learning, and turn what I learn into practical projects.</p>
               {/*<a className="text-link" href="/resume.pdf" target="_blank" rel="noreferrer">View resume <ArrowUpRight size={16} /></a>*/}
            </div>
          </div>
          <div className="stats-grid reveal">
            <div className="stat-card"><span className="stat-mark">01</span><strong>Build</strong><span>Hands-on projects</span></div>
            <div className="stat-card"><span className="stat-mark">02</span><strong>Analyze</strong><span>Think critically</span></div>
            <div className="stat-card"><span className="stat-mark">03</span><strong>Improve</strong><span>Learn continuously</span></div>
          </div>
        </section>
        <Education />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <footer className="footer">
        <a className="footer-brand" href="#home">AA<span>.</span></a>
        <p>Designed & built with curiosity.</p>
        <div className="social-links">
          <a href="https://github.com/Abi27-09" aria-label="GitHub" target="_blank" rel="noreferrer"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/abbadi-abilash" aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin size={20} /></a>
          <a href="mailto:abbadiabhilashreddy2790@gmail.com" aria-label="Email"><Mail size={20} /></a>
          <a href="tel:+918897069434" aria-label="Phone"> </a>
        </div>
        <span className="copyright">© {new Date().getFullYear()} Abbadi Abilash</span>
      </footer>
    </>
  );
}

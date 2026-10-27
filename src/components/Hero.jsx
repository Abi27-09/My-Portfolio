import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Github, Linkedin } from "lucide-react";

const roles = ["Cybersecurity Enthusiast","Software Engineer"];

function useTypingEffect(words) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const delay = deleting ? 42 : (text.length === current.length ? 1250 : 82);
    const timer = setTimeout(() => {
      if (!deleting && text === current) setDeleting(true);
      else if (deleting && text.length === 0) {
        setDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
      } else setText(current.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);
    return () => clearTimeout(timer);
  }, [text, deleting, wordIndex, words]);

  return text;
}

export default function Hero() {
  const role = useTypingEffect(roles);
  return (
    <section id="home" className="hero container">
      
      <div className="hero-content">
        
        <div className="availability"><span className="availability-dot" /> OPEN TO OPPORTUNITIES</div>
        <p className="hero-overline">HELLO, WORLD. I'M</p>
        <h1>Abbadi<br /><span className="hero-name">Abilash<span className="period">.</span></span></h1>
        {/*<div className="hero-profile">
          *<img
         src="/profile.jpg"
         alt="Profile photo"
          className="profile-picture"
          />
          </div>*/}
        <div className="role-line"><span className="role-prefix">I’m a</span> <span className="typed-role">{role}</span><span className="cursor" aria-hidden="true">|</span></div>
        <p className="hero-description">I turn curiosity into code and ideas into practical digital experiences—with a security-first mindset.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
          {/*<a className="button button-quiet" href="/resume.pdf" target="_blank" rel="noreferrer">Download CV <ArrowDown size={16} /></a>*/}
        </div>
        <div className="hero-socials">
          <span>FIND ME ON</span>
          <a href="https://github.com/Abi27-09" aria-label="GitHub" target="_blank" rel="noreferrer"><Github size={18} /></a>
          <a href="https://www.linkedin.com/in/abbadi-abilash/" aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin size={18} /></a>
        </div>
      </div>
      <div className="hero-art" aria-label="Abstract creative code illustration">
        <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
        <div className="art-core"><span className="core-bracket">&lt;</span><span className="core-slash">/</span><span className="core-bracket">&gt;</span></div>
        <div className="float-card float-card-top"><span className="float-dot purple" /> building things that matter</div>
        <div className="float-card float-card-bottom"><span className="code-icon">{'{ }'}</span><span>curiosity.exe<br /><small>running...</small></span></div>
        <span className="art-star star-one">✳</span><span className="art-star star-two">✦</span>
        <span className="art-label">FIG. 001 — CREATIVE MODE</span>
      </div>
      <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
    </section>
  );
}

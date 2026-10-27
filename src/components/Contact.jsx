import { useState } from "react";
import { ArrowUpRight, Mail, Send, CheckCircle2, Phone, MapPin } from "lucide-react";

const EMAIL = "abbadiabhilashreddy2790@gmail.com";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setError("");
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please complete all fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nReply email: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  function update(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-layout">
        <div className="contact-copy reveal">
          <div className="section-kicker"><span>05 / SAY HELLO</span><span>YOUR NEXT COLLABORATOR?</span></div>
          <h2 className="section-heading">Have a good<br />idea? <span className="accent-text">Let’s talk.</span></h2>
          <p>Open to entry-level opportunities, internships, collaborations, and conversations about technology.</p>
          <div className="contact-info">
            <a className="contact-email" href={`mailto:${EMAIL}`}><Mail size={18} /> {EMAIL} <ArrowUpRight size={16} /></a>
            <a className="contact-phone" href="tel:+918897069434"><Phone size={18} /> +91 8897 069434</a>
            <a className="contact-location" href="https://maps.google.com/?q=Khairatabad, Hyderabad, Telangana" target="_blank" rel="noopener noreferrer"><MapPin size={18} /> Hyderabad, Telangana</a>
          </div>
        </div>
        <form className="contact-form reveal" onSubmit={handleSubmit}>
          <label htmlFor="name">YOUR NAME</label>
          <input id="name" name="name" autoComplete="name" placeholder="What should I call you?" value={form.name} onChange={update} required />
          <label htmlFor="email">EMAIL ADDRESS</label>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" value={form.email} onChange={update} required />
          <label htmlFor="message">MESSAGE</label>
          <textarea id="message" name="message" rows="4" placeholder="Tell me a little about it..." value={form.message} onChange={update} required />
          {error && <p className="form-error" role="alert">{error}</p>}
          <button className="button button-primary submit-button" type="submit">Prepare email <Send size={16} /></button>
          <p className="form-hint">This form opens your email app with the message filled in. It does not send or store messages on a server.</p>
        </form>
      </div>
    </section>
  );
}

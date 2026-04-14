"use client";
import { useEffect, useState } from "react";

type ModalType = "testimony" | "prayer" | "member";

interface Props {
  type: ModalType;
  onClose: () => void;
}

const config = {
  testimony: {
    label: "Testimony",
    title: "Share Your Testimony",
    question: "What has God done for you?",
    placeholder: "Tell us what God has done in your life...",
    to: "testimonies@thetransformingchurchuk.org",
    successTitle: "Thank You!",
    successText: "Your testimony has been received. We praise God with you!",
  },
  prayer: {
    label: "Prayer",
    title: "Prayer Request",
    question: "What would you like God to do for you?",
    placeholder: "Share your prayer request with us...",
    to: "prayer@thetransformingchurchuk.org",
    successTitle: "We're Praying",
    successText: "Your request has been received. Our prayer team will stand with you in faith.",
  },
  member: {
    label: "Become a Member",
    title: "Join Our Community",
    question: "Do you have any questions?",
    placeholder: "Tell us a bit about yourself or ask any questions...",
    to: "hello@ttcuk.church",
    successTitle: "Welcome!",
    successText: "Thank you for your interest! We'll be in touch with you shortly.",
  },
};

export default function FormModal({ type, onClose }: Props) {
  const c = config[type];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, name, email, message, to: c.to }),
      });
      if (res.ok) {
        setStatus("done");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">&#x2715;</button>

        {status === "done" ? (
          <div className="modal-success">
            <div className="modal-success-icon">✦</div>
            <h2 className="modal-title">{c.successTitle}</h2>
            <p className="modal-success-text">{c.successText}</p>
            <button className="btn-primary" style={{ marginTop: 24 }} onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <>
            <span className="section-label" style={{ display: "block", marginBottom: 8 }}>
              {c.label}
            </span>
            <h2 className="modal-title">{c.title}</h2>

            <form className="modal-form" onSubmit={handleSubmit}>
              <div className="modal-field">
                <label htmlFor="m-name">Name *</label>
                <input
                  id="m-name" type="text" required
                  value={name} onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                />
              </div>
              <div className="modal-field">
                <label htmlFor="m-email">Email *</label>
                <input
                  id="m-email" type="email" required
                  value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                />
              </div>
              <div className="modal-field">
                <label htmlFor="m-msg">{c.question} *</label>
                <textarea
                  id="m-msg" required rows={5}
                  value={message} onChange={(e) => setMessage(e.target.value)}
                  placeholder={c.placeholder}
                />
              </div>

              {status === "error" && (
                <p style={{ color: "#e55", fontSize: 13, margin: 0 }}>
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                className="btn-primary"
                style={{ width: "100%", marginTop: 8 }}
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Submit →"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

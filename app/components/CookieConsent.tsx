"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if user has already set a preference
    const consent = localStorage.getItem("ttcuk_cookie_consent");
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("ttcuk_cookie_consent", "accepted");
    setShow(false);
    // You could also initialize Google Analytics or other trackers here if needed
  };

  const handleDecline = () => {
    localStorage.setItem("ttcuk_cookie_consent", "declined");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          style={{
            position: "fixed",
            bottom: 24,
            left: 24,
            right: 24,
            maxWidth: 600,
            margin: "0 auto",
            backgroundColor: "rgba(18, 16, 14, 0.95)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(201, 168, 76, 0.2)",
            padding: "24px 32px",
            borderRadius: 8,
            zIndex: 99999,
            display: "flex",
            flexDirection: "column",
            gap: 16,
            boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
          }}
        >
          <div style={{ flex: 1 }}>
            <h3 style={{ fontFamily: "var(--font-display), serif", fontSize: 20, color: "var(--white)", marginBottom: 8, fontWeight: 400 }}>
              We value your privacy
            </h3>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking &quot;Accept All&quot;, you consent to our use of cookies as described in our{" "}
              <Link href="/privacy" style={{ color: "var(--gold)", textDecoration: "underline" }}>
                Privacy Policy
              </Link>.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>
            <button
              onClick={handleDecline}
              style={{
                background: "transparent",
                color: "var(--white)",
                border: "1px solid rgba(255,255,255,0.2)",
                padding: "10px 24px",
                fontSize: 11,
                letterSpacing: 2,
                textTransform: "uppercase",
                fontFamily: "var(--font-body), sans-serif",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
              onMouseOver={(e) => { e.currentTarget.style.borderColor = "var(--white)" }}
              onMouseOut={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)" }}
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              style={{
                background: "var(--gold)",
                color: "var(--dark)",
                border: "none",
                padding: "10px 24px",
                fontSize: 11,
                letterSpacing: 2,
                textTransform: "uppercase",
                fontFamily: "var(--font-body), sans-serif",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.3s",
              }}
              onMouseOver={(e) => { e.currentTarget.style.background = "var(--gold-light)" }}
              onMouseOut={(e) => { e.currentTarget.style.background = "var(--gold)" }}
            >
              Accept All
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

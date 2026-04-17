"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Footer from "../components/Footer";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const CATEGORIES = [
  {
    id: "seeds",
    label: "Seeds",
    description:
      "Sow a seed of faith into the ministry and watch God multiply it.",
  },
  {
    id: "offerings",
    label: "Offerings",
    description:
      "Bring your freewill offering as an act of worship and gratitude.",
  },
  {
    id: "tithes",
    label: "Tithes",
    description:
      "Return the first tenth to God and trust Him with the rest.",
  },
];

const stripeAppearance = {
  theme: "night" as const,
  variables: {
    colorPrimary: "#008CBB",
    colorBackground: "#1A1A1A",
    colorText: "#FFFFFF",
    colorDanger: "#FF6B6B",
    colorTextPlaceholder: "rgba(255,255,255,0.3)",
    borderRadius: "0px",
    fontFamily: "DM Sans, sans-serif",
    fontSizeBase: "14px",
    spacingUnit: "5px",
  },
  rules: {
    ".Input": {
      border: "1px solid rgba(255,255,255,0.1)",
      backgroundColor: "rgba(255,255,255,0.04)",
      padding: "14px 16px",
      color: "#FFFFFF",
    },
    ".Input:focus": {
      border: "1px solid #008CBB",
      boxShadow: "none",
      outline: "none",
    },
    ".Label": {
      color: "rgba(255,255,255,0.55)",
      fontSize: "10px",
      letterSpacing: "3px",
      textTransform: "uppercase",
      marginBottom: "8px",
    },
    ".Tab": {
      border: "1px solid rgba(255,255,255,0.08)",
      backgroundColor: "rgba(255,255,255,0.03)",
      color: "rgba(255,255,255,0.5)",
    },
    ".Tab--selected": {
      border: "1px solid #008CBB",
      backgroundColor: "rgba(0,140,187,0.08)",
      color: "#FFFFFF",
    },
    ".Tab:hover": {
      border: "1px solid rgba(0,140,187,0.4)",
      color: "#FFFFFF",
    },
  },
};

export default function GivePageClient() {
  const [category, setCategory] = useState("seeds");
  const [amount, setAmount] = useState("");
  const [amountError, setAmountError] = useState("");
  const [showCheckout, setShowCheckout] = useState(false);

  // Reset checkout when category or amount changes
  useEffect(() => {
    setShowCheckout(false);
  }, [category, amount]);

  function handleAmountChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    if (/^\d*\.?\d{0,2}$/.test(val)) {
      setAmount(val);
      setAmountError("");
    }
  }

  function handleProceed() {
    const parsed = parseFloat(amount);
    if (!amount || isNaN(parsed) || parsed < 0.3) {
      setAmountError("Please enter a valid amount (minimum £0.30)");
      return;
    }
    setAmountError("");
    setShowCheckout(true);
  }

  const selectedCategory = CATEGORIES.find((c) => c.id === category)!;

  return (
    <>
      {/* Sub-page nav */}
      <nav className="contact-nav">
        <Link href="/" className="nav-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/TTCUK-logo.gif"
            alt="TTCUK"
            style={{ height: 48, width: "auto", display: "block" }}
          />
        </Link>
        <Link href="/" className="contact-back">
          &larr; Back Home
        </Link>
      </nav>

      <main className="give-page">
        {/* Hero */}
        <section className="give-hero">
          <span className="section-label" style={{ display: "block", textAlign: "center" }}>
            Support the Ministry
          </span>
          <h1 className="give-heading">
            Give <em>Online</em>
          </h1>
          <p className="give-sub">
            Every gift — great or small — furthers the work of God through
            The Transforming Church UK.
          </p>
        </section>

        <div className="give-container">
          {/* Left column */}
          <div className="give-left">
            {/* Category tabs */}
            <div className="give-category-section">
              <span className="give-section-label">Choose a giving type</span>
              <div className="give-tabs" role="tablist">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    role="tab"
                    aria-selected={category === cat.id}
                    className={`give-tab ${category === cat.id ? "active" : ""}`}
                    onClick={() => setCategory(cat.id)}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
              <p className="give-category-desc">{selectedCategory.description}</p>
            </div>

            {/* Amount */}
            <div className="give-amount-section">
              <span className="give-section-label">Enter amount</span>
              <div className="give-amount-input-wrap">
                <span className="give-currency">£</span>
                <input
                  id="give-amount"
                  type="text"
                  inputMode="decimal"
                  className="give-amount-input"
                  placeholder=""
                  value={amount}
                  onChange={handleAmountChange}
                  aria-label="Donation amount in pounds"
                />
              </div>
              {amountError && (
                <p className="give-error" role="alert">
                  {amountError}
                </p>
              )}
            </div>

            {/* Summary */}
            {amount && !amountError && (
              <div className="give-summary">
                <span className="give-summary-label">You are giving</span>
                <span className="give-summary-amount">
                  £{Number(amount).toLocaleString("en-GB", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
                <span className="give-summary-category">
                  as {selectedCategory.label}
                </span>
              </div>
            )}

            {!showCheckout && (
              <button
                className="btn-primary give-proceed-btn"
                onClick={handleProceed}
                style={{ width: "100%", marginTop: 8 }}
              >
                Continue to Payment
              </button>
            )}
          </div>

          {/* Right column */}
          <div className="give-right">
            {showCheckout ? (
              <div className="give-checkout-wrap">
                <div className="give-checkout-header">
                  <span className="give-section-label">Payment details</span>
                  <button
                    className="give-change-btn"
                    onClick={() => setShowCheckout(false)}
                  >
                    Change
                  </button>
                </div>
                <Elements
                  stripe={stripePromise}
                  options={{
                    mode: "payment",
                    amount: Math.round(parseFloat(amount) * 100),
                    currency: "gbp",
                    appearance: stripeAppearance,
                  }}
                >
                  <CheckoutForm amount={amount} category={category} />
                </Elements>
              </div>
            ) : (
              <div className="give-placeholder">
                <div className="give-placeholder-inner">
                  <p className="give-placeholder-text">
                    Enter an amount and press{" "}
                    <strong>Continue to Payment</strong> to securely complete
                    your giving.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Scripture */}
        <section className="give-scripture">
          <blockquote className="give-scripture-text">
            &ldquo;Each of you should give what you have decided in your heart
            to give, not reluctantly or under compulsion, for God loves a
            cheerful giver.&rdquo;
          </blockquote>
          <cite className="give-scripture-ref">2 Corinthians 9:7</cite>
        </section>
      </main>

      <Footer />
    </>
  );
}

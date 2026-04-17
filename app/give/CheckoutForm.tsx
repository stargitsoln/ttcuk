"use client";

import { useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";

interface CheckoutFormProps {
  amount: string;
  category: string;
}

export default function CheckoutForm({ amount, category }: CheckoutFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!stripe || !elements) return;

    setStatus("submitting");
    setErrorMsg("");

    // Submit elements first (validates card details)
    const { error: submitError } = await elements.submit();
    if (submitError) {
      setErrorMsg(submitError.message ?? "Something went wrong.");
      setStatus("error");
      return;
    }

    // Fetch a PaymentIntent from our server
    let clientSecret: string;
    try {
      const res = await fetch("/api/stripe/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount,
          currency: "gbp",
          category,
          name: name || undefined,
          email: email || undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Server error");
      clientSecret = data.clientSecret;
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Could not connect to payment server.";
      setErrorMsg(msg);
      setStatus("error");
      return;
    }

    // Confirm the payment
    const { error: confirmError } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${window.location.origin}/give/thank-you`,
        ...(email ? { receipt_email: email } : {}),
        payment_method_data: {
          billing_details: {
            ...(name ? { name } : {}),
            ...(email ? { email } : {}),
          },
        },
      },
    });

    if (confirmError) {
      setErrorMsg(confirmError.message ?? "Payment could not be completed.");
      setStatus("error");
    }
    // On success Stripe redirects to /give/thank-you automatically
  }

  return (
    <form onSubmit={handleSubmit} className="give-checkout-form">
      {/* Optional donor info */}
      <div className="give-optional-fields">
        <p className="give-optional-label">Your details (optional)</p>
        <div className="give-field-row">
          <div className="give-field">
            <label htmlFor="give-name">Name</label>
            <input
              id="give-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              autoComplete="name"
            />
          </div>
          <div className="give-field">
            <label htmlFor="give-email">Email</label>
            <input
              id="give-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              autoComplete="email"
            />
          </div>
        </div>
        <p className="give-optional-note">
          Providing your email allows Stripe to send you a payment receipt.
        </p>
      </div>

      {/* Stripe Payment Element */}
      <div className="give-payment-element">
        <PaymentElement
          options={{
            layout: "tabs",
            wallets: { applePay: "auto", googlePay: "auto" },
          }}
        />
      </div>

      {errorMsg && (
        <p className="give-error" role="alert">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        className="btn-primary give-submit-btn"
        disabled={!stripe || !elements || status === "submitting"}
      >
        {status === "submitting"
          ? "Processing..."
          : `Give £${Number(amount).toLocaleString("en-GB", { minimumFractionDigits: 2 })}`}
      </button>
    </form>
  );
}

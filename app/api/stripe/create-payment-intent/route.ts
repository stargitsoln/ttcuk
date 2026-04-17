import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  try {
    const { amount, currency, category, name, email } = await req.json();

    // Validate amount (Stripe requires integer pence, min £0.30 = 30p)
    const amountInPence = Math.round(Number(amount) * 100);
    if (!amountInPence || amountInPence < 30) {
      return NextResponse.json(
        { error: "Please enter an amount of at least £0.30" },
        { status: 400 }
      );
    }

    const validCategories = ["seeds", "offerings", "tithes"];
    if (!validCategories.includes(category)) {
      return NextResponse.json({ error: "Invalid category" }, { status: 400 });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInPence,
      currency: currency ?? "gbp",
      automatic_payment_methods: { enabled: true },
      metadata: {
        category,
        ...(name ? { donor_name: name } : {}),
        ...(email ? { donor_email: email } : {}),
        source: "ttcuk-give-page",
      },
      description: `TTCUK Donation — ${category.charAt(0).toUpperCase() + category.slice(1)}`,
      ...(email ? { receipt_email: email } : {}),
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error("[stripe/create-payment-intent]", err);
    return NextResponse.json(
      { error: "Failed to create payment intent. Please try again." },
      { status: 500 }
    );
  }
}

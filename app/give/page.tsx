import type { Metadata } from "next";
import GivePageClient from "./GivePageClient";

export const metadata: Metadata = {
  title: "Give Online",
  description:
    "Support The Transforming Church UK with your Seeds, Offerings and Tithes. Give securely online via Stripe.",
};

export default function GivePage() {
  return <GivePageClient />;
}

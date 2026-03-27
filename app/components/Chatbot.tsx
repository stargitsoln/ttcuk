"use client";
import { useState, useRef, useEffect } from "react";

type Message = { role: "user" | "bot"; text: string };

const KNOWLEDGE = [
  {
    keywords: ["service", "sunday", "time", "when", "gather", "worship time"],
    answer:
      "Our Sunday service is every week from 11AM to 1PM at Ark Pioneer Academy, Westcombe Drive, Barnet, EN5 2BE. Free parking is available and we are family-friendly — all are welcome!",
  },
  {
    keywords: ["location", "address", "where", "directions", "parking", "venue"],
    answer:
      "We meet at Ark Pioneer Academy, Westcombe Drive, Barnet, EN5 2BE. There is free parking on-site. We look forward to seeing you!",
  },
  {
    keywords: ["online", "zoom", "virtual", "join from", "remote"],
    answer:
      "We have several online meetings you can join from anywhere:\n\n• Water Brook (Bible Study) — Wednesday at 8PM GMT via Zoom\n• Prayer Surge — Daily at 9PM GMT via Zoom\n• Mega Prayer Surge — Last Friday of the month at 11PM GMT via Zoom",
  },
  {
    keywords: ["bible study", "water brook", "wednesday"],
    answer:
      "Our Bible Study, called Water Brook, takes place every Wednesday at 8PM GMT on Zoom. Everyone is welcome to join!",
  },
  {
    keywords: ["prayer", "pray", "intercession", "prayer surge"],
    answer:
      "We have daily prayer meetings called Prayer Surge at 9PM GMT on Zoom. We also hold a Mega Prayer Surge on the last Friday of each month at 11PM GMT. You can also submit a prayer request through our contact page.",
  },
  {
    keywords: ["believe", "belief", "faith", "doctrine", "bible", "scripture"],
    answer:
      "We believe the Bible is the inspired Word of God and the final authority for Christian faith. We believe in one God existing in three Persons — Father, Son, and Holy Spirit. We believe salvation comes by grace through faith in Jesus Christ. Visit our About page to read all of our beliefs in detail.",
  },
  {
    keywords: ["mission", "purpose", "vision", "exist"],
    answer:
      "Our mission: We exist to lead people into a life-transforming relationship with GOD. This is underpinned by our commitment to community participation, engagement, and expressing the love of Christ to those in need.",
  },
  {
    keywords: ["value", "life", "core", "principle", "acrostic"],
    answer:
      "Our core values follow the acrostic L.I.F.E:\n\n• L — Leadership Development (Titus 1:5-9)\n• I — Inspiring Worship (John 4:23-24)\n• F — Family Well-being (Psalm 133:1)\n• E — Excellent Service (Colossians 3:17)",
  },
  {
    keywords: ["member", "join", "membership", "part of", "get involved", "volunteer"],
    answer:
      "We'd love to have you! You can become a member by reaching out through our Contact page. Whether you want to volunteer, join a small group, or simply attend a service — there's a place for you here.",
  },
  {
    keywords: ["give", "donate", "tithe", "offering", "support", "financial"],
    answer:
      "You can give online through our secure giving portal. Click the 'Give' button in the top navigation bar, or visit our giving page directly. Every contribution helps us transform lives — thank you!",
  },
  {
    keywords: ["contact", "email", "phone", "call", "reach", "touch"],
    answer:
      "You can reach us at:\n\n• Email: info@thetransformingchurchuk.org\n• Phone: +44 7842 671760\n\nOr visit our Contact page to send us a message directly.",
  },
  {
    keywords: ["pastor", "leader", "who leads"],
    answer:
      "The Transforming Church UK is led by a dedicated team committed to Kingdom values. Join us on a Sunday to meet our leaders and community!",
  },
  {
    keywords: ["sermon", "watch", "youtube", "video", "live"],
    answer:
      "You can watch our sermons and live services on YouTube at youtube.com/@TTCUKOnline. We also have recent sermon recordings available on our homepage.",
  },
  {
    keywords: ["social", "facebook", "instagram", "twitter", "follow"],
    answer:
      "Follow us on social media — we're @TTCUKOnline everywhere:\n\n• Facebook: facebook.com/TTCUKOnline\n• Instagram: instagram.com/TTCUKOnline\n• X (Twitter): x.com/TTCUKOnline\n• YouTube: youtube.com/@TTCUKOnline",
  },
  {
    keywords: ["testimony", "share", "story", "testify"],
    answer:
      "We'd love to hear how God has transformed your life! You can share your testimony through our Contact page — your story can inspire others.",
  },
  {
    keywords: ["children", "kids", "family", "child"],
    answer:
      "Our Sunday services are family-friendly and children are very welcome! We believe in nurturing the faith of the whole family.",
  },
  {
    keywords: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening"],
    answer:
      "Hello! Welcome to The Transforming Church UK. I'm here to help you with any questions about our church, services, beliefs, or how to get involved. What would you like to know?",
  },
  {
    keywords: ["thank", "thanks", "appreciate"],
    answer:
      "You're welcome! If you have any more questions, feel free to ask. We look forward to welcoming you at The Transforming Church UK!",
  },
  {
    keywords: ["about", "who are you", "what is", "tell me about", "church"],
    answer:
      "The Transforming Church UK is a church with a strong commitment to Kingdom values. We are deeply committed to discipleship, fellowship, ministry, and mission. Our motto: One Church — Making Global Impact. Visit our About page to learn more!",
  },
];

const FALLBACK =
  "Thank you for your question! I don't have a specific answer for that, but I'd love to help. You can reach our team at info@thetransformingchurchuk.org or call +44 7842 671760. You can also visit our Contact page to send a message.";

function findAnswer(input: string): string {
  const lower = input.toLowerCase();
  let bestMatch = { score: 0, answer: FALLBACK };

  for (const entry of KNOWLEDGE) {
    const score = entry.keywords.filter((kw) => lower.includes(kw)).length;
    if (score > bestMatch.score) {
      bestMatch = { score, answer: entry.answer };
    }
  }

  return bestMatch.answer;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Welcome to The Transforming Church UK! I'm here to help. Ask me about our services, beliefs, events, or anything else!",
    },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleSend() {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg: Message = { role: "user", text: trimmed };
    const botMsg: Message = { role: "bot", text: findAnswer(trimmed) };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  }

  return (
    <>
      {/* Floating trigger button */}
      <button
        className={`chatbot-trigger ${open ? "chatbot-trigger--hidden" : ""}`}
        onClick={() => setOpen(true)}
        aria-label="Open chat"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/TTCUK-logo.gif"
          alt=""
          className="chatbot-trigger-logo"
        />
        <span className="chatbot-trigger-label">Ask Me</span>
      </button>

      {/* Chat panel */}
      {open && (
        <div className="chatbot-panel">
          <div className="chatbot-header">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/TTCUK-logo.gif"
              alt=""
              style={{ height: 28, width: "auto" }}
            />
            <span className="chatbot-header-title">TTCUK Assistant</span>
            <button
              className="chatbot-close"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              &times;
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`chatbot-msg ${m.role === "user" ? "chatbot-msg--user" : "chatbot-msg--bot"}`}
              >
                {m.text.split("\n").map((line, j) => (
                  <span key={j}>
                    {line}
                    {j < m.text.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          <form
            className="chatbot-input-bar"
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
          >
            <input
              type="text"
              className="chatbot-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              autoFocus
            />
            <button type="submit" className="chatbot-send" aria-label="Send">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}

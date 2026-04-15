"use client";
import { useState } from "react";

const testimonies = [
  {
    name: "Peace O.",
    category: "Academic",
    text: "After receiving prophetic declarations, I held onto them through faith and diligence. God transformed my understanding of my Master's program, granting me favour to graduate with a distinction!",
  },
  {
    name: "Theo M.",
    category: "Breakthrough",
    text: "I thank God for helping me pass six professional exams and earn three post-grad certificates while working full-time. I also had a successful major operation. The 9pm prayers truly strengthened me!",
  },
  {
    name: "Amanda M.",
    category: "Miracle",
    text: "My husband and two children finally received the good news that their visas are ready after five months of waiting! I am overjoyed that my family will soon join me. Glory to God for answered prayers.",
  },
  {
    name: "Mercy A.",
    category: "Healing",
    text: "I'm overflowing with gratitude! Initial diagnosis of heart failure was miraculously turned into a completely normal echocardiogram. The 9pm prayers kept me standing in faith for this breakthrough.",
  },
  {
    name: "Deborah L.",
    category: "Deliverance",
    text: "I thank God for delivering me from years of fear and emotional struggle after leaving my former church. Through fasting and powerful encounters, God brought deep healing and restored my life entirely!",
  },
  {
    name: "Sissy O.",
    category: "Peace",
    text: "I thank God for His peace, which sustained me when a major business event didn't go as planned. Even in disappointment, God's peace kept my heart completely calm and allowed me to comfort others.",
  },
  {
    name: "Mercy C.",
    category: "Restoration",
    text: "God granted us favour on multiple long-standing applications and resolved an issue I’d faced since 2022, beginning my restoration after significant losses. I give all glory to Him for His preservation!",
  },
  {
    name: "Sweet M.",
    category: "Provision",
    text: "I opened a bank letter without fear. To my absolute amazement, an old £10,000 credit card debt was completely cancelled with no repayments required. Only God could have wiped it away so fully!",
  },
  {
    name: "Lovette M.",
    category: "Healing",
    text: "I experienced intense pain following major surgery, unable to sleep properly. During the morning prayer session, as healing declarations were made, I felt Jesus touch my body and the pain instantly disappeared!",
  },
  {
    name: "Jackie C.",
    category: "Provision",
    text: "I believed God for a financial miracle to sow my First Fruit Offering. Holding onto the prophetic word of 'pleasant surprises', my expected payment was deposited days early—a divine surprise from God!",
  },
];

export default function Testimonies() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="testimonies-section">
      <div className="testimonies-header">
        <span className="section-label" style={{ display: "block", textAlign: "center" }}>
          Testimonies
        </span>
        <h2 className="section-title" style={{ textAlign: "center", marginBottom: 0 }}>
          Lives <em>Transformed</em>
        </h2>
      </div>
      <div className="testimonies-track-wrap">
        <div 
          className={`testimonies-track ${isPaused ? 'mobile-paused' : ''}`}
          onClick={() => setIsPaused(!isPaused)}
        >
          {[...testimonies, ...testimonies].map((t, i) => (
            <div key={i} className="testimony-card">
              <span className="testimony-category">{t.category}</span>
              <p className="testimony-text">&ldquo;{t.text}&rdquo;</p>
              <span className="testimony-name">— {t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

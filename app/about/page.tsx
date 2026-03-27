import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";
import BgVideo from "../components/BgVideo";

const values = [
  {
    letter: "L",
    title: "Leadership Development",
    verse: "Titus 1:5-9 (MSG)",
  },
  {
    letter: "I",
    title: "Inspiring Worship",
    verse: "John 4:23-24 (AMP)",
  },
  {
    letter: "F",
    title: "Family Well-being",
    verse: "Psalm 133:1 (MSG)",
  },
  {
    letter: "E",
    title: "Excellent Service",
    verse: "Colossians 3:17 (NKJV)",
  },
];

const beliefs = [
  {
    num: "I",
    text: "We believe that the Bible (the Old and New Testament) is inspired by God as the complete revelation of His Will to mankind and the final authority for Christian faith. Therefore, we shall not allow or practise anything that is not scriptural.",
    verse: "John 5:39; 2 Timothy 3:16-17; 2 Peter 1:20-21",
  },
  {
    num: "II",
    text: "We believe in one God, infinitely perfect and eternally existing in three Persons\u2014the Father, the Son, and the Holy Spirit. He is the Creator of the heavens and the Ruler of the natural (material) and supernatural (spiritual) world.",
    verse: "Deuteronomy 6:4; Matthew 28:19; Acts 5:3-4; John 5:18; John 10:30",
  },
  {
    num: "III",
    text: "We believe that all have sinned and cannot be saved by works but by grace through faith in the finished works of Jesus Christ who was born of the Virgin Mary, died on the Cross, was buried, rose bodily from the dead, ascended into Heaven, where He is now at the right hand of the Majesty on High as our High Priest and Advocate.",
    verse: "John 1:13; John 5:18; 1 Peter 2:21; Hebrews 10:1-10; Colossians 1:17",
  },
  {
    num: "IV",
    text: "We believe that the church is the assembly of redeemed believers in Christ, who have also taken the next step to be baptized in water, meet together in fellowship centrally and locally every week in order to take the Lord\u2019s Supper (communion), encourage, edify, equip and empower one another.",
    verse: "Matthew 16:17-19, 28:19-20; Ephesians 4:11-13",
  },
  {
    num: "V",
    text: "We believe that the church exists in the community to advance God\u2019s Kingdom in the community and beyond.",
    verse: "Matthew 16:17-19, 28:19-20; Ephesians 4:11-13",
  },
  {
    num: "VI",
    text: "We believe that God has provided spiritual gifts and given men as ministry gifts to the Church, some as apostles, prophets, teachers, pastors and evangelists in order to equip the believers who in turn do the work of the ministry wherever they work.",
    verse: "1 Corinthians 12:1-12; Ephesians 4:7-13",
  },
  {
    num: "VII",
    text: "We believe that in Christ there is neither male nor female therefore, women (alongside the men) are permitted to do whatever they are called, anointed, talented and gifted to do within and outside the Church.",
    verse: "Galatians 3:26-29",
  },
  {
    num: "VIII",
    text: "We believe that real life transformation takes place in small groups or smaller fellowship settings within our communities or spheres of influence where believers get to know one another, love one another, share with one another, pray for one another, and serve one another. Therefore, we encourage everyone to get involved in a small group.",
    verse: "Acts 2:44-47",
  },
  {
    num: "IX",
    text: "We believe that the message of the church must never change but its delivery method must constantly change to capture the generation it is seeking to reach therefore, the church will constantly innovate and leverage current technologies to reach the unsaved and unchurched.",
    verse: "1 Corinthians 9:22-23",
  },
  {
    num: "X",
    text: "We believe that the primary purpose of the church on earth is to worship, glorify God and go into the world to evangelize, make disciples of all nations and plant reproducing churches starting from the communities, cities and countries surrounding the Church.",
    verse: "Matthew 28:18-20; Mark 16:15; Acts 1:8",
  },
  {
    num: "XI",
    text: "We believe that we are in the last days and God is pouring out His Spirit upon all who receive Christ to enable us carry out the Great Commission with the demonstration of His power through the operations of the gifts of the Holy Spirit who will continue to guide us into all truth as He glorifies Jesus.",
    verse: "John 16:8-11; Titus 2:5; 1 Corinthians 6:19; 1 Corinthians 12:13; Ephesians 4:30; Ephesians 5:18",
  },
];

export default function AboutPage() {
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
        <div className="about-nav-anchors">
          <a href="#values" className="about-nav-link">Values</a>
          <a href="#mission" className="about-nav-link">Mission</a>
          <a href="#beliefs" className="about-nav-link">Beliefs</a>
        </div>
        <Link href="/" className="contact-back">
          &larr; Back Home
        </Link>
      </nav>

      <main className="about-page">
        {/* Hero */}
        <section className="about-hero">
          <div className="about-hero-img-wrap">
            <Image
              src="/images/congregation8.jpg"
              alt="TTCUK Congregation"
              fill
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
            />
            <div className="about-hero-overlay" />
          </div>
          <div className="about-hero-content">
            <Reveal>
              <span className="section-label" style={{ display: "block", textAlign: "center" }}>
                About Us
              </span>
              <h1 className="about-heading">Who We Are</h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="about-intro">
                The Transforming Church is a church with a strong commitment to Kingdom values.
                We are deeply committed to the essential foundations of discipleship, fellowship,
                ministry, and mission.
              </p>
              <p className="about-intro">
                We are a community-based organization focused on helping make the world around us
                a better, happier place.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Our Values — L.I.F.E */}
        <section className="about-values" id="values">
          <Reveal>
            <span className="section-label" style={{ display: "block", textAlign: "center" }}>
              Our Values
            </span>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              The Principles of <em>L.I.F.E</em>
            </h2>
            <p className="about-values-intro">
              Our core values are the principles, standards and beliefs which influence our actions.
              Based on what the Bible teaches, we use the acrostic L.I.F.E for our core values:
            </p>
          </Reveal>
          <div className="values-grid">
            {values.map((v, i) => (
              <Reveal key={v.letter} delay={i * 0.1}>
                <div className="value-card">
                  <span className="value-letter">{v.letter}</span>
                  <h3 className="value-title">{v.title}</h3>
                  <span className="value-verse">{v.verse}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Our Mission */}
        <section className="about-mission" id="mission">
          <Reveal>
            <span className="section-label" style={{ display: "block" }}>
              Our Mission
            </span>
            <h2 className="section-title">
              Leading people into a<br />
              <em>life-transforming relationship</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="about-mission-body">
              <p>
                We exist to lead people into a life-transforming relationship with Jesus Christ.
                Our mission is underpinned by our commitment to community participation and engagement.
              </p>
              <p>
                We will play an active role in supporting community initiatives that promote harmony
                and development of local communities. We are a church committed to expressing the love
                of Christ towards those in need, providing support to the vulnerable and oppressed in
                the local community.
              </p>
            </div>
          </Reveal>
          <div className="about-mission-image">
            <Image
              src="/images/congregation8.jpg"
              alt="Our congregation"
              fill
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        </section>

        {/* Our Beliefs */}
        <section className="about-beliefs" id="beliefs">
          <BgVideo src="/images/TTCUK-logo.mp4" className="section-bg-video" />
          <div className="section-bg-overlay" />
          <Reveal style={{ textAlign: "center", marginBottom: 48, position: "relative", zIndex: 1 }}>
            <span className="section-label" style={{ display: "block", textAlign: "center" }}>
              Our Beliefs
            </span>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              What We <em>Believe</em>
            </h2>
          </Reveal>
          {beliefs.map((b, i) => (
            <Reveal key={b.num} delay={i * 0.05} style={{ position: "relative", zIndex: 1 }}>
              <div className="belief-item">
                <div className="belief-num">{b.num}</div>
                <div>
                  <div className="belief-verse">{b.verse}</div>
                  <div className="belief-text">{b.text}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </section>

        {/* Get Involved + Thank You */}
        <section className="about-cta">
          <Reveal>
            <span className="section-label" style={{ display: "block", textAlign: "center" }}>
              Get Involved
            </span>
            <h2 className="about-cta-title">
              Are you passionate about what we&apos;re doing?<br />
              <em>We&apos;re excited to have you join the team!</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="about-thankyou">
              <p>
                Whether you help through monetary donations, volunteering your time, or spreading our
                church mission through word-of-mouth, <strong>thank you</strong>. We couldn&apos;t accomplish our
                goals of transforming lives without the help of supporters like you.
              </p>
            </div>
            <div className="about-cta-btns">
              <a href="mailto:info@thetransformingchurchuk.org" className="btn-primary">
                Get In Touch
              </a>
              <Link href="/" className="btn-outline">
                Back Home
              </Link>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
      <Chatbot />
    </>
  );
}

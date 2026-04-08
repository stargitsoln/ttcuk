"use client";
import Link from "next/link";
import Reveal from "../components/Reveal";
import Footer from "../components/Footer";

export default function PrivacyPage() {
  return (
    <>
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

      <main className="contact-page">
        <section className="contact-hero">
          <Reveal>
            <span className="section-label" style={{ display: "block", textAlign: "center" }}>
              Privacy Policy
            </span>
            <h1 className="contact-heading">GDPR Privacy Policy</h1>
          </Reveal>
        </section>

        <section style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px 80px", color: "rgba(255,255,255,0.8)", lineHeight: 1.8 }}>
          <Reveal delay={0.1}>
            <p style={{ marginBottom: "2rem" }}>
              The Transforming Church understands that your privacy is important to you and that you care about how your personal data is used. We respect and value the privacy of everyone who visits this website, www.thetransformingchurchuk.org and will only collect and use personal data in ways that are described here, and in a way that is consistent with our obligations and your rights under the law. Please read this Privacy Policy carefully and ensure that you understand it. Your acceptance of this Privacy Policy is deemed to occur upon your first use of our site. If you do not accept and agree with this Privacy Policy, you must stop using the TTC UK site immediately.
            </p>

            <h2 style={{ color: "var(--gold)", marginBottom: "1rem", marginTop: "2rem" }}>1. Definitions and Interpretation</h2>
            <p style={{ marginBottom: "1rem" }}>In this Policy the following terms shall have the following meanings:</p>
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "2rem", listStyleType: "disc" }}>
              <li><strong>“Account”</strong> - means an account required to access and/or use certain areas and features of TTC UK;</li>
              <li><strong>“Cookie”</strong> - means a small text file placed on your computer or device by TTC UK site when you visit certain parts and/or when you use certain features of TTC UK site. Details of the Cookies used by TTC UK site are set out in Part 14, below; and</li>
              <li><strong>“Cookie Law”</strong> - means the relevant parts of the Privacy and Electronic Communications (EC Directive) Regulations 2003;</li>
            </ul>

            <h2 style={{ color: "var(--gold)", marginBottom: "1rem", marginTop: "2rem" }}>2. Information about TTC UK</h2>
            <p style={{ marginBottom: "2rem" }}>
              TTC UK site is owned and operated by The Transforming Church UK, a charity registered in England and Wales under charity number 1194579 with registered address 61 Bridge Street, Kington, Herefordshire HR5 3DJ.
            </p>

            <h2 style={{ color: "var(--gold)", marginBottom: "1rem", marginTop: "2rem" }}>3. What Does This Policy Cover?</h2>
            <p style={{ marginBottom: "2rem" }}>
              This Privacy Policy applies only to your use of TTC UK site. TTC UK site may contain links to other websites. Please note that we have no control over how your data is collected, stored, or used by other websites and we advise you to check the privacy policies of any such websites before providing any data to them.
            </p>

            <h2 style={{ color: "var(--gold)", marginBottom: "1rem", marginTop: "2rem" }}>4. What is Personal Data?</h2>
            <p style={{ marginBottom: "2rem" }}>
              Personal data is defined by the General Data Protection Regulation (EU Regulation 2016/679) (the “GDPR”) as ‘any information relating to an identifiable person who can be directly or indirectly identified in particular by reference to an identifier’. Personal data is, in simpler terms, any information about you that enables you to be identified. Personal data covers obvious information such as your name and contact details, but it also covers less obvious information such as identification numbers, electronic location data, and other online identifiers.
            </p>

            <h2 style={{ color: "var(--gold)", marginBottom: "1rem", marginTop: "2rem" }}>5. What Are My Rights?</h2>
            <p style={{ marginBottom: "1rem" }}>Under the GDPR, you have the following rights, which we will always work to uphold:</p>
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "2rem", listStyleType: "disc" }}>
              <li>The right to be informed about my collection and use of your personal data. This Privacy Policy should tell you everything you need to know, but you can always contact me to find out more or to ask any questions using the details in Part 15.</li>
              <li>The right to access the personal data we hold about you. Part 13 will tell you how to do this.</li>
              <li>The right to have your personal data rectified if any of your personal data held by us is inaccurate or incomplete. Please contact us using the details in Part 15 to find out more.</li>
              <li>The right to be forgotten, i.e. the right to ask us to delete or otherwise dispose of any of your personal data that I have. Please contact us using the details in Part 15 to find out more.</li>
              <li>The right to restrict (i.e. prevent) the processing of your personal data.</li>
              <li>The right to object to us using your personal data for a particular purpose or purposes.</li>
              <li>The right to data portability. This means that, if you have provided personal data to us directly, we are using it with your consent or for the performance of a contract, and that data is processed using automated means, you can ask us for a copy of that personal data to re-use with another service or business in many cases.</li>
              <li>Rights relating to automated decision-making and profiling. We do not use your personal data in this way.</li>
            </ul>
            <p style={{ marginBottom: "2rem" }}>
              For more information about our use of your personal data or exercising your rights as outlined above, please contact us using the details provided in Part 15. Further information about your rights can also be obtained from the Information Commissioner’s Office or your local Citizens Advice Bureau. If you have any cause for complaint about our use of your personal data, you have the right to lodge a complaint with the Information Commissioner’s Office.
            </p>

            <h2 style={{ color: "var(--gold)", marginBottom: "1rem", marginTop: "2rem" }}>6. What Data Do We Collect?</h2>
            <p style={{ marginBottom: "1rem" }}>Depending upon your use of TTC UK site, we may collect some or all of the following personal (and non-personal) data (please also see Part 14 on my use of Cookies and similar technologies):</p>
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "2rem", listStyleType: "disc" }}>
              <li>Name;</li>
              <li>Address;</li>
              <li>Email address;</li>
              <li>Telephone number;</li>
              <li>Payment information;</li>
            </ul>

            <h2 style={{ color: "var(--gold)", marginBottom: "1rem", marginTop: "2rem" }}>7. How Do You Use My Personal Data?</h2>
            <p style={{ marginBottom: "1rem" }}>
              Under the GDPR, we must always have a lawful basis for using personal data. This may be because the data is necessary for my performance of a contract with you, because you have consented to our use of your personal data, or because it is in our legitimate business interests to use it. Your personal data may be used for the following purposes:
            </p>
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "2rem", listStyleType: "disc" }}>
              <li>Providing and managing your Account;</li>
              <li>Providing and managing your access to TTC UK Site;</li>
              <li>Personalising and tailoring your experience on TTC UK Site;</li>
              <li>Supplying our products and/or services to you. Your personal details are required in order for us to enter into a contract with you.</li>
              <li>Personalising and tailoring our products and/or services for you.</li>
              <li>Communicating with you. This may include responding to emails or calls from you.</li>
              <li>Supplying you with information by email and/or post that you have opted-in to (you may unsubscribe or opt-out at any time using the unsubscribe button at the bottom of each newsletter/email).</li>
              <li>Analysing your use of Our Site and gathering feedback to enable us to continually improve Our Site and your user experience.</li>
            </ul>
            <p style={{ marginBottom: "2rem" }}>
              With your permission and/or where permitted by law, we may also use your personal data for marketing purposes, which may include contacting you by email, telephone, text message, and/or post with information, news, and offers on our products and/or services. You will not be sent any unlawful marketing or spam. We will always work to fully protect your rights and comply with our obligations under the GDPR and the Privacy and Electronic Communications (EC Directive) Regulations 2003, and you will always have the opportunity to opt-out.
            </p>

            <h2 style={{ color: "var(--gold)", marginBottom: "1rem", marginTop: "2rem" }}>8. How Long Will You Keep My Personal Data?</h2>
            <p style={{ marginBottom: "2rem" }}>
              We will not keep your personal data for any longer than is necessary in light of the reason(s) for which it was first collected. Your personal data will therefore be kept only as long as necessary.
            </p>

            <h2 style={{ color: "var(--gold)", marginBottom: "1rem", marginTop: "2rem" }}>9. How and Where Do You Store or Transfer My Personal Data?</h2>
            <p style={{ marginBottom: "2rem" }}>
              We will only store or transfer your personal data in the UK. This means that it will be fully protected under the GDPR. We may share your data within the group of companies of which we are a part, and with external third parties who provide adequate protection standard compliance. Please contact us using the details below in Part 15 for further information.
            </p>

            <h2 style={{ color: "var(--gold)", marginBottom: "1rem", marginTop: "2rem" }}>10. Do You Share My Personal Data?</h2>
            <p style={{ marginBottom: "2rem" }}>
              We will not share any of your personal data with any third parties for any purposes, subject to one important exception. In some limited circumstances, we may be legally required to share certain personal data, which might include yours, if we are involved in legal proceedings or complying with legal obligations, a court order, or the instructions of a government authority.
            </p>

            <h2 style={{ color: "var(--gold)", marginBottom: "1rem", marginTop: "2rem" }}>11. How Can I Control My Personal Data?</h2>
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "2rem", listStyleType: "disc" }}>
              <li>In addition to your rights under the GDPR, set out in Part 5, when you submit personal data via Our Site, you may be given options to restrict our use of your personal data. In particular, we aim to give you strong controls on our use of your data for direct marketing purposes (including the ability to opt-out of receiving emails from us which you may do by unsubscribing using the links provided in our emails).</li>
              <li>You may also wish to sign up to one or more of the preference services operating in the UK: The Telephone Preference Service (“the TPS”), the Corporate Telephone Preference Service (“the CTPS”), and the Mailing Preference Service (“the MPS”). These may help to prevent you receiving unsolicited marketing.</li>
            </ul>

            <h2 style={{ color: "var(--gold)", marginBottom: "1rem", marginTop: "2rem" }}>12. Can I Withhold Information?</h2>
            <p style={{ marginBottom: "2rem" }}>
              You may access certain areas of Our Site without providing any personal data at all. However, to use all features and functions available on Our Site you may be required to submit or allow for the collection of certain data.
            </p>

            <h2 style={{ color: "var(--gold)", marginBottom: "1rem", marginTop: "2rem" }}>13. How Can I Access My Personal Data?</h2>
            <p style={{ marginBottom: "2rem" }}>
              If you want to know what personal data we have about you, you can ask us for details of that personal data and for a copy of it (where any such personal data is held). This is known as a “subject access request”. All subject access requests should be made in writing and sent to the email or postal addresses shown in Part 15.
            </p>

            <h2 style={{ color: "var(--gold)", marginBottom: "1rem", marginTop: "2rem" }}>14. How Do You Use Cookies?</h2>
            <p style={{ marginBottom: "2rem" }}>
              Our Site may place and access certain first-party Cookies on your computer or device. First-party Cookies are those placed directly by us and are used only by us. We use Cookies to facilitate and improve your experience of Our Site and to provide and improve our products and/or services. We have carefully chosen these Cookies and have taken steps to ensure that your privacy and personal data is protected and respected at all times. All Cookies used by and on Our Site are used in accordance with current Cookie Law. Before Cookies are placed on your computer or device, you will be shown a pop-up requesting your consent to set those Cookies.
            </p>

            <h2 style={{ color: "var(--gold)", marginBottom: "1rem", marginTop: "2rem" }}>15. How Do I Contact You?</h2>
            <p style={{ marginBottom: "2rem" }}>
              To contact us about anything to do with your personal data and data protection, including to make a subject access request, please use the following details for the attention of The Transforming Church UK:<br/><br/>
              Email address: <a href="mailto:info@thetransformingchurchuk.org" style={{ color: "var(--gold)" }}>info@thetransformingchurchuk.org</a>
            </p>

            <h2 style={{ color: "var(--gold)", marginBottom: "1rem", marginTop: "2rem" }}>16. Changes to this Privacy Policy</h2>
            <p style={{ marginBottom: "2rem" }}>
              We may change this Privacy Notice from time to time. This may be necessary, for example, if the law changes, or if we change our business in a way that affects personal data protection. Any changes will be immediately posted on Our Site and you will be deemed to have accepted the terms of the Privacy Policy on your first use of Our Site following the alterations. We recommend that you check this page regularly to keep up to date. This Privacy Policy was last updated on May 12th, 2023.
            </p>
          </Reveal>
        </section>
      </main>

      <Footer />
    </>
  );
}

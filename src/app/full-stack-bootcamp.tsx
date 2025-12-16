"use client";

import { useState } from "react";
import styles from "../styles/full-stack-bootcamp.module.css";
import { Navbar } from "../components/navbar";
import React from "react";
import { MessageCircle, Users } from "lucide-react";

type FAQ = {
  question: string;
  answer: string;
};

export default function FullStackBootcampPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqs: FAQ[] = [
    {
      question: "1. What is the Full Stack Development Bootcamp about?",
      answer:
        "The bootcamp introduces learners to full-stack web development concepts, focusing on both frontend and backend technologies using the MERN stack (MongoDB, Express, React, Node.js). It is designed to help participants understand how complete digital solutions are built.",
    },
    {
      question: "2. Who can join this bootcamp?",
      answer:
        "The bootcamp is open to students and early-career learners with basic programming knowledge who want structured exposure to web technologies and full-stack development.",
    },
    {
      question: "3. Is prior experience required?",
      answer:
        "Basic programming knowledge is recommended. You do not need prior experience in full-stack development, but familiarity with programming fundamentals will help you follow the course more easily.",
    },
    {
      question: "4. Are there any projects included in the bootcamp?",
      answer:
        "There is no formal project assigned during the bootcamp. Participants are encouraged to practice coding and apply the concepts they learn through exercises and examples provided during sessions.",
    },
    {
      question: "5. Can this bootcamp lead to internship opportunities?",
      answer:
        "Yes. Participants who successfully complete the bootcamp and demonstrate strong performance may be considered for internships at VLED and Annam.AI. Interns may work on initiatives in areas like digital agriculture and education technology.",
    },
    {
      question: "6. How long is the bootcamp?",
      answer:
        "The bootcamp duration is determined by the curriculum schedule. Each session provides theoretical knowledge and coding practice opportunities.",
    },
    {
      question: "7. How can I register?",
      answer:
        "Registration details are available on the bootcamp website. Make sure to complete your registration before December 15, 2025.",
    },
    {
      question: "8. Onboarding session",
      answer:
        "A zoom meeting link will be sent after registration to the bootcamp in which the team will help the participants on navigating through the ViBe platform.",
    },
    {
      question: "9. How to fill consent form?",
      answer:
        "Download the form from the link given in the zoho forms and fill out the details and attach your digital signature in it and submit it in the same onboarding form.",
    },
    {
      question: "10. How to join Discussion forum?",
      answer:
        "We have a Discord channel exclusively for Discussion of which the link is available in the Full Stack Development Bootcamp webpage and in the course details in the ViBe platform.",
    },
    {
      question: "11. Support session announcement details?",
      answer:
        "We will be having support sessions as zoom meetings during the course if any grievances should arise.",
    },
    {
      question: "12. Will recordings of the sessions be available?",
      answer:
        "If you miss a live session, alternative sessions may be organized, and participants will receive communication regarding these arrangements.",
    },
    {
      question: "13. Is the bootcamp free?",
      answer:
        "Yes, the bootcamp is designed to provide learning opportunities without any fees.",
    },
  ];

  return (
    <div className={styles.pageContainer}>
      <Navbar />

      <main>
        {/* ================= HERO ================= */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <p className={styles.heroSubtitle}>An IIT Ropar Initiative</p>
              <h1 className={styles.heroTitle}>
                Full Stack Development Bootcamp
              </h1>
              <p className={styles.heroDescription}>
                Master the MERN Stack and build complete web applications with
                hands-on training from industry experts.
              </p>
              <div className={styles.ctaButtons}>
                <button
                  className={styles.primaryButton}
                  onClick={() =>
                    window.open(
                      "https://forms.zohopublic.in/annamai1/form/EventRegistrationForm/formperma/HYkA1u8O5qjotN_Y4fobUEF699x-iawUjO2sG-cUK4Q",
                      "_blank"
                    )
                  }
                >
                  Register Now
                </button>{" "}
                <button
                  className={styles.secondaryButton}
                  onClick={() =>
                    window.open("https://vibe.vicharanashala.ai/", "_blank")
                  }
                >
                  Explore ViBe
                </button>
              </div>
            </div>
            <div className={styles.heroImage}>
              <div className={styles.codeSnippet}>
                <pre>
                  <code>
                    {`// Start your coding journey today
const bootcamp = {
  stack: ['MongoDB', 'Express', 'React', 'Node.js'],
  level: 'Beginner to Advanced',
  projects: 'Real-world applications'
};`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>


        {/* ================= CONTENT ================= */}
        <section className={styles.contentSection}>
          <p>
            The Full Stack Development Bootcamp is an initiative by the
            Vicharanashala Lab for Education Design (VLED) in collaboration with
            Annam.AI, designed for learners who wish to begin their journey in
            full-stack web development.
          </p>

          <p>
            This bootcamp introduces participants to core full-stack development
            concepts and provides exposure to industry-relevant technologies. It
            is intended to support learners in moving from learning individual
            concepts to understanding how complete digital solutions are
            developed.
          </p>

          <p>
            The program offers a comprehensive full-stack development
            curriculum, aligned with current industry expectations. It is
            suitable for students and early-stage learners who are interested in
            building a strong foundation in web development.
          </p>

          <p>
            Participants who successfully complete the bootcamp and demonstrate
            strong performance may be considered for internships at VLED and
            Annam.AI, where they may contribute to real-time, open-source
            initiatives in areas such as digital agriculture and education
            technology.
          </p>
        </section>

        {/* ================= FAQ ================= */}
        <section className={styles.faqSection}>
          <div className={styles.faqContainer}>
            <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>

            <div className={styles.faqList}>
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`${styles.faqItem} ${
                    expandedFaq === index ? styles.faqItemExpanded : ""
                  }`}
                  onClick={() => toggleFaq(index)}
                >
                  <div className={styles.faqHeader}>
                    <h3 className={styles.faqQuestion}>{faq.question}</h3>
                    <span className={styles.faqToggle}>
                      {expandedFaq === index ? "−" : "+"}
                    </span>
                  </div>

                  {expandedFaq === index && (
                    <div className={styles.faqAnswer}>{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= DISCUSSION FORUM ================= */}
        <section className={styles.discordSection}>
          <div className={styles.discordContainer}>
            <div className={styles.discordCard}>
              <h2 className={styles.discordTitle}>Discussion Forum</h2>
              <p className={styles.discordSubtitle}>
                Join our Discord community to connect with fellow learners.
              </p>

              <div className={styles.discordChannels}>
                <div className={styles.discordChannel}>
                  <Users className={styles.channelIcon} />
                  Student Network
                </div>
                <div className={styles.discordChannel}>
                  <MessageCircle className={styles.channelIcon} />
                  Live Discussions
                </div>
              </div>

              <p className={styles.discordDescription}>
                Get help, share resources, and discuss course concepts in our
                official Discord server.
              </p>

              <a
                href="https://discord.gg/furXD6JP"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.discordJoinButton}
              >
                Join Discord
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

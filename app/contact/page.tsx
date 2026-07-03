"use client"

import React, { useEffect, useState } from "react";
import { contactPageStyles } from "@/public/dummyStyles";
import emailjs from "@emailjs/browser"
import { Boxes } from "../components/ui/background-boxes";

export default function Contact() {

  const [formData, setFromData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [focused, setFocused] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!publicKey) {
      console.error("EmailJS public key missing");
      return;
    }

    emailjs.init(publicKey)
    
  }, []);

  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

    try {
      if (!serviceId || !templateId) {
        throw new Error("EmailJs service or template ID not configured.")
      }

      await emailjs.send(serviceId, templateId, templateParams)

      setFromData({ name: "", email: "", subject: "", message: "" });
      setFocused(null);

      alert("Message sent - thankyou!");
    } catch (error) {
      console.error("EmailJs error:", error);
      alert("Failed to send message. Please try again later")
    }
    finally {
      setSending(false);
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFromData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  };

  const getLabelClass = (fieldName: string) => {
    const baseClass = contactPageStyles.formLabelBase;
    const focusedClass =
      focused === fieldName || formData[fieldName as keyof typeof formData]
        ? contactPageStyles.formLabelFocused
        : contactPageStyles.formLabelUnfocused;
    return `${baseClass} ${focusedClass}`;
  };



  return (
    <div className={contactPageStyles.pageContainer}>
      <div className={contactPageStyles.contentContainer}>
        <div className={contactPageStyles.formOuterContainer}>
          <div className={contactPageStyles.backgroundOverlay} />
          <Boxes />
          <div className={contactPageStyles.headerContainer}>
            <h1 className={contactPageStyles.headerTitle}>
              Get in Touch
            </h1>

            <p className={contactPageStyles.headerSubtitle}>
              Have a project in mind or just want to say hi? I&apos;d love to hear from you
            </p>

          </div>

          <div className={contactPageStyles.contactMethodsGrid}>
            <a
              href="mailto:surajkumar44727@gmail.com"
              className={contactPageStyles.contactCard}
            >
              <div className={contactPageStyles.contactIconContainer}>
                <svg
                  className={contactPageStyles.contactIcon}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div>
                <p className={contactPageStyles.contactLabel}>Email</p>
                <p className={contactPageStyles.contactValue}>
                  surajkumar44727@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://github.com/surajbuild"
              target="_blank"
              rel="noopener noreferrer"
              className={contactPageStyles.contactCard}
            >
              <div className={contactPageStyles.contactIconContainer}>
                <svg
                  className={contactPageStyles.contactIcon}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.082-.729.082-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.762-1.605-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.236-3.22-.124-.304-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 013.003-.404c1.018.005 2.043.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.872.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.624-5.48 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.902-.015 3.297 0 .322.216.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.373-12-12-12z"  />
                </svg>
              </div>
              <div>
                <p className={contactPageStyles.contactLabel}>Github</p>
                <p className={contactPageStyles.contactValue}>surajbuild</p>
              </div>
            </a>
          </div>

          <form
            action=""
            onSubmit={handleSubmit}
            className={contactPageStyles.formContainer}
          >
            <div className={contactPageStyles.formGrid}>
              {/* Name Field */}
              <div className={contactPageStyles.formFieldContainer}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  className={contactPageStyles.formInput}
                  placeholder="John Doe"
                  required
                />
                <label htmlFor="name" className={getLabelClass("name")}>
                  Name
                </label>
              </div>

              {/* Email Field */}
              <div className={contactPageStyles.formFieldContainer}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  className={contactPageStyles.formInput}
                  placeholder="john@example.com"
                  required
                />
                <label htmlFor="email" className={getLabelClass("email")}>
                  Email
                </label>
              </div>
            </div>

            {/* Subject Field */}
            <div className={contactPageStyles.formFieldContainer}>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onFocus={() => setFocused("subject")}
                onBlur={() => setFocused(null)}
                className={contactPageStyles.formInput}
                placeholder="Project Collaboration"
                required
              />
              <label htmlFor="subject" className={getLabelClass("subject")}>
                Subject
              </label>
            </div>

            {/* Message Field */}
            <div className={contactPageStyles.formFieldContainer}>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                rows={6}
                className={contactPageStyles.formTextarea}
                placeholder="Tell me about your project..."
                required
              />
              <label htmlFor="message" className={getLabelClass("message")}>
                Message
              </label>
            </div>

            <div className={contactPageStyles.submitButtonContainer}>
              <button
                type="submit"
                className={contactPageStyles.submitButton}
                disabled={sending}
                aria-busy={sending}
              >
                <span className={contactPageStyles.submitButtonText}>
                  {sending ? "Sending... " : "Send Message"}
                  <svg
                    className={contactPageStyles.submitButtonIcon}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>

        <p className={contactPageStyles.alternativeText}>
          Prefer to schedule a call? {` `}
          <a href="tel:+918700423777" className={contactPageStyles.alternativeLink}>
            +91 8700-423-777
          </a>
        </p>
      </div>
    </div>
  );
}
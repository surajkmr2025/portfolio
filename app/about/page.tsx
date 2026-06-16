import Link from "next/link"
import { aboutPageStyles } from "@/public/dummyStyles";
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";

export default function PageName() {


  const interests = [
    "FULL-STACK DEV",
    "AI ENGINEER",
    "LLMS",
    "TRAVEL",
    "MUSIC",
    "F1",
    "READING",
  ];

  const techStack = [
    "React",
    "LLM",
    "Rails",
    "Next.js",
    "TypeScript",
    "Postgres",
    "Redis",
  ];

  const email = "surajkumar44727@gmail.com"

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;

  return (
    <main>
      <div className={aboutPageStyles.pageContainer}>
        <div className={aboutPageStyles.contentContainer}>
          <div className={aboutPageStyles.backgroundContainer}>
            <div className={aboutPageStyles.backgroundEffect}>
              <BackgroundBeamsWithCollision />

            </div>
            <div className={aboutPageStyles.contentWrapper}>
              <h1 className={aboutPageStyles.mainHeading}>
                Suraj
              </h1>

              <div className={aboutPageStyles.interestsContainer}>
                {interests.map((interest, index) => (
                  <span key={interest} className={aboutPageStyles.interestItem}>
                    {interest}{
                      index < interests.length - 1 && (
                        <span className={aboutPageStyles.interestSeparator}>
                          •
                        </span>
                      )
                    }
                  </span>
                ))}
              </div>
              <div className={aboutPageStyles.techStackContainer}>
                {techStack.map((tech) => (
                  <span key={tech} className={aboutPageStyles.techPill}>
                    {tech}
                  </span>
                ))}

              </div>

              {/* Content Section */}
              <div className={aboutPageStyles.sectionsContainer}>
                {/* Who I Am */}
                <section>
                  <h2 className={aboutPageStyles.sectionHeading}>Who I Am</h2>
                  <p className={aboutPageStyles.paragraph}>
                    Hello! I'm Suraj Kumar, a Full-Stack Developer and BCA student based in
                    Delhi, India. I'm passionate about building modern web applications,
                    learning new technologies, and turning ideas into real products. I enjoy
                    working across both frontend and backend, creating experiences that are
                    clean, responsive, and user-friendly.
                  </p>
                </section>

                {/* What I Do */}
                <section>
                  <h2 className={aboutPageStyles.sectionHeading}>What I Do</h2>
                  <p className={aboutPageStyles.paragraph}>
                    I build full-stack web applications using Next.js, React, Tailwind CSS,
                    PostgreSQL, Prisma, and other modern web technologies. My focus is on
                    developing practical products, writing maintainable code, and continuously
                    improving my skills through real-world projects and hands-on learning.
                  </p>
                </section>

                {/* My Journey */}
                <section>
                  <h2 className={aboutPageStyles.sectionHeading}>My Journey</h2>
                  <p className={aboutPageStyles.paragraph}>
                    My journey into development started with HTML, CSS, and JavaScript and
                    gradually evolved into full-stack web development. Along the way, I've
                    learned React, Next.js, databases, backend development, and modern
                    development workflows while building projects and strengthening my
                    problem-solving abilities.
                  </p>
                </section>

                {/* Vision */}
                <section>
                  <h2 className={aboutPageStyles.sectionHeading}>Vision</h2>
                  <p className={aboutPageStyles.paragraph}>
                    I believe software and AI will continue transforming the way people work,
                    learn, and communicate. My goal is to grow into a skilled software engineer
                    who builds impactful products, solves meaningful problems, and creates
                    technology that improves people's lives.
                  </p>
                </section>

                {/* Beyond Code */}
                <section>
                  <h2 className={aboutPageStyles.sectionHeading}>Beyond Code</h2>
                  <p className={aboutPageStyles.paragraph}>
                    Outside of coding, I enjoy playing cricket, reading books, exploring new
                    technologies, and keeping up with the latest developments in software
                    engineering and artificial intelligence. I'm always excited to learn
                    something new and take on challenges that help me grow.
                  </p>
                </section>
              </div>
              <div className={aboutPageStyles.ctaContainer}>
                <Link
                  href="/contact"
                  className={aboutPageStyles.primaryButton}
                  aria-label="Get in touch — open contact page"
                >
                  Get in Touch
                </Link>


                <a
                  href={gmailComposeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={aboutPageStyles.secondaryButton}
                  aria-label={`Compose email to ${email} in Gmail`}
                >
                  <svg
                    className={aboutPageStyles.emailIcon}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  E-Mail
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}
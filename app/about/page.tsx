import Link from "next/link";
export default function AboutPage() {
  return (
    <main className="about-page">

      <section className="about-hero">

        <div className="about-hero-left">

          <p className="section-tag">
            • ABOUT
          </p>

          <h1>
            Building modern digital experiences with clean design and smart development.
          </h1>

          <p className="about-hero-description">
            Develop modern, responsive, and performance-focused websites
            that help businesses create a strong online presence and deliver
            better user experiences.
          </p>

        </div>

        <div className="about-hero-right">

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop"
            alt="Developer"
          />

        </div>

      </section>

      <section className="about-story">

        <div className="story-left">

          <p className="section-tag">
            • WHO I AM
          </p>

          <h2>
            Passionate about creating websites that actually perform.
          </h2>

        </div>

        <div className="story-right">

          <p>
            Led by Denis Yadav, focus on building websites that combine
            modern UI design, responsive layouts, clean development, and
            smooth user experience.
          </p>

          <p>
            Along with web development, experience in QA engineering and
            testing helps ensure projects are reliable, optimized, and
            delivered with high quality standards.
          </p>

          <p>
            From business websites to complete digital solutions, every
            project is developed with attention to performance, usability,
            and long-term scalability.
          </p>

        </div>

      </section>

      <section className="skills-section">

        <div className="skills-heading">

          <p className="section-tag">
            • EXPERTISE
          </p>

          <h2>
            Technologies & Skills
          </h2>

        </div>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>Frontend Development</h3>
            <p>
              Modern UI development using responsive layouts and clean design systems.
            </p>
          </div>

          <div className="skill-card">
            <h3>Next.js Development</h3>
            <p>
              Fast and scalable web applications using modern React frameworks.
            </p>
          </div>

          <div className="skill-card">
            <h3>Responsive Design</h3>
            <p>
              Websites optimized perfectly for desktop, tablet, and mobile devices.
            </p>
          </div>

          <div className="skill-card">
            <h3>QA & Testing</h3>
            <p>
              Functional testing and quality-focused development for reliable products.
            </p>
          </div>
          <div className="skill-card">
            <h3>Wordpress Websites</h3>
            <p>
              Build Websites with Customized themes according to the client needs and requirements.
            </p>
          </div>
        </div>

      </section>

      <section className="about-cta">

        <div className="about-cta-card">

          <h2>
            Let’s build something impactful together.
          </h2>

          <p>
            Whether it’s a business website, portfolio, or modern web platform,
            the focus is on creating experiences that look professional and perform smoothly.
          </p>

        </div>

      </section>

    </main>
  );
}

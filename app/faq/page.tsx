import Link from "next/link";
export default function FAQPage() {
  return (
    <main className="faq-page">

      <section className="faq-hero">

        <p className="section-tag">
          • FAQ
        </p>

        <h1>
          Questions clients usually ask before starting a project.
        </h1>

        <p className="faq-description">
          Everything about working process, communication, development,
          timelines, support, and project expectations.
        </p>

      </section>

      <section className="faq-container">

        <div className="faq-card">
          <h2>What kind of websites do you develop?</h2>
          <p>
            I mainly develop modern business websites, portfolios,
            landing pages, and responsive custom websites with clean UI and smooth experience.
          </p>
        </div>

        <div className="faq-card">
          <h2>Do you build fully custom websites?</h2>
          <p>
            Yes. Every project is designed and developed based on the client’s
            requirements instead of using heavy pre-made templates.
          </p>
        </div>

        <div className="faq-card">
          <h2>Will my website work properly on mobile devices?</h2>
          <p>
            Absolutely. Every website is developed with responsive design
            to ensure smooth experience across desktop, tablet, and mobile.
          </p>
        </div>

        <div className="faq-card">
          <h2>How long does a project usually take?</h2>
          <p>
            It depends on the project scope, but most websites are completed
            within a few days to a few weeks with proper communication and revisions.
          </p>
        </div>

        <div className="faq-card">
          <h2>Do you also help with design ideas?</h2>
          <p>
            Yes. If you are unsure about design direction, layouts, or website structure,
            guidance and suggestions are provided throughout the process.
          </p>
        </div>

        <div className="faq-card">
          <h2>Can I request changes during development?</h2>
          <p>
            Yes. Client feedback is an important part of the workflow and
            reasonable revisions can be made during the project.
          </p>
        </div>

        <div className="faq-card">
          <h2>Do you provide website maintenance or future support?</h2>
          <p>
            Yes. Support can be provided after project completion for updates,
            improvements, fixes, or future enhancements if required.
          </p>
        </div>

        <div className="faq-card">
          <h2>Do you only work with local clients?</h2>
          <p>
            No. Projects can be handled remotely and communication can happen
            smoothly through online meetings and messaging platforms.
          </p>
        </div>

        <div className="faq-card">
          <h2>How do we communicate during the project?</h2>
          <p>
            Communication can happen through email, WhatsApp, Slack,
            Google Meet, or any comfortable platform preferred by the client.
          </p>
        </div>

        <div className="faq-card">
          <h2>Will I be able to update my website later?</h2>
          <p>
            Yes. Websites are developed with clean structure so future updates,
            content changes, and improvements remain manageable.
          </p>
        </div>

        <div className="faq-card">
          <h2>Do you also test websites before delivery?</h2>
          <p>
            Yes. Since quality and reliability are important, websites are tested
            carefully for responsiveness, functionality, and smooth user experience.
          </p>
        </div>

        <div className="faq-card">
          <h2>What makes your workflow different?</h2>
          <p>
            The focus is not only on design but also on usability, performance,
            responsiveness, and delivering projects in a clean and professional way.
          </p>
        </div>

      </section>

      <section className="faq-bottom">

        <div className="faq-bottom-card">

          <h2>
            Still have questions?
          </h2>

          <p>
            If there is anything specific you would like to discuss regarding
            your project, feel free to reach out anytime.
          </p>

          <a href="/contact" className="primary-btn">
            Feel free to reach here
          </a>

        </div>

      </section>

    </main>
  );
}
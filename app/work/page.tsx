import Link from "next/link";
export default function WorkPage() {
  return (
    <main className="work-page">

      <section className="work-hero">
        <p className="section-tag">
          • MY WORK
        </p>

        <h1>
          Real websites built with clean design and modern development.
        </h1>

        <p className="work-description">
          I build responsive and user-friendly websites focused on
          performance, smooth experience, and modern UI design.
        </p>
      </section>

      <section className="project-section">

        <div className="project-card">

          <div className="project-image">
            <img
              src="\images\bwdclient1.png"
              alt="School Website"
            />
          </div>

          <div className="project-content">

            <span className="project-type">
              LIVE PROJECT
            </span>

            <h2>
              School Website Development
            </h2>

            <p>
              Successfully developed and deployed a modern school website
              with responsive design, smooth navigation, mobile optimization,
              and clean user experience for students and parents.
            </p>

            <div className="project-tags">
              <span>Next.js</span>
              <span>Responsive Design</span>
              <span>UI/UX</span>
            </div>

            <a href="#" className="primary-btn">
              View Project
            </a>

          </div>
        </div>

      </section>

    </main>
  );
}

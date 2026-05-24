import Link from "next/link";
export default function ProcessPage() {
  return (
    <main className="process-page">

      <section className="process-hero">

        <p className="section-tag">
          • THE PROCESS
        </p>

        <h1>
          A smooth and strategic process to build successful digital products.
        </h1>

        <p className="process-description">
          From planning to launch, every step is focused on creating
          high-performing, modern, and user-friendly websites that help
          businesses grow online.
        </p>

      </section>

      <section className="timeline-section">

        <div className="timeline-card">

          <div className="timeline-number">
            01
          </div>

          <div className="timeline-content">
            <h2>Discovery & Planning</h2>

            <p>
              First motive is to understand your business goals, audience, and
              requirements to create a clear roadmap for the project.
            </p>
          </div>

        </div>

        <div className="timeline-card">

          <div className="timeline-number">
            02
          </div>

          <div className="timeline-content">
            <h2>UI/UX Design</h2>

            <p>
              Modern and clean designs are created with focus on user
              experience, responsiveness, and visual appeal.
            </p>
          </div>

        </div>

        <div className="timeline-card">

          <div className="timeline-number">
            03
          </div>

          <div className="timeline-content">
            <h2>Development</h2>

            <p>
              The website is developed using modern technologies with
              optimized performance, scalability, and clean structure.
            </p>
          </div>

        </div>

        <div className="timeline-card">

          <div className="timeline-number">
            04
          </div>

          <div className="timeline-content">
            <h2>Testing & Optimization</h2>

            <p>
              Every section is tested carefully for responsiveness,
              performance, speed, and smooth user interaction.
            </p>
          </div>

        </div>

        <div className="timeline-card">

          <div className="timeline-number">
            05
          </div>

          <div className="timeline-content">
            <h2>Launch & Support</h2>

            <p>
              After final approval, the project is deployed successfully
              with ongoing support and future improvements if needed.
            </p>
          </div>

        </div>

      </section>

      <section className="process-bottom">

        <div className="bottom-card">

          <h2>
            Why this process works
          </h2>

          <p>
            A structured workflow helps deliver projects faster,
            improves communication, reduces errors, and ensures
            better final results for clients.
          </p>

        </div>

      </section>

    </main>
  );
}
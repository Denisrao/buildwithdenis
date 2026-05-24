import Link from "next/link";
export default function Home() {
  return (
    <main>

      <section className="hero">

        <div className="hero-left">

          <div className="tag">
            ● Web Development That Drives Results
          </div>

          <h1 className="hero-heading">

  <span className="typing-line">
    I build fast, modern
  </span>

  <br />

  <span className="typing-line delay-1">
    websites to bring growth
  </span>

  <br />

  <span className="typing-line delay-2">
    into your cart.
  </span>

</h1>
          <div className="hero-buttons">
            <button className="primary-btn">
              <Link href="/contact">Start Your Project</Link>
            </button>

            <button className="secondary-btn">
              <Link href="/work">View My Work</Link>
            </button>
          </div>

        </div>

        <div className="hero-right">

          <div className="mockup">

            <div className="mockup-header">
              <span></span>
              <div className="mockup-nav">
                <span>Home</span>
                <span>About</span>
                <span>Services</span>
                <span>Work</span>
                <span>Contact</span>
              </div>
            </div>

            <div className="mockup-content">

              <div className="mockup-text">
                <h2>
                  Digital experiences that drive real growth
                </h2>

                <p>
                  Design and develop modern websites
                  that help brands stand out.
                </p>

                <button>
                  See Our Work
                </button>
              </div>

              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
                alt="Furniture"
              />

            </div>

          </div>

        </div>

      </section>
{/* ABOUT SECTION */}

<section className="about-section">

  <div className="about-content">

    <div className="about-left">

      <p className="section-tag">
        • ABOUT ME
      </p>

      <h2>
        Building digital experiences
        that help businesses grow.
      </h2>

    </div>

    <div className="about-right">

      <p>
        I’m a passionate web developer who
        loves creating fast, modern and visually
        appealing websites that deliver real
        results for businesses.
      </p>

      <p>
        From landing pages to complete web
        applications, I focus on clean code,
        performance and user experience.
      </p>

    </div>

    <div className="about-image">

      <img
        src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop"
        alt="Developer Setup"
      />

    </div>

  </div>

</section>

{/* PROCESS SECTION */}

<section className="process-section">

  <div className="process-heading">

    <p className="section-tag">
      • PROCESS
    </p>

    <h2>
      My process for delivering
      successful projects
    </h2>

  </div>

  <div className="process-grid">

    <div className="process-card">

      <div className="process-top">
        <div className="process-icon">
          🔍
        </div>

        <span>01</span>
      </div>

      <h3>Discovery</h3>

      <p>
        I learn about your business,
        goals and audience to define
        the right strategy.
      </p>

    </div>

    <div className="process-card">

      <div className="process-top">
        <div className="process-icon">
          ✏️
        </div>

        <span>02</span>
      </div>

      <h3>Design</h3>

      <p>
        I create clean, modern and
        intuitive designs focused on
        user experience.
      </p>

    </div>

    <div className="process-card">

      <div className="process-top">
        <div className="process-icon">
          {"</>"}
        </div>

        <span>03</span>
      </div>

      <h3>Development</h3>

      <p>
        I build fast, responsive and
        scalable websites with
        clean code.
      </p>

    </div>

    <div className="process-card">

      <div className="process-top">
        <div className="process-icon">
          🚀
        </div>

        <span>04</span>
      </div>

      <h3>Launch</h3>

      <p>
        I test, optimize and deploy
        your website for maximum
        performance.
      </p>

    </div>

  </div>

</section>

{/* RESULTS SECTION */}

<section className="results-section">

  <div className="results-left">

    <div className="stat-card">

      <div className="stat-icon">
        💼
      </div>

      <h2>25+</h2>

      <h4>Projects Completed</h4>

      <p>
        Successfully delivered
        for amazing clients.
      </p>

    </div>

    <div className="stat-card">

      <div className="stat-icon">
        ⭐
      </div>

      <h2>5+</h2>

      <h4>Years Experience</h4>

      <p>
        Building digital products
        and web solutions.
      </p>

    </div>

  </div>

  <div className="results-right">

    <p className="section-tag">
      • RESULTS
    </p>

    <h2>
      I build websites that
      drive growth and results.
    </h2>

    <p>
      My focus is on creating websites
      that not only look premium but
      also perform exceptionally in
      terms of speed, SEO and conversions.
    </p>

  </div>

  <div className="results-image">

    <img
      src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop"
      alt="Mountain"
    />

  </div>

</section>

{/* TESTIMONIALS */}

<section className="testimonial-section">

  <div className="testimonial-heading">

    <p className="section-tag">
      • TESTIMONIALS
    </p>

    <h2>
      What clients say about
      working with me
    </h2>

  </div>

  <div className="testimonial-slider">

    <button className="slider-btn">
      ←
    </button>

    <div className="testimonial-card active-testimonial">

      <div className="testimonial-user">

        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Client"
        />

        <div className="testimonial-content">

          <div className="stars">
            ★★★★★
          </div>

          <p>
            “Denis delivered a beautiful,
            fast and responsive website
            that helped our brand stand out.
            Highly recommended.”
          </p>

          <h4>
            Michael Carter
          </h4>

          <span>
            Founder, Nexora
          </span>

        </div>

      </div>

    </div>

    <button className="slider-btn">
      →
    </button>

  </div>

</section>
    </main>
  );
}

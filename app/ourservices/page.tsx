import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="services-page">

      {/* HERO SECTION */}

      <section className="services-hero">

        <p className="services-tag">
          MY SERVICES
        </p>

        <h1>
          Helping Brands Build
          <br />
          Powerful Digital Presence
        </h1>

        <p className="services-description">
          I create modern websites, optimize existing platforms,
          integrate intelligent automation, and provide complete
          website management solutions that help businesses grow
          faster online with better performance, user experience,
          and scalability.
        </p>

      </section>

      {/* SERVICES SECTION */}

      <section className="services-container">

        {/* SERVICE 1 */}

        <div className="service-card">

          <div className="service-number">
            01
          </div>

          <h2>
            Custom Website Development
          </h2>

          <p>
            I build fully custom, responsive, and high-performing
            websites tailored specifically to your business goals.
            From landing pages to complete business websites,
            every project is designed with modern UI, clean
            architecture, mobile responsiveness, SEO structure,
            and optimized performance.
          </p>

          <ul>
            <li>Modern Responsive Design</li>
            <li>Fast Loading Performance</li>
            <li>SEO Friendly Structure</li>
            <li>Scalable Development</li>
            <li>Clean UI/UX Experience</li>
            <li>Next.js & Modern Frameworks</li>
          </ul>

        </div>

        {/* SERVICE 2 */}

        <div className="service-card">

          <div className="service-number">
            02
          </div>

          <h2>
            Website Maintenance & Support
          </h2>

          <p>
            Already have a website? I help businesses maintain,
            update, optimize, and improve their existing websites
            to ensure everything runs smoothly without technical
            issues, broken functionality, or outdated content.
          </p>

          <ul>
            <li>Bug Fixes & Troubleshooting</li>
            <li>Website Updates</li>
            <li>UI Improvements</li>
            <li>Speed Optimization</li>
            <li>Content Management</li>
            <li>Technical Support</li>
          </ul>

        </div>

        {/* SERVICE 3 */}

        <div className="service-card">

          <div className="service-number">
            03
          </div>

          <h2>
            Hosting & Deployment
          </h2>

          <p>
            I handle website deployment and hosting setup to make
            your website live securely and professionally. From
            domain connection to server configuration, everything
            is managed properly for smooth website performance.
          </p>

          <ul>
            <li>Website Deployment</li>
            <li>Domain Configuration</li>
            <li>Hosting Setup</li>
            <li>SSL & Security Setup</li>
            <li>Performance Optimization</li>
            <li>Live Website Monitoring</li>
          </ul>

        </div>

        {/* SERVICE 4 */}

        <div className="service-card">

          <div className="service-number">
            04
          </div>

          <h2>
            AI Assistant Integration
          </h2>

          <p>
            Integrate AI-powered assistants and automation systems
            into your business workflows and websites. I help
            businesses automate repetitive tasks, improve customer
            interactions, and create smarter digital experiences
            using modern AI technologies.
          </p>

          <ul>
            <li>AI Chatbot Integration</li>
            <li>Workflow Automation</li>
            <li>Smart Customer Support</li>
            <li>AI Website Features</li>
            <li>OpenAI API Integration</li>
            <li>Custom AI Solutions</li>
          </ul>

        </div>

        {/* SERVICE 5 */}

        <div className="service-card">

          <div className="service-number">
            05
          </div>

          <h2>
            Payment Gateway Integration
          </h2>

          <p>
            Integrates payment gateways into your eCommerce websites. I help
            businesses integrate payment gateways and use digital payment 
            for their business purposes. Customers trust on a website where
            they find a direct way and setup of payments as this makes their experiences
            hassle free.
          </p>

          <ul>
            <li>Razorpay Integration</li>
            <li>Stripe Integration</li>
            <li>Secure Transaction flows</li>
            <li>Secure Checkout</li>
            <li>Payment Solutions</li>
          </ul>

        </div>

      </section>

      {/* WHY CHOOSE ME */}

      <section className="why-section">

        <div className="why-left">

          <p className="services-tag">
            WHY WORK WITH ME
          </p>

          <h2>
            Modern Solutions With
            Long-Term Reliability
          </h2>

        </div>

        <div className="why-right">

          <div className="why-box">
            <h3>Modern Technologies</h3>

            <p>
              Using modern frameworks and clean development
              practices to create scalable solutions.
            </p>
          </div>

          <div className="why-box">
            <h3>Performance Focused</h3>

            <p>
              Optimized websites with fast loading speed,
              responsive layouts, and better user experience.
            </p>
          </div>

          <div className="why-box">
            <h3>Ongoing Support</h3>

            <p>
              Reliable maintenance and long-term support to keep
              your website running smoothly.
            </p>
          </div>

          <div className="why-box">
            <h3>Business Growth Driven</h3>

            <p>
              Solutions designed to help businesses improve
              visibility, engagement, and conversions.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="services-cta">

        <h2>
          Let’s Build Your Next Project
        </h2>

        <p>
          Whether you need a new website, website improvements,
          hosting setup, or AI integration — I can help bring
          your ideas to life.
        </p>


      </section>

    </main>
  );
}
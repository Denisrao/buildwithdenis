"use client";
import { useState } from "react";
import "../../styles/home.css";
export default function ContactPage() {
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  projectType: "",
  message: "",
});

const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement |
    HTMLTextAreaElement
  >
) => {

  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (
  e: React.FormEvent
) => {

  e.preventDefault();

  const response = await fetch(
    "/api/contact",
    {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify(
        formData
      ),
    }
  );

  if (response.ok) {

    setSuccessMessage(
      "Thanks for Submission !! Denis will contact you in 1-2 business days."
    );

  } else {

    setSuccessMessage(
      "Something went wrong. Please try again."
    );
  }
};

  return (

    <main className="contact-page">

      {/* HERO */}

      <section className="contact-hero">

        <p className="section-tag">
          • CONTACT
        </p>

        <h1>
          Let’s build something
          exceptional together.
        </h1>

        <p>
          Have a project in mind?
          Fill out the form below and
          let’s discuss your website.
        </p>

      </section>

      {/* CONTACT SECTION */}

      <section className="contact-container">

        {/* LEFT SIDE */}

        <div className="contact-info">

          <div className="info-box">

            <span>Email</span>

            <h3>
              denisyadavv@gmail.com
            </h3>

          </div>

          <div className="info-box">

            <span>Location</span>

            <h3>
              India • Worldwide
            </h3>

          </div>

          <div className="info-box">

            <span>Availability</span>

            <h3>
              Open for freelance projects
            </h3>

          </div>

        </div>

        {/* FORM */}
<form
  className="contact-form"
  onSubmit={handleSubmit}
>

  <div className="form-group">

    <label>
      Full Name
    </label>

    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      placeholder="John Doe"
      required
    />

  </div>

  <div className="form-group">

    <label>
      Email Address
    </label>

    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="john@example.com"
      required
    />

  </div>

  <div className="form-group">

    <label>
      Project Type
    </label>

    <input
      type="text"
      name="projectType"
      value={formData.projectType}
      onChange={handleChange}
      placeholder="Business Website"
      required
    />

  </div>

  <div className="form-group">

    <label>
      Project Details
    </label>

    <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      placeholder="Tell me about your project..."
      required
    ></textarea>

  </div>

  <button type="submit">
  Send Message →
</button>

{
  successMessage && (

    <p className="form-message">
      {successMessage}
    </p>
  )
}

</form>


      </section>

    </main>

  );
}
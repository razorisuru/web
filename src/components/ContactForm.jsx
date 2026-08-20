import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiAlertCircle, FiCheck, FiX, FiSend } from "react-icons/fi";

/**
 * Restyle only — the submit handler, endpoint, state shape and validation
 * rules below are unchanged from the original.
 *
 * Fields are hairline-underlined rather than filled glass panels; they inherit
 * `currentColor`, so they read correctly on any band. Errors carry an icon and
 * a heavier rule as well as colour, so the signal survives colour-blindness.
 */
const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    setFormErrors((prev) => ({
      ...prev,
      [id]: "",
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
    if (formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
      isValid = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }
    if (formData.subject.trim().length < 3) {
      errors.subject = "Subject must be at least 3 characters";
      isValid = false;
    }
    if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
      isValid = false;
    }
    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);
    setError(null);
    try {
      const response = await fetch(
        "https://razor-mail-server.vercel.app/api/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setError(error.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="border-t-2 border-ink pt-6" role="status">
        <p className="hm-label mb-3 flex items-center gap-2 text-accent">
          <FiCheck size={14} aria-hidden="true" />
          Message Sent Successfully!
        </p>
        <p className="mb-8 max-w-[46ch] text-ink-2">
          Thank you for your message. I&rsquo;ll get back to you soon.
        </p>
        <button
          type="button"
          onClick={() => setIsSuccess(false)}
          className="hm-chip"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  const fields = [
    {
      id: "name",
      label: "Your Name",
      type: "text",
      placeholder: "Nimal Perera",
      half: true,
    },
    {
      id: "email",
      label: "Your Email",
      type: "email",
      placeholder: "name@example.com",
      half: true,
    },
    {
      id: "subject",
      label: "Subject",
      type: "text",
      placeholder: "Project Inquiry",
      half: false,
    },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full"
      aria-label="Contact form"
      noValidate
    >
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.id} className={field.half ? "" : "sm:col-span-2"}>
            <label htmlFor={field.id} className="hm-label mb-1 block">
              {field.label}
            </label>
            <input
              type={field.type}
              id={field.id}
              name={field.id}
              value={formData[field.id]}
              onChange={handleChange}
              className="hm-field"
              placeholder={field.placeholder}
              required
              aria-required="true"
              aria-invalid={formErrors[field.id] ? "true" : "false"}
              aria-describedby={
                formErrors[field.id] ? `${field.id}-error` : undefined
              }
            />
            <p id={`${field.id}-error`} className="hm-fieldnote">
              {formErrors[field.id] && (
                <>
                  <FiAlertCircle size={13} aria-hidden="true" />
                  {formErrors[field.id]}
                </>
              )}
            </p>
          </div>
        ))}

        <div className="sm:col-span-2">
          <label htmlFor="message" className="hm-label mb-1 block">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="hm-field"
            placeholder="Your message here..."
            required
            maxLength={500}
            aria-required="true"
            aria-invalid={formErrors.message ? "true" : "false"}
            aria-describedby={
              formErrors.message ? "message-error message-desc" : "message-desc"
            }
          ></textarea>
          <div className="flex items-baseline justify-between gap-4">
            <p id="message-error" className="hm-fieldnote">
              {formErrors.message && (
                <>
                  <FiAlertCircle size={13} aria-hidden="true" />
                  {formErrors.message}
                </>
              )}
            </p>
            <p id="message-desc" className="hm-num shrink-0 text-xs text-muted">
              {formData.message.length}/500 characters
            </p>
          </div>
        </div>
      </div>

      {error && (
        <div
          className="mt-8 flex items-start gap-3 border-t-2 border-danger pt-4 text-danger"
          role="alert"
        >
          <FiAlertCircle
            size={18}
            className="mt-0.5 shrink-0"
            aria-hidden="true"
          />
          <div className="min-w-0 flex-1">
            <p className="font-semibold">{error}</p>
            <p className="mt-1 text-sm">
              Please try again or contact me directly at
              isurubandara318@gmail.com
            </p>
          </div>
          <button
            type="button"
            onClick={() => setError(null)}
            className="hm-act shrink-0"
            aria-label="Dismiss error message"
          >
            <FiX size={16} aria-hidden="true" />
          </button>
        </div>
      )}

      <div className="mt-10 flex items-center gap-3">
        <button
          type="submit"
          className="hm-btn flex-1 sm:flex-none justify-center"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
          <FiSend size={15} aria-hidden="true" />
        </button>

        <span className="hm-label text-muted lowercase shrink-0">or</span>

        <a
          href="https://wa.me/94766008527"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact on WhatsApp (0766008527)"
          title="Chat on WhatsApp: 0766008527"
          className="hm-btn shrink-0 !px-3.5 !bg-[#25D366] !text-white !border-[#25D366] hover:!bg-[#20ba59] hover:!border-[#20ba59] transition-transform hover:scale-105"
        >
          <FaWhatsapp size={20} aria-hidden="true" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>
    </form>
  );
};

export default ContactForm;

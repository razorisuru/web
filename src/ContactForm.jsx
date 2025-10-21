import { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = ({ theme }) => {
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
    message: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    setFormErrors((prev) => ({
      ...prev,
      [id]: ""
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {
      name: "",
      email: "",
      subject: "",
      message: ""
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
      const response = await fetch("https://razor-mail-server.vercel.app/api/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
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

 // Add a better success message with animation
if (isSuccess) {
  return (
    <motion.div
      className={`text-center p-8 rounded-xl ${
        theme === "dark" ? "bg-white/5 text-white" : "bg-white text-gray-800"
      } shadow-lg border ${theme === "dark" ? "border-white/10" : "border-gray-200"}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-4 flex justify-center">
        <motion.div 
          className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white text-2xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
      </div>
      <motion.h3 
        className="text-xl font-semibold mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Message Sent Successfully!
      </motion.h3>
      <motion.p 
        className="mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Thank you for your message. I'll get back to you soon.
      </motion.p>
      <motion.button
        onClick={() => setIsSuccess(false)}
        className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Send Another Message
      </motion.button>
    </motion.div>
  );
}

  return (
    <form onSubmit={handleSubmit} className="w-full" aria-label="Contact form" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label
            htmlFor="name"
            className={`block text-sm font-semibold mb-2 ${
              theme === "dark" ? "text-gray-200" : "text-gray-700"
            }`}
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl backdrop-blur-sm border transition-all duration-300 ${
              theme === "dark"
                ? "bg-white/5 border-white/10 text-white placeholder-gray-400 focus:bg-white/10 focus:border-indigo-400/50"
                : "bg-white/30 border-white/20 text-gray-800 placeholder-gray-500 focus:bg-white/50 focus:border-indigo-500/50"
            } ${formErrors.name ? "border-red-500" : ""} focus:ring-2 focus:ring-indigo-500/30 focus:border-transparent shadow-lg`}
            placeholder="John Doe"
            required
            aria-required="true"
            aria-invalid={formErrors.name ? "true" : "false"}
            aria-describedby={formErrors.name ? "name-error" : undefined}
          />
          {formErrors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-500">{formErrors.name}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className={`block text-sm font-semibold mb-2 ${
              theme === "dark" ? "text-gray-200" : "text-gray-700"
            }`}
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl backdrop-blur-sm border transition-all duration-300 ${
              theme === "dark"
                ? "bg-white/5 border-white/10 text-white placeholder-gray-400 focus:bg-white/10 focus:border-indigo-400/50"
                : "bg-white/30 border-white/20 text-gray-800 placeholder-gray-500 focus:bg-white/50 focus:border-indigo-500/50"
            } ${formErrors.email ? "border-red-500" : ""} focus:ring-2 focus:ring-indigo-500/30 focus:border-transparent shadow-lg`}
            placeholder="john@example.com"
            required
            aria-required="true"
            aria-invalid={formErrors.email ? "true" : "false"}
            aria-describedby={formErrors.email ? "email-error" : undefined}
          />
          {formErrors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-500">{formErrors.email}</p>
          )}
        </div>
      </div>

      <div className="mb-6">
        <label
          htmlFor="subject"
          className={`block text-sm font-semibold mb-2 ${
            theme === "dark" ? "text-gray-200" : "text-gray-700"
          }`}
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-xl backdrop-blur-sm border transition-all duration-300 ${
            theme === "dark"
              ? "bg-white/5 border-white/10 text-white placeholder-gray-400 focus:bg-white/10 focus:border-indigo-400/50"
              : "bg-white/30 border-white/20 text-gray-800 placeholder-gray-500 focus:bg-white/50 focus:border-indigo-500/50"
          } ${formErrors.subject ? "border-red-500" : ""} focus:ring-2 focus:ring-indigo-500/30 focus:border-transparent shadow-lg`}
          placeholder="Project Inquiry"
          required
          aria-required="true"
          aria-invalid={formErrors.subject ? "true" : "false"}
          aria-describedby={formErrors.subject ? "subject-error" : undefined}
        />
        {formErrors.subject && (
          <p id="subject-error" className="mt-1 text-sm text-red-500">{formErrors.subject}</p>
        )}
      </div>

      <div className="mb-8">
        <label
          htmlFor="message"
          className={`block text-sm font-semibold mb-2 ${
            theme === "dark" ? "text-gray-200" : "text-gray-700"
          }`}
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-xl backdrop-blur-sm border transition-all duration-300 resize-none ${
            theme === "dark"
              ? "bg-white/5 border-white/10 text-white placeholder-gray-400 focus:bg-white/10 focus:border-indigo-400/50"
              : "bg-white/30 border-white/20 text-gray-800 placeholder-gray-500 focus:bg-white/50 focus:border-indigo-500/50"
          } ${formErrors.message ? "border-red-500" : ""} focus:ring-2 focus:ring-indigo-500/30 focus:border-transparent shadow-lg`}
          placeholder="Your message here..."
          required
          maxLength={500}
          aria-required="true"
          aria-invalid={formErrors.message ? "true" : "false"}
          aria-describedby={formErrors.message ? "message-error message-desc" : "message-desc"}
        ></textarea>
        {formErrors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-500">{formErrors.message}</p>
        )}
        <div id="message-desc" className={`text-right mt-1 text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
          {formData.message.length}/500 characters
        </div>
      </div>

{error && (
  <motion.div 
    className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg border border-red-200 flex items-start"
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: 'auto' }}
    transition={{ duration: 0.3 }}
  >
    <div className="mr-3 flex-shrink-0 mt-0.5">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
    </div>
    <div className="flex-1">
      <p className="font-medium">{error}</p>
      <p className="text-sm mt-1">Please try again or contact me directly at isurubandara318@gmail.com</p>
    </div>
    <button 
      onClick={() => setError(null)} 
      className="flex-shrink-0 ml-2 text-red-500 hover:text-red-700"
      aria-label="Dismiss error message"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </button>
  </motion.div>
)}

      <motion.button
        type="submit"
        className="relative w-full px-6 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 text-white font-semibold rounded-xl backdrop-blur-sm border border-indigo-500/20 shadow-2xl overflow-hidden group"
        whileHover={{
          scale: 1.02,
          boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)",
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        disabled={isSubmitting}
        aria-busy={isSubmitting}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

        <span className="relative z-10">
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </span>

        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
      </motion.button>
    </form>
  );
};

export default ContactForm;

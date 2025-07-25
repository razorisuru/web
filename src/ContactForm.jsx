import { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = ({ theme }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      await fetch("/", {
        method: "POST",
        body: formDataToSend,
        headers: {
          "Accept": "application/x-www-form-urlencoded",
        },
      });
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className={`text-center p-8 rounded-xl ${
        theme === "dark" ? "bg-white/5 text-white" : "bg-white text-gray-800"
      }`}>
        <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
        <p className="mb-4">Thank you for your message. I'll get back to you soon.</p>
        <button
          onClick={() => setIsSuccess(false)}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form 
      name="contact" 
      method="POST" 
      data-netlify="true" 
      onSubmit={handleSubmit}
      className="w-full"
    >
      {/* Add hidden input for Netlify form recognition */}
      <input type="hidden" name="form-name" value="contact" />
      
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
            } focus:ring-2 focus:ring-indigo-500/30 focus:border-transparent shadow-lg`}
            placeholder="John Doe"
            required
          />
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
            } focus:ring-2 focus:ring-indigo-500/30 focus:border-transparent shadow-lg`}
            placeholder="john@example.com"
            required
          />
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
          } focus:ring-2 focus:ring-indigo-500/30 focus:border-transparent shadow-lg`}
          placeholder="Project Inquiry"
          required
        />
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
          } focus:ring-2 focus:ring-indigo-500/30 focus:border-transparent shadow-lg`}
          placeholder="Your message here..."
          required
        ></textarea>
      </div>

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
      >
        {/* Button shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

        <span className="relative z-10">
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </span>

        {/* Button glow effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
      </motion.button>
    </form>
  );
};

export default ContactForm;
"use client";

import { useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

// ⚠️ Personnalise ces informations avec tes vraies coordonnées
const CONTACT_INFO = {
  email: "stevengansop258@gmail.com",
  github: {
    username: "erwan-123",
    url: "https://github.com/erwan-123",
  },
  linkedin: {
    username: "steve Ngansop",
    url: "https://linkedin.com/in/steve ngansop",
  },
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFeedback("Merci ! Ton message a bien été envoyé.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setFeedback(data.error || "Une erreur est survenue.");
      }
    } catch {
      setStatus("error");
      setFeedback("Impossible d'envoyer le message. Réessaie plus tard.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-24 px-4">
      {/* ───────── EN-TÊTE : coordonnées AU-DESSUS du formulaire ───────── */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Contacte-moi
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Une idée, un projet ou une simple question ? Je suis à ton écoute.
        </p>

        {/* Liens Email / GitHub / LinkedIn */}
        <div className="flex flex-wrap justify-center gap-2">
          {/* Email */}
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="flex items-center gap-2 px-3.5 py-2 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-700 hover:border-gray-300 hover:shadow-sm transition"
          >
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            {CONTACT_INFO.email}
          </a>

          {/* GitHub */}
          <a
            href={CONTACT_INFO.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-2 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-700 hover:border-gray-300 hover:shadow-sm transition"
          >
            <svg
              className="w-4 h-4 text-gray-800"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            {CONTACT_INFO.github.username}
          </a>

          {/* LinkedIn */}
          <a
            href={CONTACT_INFO.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-2 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-700 hover:border-gray-300 hover:shadow-sm transition"
          >
            <svg
              className="w-4 h-4 text-[#0A66C2]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            {CONTACT_INFO.linkedin.username}
          </a>
        </div>
      </div>

      {/* ───────── FORMULAIRE COMPACT ───────── */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-medium text-gray-600 mb-1.5"
              >
                Nom <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm text-black bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 outline-none transition"
                placeholder="entrez votre nom"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium text-gray-600 mb-1.5"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 outline-none transition"
                placeholder="jean@example.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-xs font-medium text-gray-600 mb-1.5"
            >
              Sujet
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 text-black text-sm bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 outline-none transition"
              placeholder="Proposition de collaboration"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs font-medium text-gray-600 mb-1.5"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 text-black text-sm bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 outline-none resize-none transition"
              placeholder="Écris ton message ici..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 text-white text-sm font-medium py-2.5 px-5 rounded-lg transition flex items-center justify-center gap-2"
          >
            {status === "loading" ? (
              <>
                <svg
                  className="animate-spin h-4 w-4"
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
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Envoi...
              </>
            ) : (
              "Envoyer le message"
            )}
          </button>

          {feedback && (
            <p
              className={`text-xs text-center ${
                status === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {feedback}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
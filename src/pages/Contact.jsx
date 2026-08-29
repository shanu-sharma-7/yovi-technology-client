
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    customService: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      const API_URL =
        import.meta.env.VITE_API_URL || "http://localhost:5000";

      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setStatus({
        type: "success",
        message:
          "Thanks for reaching out! We'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        customService: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact Form Error ❌", error);

      setStatus({
        type: "error",
        message:
          error.message ||
          "Unable to submit your message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] px-6 pb-24 pt-32 text-white sm:px-8 lg:px-12">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >

          <span className="text-[10px] font-medium tracking-[0.25em] text-violet-300/70">
            GET IN TOUCH
          </span>

          <h1 className="mt-5 text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl md:text-7xl">

            Let's build something

            <span className="block bg-gradient-to-r from-white via-violet-200 to-blue-300 bg-clip-text text-transparent">
              meaningful.
            </span>

          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-white/40 sm:text-lg">
            Have an idea, a business challenge, or a digital
            product in mind? Tell us what you're working on.
          </p>

        </motion.div>


        {/* =========================================
            CONTACT GRID
        ========================================= */}

        <div className="mt-20 grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">

          {/* =========================================
              LEFT INFO
          ========================================= */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-4"
          >

            {/* Contact Information */}

            <div className="rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-7">

              <span className="text-[10px] tracking-[0.2em] text-white/25">
                CONTACT
              </span>

              <div className="mt-8 space-y-7">

                {/* EMAIL */}

                <div className="flex gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">

                    <Mail
                      size={17}
                      className="text-violet-200"
                    />

                  </div>

                  <div>

                    <p className="text-xs text-white/30">
                      Email
                    </p>

                    <p className="mt-1 text-sm text-white/75">
                      hello@yovitechnologies.com
                    </p>

                  </div>

                </div>


                {/* PHONE */}

                <div className="flex gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">

                    <Phone
                      size={17}
                      className="text-violet-200"
                    />

                  </div>

                  <div>

                    <p className="text-xs text-white/30">
                      Phone
                    </p>

                    <p className="mt-1 text-sm text-white/75">
                      +91 XXXXX XXXXX
                    </p>

                  </div>

                </div>


                {/* LOCATION */}

                <div className="flex gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">

                    <MapPin
                      size={17}
                      className="text-violet-200"
                    />

                  </div>

                  <div>

                    <p className="text-xs text-white/30">
                      Location
                    </p>

                    <p className="mt-1 text-sm text-white/75">
                      India
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* WHAT WE DO */}

            <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-gradient-to-br from-violet-500/[0.10] to-blue-500/[0.05] p-7">

              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />

              <div className="relative">

                <span className="text-[10px] tracking-[0.2em] text-white/25">
                  WHAT WE DO
                </span>

                <p className="mt-5 text-lg font-medium tracking-tight text-white/85">
                  Web • AI • Mobile • ERP • CRM
                </p>

                <p className="mt-3 text-sm leading-6 text-white/35">
                  From first idea to a scalable digital product,
                  we're here to help.
                </p>

              </div>

            </div>

          </motion.div>


          {/* =========================================
              FORM
          ========================================= */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="rounded-[32px] border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8 lg:p-10"
          >

            <div className="mb-8">

              <span className="text-[10px] tracking-[0.2em] text-white/25">
                START A CONVERSATION
              </span>

              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
                Tell us about your project.
              </h2>

            </div>


            {/* =========================================
                STATUS MESSAGE
            ========================================= */}

            {status.message && (
              <div
                className={`mb-6 flex items-start gap-3 rounded-2xl border p-4 ${
                  status.type === "success"
                    ? "border-emerald-400/20 bg-emerald-400/[0.06] text-emerald-200"
                    : "border-red-400/20 bg-red-400/[0.06] text-red-200"
                }`}
              >

                {status.type === "success" ? (
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0"
                  />
                ) : (
                  <AlertCircle
                    size={18}
                    className="mt-0.5 shrink-0"
                  />
                )}

                <p className="text-sm leading-6">
                  {status.message}
                </p>

              </div>
            )}


            {/* =========================================
                FORM
            ========================================= */}

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* NAME + EMAIL */}

              <div className="grid gap-5 sm:grid-cols-2">

                <div>

                  <label className="mb-2 block text-xs text-white/40">
                    Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-white/20 focus:border-violet-400/40 focus:bg-white/[0.04]"
                  />

                </div>


                <div>

                  <label className="mb-2 block text-xs text-white/40">
                    Email *
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-white/20 focus:border-violet-400/40 focus:bg-white/[0.04]"
                  />

                </div>

              </div>


              {/* PHONE + COMPANY */}

              <div className="grid gap-5 sm:grid-cols-2">

                <div>

                  <label className="mb-2 block text-xs text-white/40">
                    Phone
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-white/20 focus:border-violet-400/40 focus:bg-white/[0.04]"
                  />

                </div>


                <div>

                  <label className="mb-2 block text-xs text-white/40">
                    Company
                  </label>

                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name"
                    className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-white/20 focus:border-violet-400/40 focus:bg-white/[0.04]"
                  />

                </div>

              </div>


              {/* SERVICE */}

              <div>

                <label className="mb-2 block text-xs text-white/40">
                  What do you need?
                </label>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-[#09090b] px-4 py-3.5 text-sm text-white/70 outline-none transition-all focus:border-violet-400/40"
                >

                  <option value="">
                    Select a service
                  </option>

                  <option value="Web Development">
                    Web Development
                  </option>

                  <option value="AI Solutions">
                    AI Solutions
                  </option>

                  <option value="Mobile Apps">
                    Mobile Apps
                  </option>

                  <option value="ERP & CRM">
                    ERP & CRM
                  </option>

                  <option value="UI / UX & Branding">
                    UI / UX & Branding
                  </option>

                  <option value="Digital Growth">
                    Digital Growth
                  </option>

                  <option value="Other / Custom Requirement">
                    Other / Custom Requirement
                  </option>

                </select>

              </div>


              {/* CUSTOM SERVICE */}

              {formData.service === "Other / Custom Requirement" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.25 }}
                >

                  <label className="mb-2 block text-xs text-white/40">
                    Tell us what you need *
                  </label>

                  <textarea
                    name="customService"
                    value={formData.customService}
                    onChange={handleChange}
                    required
                    rows={3}
                    placeholder="Describe your requirement..."
                    className="w-full resize-none rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm leading-6 text-white outline-none transition-all placeholder:text-white/20 focus:border-violet-400/40 focus:bg-white/[0.04]"
                  />

                </motion.div>
              )}


              {/* MESSAGE */}

              <div>

                <label className="mb-2 block text-xs text-white/40">
                  Message *
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell us a little about your project..."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm leading-6 text-white outline-none transition-all placeholder:text-white/20 focus:border-violet-400/40 focus:bg-white/[0.04]"
                />

              </div>


              {/* SUBMIT BUTTON */}

              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.01] hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60"
              >

                {loading ? (
                  <>
                    <Loader2
                      size={17}
                      className="animate-spin"
                    />

                    Sending...
                  </>
                ) : (
                  <>
                    Send Message

                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:rotate-45">

                      <ArrowUpRight size={13} />

                    </span>
                  </>
                )}

              </button>

            </form>

          </motion.div>

        </div>

      </section>

    </main>
  );
}

export default Contact;


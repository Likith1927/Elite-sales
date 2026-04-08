import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedin: "",
    contactInfo: "",
    companyUrl: "",
    goals: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [evaluation, setEvaluation] = useState<{ status: string; feedback: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://cliki.app.n8n.cloud/webhook-test/sales-qualification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      setEvaluation({
        status: data.status || "success",
        feedback: data.message || "Application submitted successfully 🚀",
      });

      setStatus("success");
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="apply" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Partner With Us</h2>
            <p className="text-slate-600">
              Tell us about your company and your goals. Our AI-powered system will 
              review your application instantly.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-12 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Application Received</h3>

                <div className="bg-white border border-slate-200 rounded-xl p-6 mb-8 text-left">
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Backend Response
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    {evaluation?.feedback}
                  </p>
                </div>

                <button
                  onClick={() => setStatus("idle")}
                  className="text-brand font-medium hover:underline"
                >
                  Submit another application
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200"
                  />
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200"
                  />
                </div>

                <input
                  required
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  placeholder="LinkedIn Profile"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200"
                />

                <input
                  required
                  name="contactInfo"
                  value={formData.contactInfo}
                  onChange={handleChange}
                  placeholder="Contact Info"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200"
                />

                <input
                  required
                  name="companyUrl"
                  value={formData.companyUrl}
                  onChange={handleChange}
                  placeholder="Company URL"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200"
                />

                <textarea
                  required
                  name="goals"
                  value={formData.goals}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Your goals..."
                  className="w-full px-4 py-3 rounded-lg border border-slate-200"
                />

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-4 bg-black text-white rounded-lg flex items-center justify-center"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Submit Application
                    </>
                  )}
                </button>

                {status === "error" && (
                  <div className="text-red-600 text-sm flex items-center mt-4">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    Something went wrong. Try again.
                  </div>
                )}
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

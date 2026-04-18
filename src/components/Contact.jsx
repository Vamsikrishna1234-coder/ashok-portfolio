import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Send,
  Copy,
  CheckCircle2,
} from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState("");

  const copyText = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);

    setTimeout(() => {
      setCopied("");
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="relative bg-black text-white py-24 px-6 lg:px-12 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ x: [0, 80, -60, 0], y: [0, -50, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-10 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"
        />

        <motion.div
          animate={{ x: [0, -90, 70, 0], y: [0, 40, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-2xl font-semibold uppercase tracking-[4px]">
            Contact Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Let's Work Together
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Need branding, posters, logos, social media creatives or any design
            support? Get in touch with me today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Side Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Phone */}
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition">
              <div className="flex justify-between items-center">
                <a
                  href="tel:7673921822"
                  className="flex items-center gap-4 hover:text-blue-400 transition"
                >
                  <Phone className="text-cyan-400" />
                  <div>
                    <p className="text-sm text-gray-400">Call Me</p>
                    <p className="font-medium">7673921822</p>
                  </div>
                </a>

                <button
                  onClick={() => copyText("7673921822", "phone")}
                  className="p-2 rounded-lg bg-white/10 hover:bg-blue-500/20"
                >
                  {copied === "phone" ? (
                    <CheckCircle2 className="text-green-400" size={18} />
                  ) : (
                    <Copy size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* Email */}
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition">
              <div className="flex justify-between items-center">
                <a
                  href="mailto:ashokk32005@gmail.com"
                  className="flex items-center gap-4 hover:text-blue-400 transition"
                >
                  <Mail className="text-cyan-400" />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-medium">ashokk32005@gmail.com</p>
                  </div>
                </a>

                <button
                  onClick={() =>
                    copyText("ashokk32005@gmail.com", "email")
                  }
                  className="p-2 rounded-lg bg-white/10 hover:bg-blue-500/20"
                >
                  {copied === "email" ? (
                    <CheckCircle2 className="text-green-400" size={18} />
                  ) : (
                    <Copy size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* Instagram */}
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-pink-500/40 transition">
              <div className="flex justify-between items-center">
                <a
                  href="https://instagram.com/ashok_2m"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:text-pink-400 transition"
                >
                  <Instagram className="text-cyan-400" />
                  <div>
                    <p className="text-sm text-gray-400">Instagram</p>
                    <p className="font-medium">@ashok_2m</p>
                  </div>
                </a>

                <button
                  onClick={() => copyText("@ashok_2m", "insta")}
                  className="p-2 rounded-lg bg-white/10 hover:bg-pink-500/20"
                >
                  {copied === "insta" ? (
                    <CheckCircle2 className="text-green-400" size={18} />
                  ) : (
                    <Copy size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* Location */}
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
              <a
                href="https://maps.google.com/?q=Hyderabad Telangana"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:text-blue-400 transition"
              >
                <MapPin className="text-cyan-400" />
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="font-medium">Hyderabad, Telangana</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Side Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10"
          >
            <h3 className="text-2xl font-semibold mb-6">
              Send Message
            </h3>

            <form className="space-y-2">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-blue-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-blue-500"
              />

              <input
                type="number"
                placeholder="Contact Number"
                className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-blue-500"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-blue-500 resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full px-3 py-1 rounded-xl bg-blue-600 hover:bg-blue-700 transition flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-12 border-t border-white/30 text-center text-white-400 text-sm">
          © {new Date().getFullYear()} Ashok Mallenipalli. All Rights Reserved. 
        </div>
      </div>
    </section>
  );
}
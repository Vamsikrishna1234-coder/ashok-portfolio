import React from "react";
import { motion } from "framer-motion";
import {
  User,
  Briefcase,
  GraduationCap,
  PenTool,
  Phone,
  Mail,
  MapPin,
  Instagram,
  CheckCircle2,
  Palette,
  Sparkles,
  Layers3,
} from "lucide-react";

export default function About() {
  const skills = [
    "Logo Design",
    "Social Media Posters",
    "Banner Design",
    "Flyer Design",
    "Brochure Design",
    "Business Cards",
    "Photo Editing",
    "Brand Identity",
    "Website Graphics",
    "Invitation Cards",
  ];

  return (
    <section
      id="about"
      className="relative bg-black text-white py-24 px-6 lg:px-12 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 100, -80, 0], y: [0, -60, 40, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -100, 80, 0], y: [0, 50, -40, 0], rotate: [0, -180, -360] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"
        />

        {/* Floating Design Icons */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-20 right-24 text-blue-400/30"
        >
          <Palette size={40} />
        </motion.div>

        <motion.div
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-24 left-16 text-cyan-400/30"
        >
          <Layers3 size={45} />
        </motion.div>

        <motion.div
          animate={{ rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-10 text-white/10"
        >
          <Sparkles size={35} />
        </motion.div>
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
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Creative Designer Portfolio
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Creative designer crafting branding, social media creatives, and
            marketing visuals that help brands grow and stand out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-blue-500/40 transition">
              <div className="flex items-center gap-3 mb-5">
                <User className="text-blue-400" />
                <h3 className="text-2xl font-semibold">Profile</h3>
              </div>

              <p className="text-gray-400 leading-relaxed">
                I'm <span className="text-blue-400">Ashok Kumar</span>, a
                passionate graphic designer focused on modern branding, posters,
                social media creatives, logo identity, and promotional graphics.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-6 text-sm">
                <a
                  href="tel:7673921822"
                  className="flex gap-3 items-center hover:text-blue-400 transition"
                >
                  <Phone className="text-cyan-400" size={18} />
                  <span>7673921822</span>
                </a>

                <a
                  href="mailto:ashokk32005@gmail.com"
                  className="flex gap-3 items-center hover:text-blue-400 transition"
                >
                  <Mail className="text-cyan-400" size={18} />
                  <span>ashokk32005@gmail.com</span>
                </a>

                <a
                  href="https://instagram.com/ashok_2m"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 items-center hover:text-pink-400 transition"
                >
                  <Instagram className="text-cyan-400" size={18} />
                  <span>@ashok_2m</span>
                </a>

                <div className="flex gap-3 items-center">
                  <MapPin className="text-cyan-400" size={18} />
                  <span>Hyderabad, Telangana</span>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/40 transition">
              <div className="flex items-center gap-3 mb-5">
                <Briefcase className="text-blue-400" />
                <h3 className="text-2xl font-semibold">Experience</h3>
              </div>

              <div className="space-y-5">
                <motion.div whileHover={{ x: 8 }}>
                  <p className="text-blue-400 font-medium">
                    2025 - 2026 | Tact Advertising Agency
                  </p>
                  <p className="text-gray-400">Graphic Designer</p>
                </motion.div>

                <motion.div whileHover={{ x: 8 }}>
                  <p className="text-blue-400 font-medium">
                    2025 | CG Trix
                  </p>
                  <p className="text-gray-400">Diploma in Multimedia</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Education */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition">
              <div className="flex items-center gap-3 mb-5">
                <GraduationCap className="text-blue-400" />
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>

              <p className="text-blue-400 font-medium">
                2023 - 2024 | Lakshya Junior College
              </p>
              <p className="text-gray-400 mt-2">
                Intermediate 2nd Year Completed
              </p>
            </div>

            {/* Skills */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/40 transition">
              <div className="flex items-center gap-3 mb-6">
                <PenTool className="text-blue-400" />
                <h3 className="text-2xl font-semibold">Professional Skills</h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -5, scale: 1.03 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-white/10"
                  >
                    <CheckCircle2
                      className="text-cyan-400 shrink-0"
                      size={18}
                    />
                    <span className="text-gray-300 text-sm">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Palette,
  PenSquare,
  Building2,
  Image,
} from "lucide-react";
import portimg from "../assets/images/ashok portimg1.jpeg";

export default function HeroSection() {
  const services = [
    {
      icon: <Palette className="mx-auto text-blue-400 mb-2" size={24} />,
      title: "Branding",
    },
    {
      icon: <PenSquare className="mx-auto text-cyan-400 mb-2" size={24} />,
      title: "Logo Design",
    },
    {
      icon: <Building2 className="mx-auto text-blue-400 mb-2" size={24} />,
      title: "Site Plans Design",
    },
    {
      icon: <Image className="mx-auto text-cyan-400 mb-2" size={24} />,
      title: "Social Media Posters",
    },
  ];

  const name = "Ashok Mallenapalli".split("");

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ x: [0, 80, -50, 0], y: [0, -60, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-10 left-0 sm:left-10 w-56 sm:w-72 h-56 sm:h-72 bg-blue-600/20 rounded-full blur-3xl"
        />

        <motion.div
          animate={{ x: [0, -100, 60, 0], y: [0, 50, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-10 right-0 sm:right-10 w-56 sm:w-80 h-56 sm:h-80 bg-cyan-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-28 sm:pt-32 lg:pt-24 pb-16 sm:pb-20 min-h-screen flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Left Side Content */}
        <div className="w-full max-w-2xl text-center lg:text-left">
          {/* Badge */}
          <span className="inline-flex flex-wrap justify-center lg:justify-start items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs sm:text-sm">
            <BadgeCheck size={16} />
            1 Year of Experience As Graphic Designer
          </span>

          {/* Heading */}
          <h1 className="mt-5 text-3xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            Hi, I'm{" "}
            <span className="text-blue-500 inline-flex flex-wrap justify-center lg:justify-start">
              {name.map((letter, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 1, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.1,
                    repeatDelay: 1,
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-lg sm:text-2xl md:text-4xl font-semibold text-gray-200 leading-snug"
          >
            Designing Brands That Stand Out
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-5 text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            Creative graphic designer specializing in branding, social media
            creatives, marketing campaigns, and promotional design solutions for
            all corporate organizations across diverse industries.
          </motion.p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#works"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              View My Works <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-white/15 hover:border-blue-500 transition text-sm sm:text-base"
            >
              Contact Me
            </a>
          </div>

          {/* Services */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {services.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6, scale: 1.03 }}
                className="p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10 text-center flex flex-col items-center justify-center min-h-[110px]"
              >
                {item.icon}
                <p className="text-xs sm:text-sm text-gray-300 leading-snug">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Image Side */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center w-full max-w-md"
        >
          {/* Main Image */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-[280px] sm:w-[340px] md:w-[420px] h-[380px] sm:h-[460px] md:h-[550px] rounded-3xl overflow-hidden border border-blue-500/20 bg-white/5 shadow-2xl"
          >
            <img
              src={portimg}
              alt="Ashok Kumar"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Projects Badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute left-0 sm:-left-6 md:-left-8 top-6 sm:top-10 bg-black/80 border border-blue-500/20 px-3 sm:px-4 py-2 sm:py-3 rounded-xl"
          >
            <p className="text-[10px] sm:text-sm text-gray-400">
              Creative Projects
            </p>
            <h3 className="text-sm sm:text-xl font-bold text-blue-400">
              200+
            </h3>
          </motion.div>

          {/* Clients Badge */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
            className="absolute right-0 sm:-right-6 md:-right-8 bottom-6 sm:bottom-10 bg-black/80 border border-cyan-500/20 px-3 sm:px-4 py-2 sm:py-3 rounded-xl"
          >
            <p className="text-[10px] sm:text-sm text-gray-400">
              Happy Clients
            </p>
            <h3 className="text-sm sm:text-xl font-bold text-cyan-400">
              20+
            </h3>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
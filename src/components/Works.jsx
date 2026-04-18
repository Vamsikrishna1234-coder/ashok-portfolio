import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, ZoomIn, ZoomOut } from "lucide-react";

/* Branding */
import brnd1 from "../assets/images/branding2.jpg";
import brnd2 from "../assets/images/branding2.jpg";
import brnd3 from "../assets/images/branding2.jpg";
import brnd4 from "../assets/images/branding2.jpg";
import brnd5 from "../assets/images/branding2.jpg";

/* Logo */
import logo1 from "../assets/images/branding2.jpg";
import logo2 from "../assets/images/branding2.jpg";
import logo3 from "../assets/images/branding2.jpg";
import logo4 from "../assets/images/branding2.jpg";
import logo5 from "../assets/images/branding2.jpg";

/* Social Media */
import social1 from "../assets/images/branding2.jpg";
import social2 from "../assets/images/branding2.jpg";
import social3 from "../assets/images/branding2.jpg";
import social4 from "../assets/images/branding2.jpg";
import social5 from "../assets/images/branding2.jpg";

/* Site Plans */
import site1 from "../assets/images/branding2.jpg";
import site2 from "../assets/images/branding2.jpg";
import site3 from "../assets/images/branding2.jpg";
import site4 from "../assets/images/branding2.jpg";
import site5 from "../assets/images/branding2.jpg";

/* Print Design */
import print1 from "../assets/images/branding2.jpg";
import print2 from "../assets/images/branding2.jpg";
import print3 from "../assets/images/branding2.jpg";
import print4 from "../assets/images/branding2.jpg";
import print5 from "../assets/images/branding2.jpg";

/* Brochure */
import brochure1 from "../assets/images/branding2.jpg";
import brochure2 from "../assets/images/branding2.jpg";
import brochure3 from "../assets/images/branding2.jpg";
import brochure4 from "../assets/images/branding2.jpg";
import brochure5 from "../assets/images/branding2.jpg";

export default function Works() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoom, setZoom] = useState(1);

  const categories = [
    {
      title: "Branding",
      cover: brnd1,
      images: [brnd1, brnd2, brnd3, brnd4, brnd5],
    },
    {
      title: "Logo Design",
      cover: logo1,
      images: [logo1, logo2, logo3, logo4, logo5],
    },
    {
      title: "Social Media",
      cover: social1,
      images: [social1, social2, social3, social4, social5],
    },
    {
      title: "Site Plans",
      cover: site1,
      images: [site1, site2, site3, site4, site5],
    },
    {
      title: "Print Design",
      cover: print1,
      images: [print1, print2, print3, print4, print5],
    },
    {
      title: "Brochures",
      cover: brochure1,
      images: [brochure1, brochure2, brochure3, brochure4, brochure5],
    },
  ];

  return (
    <section
      id="works"
      className="relative bg-black text-white py-24 px-6 lg:px-12 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-2xl font-bold uppercase tracking-[4px]">
            My Works
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Creative Portfolio Showcase
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Explore branding, logos, posters, brochures and visual projects.
          </p>
        </div>

        {/* Main Categories */}
        {!activeCategory && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setActiveCategory(item)}
                className="relative rounded-3xl overflow-hidden cursor-pointer group border border-white/10"
              >
                <img
                  src={item.cover}
                  alt={item.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                <div className="absolute bottom-0 p-6">
                  <h3 className="text-2xl font-semibold">{item.title}</h3>

                  <p className="text-sm text-gray-300 mt-1">
                    Click to view projects
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-blue-400">
                    View Works <ArrowRight size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Gallery */}
        {activeCategory && (
          <>
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-3xl font-bold text-blue-400">
                {activeCategory.title}
              </h3>

              <button
                onClick={() => setActiveCategory(null)}
                className="px-5 py-3 rounded-xl bg-white/10 hover:bg-red-500/20 transition flex items-center gap-2"
              >
                <X size={18} />
                Close
              </button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeCategory.images.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => {
                    setSelectedImage(img);
                    setZoom(1);
                  }}
                  className="rounded-2xl overflow-hidden border border-white/10 cursor-pointer"
                >
                  <img
                    src={img}
                    alt="work"
                    className="w-full h-72 object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          >
            {/* Controls */}
            <div className="absolute top-6 right-6 flex gap-3">
              <button
                onClick={() => setZoom((prev) => prev + 0.2)}
                className="p-3 rounded-full bg-white/10 hover:bg-blue-500/30"
              >
                <ZoomIn size={20} />
              </button>

              <button
                onClick={() =>
                  setZoom((prev) => (prev > 1 ? prev - 0.2 : 1))
                }
                className="p-3 rounded-full bg-white/10 hover:bg-blue-500/30"
              >
                <ZoomOut size={20} />
              </button>

              <button
                onClick={() => setSelectedImage(null)}
                className="p-3 rounded-full bg-red-500/20 hover:bg-red-500/40"
              >
                <X size={20} />
              </button>
            </div>

            {/* Full Image */}
            <motion.img
              src={selectedImage}
              alt="Full Work"
              animate={{ scale: zoom }}
              transition={{ duration: 0.3 }}
              className="max-w-full max-h-[90vh] object-contain rounded-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
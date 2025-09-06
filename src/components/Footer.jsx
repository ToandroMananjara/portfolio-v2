import React from "react";
import { motion } from "framer-motion";
import { Heart, Code, Coffee } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-gray_primary/50 backdrop-blur-sm border-t border-gray-600/30 py-8 px-4 sm:px-10 md:px-14"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            className="text-center md:text-left"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-2xl font-bold text-blue_primary mb-3"
              whileHover={{ scale: 1.05 }}
            >
              TM
            </motion.h3>
            <p className="text-gray-300 leading-relaxed">
              Full Stack Developer passionné par la création d&apos;expériences
              web innovantes et performantes.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="text-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white_primary mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Accueil", link: "/#home" },
                { name: "À propos", link: "/#about" },
                { name: "Projets", link: "/#projects" },
                { name: "Formation", link: "/#education" },
                { name: "Contact", link: "/#contact" },
              ].map((item, index) => (
                <motion.li key={index}>
                  <a
                    href={item.link}
                    className="text-gray-300 hover:text-blue_primary transition-colors duration-300 relative group"
                  >
                    {item.name}
                    <motion.span
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue_primary group-hover:w-full transition-all duration-300"
                      initial={{ width: 0 }}
                    />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Technologies */}
          <motion.div
            className="text-center md:text-right"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white_primary mb-4">
              Technologies
            </h4>
            <div className="flex flex-wrap justify-center md:justify-end gap-2">
              {[
                "React",
                "Next.js",
                "Node.js",
                "TypeScript",
                "MongoDB",
                "PostgreSQL",
              ].map((tech, index) => (
                <motion.span
                  key={index}
                  className="text-xs bg-blue_primary/20 text-blue_primary px-2 py-1 rounded-full"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.8 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{ scale: 1.1 }}
                  viewport={{ once: true }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
        >
          {/* Copyright */}
          <motion.div
            className="flex items-center space-x-2 text-gray-300"
            whileHover={{ scale: 1.05 }}
          >
            <span>© {currentYear} Toandro Mananjara. Fait avec</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>
            <span>et</span>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Code className="w-4 h-4 text-blue_primary" />
            </motion.div>
          </motion.div>

          {/* Fun Element */}
          <motion.div
            className="flex items-center space-x-2 text-gray-300"
            whileHover={{ scale: 1.05 }}
          >
            <span>Alimenté par</span>
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Coffee className="w-4 h-4 text-yellow_primary" />
            </motion.div>
            <span>et beaucoup de passion</span>
          </motion.div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#home"
            className="inline-flex items-center justify-center w-12 h-12 bg-blue_primary/20 hover:bg-blue_primary/30 rounded-full text-blue_primary transition-colors duration-300"
            whileHover={{
              scale: 1.1,
              y: -5,
              boxShadow: "0 10px 20px rgba(110, 193, 228, 0.3)",
            }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;

import { motion } from "framer-motion";
import { Code, Github, Linkedin, Mail, ArrowUp, Zap } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Experience", link: "#experience" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Education", link: "#education" },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      link: "https://github.com/ToandroMananjara",
      color: "hover:text-gray-300",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/toandromananjara-mahasalotra-44b289280",
      color: "hover:text-blue-400",
    },
    {
      icon: Mail,
      name: "Email",
      link: "mailto:mahasalotra@gmail.com",
      color: "hover:text-yellow_primary",
    },
  ];

  return (
    <motion.footer
      className="relative bg-gradient-to-br from-gray_primary/90 via-gray_primary/85 to-gray_primary/80 backdrop-blur-lg border-t border-blue_primary/20 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(217,175,35,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(110,193,228,0.1),transparent_50%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-10 md:px-14 py-16">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Brand & CTA Section */}
          <motion.div
            className="md:col-span-6 space-y-6"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue_primary to-yellow_primary rounded-xl flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue_primary to-yellow_primary bg-clip-text text-transparent">
                  Toandro Mananjara
                </h3>
              </motion.div>

              <motion.p
                className="text-gray-300 leading-relaxed text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Full-Stack Developer crafting innovative digital experiences
                with passion and precision. Let&apos;s build something amazing
                together.
              </motion.p>
            </div>

            {/* CTA Button */}
            <motion.a
              href="mailto:mahasalotra@gmail.com"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue_primary to-yellow_primary text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-600 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true }}
            >
              <Mail className="w-5 h-5" />
              <span>Start a Conversation</span>
              <Zap className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Quick Links and Connect Container */}
          <div className="md:col-span-6 flex flex-row gap-12">
            {/* Quick Links */}
            <motion.div
              className="flex-1"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white_primary mb-6 relative">
                Quick Links
                <motion.div
                  className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue_primary to-yellow_primary rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                />
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((item, index) => (
                  <motion.li key={index} className="list-none">
                    <a
                      href={item.link}
                      className="text-gray-300 hover:text-blue_primary transition-colors duration-300 relative group"
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Connect */}
            <motion.div
              className="flex-1"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white_primary mb-6 relative">
                Connect
                <motion.div
                  className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue_primary to-yellow_primary rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                />
              </h4>
              <div className="flex flex-col space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 text-gray-300 ${social.color} transition-colors duration-300 group`}
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    viewport={{ once: true }}
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="text-sm">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Elegant Divider */}
        <motion.div
          className="relative mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="h-px bg-gradient-to-r from-transparent via-blue_primary/50 to-transparent" />
          <div className="absolute inset-0 flex justify-center">
            <div className="w-2 h-2 bg-gradient-to-r from-blue_primary to-yellow_primary rounded-full -mt-1" />
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
        >
          {/* Copyright */}
          <motion.div className="flex items-center text-gray-300 text-sm space-x-4">
            <span>© {currentYear} Toandro Mananjara. All rights reserved.</span>
            {/* Visitor Counter */}
            <div className="flex items-center space-x-2">
              <span className="text-xs">Visitors:</span>
              <img
                src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https://toandro-portfolio-v2.netlify.app&count_bg=%236EC1E4&title_bg=%23D9AF23&icon=&icon_color=%23FFFFFF&title=visits&edge_flat=false"
                alt="Visitor Counter"
                className="h-5"
              />
            </div>
          </motion.div>

          {/* Back to Top */}
          <motion.a
            href="#home"
            className="group relative inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue_primary/20 to-yellow_primary/20 hover:from-blue_primary/30 hover:to-yellow_primary/30 rounded-full text-blue_primary transition-all duration-300 backdrop-blur-sm border border-blue_primary/20 hover:border-blue_primary/40"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2, type: "spring" }}
            whileHover={{
              scale: 1.1,
              y: -3,
              boxShadow: "0 10px 25px rgba(110, 193, 228, 0.3)",
            }}
            whileTap={{ scale: 0.9 }}
            viewport={{ once: true }}
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue_primary to-yellow_primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;

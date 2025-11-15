import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Facebook } from "lucide-react";

function Contact() {
  const handleEmailClick = () => {
    const mailtoLink = `mailto:mahasalotra@gmail.com?subject=Contact depuis votre portfolio&body=Bonjour Toandro,%0D%0A%0D%0AJe vous contacte via votre portfolio...`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "mahasalotra@gmail.com",
      link: "mailto:mahasalotra@gmail.com",
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "+261 34 XX XX XXX",
      link: "tel:+261341234567",
    },
    {
      icon: MapPin,
      title: "Localisation",
      value: "Antananarivo, Madagascar",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      link: "https://github.com/ToandroMananjara",
      color: "hover:text-gray-400",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/toandromananjara-mahasalotra-44b289280",
      color: "hover:text-blue-400",
    },
    {
      icon: Facebook,
      name: "Facebook",
      link: "https://www.facebook.com/anwar.mananjara",
      color: "hover:text-blue-600",
    },
  ];

  return (
    <motion.div
      id="contact"
      className="pt-[70px] px-4 sm:px-10 md:px-14 pb-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h1
        className="mb-12 text-yellow_primary text-center text-3xl md:text-5xl"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Contactez-moi
      </motion.h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          className="space-y-8"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div>
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-blue_primary mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Restons en contact !
            </motion.h2>
            <motion.p
              className="text-gray-300 text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Je suis toujours ouvert aux nouvelles opportunités et
              collaborations. N&apos;hésitez pas à me contacter pour discuter de
              vos projets ou simplement dire bonjour !
            </motion.p>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                className="flex items-center p-4 bg-[rgba(136,136,136,.05)] rounded-lg hover:bg-[rgba(136,136,136,.1)] transition-all duration-300 group"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ x: 10, scale: 1.02 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-12 h-12 bg-blue_primary/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue_primary/30 transition-colors duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <info.icon className="w-6 h-6 text-blue_primary" />
                </motion.div>
                <div>
                  <h3 className="text-white_primary font-semibold">
                    {info.title}
                  </h3>
                  <p className="text-gray-300">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            className="pt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white_primary mb-4">
              Suivez-moi
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-[rgba(136,136,136,.05)] rounded-full flex items-center justify-center text-white_primary transition-colors duration-300 ${social.color}`}
                  initial={{ scale: 0, rotate: 180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 1.6 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{
                    scale: 1.2,
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  viewport={{ once: true }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Email Contact Card */}
        <motion.div
          className="bg-[rgba(136,136,136,.05)] rounded-xl p-8 flex flex-col justify-center items-center text-center"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-20 h-20 bg-blue_primary/20 rounded-full flex items-center justify-center mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Mail className="w-10 h-10 text-blue_primary" />
          </motion.div>

          <motion.h3
            className="text-2xl font-bold text-white_primary mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Envoyez-moi un email
          </motion.h3>

          <motion.p
            className="text-gray-300 text-lg mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
          >
            Cliquez sur le bouton ci-dessous pour ouvrir votre client de
            messagerie et me contacter directement.
          </motion.p>

          <motion.button
            onClick={handleEmailClick}
            className="bg-gradient-to-r from-blue_primary to-yellow_primary text-white font-semibold py-4 px-8 rounded-lg hover:from-blue-600 hover:to-yellow-600 transition-all duration-300 flex items-center space-x-2 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            viewport={{ once: true }}
          >
            <Mail className="w-5 h-5" />
            <span>Ouvrir Email</span>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Contact;

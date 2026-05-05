import { motion } from "framer-motion";
import { fadeUp, inViewProps, stagger } from "../../lib/motion";

function Section({ id, index, eyebrow, title, subtitle, children, className = "" }) {
  return (
    <section
      id={id}
      className={`relative py-20 md:py-28 px-4 sm:px-10 md:px-14 ${className}`}
    >
      <motion.div
        className="max-w-content mx-auto"
        variants={stagger(0.05, 0.1)}
        {...inViewProps}
      >
        <motion.div variants={fadeUp} className="mb-12 md:mb-16">
          <p className="font-mono text-sm text-blue_primary tracking-tight">
            <span className="text-yellow_primary">{`// ${index ?? "00"}`}</span>{" "}
            <span>{eyebrow}</span>
          </p>
          <h2 className="mt-2 text-3xl md:text-5xl font-bold text-white_primary">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-base md:text-lg text-gray-400 leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>

        {children}
      </motion.div>
    </section>
  );
}

export default Section;

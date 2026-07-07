import { motion } from 'framer-motion';

export default function SectionHeading({ subtitle, title, description, light = false, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`section-heading mb-14 ${center ? 'text-center' : ''}`}
    >
      {subtitle && (
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.15em] uppercase mb-4 bg-primary/10 text-primary border border-primary/20">
          {subtitle}
        </span>
      )}
      <h2 className={`section-heading-title font-bold font-[var(--font-heading)] mb-5 ${light ? 'text-white' : 'text-charcoal-dark'}`}>
        {title}
      </h2>
      {description && (
        <p className={`section-heading-description max-w-2xl text-base leading-relaxed ${center ? 'mx-auto' : ''} ${light ? 'text-steel-light' : 'text-steel'}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}

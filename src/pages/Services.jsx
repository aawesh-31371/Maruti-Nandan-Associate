import { motion } from 'framer-motion';
import { FaHome, FaBuilding, FaIndustry, FaTools, FaPaintRoller, FaDraftingCompass, FaRoad, FaProjectDiagram } from 'react-icons/fa';
import PageBanner from '../components/PageBanner';
import SectionHeading from '../components/SectionHeading';
import { services } from '../data/defaultData';

const iconMap = {
  FaHome,
  FaBuilding,
  FaIndustry,
  FaTools,
  FaPaintRoller,
  FaDraftingCompass,
  FaRoad,
  FaProjectDiagram,
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function Services() {
  return (
    <>
      <PageBanner
        title="Our Services"
        subtitle="Telecom, water, civil, and energy infrastructure solutions"
        bgImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80"
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="What We Offer"
            title="Turnkey Infrastructure Services"
            description="From planning and supervision to site execution and maintenance, we deliver practical support across core infrastructure sectors."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || FaBuilding;
              return (
                <motion.div
                  key={service.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                  className="premium-card p-8 text-center group cursor-pointer"
                >
                  <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-charcoal-dark transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-charcoal-dark mb-3 font-[var(--font-heading)] group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-steel text-sm leading-relaxed">{service.description}</p>
                  
                  {/* Bottom accent line */}
                  <div className="mt-6 w-0 h-0.5 bg-primary mx-auto group-hover:w-16 transition-all duration-500" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-charcoal-dark">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-[var(--font-heading)]">
              Need a Turnkey Solution?
            </h2>
            <p className="text-steel-light text-lg mb-8">
              Every site requirement is different. Let us plan a practical scope that fits your work, timeline, and budget.
            </p>
            <a href="/contact" className="btn-primary text-base">
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

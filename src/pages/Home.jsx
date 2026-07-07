import { useState } from "react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaArrowRight,
  FaHome,
  FaBuilding,
  FaIndustry,
  FaTools,
  FaCheckCircle,
  FaStar,
  FaQuoteLeft,
  FaChevronRight,
  FaCheck,  FaTrophy, FaHardHat, FaCubes, FaLightbulb, FaShieldAlt, FaHandshake
} from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import SectionHeading from '../components/SectionHeading';
import AnimatedCounter from '../components/AnimatedCounter';
import { useData } from '../context/DataContext';
import { companyInfo, services, testimonials } from '../data/defaultData';
//import { FaChevronRight, FaCheck, FaBuilding } from "react-icons/fa";


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const serviceIcons = {
  'Telecommunications Infrastructure': FaBuilding,
  'Water Infrastructure': FaHome,
  'Civil Construction': FaTools,
  'Energy & Electrical Works': FaIndustry,
};

export default function Home() {
  const { projects } = useData();

  const [activeService, setActiveService] = useState(0);

  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-dark/95 via-charcoal-dark/80 to-charcoal-dark/40" />
        
        {/* Animated diagonal lines */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute -top-1/2 -left-1/4 w-[200%] h-[200%]" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 80px, rgba(244,180,0,0.15) 80px, rgba(244,180,0,0.15) 81px)',
          }} />
        </div>

        <div className="hero-container relative z-10">
          <div className="hero-copy">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.15em] uppercase mb-6 bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm">
                Since 2021 - Turnkey Infrastructure
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-title font-bold text-white font-[var(--font-heading)]"
            >
              We Deliver{' '}
              <span className="gradient-text">Infrastructure</span>{' '}
              With Confidence
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-description text-steel-light"
            >
              Telecommunications, water, civil, and energy services delivered through dependable
              planning, site execution, quality assurance, and safety-focused teams.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/projects" className="btn-primary text-base">
                View Projects <FaArrowRight size={14} />
              </Link>
              <Link to="/contact" className="btn-outline text-base">
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 bg-primary rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="bg-charcoal py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(244,180,0,0.3) 0%, transparent 50%),
                              radial-gradient(circle at 80% 50%, rgba(244,180,0,0.3) 0%, transparent 50%)`,
          }} />
        </div>
        <div className="site-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { end: companyInfo.stats.years, suffix: '+', label: 'Years Experience' },
              { end: companyInfo.stats.projects, suffix: '+', label: 'Contract Labour Capacity' },
              { end: companyInfo.stats.clients, suffix: '+', label: 'Companies Served' },
              { end: companyInfo.stats.engineers, suffix: '+', label: 'Field Team Capacity' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="text-center"
              >
                <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                <p className="text-steel-light text-sm mt-2 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="section-padding bg-white">
        <div className="site-container">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                  alt="Construction site"
                  className="w-full h-[460px] xl:h-[520px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/50 to-transparent" />
              </div>
              {/* Experience badge */}
              <div className="experience-badge absolute -bottom-6 right-4 sm:-right-5 bg-primary text-charcoal-dark p-6 rounded-2xl shadow-xl">
                <span className="text-4xl font-bold font-[var(--font-heading)]">{companyInfo.stats.years}+</span>
                <p className="text-sm font-semibold">Years of<br />Excellence</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.15em] uppercase mb-4 bg-primary/10 text-primary border border-primary/20">
                About Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal-dark mb-6 font-[var(--font-heading)]">
                Delivering Turnkey Solutions with <span className="gradient-text">Dependability</span>
              </h2>
              <p className="text-steel leading-relaxed mb-6">
                Maruti Nandan Associate is a Ghazipur-based enterprise providing turnkey infrastructure
                solutions across telecommunications, water, civil, and energy services.
              </p>
              <p className="text-steel leading-relaxed mb-8">
                Our team focuses on timely delivery, budget discipline, required quality standards,
                continuous improvement, and safe site practices across every assignment.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {['Quality Assurance', 'Timely Delivery', 'Safety Focus', 'Turnkey Execution'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <FaCheckCircle className="text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-charcoal">{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/about" className="btn-primary">
                Learn More <FaArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>































    

{/* ===== PREMIUM SERVICES ===== */}
<section className="w-full">
  <div className="grid lg:grid-cols-[410px_1fr] w-full min-h-[950px]">

    {/* LEFT PANEL - full height, flush left, no rounding */}
    <div className="flex flex-col h-full bg-white">
      {services.slice(0, 4).map((service, index) => {
        const Icon = serviceIcons[service.title] || FaBuilding;

        return (
          <div
            key={service.id}
            onMouseEnter={() => setActiveService(index)}
            className={`relative flex-1 flex items-center justify-between px-8 border-b border-gray-200 cursor-pointer transition-all duration-300 ${
              activeService === index ? "bg-[#FFFBF0]" : "bg-white hover:bg-gray-50"
            }`}
          >
            {activeService === index && (
              <div className="absolute left-0 top-0 h-full w-1.5 bg-[#F4B400]" />
            )}

            <div className="flex items-center gap-5">
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 transition-all ${
                  activeService === index
                    ? "bg-[#FCE8A6] text-[#B8860B]"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                <Icon size={26} />
              </div>

              <div>
                <h3 className="text-[26px] leading-[1.15] font-bold font-[var(--font-heading)] text-charcoal-dark">
                  {service.title}
                </h3>
                <p className="mt-1.5 text-[15px] text-steel">
                  {service.shortDescription}
                </p>
              </div>
            </div>

            <FaChevronRight
              className={`text-xl shrink-0 ${
                activeService === index ? "text-charcoal-dark" : "text-gray-400"
              }`}
            />
          </div>
        );
      })}
    </div>

    {/* RIGHT PANEL - image flush right, edge to edge */}
    <div className="relative h-[600px] lg:h-full overflow-hidden">
      {/* Image */}
      <img
        src={services[activeService].image}
        alt={services[activeService].title}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
      />

      {/* Dark Gradient - strongest on left where text sits */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-black/10" />

      {/* Overlay Content */}
      <div className="absolute left-14 top-1/2 -translate-y-1/2 max-w-xl text-white">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[2px] bg-[#F4B400]" />
          <span className="text-[#F4B400] text-sm font-semibold tracking-widest uppercase">
            What We Do
          </span>
          <span className="w-8 h-[2px] bg-[#F4B400]" />
        </div>

        <h2 className="text-6xl leading-tight font-bold font-[var(--font-heading)]">
          Our <span className="text-[#F4B400]">Premium</span> Services
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-200 max-w-md">
          From planning to site execution, we deliver infrastructure services tailored to client requirements.
        </p>

        <div className="w-20 h-1 bg-[#F4B400] my-8 rounded-full" />

        <div className="space-y-5">
          {[
            "Telecom, Water, Civil and Energy Expertise",
            "Experienced Site and Management Team",
            "Quality, Safety and Timely Delivery",
          ].map((item) => (
            <div key={item} className="flex items-center gap-4">
              <div className="w-7 h-7 rounded-full border-2 border-[#F4B400] flex items-center justify-center">
                <FaCheck className="text-[#F4B400] text-xs" />
              </div>
              <span className="text-lg">{item}</span>
            </div>
          ))}
        </div>

        <button className="mt-10 flex items-center gap-3 bg-[#F4B400] hover:bg-[#e0a800] text-black font-semibold px-10 py-5 rounded-2xl transition-all duration-300 hover:scale-105">
          Learn More <FaChevronRight />
        </button>
      </div>
    </div>

  </div>
</section>



















      {/* ===== FEATURED PROJECTS ===== */}
      <section className="section-padding bg-white">
        <div className="site-container">
          <SectionHeading
            subtitle="Our Portfolio"
            title="Featured Projects"
            description="Explore our finest work that showcases our commitment to excellence and innovation."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="premium-card overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Completed' ? 'bg-green-500 text-white' : 'bg-primary text-charcoal-dark'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-1">{project.category}</p>
                  <h3 className="text-xl font-bold text-charcoal-dark mb-2 font-[var(--font-heading)]">{project.title}</h3>
                  <p className="text-steel text-sm mb-4">{project.location}</p>
                  <Link
                    to={`/projects/${project.id}`}
                    className="text-primary font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    View Details <FaArrowRight size={12} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/projects" className="btn-primary">
              View All Projects <FaArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>






























      
            {/* Why Choose Us */}

<section
  className="relative overflow-hidden bg-charcoal-dark"
  style={{
    backgroundImage: `linear-gradient(to bottom, rgba(10,10,10,0.75), rgba(10,10,10,0.85)), url('https://images.unsplash.com/photo-1541976590-713941681591?w=1920&q=80')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className="site-container relative z-10 py-24">

    {/* LEFT-ALIGNED HEADING */}
    <div className="max-w-2xl mb-16">
      <div className="flex items-center gap-3 mb-5">
        <span className="w-8 h-[2px] bg-[#F4B400]" />
        <span className="text-[#F4B400] text-sm font-semibold tracking-widest uppercase">
          Why Choose Us
        </span>
      </div>

      <h2 className="text-6xl leading-tight font-bold font-[var(--font-heading)] text-white">
        The Maruti Nandan Advantage
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-300 max-w-xl">
        What sets us apart is practical field experience, dependable delivery, and long-term client collaboration.
      </p>
    </div>

    {/* CARDS GRID */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { title: 'Turnkey Capability', desc: 'Engineering, materials, rollout, maintenance, and site delivery support across key infrastructure sectors.', icon: FaTrophy },
        { title: 'Experienced Team', desc: 'Core personnel with around 3 to 5+ years of hands-on engineering, management, planning, and installation experience.', icon: FaHardHat },
        { title: 'Quality Assurance', desc: 'Daily audits, work-in-progress monitoring, and continuous improvement practices guide site execution.', icon: FaCubes },
        { title: 'Multi-Sector Focus', desc: 'Telecommunications, water, civil, and energy services handled through practical site knowledge.', icon: FaLightbulb },
        { title: 'Safety First', desc: 'Health and safety standards, hazard controls, PPE, training, and safe work practices are built into operations.', icon: FaShieldAlt },
        { title: 'Client Focused', desc: 'Candid collaboration, liaison support, and long-term business relationships keep projects moving smoothly.', icon: FaHandshake },
      ].map((item, i) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            variants={fadeUp}
            className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-[#F4B400]/40 transition-all duration-300 group"
          >
            <Icon className="text-4xl text-[#F4B400] mb-5" />
            <h3 className="text-xl font-bold text-white mb-3 font-[var(--font-heading)]">
              {item.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        );
      })}
    </div>

  </div>
</section>









      {/* ===== TESTIMONIALS ===== */}
      <section className="section-padding bg-gray-50">
        <div className="site-container">
          <SectionHeading
            subtitle="Testimonials"
            title="What Our Clients Say"
            description="Don't just take our word for it — hear from our valued clients."
          />

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="pb-14"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="premium-card p-8 h-full"
                >
                  <FaQuoteLeft className="text-primary/20 text-3xl mb-4" />
                  <p className="text-steel text-sm leading-relaxed mb-6">{t.text}</p>
                  <div className="flex items-center gap-1 mb-4">
                    {Array(t.rating).fill(0).map((_, j) => (
                      <FaStar key={j} className="text-primary" size={14} />
                    ))}
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal-dark">{t.name}</h4>
                    <p className="text-steel text-xs">{t.role}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-charcoal-dark/85" />
        <div className="cta-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-[var(--font-heading)]">
              Ready to Build Your <span className="gradient-text">Dream Project?</span>
            </h2>
            <p className="text-steel-light text-lg mb-10 max-w-2xl mx-auto">
              Let&apos;s discuss your site requirement, scope, and execution plan. Contact our team for a practical project estimate.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary text-base">
                Get Free Quote <FaArrowRight size={14} />
              </Link>
              <a href={`tel:${companyInfo.phone[0]}`} className="btn-outline text-base !border-white !text-white hover:!bg-white hover:!text-charcoal-dark">
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

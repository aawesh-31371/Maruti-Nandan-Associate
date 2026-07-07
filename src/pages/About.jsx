import { motion } from 'framer-motion';
import { FaCheckCircle, FaBullseye, FaEye, FaHeart, FaShieldAlt, FaAward } from 'react-icons/fa';
import PageBanner from '../components/PageBanner';
import SectionHeading from '../components/SectionHeading';
import AnimatedCounter from '../components/AnimatedCounter';
import { companyInfo, teamMembers, timeline } from '../data/defaultData';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function About() {
  return (
    <>
      <PageBanner
        title="About Us"
        subtitle="Discover the story behind Maruti Nandan Associate"
        bgImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
      />

      {/* Company History */}
      <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 xl:px-16">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-20 items-center px-6 lg:px-12">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.15em] uppercase mb-4 bg-primary/10 text-primary border border-primary/20">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal-dark mb-6 font-[var(--font-heading)]">
                A Practical Team for <span className="gradient-text">Infrastructure Delivery</span>
              </h2>
              <p className="text-steel leading-relaxed mb-4">
                Maruti Nandan Associate is an enterprise providing infrastructure services across
                telecommunications, water, civil, and energy sectors. The firm delivers turnkey solutions
                with a focus on site planning, supervision, quality, and safety.
              </p>
              <p className="text-steel leading-relaxed mb-4">
                Our personnel bring field experience from leading infrastructure companies and have worked
                across engineering, management, water works, civil execution, electrical installation, and
                telecom support activities.
              </p>
              <p className="text-steel leading-relaxed">
                Today, we serve clients with dependable project execution, continuous improvement, and
                long-term collaboration across infrastructure assignments.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
                alt="Construction site"
                className="rounded-2xl w-full h-[450px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-charcoal-dark p-6 rounded-2xl shadow-xl">
                <span className="text-4xl font-bold font-[var(--font-heading)]">50+</span>
                <p className="text-sm font-semibold">Projects<br />Delivered</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <FaEye size={28} />, title: 'Our Vision', text: 'To become the partner of choice for our clients, and a company whose staff are proud to be an integral part.' },
              { icon: <FaBullseye size={28} />, title: 'Our Mission', text: 'Aligning the group with evolving telecommunications, water, civil, and energy sectors for the mutual benefit of all stakeholders.' },
              { icon: <FaHeart size={28} />, title: 'Core Values', text: 'Quality, safety, dependability, continuous improvement, teamwork, timely delivery, and responsible client service.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="premium-card p-8 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-5 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-charcoal-dark mb-4 font-[var(--font-heading)]">{item.title}</h3>
                <p className="text-steel text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-charcoal py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { end: companyInfo.stats.years, suffix: '+', label: 'Years Experience' },
              { end: companyInfo.stats.projects, suffix: '+', label: 'Contract Labour Capacity' },
              { end: companyInfo.stats.clients, suffix: '+', label: 'Companies Served' },
              { end: companyInfo.stats.engineers, suffix: '+', label: 'Field Team Capacity' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                <p className="text-steel-light text-sm mt-2 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            subtitle="Our Journey"
            title="Company Timeline"
            description="Key milestones from the company profile and registrations."
          />

          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2 hidden md:block" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div className="premium-card p-6">
                      <span className="text-primary font-bold text-lg font-[var(--font-heading)]">{item.year}</span>
                      <h3 className="text-lg font-bold text-charcoal-dark mt-1 font-[var(--font-heading)]">{item.title}</h3>
                      <p className="text-steel text-sm mt-2">{item.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20 flex-shrink-0 relative z-10" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="Certifications"
            title="Our Credentials"
            description="Recognized by leading industry bodies for our commitment to quality and safety."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'GST Registered', desc: companyInfo.gstin, icon: <FaAward size={32} /> },
              { title: 'EPF Registered', desc: companyInfo.epfCode, icon: <FaShieldAlt size={32} /> },
              { title: 'ESI Registered', desc: companyInfo.esiCode, icon: <FaCheckCircle size={32} /> },
              { title: 'Labour Registered', desc: companyInfo.labourCertificate, icon: <FaShieldAlt size={32} /> },
            ].map((cert, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="premium-card p-6 text-center"
              >
                <div className="text-primary mb-4 flex justify-center">{cert.icon}</div>
                <h3 className="font-bold text-charcoal-dark font-[var(--font-heading)]">{cert.title}</h3>
                <p className="text-steel text-sm mt-1">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="Our Team"
            title="Meet the Experts"
            description="The talented professionals driving our success."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="premium-card overflow-hidden group text-center"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/80 to-transparent" />
                  <div className="absolute bottom-4 left-0 right-0 text-white px-4">
                    <h3 className="font-bold text-lg font-[var(--font-heading)]">{member.name}</h3>
                    <p className="text-primary text-sm font-medium">{member.role}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-steel text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

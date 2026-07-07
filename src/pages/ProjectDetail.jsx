import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaMapMarkerAlt, FaCalendar, FaMoneyBill, FaUser, FaClock, FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import { useData } from '../context/DataContext';

export default function ProjectDetail() {
  const { id } = useParams();
  const { projects } = useData();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-charcoal-dark mb-4 font-[var(--font-heading)]">Project Not Found</h2>
          <Link to="/projects" className="btn-primary">
            <FaArrowLeft size={14} /> Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const relatedProjects = projects.filter(
    (p) => p.id !== id && p.category === project.category
  ).slice(0, 3);

  return (
    <>
      {/* Banner */}
      <section
        className="project-hero relative min-h-[60vh] flex items-end overflow-hidden"
        style={{
          backgroundImage: `url(${project.coverImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/50 to-transparent" />
        <div className="project-hero-content relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/projects" className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4 hover:gap-3 transition-all">
              <FaArrowLeft size={12} /> Back to Projects
            </Link>
            <div className="project-hero-meta flex items-center gap-3 mb-3">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                project.status === 'Completed' ? 'bg-green-500 text-white' : 'bg-primary text-charcoal-dark'
              }`}>
                {project.status}
              </span>
              <span className="text-white/60 text-sm">{project.category}</span>
            </div>
            <h1 className="project-hero-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-[var(--font-heading)]">
              {project.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Details */}
      <section className="section-padding bg-white project-detail-page">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-charcoal-dark mb-4 font-[var(--font-heading)]">Project Overview</h2>
                <p className="text-steel leading-relaxed mb-8">{project.description}</p>

                {/* Gallery Slider */}
                {project.gallery && project.gallery.length > 0 && (
                  <div className="mb-10">
                    <h3 className="text-xl font-bold text-charcoal-dark mb-4 font-[var(--font-heading)]">Project Gallery</h3>
                    <Swiper
                      modules={[Navigation, Pagination, Autoplay]}
                      spaceBetween={10}
                      slidesPerView={1}
                      navigation
                      pagination={{ clickable: true }}
                      autoplay={{ delay: 4000 }}
                      className="rounded-2xl overflow-hidden"
                    >
                      {project.gallery.map((img, i) => (
                        <SwiperSlide key={i}>
                          <img
                            src={img}
                            alt={`${project.title} - Image ${i + 1}`}
                            className="w-full h-[400px] object-cover"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                )}

                {/* Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="mb-10">
                    <h3 className="text-xl font-bold text-charcoal-dark mb-4 font-[var(--font-heading)]">Project Highlights</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {project.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <FaCheckCircle className="text-primary flex-shrink-0" />
                          <span className="text-sm text-charcoal font-medium">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Materials */}
                {project.materials && project.materials.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-charcoal-dark mb-4 font-[var(--font-heading)]">Materials Used</h3>
                    <div className="project-materials flex flex-wrap gap-2">
                      {project.materials.map((m, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="project-details-card premium-card p-6 sticky top-28"
              >
                <h3 className="text-lg font-bold text-charcoal-dark mb-6 font-[var(--font-heading)]">Project Details</h3>
                <div className="space-y-5">
                  {[
                    { icon: <FaMapMarkerAlt />, label: 'Location', value: project.location },
                    { icon: <FaUser />, label: 'Client', value: project.client || 'N/A' },
                    { icon: <FaMoneyBill />, label: 'Budget', value: project.budget || 'N/A' },
                    { icon: <FaClock />, label: 'Timeline', value: project.timeline || 'N/A' },
                    { icon: <FaCalendar />, label: 'Completion', value: project.completionDate ? new Date(project.completionDate).toLocaleDateString('en-IN', { year: 'numeric', month: 'long' }) : 'N/A' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-steel uppercase tracking-wider">{item.label}</p>
                        <p className="text-sm font-semibold text-charcoal-dark">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link to="/contact" className="btn-primary w-full justify-center">
                    Inquire About This Project
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <div className="mt-20">
              <h2 className="text-2xl font-bold text-charcoal-dark mb-8 font-[var(--font-heading)]">Related Projects</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedProjects.map((rp) => (
                  <Link key={rp.id} to={`/projects/${rp.id}`} className="premium-card overflow-hidden group">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={rp.coverImage}
                        alt={rp.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-charcoal-dark font-[var(--font-heading)]">{rp.title}</h3>
                      <p className="text-steel text-sm">{rp.location}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

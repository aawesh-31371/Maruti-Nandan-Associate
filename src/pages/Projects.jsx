import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSearch, FaMapMarkerAlt, FaArrowRight, FaFilter } from 'react-icons/fa';
import PageBanner from '../components/PageBanner';
import { useData } from '../context/DataContext';

const categories = ['All', 'Infrastructure', 'Industrial', 'Commercial'];
const statuses = ['All', 'Completed', 'Ongoing'];
const sortOptions = ['Newest First', 'Oldest First', 'Name A-Z', 'Name Z-A'];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

export default function Projects() {
  const { projects } = useData();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [status, setStatus] = useState('All');
  const [sort, setSort] = useState('Newest First');
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = [...projects];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    if (category !== 'All') {
      result = result.filter((p) => p.category === category);
    }

    if (status !== 'All') {
      result = result.filter((p) => p.status === status);
    }

    switch (sort) {
      case 'Newest First':
        result.sort((a, b) => (b.completionDate || '').localeCompare(a.completionDate || ''));
        break;
      case 'Oldest First':
        result.sort((a, b) => (a.completionDate || '').localeCompare(b.completionDate || ''));
        break;
      case 'Name A-Z':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'Name Z-A':
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;
    }

    return result;
  }, [projects, search, category, status, sort]);

  return (
    <>
      <PageBanner
        title="Our Projects"
        subtitle="Explore our infrastructure experience and service portfolio"
        bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Search & Filters */}
          <div className="mb-10">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-steel" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="btn-outline !py-3.5 sm:!px-6"
              >
                <FaFilter size={14} /> Filters
              </button>
            </div>

            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="flex flex-wrap gap-4 p-6 bg-gray-50 rounded-xl"
              >
                <div>
                  <label className="text-xs font-semibold text-steel-dark uppercase tracking-wider block mb-2">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-primary outline-none"
                  >
                    {categories.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-steel-dark uppercase tracking-wider block mb-2">Status</label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-primary outline-none"
                  >
                    {statuses.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-steel-dark uppercase tracking-wider block mb-2">Sort By</label>
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-primary outline-none"
                  >
                    {sortOptions.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </motion.div>
            )}

            {/* Category pills */}
            <div className="flex flex-wrap gap-2 mt-4">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    category === c
                      ? 'bg-primary text-charcoal-dark'
                      : 'bg-gray-100 text-steel hover:bg-gray-200'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <p className="text-steel text-sm mb-8">{filtered.length} project{filtered.length !== 1 ? 's' : ''} found</p>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                  className="premium-card overflow-hidden group"
                >
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/60 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === 'Completed'
                          ? 'bg-green-500 text-white'
                          : 'bg-primary text-charcoal-dark'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-charcoal-dark mb-2 font-[var(--font-heading)]">{project.title}</h3>
                    <div className="flex items-center gap-1 text-steel text-sm mb-2">
                      <FaMapMarkerAlt size={12} className="text-primary" />
                      {project.location}
                    </div>
                    <p className="text-steel text-sm mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-steel">
                        {project.completionDate ? new Date(project.completionDate).getFullYear() : 'N/A'}
                      </span>
                      <Link
                        to={`/projects/${project.id}`}
                        className="text-primary font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                      >
                        View Details <FaArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-steel text-lg">No projects found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight, FaSearchPlus } from 'react-icons/fa';
import PageBanner from '../components/PageBanner';
import SectionHeading from '../components/SectionHeading';
import { useData } from '../context/DataContext';
import { galleryCategories } from '../data/defaultData';

export default function Gallery() {
  const { projects } = useData();
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  // Build gallery from all project images
  const allImages = useMemo(() => {
    const images = [];
    projects.forEach((project) => {
      if (project.coverImage) {
        images.push({
          src: project.coverImage,
          title: project.title,
          category: project.category,
          projectId: project.id,
        });
      }
      if (project.gallery) {
        project.gallery.forEach((img, i) => {
          if (img !== project.coverImage) {
            images.push({
              src: img,
              title: `${project.title} - ${i + 1}`,
              category: project.category,
              projectId: project.id,
            });
          }
        });
      }
    });
    return images;
  }, [projects]);

  const filteredImages = useMemo(() => {
    if (activeCategory === 'All') return allImages;
    return allImages.filter((img) => img.category === activeCategory);
  }, [allImages, activeCategory]);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(-1);
  const nextImage = () => setLightboxIndex((prev) => (prev + 1) % filteredImages.length);
  const prevImage = () => setLightboxIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);

  return (
    <>
      <PageBanner
        title="Gallery"
        subtitle="A visual showcase of our infrastructure work areas"
        bgImage="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&q=80"
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="Our Work"
            title="Project Gallery"
            description="Browse through telecom, water, civil, electrical, and infrastructure work areas."
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-primary text-charcoal-dark shadow-lg'
                    : 'bg-gray-100 text-steel hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="masonry-grid">
            <AnimatePresence>
              {filteredImages.map((img, i) => (
                <motion.div
                  key={`${img.src}-${i}`}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => openLightbox(i)}
                  className="relative overflow-hidden rounded-xl cursor-pointer group"
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                    style={{ minHeight: '200px' }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-charcoal-dark/0 group-hover:bg-charcoal-dark/60 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      <FaSearchPlus className="text-white text-2xl mb-2 mx-auto" />
                      <p className="text-white text-sm font-medium px-4">{img.title}</p>
                      <p className="text-primary text-xs">{img.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-steel text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex >= 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={closeLightbox}
          >
            <button
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              className="absolute top-6 right-6 text-white/80 hover:text-white text-3xl z-10"
              aria-label="Close lightbox"
            >
              <FaTimes />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-2xl z-10 w-12 h-12 flex items-center justify-center bg-white/10 rounded-full backdrop-blur-sm"
              aria-label="Previous image"
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-2xl z-10 w-12 h-12 flex items-center justify-center bg-white/10 rounded-full backdrop-blur-sm"
              aria-label="Next image"
            >
              <FaChevronRight />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl max-h-[85vh] mx-4"
            >
              <img
                src={filteredImages[lightboxIndex]?.src}
                alt={filteredImages[lightboxIndex]?.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="text-center mt-4">
                <p className="text-white font-medium">{filteredImages[lightboxIndex]?.title}</p>
                <p className="text-steel-light text-sm">{lightboxIndex + 1} / {filteredImages.length}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

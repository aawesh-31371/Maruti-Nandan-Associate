import { useMemo, useState } from 'react';
import { HiOutlinePhotograph, HiOutlinePlus, HiOutlineTrash } from 'react-icons/hi';
import { useData } from '../../context/DataContext';

export default function AdminGallery() {
  const { projects, updateProject } = useData();
  const [projectId, setProjectId] = useState(projects[0]?.id || '');
  const [imageUrl, setImageUrl] = useState('');
  const selected = projects.find((project) => project.id === projectId) || projects[0];

  const images = useMemo(() => selected?.gallery || [], [selected]);

  const addImage = (event) => {
    event.preventDefault();
    const url = imageUrl.trim();
    if (!url || !selected) return;
    updateProject(selected.id, { gallery: [...images, url] });
    setImageUrl('');
  };

  const removeImage = (index) => {
    if (!selected || !window.confirm('Remove this image from the gallery?')) return;
    updateProject(selected.id, { gallery: images.filter((_, imageIndex) => imageIndex !== index) });
  };

  return (
    <div className="admin-content mx-auto">
      <div className="mb-7"><p className="text-primary text-xs uppercase tracking-widest font-bold">Media</p><h1 className="text-3xl font-bold text-charcoal-dark mt-1">Gallery</h1><p className="text-steel text-sm mt-2">Manage the images attached to each project.</p></div>

      {!projects.length ? (
        <div className="admin-card text-center py-16"><HiOutlinePhotograph size={40} className="mx-auto text-steel opacity-40 mb-3" /><p className="text-steel">Add a project before uploading gallery links.</p></div>
      ) : (
        <>
          <section className="admin-card mb-6">
            <div className="grid lg:grid-cols-[minmax(220px,0.7fr)_1.5fr_auto] gap-4 items-end">
              <label><span className="admin-label">Project</span><select className="admin-input" value={selected?.id || ''} onChange={(e) => setProjectId(e.target.value)}>{projects.map((project) => <option key={project.id} value={project.id}>{project.title}</option>)}</select></label>
              <form id="image-form" onSubmit={addImage} className="contents">
                <label><span className="admin-label">New image URL</span><input type="url" className="admin-input" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="https://images.example.com/photo.jpg" required /></label>
                <button form="image-form" className="btn-primary justify-center h-[46px]"><HiOutlinePlus size={19} /> Add image</button>
              </form>
            </div>
          </section>

          {images.length ? (
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {images.map((image, index) => (
                <article key={`${image}-${index}`} className="admin-card !p-0 overflow-hidden group">
                  <div className="relative h-56"><img src={image} alt={`${selected.title} gallery ${index + 1}`} className="w-full h-full object-cover" /><button onClick={() => removeImage(index)} className="absolute top-3 right-3 w-9 h-9 rounded-lg bg-white/90 text-red-600 flex items-center justify-center opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity shadow" aria-label="Remove image"><HiOutlineTrash size={19} /></button></div>
                  <div className="px-4 py-3"><p className="text-xs text-steel truncate" title={image}>{image}</p></div>
                </article>
              ))}
            </div>
          ) : (
            <div className="admin-card text-center py-16"><HiOutlinePhotograph size={40} className="mx-auto text-steel opacity-40 mb-3" /><p className="text-steel">This project has no gallery images yet.</p></div>
          )}
        </>
      )}
    </div>
  );
}

import { useMemo, useState } from 'react';
import { HiOutlinePencil, HiOutlinePlus, HiOutlineSearch, HiOutlineTrash, HiOutlineX } from 'react-icons/hi';
import { useData } from '../../context/DataContext';

const emptyProject = {
  title: '', category: 'Infrastructure', status: 'Ongoing', location: '', description: '',
  client: '', budget: '', timeline: '', completionDate: '', coverImage: '', gallery: [], materials: [], highlights: [],
};

const categories = ['Infrastructure', 'Industrial', 'Commercial'];

const toForm = (project = emptyProject) => ({
  ...emptyProject,
  ...project,
  gallery: (project.gallery || []).join('\n'),
  materials: (project.materials || []).join(', '),
  highlights: (project.highlights || []).join(', '),
});

export default function AdminProjects() {
  const { projects, addProject, updateProject, deleteProject } = useData();
  const [query, setQuery] = useState('');
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(toForm());

  const filtered = useMemo(() => {
    const needle = query.toLowerCase();
    return projects.filter((project) => `${project.title} ${project.location} ${project.category}`.toLowerCase().includes(needle));
  }, [projects, query]);

  const openCreate = () => { setEditing('new'); setForm(toForm()); };
  const openEdit = (project) => { setEditing(project.id); setForm(toForm(project)); };
  const close = () => setEditing(null);
  const setField = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    const clean = {
      ...form,
      title: form.title.trim(),
      gallery: form.gallery.split('\n').map((value) => value.trim()).filter(Boolean),
      materials: form.materials.split(',').map((value) => value.trim()).filter(Boolean),
      highlights: form.highlights.split(',').map((value) => value.trim()).filter(Boolean),
    };
    if (editing === 'new') addProject(clean);
    else updateProject(editing, clean);
    close();
  };

  const handleDelete = (project) => {
    if (window.confirm(`Delete “${project.title}”? This cannot be undone.`)) deleteProject(project.id);
  };

  return (
    <div className="admin-content mx-auto">
      <div className="flex flex-wrap gap-4 justify-between items-end mb-7">
        <div><p className="text-primary text-xs uppercase tracking-widest font-bold">Portfolio</p><h1 className="text-3xl font-bold text-charcoal-dark mt-1">Projects</h1><p className="text-steel text-sm mt-2">Create and update the projects shown on the public website.</p></div>
        <button onClick={openCreate} className="btn-primary !py-2.5"><HiOutlinePlus size={19} /> Add project</button>
      </div>

      <div className="admin-card">
        <div className="relative max-w-md mb-6">
          <HiOutlineSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-steel" size={20} />
          <input className="admin-input !pl-11" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search projects..." />
        </div>

















       {/* Desktop Table */}
<div className="hidden md:block overflow-x-auto">
  <table className="w-full text-left">
    <thead>
      <tr className="border-b border-gray-200 text-xs uppercase tracking-wider text-steel">
        <th className="pb-3 font-semibold">Project</th>
        <th className="pb-3 font-semibold">Category</th>
        <th className="pb-3 font-semibold">Status</th>
        <th className="pb-3 font-semibold">Completion</th>
        <th className="pb-3 font-semibold text-right">Actions</th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-100">
      {filtered.map((project) => (
        <tr key={project.id}>
          <td className="py-4">
            <div className="flex items-center gap-3">
              <img
                src={project.coverImage}
                alt=""
                className="w-14 h-11 rounded-lg object-cover"
              />

              <div>
                <p className="font-semibold text-sm">{project.title}</p>
                <p className="text-steel text-xs">{project.location}</p>
              </div>
            </div>
          </td>

          <td>{project.category}</td>

          <td>
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                project.status === "Completed"
                  ? "bg-green-50 text-green-700"
                  : "bg-amber-50 text-amber-700"
              }`}
            >
              {project.status}
            </span>
          </td>

          <td>{project.completionDate || "—"}</td>

          <td>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => openEdit(project)}
                className="admin-icon-button"
              >
                <HiOutlinePencil />
              </button>

              <button
                onClick={() => handleDelete(project)}
                className="admin-icon-button hover:!text-red-600 hover:!bg-red-50"
              >
                <HiOutlineTrash />
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

{/* Mobile Cards */}
<div className="md:hidden space-y-4">
  {filtered.map((project) => (
    <div
      key={project.id}
      className="border border-gray-200 rounded-2xl p-4 shadow-sm bg-white"
    >
      <div className="flex gap-4">
        <img
          src={project.coverImage}
          alt=""
          className="w-24 h-20 rounded-xl object-cover"
        />

        <div className="flex-1">
          <h3 className="font-bold text-base">{project.title}</h3>

          <p className="text-sm text-steel">
            📍 {project.location}
          </p>

          <p className="text-sm mt-1">
            <strong>Category:</strong> {project.category}
          </p>

          <span
            className={`inline-block mt-2 text-xs font-semibold px-3 py-1 rounded-full ${
              project.status === "Completed"
                ? "bg-green-50 text-green-700"
                : "bg-amber-50 text-amber-700"
            }`}
          >
            {project.status}
          </span>
        </div>
      </div>

      <div className="flex justify-end gap-3 mt-4">
        <button
          onClick={() => openEdit(project)}
          className="admin-icon-button"
        >
          <HiOutlinePencil />
        </button>

        <button
          onClick={() => handleDelete(project)}
          className="admin-icon-button hover:!text-red-600 hover:!bg-red-50"
        >
          <HiOutlineTrash />
        </button>
      </div>
    </div>
  ))}
</div>

{!filtered.length && (
  <p className="text-center text-steel py-12">
    No projects match your search.
  </p>
)}


















     </div>
      {editing && (
        <div className="fixed inset-0 z-[100] bg-black/60 flex justify-end" onMouseDown={(event) => event.target === event.currentTarget && close()}>
          <section className="bg-white h-full w-full max-w-2xl overflow-y-auto shadow-2xl" role="dialog" aria-modal="true" aria-label={editing === 'new' ? 'Add project' : 'Edit project'}>
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-5 flex items-center justify-between z-10"><div><h2 className="text-2xl font-bold">{editing === 'new' ? 'Add project' : 'Edit project'}</h2><p className="text-xs text-steel mt-1">Fields marked * are required.</p></div><button onClick={close} className="admin-icon-button" aria-label="Close"><HiOutlineX size={23} /></button></div>
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <label className="block"><span className="admin-label">Project title *</span><input name="title" className="admin-input" value={form.title} onChange={setField} required /></label>
              <div className="grid sm:grid-cols-2 gap-5">
                <label><span className="admin-label">Category *</span><select name="category" className="admin-input" value={form.category} onChange={setField}>{categories.map((category) => <option key={category}>{category}</option>)}</select></label>
                <label><span className="admin-label">Status *</span><select name="status" className="admin-input" value={form.status} onChange={setField}><option>Ongoing</option><option>Completed</option></select></label>
              </div>
              <label className="block"><span className="admin-label">Description *</span><textarea name="description" rows="4" className="admin-input resize-y" value={form.description} onChange={setField} required /></label>
              <div className="grid sm:grid-cols-2 gap-5">
                <label><span className="admin-label">Location *</span><input name="location" className="admin-input" value={form.location} onChange={setField} required /></label>
                <label><span className="admin-label">Client</span><input name="client" className="admin-input" value={form.client} onChange={setField} /></label>
                <label><span className="admin-label">Budget</span><input name="budget" className="admin-input" value={form.budget} onChange={setField} placeholder="As per project scope" /></label>
                <label><span className="admin-label">Timeline</span><input name="timeline" className="admin-input" value={form.timeline} onChange={setField} placeholder="Site-specific schedule" /></label>
                <label><span className="admin-label">Completion date</span><input name="completionDate" type="date" className="admin-input" value={form.completionDate} onChange={setField} /></label>
              </div>
              <label className="block"><span className="admin-label">Cover image URL *</span><input name="coverImage" type="url" className="admin-input" value={form.coverImage} onChange={setField} required /></label>
              {form.coverImage && <img src={form.coverImage} alt="Cover preview" className="w-full h-44 object-cover rounded-xl bg-gray-100" />}
              <label className="block"><span className="admin-label">Gallery URLs</span><textarea name="gallery" rows="3" className="admin-input resize-y" value={form.gallery} onChange={setField} placeholder="One image URL per line" /><small className="text-steel">One image URL per line.</small></label>
              <label className="block"><span className="admin-label">Highlights</span><input name="highlights" className="admin-input" value={form.highlights} onChange={setField} placeholder="Quality assurance, Safety supervision, Site audit" /><small className="text-steel">Separate items with commas.</small></label>
              <label className="block"><span className="admin-label">Materials</span><input name="materials" className="admin-input" value={form.materials} onChange={setField} placeholder="HDPE pipes, RCC, XLPE cable" /><small className="text-steel">Separate items with commas.</small></label>
              <div className="flex justify-end gap-3 pt-3"><button type="button" onClick={close} className="px-5 py-3 rounded-lg border border-gray-200 text-sm font-semibold">Cancel</button><button type="submit" className="btn-primary">{editing === 'new' ? 'Create project' : 'Save changes'}</button></div>
            </form>
          </section>
        </div>
      )}
    </div>
  );
}

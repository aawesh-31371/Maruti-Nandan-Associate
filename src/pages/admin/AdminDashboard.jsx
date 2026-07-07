import { Link } from 'react-router-dom';
import { HiOutlineCollection, HiOutlineMail, HiOutlinePhotograph, HiOutlineCheckCircle, HiOutlineArrowRight } from 'react-icons/hi';
import { useData } from '../../context/DataContext';

export default function AdminDashboard() {
  const { projects, messages } = useData();
  const imageCount = projects.reduce((total, project) => total + (project.gallery?.length || 0), 0);
  const completedCount = projects.filter((project) => project.status === 'Completed').length;
  const unreadCount = messages.filter((message) => !message.read).length;
  const recentMessages = [...messages].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 4);

  const stats = [
    { label: 'Total Projects', value: projects.length, icon: HiOutlineCollection, color: 'bg-blue-50 text-blue-600' },
    { label: 'Completed', value: completedCount, icon: HiOutlineCheckCircle, color: 'bg-green-50 text-green-600' },
    { label: 'Gallery Images', value: imageCount, icon: HiOutlinePhotograph, color: 'bg-amber-50 text-amber-600' },
    { label: 'Unread Inquiries', value: unreadCount, icon: HiOutlineMail, color: 'bg-red-50 text-red-600' },
  ];

  return (
    <div className="admin-content mx-auto">
      <div className="flex flex-wrap justify-between gap-6 items-end mb-10">
        <div><p className="text-primary text-xs uppercase tracking-widest font-bold">Overview</p><h1 className="text-3xl font-bold text-charcoal-dark mt-1">Dashboard</h1><p className="text-steel text-sm mt-2">Here’s what’s happening across your website.</p></div>
        <Link to="/admin/projects" className="btn-primary !py-2.5">Manage projects <HiOutlineArrowRight /></Link>
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        {stats.map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="admin-card admin-stat-card flex items-center gap-5">
            <span className={`w-14 h-14 rounded-2xl flex items-center justify-center ${color}`}><Icon size={27} /></span>
            <div><p className="text-2xl font-bold text-charcoal-dark">{value}</p><p className="text-steel text-sm">{label}</p></div>
          </div>
        ))}
      </div>

      <div className="grid xl:grid-cols-3 gap-6">
        <section className="admin-card xl:col-span-2">
          <div className="flex items-center justify-between mb-5"><h2 className="text-xl font-bold">Recent projects</h2><Link to="/admin/projects" className="text-primary text-sm font-semibold">View all</Link></div>
          <div className="divide-y divide-gray-100">
            {projects.slice(0, 5).map((project) => (
              <div key={project.id} className="py-3 flex gap-4 items-center">
                <img src={project.coverImage} alt="" className="w-14 h-12 rounded-lg object-cover bg-gray-100" />
                <div className="min-w-0 flex-1"><p className="font-semibold text-sm truncate">{project.title}</p><p className="text-xs text-steel truncate">{project.location}</p></div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${project.status === 'Completed' ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'}`}>{project.status}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="admin-card">
          <div className="flex items-center justify-between mb-5"><h2 className="text-xl font-bold">Recent inquiries</h2><Link to="/admin/messages" className="text-primary text-sm font-semibold">View all</Link></div>
          {recentMessages.length ? <div className="space-y-4">{recentMessages.map((message) => (
            <Link to="/admin/messages" key={message.id} className="block border-b border-gray-100 pb-4 last:border-0">
              <div className="flex gap-2 items-center"><span className={`w-2 h-2 rounded-full ${message.read ? 'bg-gray-300' : 'bg-primary'}`} /><p className="font-semibold text-sm truncate">{message.name}</p></div>
              <p className="text-steel text-xs mt-1 truncate">{message.subject || message.message}</p>
            </Link>
          ))}</div> : <div className="text-center py-10 text-steel"><HiOutlineMail size={34} className="mx-auto mb-2 opacity-40" /><p className="text-sm">No inquiries yet.</p></div>}
        </section>
      </div>
    </div>
  );
}

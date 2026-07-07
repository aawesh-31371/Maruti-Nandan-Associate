import { useMemo, useState } from 'react';
import { HiOutlineMail, HiOutlineSearch, HiOutlineTrash, HiOutlineX } from 'react-icons/hi';
import { useData } from '../../context/DataContext';

export default function AdminMessages() {
  const { messages, markMessageRead, deleteMessage } = useData();
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState('All');

  const filtered = useMemo(() => {
    const needle = query.toLowerCase();
    return [...messages]
      .filter((message) => filter === 'All' || (filter === 'Unread' ? !message.read : message.read))
      .filter((message) => `${message.name} ${message.email} ${message.subject} ${message.message}`.toLowerCase().includes(needle))
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }, [messages, query, filter]);

  const openMessage = (message) => {
    setSelected(message);
    if (!message.read) markMessageRead(message.id);
  };

  const handleDelete = (message) => {
    if (!window.confirm(`Delete the inquiry from ${message.name}?`)) return;
    deleteMessage(message.id);
    if (selected?.id === message.id) setSelected(null);
  };

  return (
    <div className="admin-content mx-auto">
      <div className="mb-7"><p className="text-primary text-xs uppercase tracking-widest font-bold">Inbox</p><h1 className="text-3xl font-bold text-charcoal-dark mt-1">Client inquiries</h1><p className="text-steel text-sm mt-2">Review messages submitted through the contact form.</p></div>

      <section className="admin-card">
        <div className="flex flex-col sm:flex-row gap-4 mb-5">
          <div className="relative flex-1"><HiOutlineSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-steel" size={20} /><input className="admin-input !pl-11" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search inquiries..." /></div>
          <div className="flex rounded-lg bg-gray-100 p-1">{['All', 'Unread', 'Read'].map((option) => <button key={option} onClick={() => setFilter(option)} className={`px-4 py-2 rounded-md text-sm font-medium transition ${filter === option ? 'bg-white shadow-sm text-charcoal-dark' : 'text-steel'}`}>{option}</button>)}</div>
        </div>

        {filtered.length ? <div className="divide-y divide-gray-100">{filtered.map((message) => (
          <article key={message.id} className={`py-4 flex items-start gap-4 ${message.read ? '' : 'bg-amber-50/40 -mx-3 px-3 rounded-lg'}`}>
            <button onClick={() => openMessage(message)} className="text-left min-w-0 flex-1">
              <div className="flex items-center gap-2"><span className={`w-2 h-2 rounded-full flex-shrink-0 ${message.read ? 'bg-gray-300' : 'bg-primary'}`} /><p className="font-semibold text-sm truncate">{message.name}</p><span className="text-xs text-steel ml-auto">{new Date(message.createdAt).toLocaleDateString('en-IN')}</span></div>
              <p className="text-sm text-charcoal mt-1 truncate">{message.subject || 'Website inquiry'}</p><p className="text-xs text-steel truncate mt-1">{message.message}</p>
            </button>
            <button onClick={() => handleDelete(message)} className="admin-icon-button hover:!text-red-600 hover:!bg-red-50" aria-label={`Delete inquiry from ${message.name}`}><HiOutlineTrash /></button>
          </article>
        ))}</div> : <div className="text-center py-16"><HiOutlineMail size={40} className="mx-auto text-steel opacity-40 mb-3" /><p className="text-steel">No inquiries found.</p></div>}
      </section>

      {selected && (
        <div className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center p-4" onMouseDown={(event) => event.target === event.currentTarget && setSelected(null)}>
          <section className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden" role="dialog" aria-modal="true" aria-label="Inquiry details">
            <header className="px-6 py-5 border-b border-gray-200 flex justify-between gap-4"><div><p className="text-primary text-xs font-bold uppercase tracking-widest">Client inquiry</p><h2 className="text-2xl font-bold mt-1">{selected.subject || 'Website inquiry'}</h2></div><button onClick={() => setSelected(null)} className="admin-icon-button" aria-label="Close"><HiOutlineX size={22} /></button></header>
            <div className="p-6"><div className="grid sm:grid-cols-2 gap-4 bg-gray-50 rounded-xl p-4 text-sm mb-6"><div><p className="text-xs uppercase text-steel">From</p><p className="font-semibold mt-1">{selected.name}</p></div><div><p className="text-xs uppercase text-steel">Received</p><p className="font-semibold mt-1">{new Date(selected.createdAt).toLocaleString('en-IN')}</p></div><div><p className="text-xs uppercase text-steel">Email</p><a className="font-semibold text-primary mt-1 block" href={`mailto:${selected.email}`}>{selected.email}</a></div><div><p className="text-xs uppercase text-steel">Phone</p><p className="font-semibold mt-1">{selected.phone || 'Not provided'}</p></div></div><p className="text-charcoal leading-relaxed whitespace-pre-wrap">{selected.message}</p></div>
            <footer className="px-6 py-4 bg-gray-50 flex justify-between gap-3"><button onClick={() => handleDelete(selected)} className="text-red-600 text-sm font-semibold flex items-center gap-2"><HiOutlineTrash /> Delete</button><a href={`mailto:${selected.email}?subject=Re: ${selected.subject || 'Your inquiry'}`} className="btn-primary !py-2.5">Reply by email</a></footer>
          </section>
        </div>
      )}
    </div>
  );
}

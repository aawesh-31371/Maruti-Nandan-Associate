import { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useData } from '../context/DataContext';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiOutlineViewGrid,
  HiOutlineCollection,
  HiOutlinePhotograph,
  HiOutlineMail,
  HiOutlineLogout,
  HiOutlineMenu,
  HiOutlineHome,
} from 'react-icons/hi';

const sidebarLinks = [
  { name: 'Dashboard', path: '/admin', icon: HiOutlineViewGrid },
  { name: 'Projects', path: '/admin/projects', icon: HiOutlineCollection },
  { name: 'Gallery', path: '/admin/gallery', icon: HiOutlinePhotograph },
  { name: 'Messages', path: '/admin/messages', icon: HiOutlineMail },
];

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { logout } = useAuth();
  const { messages } = useData();
  const location = useLocation();
  const navigate = useNavigate();

  const unreadCount = messages.filter((m) => !m.read).length;

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-[#f5f6f8] flex">
      {/* Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`admin-sidebar-shell fixed lg:sticky top-0 left-0 h-screen w-72 admin-sidebar text-white z-50 transform transition-transform duration-300 flex flex-col flex-shrink-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="px-6 py-7 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/10">
              <span className="text-charcoal-dark font-bold text-lg font-[var(--font-heading)]">M</span>
            </div>
            <div>
              <h2 className="font-bold text-base font-[var(--font-heading)] tracking-wide">MNA Admin</h2>
              <p className="text-[11px] text-steel-light mt-0.5 tracking-wider uppercase">Control Panel</p>
            </div>
          </div>
        </div>

        <nav className="p-4 space-y-1.5 flex-1 overflow-y-auto">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-primary text-charcoal-dark'
                    : 'text-steel-light hover:bg-white/5 hover:text-white'
                }`}
              >
                <Icon size={20} />
                {link.name}
                {link.name === 'Messages' && unreadCount > 0 && (
                  <span className="ml-auto bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10 space-y-1.5">
          <Link
            to="/"
            className="flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-sm font-medium text-steel-light hover:bg-white/5 hover:text-white transition-all"
          >
            <HiOutlineHome size={20} />
            View Website
          </Link>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-sm font-medium text-red-400 hover:bg-red-500/10 transition-all"
          >
            <HiOutlineLogout size={20} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top Bar */}
        <header className="admin-topbar bg-white/90 backdrop-blur-xl border-b border-gray-200/80 px-6 lg:px-10 flex items-center justify-between sticky top-0 z-30">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-charcoal hover:text-primary transition-colors"
            aria-label="Open sidebar"
          >
            <HiOutlineMenu size={24} />
          </button>
          <div className="flex items-center gap-3 ml-auto">
            <div className="w-9 h-9 bg-primary/15 border border-primary/30 rounded-full flex items-center justify-center">
              <span className="text-charcoal-dark font-bold text-xs">A</span>
            </div>
            <span className="text-sm font-medium text-charcoal hidden sm:block">Admin</span>
          </div>
        </header>

        {/* Page Content */}
        <main className="admin-main flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

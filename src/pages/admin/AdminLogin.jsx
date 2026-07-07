import { useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaLock, FaUser } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';

export default function AdminLogin() {
  const { login, isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  if (!loading && isAuthenticated) return <Navigate to="/admin" replace />;

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = login(form.username.trim(), form.password);
    if (result.success) {
      navigate(location.state?.from || '/admin', { replace: true });
    } else {
      setError(result.message);
    }
  };

  return (
    <main className="min-h-screen bg-charcoal-dark grid lg:grid-cols-2">
      <section className="hidden lg:flex relative overflow-hidden items-end p-14 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=85')" }}>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/60 to-charcoal-dark/20" />
        <div className="relative z-10 max-w-lg text-white">
          <p className="text-primary uppercase tracking-[0.25em] text-xs font-bold mb-4">Maruti Nandan Associate</p>
          <h1 className="text-5xl font-bold leading-tight">Deliver with precision. Manage with clarity.</h1>
          <p className="text-steel-light mt-5">Your secure workspace for projects, galleries, and client inquiries.</p>
        </div>
      </section>

      <section className="flex items-center justify-center px-5 py-12 bg-gray-50">
        <div className="w-full max-w-md">
          <Link to="/" className="inline-flex items-center gap-3 mb-10">
            <span className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center font-bold text-xl">M</span>
            <span><strong className="block text-charcoal-dark">MNA Admin</strong><small className="text-steel">Control Panel</small></span>
          </Link>
          <div className="admin-card !p-8">
            <h2 className="text-3xl font-bold text-charcoal-dark">Welcome back</h2>
            <p className="text-steel text-sm mt-2 mb-7">Sign in to manage your website.</p>

            {error && <p role="alert" className="mb-5 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-red-700 text-sm">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-5">
              <label className="block">
                <span className="admin-label">Username</span>
                <span className="relative block">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-steel" />
                  <input className="admin-input !pl-11" autoComplete="username" value={form.username} onChange={(e) => { setForm({ ...form, username: e.target.value }); setError(''); }} required />
                </span>
              </label>
              <label className="block">
                <span className="admin-label">Password</span>
                <span className="relative block">
                  <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-steel" />
                  <input className="admin-input !px-11" type={showPassword ? 'text' : 'password'} autoComplete="current-password" value={form.password} onChange={(e) => { setForm({ ...form, password: e.target.value }); setError(''); }} required />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-steel hover:text-charcoal" aria-label={showPassword ? 'Hide password' : 'Show password'}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </span>
              </label>
              <button className="btn-primary w-full justify-center" type="submit">Sign in</button>
            </form>
            <p className="mt-6 text-xs text-steel text-center">Demo access: admin / 123456</p>
          </div>
        </div>
      </section>
    </main>
  );
}

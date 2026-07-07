import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-charcoal-dark text-white flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p className="text-primary text-sm font-bold tracking-[0.3em] uppercase mb-4">Error 404</p>
        <h1 className="text-5xl sm:text-6xl font-bold mb-5">Page not found</h1>
        <p className="text-steel-light mb-8">The page you’re looking for may have moved or no longer exists.</p>
        <Link to="/" className="btn-primary"><FaArrowLeft size={13} /> Back to home</Link>
      </div>
    </main>
  );
}

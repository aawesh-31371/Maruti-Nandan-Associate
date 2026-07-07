import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import PageBanner from '../components/PageBanner';
import { useData } from '../context/DataContext';
import { companyInfo } from '../data/defaultData';

export default function Contact() {
  const { addMessage } = useData();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Invalid email';
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    addMessage(form);
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    setErrors({});
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="Let's discuss your next infrastructure requirement"
        bgImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
      />

      <section className="section-padding bg-white contact-page">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-charcoal-dark mb-6 font-[var(--font-heading)]">Get in Touch</h2>
                <p className="text-steel leading-relaxed mb-8">
                  Ready to plan a telecom, water, civil, or energy infrastructure assignment? Contact us with your scope and our team will help with the next steps.
                </p>

                <div className="contact-info-list space-y-6">
                  {[
                    { icon: <FaMapMarkerAlt />, title: 'Office Address', lines: [companyInfo.address] },
                    { icon: <FaPhoneAlt />, title: 'Phone Numbers', lines: companyInfo.phone },
                    { icon: <FaEnvelope />, title: 'Email', lines: [companyInfo.email] },
                    { icon: <FaClock />, title: 'Working Hours', lines: [
                      `Mon-Fri: ${companyInfo.workingHours.weekdays}`,
                      `Sat: ${companyInfo.workingHours.saturday}`,
                      `Sun: ${companyInfo.workingHours.sunday}`,
                    ]},
                  ].map((item, i) => (
                    <div key={i} className="contact-info-item flex gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-charcoal-dark text-sm mb-1">{item.title}</h3>
                        {item.lines.map((line, j) => (
                          <p key={j} className="text-steel text-sm">{line}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="premium-card p-8"
              >
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3"
                  >
                    <FaCheckCircle className="text-green-500 text-xl flex-shrink-0" />
                    <div>
                      <p className="text-green-800 font-semibold text-sm">Message Sent Successfully!</p>
                      <p className="text-green-600 text-xs">We'll get back to you within 24 hours.</p>
                    </div>
                  </motion.div>
                )}

                <h2 className="text-2xl font-bold text-charcoal-dark mb-6 font-[var(--font-heading)]">Send Us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-steel-dark uppercase tracking-wider mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Kuber Nath Rai"
                        className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-400' : 'border-gray-200'} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm`}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-steel-dark uppercase tracking-wider mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-400' : 'border-gray-200'} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-steel-dark uppercase tracking-wider mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 8175082179"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-steel-dark uppercase tracking-wider mb-2">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="Infrastructure Work Inquiry"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-steel-dark uppercase tracking-wider mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your site requirement..."
                      className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-400' : 'border-gray-200'} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button type="submit" className="btn-primary text-base">
                    <FaPaperPlane size={14} /> Send Message
                  </button>
                </form>
              </motion.div>
            </div>
          </div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 rounded-2xl overflow-hidden h-[400px] bg-gray-100"
          >
            <iframe
              src="https://www.google.com/maps?q=165%2F1%20Koylaghat%2C%20Miyapura%2C%20Ghazipur%2C%20Uttar%20Pradesh%20233001&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </>
  );
}

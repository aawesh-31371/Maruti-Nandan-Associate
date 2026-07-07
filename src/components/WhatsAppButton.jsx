import { FaWhatsapp } from 'react-icons/fa';
import { companyInfo } from '../data/defaultData';

export default function WhatsAppButton() {
  const url = `https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}?text=Hello! I'm interested in your construction services.`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}

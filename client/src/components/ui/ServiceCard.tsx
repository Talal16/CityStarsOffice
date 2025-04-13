import { motion } from 'framer-motion';
import { Link } from 'wouter';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  link?: string;
  delay?: number;
}

const ServiceCard = ({ icon, title, description, link = '/services', delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <div className="h-2 bg-secondary"></div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center text-white mr-4">
            <i className={`fas ${icon} text-xl`}></i>
          </div>
          <h3 className="font-bold text-xl text-primary">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link href={link}>
          <a className="text-primary hover:text-primary-dark font-medium inline-flex items-center">
            التفاصيل
            <i className="fas fa-arrow-left mr-2 text-sm"></i>
          </a>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;

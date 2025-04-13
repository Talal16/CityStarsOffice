import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <motion.div 
      className="bg-gray-50 p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <div className="bg-primary-light inline-block p-3 rounded-full text-white mb-4">
        <i className={`fas ${icon} text-2xl`}></i>
      </div>
      <h3 className="font-bold text-xl mb-2 text-primary">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;

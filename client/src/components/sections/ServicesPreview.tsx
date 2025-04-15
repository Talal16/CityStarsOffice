import { motion } from 'framer-motion';
import { Link } from 'wouter';
import SectionTitle from '../ui/section-title';
import ServiceCard from '../ui/ServiceCard';
import { services } from '@/lib/data';

const ServicesPreview = () => {
  // Show only first 3 services in preview
  const previewServices = services.slice(0, 3);
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="خدماتنا"
          subtitle="نقدم مجموعة متكاملة من خدمات التوثيق الرسمية والقانونية لتلبية احتياجاتكم المختلفة"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewServices.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index}
            />
          ))}
        </div>

        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/CityStarsOffice/services">
            <a className="inline-block bg-primary hover:bg-primary-dark text-white font-medium py-2 px-6 rounded-md transition duration-300">
              عرض جميع الخدمات
              <i className="fas fa-arrow-left mr-2"></i>
            </a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;

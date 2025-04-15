import { motion } from 'framer-motion';
import { Link } from 'wouter';
import SectionTitle from '../ui/section-title';
import FeatureCard from '../ui/feature-card';

const AboutPreview = () => {
  const features = [
    {
      icon: 'fa-shield-alt',
      title: 'موثوقية تامة',
      description: 'نلتزم بأعلى معايير الأمان والدقة في جميع إجراءات التوثيق لضمان حماية حقوقك'
    },
    {
      icon: 'fa-bolt',
      title: 'سرعة الإنجاز',
      description: 'نسعى دائماً لتقديم خدمات سريعة وفعالة مع الحفاظ على الجودة العالية في كل التفاصيل'
    },
    {
      icon: 'fa-users',
      title: 'خدمة متميزة',
      description: 'فريقنا من الموظفين المحترفين مستعد دائماً لتقديم خدمة متميزة تلبي احتياجاتك'
    }
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="نبذة عن مكتبنا"
          subtitle="مكتب توثيق سيتي ستارز هو جزء من مصلحة الشهر العقاري والتوثيق، ويعمل ضمن مبادرة مصر الرقمية لتقديم خدمات التوثيق الرسمية بشكل حديث وفعال."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index}
            />
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link href="/CityStarsOffice/about">
            <a className="inline-block bg-primary hover:bg-primary-dark text-white font-medium py-2 px-6 rounded-md transition duration-300">
              المزيد عن المكتب
              <i className="fas fa-arrow-left mr-2"></i>
            </a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;

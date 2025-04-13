import { motion } from 'framer-motion';
import { useEffect } from 'react';
import SectionTitle from '@/components/ui/section-title';
import FeatureCard from '@/components/ui/feature-card';

const About = () => {
  useEffect(() => {
    document.title = "مكتب توثيق سيتي ستارز | عن المكتب";
    window.scrollTo(0, 0);
  }, []);
  
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
    },
    {
      icon: 'fa-certificate',
      title: 'جودة عالية',
      description: 'نعمل وفقاً لأعلى معايير الجودة المحلية والدولية في مجال التوثيق القانوني'
    },
    {
      icon: 'fa-user-tie',
      title: 'موظفون محترفون',
      description: 'فريقنا مكون من خبراء قانونيين وموظفين حكوميين مدربين على أعلى مستوى'
    },
    {
      icon: 'fa-laptop',
      title: 'أنظمة رقمية حديثة',
      description: 'نستخدم أحدث التقنيات الرقمية المتطورة لضمان دقة وسرعة المعاملات'
    }
  ];
  
  return (
    <div className="pt-8 pb-16">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="عن مكتب توثيق سيتي ستارز"
          subtitle="نبذة تفصيلية عن المكتب ودوره ضمن مصلحة الشهر العقاري والتوثيق"
        />
        
        <div className="max-w-3xl mx-auto mb-16">
          <motion.div
            className="bg-white rounded-lg shadow-md p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-4 border-r-4 border-secondary pr-3">من نحن</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              يعد مكتب توثيق سيتي ستارز أحد المكاتب الحكومية التابعة لمصلحة الشهر العقاري والتوثيق بوزارة العدل المصرية. 
              تم تأسيس المكتب في عام 2018 كجزء من مبادرة الدولة للتوسع في تقديم الخدمات الحكومية في الأماكن ذات الكثافة السكانية والمراكز التجارية.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              يهدف المكتب إلى تقديم خدمات التوثيق بشكل متميز وميسر للمواطنين، ويعمل جاهدًا على تسهيل الإجراءات وتبسيطها 
              بما يتماشى مع رؤية مصر للتحول الرقمي وخطة التطوير الحكومي.
            </p>
          </motion.div>
          
          <motion.div
            className="bg-white rounded-lg shadow-md p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-4 border-r-4 border-secondary pr-3">رؤيتنا ورسالتنا</h3>
            <div className="mb-6">
              <h4 className="text-xl font-bold text-primary-light mb-2">رؤيتنا</h4>
              <p className="text-gray-700 leading-relaxed">
                أن نكون المثال الأمثل لمكاتب التوثيق الحكومية المتميزة في تقديم الخدمة وتطبيق أعلى معايير الجودة والكفاءة والدقة.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-primary-light mb-2">رسالتنا</h4>
              <p className="text-gray-700 leading-relaxed">
                تقديم خدمات توثيق موثوقة وسريعة ودقيقة بما يحقق أعلى درجات الرضا لدى المواطنين، 
                والمساهمة في استقرار المعاملات القانونية وحماية حقوق أطرافها.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            className="bg-white rounded-lg shadow-md p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-4 border-r-4 border-secondary pr-3">التحول الرقمي ومبادرة مصر الرقمية</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              يعمل مكتب توثيق سيتي ستارز وفق خطة التحول الرقمي التي تتبناها وزارة العدل ومصلحة الشهر العقاري، 
              ويشارك بفاعلية في مبادرة مصر الرقمية من خلال ميكنة الخدمات وربطها بقواعد البيانات المركزية.
            </p>
            <p className="text-gray-700 leading-relaxed">
              تتيح هذه الميكنة سرعة إنجاز المعاملات ودقتها، وإمكانية حجز المواعيد إلكترونيًا، 
              مما يوفر الوقت والجهد على المواطنين ويعزز كفاءة العمل داخل المكتب.
            </p>
          </motion.div>
          
          <motion.div
            className="bg-white rounded-lg shadow-md p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-4 border-r-4 border-secondary pr-3">إنجازاتنا</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>خدمة أكثر من 50,000 مواطن سنويًا</li>
              <li>تقليص زمن الانتظار بنسبة 60% مقارنة بالأنظمة التقليدية</li>
              <li>تكامل كامل مع منظومة الشهر العقاري الرقمية</li>
              <li>حصول المكتب على تقييم متميز في مؤشرات الأداء الحكومي</li>
              <li>تدريب الموظفين على أحدث نظم التوثيق الإلكتروني</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              كما يسعى المكتب باستمرار لتطوير خدماته وإضافة خدمات جديدة تتماشى مع احتياجات المواطنين والتطور التكنولوجي.
            </p>
          </motion.div>
        </div>
        
        <h3 className="text-2xl font-bold text-primary mb-6 text-center">مميزات التعامل مع مكتبنا</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
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
      </div>
    </div>
  );
};

export default About;

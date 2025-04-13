import { motion } from 'framer-motion';
import { useEffect } from 'react';
import SectionTitle from '@/components/ui/section-title';
import { services } from '@/lib/data';

const Services = () => {
  useEffect(() => {
    document.title = "مكتب توثيق سيتي ستارز | الخدمات";
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="pt-8 pb-16">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="خدماتنا"
          subtitle="نقدم مجموعة شاملة من خدمات التوثيق الاحترافية لتلبية احتياجاتكم المختلفة"
        />
        
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md mb-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-primary mb-4">نبذة عن خدماتنا</h3>
          <p className="text-gray-700 mb-4">
            تتنوع خدمات مكتب التوثيق لتغطي كافة احتياجات المواطنين في مجال توثيق المستندات الرسمية والقانونية. 
            يقوم المكتب بإضفاء الصبغة الرسمية على المحررات وتسجيلها وحفظها وفقاً للقوانين واللوائح المنظمة.
          </p>
          <p className="text-gray-700 mb-6">
            يلتزم المكتب بتقديم الخدمات بأعلى معايير الدقة والسرعة، مع ضمان سلامة الإجراءات وصحتها القانونية.
          </p>
          
          <div className="flex justify-center">
            <a 
              href="https://www.digital.gov.eg" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-secondary hover:bg-secondary-dark text-primary font-bold py-3 px-6 rounded-md transition duration-300 inline-flex items-center"
            >
              <i className="fas fa-calendar-alt ml-2"></i>
              حجز موعد للحصول على الخدمات
            </a>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-2 bg-secondary"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center text-white mr-4">
                    <i className={`fas ${service.icon} text-xl`}></i>
                  </div>
                  <h3 className="font-bold text-xl text-primary">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="space-y-3">
                  <h4 className="font-bold text-primary-light text-lg mb-2">المستندات المطلوبة:</h4>
                  <ul className="list-inside space-y-1 text-gray-700">
                    {service.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start">
                        <i className="fas fa-check-circle text-green-600 ml-2 mt-1 flex-shrink-0"></i>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {service.note && (
                  <div className="mt-4 bg-gray-50 p-3 rounded-md text-sm text-gray-600">
                    <i className="fas fa-info-circle ml-1 text-primary"></i>
                    {service.note}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="bg-primary text-white p-8 rounded-lg shadow-md max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-xl font-bold mb-6 border-r-4 border-secondary pr-4">إرشادات هامة</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-3 flex items-center">
                <i className="fas fa-exclamation-circle ml-2"></i>
                نصائح قبل زيارة المكتب
              </h4>
              <ul className="list-disc list-inside space-y-2 mr-2">
                <li>تأكد من جلب جميع المستندات المطلوبة</li>
                <li>احضر قبل الموعد بـ 15 دقيقة</li>
                <li>تأكد من سريان مفعول البطاقة الشخصية</li>
                <li>احرص على حضور جميع الأطراف المعنية</li>
                <li>اصطحب نسخ إضافية من المستندات</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-3 flex items-center">
                <i className="fas fa-coins ml-2"></i>
                الرسوم والمدفوعات
              </h4>
              <ul className="list-disc list-inside space-y-2 mr-2">
                <li>تختلف الرسوم حسب نوع الخدمة والمعاملة</li>
                <li>يمكن الدفع نقداً أو بالبطاقات البنكية</li>
                <li>يتم إصدار إيصال رسمي بجميع المدفوعات</li>
                <li>بعض المعاملات تتطلب دمغات قانونية</li>
                <li>للاستعلام عن الرسوم اتصل بالمكتب مسبقاً</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;

import { motion } from 'framer-motion';
import { Link } from 'wouter';
import SectionTitle from '../ui/section-title';

const LocationPreview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="موقع المكتب"
          subtitle="يقع مكتب التوثيق في موقع استراتيجي يسهل الوصول إليه من مختلف أنحاء القاهرة"
        />

        <motion.div 
          className="bg-gray-50 p-6 rounded-lg shadow-md mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="aspect-w-16 aspect-h-9 mb-6">
            <div className="w-full h-96 bg-gray-200 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <i className="fas fa-map-marker-alt text-4xl text-accent mb-2"></i>
                <span className="font-semibold">خريطة الموقع</span>
              </div>
              <div className="absolute inset-0 w-full h-full object-cover opacity-30 bg-gray-300"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 bg-white rounded-md shadow-sm">
              <div className="flex items-center mb-3">
                <div className="bg-primary rounded-full w-10 h-10 flex items-center justify-center text-white ml-3">
                  <i className="fas fa-map-marked-alt"></i>
                </div>
                <h3 className="font-bold text-primary">العنوان التفصيلي</h3>
              </div>
              <p className="text-gray-600">مول سيتي ستارز، مدينة نصر، القاهرة – الطابق الأول بجوار المدخل الرئيسي</p>
            </div>

            <div className="p-4 bg-white rounded-md shadow-sm">
              <div className="flex items-center mb-3">
                <div className="bg-primary rounded-full w-10 h-10 flex items-center justify-center text-white ml-3">
                  <i className="fas fa-subway"></i>
                </div>
                <h3 className="font-bold text-primary">المواصلات العامة</h3>
              </div>
              <p className="text-gray-600">محطة مترو "ستاد القاهرة" على بعد 15 دقيقة سيراً، أو استخدام الأتوبيس رقم 257</p>
            </div>

            <div className="p-4 bg-white rounded-md shadow-sm">
              <div className="flex items-center mb-3">
                <div className="bg-primary rounded-full w-10 h-10 flex items-center justify-center text-white ml-3">
                  <i className="fas fa-car"></i>
                </div>
                <h3 className="font-bold text-primary">موقف السيارات</h3>
              </div>
              <p className="text-gray-600">يتوفر موقف سيارات في مول سيتي ستارز، موقف مخصص للزوار بالطابق الثاني والثالث</p>
            </div>

            <div className="p-4 bg-white rounded-md shadow-sm">
              <div className="flex items-center mb-3">
                <div className="bg-primary rounded-full w-10 h-10 flex items-center justify-center text-white ml-3">
                  <i className="fas fa-clock"></i>
                </div>
                <h3 className="font-bold text-primary">أوقات العمل</h3>
              </div>
              <p className="text-gray-600">الأحد إلى الخميس: 9 صباحاً - 3 عصراً<br/>الجمعة والسبت: مغلق</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/location">
            <a className="inline-block bg-primary hover:bg-primary-dark text-white font-medium py-2 px-6 rounded-md transition duration-300">
              بيانات الموقع التفصيلية
              <i className="fas fa-arrow-left mr-2"></i>
            </a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationPreview;

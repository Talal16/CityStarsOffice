import { motion } from 'framer-motion';
import ContactForm from '../ui/ContactForm';

const ContactSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row">
            <motion.div 
              className="md:w-1/2 mb-8 md:mb-0 md:pl-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-primary mb-6">تواصل معنا</h2>
              <p className="text-gray-600 mb-8">نسعد بالرد على استفساراتكم وتقديم كافة المعلومات التي تحتاجونها، يمكنكم التواصل معنا من خلال:</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-light rounded-full w-10 h-10 flex items-center justify-center text-white ml-4 flex-shrink-0">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-1">العنوان</h3>
                    <p className="text-gray-600">مول سيتي ستارز، مدينة نصر، القاهرة<br/>الطابق الأول بجوار المدخل الرئيسي</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-light rounded-full w-10 h-10 flex items-center justify-center text-white ml-4 flex-shrink-0">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-1">الهاتف</h3>
                    <p className="text-gray-600 dir-ltr text-right">+20 2 24000123</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-light rounded-full w-10 h-10 flex items-center justify-center text-white ml-4 flex-shrink-0">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-1">البريد الإلكتروني</h3>
                    <p className="text-gray-600">info@citystars-notary.gov.eg</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-light rounded-full w-10 h-10 flex items-center justify-center text-white ml-4 flex-shrink-0">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-1">ساعات العمل</h3>
                    <p className="text-gray-600">الأحد إلى الخميس: 9 صباحاً - 3 عصراً<br/>الجمعة والسبت: مغلق</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <div className="md:w-1/2">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

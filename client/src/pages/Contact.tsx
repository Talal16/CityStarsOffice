import { motion } from 'framer-motion';
import { useEffect } from 'react';
import SectionTitle from '@/components/ui/section-title';
import ContactForm from '@/components/ui/ContactForm';

const Contact = () => {
  useEffect(() => {
    document.title = "مكتب توثيق سيتي ستارز | تواصل معنا";
    window.scrollTo(0, 0);
  }, []);
  
  const contactInfo = [
    {
      title: "العنوان",
      icon: "fa-map-marker-alt",
      content: "مول سيتي ستارز، مدينة نصر، القاهرة\nالطابق الأول بجوار المدخل الرئيسي"
    },
    {
      title: "الهاتف",
      icon: "fa-phone-alt",
      content: "+20 2 24000123",
      dir: "ltr"
    },
    {
      title: "البريد الإلكتروني",
      icon: "fa-envelope",
      content: "info@citystars-notary.gov.eg"
    },
    {
      title: "ساعات العمل",
      icon: "fa-clock",
      content: "الأحد إلى الخميس: 9 صباحاً - 3 عصراً\nالجمعة والسبت: مغلق"
    }
  ];
  
  const socialLinks = [
    { name: "Facebook", icon: "fab fa-facebook-f", url: "#" },
    { name: "Twitter", icon: "fab fa-twitter", url: "#" },
    { name: "Instagram", icon: "fab fa-instagram", url: "#" },
    { name: "YouTube", icon: "fab fa-youtube", url: "#" },
    { name: "Telegram", icon: "fab fa-telegram-plane", url: "#" }
  ];
  
  return (
    <div className="pt-8 pb-16">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="تواصل معنا"
          subtitle="يسعدنا التواصل معكم والإجابة على استفساراتكم وتلقي ملاحظاتكم"
        />
        
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row">
            <motion.div 
              className="md:w-1/2 mb-8 md:mb-0 md:pl-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-lg shadow-md p-8 h-full">
                <h3 className="text-2xl font-bold text-primary mb-6">معلومات الاتصال</h3>
                
                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <div className="flex items-start" key={index}>
                      <div className="bg-primary-light rounded-full w-10 h-10 flex items-center justify-center text-white ml-4 flex-shrink-0">
                        <i className={`fas ${info.icon}`}></i>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-primary mb-1">{info.title}</h3>
                        <p className={`text-gray-600 ${info.dir ? `dir-${info.dir}` : ''} ${info.dir === 'ltr' ? 'text-right' : ''}`}>
                          {info.content.split('\n').map((line, i) => (
                            <span key={i} className="block">{line}</span>
                          ))}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <h4 className="font-bold text-lg text-primary mb-4">تابعنا على وسائل التواصل الاجتماعي</h4>
                <div className="flex space-x-4 space-x-reverse">
                  {socialLinks.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url} 
                      className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition duration-300"
                      aria-label={link.name}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={link.icon}></i>
                    </a>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-gray-50 rounded-md border-r-4 border-secondary">
                  <h4 className="font-bold text-primary mb-2">خدمة الدعم عبر واتساب</h4>
                  <p className="text-gray-600 mb-3 text-sm">
                    يمكنكم التواصل مع فريق الدعم على رقم الواتساب التالي للاستفسارات العاجلة:
                  </p>
                  <a 
                    href="https://wa.me/201234567890" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-green-500 text-white py-2 px-4 rounded-md inline-flex items-center hover:bg-green-600 transition duration-300"
                  >
                    <i className="fab fa-whatsapp ml-2"></i>
                    <span className="dir-ltr">+20 123 456 7890</span>
                  </a>
                </div>
              </div>
            </motion.div>
            
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-full"
              >
                <ContactForm />
              </motion.div>
            </div>
          </div>
          
          <motion.div
            className="mt-10 bg-white rounded-lg shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="aspect-w-16 aspect-h-9">
              <div className="w-full h-96 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <i className="fas fa-map-marked-alt text-5xl text-accent"></i>
                </div>
                <div className="absolute inset-0 w-full h-full object-cover opacity-30 bg-gray-300"></div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary mb-4">الوصول إلينا</h3>
              <p className="text-gray-700 mb-4">
                يقع مكتبنا في مول سيتي ستارز بمدينة نصر، أحد أكبر المراكز التجارية في القاهرة، مما يجعله سهل الوصول 
                من مختلف أنحاء المدينة عبر وسائل المواصلات المتنوعة.
              </p>
              <div className="flex justify-center">
                <a 
                  href="https://goo.gl/maps/yourMapLink" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-6 rounded-md transition duration-300 inline-flex items-center"
                >
                  <i className="fas fa-directions ml-2"></i>
                  الحصول على الاتجاهات
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="mt-10 p-6 bg-primary text-white rounded-lg shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-xl font-bold mb-2">هل لديك استفسار عاجل؟</h3>
                <p>يمكنك الاتصال بنا مباشرة على الخط الساخن</p>
              </div>
              <div className="text-center">
                <p className="text-sm mb-1">الخط الساخن</p>
                <a 
                  href="tel:19123" 
                  className="bg-white text-primary text-2xl font-bold py-2 px-8 rounded-lg inline-block hover:bg-gray-100 transition duration-300"
                >
                  19123
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

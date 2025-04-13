import { motion } from 'framer-motion';

const BookingSection = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">كيفية الحجز الإلكتروني</h2>
            <p className="text-lg opacity-90 mb-6">يمكنك الآن حجز موعد في مكتب التوثيق بكل سهولة من خلال بوابة مصر الرقمية</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="bg-secondary text-primary rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 ml-3 font-bold">1</div>
                <div>
                  <h3 className="font-bold text-xl mb-1">التسجيل في بوابة مصر الرقمية</h3>
                  <p className="opacity-90">قم بإنشاء حساب على بوابة مصر الرقمية أو تسجيل الدخول إذا كان لديك حساب</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-secondary text-primary rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 ml-3 font-bold">2</div>
                <div>
                  <h3 className="font-bold text-xl mb-1">اختيار خدمة "أرغب في عمل توكيل"</h3>
                  <p className="opacity-90">من قائمة الخدمات المتاحة، قم باختيار الخدمة المطلوبة</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-secondary text-primary rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 ml-3 font-bold">3</div>
                <div>
                  <h3 className="font-bold text-xl mb-1">تحديد الموعد والفرع</h3>
                  <p className="opacity-90">اختر مكتب توثيق سيتي ستارز ثم حدد الوقت المناسب لك</p>
                </div>
              </li>
            </ul>
            <a 
              href="https://www.digital.gov.eg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-secondary hover:bg-secondary-dark text-primary font-bold py-3 px-6 rounded-md transition duration-300"
            >
              الحجز الآن
              <i className="fas fa-external-link-alt mr-2"></i>
            </a>
          </motion.div>
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-lg shadow-xl max-w-md w-full bg-primary-light/40 h-[300px] flex items-center justify-center">
              <svg className="w-32 h-32 text-white opacity-70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 2V6M8 2V6M3 10H21M8 14H10M12 14H14M16 14H18M8 18H10M12 18H14M16 18H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;

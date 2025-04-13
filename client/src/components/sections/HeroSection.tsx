import { motion } from 'framer-motion';
import { Link } from 'wouter';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-l from-primary to-primary-dark text-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              مرحباً بكم في مكتب توثيق سيتي ستارز
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl mb-6 opacity-90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              الخدمة الموثوقة والسريعة مع التزامنا بأعلى معايير الدقة والاحترافية
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="/booking">
                <a className="bg-secondary hover:bg-secondary-dark text-primary font-bold py-3 px-6 rounded-md text-center transition duration-300 shadow-lg">
                  حجز موعد إلكتروني
                  <i className="fas fa-calendar-alt mr-2"></i>
                </a>
              </Link>
              <Link href="/services">
                <a className="bg-white hover:bg-gray-100 text-primary font-bold py-3 px-6 rounded-md text-center transition duration-300">
                  تعرف على خدماتنا
                  <i className="fas fa-arrow-left mr-2"></i>
                </a>
              </Link>
            </motion.div>
          </div>
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-lg shadow-xl w-full max-w-md bg-primary-light/50 h-[300px] flex items-center justify-center">
              <svg className="w-32 h-32 text-white opacity-70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 12V8H4V12M20 12V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V12M20 12H4M8 15H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 4V8M8 4L10 8M16 4L14 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

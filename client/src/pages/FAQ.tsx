import { motion } from 'framer-motion';
import { useEffect } from 'react';
import SectionTitle from '@/components/ui/section-title';
import FAQItem from '@/components/ui/FAQItem';
import { faqs } from '@/lib/data';

const FAQ = () => {
  useEffect(() => {
    document.title = "مكتب توثيق سيتي ستارز | الأسئلة الشائعة";
    window.scrollTo(0, 0);
  }, []);
  
  const faqCategories = [
    {
      title: "الإجراءات والمستندات",
      icon: "fa-file-alt",
      faqs: faqs.filter(faq => faq.category === "procedures")
    },
    {
      title: "التوكيلات",
      icon: "fa-handshake",
      faqs: faqs.filter(faq => faq.category === "powers")
    },
    {
      title: "الرسوم والمدفوعات",
      icon: "fa-money-bill-wave",
      faqs: faqs.filter(faq => faq.category === "fees")
    },
    {
      title: "الحجز والمواعيد",
      icon: "fa-calendar-alt",
      faqs: faqs.filter(faq => faq.category === "booking")
    },
    {
      title: "أسئلة عامة",
      icon: "fa-question-circle",
      faqs: faqs.filter(faq => faq.category === "general")
    }
  ];
  
  return (
    <div className="pt-8 pb-16">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="الأسئلة الشائعة"
          subtitle="إجابات على أكثر الاستفسارات تكراراً حول خدمات مكتب التوثيق"
        />
        
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="bg-white rounded-lg shadow-md p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-700 text-lg mb-6">
              نقدم في هذه الصفحة إجابات على الأسئلة الأكثر شيوعاً حول الخدمات التي يقدمها مكتب توثيق سيتي ستارز، 
              والإجراءات المتبعة، والمستندات المطلوبة، لمساعدتكم وتسهيل معاملاتكم.
            </p>
            
            <div className="bg-primary-light/10 p-4 rounded-md border-r-4 border-primary">
              <div className="flex items-start">
                <i className="fas fa-info-circle text-primary text-2xl ml-3 mt-1"></i>
                <p className="text-gray-700">
                  إذا لم تجد إجابة على استفسارك، يمكنك التواصل معنا مباشرة من خلال{" "}
                  <a href="/contact" className="text-primary hover:underline font-bold">صفحة التواصل</a>، 
                  أو الاتصال بخدمة العملاء على الرقم{" "}
                  <span className="dir-ltr font-bold inline-block">+20 2 24000123</span>.
                </p>
              </div>
            </div>
          </motion.div>
          
          <div className="space-y-8">
            {faqCategories.map((category, catIndex) => (
              <div key={catIndex}>
                <motion.div
                  className="flex items-center mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: catIndex * 0.1 }}
                >
                  <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center text-white ml-3">
                    <i className={`fas ${category.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-primary">{category.title}</h3>
                </motion.div>
                
                <motion.div
                  className="bg-white rounded-lg shadow-md overflow-hidden mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: catIndex * 0.1 + 0.1 }}
                >
                  {category.faqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
          
          <motion.div
            className="bg-primary text-white p-6 rounded-lg shadow-md mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <i className="fas fa-lightbulb ml-2"></i>
              هل تحتاج إلى مساعدة شخصية؟
            </h3>
            <p className="mb-6">
              يسعدنا مساعدتك في الإجابة على استفساراتك الخاصة أو تقديم المشورة المناسبة لحالتك. 
              يمكنك التواصل معنا مباشرة من خلال القنوات التالية:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a 
                href="/contact" 
                className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-4 rounded-md transition duration-300 text-center flex justify-center items-center"
              >
                <i className="fas fa-envelope ml-2"></i>
                نموذج الاتصال
              </a>
              <a 
                href="https://t.me/citystarsnotary" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-secondary hover:bg-secondary-dark text-primary font-bold py-3 px-4 rounded-md transition duration-300 text-center flex justify-center items-center"
              >
                <i className="fab fa-telegram-plane ml-2"></i>
                محادثة مباشرة
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

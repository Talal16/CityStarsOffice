import { motion } from 'framer-motion';
import { useEffect } from 'react';
import SectionTitle from '@/components/ui/section-title';

const LegalReferences = () => {
  useEffect(() => {
    document.title = "مكتب توثيق سيتي ستارز | المراجع القانونية";
    window.scrollTo(0, 0);
  }, []);
  
  const laws = [
    {
      title: "القانون المدني المصري",
      number: "القانون رقم 131 لسنة 1948",
      description: "ينظم العلاقات المدنية بين الأفراد، ويتضمن أحكاماً خاصة بالعقود والالتزامات والإثبات.",
      link: "#",
      relatedArticles: "المواد 89-103 (الأهلية)، المواد 104-144 (العقد)، المواد 392-444 (الإثبات)"
    },
    {
      title: "قانون الإثبات في المواد المدنية والتجارية",
      number: "القانون رقم 25 لسنة 1968",
      description: "ينظم طرق الإثبات وحجية المحررات الرسمية والعرفية، ويحدد اختصاصات الموثق.",
      link: "#",
      relatedArticles: "المواد 10-13 (المحررات الرسمية)، المواد 14-29 (المحررات العرفية)، المادة 30 (التصديق على التوقيعات)"
    },
    {
      title: "قانون التوثيق",
      number: "القانون رقم 68 لسنة 1947",
      description: "ينظم أعمال التوثيق والإجراءات المتبعة في إضفاء الصفة الرسمية على المحررات.",
      link: "#",
      relatedArticles: "المادة 1 (اختصاصات الموثق)، المادة 15 (إثبات التاريخ)، المادة 20 (سجلات التوثيق)"
    },
    {
      title: "قانون الشهر العقاري",
      number: "القانون رقم 114 لسنة 1946",
      description: "ينظم إجراءات تسجيل التصرفات العقارية وشهرها لإعلام الكافة بها وترتيب الآثار القانونية.",
      link: "#",
      relatedArticles: "المادة 1 (وجوب الشهر)، المادة 9 (شروط المحررات)، المادة 12 (إجراءات الشهر)"
    },
    {
      title: "قانون المرافعات المدنية والتجارية",
      number: "القانون رقم 13 لسنة 1968",
      description: "يتضمن أحكاماً خاصة بالإعلانات القضائية والتوكيلات القضائية وإجراءات رفع الدعاوى.",
      link: "#",
      relatedArticles: "المادة 72 (التوكيل بالخصومة)، المادة 73 (سلطات الوكيل)، المادة 75 (إثبات الوكالة)"
    },
    {
      title: "قانون الرسوم القضائية",
      number: "القانون رقم 90 لسنة 1944",
      description: "يحدد الرسوم المستحقة على المحررات والإجراءات التوثيقية المختلفة.",
      link: "#",
      relatedArticles: "المادة 5 (رسوم التوثيق)، المادة 14 (الإعفاءات)، المادة 19 (تحصيل الرسوم)"
    }
  ];
  
  const regulations = [
    {
      title: "لائحة قانون التوثيق",
      description: "تحدد بالتفصيل إجراءات التوثيق والمستندات المطلوبة وخطوات العمل في مكاتب التوثيق.",
      link: "#"
    },
    {
      title: "تعليمات مصلحة الشهر العقاري",
      description: "دليل إجرائي للموثقين والموظفين العاملين بمكاتب التوثيق لتوحيد إجراءات العمل.",
      link: "#"
    },
    {
      title: "قرارات وزير العدل المنظمة للتوثيق",
      description: "مجموعة القرارات الوزارية التي تنظم آليات العمل وتعدل بعض الإجراءات في مكاتب التوثيق.",
      link: "#"
    }
  ];
  
  const resources = [
    {
      title: "دليل إجراءات التوثيق",
      description: "دليل شامل يوضح كافة إجراءات التوثيق خطوة بخطوة والمستندات المطلوبة لكل معاملة.",
      fileType: "PDF",
      size: "2.5 MB",
      link: "#"
    },
    {
      title: "نماذج التوكيلات الرسمية",
      description: "نماذج استرشادية لمختلف أنواع التوكيلات (عام - خاص - قضائي - إداري).",
      fileType: "PDF",
      size: "1.8 MB",
      link: "#"
    },
    {
      title: "نماذج عقود البيع والإيجار",
      description: "نماذج استرشادية لصياغة عقود البيع والإيجار والمشاركة وغيرها.",
      fileType: "DOCX",
      size: "1.2 MB",
      link: "#"
    },
    {
      title: "جدول رسوم التوثيق",
      description: "قائمة تفصيلية بالرسوم المستحقة على مختلف أنواع المعاملات في مكاتب التوثيق.",
      fileType: "PDF",
      size: "850 KB",
      link: "#"
    }
  ];
  
  return (
    <div className="pt-8 pb-16">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="المراجع القانونية"
          subtitle="المصادر والمراجع التشريعية المنظمة لأعمال التوثيق والشهر العقاري"
        />
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white rounded-lg shadow-md p-8 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-4">أهمية المراجع القانونية</h3>
            <p className="text-gray-700 mb-4">
              تعتبر المراجع القانونية الأساس الذي تستند إليه أعمال التوثيق والشهر العقاري، وتحدد الإجراءات الواجب 
              اتباعها والشروط اللازمة لصحة المحررات وإضفاء الصبغة الرسمية عليها.
            </p>
            <p className="text-gray-700">
              نقدم في هذه الصفحة مجموعة من أهم القوانين واللوائح والمراجع التي تنظم أعمال التوثيق في مصر، 
              لتكون دليلاً استرشادياً للمواطنين والمحامين والمتعاملين مع مكاتب التوثيق.
            </p>
          </motion.div>
          
          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-primary text-white p-6">
              <h3 className="text-xl font-bold flex items-center">
                <i className="fas fa-balance-scale ml-3"></i>
                القوانين المنظمة للتوثيق
              </h3>
            </div>
            
            <div className="p-6">
              <div className="space-y-6">
                {laws.map((law, index) => (
                  <motion.div
                    key={index}
                    className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + (index * 0.05) }}
                  >
                    <h4 className="font-bold text-lg text-primary mb-2">{law.title}</h4>
                    <p className="text-gray-500 text-sm mb-2">{law.number}</p>
                    <p className="text-gray-700 mb-3">{law.description}</p>
                    
                    <div className="bg-gray-50 p-3 rounded-md text-sm text-gray-600 mb-3">
                      <strong className="text-primary">المواد ذات الصلة: </strong> 
                      {law.relatedArticles}
                    </div>
                    
                    <a 
                      href={law.link} 
                      className="text-primary hover:text-primary-dark font-medium inline-flex items-center"
                    >
                      <i className="fas fa-external-link-alt ml-1"></i>
                      الاطلاع على القانون كاملاً
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <motion.div
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-primary text-white p-4">
                <h3 className="text-lg font-bold flex items-center">
                  <i className="fas fa-file-contract ml-3"></i>
                  اللوائح والتعليمات
                </h3>
              </div>
              
              <div className="p-6">
                <div className="space-y-6">
                  {regulations.map((reg, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                      <h4 className="font-bold text-primary mb-2">{reg.title}</h4>
                      <p className="text-gray-700 mb-3 text-sm">{reg.description}</p>
                      <a 
                        href={reg.link} 
                        className="text-primary hover:text-primary-dark font-medium inline-flex items-center text-sm"
                      >
                        <i className="fas fa-download ml-1"></i>
                        تحميل
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-primary text-white p-4">
                <h3 className="text-lg font-bold flex items-center">
                  <i className="fas fa-book ml-3"></i>
                  ملفات ونماذج للتحميل
                </h3>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {resources.map((resource, index) => (
                    <div key={index} className="flex bg-gray-50 p-3 rounded-md">
                      <div className="bg-secondary w-12 h-12 rounded-md flex items-center justify-center text-primary ml-3 flex-shrink-0">
                        <i className={`fas fa-file-${resource.fileType === 'PDF' ? 'pdf' : 'word'} text-xl`}></i>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-primary mb-1">{resource.title}</h4>
                        <p className="text-gray-600 text-sm mb-2">{resource.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-500 text-xs">{resource.fileType} • {resource.size}</span>
                          <a 
                            href={resource.link} 
                            className="text-primary hover:text-primary-dark font-medium inline-flex items-center text-sm"
                          >
                            <i className="fas fa-download ml-1"></i>
                            تحميل
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            className="bg-primary text-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6 border-r-4 border-secondary pr-4">روابط خارجية مفيدة</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a 
                href="https://www.jp.gov.eg" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-white/20 p-4 rounded-md transition duration-300 flex items-center"
              >
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center text-primary ml-3 flex-shrink-0">
                  <i className="fas fa-balance-scale"></i>
                </div>
                <div>
                  <h4 className="font-bold">وزارة العدل</h4>
                  <p className="text-sm opacity-80">الموقع الرسمي لوزارة العدل المصرية</p>
                </div>
              </a>
              
              <a 
                href="https://www.cc.gov.eg" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-white/20 p-4 rounded-md transition duration-300 flex items-center"
              >
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center text-primary ml-3 flex-shrink-0">
                  <i className="fas fa-gavel"></i>
                </div>
                <div>
                  <h4 className="font-bold">محكمة النقض</h4>
                  <p className="text-sm opacity-80">مبادئ وأحكام محكمة النقض المصرية</p>
                </div>
              </a>
              
              <a 
                href="https://www.digital.gov.eg" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-white/20 p-4 rounded-md transition duration-300 flex items-center"
              >
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center text-primary ml-3 flex-shrink-0">
                  <i className="fas fa-globe"></i>
                </div>
                <div>
                  <h4 className="font-bold">بوابة مصر الرقمية</h4>
                  <p className="text-sm opacity-80">البوابة الرسمية للخدمات الحكومية الإلكترونية</p>
                </div>
              </a>
              
              <a 
                href="https://www.egypt.gov.eg" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-white/20 p-4 rounded-md transition duration-300 flex items-center"
              >
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center text-primary ml-3 flex-shrink-0">
                  <i className="fas fa-landmark"></i>
                </div>
                <div>
                  <h4 className="font-bold">بوابة الحكومة المصرية</h4>
                  <p className="text-sm opacity-80">البوابة الرسمية للحكومة المصرية</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LegalReferences;

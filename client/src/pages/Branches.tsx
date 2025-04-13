import { motion } from 'framer-motion';
import { useEffect } from 'react';
import SectionTitle from '@/components/ui/section-title';

const Branches = () => {
  useEffect(() => {
    document.title = "مكتب توثيق سيتي ستارز | فروعنا";
    window.scrollTo(0, 0);
  }, []);
  
  const branches = [
    {
      name: "مكتب توثيق مصر الجديدة",
      address: "شارع الميرغني، مصر الجديدة، القاهرة",
      phone: "+20 2 24172050",
      hours: "الأحد - الخميس: 9 صباحاً - 3 عصراً",
      directions: "بجوار نادي هليوبوليس، خلف مستشفى هليوبوليس",
      services: ["توثيق العقود", "التصديق على التوقيعات", "توكيلات", "إثبات التاريخ"]
    },
    {
      name: "مكتب توثيق مدينة نصر",
      address: "شارع عباس العقاد، مدينة نصر، القاهرة",
      phone: "+20 2 24150123",
      hours: "الأحد - الخميس: 9 صباحاً - 3 عصراً",
      directions: "بجوار مبنى المحافظة، أمام نادي السكة الحديد",
      services: ["توثيق العقود", "التصديق على التوقيعات", "توكيلات", "إثبات التاريخ", "توثيق عقود الشركات"]
    },
    {
      name: "مكتب توثيق الدقي",
      address: "شارع التحرير، الدقي، الجيزة",
      phone: "+20 2 33362145",
      hours: "الأحد - الخميس: 9 صباحاً - 3 عصراً",
      directions: "بجوار محطة مترو الدقي، بالقرب من ميدان الدقي",
      services: ["توثيق العقود", "التصديق على التوقيعات", "توكيلات", "إثبات التاريخ"]
    },
    {
      name: "مكتب توثيق المعادي",
      address: "شارع 9، المعادي، القاهرة",
      phone: "+20 2 25261478",
      hours: "الأحد - الخميس: 9 صباحاً - 3 عصراً",
      directions: "بجوار نادي المعادي، خلف مستشفى السلام",
      services: ["توثيق العقود", "التصديق على التوقيعات", "توكيلات", "إثبات التاريخ"]
    },
    {
      name: "مكتب توثيق 6 أكتوبر",
      address: "المحور المركزي، الحي السابع، 6 أكتوبر، الجيزة",
      phone: "+20 2 38874569",
      hours: "الأحد - الخميس: 9 صباحاً - 3 عصراً",
      directions: "بجوار مجمع المحاكم، بالقرب من مول العرب",
      services: ["توثيق العقود", "التصديق على التوقيعات", "توكيلات", "إثبات التاريخ", "تسجيل العقارات"]
    },
    {
      name: "مكتب توثيق التجمع الخامس",
      address: "شارع التسعين الشمالي، التجمع الخامس، القاهرة الجديدة",
      phone: "+20 2 27545890",
      hours: "الأحد - الخميس: 9 صباحاً - 3 عصراً",
      directions: "داخل مبنى القضاء العالي، بالقرب من الجامعة الأمريكية",
      services: ["توثيق العقود", "التصديق على التوقيعات", "توكيلات", "إثبات التاريخ", "توثيق عقود الشركات"]
    }
  ];
  
  return (
    <div className="pt-8 pb-16">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="فروعنا"
          subtitle="تعرف على مكاتب التوثيق التابعة لمصلحة الشهر العقاري والتوثيق في مختلف مناطق القاهرة الكبرى"
        />
        
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md mb-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-primary mb-4">شبكة مكاتب التوثيق</h3>
          <p className="text-gray-700 mb-2">
            تقدم مصلحة الشهر العقاري والتوثيق خدماتها من خلال شبكة واسعة من المكاتب المنتشرة في مختلف أنحاء الجمهورية.
          </p>
          <p className="text-gray-700 mb-6">
            تشمل هذه الصفحة فروع القاهرة الكبرى الرئيسية، ويمكنك الحصول على نفس الخدمات التي يقدمها مكتب سيتي ستارز في أي من هذه المكاتب.
          </p>
          
          <div className="flex justify-center mb-1">
            <a 
              href="https://www.digital.gov.eg" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-secondary hover:bg-secondary-dark text-primary font-bold py-3 px-6 rounded-md transition duration-300 inline-flex items-center"
            >
              <i className="fas fa-map-marked-alt ml-2"></i>
              البحث عن مكاتب التوثيق على الخريطة
            </a>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {branches.map((branch, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-2 bg-secondary"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4 border-r-4 border-primary pr-3">{branch.name}</h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex">
                    <i className="fas fa-map-marker-alt text-primary-light ml-3 mt-1 flex-shrink-0"></i>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">العنوان:</h4>
                      <p className="text-gray-600">{branch.address}</p>
                      <p className="text-gray-600 text-sm italic">{branch.directions}</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <i className="fas fa-phone-alt text-primary-light ml-3 mt-1 flex-shrink-0"></i>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">رقم الهاتف:</h4>
                      <p className="text-gray-600 dir-ltr text-right">{branch.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <i className="fas fa-clock text-primary-light ml-3 mt-1 flex-shrink-0"></i>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">مواعيد العمل:</h4>
                      <p className="text-gray-600">{branch.hours}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">الخدمات المتاحة:</h4>
                  <div className="flex flex-wrap gap-2">
                    {branch.services.map((service, serviceIndex) => (
                      <span 
                        key={serviceIndex}
                        className="bg-gray-100 text-primary-dark text-sm py-1 px-3 rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="mt-12 p-6 bg-primary text-white rounded-lg shadow-md max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <i className="fas fa-info-circle ml-2"></i>
            معلومات هامة
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>يمكنك الحجز في أي من المكاتب المذكورة من خلال بوابة مصر الرقمية</li>
            <li>الخدمات والرسوم موحدة في جميع مكاتب التوثيق التابعة للمصلحة</li>
            <li>يجب التأكد من المستندات المطلوبة قبل الذهاب لأي من المكاتب</li>
            <li>يفضل الاتصال بالمكتب المراد زيارته للتأكد من مواعيد العمل في العطلات الرسمية</li>
            <li>تختلف أوقات الازدحام من مكتب لآخر، ويفضل اختيار الأوقات الصباحية للحصول على خدمة أسرع</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Branches;

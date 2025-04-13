import { motion } from 'framer-motion';
import { useEffect } from 'react';
import SectionTitle from '@/components/ui/section-title';

const Booking = () => {
  useEffect(() => {
    document.title = "مكتب توثيق سيتي ستارز | كيفية الحجز";
    window.scrollTo(0, 0);
  }, []);
  
  const bookingSteps = [
    {
      step: 1,
      title: "التسجيل في بوابة مصر الرقمية",
      description: "قم بإنشاء حساب على بوابة مصر الرقمية أو تسجيل الدخول إذا كان لديك حساب بالفعل.",
      icon: "fa-user-plus",
      note: "يتطلب التسجيل رقم الهاتف وإثبات الهوية"
    },
    {
      step: 2,
      title: "الدخول إلى خدمات وزارة العدل",
      description: "بعد تسجيل الدخول، انتقل إلى قسم خدمات وزارة العدل، ثم اختر خدمات التوثيق.",
      icon: "fa-sign-in-alt",
      note: "يمكنك الوصول مباشرة عبر قسم الخدمات الشائعة"
    },
    {
      step: 3,
      title: "اختيار خدمة (أرغب في عمل توكيل)",
      description: "اختر الخدمة المطلوبة من قائمة الخدمات المتاحة في الشهر العقاري والتوثيق.",
      icon: "fa-clipboard-list",
      note: "تأكد من اختيار نوع التوكيل المناسب لاحتياجاتك"
    },
    {
      step: 4,
      title: "إدخال البيانات المطلوبة",
      description: "قم بإدخال البيانات المطلوبة للخدمة، بما في ذلك بيانات الهوية وتفاصيل المعاملة.",
      icon: "fa-keyboard",
      note: "تأكد من دقة البيانات المدخلة لتجنب رفض الطلب"
    },
    {
      step: 5,
      title: "اختيار المكتب والموعد",
      description: "اختر مكتب توثيق سيتي ستارز من قائمة المكاتب المتاحة، ثم حدد الوقت والتاريخ المناسبين.",
      icon: "fa-calendar-alt",
      note: "المواعيد المتاحة تظهر باللون الأخضر في التقويم"
    },
    {
      step: 6,
      title: "تأكيد الحجز واستلام الإيصال",
      description: "قم بمراجعة بياناتك وتأكيد الحجز، ثم استلام رمز الحجز ورقم الدور.",
      icon: "fa-check-circle",
      note: "احتفظ برقم الحجز معك عند الحضور للمكتب"
    }
  ];
  
  const bookingTips = [
    "احجز موعدك قبل الزيارة بيوم واحد على الأقل",
    "تأكد من توفر جميع المستندات المطلوبة قبل عمل الحجز",
    "التزم بالموعد المحدد، التأخر أكثر من 15 دقيقة قد يؤدي لإلغاء الحجز",
    "احضر مبكراً بحوالي 15 دقيقة قبل موعدك لإنهاء إجراءات التسجيل",
    "للتوكيلات، تأكد من حضور جميع الأطراف المعنية في الموعد المحدد",
    "يمكنك إلغاء الحجز أو تعديله قبل 24 ساعة من الموعد المحدد"
  ];
  
  const requiredDocuments = [
    "بطاقة الرقم القومي سارية المفعول لجميع الأطراف",
    "أصل المستند المراد توثيقه (في حالة إثبات التاريخ أو التصديق على التوقيعات)",
    "المستندات الداعمة حسب نوع المعاملة (مثل شهادة الميلاد، عقد الزواج، الخ)",
    "إيصال سداد الرسوم (إذا كان مطلوباً)"
  ];
  
  return (
    <div className="pt-8 pb-16">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="كيفية الحجز الإلكتروني"
          subtitle="خطوات سهلة للحجز من خلال بوابة مصر الرقمية لضمان تجربة سلسة ومريحة في مكتب التوثيق"
        />
        
        <div className="max-w-4xl mx-auto mb-12">
          <motion.div
            className="bg-white rounded-lg shadow-md p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-6 border-r-4 border-secondary pr-4">خطوات الحجز الإلكتروني</h3>
            
            <div className="space-y-8">
              {bookingSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-secondary text-primary rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1 ml-4 font-bold">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h4 className="font-bold text-xl text-primary">{step.title}</h4>
                      <div className="mr-3 bg-primary-light text-white p-2 rounded-full">
                        <i className={`fas ${step.icon}`}></i>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-1">{step.description}</p>
                    {step.note && (
                      <p className="text-sm text-gray-500 mr-1">
                        <i className="fas fa-info-circle ml-1"></i>
                        {step.note}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 flex justify-center">
              <a 
                href="https://www.digital.gov.eg" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-secondary hover:bg-secondary-dark text-primary font-bold py-3 px-6 rounded-md transition duration-300 inline-flex items-center"
              >
                <i className="fas fa-external-link-alt ml-2"></i>
                الانتقال إلى بوابة مصر الرقمية للحجز
              </a>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <motion.div
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                <i className="fas fa-lightbulb text-secondary ml-2"></i>
                نصائح للحجز
              </h3>
              <ul className="space-y-3">
                {bookingTips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <i className="fas fa-check-circle text-green-600 ml-2 mt-1 flex-shrink-0"></i>
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                <i className="fas fa-file-alt text-secondary ml-2"></i>
                المستندات المطلوبة
              </h3>
              <p className="text-gray-700 mb-4">تأكد من توفر المستندات التالية عند زيارة المكتب:</p>
              <ul className="space-y-3">
                {requiredDocuments.map((doc, index) => (
                  <li key={index} className="flex items-start">
                    <i className="fas fa-file text-primary-light ml-2 mt-1 flex-shrink-0"></i>
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          className="bg-primary text-white p-8 rounded-lg shadow-md max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-xl font-bold mb-6 flex items-center">
            <i className="fas fa-mobile-alt ml-3 text-secondary"></i>
            استخدام تطبيق الهاتف المحمول
          </h3>
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:ml-8 md:w-2/3">
              <p className="mb-4">
                يمكنك أيضًا الحجز من خلال تطبيق "مصر الرقمية" على الهاتف المحمول، والذي يتيح لك:
              </p>
              <ul className="list-disc list-inside space-y-2 mr-6">
                <li>حجز موعد في أي وقت ومن أي مكان</li>
                <li>متابعة حالة الطلب وتلقي إشعارات التذكير</li>
                <li>الوصول إلى سجل معاملاتك السابقة</li>
                <li>الدفع الإلكتروني لرسوم الخدمات</li>
                <li>التواصل المباشر مع فريق الدعم</li>
              </ul>
              <div className="mt-6">
                <a 
                  href="#"
                  className="bg-white text-primary hover:bg-gray-100 font-bold py-2 px-4 rounded-md transition duration-300 inline-flex items-center ml-4"
                >
                  <i className="fab fa-google-play ml-1"></i>
                  Google Play
                </a>
                <a 
                  href="#"
                  className="bg-white text-primary hover:bg-gray-100 font-bold py-2 px-4 rounded-md transition duration-300 inline-flex items-center"
                >
                  <i className="fab fa-apple ml-1"></i>
                  App Store
                </a>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-primary-light/50 h-40 w-40 rounded-full flex items-center justify-center">
                <i className="fas fa-mobile-alt text-6xl text-white opacity-80"></i>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Booking;

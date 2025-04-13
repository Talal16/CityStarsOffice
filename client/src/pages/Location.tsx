import { motion } from 'framer-motion';
import { useEffect } from 'react';
import SectionTitle from '@/components/ui/section-title';

const Location = () => {
  useEffect(() => {
    document.title = "مكتب توثيق سيتي ستارز | موقع المكتب";
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="pt-8 pb-16">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="موقع المكتب"
          subtitle="معلومات تفصيلية عن موقع مكتب توثيق سيتي ستارز وكيفية الوصول إليه"
        />
        
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full h-96 bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <i className="fas fa-map-marked-alt text-5xl text-accent"></i>
              </div>
              <div className="absolute inset-0 w-full h-full object-cover opacity-30 bg-gray-300"></div>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">العنوان التفصيلي</h3>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                مول سيتي ستارز، طريق النصر، مدينة نصر، القاهرة - جمهورية مصر العربية<br/>
                الطابق الأول، بجوار المدخل الرئيسي (البوابة 2)، بالقرب من كافيه كوستا
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="font-bold text-primary mb-2 flex items-center">
                    <i className="fas fa-phone-alt ml-2 text-secondary"></i>
                    أرقام الاتصال
                  </h4>
                  <ul className="space-y-1 text-gray-700">
                    <li className="dir-ltr text-right">+20 2 24000123</li>
                    <li className="dir-ltr text-right">+20 2 24000124</li>
                    <li className="dir-ltr text-right">+20 2 24000125</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="font-bold text-primary mb-2 flex items-center">
                    <i className="fas fa-clock ml-2 text-secondary"></i>
                    مواعيد العمل
                  </h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>الأحد إلى الخميس: 9 صباحاً - 3 عصراً</li>
                    <li>الجمعة والسبت: مغلق</li>
                    <li>العطلات الرسمية: مغلق</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <motion.div
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center text-white ml-3 flex-shrink-0">
                  <i className="fas fa-subway"></i>
                </div>
                كيفية الوصول بالمواصلات العامة
              </h3>
              
              <div className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-bold text-primary-light mb-1">المترو:</h4>
                  <p>محطة مترو "ستاد القاهرة" على الخط الثالث، ثم استقلال الأتوبيس رقم 257 أو سيارة أجرة لمدة 10-15 دقيقة.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-primary-light mb-1">الأتوبيس:</h4>
                  <p>خطوط الأتوبيس أرقام 123، 257، 365 تمر بالقرب من مول سيتي ستارز مباشرة.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-primary-light mb-1">الميكروباص:</h4>
                  <p>يمكن استقلال ميكروباص مدينة نصر - رمسيس، أو العباسية - مدينة نصر، والنزول عند مول سيتي ستارز.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center text-white ml-3 flex-shrink-0">
                  <i className="fas fa-car"></i>
                </div>
                كيفية الوصول بالسيارة الخاصة
              </h3>
              
              <div className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-bold text-primary-light mb-1">من وسط البلد:</h4>
                  <p>اتجه شرقاً على طريق الأزهر، ثم اتبع طريق صلاح سالم وصولاً إلى طريق النصر، ثم ادخل يميناً عند مول سيتي ستارز.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-primary-light mb-1">من المعادي / حلوان:</h4>
                  <p>اتبع الطريق الدائري، ثم اخرج عند صلاح سالم، واستمر حتى طريق النصر، ثم اتجه يميناً عند مول سيتي ستارز.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-primary-light mb-1">موقف السيارات:</h4>
                  <p>يتوفر موقف سيارات في الطوابق الثاني والثالث والرابع من المول، مع رسوم تبدأ من 10 جنيهات للساعة.</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            className="bg-white rounded-lg shadow-md p-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
              <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center text-white ml-3 flex-shrink-0">
                <i className="fas fa-info-circle"></i>
              </div>
              معلومات إضافية
            </h3>
            
            <div className="space-y-3 text-gray-700">
              <p>
                <i className="fas fa-check-circle text-green-600 ml-2"></i>
                المكتب يقع داخل مجمع تجاري مكيف ومجهز بكافة الخدمات الأساسية
              </p>
              <p>
                <i className="fas fa-check-circle text-green-600 ml-2"></i>
                يتوفر كراسي انتظار مريحة ومكيفة داخل المكتب
              </p>
              <p>
                <i className="fas fa-check-circle text-green-600 ml-2"></i>
                يفضل الحضور قبل موعدك بـ 15 دقيقة لإتمام إجراءات التسجيل
              </p>
              <p>
                <i className="fas fa-check-circle text-green-600 ml-2"></i>
                المول يضم كافيتريات ومطاعم متنوعة لخدمة الزوار
              </p>
              <p>
                <i className="fas fa-check-circle text-green-600 ml-2"></i>
                نظام الأرقام والدور متوفر لتنظيم الخدمة داخل المكتب
              </p>
            </div>
          </motion.div>
          
          <div className="bg-primary text-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 border-r-4 border-secondary pr-3">نصائح للزيارة</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>احرص على تحديد موعد مسبق عبر بوابة مصر الرقمية لتجنب الازدحام</li>
              <li>أحضر جميع المستندات المطلوبة لتجنب تأخير المعاملة</li>
              <li>استخدم خدمة الحجز الإلكتروني للحصول على أولوية الخدمة</li>
              <li>تأكد من حالة البطاقة الشخصية وأنها سارية المفعول</li>
              <li>في حالة التوكيلات، تأكد من حضور جميع الأطراف المعنية</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;

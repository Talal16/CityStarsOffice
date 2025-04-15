import { Link } from 'wouter';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 border-r-4 border-secondary pr-3">عن المكتب</h3>
            <p className="text-gray-300 mb-4">
              مكتب توثيق سيتي ستارز هو جزء من مصلحة الشهر العقاري والتوثيق، ويعمل ضمن مبادرة مصر الرقمية 
              لتقديم خدمات التوثيق بشكل رقمي وفعال.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-white hover:text-secondary transition duration-300" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-secondary transition duration-300" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-secondary transition duration-300" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-secondary transition duration-300" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 border-r-4 border-secondary pr-3">خدماتنا</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/CityStarsOffice/services">
                  <a className="text-gray-300 hover:text-white hover:mr-1 transition-all duration-300 flex items-center">
                    <i className="fas fa-chevron-left ml-2 text-xs"></i>
                    توثيق العقود الرسمية
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/CityStarsOffice/services">
                  <a className="text-gray-300 hover:text-white hover:mr-1 transition-all duration-300 flex items-center">
                    <i className="fas fa-chevron-left ml-2 text-xs"></i>
                    إثبات التاريخ
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/CityStarsOffice/services">
                  <a className="text-gray-300 hover:text-white hover:mr-1 transition-all duration-300 flex items-center">
                    <i className="fas fa-chevron-left ml-2 text-xs"></i>
                    التصديق على التوقيعات
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/CityStarsOffice/services">
                  <a className="text-gray-300 hover:text-white hover:mr-1 transition-all duration-300 flex items-center">
                    <i className="fas fa-chevron-left ml-2 text-xs"></i>
                    توكيلات عامة وخاصة
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/CityStarsOffice/services">
                  <a className="text-gray-300 hover:text-white hover:mr-1 transition-all duration-300 flex items-center">
                    <i className="fas fa-chevron-left ml-2 text-xs"></i>
                    عرض جميع الخدمات
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 border-r-4 border-secondary pr-3">روابط هامة</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.digital.gov.eg" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white hover:mr-1 transition-all duration-300 flex items-center">
                  <i className="fas fa-chevron-left ml-2 text-xs"></i>
                  بوابة مصر الرقمية
                </a>
              </li>
              <li>
                <a href="https://www.jp.gov.eg" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white hover:mr-1 transition-all duration-300 flex items-center">
                  <i className="fas fa-chevron-left ml-2 text-xs"></i>
                  وزارة العدل
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white hover:mr-1 transition-all duration-300 flex items-center">
                  <i className="fas fa-chevron-left ml-2 text-xs"></i>
                  مصلحة الشهر العقاري
                </a>
              </li>
              <li>
                <Link href="/CityStarsOffice/legal-references">
                  <a className="text-gray-300 hover:text-white hover:mr-1 transition-all duration-300 flex items-center">
                    <i className="fas fa-chevron-left ml-2 text-xs"></i>
                    دليل الإجراءات
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/CityStarsOffice/legal-references">
                  <a className="text-gray-300 hover:text-white hover:mr-1 transition-all duration-300 flex items-center">
                    <i className="fas fa-chevron-left ml-2 text-xs"></i>
                    النماذج الإلكترونية
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 border-r-4 border-secondary pr-3">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 ml-3 text-secondary"></i>
                <span className="text-gray-300">مول سيتي ستارز، مدينة نصر، القاهرة – الطابق الأول</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt mt-1 ml-3 text-secondary"></i>
                <span className="text-gray-300 dir-ltr text-right">+20 2 24000123</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 ml-3 text-secondary"></i>
                <span className="text-gray-300">info@citystars-notary.gov.eg</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-clock mt-1 ml-3 text-secondary"></i>
                <span className="text-gray-300">الأحد - الخميس: 9 صباحاً - 3 عصراً</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">جميع الحقوق محفوظة &copy; {new Date().getFullYear()} مكتب توثيق سيتي ستارز | مصلحة الشهر العقاري والتوثيق</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

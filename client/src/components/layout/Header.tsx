import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const navigationLinks = [
    { href: '/', label: 'الرئيسية' },
    { href: '/about', label: 'عن المكتب' },
    { href: '/location', label: 'موقع المكتب' },
    { href: '/branches', label: 'فروعنا' },
    { href: '/services', label: 'الخدمات' },
    { href: '/booking', label: 'كيفية الحجز' },
    { href: '/faq', label: 'الأسئلة الشائعة' },
    { href: '/legal-references', label: 'المراجع القانونية' },
    { href: '/contact', label: 'تواصل معنا' }
  ];
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`bg-white shadow-md sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="flex items-center">
              <svg className="h-14 w-auto text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v1M12 21v1M4.2 4.2l.7.7M19.1 19.1l.7.7M2 12h1M21 12h1M4.2 19.8l.7-.7M19.1 4.9l.7-.7M12 6a6 6 0 100 12 6 6 0 000-12z" />
              </svg>
              <div className="mr-3">
                <h1 className="text-lg md:text-xl font-bold text-primary">مكتب توثيق سيتي ستارز</h1>
                <p className="text-xs md:text-sm text-gray-600">مصلحة الشهر العقاري والتوثيق</p>
              </div>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-6 space-x-reverse">
            {navigationLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a 
                  className={`
                    ${location === link.href 
                      ? 'text-primary border-primary' 
                      : 'text-gray-600 border-transparent hover:text-primary hover:border-primary'
                    } 
                    font-medium px-1 py-2 border-b-2 transition duration-300
                  `}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </nav>
          
          <button 
            className="md:hidden text-gray-500 focus:outline-none" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full left-0 right-0 z-20">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col space-y-3">
              {navigationLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a 
                    className={`
                      ${location === link.href 
                        ? 'text-primary font-medium py-2 border-r-4 border-primary pr-2' 
                        : 'text-gray-600 hover:text-primary font-medium py-2 hover:border-r-4 hover:border-primary hover:pr-2'
                      }
                      transition-all duration-200
                    `}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

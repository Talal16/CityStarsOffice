import HeroSection from '@/components/sections/HeroSection';
import AboutPreview from '@/components/sections/AboutPreview';
import ServicesPreview from '@/components/sections/ServicesPreview';
import BookingSection from '@/components/sections/BookingSection';
import FAQPreview from '@/components/sections/FAQPreview';
import ContactSection from '@/components/sections/ContactSection';
import LocationPreview from '@/components/sections/LocationPreview';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.title = "مكتب توثيق سيتي ستارز | الصفحة الرئيسية";
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <BookingSection />
      <FAQPreview />
      <ContactSection />
      <LocationPreview />
    </>
  );
};

export default Home;

import { useState } from 'react';

const NotificationBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  
  const hideNotification = () => {
    setIsVisible(false);
  };
  
  if (!isVisible) return null;
  
  return (
    <div className="bg-accent text-white text-center py-2 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <div></div> {/* Empty div for flex spacing */}
        <p className="text-sm md:text-base">
          <i className="fas fa-bell ml-2"></i>
          إعلان هام: ساعات العمل خلال شهر رمضان من 10 صباحاً حتى 2 ظهراً
          <a href="#" className="underline font-bold mr-2">المزيد</a>
        </p>
        <button 
          className="text-white focus:outline-none"
          onClick={hideNotification}
          aria-label="إغلاق الإشعار"
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  );
};

export default NotificationBar;

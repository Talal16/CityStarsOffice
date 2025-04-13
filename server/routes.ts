import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Api route for contact form submission
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, phone, message } = req.body;
      
      // Basic validation
      if (!name || !email || !phone || !message) {
        return res.status(400).json({ 
          success: false, 
          message: 'جميع الحقول مطلوبة' 
        });
      }
      
      // Email validation
      const emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          success: false, 
          message: 'البريد الإلكتروني غير صحيح' 
        });
      }
      
      // Phone validation (Egyptian mobile number)
      const phoneRegex = /^01[0-9]{9}$/;
      if (!phoneRegex.test(phone)) {
        return res.status(400).json({ 
          success: false, 
          message: 'رقم الهاتف غير صحيح' 
        });
      }
      
      // In a real application, you would save this to a database
      // For now, we'll just return a success response
      return res.status(200).json({ 
        success: true, 
        message: 'تم استلام رسالتك بنجاح، سنتواصل معك قريباً'
      });
    } catch (error) {
      console.error('Error processing contact form submission:', error);
      return res.status(500).json({ 
        success: false, 
        message: 'حدث خطأ في معالجة الطلب، يرجى المحاولة مرة أخرى'
      });
    }
  });

  // API route for newsletter subscription
  app.post('/api/newsletter', async (req, res) => {
    try {
      const { email } = req.body;
      
      // Basic validation
      if (!email) {
        return res.status(400).json({ 
          success: false, 
          message: 'البريد الإلكتروني مطلوب' 
        });
      }
      
      // Email validation
      const emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          success: false, 
          message: 'البريد الإلكتروني غير صحيح' 
        });
      }
      
      // In a real application, you would save this to a database
      // For now, we'll just return a success response
      return res.status(200).json({ 
        success: true, 
        message: 'تم الاشتراك في النشرة الإخبارية بنجاح'
      });
    } catch (error) {
      console.error('Error processing newsletter subscription:', error);
      return res.status(500).json({ 
        success: false, 
        message: 'حدث خطأ في معالجة الطلب، يرجى المحاولة مرة أخرى'
      });
    }
  });

  // API route for appointment availability
  app.get('/api/appointments/available', (req, res) => {
    const { date } = req.query;
    
    if (!date) {
      return res.status(400).json({ 
        success: false, 
        message: 'التاريخ مطلوب' 
      });
    }
    
    // Mock available time slots (in a real app this would come from a database)
    const availableSlots = [
      '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
      '12:00', '12:30', '13:00', '13:30', '14:00', '14:30'
    ];
    
    return res.status(200).json({ 
      success: true, 
      availableSlots 
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}

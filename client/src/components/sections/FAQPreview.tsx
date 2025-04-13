import { motion } from 'framer-motion';
import { Link } from 'wouter';
import SectionTitle from '../ui/section-title';
import FAQItem from '../ui/FAQItem';
import { faqs } from '@/lib/data';

const FAQPreview = () => {
  // Show only first 3 FAQs in preview
  const previewFAQs = faqs.slice(0, 3);
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="الأسئلة الشائعة"
          subtitle="إليكم إجابات على أكثر الأسئلة شيوعاً حول خدمات مكتب التوثيق"
        />

        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {previewFAQs.map((faq, index) => (
            <FAQItem 
              key={index} 
              question={faq.question} 
              answer={faq.answer}
            />
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/faq">
            <a className="inline-block bg-primary hover:bg-primary-dark text-white font-medium py-2 px-6 rounded-md transition duration-300">
              المزيد من الأسئلة الشائعة
              <i className="fas fa-arrow-left mr-2"></i>
            </a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQPreview;

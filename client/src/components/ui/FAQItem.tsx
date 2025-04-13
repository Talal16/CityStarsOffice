import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };
  
  // Function to format the answer text with proper line breaks and formatting
  const formatAnswer = (text: string) => {
    // Split by specific markers (like list items)
    const segments = text.split(/(?=: )|(?=، )/g);
    
    return (
      <div className="space-y-2">
        {segments.map((segment, index) => {
          // Check if this segment looks like a list item
          const isListItem = segment.includes(": ") || segment.includes("، ");
          
          if (isListItem) {
            return (
              <div key={index} className="flex rtl">
                <div className="ml-2 text-primary">•</div>
                <div>{segment.trim()}</div>
              </div>
            );
          }
          
          // Regular paragraph
          return <p key={index}>{segment.trim()}</p>;
        })}
      </div>
    );
  };
  
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="w-full flex justify-between items-center text-right focus:outline-none"
        onClick={toggleFAQ}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${question.substring(0, 10)}`}
      >
        <span className="font-bold text-lg text-primary">{question}</span>
        <motion.i 
          className="fas fa-chevron-down text-primary"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        ></motion.i>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            id={`faq-answer-${question.substring(0, 10)}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 text-gray-600 overflow-hidden"
          >
            {formatAnswer(answer)}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQItem;

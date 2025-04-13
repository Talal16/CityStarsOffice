import { useEffect, useState, RefObject } from 'react';

type ScrollAnimationOptions = {
  threshold?: number; // Percentage of element visible to trigger animation
  once?: boolean; // Whether to trigger animation only once
  root?: Element | null; // Viewport to check visibility against
  rootMargin?: string; // Margin around root
};

/**
 * Custom hook to detect when an element enters the viewport and apply animations
 */
export const useScrollAnimation = <T extends HTMLElement = HTMLElement>(
  elementRef: RefObject<T>,
  options: ScrollAnimationOptions = {}
): boolean => {
  const [isVisible, setIsVisible] = useState(false);
  
  const { 
    threshold = 0.1, 
    once = true,
    root = null,
    rootMargin = '0px'
  } = options;
  
  useEffect(() => {
    const element = elementRef.current;
    
    if (!element) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when element enters viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // If once is true, unobserve after first visibility
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          // If animation should repeat, update state to false when not visible
          setIsVisible(false);
        }
      },
      {
        root,
        rootMargin,
        threshold
      }
    );
    
    observer.observe(element);
    
    // Cleanup observer on unmount
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [elementRef, once, threshold, root, rootMargin]);
  
  return isVisible;
};

export default useScrollAnimation;

import { Variants } from 'framer-motion';

// Default fade-in animation
export const fadeIn: Variants = {
  initial: { 
    opacity: 0 
  },
  animate: { 
    opacity: 1,
    transition: { 
      duration: 0.5 
    }
  },
  exit: { 
    opacity: 0,
    transition: { 
      duration: 0.3 
    } 
  }
};

// Slide-up animation
export const slideUp: Variants = {
  initial: { 
    opacity: 0,
    y: 30 
  },
  animate: { 
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.5 
    }
  },
  exit: { 
    opacity: 0,
    y: 30,
    transition: { 
      duration: 0.3 
    } 
  }
};

// Slide from right (for RTL layout)
export const slideFromRight: Variants = {
  initial: { 
    opacity: 0,
    x: -30 
  },
  animate: { 
    opacity: 1,
    x: 0,
    transition: { 
      duration: 0.5 
    }
  },
  exit: { 
    opacity: 0,
    x: 30,
    transition: { 
      duration: 0.3 
    } 
  }
};

// Slide from left (for RTL layout)
export const slideFromLeft: Variants = {
  initial: { 
    opacity: 0,
    x: 30 
  },
  animate: { 
    opacity: 1,
    x: 0,
    transition: { 
      duration: 0.5 
    }
  },
  exit: { 
    opacity: 0,
    x: -30,
    transition: { 
      duration: 0.3 
    } 
  }
};

// Scale animation
export const scaleIn: Variants = {
  initial: { 
    opacity: 0,
    scale: 0.9 
  },
  animate: { 
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.5 
    }
  },
  exit: { 
    opacity: 0,
    scale: 0.9,
    transition: { 
      duration: 0.3 
    } 
  }
};

// Animations for staggered children
export const staggerContainer: Variants = {
  initial: { 
    opacity: 0 
  },
  animate: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  },
  exit: { 
    opacity: 0 
  }
};

// For staggered items
export const staggerItem: Variants = {
  initial: { 
    opacity: 0,
    y: 20 
  },
  animate: { 
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.3 
    }
  },
  exit: { 
    opacity: 0,
    y: 20
  }
};

// Card hover animation
export const cardHover = {
  rest: { 
    scale: 1,
    y: 0,
    transition: { 
      duration: 0.3, 
      ease: 'easeOut' 
    }
  },
  hover: { 
    scale: 1.02,
    y: -5,
    transition: { 
      duration: 0.3, 
      ease: 'easeOut' 
    }
  }
};

// Create animation with custom delay
export const createDelayedAnimation = (baseAnimation: Variants, delay: number): Variants => {
  return {
    ...baseAnimation,
    animate: {
      ...baseAnimation.animate,
      transition: {
        ...baseAnimation.animate?.transition,
        delay
      }
    }
  };
};

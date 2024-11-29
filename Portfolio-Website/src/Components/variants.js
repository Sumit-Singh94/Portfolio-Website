// In your variants.js or similar file
export const fadeIn = (direction = 'up', delay = 0) => {
    return {
      hidden: {
        opacity: 0,
        y: direction === 'up' ? 100 : -100, // Adjust for direction
      },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          delay: delay,
          duration: 0.5,
          ease: 'easeout',
        },
      },
    };
  };
  
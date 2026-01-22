import { useInView as useInViewObserver } from 'react-intersection-observer';

export const useInView = (options = {}) => {
  const { threshold = 0.1, triggerOnce = true, ...rest } = options;
  return useInViewObserver({ threshold, triggerOnce, ...rest });
};

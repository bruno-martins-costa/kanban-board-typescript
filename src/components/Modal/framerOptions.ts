export const framerOptions = {
  backdropAnimation: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: {
        delay: 0.05,
      },
    },
    transition: { duration: 0.2 },
  },
  modalWindowAnimation: {
    initial: { scale: 0 },
    animate: { scale: 1 },
    exit: { scale: 0 },
    transition: { duration: 0.2 },
  },
  modalContentAnimation: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: {
        delay: -1,
      },
    },
    transition: { duration: 0.5 },
  },
};

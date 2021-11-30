export const motionListItems = {
  visible: {
    delay: 0.5,
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.08,
    },
  },
  hidden: {
    delay: 0.5,
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
  exit: {
    y: -10,
    opacity: 0,
  },
}

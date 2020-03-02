export const scrollTo = ele => {
  ele.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

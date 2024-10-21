const isEscapeKey = (evt) => evt.key === 'Escape';

const scrollToStart = () => {
  window.scrollTo(0, 0);
};

export { isEscapeKey, scrollToStart };

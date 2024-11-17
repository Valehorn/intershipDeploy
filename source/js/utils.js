const isEscapeKey = (evt) => evt.code === 'Escape';

const scrollToStart = () => {
  window.scrollTo(0, 0);
};

export { isEscapeKey, scrollToStart };

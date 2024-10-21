const faqDetailsListContainer = document.querySelector('.faq__details-list');
const faqThirdItemInner = faqDetailsListContainer.querySelector('.faq__details-list-item:nth-of-type(3) .faq__details-list-marker-inner');

const openThirdItem = () => {
  faqThirdItemInner.classList.add('faq__details-list-marker-inner--active');
};

const onAccordionItemClick = (evt) => {
  const item = evt.target.closest('.faq__details-list li');
  if (!item) {
    return;
  }

  const marker = item.querySelector('.faq__details-list-marker-inner');
  const content = item.querySelector('p');

  const isActive = marker.classList.toggle('faq__details-list-marker-inner--active');
  content.style.height = isActive ? `${content.scrollHeight}px` : '0';
};

const onAccordionItemKeydown = (evt) => {
  if (evt.key === 'Enter') {
    onAccordionItemClick(evt);
  }
};

const toggleFaqAccordion = () => {
  openThirdItem();
};

faqDetailsListContainer.addEventListener('click', onAccordionItemClick);
faqDetailsListContainer.addEventListener('keydown', onAccordionItemKeydown);

export { toggleFaqAccordion };

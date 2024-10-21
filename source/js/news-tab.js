const tabsList = document.querySelector('.news__list');
const newsSections = document.querySelectorAll('.news__section');

const onTabButtonClick = (evt) => {
  const buttonTarget = evt.target.closest('.news__tab-button');
  if (!buttonTarget) {
    return;
  }

  const tabButtonActive = tabsList.querySelector('.news__tab-button--active');
  const newSectionCurrent = document.querySelector('.news__section--current');

  if (tabButtonActive) {
    tabButtonActive.classList.remove('news__tab-button--active');
  }
  if (newSectionCurrent) {
    newSectionCurrent.classList.remove('news__section--current');
  }

  buttonTarget.classList.add('news__tab-button--active');

  newsSections.forEach((section) => {
    if (section.dataset.newsTab === buttonTarget.dataset.newsTab) {
      section.classList.add('news__section--current');
    }
  });

  buttonTarget.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'center',
  });
};

const tabsToggle = () => {
  if (!tabsList) {
    return;
  }
  tabsList.addEventListener('click', onTabButtonClick);
};

export default tabsToggle;

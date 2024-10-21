const modal = document.querySelector('.modal__form');
const modalFields = modal.querySelector('.form-group__fields');
const modalSelect = modal.querySelector('.form-group__select');
const modalItemContainer = modal.querySelector('.form-group__select-item-container');
const modalItems = modal.querySelectorAll('.form-group__select-item');
const modalSelectValue = modal.querySelector('.form-group__select-value');
const modalHiddenSelectInput = modal.querySelector('.form-group__select-hidden');

const onSelectClickToggle = () => {
  if (modalFields.classList.contains('form-group__fields--open')) {
    modalFields.classList.remove('form-group__fields--open');
    modalSelect.setAttribute('aria-expanded', 'false');
    modalItems.forEach((item) => {
      item.setAttribute('tabindex', -1);
    });
    modalItemContainer.removeEventListener('click', onSelectItemClick);
    modalItemContainer.removeEventListener('keydown', onSelectItemKeydownEnter);
  } else {
    modalFields.classList.add('form-group__fields--open');
    modalSelect.setAttribute('aria-expanded', 'true');
    modalItems.forEach((item) => {
      item.setAttribute('tabindex', 0);
    });
    modalItemContainer.addEventListener('click', onSelectItemClick);
    modalItemContainer.addEventListener('keydown', onSelectItemKeydownEnter);
  }
};

function onSelectItemClick(evt) {
  if (!modalItems) {
    return;
  }
  modalSelectValue.textContent = evt.target.dataset.cityModal;
  modalHiddenSelectInput.value = modalSelectValue.textContent.trim();
  modalFields.classList.remove('form-group__fields--open');
}

function onSelectItemKeydownEnter(evt) {
  if (evt.key !== 'Enter') {
    return;
  }
  modalSelectValue.textContent = evt.target.dataset.cityModal;
  modalHiddenSelectInput.value = modalSelectValue.textContent.trim();
  modalFields.classList.remove('form-group__fields--open');
}

modalSelect.addEventListener('click', onSelectClickToggle);

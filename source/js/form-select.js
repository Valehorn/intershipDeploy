const form = document.querySelector('.form__inner');
const formFields = form.querySelector('.form-group__fields');
const formSelect = form.querySelector('.form-group__select');
const formItemContainer = form.querySelector('.form-group__select-item-container');
const formItems = form.querySelectorAll('.form-group__select-item');
const formSelectValue = form.querySelector('.form-group__select-value');
const formHiddenSelectInput = form.querySelector('.form-group__select-hidden');

const onSelectClickToggle = () => {
  if (formFields.classList.contains('form-group__fields--open')) {
    formFields.classList.remove('form-group__fields--open');
    formSelect.setAttribute('aria-expanded', 'false');
    formItems.forEach((item) => {
      item.setAttribute('tabindex', -1);
    });
    formFields.removeEventListener('keydown', onOpenSelectKeydownEsc);
    formItemContainer.removeEventListener('click', onSelectItemClick);
    formItemContainer.removeEventListener('keydown', onSelectItemKeydownEnter);
  } else {
    formFields.classList.add('form-group__fields--open');
    formSelect.setAttribute('aria-expanded', 'true');
    formItems.forEach((item) => {
      item.setAttribute('tabindex', 0);
    });
    formFields.addEventListener('keydown', onOpenSelectKeydownEsc);
    formItemContainer.addEventListener('click', onSelectItemClick);
    formItemContainer.addEventListener('keydown', onSelectItemKeydownEnter);
  }
};

function onSelectItemClick(evt) {
  if (!formItems) {
    return;
  }
  formSelectValue.textContent = evt.target.dataset.cityForm;
  formHiddenSelectInput.value = formSelectValue.textContent.trim();
  formFields.classList.remove('form-group__fields--open');
}

function onSelectItemKeydownEnter(evt) {
  if (evt.key !== 'Enter') {
    return;
  }
  formSelectValue.textContent = evt.target.dataset.cityForm;
  formHiddenSelectInput.value = formSelectValue.textContent.trim();
  formFields.classList.remove('form-group__fields--open');
}

function onOpenSelectKeydownEsc(evt) {
  if (formFields.classList.contains('form-group__fields--open') && evt.key === 'Escape') {
    formFields.classList.remove('form-group__fields--open');
  }
}


formSelect.addEventListener('click', onSelectClickToggle);

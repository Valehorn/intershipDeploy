import { onFormSubmit, onInputChange, onCheckboxFocus, onPhoneFocus, onPhoneBlur, formatPhoneNumber } from './validate';

const modal = document.querySelector('.modal');
const modalForm = modal.querySelector('.modal__form');
const nameInput = modalForm.querySelector('.form-group__input--name');
const phoneInput = modalForm.querySelector('.form-group__input--phone');
const checkboxInput = modalForm.querySelector('.form-group__input-checkbox');

modalForm.addEventListener('submit', onFormSubmit);


nameInput.addEventListener('input', () => onInputChange(nameInput));

phoneInput.addEventListener('input', () => {
  formatPhoneNumber(phoneInput);
  onInputChange(phoneInput);
});

phoneInput.addEventListener('focus', () => onPhoneFocus(phoneInput));
phoneInput.addEventListener('blur', () => onPhoneBlur(phoneInput));

checkboxInput.addEventListener('change', () => onInputChange(checkboxInput));
checkboxInput.addEventListener('focus', () => {
  checkboxInput.addEventListener('keydown', (evt) => {
    onCheckboxFocus(evt, checkboxInput);
  });
});

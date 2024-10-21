
const form = document.querySelector('.form__inner');
const modal = document.querySelector('.modal__form');
const selects = document.querySelectorAll('.form-group__select');
const [formSelect, modalSelect] = selects;

const onSelectLabelClick = (evt) => {
  if (evt.target.matches('p.form__label')) {
    formSelect.focus();
    formSelect.click();
  }

  if (evt.target.matches('p.modal__label')) {
    modalSelect.focus();
    modalSelect.click();
  }
};


form.addEventListener('click', onSelectLabelClick);
modal.addEventListener('click', onSelectLabelClick);

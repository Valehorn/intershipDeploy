import { scrollToStart } from './utils';
import { removeModalError } from './validate';

const body = document.querySelector('.page-body');
const modal = document.querySelector('.modal');
const modalForm = document.querySelector('.modal__form');
const modalButton = document.querySelector('.about__button');
const modalCloseButton = document.querySelector('.modal__button-close');
const modalFields = modal.querySelector('.form-group__fields');
const modalSelectValue = modal.querySelector('.modal__select-value');
const modalSelectInput = modal.querySelector('.form-group__select-hidden');

const openModal = (evt) => {
  if (!evt.target.closest('.about__button')) {
    return;
  }
  scrollToStart();
  body.classList.add('page-body--modal-open');
  modal.showModal();
  modal.style.display = 'flex';
  modal.style.position = 'fixed';
  document.addEventListener('click', onDocumentClick);
  document.addEventListener('keydown', onDocumentKeydownEsc);
  modalCloseButton.addEventListener('click', onModalCloseButtonClick);
};

const closeModal = () => {
  modalFields.classList.remove('form-group__fields--open');
  body.classList.remove('page-body--modal-open');
  modalSelectInput.value = '';
  modalSelectValue.textContent = modalSelectInput.value;
  removeModalError();
  modalForm.reset();
  modal.close();
  modal.style.display = 'none';
  modal.style.position = 'absolute';
  document.removeEventListener('click', onDocumentClick);
  document.removeEventListener('keydown', onDocumentKeydownEsc);
  modalCloseButton.removeEventListener('click', onModalCloseButtonClick);
};

const onModalButtonClick = (evt) => {
  openModal(evt);
};

function onModalCloseButtonClick() {
  closeModal();
}

function onDocumentKeydownEsc(evt) {
  if (evt.key === 'Escape') {
    if (modalFields.classList.contains('form-group__fields--open')) {
      modalFields.classList.remove('form-group__fields--open');
    } else {
      closeModal();
    }
  }
}

function onDocumentClick(evt) {
  if (modal.open && !evt.target.closest('.modal') && evt.target !== modalButton) {
    closeModal();
  }
}

modalButton.addEventListener('click', onModalButtonClick);

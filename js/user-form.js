import { isEscapeKey } from './util.js';

const body = document.body;
const form = document.querySelector('.img-upload__form');
const cancelButton = document.querySelector('#upload-cancel');
const imgUpload = document.querySelector('.img-upload__label');
const imgOverlay = document.querySelector('.img-upload__overlay');
const descriptionField = document.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
});

const onEscKeydown = (evt) => {
  if (isEscapeKey && descriptionField !== document.activeElement) {
    evt.preventDefault();
    hideModal();
  }
};

function hideModal () {
  form.reset();
  pristine.reset();
  imgOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeydown);
}

function showModal () {
  imgOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeydown);
}

imgUpload.addEventListener('click', () => {
  showModal();
});

cancelButton.addEventListener('click', () => {
  hideModal();
});

const onFormSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

form.addEventListener('submit', onFormSubmit);

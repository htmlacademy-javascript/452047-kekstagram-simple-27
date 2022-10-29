import { isEscapeKey, isStringValid } from './util.js';

const body = document.body;
const form = document.querySelector('.img-upload__form');
const cancelButton = form.querySelector('#upload-cancel');
const imgUpload = form.querySelector('.img-upload__label');
const imgOverlay = form.querySelector('.img-upload__overlay');
const descriptionField = form.querySelector('.text__description');
const uploadText = form.querySelector('.img-upload__text');
const uploadSubmit = form.querySelector('#upload-submit');

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
});

const onEscKeydown = (evt) => {
  if (isEscapeKey() && descriptionField !== document.activeElement) {
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

imgUpload.addEventListener('click', showModal());

cancelButton.addEventListener('click', hideModal());

const upload = descriptionField.addEventListener('input', () => {
  if (isStringValid()) {
    uploadSubmit.removeAttribute('disabled');
  }
  else {
    uploadSubmit.setAttribute('disabled', 'disabled');
  }
});

pristine.addValidator(uploadText.querySelector('.text__description'), isStringValid, 'Длина комментария должна содержать от 20 до 140 символов');

form.addEventListener('submit', (evt) => {
  upload();
  evt.preventDefault();
  pristine.validate();
});

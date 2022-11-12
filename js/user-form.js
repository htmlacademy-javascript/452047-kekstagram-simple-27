import { isEscapeKey, isStringValid } from './util.js';
import { sendData } from './api.js';
import { showSuccess, showError } from './messages.js';
import { resetScale } from './photo-scales.js';
import { resetEffects } from './photo-effects.js';

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
  resetScale();
  resetEffects();
}

imgUpload.addEventListener('click', showModal);

cancelButton.addEventListener('click', hideModal);

const blockSubmitButton = () => {
  uploadSubmit.disabled = true;
};

const unblockSubmitButton = () => {
  uploadSubmit.disabled = false;
};

pristine.addValidator(uploadText.querySelector('.text__description'), isStringValid, 'Длина комментария должна содержать от 20 до 140 символов');

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          showSuccess('Форма успешно отправлена!');
          unblockSubmitButton();
        },
        () => {
          showError('Ошибка отправки формы. Попробуйте ещё раз');
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  });
};

export { hideModal, setUserFormSubmit };

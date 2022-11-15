import { isEscapeKey } from './util.js';

const ALERT_SHOWTIME = 7000;

const templateSuccessElement = document.querySelector('#success').content.querySelector('.success');
const success = templateSuccessElement.cloneNode(true);
const successInnerElement = success.querySelector('.success__inner');
const successButtonElement = success.querySelector('.success__button');
const templateErrorElement = document.querySelector('#error').content.querySelector('.error');
const error = templateErrorElement.cloneNode(true);
const errorInnerElement = error.querySelector('.error__inner');
const errorButtonElement = error.querySelector('.error__button');

const onSuccessMessageEscKeydown = (evt) => {
  if (isEscapeKey(evt.key)) {
    evt.preventDefault();
    document.body.removeChild(success);
  }
};

const onErrorMessageEscKeydown = (evt) => {
  if (isEscapeKey(evt.key)) {
    evt.preventDefault();
    document.body.removeChild(error);
  }
};

const onSuccessMessageClickClose = (evt) => {
  const onOutSideClick = evt.composedPath().includes(successInnerElement);
  if (!onOutSideClick) {
    document.body.removeChild(success);
  }
};

const onErrorMessageClickClose = (evt) => {
  const onOutSideClick = evt.composedPath().includes(errorInnerElement);
  if (!onOutSideClick) {
    document.body.removeChild(error);
  }
};

const closeSuccessMessage = () => {
  successButtonElement.addEventListener('click', () => {
    document.body.removeChild(success);
  });
  document.addEventListener('keydown', onSuccessMessageEscKeydown);
  document.addEventListener('click', onSuccessMessageClickClose);
};

const closeErrorMessage = () => {
  errorButtonElement.addEventListener('click', () => {
    document.body.removeChild(error);
  });
  document.addEventListener('keydown', onErrorMessageEscKeydown, { once: true });
  document.addEventListener('click', onErrorMessageClickClose);
};

const showSuccess = () => {
  document.body.append(success);
  closeSuccessMessage();
};

const showError = () => {
  document.body.append(error);
  closeErrorMessage();
};

const showAlert = (message) => {
  const alert = document.createElement('div');
  alert.style.position = 'absolute';
  alert.style.padding = '15px 10px';
  alert.style.left = '0';
  alert.style.top = '0';
  alert.style.textAlign = 'center';
  alert.style.fontSize = '24px';
  alert.style.backgroundColor = '#d41d02';
  alert.style.zIndex = '20';
  alert.textContent = message;
  document.body.append(alert);

  setTimeout(alert.remove(), ALERT_SHOWTIME);
};

export { showError, showSuccess, showAlert };

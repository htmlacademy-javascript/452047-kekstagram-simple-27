import { isEscapeKey } from './util.js';

const templateSuccessElement = document.querySelector('#success').content.querySelector('.success');
const success = templateSuccessElement.cloneNode(true);
const successInnerElement = success.querySelector('.success__inner');
const successButtonElement = success.querySelector('.success__button');
const templateErrorElement = document.querySelector('#error').content.querySelector('.error');
const error = templateErrorElement.cloneNode(true);
const errorInnerElement = error.querySelector('.error__inner');
const errorButtonElement = error.querySelector('.error__button');

const ALERT_SHOWTIME = 7000;

const showSuccess = () => {
  document.body.append(success);
  closeSuccessMessage();
};

const showError = () => {
  document.body.append(error);
  closeErrorMessage();
};

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

function closeSuccessMessage () {
  successButtonElement.addEventListener('click', () => {
    document.body.removeChild(success);
  });
  document.addEventListener('keydown', onSuccessMessageEscKeydown);
  document.addEventListener('click', onSuccessMessageClickClose);
}

function closeErrorMessage () {
  errorButtonElement.addEventListener('click', () => {
    document.body.removeChild(error);
  });
  document.addEventListener('keydown', onErrorMessageEscKeydown, { once: true });
  document.addEventListener('click', onErrorMessageClickClose);
}

const showAlert = (message) => {
  const alertBlockElement = document.createElement('div');
  alertBlockElement.style.position = 'absolute';
  alertBlockElement.style.padding = '15px 10px';
  alertBlockElement.style.left = '0';
  alertBlockElement.style.top = '0';
  alertBlockElement.style.textAlign = 'center';
  alertBlockElement.style.fontSize = '24px';
  alertBlockElement.style.backgroundColor = '#ffffff';
  alertBlockElement.style.zIndex = '20';
  alertBlockElement.textContent = message;
  document.body.append(alertBlockElement);

  setTimeout(() => {
    alertBlockElement.remove();
  }, ALERT_SHOWTIME);
};

export { showError, showSuccess, showAlert };

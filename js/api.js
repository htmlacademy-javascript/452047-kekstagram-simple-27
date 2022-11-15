import { hideModal, setUserFormSubmit } from './user-form.js';
//import { showAlert } from './messages.js';

const uploadForm = document.querySelector('.img-upload__form');

const getData = (onSuccess) => {
  fetch(
    'https://27.javascript.pages.academy/kekstagram-simple/data',
    {
      method: 'GET',
      credentials: 'same-origin',
    },
  )
    .then((response) => response.json())
    .then((date) => {
      onSuccess(date);
    })
    .catch(() => {
      //showAlert('Ошибка получения данных с сервера. Попробуйте ещё раз.');
    });
};

const sendData = (onSuccess, onFail) => {
  const formData = new FormData(uploadForm);

  fetch(
    'https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body: formData,
    },
  ).then((response) => {
    if (response.ok) {
      return onSuccess();
    }
    throw new Error('Ошибка отправки формы. Попробуйте ещё раз.');
  })
    .catch((error) => {
      onFail(error.message);
    });
};

setUserFormSubmit(hideModal);

export { getData, sendData };

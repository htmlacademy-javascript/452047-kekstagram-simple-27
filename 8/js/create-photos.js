import {getRandomNumber, getRandomArrayElement} from './util.js';

// Создание массива из 25 сгенерированных объектов

const PHOTO_COUNT = 25;
const DESCRIPTIONS = [
  'Пристегнуть ремни',
  'Бесконечность не предел',
  'Назови мое имя',
  'Опять работать',
  'Газ до отказа',
  'Сделал мой день',
  'Повезло...',
  'Завалил горизонт',
  'Хороший, плохой, чудной',
  'I am Batman!',
  'Вечеринка в самом разгаре',
  'Пришла посылка',
  'После фотошопа',
  'Это шедевр!',
  'Смешное описание не придумал',
];

// Функция создания фотографий и описания

const createPhotos = () => {
  const photos = [];

  for (let index = 0; index < PHOTO_COUNT; index++) {
    photos.push({
      id: index + 1,
      url: `photos/${index + 1}.jpg`,
      description: getRandomArrayElement(DESCRIPTIONS),
      likes: getRandomNumber(15, 200),
      comments: getRandomNumber(0, 200),
    });
  }

  return photos;
};

export {createPhotos};

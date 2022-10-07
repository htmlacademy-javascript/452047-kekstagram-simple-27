// Рандомное целое число из заданного интервала

function getRandomNumber(min, max) {
  if (max <= min) {
    [min, max] = [max, min];
  }
  if (min < 0 || max < 0) {
    return NaN;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}

getRandomNumber(3, 77);

// Функция минимальной и максимальной длины строки

function isStringValid(string, minLength, maxLength) {
  return string.length >= minLength && maxLength >= string.length;
}

isStringValid('Проверочный текст комментария', 20, 140);

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

// Вернуть случайный элемент массива

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

// Функция создания фотографий и описания

const createPhotos = () => {
  const photos = [];

  for (let index = 1; index <= PHOTO_COUNT; index++) {
    photos.push({
      id: index,
      url: `photos/${index}.jpg`,
      description: getRandomArrayElement(DESCRIPTIONS),
      likes: getRandomNumber(15, 200),
      comments: getRandomNumber(0, 200),
    });
  }

  return photos;
};

createPhotos();

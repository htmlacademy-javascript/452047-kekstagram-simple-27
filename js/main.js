// Рандомное целое число из заданного интервала

function getRandomNumber(min, max) {
  if (typeof min !== 'number') { // проверка на число
    return NaN;
  }
  if (!Number.isFinite(min)) { // проверка на завершенность числа
    return NaN;
  }
  if (min < 0) { // проверка на положительное значение числа
    return NaN;
  }
  if (typeof max !== 'number') {
    return NaN;
  }
  if (!Number.isFinite(max)) {
    return NaN;
  }
  if (max < 0) {
    return NaN;
  }
  if (Math.abs(min - max) < 1) { // Проверка разницы чисел в модуле не меньше 1
    return NaN;
  }

  const safeMin = Math.min(min, max);
  const safeMax = Math.max(min, max);

  const actualMin = Math.ceil(safeMin); // Округление к ближайшему большему целому с помощью Math.ceil,
  const actualMax = Math.floor(safeMax); // Округление к ближайшему меньшему целому с помощью Math.floor,

  const result = Math.random() * (actualMax - actualMin + 1) + actualMin; // складываем дельту с мин. значением, чтобы получить итоговое случайное число.

  return Math.floor(result); // Округляем результат (т.к. Math.random генерирует дробные числа от 0 до ~1)
}

getRandomNumber(1, 3);

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

const getRandomArrayElement = (elements) => {
  if (!Array.isArray(elements)) { // Проверка на массив
    return undefined;
  }
  if (elements.length === 0) { // Проверка на присутствие длины массива
    return undefined;
  }
  if (elements.length === 1) { // Проверка на саму длину массива
    return elements[0];
  }
  return elements[getRandomNumber(0, elements.length - 1)];
};

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

createPhotos();

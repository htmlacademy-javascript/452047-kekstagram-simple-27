// Рандомное целое число из заданного интервала

function getRandomNumber(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') { // проверка на число
    return NaN;
  }
  if (!Number.isFinite(a) || !Number.isFinite(b)) { // проверка на завершенность числа
    return NaN;
  }
  if (a < 0 || b < 0) { // проверка на положительное значение числа
    return NaN;
  }
  if (Math.abs(a - b) < 1) { // Проверка разницы чисел в модуле не меньше 1
    return NaN;
  }

  const safeMin = Math.min(a, b); // Вычисляем минимальное значение из заданных чисел
  const safeMax = Math.max(a, b); // Вычисляем максимальное значение из заданных чисел

  const actualMin = Math.ceil(safeMin); // Округление к ближайшему большему целому с помощью Math.ceil,
  const actualMax = Math.floor(safeMax); // Округление к ближайшему меньшему целому с помощью Math.floor,

  const result = Math.random() * (actualMax - actualMin + 1) + actualMin; // складываем дельту с мин. значением, чтобы получить итоговое случайное число.

  return Math.floor(result); // Округляем результат (т.к. Math.random генерирует дробные числа от 0 до ~1)
}

getRandomNumber(7.7, 3.3);

// Функция минимальной и максимальной длины строки

const MIN_STRING = 20;
const MAX_STRING = 140;

function isStringValid(string) {
  return string.length >= MIN_STRING && MAX_STRING >= string.length;
}


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

const isEscapeKey = (evtKey) => evtKey === 'Escape';

export {getRandomNumber, isStringValid, getRandomArrayElement, isEscapeKey};

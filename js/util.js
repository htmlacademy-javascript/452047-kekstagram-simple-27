// Функция минимальной и максимальной длины строки

const MIN_STRING = 20;
const MAX_STRING = 140;

const isStringValid = (string) => string.length >= MIN_STRING && MAX_STRING >= string.length;

// Рандомное целое число из заданного интервала

const getRandomNumber = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN;
  }
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    return NaN;
  }
  if (a < 0 || b < 0) {
    return NaN;
  }
  if (Math.abs(a - b) < 1) {
    return NaN;
  }

  const safeMin = Math.min(a, b);
  const safeMax = Math.max(a, b);

  const actualMin = Math.ceil(safeMin);
  const actualMax = Math.floor(safeMax);

  const result = Math.random() * (actualMax - actualMin + 1) + actualMin;

  return Math.floor(result);
};

// Вернуть случайный элемент массива

const getRandomArrayElement = (elements) => {
  if (!Array.isArray(elements)) {
    return undefined;
  }
  if (elements.length === 0) {
    return undefined;
  }
  if (elements.length === 1) {
    return elements[0];
  }
  return elements[getRandomNumber(0, elements.length - 1)];
};

const isEscapeKey = (evtKey) => evtKey === 'Escape';

export { getRandomNumber, isStringValid, getRandomArrayElement, isEscapeKey };

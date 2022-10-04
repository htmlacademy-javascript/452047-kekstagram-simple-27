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

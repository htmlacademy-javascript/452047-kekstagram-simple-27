const MIN_STRING = 20;
const MAX_STRING = 140;

const isStringValid = (string) => string.length >= MIN_STRING && MAX_STRING >= string.length;

const isEscapeKey = (evtKey) => evtKey === 'Escape';

export { isStringValid, isEscapeKey };

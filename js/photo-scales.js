const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview img');

const STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

const scaleImage = (value = DEFAULT_SCALE) => {
  imagePreview.style.transform = `scale(${value / 100})`;
  scaleInput.value = `${value}%`;
};

const onSmallerButtonClick = () => {
  const currentValue = parseInt(scaleInput.value, 10);
  const newValue = currentValue - STEP;
  scaleImage(Math.max(newValue, MIN_SCALE));
};

const onBiggerButtonClick = () => {
  const currentValue = parseInt(scaleInput.value, 10);
  const newValue = currentValue + STEP;
  scaleImage(Math.min(newValue, MAX_SCALE));
};

const resetScale = () => {
  scaleImage();
};

smallerButton.addEventListener('click', onSmallerButtonClick);
biggerButton.addEventListener('click', onBiggerButtonClick);

export { resetScale };

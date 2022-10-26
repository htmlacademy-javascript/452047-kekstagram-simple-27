import {createPhotos} from './create-photos.js';

const renderPhotos = () => {
  const photoTemplate = document.querySelector('#picture').content.querySelector('.picture'); // Находим внутри шаблона элемент для фотографий

  const photos = createPhotos(); // Создаем переменную для генератора фотографий

  const photoListSection = document.querySelector('.pictures'); // Находим секцию для расположения будущих фотографий
  const photosListFragment = document.createDocumentFragment(); // Создание основы для расположения фотографий

  // Создание массива фотографий с рандомным количеством лайков и комментариев

  photos.forEach(({url, likes, comments}) => {
    const photo = photoTemplate.cloneNode(true);
    photo.querySelector('.picture__img').setAttribute('src', url);
    photo.querySelector('.picture__likes').textContent = likes;
    photo.querySelector('.picture__comments').textContent = comments;
    photosListFragment.appendChild(photo);
  });

  photoListSection.appendChild(photosListFragment); // Добавление фотографий в соответствующую секцию
};

export {renderPhotos};

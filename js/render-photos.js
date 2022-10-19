import {createPhotos} from './create-photos.js';

const renderPhotos = () => {
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture'); // Находим внутри шаблона элемент для фотографий

  const pictures = createPhotos(); // Создаем переменную для генератора фотографий

  const pictureListSection = document.querySelector('.pictures'); // Находим секцию для расположения будущих фотографий
  const picturesListFragment = document.createDocumentFragment(); // Создание основы для расположения фотографий

  // Создание массива фотографий с рандомным количеством лайков и комментариев

  pictures.forEach(({url, likes, comments}) => {
    const picture = pictureTemplate.cloneNode(true);
    picture.querySelector('.picture__img').setAttribute('src', url);
    picture.querySelector('.picture__likes').textContent = likes;
    picture.querySelector('.picture__comments').textContent = comments;
    picturesListFragment.appendChild(picture);
  });

  pictureListSection.appendChild(picturesListFragment); // Добавление фотографий в соответствующую секцию
};

export {renderPhotos};

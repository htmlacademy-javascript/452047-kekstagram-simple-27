import { createPhotos } from './create-photos.js';

const renderPhotos = () => {
  const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');

  const photos = createPhotos();

  const photoListSection = document.querySelector('.pictures');
  const photosListFragment = document.createDocumentFragment();

  // Создание массива фотографий с рандомным количеством лайков и комментариев

  photos.forEach(({url, likes, comments}) => {
    const photo = photoTemplate.cloneNode(true);
    photo.querySelector('.picture__img').setAttribute('src', url);
    photo.querySelector('.picture__likes').textContent = likes;
    photo.querySelector('.picture__comments').textContent = comments;
    photosListFragment.appendChild(photo);
  });

  photoListSection.appendChild(photosListFragment);
};

export { renderPhotos };

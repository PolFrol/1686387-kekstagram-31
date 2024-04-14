import {similarDescription} from './data';

const userPictures = document.querySelector('.pictures');
userPictures.querySelector('.pictures__title').classList.remove('visually-hidden');

const similarPhotos = similarDescription();

const pictureTemplate = document.querySelector('#picture').content;
const similarPhotoFragment = document.createDocumentFragment();

similarPhotos.forEach(({url, description, likes, comments}) => {
  const photoElement = pictureTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__img').alt = description;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__comments').textContent = comments;
  similarPhotoFragment.appendChild(photoElement);
});

userPictures.appendChild(similarPhotoFragment);


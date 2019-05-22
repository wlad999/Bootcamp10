import React from 'react';

const GalleryItem = ({ el }) => (
  <li class="gallery-item">
    <img src={el.webformatURL} alt="" />

    <div class="stats">
      <p class="stats-item">
        <i class="material-icons">likes: {el.likes}</i>
        {/* 1108 */}
      </p>
      <p class="stats-item">
        <i class="material-icons">views: {el.views}</i>
        {/* 320321 */}
      </p>
      <p class="stats-item">
        <i class="material-icons">comments: {el.comments}</i>
        {/* 129 */}
      </p>
      <p class="stats-item">
        <i class="material-icons">downloads: {el.downloads}</i>
        {/* 176019 */}
      </p>
    </div>

    {/* <!-- Кнопка для открытия модалки с большим изображением, появляется при наведении --> */}
    <button type="button" class="fullscreen-button">
      <i class="material-icons">zoom_out_map</i>
    </button>
  </li>
);

export default GalleryItem;

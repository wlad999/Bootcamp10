import React from 'react';
import styles from './GalleryItem.module.css';
const GalleryItem = ({ el, onClick }) => (
  <li className={styles['gallery-item']}>
    <img src={el.webformatURL} alt="" />

    <div className={styles['stats']}>
      <p className={styles['stats-item']}>
        <i className={styles['material-icons']}>likes: {el.likes}</i>
        {/* 1108 */}
      </p>
      <p className={styles['stats-item']}>
        <i className={styles['material-icons']}>views: {el.views}</i>
        {/* 320321 */}
      </p>
      <p className={styles['stats-item']}>
        <i className={styles['material-icons']}>comments: {el.comments}</i>
        {/* 129 */}
      </p>
      <p className={styles['stats-item']}>
        <i className={styles['material-icons']}>downloads: {el.downloads}</i>
        {/* 176019 */}
      </p>
    </div>

    {/* <!-- Кнопка для открытия модалки с большим изображением, появляется при наведении --> */}
    <button type="button" className={styles['fullscreen-button']}>
      <i className="material-icons" onClick={() => onClick(el.largeImageURL)}>
        zoom_out_map
      </i>
    </button>
  </li>
);

export default GalleryItem;

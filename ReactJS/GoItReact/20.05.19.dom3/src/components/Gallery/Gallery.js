import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import styles from './Gallery.module.css';

const Gallery = ({ data, onClick, onClose }) => (
  <>
    <ul className={styles['gallery']}>
      {data.map(el => (
        <GalleryItem el={el} onClick={onClick} />
      ))}
    </ul>
  </>
);

export default Gallery;

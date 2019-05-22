import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

const Gallery = ({ data }) => (
  <>
    <ul class="gallery">
      {data.map(el => (
        <GalleryItem el={el} />
      ))}
    </ul>
  </>
);

export default Gallery;

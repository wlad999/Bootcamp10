import React from 'react';

const BookListItem = ({ el }) => (
  <div>
    <img src={el.volumeInfo.imageLinks.smallThumbnail} alt="" />
    <div>{el.volumeInfo.title}</div>
    <div>description:{el.volumeInfo.description}</div>
    <div>authors:{el.volumeInfo.authors}</div>
    <div>publisher:{el.volumeInfo.publisher}</div>
    <div>published date:{el.volumeInfo.publishedDate}</div>
  </div>
);
export default BookListItem;

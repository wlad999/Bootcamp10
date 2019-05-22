import React from 'react';
import BookListItem from '../BookListItem/BookListItem';

const BookList = ({ data }) => (
  <div>
    {data.map(el => (
      <BookListItem el={el} />
    ))}
  </div>
);
export default BookList;

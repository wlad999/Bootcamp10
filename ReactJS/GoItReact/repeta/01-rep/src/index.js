import React from 'react';
import ReactDOM from 'react-dom';



// const image = React.createElement('img', {
//     src:
//       'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640',
//     alt: 'Tacos With Lime',
//     width: 640,
//   });   

// const title = React.createElement('h2', null, 'Tacos With Lime');
// const price = React.createElement('p', null, 'Price: 10$');
// const button = React.createElement('button', { type: 'button' }, 'Add to cart');
// const product = React.createElement('div', null, image, title, price, button);


// console.log(product);

const Product = props =>(
  <div>
    <img src='https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640' alt='Tacos With Lime' width='640' />
    <h2>Tacos With Lime</h2>
    <p>Price: 10$</p>
    <button type="button">'Add to cart</button>

  </div>
);

ReactDOM.render(<Product />, document.querySelector("#root"))

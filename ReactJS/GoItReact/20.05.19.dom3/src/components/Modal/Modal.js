import React from 'react';
import classes from './Modal.module.css';

const Modal = ({ url, closeModal }) => (
  <div className={classes.modalOverlay}>
    <div className={classes.modal}>
      <button className={classes.close} onClick={() => closeModal('')}>
        x
      </button>
      <img src={url} alt="" />
    </div>
  </div>
);

export default Modal;

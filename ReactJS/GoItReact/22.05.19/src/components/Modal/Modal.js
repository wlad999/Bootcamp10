import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import classes from './Modal.module.css';

class Modal extends Component {
  state = {
    visible: false,
  };
  handleToggle = () => {
    this.setState(state => ({ visible: !state.visible }));
  };

  render() {
    const { visible } = this.state;
    const modalClasses = [classes.modal2];
    if (visible) {
      modalClasses.push(classes.modalShow);
    }
    return (
      <div>
        <h1>Modal example</h1>
        <button onClick={this.handleToggle} type="button">
          toggle
        </button>
        <CSSTransition
          in={visible}
          timeoute={200}
          classNames={{
            enter: classes['fade-enter'],
            enterActive: classes['fade-enter-active'],
            exit: classes['fade-exit'],
            exitActive: classes['fade-exit-active'],
          }}
          unmountOnExit
        >
          <div className="modal">
            <h2>Modal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              minus nulla dolores eum! Asperiores accusantium dicta tempora
              architecto, quaerat adipisci fuga rem nostrum quasi amet at ab
              repudiandae nobis laborum!
            </p>
          </div>
        </CSSTransition>
        <div className={modalClasses.join(' ')}>
          <h2>Modal</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus minus
            nulla dolores eum! Asperiores accusantium dicta tempora architecto,
            quaerat adipisci fuga rem nostrum quasi amet at ab repudiandae nobis
            laborum!
          </p>
        </div>
      </div>
    );
  }
}
export default Modal;

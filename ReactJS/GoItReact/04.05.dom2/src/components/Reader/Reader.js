import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Publication from '../Publication/Publication';
import Counter from '../Counter/Counter';
import Controls from '../Controls/Controls';

class Reader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      items: props.items,
    };
  }

  onIncrement = () => {
    // this.setState({
    //   count: this.state.count + 1,
    // });

    /* второй вариатн записи */
    this.setState(prevState => {
      if (this.state.count < 11)
        return {
          count: prevState.count + 1,
        };
    });
  };

  onDecrement = () => {
    if (this.state.count > 0)
      this.setState(prevState => {
        return {
          count: prevState.count - 1,
        };
      });
  };

  render() {
    const { count, items } = this.state; /* деструктуризируем весь обїект */
    // const item = items[count];
    return (
      <>
        <div className="reader">
          <Publication {...items[count]} />
          <Controls
            onDecrement={this.onDecrement}
            onIncrement={this.onIncrement}
            count={count}
          />
          <Counter count={count} items={items} />
        </div>
      </>
    );
  }
}
Reader.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
};

export default Reader;

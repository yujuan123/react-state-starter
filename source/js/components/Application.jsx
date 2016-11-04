import React from 'react';

let Application = React.createClass({
  getInitialState: function () {
    return {
      showOptions: false
    };
  },

  render: function () {
    let options;
    if (this.state.showOptions) {
      options = (
          <ul className="options">
            <li>apple</li>
            <li>banana</li>
            <li>pear</li>
          </ul>
      )
    }
    return (
        <div className="dropdown" onClick={this.handleClick}>
            <button>Choose a fruit</button>{options}
        </div>
    )
  },
  handleClick: function () {
    this.setState({
      showOptions: true
    });
  }

});

export default Application;

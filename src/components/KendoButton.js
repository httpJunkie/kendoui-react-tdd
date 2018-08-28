import React, { Component } from 'react';
import { Button } from '@progress/kendo-react-buttons';
import './KendoButton.css';

class KendoButton extends Component {
  render() {
    return (
      <Button value={this.props.city} onClick={this.props.handleClick}>
        {this.props.city}
      </Button>
    );
  }
}

export default KendoButton;
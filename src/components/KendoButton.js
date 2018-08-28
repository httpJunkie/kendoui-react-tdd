import React, { Component } from 'react';
import { Button } from '@progress/kendo-react-buttons';
import './KendoButton.css';

class KendoButton extends Component {
  render() {
    return (
      <Button icon="folder" value={this.props.city} onClick={this.props.handleClick}>
        {this.props.city ? this.props.city : "All cities"}
      </Button>
    );
  }
}

export default KendoButton;
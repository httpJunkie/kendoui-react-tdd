import React,{Component} from 'react';
import './Button.css';

class Button extends Component {
    render() {
        return (
          <button value={this.props.city} onClick={this.props.handleClick} className="city-button">
            {this.props.city ? this.props.city : "All cities"}
          </button>
      );
    }
}

export default Button;
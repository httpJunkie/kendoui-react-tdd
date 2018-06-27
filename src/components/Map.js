import React, { Component } from 'react';
import './Map.css';

class Map extends Component {
  render() {
    let imagePath = 'images/' + (
      (this.props.imagename)
        ? this.props.imagename
        : 'none.png'
    );
    return (<div className="MapBox">
      <img src={imagePath} alt={this.props.city} />
    </div>);
  }
}

export default Map;
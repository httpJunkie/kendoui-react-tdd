import React, { Component } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Map from '../components/Map';
import mapChooser from '../mapChooser';
import axios from 'axios';

class MyLocations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMap: 'none.png',
      locations: []
    };
    this.chooseMap = this.chooseMap.bind(this);
  }

  async componentDidMount() {
    let response = await axios.get('http://localhost:3000/data/locations.json');
    this.setState({
      locations: response.data.locations
    })
  }

  chooseMap(e) {
    this.setState({ currentMap: mapChooser(e.target.value) });
  }

  render() {
    let locationsLived = this.state.locations.map((location, id) => {
      return (<Button handleClick={this.chooseMap} key={id} city={location.city} />)
    });

    return (
      <div>
        <Header />
        <div>
          {locationsLived}
        </div>
        <Map imagename={this.state.currentMap} location={this.props.location} />
      </div>
    );
  }
}

export default MyLocations;
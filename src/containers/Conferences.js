import React, { Component } from 'react';
import Header from '../components/Header';
import KendoButton from '../components/KendoButton';
import ImageFrame from '../components/ImageFrame';
import mapChooser from '../mapChooser';
import axios from 'axios';

class Conferences extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMap: 'none.png',
      conferences: []
    };
    this.chooseMap = this.chooseMap.bind(this);
  }

  async componentDidMount() {
    let response = await axios.get('http://localhost:3000/data/conferences.json');
    this.setState({
      conferences: response.data.conferences
    })
  }

  chooseMap(e) {
    this.setState({ currentMap: mapChooser(e.target.value) });
  }

  render() {
    let kendoButtonList = this.state.conferences.map((conference, id) => {
      return (<KendoButton handleClick={this.chooseMap} key={id} city={conference.city} />)
    });

    return (
      <div>
        <Header />
        <div>
          {kendoButtonList}
        </div>
        <ImageFrame imagename={this.state.currentMap} conference={this.props.conference} />
      </div>
    );
  }
}

export default Conferences;
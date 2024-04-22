import axios from 'axios';
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import SWDetails from './SWDetails.js';

class SWList extends Component {
  state = {
    swlist: [] // Initialize smart watch list as an empty array
  };

  componentDidMount() {
    axios
      .get('https://my-json-server.typicode.com/Suhani8787/mobile/smartwatches')
      .then(response => {
        // Check if response.data is an array before setting the state
        if (Array.isArray(response.data)) {
          this.setState({ swlist: response.data });
        } else {
          console.error("Data received from API is not an array");
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }

  renderList = () => {
    return this.state.swlist.map((sw, index) => (
      <SWDetails key={index} sw={sw} />
    ));
  };

  render() {
    console.log(this.state);
    return <ScrollView>{this.renderList()}</ScrollView>;
  }
}

export default SWList;

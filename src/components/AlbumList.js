import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';


class AlbumList extends Component {
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => console.log(response));
    // console.log('whatsup'); // cmd-d then "remote JS debugging" and look in the console of the new browser window
    // debugger;
  }

  render() {
    return (
      <View>
        <Text>Album List</Text>
      </View>
    );
  };
};

export default AlbumList;
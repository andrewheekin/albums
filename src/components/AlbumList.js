import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';


class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
    // console.log('whatsup'); // cmd-d then "remote JS debugging" and look in the console of the new browser window
    // debugger;
  }

  renderAlbums() {
    return this.state.albums.map(album => <Text>{album.title}</Text>);
  }

  render() {
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  };
};

export default AlbumList;
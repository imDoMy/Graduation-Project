import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail ';

class AlbumList extends Component {
  state = { albums: [
    {"category":"  مطعم   ","restaurant_name":"  كودو   ","image":"https://i.imgur.com/92M1FRP.png","rateing_image":"https://i.imgur.com/XfmfiiG.png"},
    {"category":"  مطعم   ","restaurant_name":"  هرفي   ","image":"https://i.imgur.com/RDzU3uX.jpg","rateing_image":"https://i.imgur.com/XfmfiiG.png"},
    {"category":"  مطعم   ","restaurant_name":"  دمونيوز بيتزا   ","image":"https://i.imgur.com/XZaznKT.jpg","rateing_image":"https://i.imgur.com/RJWnSRB.png"},
    {"category":"  كوفي   ","restaurant_name":"  دانكن دونتس   ","image":"https://i.imgur.com/YxDaALg.jpg","rateing_image":"https://i.imgur.com/PY3EbCZ.png"},
    {"category":"  مطعم   ","restaurant_name":"  ستيك هاوس   ","image":"https://i.imgur.com/irR5ats.jpg","rateing_image":"https://i.imgur.com/vfZDHL8.png"}] };


  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.restaurant_name} album={album}  />
    );
  }

  render() {
    console.log(this.state);

    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;

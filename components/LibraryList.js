// import React, { Component } from 'react';
// import { ListView } from 'react-native';
// import { connect } from 'react-redux';
// import ListItem from './ListItem';
//
// class LibraryList extends Component {
//   componentWillMount() {
//     const ds = new ListView.DataSource({
//       rowHasChanged: (r1, r2) => r1 !== r2
//     });
//
//     this.dataSource = ds.cloneWithRows(this.props.libraries);
//   }
//
//   renderRow(library) {
//     return <ListItem library={library} />;
//   }
//
//   render() {
//
//     return (
//       <ListView
//         dataSource={this.dataSource}
//         renderRow={this.renderRow}
//       />
//     );
//   }
// }
//
// const mapStateToProps = state => {
//   return { libraries: state.libraries };
// };
//
// export default connect(mapStateToProps)(LibraryList);
//




import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, View, Image } from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component {
  renderRow = library => {
    // console.log(library);
    return <ListItem library={library.item} />;
  };

render() {
    return (
      <View>
      <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg' }} />

      <FlatList
        data={this.props.libraries}
        renderItem={this.renderRow}
        // keyExtractor={library => library.id}
      />
      </View>
    );
  }
}

const mapStateToProps = ({ libraries }) => {
  return { libraries };
};

export default connect(mapStateToProps)(LibraryList);

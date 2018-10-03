import React, { Component } from 'react';
import {
   Text,
    TouchableWithoutFeedback,
    TouchableOpacity,
     View,
      LayoutAnimation,
      UIManager,
      Image,
      TextInput,
      ScrollView
     } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { CardSection, Card, Button } from './common';
import * as actions from '../actions';

class Business extends Component {


render() {
  const { buttonStyle, textStyle } = styles;

  return (
    <ScrollView>
    <Card>
    <View
    style={{ borderBottomWidth: 1,
      padding: 5,
      // marginTop: 2,
      // backgroundColor: '#E0F8F8',

      backgroundColor: '#E0F8F8',
      justifyContent: 'center',
      flexDirection: 'row',
      borderColor: '#ddd',
      postion: 'relative' }} >
         <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg' }} />
      </View>

      <View
      style={{ borderBottomWidth: 1,
        padding: 5,
        // marginTop: 2,
        // backgroundColor: '#E0F8F8',

        backgroundColor: '#E0F8F8',
        justifyContent: 'center',
        flexDirection: 'row',
        borderColor: '#ddd',
        postion: 'relative' }} >
      <Image style={{ width: 100, height: 20, paddingLeft: 5 }} source={{ uri: 'https://emdoesbookreviews.files.wordpress.com/2014/12/five-stars.png' }} />
      </View>

      <CardSection>
<Text> Description: </Text>
<View style={{ paddingTop: 10, paddingBottom: 10,  paddingLeft: 5 }}>

  <Text style={{ width: 250 }}> elrigheiruhveilruuil
  kfjlrflrjk
  elfkhlehflejkjrnjerkngekjrngkjen kejkejhrkefeefefefefefef efefe elrigheiruhvei
  lruuil
  kfjlrflrjk
  elfkhlehflejkjrnjerkngekjrngkjen kejkejhrkefeefefefefefef efefe
  </Text>
  </View>
      </CardSection>

      <CardSection>
<Text> Contact information: </Text>
      </CardSection>

      <CardSection >
      <View style={{ marginTop: 10, marginBottom: 10 }}>
 <Text > write review: </Text>
 <View style={{ paddingTop: 5 }}>
 <TextInput
    multiline={true}
    numberOfLines = {4}
    placeHolder='Message'
    backgroundColor='white'
    style={{ height: 100, width: 350 }}
/>
</View>
 </View>

      </CardSection>

      <CardSection>
      <TouchableOpacity style={buttonStyle} onPress={() => Actions.reviews()}>
 <Text style={textStyle}> press here to see all the Reviews </Text>
      </TouchableOpacity>
      </CardSection>

    </Card>
    <View style={{ marginBottom: 100 }} />

   </ScrollView>

  );
}
}

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

// const mapStateToProps = (state) => {
//   return {
//     selectedLibraryId: state.selectedLibraryId,
//    };
export default (Business);

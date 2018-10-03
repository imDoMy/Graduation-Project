import React, { Component } from 'react';
import {
   Text,
    TouchableWithoutFeedback,
     View,
      LayoutAnimation,
      UIManager
     } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
componentWillUpdate() {
  LayoutAnimation.easeInEaseOut();
  UIManager.setLayoutAnimationEnabledExperimental
  && UIManager.setLayoutAnimationEnabledExperimental(true);
}
renderDescreption() {
  const { description, id, re } = this.props.library;
// const { expanded } = this.props;
const { selectedLibraryId, oldId } = this.props;
// function chaaF() {
// return (this.props.change(-1));
// }
// function chaa() {
// return (this.props.change(id));
// }
  if (selectedLibraryId === id) {
    return (
    <CardSection>
    <CardSection style={{ flex: 1 }}> re.map(
      (re) => <Text > {re} </Text>
    ) </CardSection>
    </CardSection>
  );
  }
}

render() {
  const { titleStyle } = styles;
  const { id, title } = this.props.library;
  return (
    <TouchableWithoutFeedback
    onPress={() => this.props.selectLibrary(id)}
    >
      <View style={{ marginTop: 5 }}>
        <CardSection style={{paddingTop: 5,paddingBottom: 5}}>
          <Text style={titleStyle}>
            {title}
          </Text>
        </CardSection>
        { this.renderDescreption()}
      </View>
    </TouchableWithoutFeedback>
);
}
}

const styles = {
  titleStyle: {
    fontSize: 20,
    paddingLeft: 15
  }
};

const mapStateToProps = (state) => {
  return {
    selectedLibraryId: state.selectedLibraryId,
    oldId: state.oldId
   };

  // return { isExpanded: expanded }; // this is same as the upper
};

export default connect(mapStateToProps, actions)(ListItem);

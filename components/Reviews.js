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
import { CardSection, Card, Button } from './common';
import * as actions from '../actions';

class Reviews extends Component {

render() {
  return (
    <ScrollView>
    <Card>
      <View
style={{ borderBottomWidth: 1,
      padding: 5,


      backgroundColor: '#E0F8F8',
      justifyContent: 'space-between',
      flexDirection: 'row',
      borderColor: '#ddd',
      postion: 'relative',
     }}
      >
      <Image style={{ width: 100, height: 20, paddingLeft: 5 }} source={{ uri: 'https://emdoesbookreviews.files.wordpress.com/2014/12/five-stars.png' }} />
        <Text style={{ paddingRight: 5 }} > سلمان </Text>

      </View>

      <View style={{
            padding: 5,


            backgroundColor: '#E0F8F8',
            borderColor: '#ddd',
            postion: 'relative',
            flexDirection: 'row',
             justifyContent: 'flex-end' }}>
      <Text> التقييم: </Text>
      </View>




<View
style={{ paddingTop: 10,
paddingBottom: 10,
paddingRight: 60,
  backgroundColor: '#E0F8F8',
  borderColor: '#ddd',
  postion: 'relative',
  flexDirection: 'row',
   justifyContent: 'flex-end'
  }}>

  <Text style={{ width: 250, textAlign: 'right' }}>
   تنبع أهميّة هذا اليوم الوطني في تذكيرِ الأجيال الجديدة بكافة الإنجازات التي قام بها مَن سبقوهم، والحرص على غرس القيم الحضارية في نفوس الأجيال الشابة للسير قدماً على الخطى نفسها، وتقديم أفضل صورة عن بلدهم في كافّة المحافل الدوليّة، ونشر الوعي حول ضرورة الح
  </Text>
  </View>
    </Card>


    <Card>
      <View
style={{ borderBottomWidth: 1,
      padding: 5,


      backgroundColor: '#E0F8F8',
      justifyContent: 'space-between',
      flexDirection: 'row',
      borderColor: '#ddd',
      postion: 'relative',
     }}
      >
      <Image style={{ width: 100, height: 20, paddingLeft: 5 }} source={{ uri: 'https://emdoesbookreviews.files.wordpress.com/2014/12/five-stars.png' }} />
        <Text style={{ paddingRight: 5 }} > فهد </Text>

      </View>

      <View style={{
            padding: 5,


            backgroundColor: '#E0F8F8',
            borderColor: '#ddd',
            postion: 'relative',
            flexDirection: 'row',
             justifyContent: 'flex-end' }}>
      <Text> التقييم: </Text>
      </View>




<View
style={{ paddingTop: 10,
paddingBottom: 10,
paddingRight: 60,
  backgroundColor: '#E0F8F8',
  borderColor: '#ddd',
  postion: 'relative',
  flexDirection: 'row',
   justifyContent: 'flex-end'
  }}
>

  <Text style={{ width: 250, textAlign: 'right'  }}> حياااكم الله على قل الكلافة وصراحة اعجبني
  وقالي يبتيبنيابنتيا
ثيمتناثنتياثم

وقالي يبتيبنيابنتيا
ثيمتناثنتياثم
وقالي يبتيبنيابنتيا
ثيمتناثنتياثم
  </Text>
  </View>
    </Card>
   </ScrollView>

  );
}
}



// const mapStateToProps = (state) => {
//   return {
//     selectedLibraryId: state.selectedLibraryId,
//    };
export default (Reviews);

import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import AlbumList from './components/salman/AlbumList';
import Business from './components/Business';
import Reviews from './components/Reviews';


 const RouterComponent = () => {

   return (

     <Router>
      <Scene key='root'>
        <Scene key='business' component={AlbumList} title='Businesse' />
        <Scene key='businessInner' component={Business} title='Businesse detiles' />
        <Scene key='reviews' component={Reviews} title='Reviews' />

      </Scene>
     </Router>

   );
 }

 export default RouterComponent;

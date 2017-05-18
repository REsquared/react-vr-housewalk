import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton
} from 'react-vr';
import {observable, toJS} from 'mobx';
import {observer} from 'mobx-react';

import global_store from './lib/store.js';

const App = 
observer(class react_vr_housewalk extends React.Component {
  render() {
    const {index, button_positions} = global_store;
    console.log(button_positions[index]);
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <VrButton 
          onClick={() => {
            global_store.index = index ? 0 : 1
          }}
          style={{
            transform : [ {translate : toJS(button_positions[index])}, {rotateX: 90} ],
            borderRadius: 2.5,
            backgroundColor: 'black',
            height: 5,
            width: 5
          }}
        >
        </VrButton>
      </View>
    );
  }
});;

AppRegistry.registerComponent('react_vr_housewalk', () => App);

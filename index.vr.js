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
    const {index, button_positions, current_position} = global_store;
    const renderPositions = button_positions.map((position, idx) => {
      return (
        <VrButton
          key={idx}
          style={{
            transform : [  {translate : toJS(position)}, {rotateX: 90} ],
            borderRadius: 2.5,
            backgroundColor: 'black',
            height: 5,
            width: 5,
            position: 'absolute'
          }}
        >
        </VrButton>
      )
    })
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        {renderPositions}
      </View>
    );
  }
});;

AppRegistry.registerComponent('react_vr_housewalk', () => App);

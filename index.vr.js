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
      const pos = toJS(position.pos);
      pos[0] -= current_position.pos[0];
      pos[2] -= current_position.pos[2];
      return (
        <VrButton
          key={idx}
          onClick={(e) => {
            const id = e.target - 6;
            const new_position = button_positions[id];
            global_store.current_position = new_position;
          }}
          style={{
            transform : [  {translate : pos}, {rotateX: 90} ],
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
        <Pano source={asset(current_position.photo)}/>
        {renderPositions}
      </View>
    );
  }
});;

AppRegistry.registerComponent('react_vr_housewalk', () => App);

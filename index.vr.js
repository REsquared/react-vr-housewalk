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
            const id = e.target - 8;
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
    });
    return (
      <View>
        <Pano
          source={asset(current_position.photo)}
          onLoad={() => global_store.loaded_pano = true}
        />
        {
          !global_store.loaded_pano ? 
          (
            <Text
              style={{
                backgroundColor: '#777879',
                fontSize: 0.8,
                fontWeight: '400',
                layoutOrigin: [0.5, 0.5],
                paddingLeft: 0.2,
                paddingRight: 0.2,
                textAlign: 'center',
                textAlignVertical: 'center',
                transform: [{translate: [0, 0, -3]}],
              }}>
              Loading
            </Text>
          )
          : null
        }
        {renderPositions}
      </View>
    );
  }
});;

AppRegistry.registerComponent('react_vr_housewalk', () => App);

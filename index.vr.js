import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton
} from 'react-vr';

export default class react_vr_housewalk extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <VrButton 
          style={{
            transform : [ {translate : [10, -10, -10]}, {rotateX: 90} ],
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
};

AppRegistry.registerComponent('react_vr_housewalk', () => react_vr_housewalk);

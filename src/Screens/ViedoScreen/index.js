import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './style';
import Video from 'react-native-video';
export default function ViedoScreen() {
  return (
    <View style={styles.container}>
      <Video
        source={{
          uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
        style={styles.video}
      />
    </View>
  );
}

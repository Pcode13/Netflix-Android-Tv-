import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';

export default function Splash() {
  const [focued, setfocued] = useState(-1);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Profile</Text>
      <View style={styles.profileView}>
        <TouchableOpacity
          onFocus={() => {
            setfocued(0);
          }}
          style={[
            styles.profilebtn,
            {borderWidth: focued == 0 ? 3 : 0, borderColor: '#ffffff'},
          ]}
          onPress={() => {
            navigation.navigate('Main');
          }}>
          <Image
            source={require('../../Images/User.png')}
            style={styles.profileImg}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onFocus={() => {
            setfocued(1);
          }}
          onPress={() => navigation.navigate('Main')}
          style={[
            styles.profilebtn,
            {borderWidth: focued == 1 ? 3 : 0, borderColor: '#ffffff'},
          ]}>
          <Image
            source={require('../../Images/User.png')}
            style={styles.profileImg}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onFocus={() => {
            setfocued(2);
          }}
          style={[
            styles.profilebtn,
            {borderWidth: focued == 2 ? 3 : 0, borderColor: '#ffffff'},
          ]}>
          <Image
            source={require('../../Images/add3.png')}
            style={[styles.profileImg, {width: 70, height: 70}]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

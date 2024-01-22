import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {styles} from './style';
import {VLCPlayer, VlCPlayerView} from 'react-native-vlc-media-player';
import Video from 'react-native-video';
import {useNavigation} from '@react-navigation/native';

export default function Main() {
  const [isTransferal, setisTransfernt] = useState(true);
  const [recentIndex, setisReactIndex] = useState(-1);
  const [treadingIndex, setTreadingIndex] = useState(-1);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView
        onScroll={e => {
          const Y = e.nativeEvent.contentOffset.y;
          if (Y > 100) {
            setisTransfernt(false);
          } else {
            setisTransfernt(true);
          }
        }}>
        <View style={styles.video}>
          <Video
            repeat={true}
            source={{
              uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            }}
            muted={true}
            style={styles.video}
          />
          <View style={styles.transfterView}>
            <Text style={styles.moreHeader}>{'Big Bank Bunny'}</Text>
            <Text style={styles.moreDetails}>
              {
                'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form '
              }
            </Text>
            <View style={styles.bannerbtnView}>
              <TouchableOpacity style={styles.playBtn}>
                <Image
                  source={require('../../Images/play.webp')}
                  style={styles.iconBtn}
                />
                <Text style={styles.play}>Play</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.moreInfoBtn}>
                <Image
                  source={require('../../Images/info.png')}
                  style={[styles.iconBtn, {tintColor: 'white'}]}
                />
                <Text style={[styles.play, {color: 'white'}]}>More Info</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.listingView}>
          <Text style={styles.headerTxt}>Recently Added</Text>
          <FlatList
            data={'1,1,1,1,1'}
            horizontal
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  activeOpacity={1}
                  onFocus={() => {
                    setisReactIndex(index);
                  }}
                  onPress={() => navigation.navigate('VideoScreen')}
                  style={[
                    styles.recentItem,
                    {
                      marginLeft: (index = 0 ? 0 : 20),
                      borderWidth: recentIndex == index ? 4 : 0,
                      borderColor: 'white',
                    },
                  ]}>
                  <Image
                    style={styles.recentItem}
                    source={require('../../Images/moive.jpeg')}
                  />
                </TouchableOpacity>
              );
            }}
          />

          <Text style={[styles.headerTxt, {marginTop: 30, marginBottom: 20}]}>
            Treading Now
          </Text>
          <FlatList
            data={'1,1,1,1,1'}
            horizontal
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onFocus={() => {
                    setTreadingIndex(index);
                  }}
                  style={[
                    styles.recentItem,
                    {
                      marginLeft: (index = 0 ? 0 : 20),
                      borderWidth: treadingIndex == index ? 4 : 0,
                      borderColor: 'white',
                    },
                  ]}>
                  <Image
                    style={styles.recentItem}
                    source={require('../../Images/moive.jpeg')}
                  />
                </TouchableOpacity>
              );
            }}
          />

          <Text style={[styles.headerTxt, {marginTop: 30, marginBottom: 20}]}>
            Family comedies
          </Text>
          <FlatList
            data={'1,1,1,1,1'}
            horizontal
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={[
                    styles.recentItem,
                    {marginLeft: (index = 0 ? 0 : 20)},
                  ]}>
                  <Image
                    style={styles.recentItem}
                    source={require('../../Images/moive.jpeg')}
                  />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ScrollView>
      <View
        style={[
          styles.header,
          {backgroundColor: isTransferal ? 'transparent' : 'rgba(0,0,0,1)'},
        ]}>
        <View style={styles.headerLeftView}>
          <Image source={require('../../Images/lo2.png')} style={styles.logo} />

          <TouchableOpacity style={styles.menuTab}>
            <Text style={styles.tabTxt}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuTab}>
            <Text style={styles.tabTxt}>TV Shows</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuTab}>
            <Text style={styles.tabTxt}>Moives</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuTab}>
            <Text style={styles.tabTxt}>New & Popular</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuTab}>
            <Text style={styles.tabTxt}>My List</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuTab}>
            <Text style={styles.tabTxt}>browser by Language</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.headerRightView}>
          <TouchableOpacity style={styles.menuTab}>
            <Image
              source={require('../../Images/serach1.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuTab}>
            <Image
              source={require('../../Images/notify.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuTab}>
            <Image
              source={require('../../Images/User.png')}
              style={styles.usericon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

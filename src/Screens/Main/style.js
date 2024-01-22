import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.80)',
  },
  header: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,1)',
    position: 'absolute',
    top: 0,
  },
  headerLeftView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerRightView: {
    flexDirection: 'row',
    alignItems: 'center',
    resizeMode: 'contain',
  },
  logo: {
    width: 90,
    height: 20,
    marginLeft: 10,
  },
  menuTab: {
    height: '100%',
    marginLeft: 20,
  },
  tabTxt: {
    color: '#ffffff',
    fontSize: 12,
  },
  icon: {
    height: 25,
    width: 25,
  },
  usericon: {
    height: 30,
    width: 30,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  video: {
    width: '100%',
    height: 500,
  },
  transfterView: {
    width: '100%',
    position: 'absolute',
    top: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    height: '100%',
    justifyContent: 'center',
  },
  moreHeader: {
    fontSize: 30,
    color: '#ffffff',

    marginLeft: 30,
    marginTop: 100,
    width: '40%',
  },
  moreDetails: {
    fontSize: 16,
    color: '#ffffff',
    fontStyle: 'italic',
    marginLeft: 30,
    marginTop: 10,
    width: '40%',
  },
  bannerbtnView: {
    flexDirection: 'row',
    marginLeft: 30,
    marginTop: 20,
  },
  playBtn: {
    width: 100,
    height: 40,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  play: {
    color: '#000000',
    fontSize: 15,
    fontWeight: '600',
    marginLeft: 10,
  },
  iconBtn: {
    height: 25,
    width: 22,
  },
  moreInfoBtn: {
    width: 120,
    height: 40,
    backgroundColor: '#9e9e9e',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 20,
  },
  listingView: {
    width: '90%',
    alignSelf: 'center',
  },
  headerTxt: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: -80,
  },
  recentItem: {
    width: 180,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
});

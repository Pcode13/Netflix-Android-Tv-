import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.80)',
  },
  title: {
    color: 'rgba(255,255,255,255)',
    fontSize: 30,
    alignSelf: 'center',
    marginTop: 100,
  },
  profileImg: {
    width: '100%',
    height: '100%',
  },
  profileView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  profilebtn: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

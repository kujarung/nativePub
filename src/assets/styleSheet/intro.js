import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

const intro = StyleSheet.create({
  mainBackImg: {
    width,
    height,
    position: 'absolute',
    top: 0,
  },
  textPosition: {
    marginTop: '35%',
  },
  bottomCard: {
    paddingTop: 35,
    paddingBottom: 35,
    paddingLeft: 30,
    paddingRight: 30,
    left: 20,
    width: width - 40,
    borderRadius: 5,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.27,
    shadowRadius: 1.65,
    elevation: 8,
    position: 'absolute',
    bottom: 91,
    height: height - 150,
  },
  innerBottomText: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  innerPercent: {
    textAlign: 'center',
    width: 150,
    position: 'absolute',
    top: 90,
    left: '50%',
    transform: [{translateX: -40}],
  },
  percentTxt: {
    fontSize: 56,
    lineHeight: 70,
    fontWeight: 'bold',
  },
});

export default intro;

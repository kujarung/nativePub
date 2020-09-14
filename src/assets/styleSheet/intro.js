import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const intro = StyleSheet.create({
  mainBackImg: {
    width, 
    height,
    position:'absolute', 
    top:0,
  },
  textPosition: {
    marginTop: '35%'
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
  },
  innerBottomText: {
    position: 'absolute',
    bottom:35,
    left: 30
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
  }
})

export default intro;

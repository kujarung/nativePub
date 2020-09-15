import {StyleSheet, Dimensions} from 'react-native';
import color from './color';
const {width, height} = Dimensions.get('window');

const daily = StyleSheet.create({
  labelWrap: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  labelContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  labelFont: {
    color: color.primary,
    fontSize: 14,
  },
  bottomBack: {
    backgroundColor: color.likeWhite,
    paddingVertical: 15,
  },
  listWrap: {
    borderRadius: 20,
    marginBottom: 20,
  },
  innerImage: {
    width: 100,
    height: 80,
    borderRadius: 3,
    marginRight: 9,
  },

  innerCard: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    marginTop: 10,
    marginBottom: 5,
  },
  topDesc: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  levelTxt: {
    borderRadius: 15,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 3,
    paddingTop: 3,
    borderWidth: 1,
    borderColor: color.borderGray,
  },
  horizalCardContainer: {
    width: 200,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  titleCon: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  percentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 45,
    height: 30,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: color.borderGray,
  },
  innerTxtCon: {
    position: 'absolute',
    bottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  linearGradient: {
    height: 320,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  imageSize: {
    width: '100%',
    height: 320,
  },
  imageSizeLong: {
    width: '100%',
    height: 540,
  },
  linearGradientLong: {
    height: 540,
  },
});

export default daily;

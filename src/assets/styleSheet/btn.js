import {Dimensions, StyleSheet} from 'react-native';
import color from './color';
const {width, height} = Dimensions.get('window');

const btn = StyleSheet.create({
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    height: 44,
  },
  borderPrimaryBtn: {
    marginTop: 50,
    borderWidth: 1,
    borderColor: color.primary,
    backgroundColor: 'white',
  },
  backgroundPrimaryBtn: {
    backgroundColor: color.primary,
  },
  btnFont: {
    fontSize: 18,
  },
  btnFontPrimary: {
    color: color.primary,
  },
  btnFontWhite: {
    color: 'white',
  },
  leftBtnImg: {
    position: 'absolute',
    left: 32,
  },
  backgruondNaverBtn: {
    backgroundColor: color.naverGreen,
  },
  backgruondKakaoBtn: {
    backgroundColor: color.kakaoYellow,
  },
  backgruondFbBtn: {
    backgroundColor: color.fbBlue,
  },
  backgruondGoogleBtn: {
    backgroundColor: 'white',
    borderColor: '#F0F0F0',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.27,
    shadowRadius: 1.65,
    elevation: 3,
  },
  bottomBtnCon: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    width: width - 40,
  },
  bottomBtnConLong: {
    position: 'absolute',
    bottom: 80,
    left: 20,
    width: width - 40,
  },
  anserBtnBorder: {
    borderColor: color.borderGray,
    borderWidth: 1,
    height: 44,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.27,
    shadowRadius: 1.65,
    elevation: 13,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  anserBtnBorderSelect: {
    borderColor: color.primary,
    borderWidth: 1,
    height: 44,
    borderRadius: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 16,
    paddingBottom: 10,
    paddingRight: 16,
    borderColor: color.borderGray,
    borderWidth: 1,
    borderRadius: 20,
    height: 40,
  },
});

export default btn;

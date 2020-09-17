import {StyleSheet, Dimensions} from 'react-native';
import color from './color';
const {width, height} = Dimensions.get('window');

const common = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  stackWidthContainer: {
    width,
    height: height - 60,
    backgroundColor: 'white',
  },
  fullHeight: {
    height,
  },
  fullWidth: {
    width,
  },
  Xcenter: {
    justifyContent: 'center',
  },
  Ycenter: {
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
  },
  XYcenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Xeq: {
    justifyContent: 'space-between',
  },
  Xaround: {
    justifyContent: 'space-around',
  },
  h2: {
    fontSize: 40,
    lineHeight: 46,
    fontFamily: 'NotoSansCJKkr-Bold',
    fontWeight: 'bold',
  },
  h2Samll: {
    fontSize: 36,
    lineHeight: 42,
  },
  h3: {
    fontSize: 26,
    lineHeight: 32,
    fontWeight: 'bold',
    fontFamily: 'NotoSansCJKkr-Bold',
  },
  h4: {
    fontSize: 24,
    fontFamily: 'NotoSansCJKkr-Bold',
    fontWeight: '100',
  },
  h4Small: {
    fontSize: 22,
    lineHeight: 28,
  },
  h5: {
    fontSize: 20,
    lineHeight: 24,
    fontFamily: 'NotoSansCJKkr-Regular',
  },
  h6: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'NotoSansCJKkr-Regular',
  },
  h7: {
    fontSize: 12,
    lineHeight: 18,
    fontFamily: 'NotoSansCJKkr-Regular',
  },
  fontBold: {
    fontFamily: 'NotoSansCJKkr-Bold',
    fontWeight: '800',
  },
  fontBlack: {
    fontFamily: 'NotoSansCJKkr-Black',
    fontWeight: '800',
  },
  fontAvenir: {
    fontFamily: 'Avenir-Book',
  },
  fontAvenirBold: {
    fontFamily: 'Avenir-Bold',
  },
  fontThin: {
    fontFamily: 'NotoSansCJKkr-Thin',
    fontWeight: '200',
  },
  textCenter: {
    textAlign: 'center',
  },
  primaryEmasis: {
    color: color.primary,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: color.primary,
  },
  checkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 17,
  },
  checkImage: {
    width: 16,
    height: 16,
    marginRight: 13,
  },
  checkTxt: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
  },
  uncheckedTxt: {
    fontSize: 12,
    color: color.checkGray,
  },
  primarySmallLine: {
    width: 30,
    height: 3,
    backgroundColor: color.primary,
    bottom: -10,
  },
  iconSize: {
    width: 20,
    height: 20,
  },
  iconBig: {
    width: 16,
    height: 16,
  },
  restIcon: {
    width: 17,
    height: 15,
  },
  backBtnContainer: {
    left: 20,
    position: 'absolute',
  },
  percentTxt: {
    fontSize: 56,
    fontWeight: 'bold',
  },
  textBox: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.27,
    shadowRadius: 1.65,
    elevation: 13,
  },
  contentCon: {
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default common;

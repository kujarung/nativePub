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
    fontFamily: 'NotoSansMonoCJKkr-Bold',
    fontWeight: 'bold',
  },
  h2Samll: {
    fontSize: 36,
    fontFamily: 'NotoSansMonoCJKkr-Bold',
    fontWeight: 'bold',
  },
  h3: {
    fontSize: 26,
    fontWeight: 'bold',
    fontFamily: 'NotoSansMonoCJKkr-Bold',
  },
  h4: {
    fontSize: 24,
    fontFamily: 'NotoSansCJKkr-Thin',
    fontWeight: '100',
  },
  h5: {
    fontSize: 20,
    lineHeight: 24,
    fontFamily: 'NotoSansCJKkr-Regular',
  },
  h6: {
    fontSize: 14,
    fontFamily: 'NotoSansCJKkr-Regular',
  },
  h7: {
    fontSize: 12,
    fontFamily: 'NotoSansCJKkr-Regular',
  },
  fontBold: {
    fontFamily: 'NotoSansMonoCJKkr-Bold',
    fontWeight: 'bold',
  },
  fontAvenir: {
    fontFamily: 'Avenir',
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
    width: 24,
    height: 24,
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
    shadowRadius: 4.65,
    elevation: 6,
  },
  contentCon: {
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default common;

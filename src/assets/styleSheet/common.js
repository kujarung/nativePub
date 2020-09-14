import { StyleSheet, Dimensions } from 'react-native';
import color from './color';
const { width, height } = Dimensions.get('window');

const common = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  stackWidthContainer: {
    width,
    height: height - 90,
    backgroundColor: '#FDFDFD',
  },
  fullHeight: {
    height
  },
  fullWidth: {
    width
  },
  Xcenter: {
    justifyContent: 'center',
  },
  Ycenter: {
    alignItems: 'center',
  },
  XYcenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Xeq: {
    justifyContent: 'space-between',
  },
  h2: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  h2Samll: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  h3: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  h4: {
    fontSize: 24
  },
  h5: {
    fontSize: 20,
    lineHeight: 24
  },
  h6: {
    fontSize: 14,
    lineHeight: 25,
  },
  h7: {
    fontSize: 12,
  },
  fontBold: {
    fontWeight: '700',
  },
  fontThin: {
    fontWeight: '200'
  },
  textCenter: {
    textAlign: 'center',
  },
  primaryEmasis: {
    color: color.primary,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: color.primary
  },
  checkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 17
  },
  checkImage: {
    width: 16,
    height: 16,
    marginRight: 13
  },
  checkTxt: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black'
  },
  uncheckedTxt: {
    fontSize: 12,
    color: color.checkGray,
  },
  primarySmallLine: {
    width: 30,
    height: 3,
    backgroundColor: color.primary,
    bottom: -10
  },
  iconSize: {
    width: 20,
    height: 20
  },
  restIcon: {
    width: 17,
    height: 14,
  },
  backBtnContainer: {
    left: 20,
    position: 'absolute'
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 16,    
  },
  contentCon: {
    paddingLeft: 20,
    paddingRight: 20
  }
})


export default common;
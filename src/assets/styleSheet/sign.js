import { StyleSheet, Dimensions } from 'react-native';
import color from './color';
const { width, height } = Dimensions.get('window');

const sign = StyleSheet.create({
  logStyleCon: {
    width: 150,
    height: 150,
    backgroundColor: color.primary,
    left: '50%',
    transform: [{translateX: -75}],
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 70,
  },
  bttomContainer: {
    left: 20,
    width: width - 40    
  },
  popupContainer: {
    paddingRight:0, 
    paddingLeft: 10, 
    paddingTop: 40,
  },
  resultContainer: {
    height,
    paddingTop: '20%',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'white'
  },
  avatarImage: {
    width: 130,
    height: 130,
    borderRadius: 150,
  },
  avatarCenter: {
    left: '50%',
    transform: [{translateX: -65}],
  },
})

export default sign
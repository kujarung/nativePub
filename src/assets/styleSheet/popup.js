import { StyleSheet, Dimensions } from 'react-native';
import color from './color';
const { width, height } = Dimensions.get('window');

const popup = StyleSheet.create({
  popupContainer: {
    paddingRight:0, 
    paddingLeft: 10, 
    paddingTop: 40,
  },
})

export default popup